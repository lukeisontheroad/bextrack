import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { DEFAULTS, STORAGE } from 'src/app/models/constants';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
const { LocalNotifications } = Plugins;
declare var cordova: any;

@Component({
  selector: 'app-module-settings',
  templateUrl: './module-settings.page.html',
  styleUrls: ['./module-settings.page.scss'],
})
export class ModuleSettingsPage {

  public time = DEFAULTS.NOTIFICATION_TIME
  public modules = DEFAULTS.MODULES

  constructor(
    private utils: UtilsService,
    private storage: StorageService,
    private translateService: TranslateService,
  ) {
    this.init()
  }

  async init() {
    this.time = await this.storage.getString(STORAGE.SETTINGS_NOTIFICATIONS_TIME, DEFAULTS.NOTIFICATION_TIME)
    this.modules = JSON.parse(await this.storage.getString(STORAGE.SETTINGS_MODULES, JSON.stringify(DEFAULTS.MODULES)))
  }

  private async storeConfiguration() {
    await this.storage.setItem(STORAGE.SETTINGS_MODULES, JSON.stringify(this.modules))
    location.reload()
    this.utils.showToast('Updated')
  }

  notificationsChanged = _.debounce(async () => {
    this.utils.requestNotificationPermission()
    await this.storeConfiguration()
  }, 2000);

}
