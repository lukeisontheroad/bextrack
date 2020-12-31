import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';
import { TimesheetTracking } from 'src/app/models/timesheet_tracking';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private toastCtroller: ToastController,
    private alertController: AlertController,
    private translateService: TranslateService
  ) { }

  public static pad(num, size = 2) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  private parseBexioDate(date: string){
    if(date && date.indexOf(' ') === -1) return new Date(date)
    let dateOnly = date.split(' ')[0]
    let timeOnly = date.split(' ')[1].split(':').map(i => parseInt(i))
    let newDate = new Date(dateOnly)
    newDate.setHours(timeOnly[0], timeOnly[1], timeOnly[2])
    return newDate
  }

  public prepareTracking(tracking: TimesheetTracking): TimesheetTracking {
    let today = new Date().toISOString();
    (['date', 'start', 'end']).forEach(field => {
      if(!tracking[field]){
        tracking[field] = today 
      }else{
        tracking[field] = this.parseBexioDate(tracking[field]).toISOString()
      }
    })
    return tracking
  }

  public requestNotificationPermission() {
    return new Promise<void>(async (resolve, reject) => {
      if (!(await LocalNotifications.requestPermission())) {
        resolve()
      } else {
        reject()
      }
    })
  }

  public parseDuration(duration): number {
    if(duration === null) return 0
    return parseFloat(duration) + parseFloat(duration.split(':')[1]) / 60
  }

  public async showToast(message: string, duration = 3000) {
    let toast = await this.toastCtroller.create({
      message: await this.translateService.get(message).toPromise(),
      duration: duration,
      position: 'top'
    });
    toast.present()
  }

  public confirm(header, message, confirm = 'Delete', cancel = 'Cancel'): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: await this.translateService.get(header).toPromise(),
        message: await this.translateService.get(message).toPromise(),
        buttons: [
          {
            text: await this.translateService.get(cancel).toPromise(),
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve(false)
            }
          }, {
            text: await this.translateService.get(confirm).toPromise(),
            cssClass: 'danger',
            handler: () => {
              resolve(true)
            }
          }
        ]
      });
      alert.present();
    })
  }
}
