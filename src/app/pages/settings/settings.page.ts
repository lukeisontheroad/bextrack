import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'ionic-appauth';
import { ClientService } from 'src/app/models/client_service';
import { TimesheetStatus } from 'src/app/models/timsheet_status';
import { Project } from 'src/app/models/project';
import { DEFAULTS } from 'src/app/models/constants';
import * as _ from 'lodash';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  public user: User
  public services: ClientService[] = []
  public status: TimesheetStatus[] = []
  public projects: Project[] = []

  public lastUsedService = DEFAULTS.SERVICE_ID
  public lastUsedStatus = DEFAULTS.STATUS_ID
  public lastUsedProject = DEFAULTS.PROJECT_ID

  public duration = 1
  public steps = 15
  public hoursPerDay = 8

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private utils: UtilsService
    ) {
      this.duration = localStorage.getItem('duration') ? parseInt(localStorage.getItem('duration')) : 1
      this.steps = localStorage.getItem('steps') ? parseInt(localStorage.getItem('steps')) : 15
      this.hoursPerDay = localStorage.getItem('hoursPerDay') ? parseInt(localStorage.getItem('hoursPerDay')) : 8
      this.lastUsedService = localStorage.getItem('lastUsedService') ? localStorage.getItem('lastUsedService') : DEFAULTS.SERVICE_ID
      this.lastUsedStatus = localStorage.getItem('lastUsedStatus') ? localStorage.getItem('lastUsedStatus') : DEFAULTS.STATUS_ID
      this.lastUsedProject = localStorage.getItem('lastUsedProject') ? localStorage.getItem('lastUsedProject') : DEFAULTS.PROJECT_ID
      this.init()
  }

  async init() {
    this.user = await this.apiService.getUser()
    this.services = await this.apiService.getClientService()
    this.status = await this.apiService.getTimesheetStatus()
    this.projects = await this.apiService.getProjects()
  }

  logout() {
    this.authService.signOut()
  }

  notificationsChanged = _.debounce(async () => {
    localStorage.setItem('duration', this.duration + '')
    localStorage.setItem('steps', this.steps + '')
    localStorage.setItem('hoursPerDay', this.hoursPerDay + '')
    localStorage.setItem('lastUsedService', this.lastUsedService + '')
    localStorage.setItem('lastUsedStatus', this.lastUsedStatus + '')
    localStorage.setItem('lastUsedProject', this.lastUsedProject + '')
    if(parseInt(this.lastUsedService) >= 0) localStorage.setItem('lastUsedServiceId', this.lastUsedService + '')
    if(parseInt(this.lastUsedStatus) >= 0) localStorage.setItem('lastUsedStatusId', this.lastUsedStatus + '')
    if(parseInt(this.lastUsedProject) >= 0) localStorage.setItem('lastUsedProjectId', this.lastUsedProject + '')

    this.utils.showToast('Updated')
  }, 2000);
}
