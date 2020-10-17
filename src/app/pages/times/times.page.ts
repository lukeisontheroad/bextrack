import { Component, ViewChild } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';
import { IonList } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-times',
  templateUrl: 'times.page.html',
  styleUrls: ['times.page.scss']
})
export class TimesPage {

  public times: Timesheet[] = []
  public groupedTimes = []
  public skeletons = new Array(10);
  public loading = true;

  @ViewChild(IonList, { static: true }) list: IonList;

  constructor(
    private apiService: ApiService,
    private utils: UtilsService
  ) {
    this.doRefresh(null, true);
    this.apiService.timesUpdated.subscribe(() => this.doRefresh())
  }

  public async doRefresh(event?: any, force = false) {
    this.loading = true
    var groupedTimes = []

    this.times = await this.apiService.getMyTimesheets(force)

    var groupedTimesMap = {}
    for (let time of this.times) {
      if (!groupedTimesMap[time.date]) {
        groupedTimesMap[time.date] = []
      }
      groupedTimesMap[time.date].push(time)
    }

    for (let key of Object.keys(groupedTimesMap)) {
      const total = groupedTimesMap[key].map(i => this.utils.parseDuration(i.duration)).reduce((i, j) => i + j)
      groupedTimes.push({ date: groupedTimesMap[key][0].date, times: groupedTimesMap[key], total: total })
    }
    this.groupedTimes = groupedTimes;

    if (event) {
      event.target.complete();
    }
    this.loading = false
  }

  async delete(timesheet: Timesheet) {
    if (await this.utils.confirm('Are you sure?', 'Delete ' + timesheet.date + ' ' + timesheet.duration + ' ' + timesheet.text)) {
      await this.apiService.deleteTimesheet(timesheet.id)
      this.utils.showToast('Deleted')
      this.doRefresh()
    } else {
      this.list.closeSlidingItems()
    }
  }

  async copy(timesheet: Timesheet) {
    timesheet.id = null
    this.apiService.postTimesheet(timesheet)
  }
}
