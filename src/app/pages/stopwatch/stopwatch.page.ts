import { Component, OnInit } from '@angular/core';
import { Stopwatch } from '../../models/stopwatch';
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
import { ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { TimesheetStatus } from 'src/app/models/timsheet_status';
import { StopwatchesService } from 'src/app/services/stopwatches/stopwatches.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage {

  public isUpdate = false

  public availablePackages: Package[] = []
  public projects: Project[] = []
  public clientServices: ClientService[] = []
  public timesheetStatus: TimesheetStatus[] = []
  public contact: Contact = null;

  public stopwatch = new Stopwatch()

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private stopwatchesService: StopwatchesService,
    private navController: NavController,
    private storage: StorageService,
    private utils: UtilsService
  ) {
    this.init()
  }

  // private contactSearch: Observable<Contact[]> = null // = this.apiService.searchContact()

  private async init() {
    this.projects = await this.apiService.getProjects()
    this.clientServices = await this.apiService.getClientService()
    this.timesheetStatus = await this.apiService.getTimesheetStatus()

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_SERVICE, DEFAULTS.SERVICE_ID) != TYPES.NONE) {
      this.stopwatch.client_service_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_SERVICE_ID)
      this.updateClientServices()
    }

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_STATUS, DEFAULTS.STATUS_ID) != TYPES.NONE) {
      this.stopwatch.status_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_STATUS_ID)
      this.updateStatus()
    }

    if (await this.storage.getString(STORAGE.SETTINGS_LAST_PROJECT, DEFAULTS.PROJECT_ID) != TYPES.NONE) {
      this.stopwatch.pr_project_id = await this.storage.getNumber(STORAGE.SETTINGS_LAST_PROJECT_ID)
      this.availablePackages = await this.apiService.getPackagesForProject(this.stopwatch.pr_project_id)
      this.updateSelectTexts()
    }

    this.route.params.subscribe(async params => {
      if (params['stopwatch_id']) {
        this.isUpdate = true
        let stopwatch = await this.stopwatchesService.get(params['stopwatch_id'])
        if(stopwatch){
          this.stopwatch = stopwatch
          this.availablePackages = await this.apiService.getPackagesForProject(this.stopwatch.pr_project_id)
        }
      }
      this.updateSelectTexts()
    })
  }

  public async updateClientServices() {
    const filteredClientServices = this.clientServices.filter(i => i.id == this.stopwatch.client_service_id)
    if (filteredClientServices.length > 0) {
      this.stopwatch.selectedClientServiceText = filteredClientServices[0].name
    }
  }

  public async updateStatus() {
    const filteredStatus = this.timesheetStatus.filter(i => i.id == this.stopwatch.status_id)
    if (filteredStatus.length > 0) {
      this.stopwatch.selectedStatusText = filteredStatus[0].name
    }
  }


  private async updateSelectTexts() {
    // set project
    const filteredProjects = this.projects.filter(i => i.id == this.stopwatch.pr_project_id)
    if (filteredProjects.length > 0) {
      this.stopwatch.selectedProjectText = filteredProjects[0].name
      this.stopwatch.contact_id = filteredProjects[0].contact_id
      console.log('selectedProjectText', this.stopwatch.selectedProjectText)
      console.log('pr_package_id', this.stopwatch.pr_package_id)
      if (this.stopwatch.pr_package_id) {
        this.stopwatch.selectedPackageText = (await this.apiService.getPackageForProjectWithId(this.stopwatch.pr_project_id, this.stopwatch.pr_package_id)).name
        console.log('selectedPackageText', this.stopwatch.selectedPackageText)

      }
    }
  }

  async onProjectSelected() {
    this.availablePackages = await this.apiService.getPackagesForProject(this.stopwatch.pr_project_id)
    this.updateSelectTexts()
  }

  async save() {
    if (
      !this.stopwatch.title
      || this.stopwatch.title.length < 1
      || !this.stopwatch.text
      || this.stopwatch.text.length < 1
      || !this.stopwatch.client_service_id
      || !this.stopwatch.status_id
      ) {
      this.utils.showToast('Missing information')
      return false;
    }
    await this.stopwatchesService.add(this.stopwatch)
    if(this.isUpdate){
      this.utils.showToast('Updated')
    }else{
      this.utils.showToast('Created')
    }
    this.navController.navigateRoot('/tabs/stopwatches');
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

}
