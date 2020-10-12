import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';
import { UtilsService } from 'src/app/services/utils/utils.service';
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

  public timeBegan = null
  public timeStopped: any = null
  public stoppedDuration: any = 0
  public started = null
  public running = false
  public blankTime = "00:00:00"
  public time = "00:00:00"

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private utils: UtilsService
  ) {
    this.init()
  }

  async init() {
    this.timeBegan = localStorage.getItem('stopwatch_start') ? new Date(localStorage.getItem('stopwatch_start')) : null
    this.timeStopped = localStorage.getItem('stopwatch_stop') ? new Date(localStorage.getItem('stopwatch_stop')) : null
    this.running = localStorage.getItem('stopwatch_running') == 'true'
    if (this.running) {
      this.started = setInterval(this.clockRunning.bind(this), this.refreshRate);
    }       
    this.clockRunning()

    if (!(await LocalNotifications.requestPermission())) {
      return
    }
  }

  async start() {
    if (this.running) return;
    if (this.timeBegan === null) {
      this.reset();
      this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) {
      let newStoppedDuration: any = (+new Date() - this.timeStopped)
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }
    this.started = setInterval(this.clockRunning.bind(this), this.refreshRate);
    this.running = true;

    localStorage.setItem('stopwatch_running', this.running + '')
    localStorage.setItem('stopwatch_start', this.timeBegan)
    localStorage.removeItem('stopwatch')

    try {
      cordova.plugins.notification.local.schedule(
        {
          id: this.notificationId,
          title: await this.translateService.get('Bexio Time').toPromise(),
          text: await this.translateService.get('Timewatch is running...').toPromise(),
          sticky: true,
          ongoing: true,
          autoClear: false
        }
      );
    } catch (ReferenceError) {
    }
  }
  async stop() {
    try {
      cordova.plugins.notification.local.cancel(this.notificationId)
    } catch (ReferenceError) {
    }

    this.running = false;
    this.timeStopped = new Date();
    localStorage.setItem('stopwatch_running', this.running + '')
    localStorage.setItem('stopwatch_stop', new Date() + '')
    clearInterval(this.started);
    let durationSpan = new Date(this.timeStopped - this.timeBegan)
    let duration = durationSpan.getHours() * 60 * 60 + durationSpan.getMinutes() * 60 + durationSpan.getSeconds()
    if (duration >= 900) {
      this.router.navigate(['create-time-stopwatch', duration])
    } else {
      this.utils.showToast('Duration below minimum tracking time of 15min')

    }
    this.reset()
  }

  reset() {
    localStorage.removeItem('stopwatch_running')
    localStorage.removeItem('stopwatch_start')
    localStorage.removeItem('stopwatch_stop')

    this.running = false;
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;
  }

  clockRunning() {
    let currentTime: any = new Date()
    var timeElapsed: any = new Date(currentTime - this.timeBegan - this.stoppedDuration)
    if (!this.running) {
      timeElapsed = new Date(this.timeStopped - this.timeBegan)
    }
    let hour = timeElapsed.getUTCHours()
    let min = timeElapsed.getUTCMinutes()
    let sec = timeElapsed.getUTCSeconds()
    this.time =
      this.utils.pad(hour) + ":" +
      this.utils.pad(min) + ":" +
      this.utils.pad(sec)
  };
}
