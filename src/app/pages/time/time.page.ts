import { Component, OnInit } from '@angular/core';
import { TimesheetStatus } from '../../models/timsheet_status';
import { Project } from 'src/app/models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/models/client_service';
import { Package } from 'src/app/models/package';
import { ToDurationPipe } from 'src/app/pipes/to-duration.pipe';
import { DatePipe } from '@angular/common';
import { ToastController, AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Timesheet } from 'src/app/models/timesheet';

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

  private today = new Date()

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
      "date": this.today.getFullYear() + '-' + this.pad((this.today.getMonth() + 1), 2) + '-' + this.pad(this.today.getDate(), 2),
      "duration": "01:00"
    }
  }

  public projects: Project[] = []
  public clientServices: ClientService[] = []
  public timesheetStatus: TimesheetStatus[] = []

  constructor(
    private apiService: ApiService,
    private toastCtrl: ToastController,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController,
    private translateService: TranslateService
  ) {
    this.init()
  }


  pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  private async init() {
    let user = await this.apiService.getUser()
    this.newTimesheet.user_id = user.id

    this.projects = await this.apiService.getProjects()
    this.clientServices = await this.apiService.getClientService()
    this.timesheetStatus = await this.apiService.getTimesheetStatus()

    let lastUsedService = parseInt(localStorage.getItem('lastUsedService'))
    if(!isNaN(lastUsedService) && lastUsedService != -2){
      this.newTimesheet.client_service_id = parseInt(localStorage.getItem('lastUsedServiceId'))
    }

    let lastUsedStatus = parseInt(localStorage.getItem('lastUsedStatus'))
    if(!isNaN(lastUsedStatus) && lastUsedStatus != -2){
      this.newTimesheet.status_id = parseInt(localStorage.getItem('lastUsedStatusId'))
    }

    let lastUsedProject = parseInt(localStorage.getItem('lastUsedProject'))
    if(!isNaN(lastUsedProject) && lastUsedProject != -2){
      this.newTimesheet.pr_project_id = parseInt(localStorage.getItem('lastUsedProjectId'))
      this.availablePackages = await this.apiService.getPackagesForProject(this.newTimesheet.pr_project_id)
    }

    this.route.params.subscribe(async params => {
      if (this.router.url.startsWith('/create-time-stopwatch')) {
        if (params['seconds']) {
          let seconds = parseInt(params['seconds'])
          var hours = Math.floor(seconds / 60 / 60);
          var minutes = Math.floor(seconds / 60) - (hours * 60);
          this.selectedDuration = hours + (minutes / 60)
          this.newTimesheet.tracking.duration = new ToDurationPipe().transform(this.selectedDuration)
        }
      } else {
        if (params['project_id']) {
          this.newTimesheet.pr_project_id = parseInt(params['project_id'])
          this.availablePackages = await this.apiService.getPackagesForProject(this.newTimesheet.pr_project_id)
        }
        if (params['package_id']) {
          this.newTimesheet.pr_package_id = parseInt(params['package_id'])
        }

        if (params['time_id']) {
          this.isUpdate = true
          try {
            const timesheet = await this.apiService.getTimesheet(parseInt(params['time_id']))
            this.newTimesheet.id = timesheet.id
            this.newTimesheet.user_id = timesheet.user_id
            this.newTimesheet.status_id = timesheet.status_id
            this.newTimesheet.client_service_id = timesheet.client_service_id
            this.newTimesheet.text = timesheet.text
            this.newTimesheet.allowable_bill = timesheet.allowable_bill
            this.newTimesheet.contact_id = timesheet.contact_id
            this.newTimesheet.pr_project_id = timesheet.pr_project_id
            this.newTimesheet.pr_package_id = timesheet.pr_package_id
            this.newTimesheet.tracking = {
              type: "duration",
              date: timesheet.date,
              duration: timesheet.duration
            }
            this.selectedDate = timesheet.date
            const duration = timesheet.duration.split(':')
            this.selectedDuration = parseInt(duration[0]) + (parseInt(duration[1]) / 60)
            this.availablePackages = await this.apiService.getPackagesForProject(this.newTimesheet.pr_project_id)
          } catch (e) {
            console.error('error', e)
          }
        }
        this.updateSelectTexts()
      }
    })

  }

  private async updateSelectTexts() {
    // set project
    const filteredProjects = this.projects.filter(i => i.id == this.newTimesheet.pr_project_id)
    if (filteredProjects.length > 0) {
      this.selectedProjectText = filteredProjects[0].name
      this.newTimesheet.contact_id = filteredProjects[0].contact_id
      if (this.newTimesheet.pr_package_id) {
        this.selectedPackageText = (await this.apiService.getPackageForProjectWithId(this.newTimesheet.pr_project_id, this.newTimesheet.pr_package_id)).name
      }
    }
  }

  async onProjectSelected() {
    this.availablePackages = await this.apiService.getPackagesForProject(this.newTimesheet.pr_project_id)
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
        message: await this.translateService.get('Missing information').toPromise(),
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

  storeLastUsed(timesheet: Timesheet){
    if(localStorage.getItem('lastUsedService') == null){
      // data was not initialized
      localStorage.setItem('lastUsedService', '-1')
      localStorage.setItem('lastUsedStatus', '-1')
      localStorage.setItem('lastUsedProject', '-2')
    }
    if(localStorage.getItem('lastUsedService') === '-1') localStorage.setItem('lastUsedServiceId', timesheet.client_service_id + '')
    if(localStorage.getItem('lastUsedStatus') === '-1') localStorage.setItem('lastUsedStatusId', timesheet.status_id + '')
    if(localStorage.getItem('lastUsedProject') === '-1') localStorage.setItem('lastUsedProjectId', timesheet.pr_project_id + '')
  }

  async update() {
    if (!this.validateTime()) return
    delete this.newTimesheet.tracking.type
    this.apiService.putTimesheet(this.newTimesheet).then(async response => {
      this.storeLastUsed(response)
      let toast = await this.toastCtrl.create({
        message: await this.translateService.get('Updated').toPromise(),
        duration: 3000,
        position: 'top'
      });
      toast.present()
      this.router.navigateByUrl('tabs', { skipLocationChange: true });
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
      this.storeLastUsed(response)
      let toast = await this.toastCtrl.create({
        message: 'Created',
        duration: 3000,
        position: 'top'
      });
      toast.present()
      this.router.navigateByUrl('tabs', { skipLocationChange: true });
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
