import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';
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

  public pad(num, size = 2) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  public requestNotificationPermission() {
    return new Promise(async (resolve, reject) => {
      if (!(await LocalNotifications.requestPermission())) {
        resolve()
      } else {
        reject()
      }
    })
  }

  public parseDuration(duration): number {
    return parseInt(duration) + parseInt(duration.split(':')[1]) / 60
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
