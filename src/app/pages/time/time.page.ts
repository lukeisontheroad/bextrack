import { Component, OnInit } from '@angular/core';
import { TimesheetStatus } from '../../models/timsheet_status';
import { Project } from 'src/app/models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/models/client_service';
import { Package } from 'src/app/models/package';
import { ToDurationPipe } from 'src/app/pipes/to-duration.pipe';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';
import { Timesheet } from 'src/app/models/timesheet';
import { DEFAULTS, STORAGE, TYPES } from 'src/app/models/constants';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CalendarModal } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage {

  private today = new Date()
  public isUpdate = false

  public selectedDates = [new Date()]
  public selectedProjectText = null;
  public selectedPackageText = null;
  public selectedDuration = 1
  public availablePackages: Package[] = []
  public timesheet = new Timesheet()
  public projects: Project[] = []
  public clientServices: ClientService[] = []
  public timesheetStatus: TimesheetStatus[] = []

  public steps = 1


  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService,
    private utils: UtilsService,
    private translateService: TranslateService,
    private modalContoller: ModalController
  ) {
    this.init()
  }

  private async init() {
    let user = await this.apiService.getUser()
    this.timesheet.user_id = user.id
    this.timesheet.allowable_bill = false
    this.timesheet.tracking = {
      "type": "duration",
      "date": this.today.getFullYear() + '-' + this.utils.pad((this.today.getMonth() + 1)) + '-' + this.utils.pad(this.today.getDate()),
      "duration": new ToDurationPipe(this.utils).transform(this.storage.getNumber(STORAGE.SETTINGS_DURATION, DEFAULTS.DURATION))
    }

    this.projects = await this.apiService.getProjects()
    this.clientServices = await this.apiService.getClientService()
    this.timesheetStatus = await this.apiService.getTimesheetStatus()
    // Load default duration
    this.selectedDuration = await this.storage.getNumber(STORAGE.SETTINGS_DURATION, DEFAULTS.DURATION)

    // Load steps
    this.steps = await this.storage.getNumber(STORAGE.SETTINGS_STEPS, DEFAULTS.STEPS) / 60

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_SERVICE, DEFAULTS.SERVICE_ID) != TYPES.NONE) {
      this.timesheet.client_service_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_SERVICE_ID)
    }

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_STATUS, DEFAULTS.STATUS_ID) != TYPES.NONE) {
      this.timesheet.status_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_STATUS_ID)
    }

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_PROJECT, DEFAULTS.PROJECT_ID) != TYPES.NONE) {
      this.timesheet.pr_project_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_PROJECT_ID)
      this.availablePackages = await this.apiService.getPackagesForProject(this.timesheet.pr_project_id)
    }

    this.route.params.subscribe(async params => {
      if (this.router.url.startsWith('/create-time-stopwatch')) {
        if (params['seconds']) {
          let seconds = parseInt(params['seconds'])
          var hours = Math.floor(seconds / 60 / 60);
          var minutes = Math.floor(seconds / 60) - (hours * 60);
          this.selectedDuration = hours + (minutes / 60)
          this.timesheet.tracking.duration = new ToDurationPipe(this.utils).transform(this.selectedDuration)
        }
      } else {
        if (params['project_id']) {
          this.timesheet.pr_project_id = parseInt(params['project_id'])
          this.availablePackages = await this.apiService.getPackagesForProject(this.timesheet.pr_project_id)
        }
        if (params['package_id']) {
          this.timesheet.pr_package_id = parseInt(params['package_id'])
        }

        if (params['time_id']) {
          this.isUpdate = true
          try {
            this.timesheet = await this.apiService.getTimesheet(parseInt(params['time_id']))
            this.selectedDates = [new Date(this.timesheet.date)]
            this.selectedDuration = this.utils.parseDuration(this.timesheet.duration)
            this.availablePackages = await this.apiService.getPackagesForProject(this.timesheet.pr_project_id)
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
    const filteredProjects = this.projects.filter(i => i.id == this.timesheet.pr_project_id)
    if (filteredProjects.length > 0) {
      this.selectedProjectText = filteredProjects[0].name
      this.timesheet.contact_id = filteredProjects[0].contact_id
      if (this.timesheet.pr_package_id) {
        this.selectedPackageText = (await this.apiService.getPackageForProjectWithId(this.timesheet.pr_project_id, this.timesheet.pr_package_id)).name
      }
    }
  }

  async onProjectSelected() {
    this.availablePackages = await this.apiService.getPackagesForProject(this.timesheet.pr_project_id)
    this.updateSelectTexts()
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
      !this.timesheet.client_service_id ||
      !this.timesheet.status_id ||
      !this.timesheet.text ||
      this.timesheet.text.length < 1) {
      this.utils.showToast('Missing information')
      return false;
    }
    this.timesheet.tracking.duration = new ToDurationPipe(this.utils).transform(this.selectedDuration)
    this.timesheet.tracking.date = this.selectedDuration[0] // new DatePipe('en-US').transform(this.selectedDate, 'yyyy-MM-dd');
    return true
  }

  async storeLastUsed(timesheet: Timesheet) {
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_PROJECT, DEFAULTS.PROJECT_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_PROJECT_ID, timesheet.pr_project_id)
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_STATUS, DEFAULTS.STATUS_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_STATUS_ID, timesheet.status_id)
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_SERVICE, DEFAULTS.SERVICE_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_SERVICE_ID, timesheet.client_service_id)
  }

  async update() {
    if (!this.validateTime()) return
    this.apiService.putTimesheet(this.timesheet).then(async response => {
      this.storeLastUsed(response)
      this.utils.showToast('Updated')
      this.router.navigateByUrl('tabs', { skipLocationChange: true });
    }).catch(async reason => {
      this.utils.showToast('Failed: ' + reason.message)
    })
  }

  async openCalendar() {
    const options = {
      from: new Date('2018-01-01'),
      defaultScrollTo: new Date(),
      pickMode: 'multi',
      title: await this.translateService.get('Select date(s)').toPromise(),
      color: 'primary',
      weekStart: 1,
      defaultDates: this.selectedDates
    };
    const calendar = await this.modalContoller.create({
      component: CalendarModal,
      componentProps: { options }
    });
    calendar.present();
    const event: any = await calendar.onDidDismiss();
    let dates = []
    for (var i = 0; i < event.data.length; i++) {
      dates.push(event.data[i].dateObj)
    }
    this.selectedDates = dates
  }


  async create() {
    if (!this.validateTime()) return
    let timesheets = []
    let promises = []
    for (var i = 0; i < this.selectedDates.length; i++) {
      let timesheet = JSON.parse(JSON.stringify(this.timesheet)) as Timesheet
      timesheet.tracking.date = new DatePipe('en-US').transform(this.selectedDates[i], 'yyyy-MM-dd');
      timesheets.push(timesheet)
    }

    promises.push(...timesheets.map(timesheet => this.apiService.postTimesheet(timesheet)))
    Promise.all(promises).then(async (values) => {
      this.storeLastUsed(this.timesheet)
      this.utils.showToast('Created')
      this.router.navigateByUrl('tabs', { skipLocationChange: true });
    }).catch(async reason => {
      this.utils.showToast('Failed: ' + reason.message)
    })
  }

  async delete() {
    if (await this.utils.confirm('Delete time entry', 'Are you sure?')) {
      await this.apiService.deleteTimesheet(this.timesheet.id)
      this.utils.showToast('Deleted')
      this.router.navigateByUrl('/tabs/times')
    }
  }
}
