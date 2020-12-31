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
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
})
export class NotificationSettingsPage {

  public time = DEFAULTS.NOTIFICATION_TIME
  public weekdays = DEFAULTS.NOTIFICATION_WEEKDAYS

  constructor(
    private utils: UtilsService,
    private storage: StorageService,
    private translateService: TranslateService,
  ) {
    this.init()
  }

  async init() {
    this.time = await this.storage.getString(STORAGE.SETTINGS_NOTIFICATIONS_TIME, DEFAULTS.NOTIFICATION_TIME)
    this.weekdays = JSON.parse(await this.storage.getString(STORAGE.SETTINGS_NOTIFICATIONS_WEEKDAYS, JSON.stringify(DEFAULTS.NOTIFICATION_WEEKDAYS)))
  }

  private async storeConfiguration() {
    await this.storage.setItem(STORAGE.SETTINGS_NOTIFICATIONS_TIME, this.time)
    await this.storage.setItem(STORAGE.SETTINGS_NOTIFICATIONS_WEEKDAYS, JSON.stringify(this.weekdays))
    this.utils.showToast('Updated')
  }

  private async cancelNotifications() {
    let pending = await LocalNotifications.getPending()
    LocalNotifications.cancel(pending)
  }

  private async scheduleNotifications() {
    let hour = parseInt(this.time.split(':')[0])
    let minute = parseInt(this.time.split(':')[1])
    let notifications = []
    var counter = 1;
    const title = await this.translateService.get('BexTrack').toPromise()
    const text = await this.translateService.get('Did you track your time for today?').toPromise()
    for (let key of Object.keys(this.weekdays)) {
      if (this.weekdays[key]) {
        let weekday = parseInt(key.substring(1))
        notifications.push(
          {
            id: counter,
            title: title,
            text: text,
            foreground: true,
            trigger: {
              every: {
                weekday: weekday,
                hour: hour,
                minute: minute
              }
            }
          }
        );
        counter++;
      }
    }
    if (notifications.length > 0) {
      try {
        cordova.plugins.notification.local.schedule(notifications);
      } catch (e) {
        console.error('Schedule Notifications', e)
      }
    }
  }

  notificationsChanged = _.debounce(async () => {
    this.utils.requestNotificationPermission()
    await this.storeConfiguration()
    await this.cancelNotifications()
    this.scheduleNotifications()
  }, 2000);

}
