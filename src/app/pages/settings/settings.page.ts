import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'ionic-appauth';
import { ClientService } from 'src/app/models/client_service';
import { TimesheetStatus } from 'src/app/models/timsheet_status';
import { Project } from 'src/app/models/project';
import { DEFAULTS, STORAGE } from 'src/app/models/constants';
import * as _ from 'lodash';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { StorageBackend } from '@openid/appauth';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  private isInit = false

  public user: User
  public services: ClientService[] = []
  public status: TimesheetStatus[] = []
  public projects: Project[] = []

  public lastUsedService = DEFAULTS.SERVICE_ID
  public lastUsedStatus = DEFAULTS.STATUS_ID
  public lastUsedProject = DEFAULTS.PROJECT_ID

  public duration = DEFAULTS.DURATION
  public steps = DEFAULTS.STEPS
  public hoursPerDay = DEFAULTS.HOURS_PER_DAY

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private storage: StorageService,
    private utils: UtilsService,
    private storageBackend: StorageBackend
  ) {

    this.init()
  }

  async init() {
    this.duration = await this.storage.getNumber(STORAGE.SETTINGS_DURATION, DEFAULTS.DURATION)
    this.steps = await this.storage.getNumber(STORAGE.SETTINGS_STEPS, DEFAULTS.STEPS)
    this.hoursPerDay = await this.storage.getNumber(STORAGE.SETTINGS_HOURS_PER_DAY, DEFAULTS.HOURS_PER_DAY)
    this.lastUsedService = await this.storage.getString(STORAGE.SETTINGS_LAST_SERVICE, DEFAULTS.SERVICE_ID)
    this.lastUsedStatus = await this.storage.getString(STORAGE.SETTINGS_LAST_STATUS, DEFAULTS.STATUS_ID)
    this.lastUsedProject = await this.storage.getString(STORAGE.SETTINGS_LAST_PROJECT, DEFAULTS.PROJECT_ID)
    this.user = await this.apiService.getUser()
    this.services = await this.apiService.getClientService()
    this.status = await this.apiService.getTimesheetStatus()
    this.projects = await this.apiService.getProjects()
    this.isInit = true
  }

  async logout() {
    await this.authService.signOut()
    this.navCtrl.navigateRoot('auth/endsession')
    await this.storageBackend.clear()
    window.location.href = '/'
  }

  notificationsChanged = _.debounce(async () => {
    if (this.isInit) {
      this.storage.setItem(STORAGE.SETTINGS_DURATION, this.duration)
      this.storage.setItem(STORAGE.SETTINGS_STEPS, this.steps)
      this.storage.setItem(STORAGE.SETTINGS_HOURS_PER_DAY, this.hoursPerDay)
      this.storage.setItem(STORAGE.SETTINGS_LAST_SERVICE, this.lastUsedService)
      this.storage.setItem(STORAGE.SETTINGS_LAST_STATUS, this.lastUsedStatus)
      this.storage.setItem(STORAGE.SETTINGS_LAST_PROJECT, this.lastUsedProject)
      if (parseInt(this.lastUsedService) >= 0) this.storage.setItem(STORAGE.SETTINGS_LAST_SERVICE_ID, this.lastUsedService)
      if (parseInt(this.lastUsedStatus) >= 0) this.storage.setItem(STORAGE.SETTINGS_LAST_STATUS_ID, this.lastUsedStatus)
      if (parseInt(this.lastUsedProject) >= 0) this.storage.setItem(STORAGE.SETTINGS_LAST_PROJECT_ID, this.lastUsedProject)
      this.utils.showToast('Updated')
    }
  }, 2000);
}
