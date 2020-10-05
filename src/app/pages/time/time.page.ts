import { Component } from '@angular/core';
import { TimesheetStatus } from '../../models/timsheet_status';
import { Project } from 'src/app/models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/models/client_service';
import { Package } from 'src/app/models/package';
import { ToDurationPipe } from 'src/app/pipes/to-duration.pipe';
import { DatePipe } from '@angular/common';
import { ToastController, AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage {

  private isUpdate = false
  public selectedDate = Date()
  public selectedProjectText = null;
  public selectedPackageText = null;
  public selectedDuration = 1

  public availablePackages: Package[] = []

  public newTimesheet = {
    id: null,
    user_id: null,
    status_id: null,
    client_service_id: null,
    text: null,
    allowable_bill: false,
    // charge: null,
    contact_id: null,
    // sub_contact_id: null,
    pr_project_id: null,
    pr_package_id: null,
    //pr_milestone_id: null,
    tracking: {
      "type": "duration",
      "date": "2020-01-01",
      "duration": "01:00"
    }
  }

  public projects: Project[] = []
  public clientServices: ClientService[] = []
  public timesheetStatus: TimesheetStatus[] = []

  constructor(
    private apiService: ApiService,
    // private authService: AuthService,
    private toastCtrl: ToastController,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    this.init()
  }


  private async init() {
    let user = await this.apiService.getUser()
    this.newTimesheet.user_id = user.id
    
    this.projects = await this.apiService.getProjects()
    this.clientServices = await this.apiService.getClientService()
    this.timesheetStatus = await this.apiService.getTimesheetStatus()
    this.route.paramMap.subscribe(async params => {
      if (params.get('project_id')) {
        this.newTimesheet.pr_project_id = parseInt(params.get('project_id'))
      }
      if (params.get('package_id')) {
        this.newTimesheet.pr_package_id = parseInt(params.get('package_id'))
      }

      if (params.get('time_id')) {
        this.isUpdate = true
        try {
          const timesheet = await this.apiService.getTimesheet(parseInt(params.get('time_id')))
          this.newTimesheet.id = timesheet.id
          this.newTimesheet.user_id = timesheet.user_id
          this.newTimesheet.status_id = timesheet.status_id
          this.newTimesheet.client_service_id = timesheet.client_service_id
          this.newTimesheet.text = timesheet.text
          this.newTimesheet.allowable_bill = timesheet.allowable_bill
          this.newTimesheet.contact_id = timesheet.contact_id
          this.newTimesheet.pr_project_id = timesheet.pr_project_id
          this.newTimesheet.pr_package_id = timesheet.pr_package_id
          this.newTimesheet.tracking = timesheet.tracking
          this.selectedDate = timesheet.tracking.date
          const duration = timesheet.tracking.duration.split(':')
          this.selectedDuration = parseInt(duration[0]) + (parseInt(duration[1]) / 60)
        } catch (e) {
          console.error('error', e)
        }
      }
      this.updateSelectTexts()
    })
  }

  private async updateSelectTexts() {
    // set project
    const filteredProjects = this.projects.filter(i => i.id == this.newTimesheet.pr_project_id)
    if (filteredProjects.length > 0) {
      this.selectedProjectText = filteredProjects[0].name
      this.newTimesheet.contact_id = filteredProjects[0].contact_id
      this.selectedPackageText = (await this.apiService.getPackageForProjectWithId(this.newTimesheet.pr_project_id, this.newTimesheet.pr_package_id)).name
    }
  }

  async onProjectSelected() {
    this.availablePackages = await this.apiService.getPackagesForProject(this.newTimesheet.pr_project_id)
  }

  onClientServiceSelected() {
    localStorage.setItem('client_service_id', JSON.stringify(this.newTimesheet.client_service_id))
  }

  onStatusSelected() {
    localStorage.setItem('status_id', JSON.stringify(this.newTimesheet.status_id))
  }

  save() {
    if (this.isUpdate) {
      this.update()
    } else {
      this.create()
    }
  }

  async validateTime() {
    if (
      !this.newTimesheet.client_service_id ||
      !this.newTimesheet.status_id ||
      !this.newTimesheet.text ||
      this.newTimesheet.text.length < 1) {
      let toast = await this.toastCtrl.create({
        message: 'Missing information',
        duration: 3000,
        position: 'top'
      });
      toast.present()
      return false;
    }
    this.newTimesheet.tracking.duration = new ToDurationPipe().transform(this.selectedDuration)
    this.newTimesheet.tracking.date = new DatePipe('en-US').transform(this.selectedDate, 'yyyy-MM-dd');
    return true
  }

  async update() {
    if (!this.validateTime()) return

    console.log(this.newTimesheet)
    delete this.newTimesheet.tracking.type
    this.apiService.putTimesheet(this.newTimesheet).then(async response => {
      let toast = await this.toastCtrl.create({
        message: 'Updated',
        duration: 3000,
        position: 'top'
      });
      toast.present()
      this.router.navigateByUrl('/', { skipLocationChange: true });
    }).catch(async reason => {
      let toast = await this.toastCtrl.create({
        message: 'Failed: ' + reason.message,
        duration: 3000,
        position: 'top'
      });
      toast.present()
    })
  }


  async create() {
    if (!this.validateTime()) return

    delete this.newTimesheet.id
    this.apiService.postTimesheet(this.newTimesheet).then(async response => {
      let toast = await this.toastCtrl.create({
        message: 'Created',
        duration: 3000,
        position: 'top'
      });
      toast.present()
      this.router.navigateByUrl('/', { skipLocationChange: true });
    }).catch(async reason => {
      let toast = await this.toastCtrl.create({
        message: 'Failed: ' + reason.message,
        duration: 3000,
        position: 'top'
      });
      toast.present()
    })
  }

  async delete() {
    const alert = await this.alertController.create({
      header: 'Delete time entry',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Delete',
          cssClass: 'danger',
          handler: async () => {
            await this.apiService.deleteTimesheet(this.newTimesheet)
            let toast = await this.toastController.create({
              message: 'Deleted',
              duration: 3000,
              position: 'top'
            });
            toast.present()
            this.router.navigateByUrl('/tabs/times')
          }
        }
      ]
    });
    await alert.present();
  }
}