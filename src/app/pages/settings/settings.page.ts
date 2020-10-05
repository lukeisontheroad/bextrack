import { Component } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { AlertController, ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Plugins } from '@capacitor/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'ionic-appauth';
const { LocalNotifications } = Plugins;

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
    // private cookieService: CookieService,
    private alertController: AlertController,
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router) {

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
      message: 'Saved',
      duration: 1000,
      position: 'top'
    });
    toast.present()

    if (!(await LocalNotifications.requestPermission())) {
      return
    }

    let date = new Date('01-01-1970 ' + this.time)
    let hour = date.getHours()
    let minute = date.getMinutes()
    await LocalNotifications.removeAllListeners()

    let notifications = []
    console.log('cancelAll')

    for (let key of Object.keys(this.weekdays)) {
      if (this.weekdays[key]) {
        let weekday = parseInt(key.substring(1))
        notifications.push({
          title: 'Bexio Timetracker',
          text: 'Did you track your time for today?',
          foreground: false,
          badge: 1,
          number: 1,
          wakeup: false,
          trigger: { every: { weekday: weekday, hour: hour, minute: minute } },
          actions: [
            { id: 'yes', title: 'Track now', launch: true },
          ]
        });
      }
    }

    if (notifications.length > 0) {
      LocalNotifications.schedule({notifications: notifications});
    }

  }, 2000);
}
