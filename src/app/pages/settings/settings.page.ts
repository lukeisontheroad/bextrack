import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'ionic-appauth';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import { ClientService } from 'src/app/models/client_service';
import { TimesheetStatus } from 'src/app/models/timsheet_status';
import { Project } from 'src/app/models/project';

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

  public lastUsedService = "-1"
  public lastUsedStatus = "-1"
  public lastUsedProject = "-2"

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private translateService: TranslateService,
    private toastController: ToastController,
    ) {
      this.lastUsedService = localStorage.getItem('lastUsedService') ? localStorage.getItem('lastUsedService') : "-1"
      this.lastUsedStatus = localStorage.getItem('lastUsedStatus') ? localStorage.getItem('lastUsedStatus') : "-1"
      this.lastUsedProject = localStorage.getItem('lastUsedProject') ? localStorage.getItem('lastUsedProject') : "-2"
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
    localStorage.setItem('lastUsedService', this.lastUsedService + '')
    localStorage.setItem('lastUsedStatus', this.lastUsedStatus + '')
    localStorage.setItem('lastUsedProject', this.lastUsedProject + '')
    if(parseInt(this.lastUsedService) >= 0) localStorage.setItem('lastUsedServiceId', this.lastUsedService + '')
    if(parseInt(this.lastUsedStatus) >= 0) localStorage.setItem('lastUsedStatusId', this.lastUsedStatus + '')
    if(parseInt(this.lastUsedProject) >= 0) localStorage.setItem('lastUsedProjectId', this.lastUsedProject + '')

    let toast = await this.toastController.create({
      message: await this.translateService.get('Updated').toPromise(),
      duration: 1000,
      position: 'top'
    });
    toast.present()
  }, 2000);
}
