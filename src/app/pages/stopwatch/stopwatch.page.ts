import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { STORAGE } from 'src/app/models/constants';
const { LocalNotifications } = Plugins;
declare var cordova: any;

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage {

  private refreshRate = 1000
  private notificationId = 1337

  public timeBegan: any = null
  // public timeStopped: any = null
  // public stoppedDuration: any = 0
  public startedInterval = null
  public running = false
  public blankTime = "00:00:00"
  public time = "00:00:00"

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private storage: StorageService,
    private utils: UtilsService
  ) {
    this.init()
  }

  async init() {
    this.timeBegan = await this.storage.getDate(STORAGE.STOPWATCH_START)
    // this.timeStopped = await this.storage.getDate(STORAGE.STOPWATCH_STOP)
    // console.log('timeStopped', this.timeStopped)
    this.running = await this.storage.getBoolean(STORAGE.STOPWATCH_RUNNING)
    if (this.running) {
      this.startedInterval = setInterval(this.clockRunning.bind(this), this.refreshRate)
      this.startNotification()
    }
    this.clockRunning()
  }

  async start() {
    if (this.running) return;
    this.reset();
    await this.storage.setItem(STORAGE.STOPWATCH_RUNNING, true)
    await this.storage.setItem(STORAGE.STOPWATCH_START, new Date())
    this.init()
  }

  async stop() {
    this.stopNotification()
    let durationSpan = new Date(new Date().getTime() - this.timeBegan)
    console.log('hours', durationSpan.getUTCHours())
    console.log('getMinutes', durationSpan.getMinutes())
    console.log('getSeconds', durationSpan.getSeconds())
    let duration = durationSpan.getTime() / 1000
    let minTime = await this.storage.getNumber(STORAGE.SETTINGS_STEPS) * 60
    if (duration >= minTime) {
      this.router.navigate(['create-time-stopwatch', duration])
    } else {
      this.utils.showToast('Duration below minimum tracking time of ' + (minTime / 60) + 'min')
    }
    this.reset()
  }

  async reset() {
    clearInterval(this.startedInterval);
    await this.storage.removeItem(STORAGE.STOPWATCH_RUNNING)
    await this.storage.removeItem(STORAGE.STOPWATCH_START)
    this.running = false;
    this.startedInterval = null;
    this.timeBegan = null;
    this.time = this.blankTime;
  }

  clockRunning() {
    let currentTime: any = new Date()
    var timeElapsed: any = new Date(currentTime - this.timeBegan)
    if (!this.running) {
      timeElapsed = new Date(-this.timeBegan)
    }
    let hour = timeElapsed.getUTCHours()
    let min = timeElapsed.getUTCMinutes()
    let sec = timeElapsed.getUTCSeconds()
    this.time =
      this.utils.pad(hour) + ":" +
      this.utils.pad(min) + ":" +
      this.utils.pad(sec)
  };

  async startNotification() {
    console.log('Start notification')
    if (!(await LocalNotifications.requestPermission())) {
      return
    }
    try {
      cordova.plugins.notification.local.schedule(
        {
          id: this.notificationId,
          title: await this.translateService.get('BexTrack').toPromise(),
          text: await this.translateService.get('Timewatch is running...').toPromise(),
          sticky: true,
          ongoing: true,
          autoClear: false
        }
      );
    } catch (ReferenceError) {
    }
  }

  async stopNotification() {
    console.log('Stop notification')
    try {
      cordova.plugins.notification.local.cancel(this.notificationId)
    } catch (ReferenceError) {
    }
  }
}
