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

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage {

  private today = new Date()
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
      "date": this.today.getFullYear() + '-' + this.utils.pad((this.today.getMonth() + 1)) + '-' + this.utils.pad(this.today.getDate()),
      "duration": "01:00"
    }
  }

  public projects: Project[] = []
  public clientServices: ClientService[] = []
  public timesheetStatus: TimesheetStatus[] = []

  public steps = 1

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService,
    private utils: UtilsService
  ) {
    this.init()
  }

  private async init() {
    let user = await this.apiService.getUser()
    this.newTimesheet.user_id = user.id

    this.projects = await this.apiService.getProjects()
    this.clientServices = await this.apiService.getClientService()
    this.timesheetStatus = await this.apiService.getTimesheetStatus()

    // Load default duration
    this.newTimesheet.tracking.duration = new ToDurationPipe(this.utils).transform(this.storage.getNumber(STORAGE.SETTINGS_DURATION, DEFAULTS.DURATION))
    this.selectedDuration = await this.storage.getNumber(STORAGE.SETTINGS_DURATION, DEFAULTS.DURATION)

    // Load steps
    this.steps = await this.storage.getNumber(STORAGE.SETTINGS_STEPS, DEFAULTS.STEPS) / 60

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_SERVICE, DEFAULTS.SERVICE_ID) != TYPES.NONE) {
      this.newTimesheet.client_service_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_SERVICE_ID)
    }

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_STATUS, DEFAULTS.STATUS_ID) != TYPES.NONE) {
      this.newTimesheet.status_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_STATUS_ID)
    }

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_PROJECT, DEFAULTS.PROJECT_ID) != TYPES.NONE) {
      this.newTimesheet.pr_project_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_PROJECT_ID)
      this.availablePackages = await this.apiService.getPackagesForProject(this.newTimesheet.pr_project_id)
    }

    this.route.params.subscribe(async params => {
      if (this.router.url.startsWith('/create-time-stopwatch')) {
        if (params['seconds']) {
          let seconds = parseInt(params['seconds'])
          var hours = Math.floor(seconds / 60 / 60);
          var minutes = Math.floor(seconds / 60) - (hours * 60);
          this.selectedDuration = hours + (minutes / 60)
          this.newTimesheet.tracking.duration = new ToDurationPipe(this.utils).transform(this.selectedDuration)
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
            this.selectedDuration = this.utils.parseDuration(timesheet.duration)
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
      this.utils.showToast('Missing information')
      return false;
    }
    this.newTimesheet.tracking.duration = new ToDurationPipe(this.utils).transform(this.selectedDuration)
    this.newTimesheet.tracking.date = new DatePipe('en-US').transform(this.selectedDate, 'yyyy-MM-dd');
    return true
  }

  async storeLastUsed(timesheet: Timesheet) {
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_PROJECT, DEFAULTS.PROJECT_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_PROJECT_ID, timesheet.pr_project_id)
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_STATUS, DEFAULTS.STATUS_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_STATUS_ID, timesheet.status_id)
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_SERVICE, DEFAULTS.SERVICE_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_SERVICE_ID, timesheet.client_service_id)
  }

  async update() {
    if (!this.validateTime()) return
    delete this.newTimesheet.tracking.type
    this.apiService.putTimesheet(this.newTimesheet).then(async response => {
      this.storeLastUsed(response)
      this.utils.showToast('Updated')
      this.router.navigateByUrl('tabs', { skipLocationChange: true });
    }).catch(async reason => {
      this.utils.showToast('Failed: ' + reason.message)
    })
  }


  async create() {
    if (!this.validateTime()) return
    delete this.newTimesheet.id
    this.apiService.postTimesheet(this.newTimesheet).then(async response => {
      this.storeLastUsed(response)
      this.utils.showToast('Created')
      this.router.navigateByUrl('tabs', { skipLocationChange: true });
    }).catch(async reason => {
      this.utils.showToast('Failed: ' + reason.message)
    })
  }

  async delete() {
    if(await this.utils.confirm('Delete time entry', 'Are you sure?')){
      await this.apiService.deleteTimesheet(this.newTimesheet)
      this.utils.showToast('Deleted')
      this.router.navigateByUrl('/tabs/times')
    } 
  }
}
