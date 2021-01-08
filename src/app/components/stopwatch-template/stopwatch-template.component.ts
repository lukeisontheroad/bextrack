import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Plugins } from '@capacitor/core';
import { Stopwatch } from 'src/app/models/stopwatch';
import { StopwatchesService } from 'src/app/services/stopwatches/stopwatches.service';
import { STORAGE } from 'src/app/models/constants';
import { ApiService } from 'src/app/services/api/api.service';
import { AlertController, NavController } from '@ionic/angular';

const { LocalNotifications } = Plugins;
declare var cordova: any;

@Component({
  selector: 'app-stopwatch-template',
  templateUrl: './stopwatch-template.component.html',
  styleUrls: ['./stopwatch-template.component.scss'],
})
export class StopwatchTemplateComponent implements OnInit {

  @Input()
  stopwatch: Stopwatch;

  @Output()
  onEdit: EventEmitter<string> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<boolean> = new EventEmitter();

  timerDisplay = '00:00:00';
  startTime: number;
  updatedTime: number;
  difference = 0;
  tInterval;
  savedTime = 0;
  paused = 0;
  running = 0;

  private resolution = 100

  constructor(
    private translateService: TranslateService,
    private storage: StorageService,
    private utils: UtilsService,
    private stopwatchesService: StopwatchesService,
    private apiService: ApiService,
    private alertController: AlertController,
    private navController: NavController
  ) {

  }
  async ngOnInit() {
    await this.loadCurrentState()
    if (this.running === 1 && this.paused === 0) {
      this.tInterval = setInterval(() => { this.getShowTime() }, this.resolution);
    }
  }

  public async edit() {
    this.onEdit.emit(this.stopwatch.id);
  }

  public async delete() {
    if (await this.utils.confirm('Are you sure?', 'Delete ' + this.stopwatch.title)) {
      await this.stopwatchesService.delete(this.stopwatch)
      this.utils.showToast('Deleted')
      this.onDelete.emit(true);

    } else {
      this.onDelete.emit(false);
    }
  }

  startTimer() {
    this.startTime = new Date().getTime();
    this.tInterval = setInterval(() => { this.getShowTime() }, this.resolution);
    this.paused = 0;
    this.running = 1;
    this.saveCurrentState()
    this.startNotification()
    this.stopwatchesService.setCurrentStopwatch(this.stopwatch)
  }

  private loadItem(field: keyof StopwatchTemplateComponent) {
    return new Promise<void>(async resolve => {
      let value = await this.storage.getString(this.stopwatch.id + '_' + field, null)
      if (value != null) {
        if (typeof this[field + ''] === 'number') {
          this[field + ''] = parseFloat(value)
        } else {
          this[field + ''] = value
        }
      }
      resolve()
    })
  }

  private saveItem(field: keyof StopwatchTemplateComponent, value) {
    return this.storage.setItem(this.stopwatch.id + '_' + field, value)
  }

  async loadCurrentState() {
    return new Promise<void>(async resolve => {
      let promises = []
      for (var i = 0; i < STORAGE.STOPWATCHES_FIELDS.length; i++) {
        let field = STORAGE.STOPWATCHES_FIELDS[i] as any
        promises.push(this.loadItem(field))
      }
      await Promise.all(promises);
      resolve()
    })
  }

  async saveCurrentState() {
    let promises = []
    for (var i = 0; i < STORAGE.STOPWATCHES_FIELDS.length; i++) {
      let field = STORAGE.STOPWATCHES_FIELDS[i] as any
      promises.push(this.saveItem(field, this[field]))
    }
    await Promise.all(promises);
  }


  public pauseTimer() {
    if (!this.difference) {
      // if timer never started, don't allow pause button to do anything
    } else if (!this.paused) {
      clearInterval(this.tInterval);
      this.savedTime = this.difference;
      this.paused = 1;
      this.running = 0;
      this.saveCurrentState()
      this.stopNotification()
    }
  }



  private async processTimesheet(): Promise<boolean> {
    return new Promise(async resolve => {
      if (this.difference === 0){
        resolve(true)
        this.navController.navigateRoot('/create-time/stopwatch/' + this.stopwatch.id)
      }else if (this.stopwatch.strategy === 0) {
        this.pauseTimer()
        const alert = await this.alertController.create({
          header: 'Create time',
          message: 'Do you want to edit the timeentry before creating it?',
          buttons: [
            {
              text: 'Edit before create',
              handler: async  () => {
                resolve(true)
                this.navController.navigateRoot('/create-time/stopwatch/' + this.stopwatch.id)
              }
            },
            {
              text: 'Create without edit',
              handler: () => {
                resolve(true)
                this.createTimesheet()
              }
            },
            {
              text: 'Continue stopwatch',
              role: 'cancel',
              handler: () => {
                this.startTimer()
              }
            },
            {
              text: 'Reset stopwatch',
              cssClass: 'secondary',
              handler: () => {
                resolve(true)
              }
            }
          ]
        });
        alert.present()
      } else if (this.stopwatch.strategy === 1) {
        await this.createTimesheet()
        resolve(true)
      } else if (this.stopwatch.strategy === 2) {
        this.navController.navigateRoot('/create-time/stopwatch/' + this.stopwatch.id)
        resolve(true)
      } else {
        console.error('Strategy not implemented')
        resolve(false)
      }
    })
  }

  private createTimesheet(): Promise<boolean> {
    return new Promise(async resolve => {
      let stopwatch = await this.stopwatchesService.get(this.stopwatch.id)
      stopwatch = Object.assign(new Stopwatch(), this.stopwatch)
      let timesheet = await stopwatch.toTimesheet((await this.apiService.getUser()).id)
      let minTime = await this.storage.getNumber(STORAGE.SETTINGS_STEPS) * 60
      let splitted = stopwatch.timerDisplay.split(':').map(i => parseInt(i))
      if (splitted[0] > 0 || splitted[1] >= (minTime / 60)) {
        await this.apiService.postTimesheet(timesheet)
        this.utils.showToast('Time entry created')
        resolve(true)
      } else {
        this.utils.showToast('Duration below minimum tracking time of ' + (minTime / 60) + 'min')
        resolve(false)
      }
    })
  }

  async stopTimer() {
    if (await this.processTimesheet()) {
      clearInterval(this.tInterval);
      this.savedTime = 0;
      this.difference = 0;
      this.paused = 0;
      this.running = 0;
      this.timerDisplay = '00:00:00';
      this.stopNotification()
      setTimeout(() => {
        this.saveCurrentState()
      }, 1000)
    } else {
      this.pauseTimer()
    }
  }

  getShowTime() {
    this.updatedTime = new Date().getTime();
    if (this.savedTime) {
      this.difference = (this.updatedTime - this.startTime) + this.savedTime;
    } else {
      this.difference = this.updatedTime - this.startTime;
    }
    // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((this.difference % (1000 * 60)) / 100);

    let hours_string = (hours < 10) ? "0" + hours : hours;
    let minutes_string = (minutes < 10) ? "0" + minutes : minutes;
    let seconds_string = (seconds < 10) ? "0" + seconds : seconds;
    // let milliseconds_string = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
    this.timerDisplay = hours_string + ':' + minutes_string + ':' + seconds_string;
  }

  async startNotification() {
    console.log('Start notification')
    if (!(await LocalNotifications.requestPermission())) {
      console.warn('No notification permission')
      return
    }
    try {
      cordova.plugins.notification.local.schedule(
        {
          id: parseInt('0x' + this.stopwatch.id.substring(0, 8)),
          title: await this.translateService.get('BexTrack').toPromise(),
          text: await this.translateService.get('timewatch-is-running').toPromise(),
          sticky: true,
          ongoing: true,
          autoClear: false
        }
      );
    } catch (e) {
      console.error('Notificaiton error', e)
    }
  }

  async stopNotification() {
    console.log('Stop notification')
    try {
      cordova.plugins.notification.local.cancel(parseInt('0x' + this.stopwatch.id.substring(0, 8)))
    } catch (e) {
      console.error('Notificaiton error', e)
    }
  }

}
