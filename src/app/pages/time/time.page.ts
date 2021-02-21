import { Component } from '@angular/core';
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
import { IonicSelectableComponent } from 'ionic-selectable';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { StopwatchesService } from 'src/app/services/stopwatches/stopwatches.service';
import { Stopwatch } from 'src/app/models/stopwatch';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage {

  private today = new Date()
  private datePipe = new DatePipe('en-US')
  public isUpdate = false
  public isSaving = false

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

  public contact: Contact = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService,
    private utils: UtilsService,
    private translateService: TranslateService,
    private modalContoller: ModalController,
    private stopwatchesService: StopwatchesService
  ) {
    this.init()
  }

  private contactSearch: Observable<Contact[]> = null // = this.apiService.searchContact()

  private async init() {
    let user = await this.apiService.getUser()
    this.timesheet.user_id = user.id
    this.timesheet.allowable_bill = false
    this.projects = await this.apiService.getProjects()
    this.clientServices = await this.apiService.getClientService()
    this.timesheetStatus = await this.apiService.getTimesheetStatus()
    this.timesheet.tracking = this.utils.prepareTracking(this.timesheet.tracking)

    // Load default duration
    let defaultDuration = await this.storage.getNumber(STORAGE.SETTINGS_DURATION, DEFAULTS.DURATION)
    this.selectedDuration = defaultDuration
    let endDate = new Date(this.timesheet.tracking.start)
    endDate.setMinutes(endDate.getMinutes() + defaultDuration * 60);
    this.timesheet.tracking.end = endDate.toISOString()
    this.timesheet.tracking.duration = new ToDurationPipe().transform(defaultDuration)
    
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
      if (params['stopwatch_id']) {
        let stopwatch = await this.stopwatchesService.get(params['stopwatch_id'])
        stopwatch = Object.assign(new Stopwatch(), stopwatch)
        this.timesheet = stopwatch.toTimesheet((await this.apiService.getUser()).id)
        this.selectedDuration = this.utils.parseDuration(this.timesheet.tracking.duration)
      }
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
          this.timesheet = await this.apiService.getTimesheet(parseInt(params['time_id']), true)
          this.selectedDates = [new Date(this.timesheet.date)]
          this.selectedDuration = this.utils.parseDuration(this.timesheet.duration)
          this.availablePackages = await this.apiService.getPackagesForProject(this.timesheet.pr_project_id)
        } catch (e) {
          console.error('error', e)
        }
      }
      this.updateSelectTexts()

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

  async save() {
    console.log('timesheet', this.timesheet)
    this.isSaving = true
    if (this.contact != null) {
      this.timesheet.contact_id = this.contact.id
    }
    if (this.isUpdate) {
      await this.update()
    } else {
      await this.create()
    }
    this.isSaving = false
  }

  contactChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  async searchContact(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();
    event.component.items = await this.apiService.searchContact(text)
    event.component.endSearch();
  }


  validateTime() {
    if (
      !this.timesheet.client_service_id ||
      !this.timesheet.status_id ||
      !this.timesheet.text ||
      this.timesheet.text.length < 1) {
      this.utils.showToast('Missing information')
      return false;
    }
    this.timesheet.tracking.duration = new ToDurationPipe().transform(this.selectedDuration)
    return true
  }

  onTimeChanged(){
    if(this.timesheet.tracking.type === 'range'){
      let diff = (Date.parse(this.timesheet.tracking.end) - Date.parse(this.timesheet.tracking.start)) / 36e5
      this.timesheet.tracking.duration = new ToDurationPipe().transform(diff)
      this.selectedDuration = new ToDurationPipe().transform(diff)
    }
  }

  async segmentChanged($event){
    this.timesheet.tracking.type = $event.detail.value === 'duration' ? 'duration' : 'range'
    console.log('changed type to ' + $event.detail.value)
    console.log('timesheet', this.timesheet)

  }

  async storeLastUsed(timesheet: Timesheet) {
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_PROJECT, DEFAULTS.PROJECT_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_PROJECT_ID, timesheet.pr_project_id)
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_STATUS, DEFAULTS.STATUS_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_STATUS_ID, timesheet.status_id)
    if (await this.storage.getString(STORAGE.SETTINGS_LAST_SERVICE, DEFAULTS.SERVICE_ID) === TYPES.LAST_USED) this.storage.setItem(STORAGE.SETTINGS_LAST_SERVICE_ID, timesheet.client_service_id)
  }

  async update() {
    return new Promise<void>(resolve => {
      if (this.validateTime()) {
        this.timesheet.tracking.date = this.datePipe.transform(this.selectedDates[0], 'yyyy-MM-dd');
        this.apiService.putTimesheet(this.timesheet).then(async response => {
          this.storeLastUsed(response)
          this.utils.showToast('Updated')
          this.router.navigateByUrl('tabs', { skipLocationChange: true });
          resolve()
        }).catch(async reason => {
          this.utils.showToast('Failed: ' + reason.message)
          resolve()
        })
      }else{
        resolve()
      }
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
      defaultDates: this.selectedDates,
      defaultDate: this.selectedDates[0]
    };
    if (this.isUpdate) {
      options.pickMode = 'single'
      options.defaultDate = this.selectedDates[0],
        options.title = await this.translateService.get('Date').toPromise()
    }
    const calendar = await this.modalContoller.create({
      component: CalendarModal,
      componentProps: { options }
    });
    calendar.present();
    const event: any = await calendar.onDidDismiss();
    if (this.isUpdate) {
      this.selectedDates = [event.data?.dateObj]
    } else {
      let dates = []
      for (var i = 0; i < event.data.length; i++) {
        if(event.data[i]) dates.push(event.data[i].dateObj)
      }
      this.selectedDates = dates
    }

  }


  async create() {
    return new Promise<void>(async resolve => {
      if (this.validateTime()) {
        // let timesheets = []
        // let promises = []
        for (var i = 0; i < this.selectedDates.length; i++) {
          let timesheet = JSON.parse(JSON.stringify(this.timesheet)) as Timesheet
          // if(timesheet.tracking.type === 'duration'){
            timesheet.tracking.date = this.datePipe.transform(this.selectedDates[i], 'yyyy-MM-dd');
          // }
          // timesheets.push(timesheet)
          await this.apiService.postTimesheet(timesheet)
        }
        // promises.push(...timesheets.map(timesheet => this.apiService.postTimesheet(timesheet)))
        // Not working because of Bexio API race condition
        // Promise.all(promises).then(async (values) => {
        this.storeLastUsed(this.timesheet)
        this.utils.showToast('Created')
        this.router.navigateByUrl('tabs', { skipLocationChange: true });
        // }).catch(async reason => {
        //   this.utils.showToast('Failed: ' + reason.message)
        // })
      }
      resolve()
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
