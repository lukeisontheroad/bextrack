import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Plugins } from '@capacitor/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'ionic-appauth';
import { TranslateService } from '@ngx-translate/core';
const { LocalNotifications } = Plugins;
declare var cordova: any;
@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

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

  public user: User

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private translateService: TranslateService,
    private toastController: ToastController,
    ) {

    const weekdays = localStorage.getItem('weekdays')
    if (weekdays) {
      this.weekdays = JSON.parse(weekdays)
    }

    const time = localStorage.getItem('time')
    if (time) {
      this.time = time
    }
    this.getUser()
  }

  async getUser() {
    this.user = await this.apiService.getUser()
  }

  logout() {
    this.authService.signOut()
  }

  notificationsChanged = _.debounce(async () => {
    localStorage.setItem('weekdays', JSON.stringify(this.weekdays))
    localStorage.setItem('time', this.time)
    let toast = await this.toastController.create({
      message: await this.translateService.get('Updated').toPromise(),
      duration: 1000,
      position: 'top'
    });
    toast.present()

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
      cordova.plugins.notification.local.schedule(notifications);
    }
  }, 2000);
}
