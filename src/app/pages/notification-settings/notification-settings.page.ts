import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { UtilsService } from 'src/app/services/utils/utils.service';
const { LocalNotifications } = Plugins;
declare var cordova: any;

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
})
export class NotificationSettingsPage {

  public time = '17:00'

  public weekdays = {
    d0: false, // Sunday
    d1: false, // Monday
    d2: false, // Tuesday
    d3: false, // Wednesday
    d4: false, // Thursday
    d5: false, // Friday
    d6: false, // Saturday
  }

  constructor(
    private utils: UtilsService,
    private translateService: TranslateService,
  ) {
    const weekdays = localStorage.getItem('weekdays')
    if (weekdays) {
      this.weekdays = JSON.parse(weekdays)
    }

    const time = localStorage.getItem('time')
    if (time) {
      this.time = time
    }
  }

  notificationsChanged = _.debounce(async () => {
    localStorage.setItem('weekdays', JSON.stringify(this.weekdays))
    localStorage.setItem('time', this.time)
    this.utils.showToast('Updated')

    if (!(await LocalNotifications.requestPermission())) {
      return
    }

    let hour = parseInt(this.time.split(':')[0])
    let minute = parseInt(this.time.split(':')[1])

    let pending = await LocalNotifications.getPending()
    LocalNotifications.cancel(pending)

    let notifications = []
    var counter = 1;
    const title = await this.translateService.get('Bexio Time').toPromise()
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
      } catch (ReferenceError) {
      }
    }
  }, 2000);

}
