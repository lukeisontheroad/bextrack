import { Component, ViewChild } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';
import { AlertController, ToastController, IonList } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-times',
  templateUrl: 'times.page.html',
  styleUrls: ['times.page.scss']
})
export class TimesPage {

  public users = []
  public times: Timesheet[] = []
  public groupedTimes = []
  public skeletons = new Array(10);
  public loading = true;

  @ViewChild(IonList, {static: true}) list: IonList;

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private toastController: ToastController) {
    this.doRefresh();
  }

  public async doRefresh(event?: any) {
    this.loading = true
    var groupedTimes = []

    // await this.apiService.init()
    let user = await this.apiService.getUser()
    this.users = await this.apiService.getUsers()
    this.times = (await this.apiService.getTimesheets()).filter(i => i.user_id === user.id)

    var groupedTimesMap = {}
    for (let time of this.times) {
      if (!groupedTimesMap[time.date]) {
        groupedTimesMap[time.date] = []
      }
      groupedTimesMap[time.date].push(time)
    }

    for (let key of Object.keys(groupedTimesMap)) {
      const total = groupedTimesMap[key].map(i => parseInt(i.duration) + parseInt(i.duration.split(':')[1]) / 60).reduce((i, j) => i + j)
      groupedTimes.push({ date: groupedTimesMap[key][0].date, times: groupedTimesMap[key], total: total })
    }
    this.groupedTimes = groupedTimes;

    if (event) {
      event.target.complete();
    }
    setTimeout(() => {
      this.loading = false
    }, 500)
  }

  async delete(timesheet: Timesheet) {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Delete ' + timesheet.date + ' ' + timesheet.duration + ' ' + timesheet.text,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.list.closeSlidingItems()
          }
        }, {
          text: 'Delete',
          cssClass: 'danger',
          handler: async () => {
            await this.apiService.deleteTimesheet(timesheet)
            let toast = await this.toastController.create({
              message: 'Deleted',
              duration: 3000,
              position: 'top'
            });
            toast.present()
            this.doRefresh()
          }
        }
      ]
    });
    await alert.present();
  }

}
