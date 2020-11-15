import { Component, ViewChild } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';
import { IonContent, IonList } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar';
import { ToDurationPipe } from 'src/app/pipes/to-duration.pipe';

@Component({
  selector: 'app-times',
  templateUrl: 'times.page.html',
  styleUrls: ['times.page.scss']
})
export class TimesPage {

  @ViewChild(IonContent) content: IonContent;

  public times: Timesheet[] = []
  public groupedTimes = []
  public skeletons = new Array(12);
  public loading = true;

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    color: 'secondary',
    weekStart: 1
  }

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
    let groupedTimes = []
    let daysConfig: Array<DayConfig> = new Array()

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
      daysConfig.push({ date: new Date(groupedTimesMap[key][0].date), subTitle: new ToDurationPipe(this.utils).transform(total), disable: false, cssClass: 'green' } as DayConfig)
    }
    this.groupedTimes = groupedTimes;
    this.optionsMulti = {
      from: new Date(this.times[this.times.length-1].date),
      to: new Date(this.times[0].date),
      pickMode: 'single',
      daysConfig: daysConfig,
      color: 'secondary',
      weekStart: 1
    }
    
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

  passedDate(selectedDate) {
    const date = new Date(selectedDate.time);
    const dateString = date.getFullYear() + '-' + this.utils.pad(date.getMonth() + 1) + '-' + this.utils.pad(date.getDate())
    this.scrollTo(dateString)
  }

  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollToPoint(0, y, 500)
  }
}
