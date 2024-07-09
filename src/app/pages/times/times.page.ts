import { Component, ViewChild, NgZone } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Timesheet } from 'src/app/models/timesheet';
import { ApiService } from 'src/app/services/api/api.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import * as XLSX from 'xlsx';
import { IonContent, IonList, ScrollDetail } from '@ionic/angular';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar';
import { ToDurationPipe } from 'src/app/pipes/to-duration.pipe';
import { STORAGE } from 'src/app/models/constants';
import { QueueItem, SetQueue } from 'src/app/models/set_queue';


@Component({
  selector: 'app-times',
  templateUrl: 'times.page.html',
  styleUrls: ['times.page.scss'],
})
export class TimesPage {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonList, { static: true }) list: IonList;

  public times: Timesheet[] = [];
  private selectedTimes: Timesheet[] = [];
  private pauseAutoRefresh = false;
  public selectMode = false;
  public groupedTimes = [];
  public lastUsedProjects: QueueItem[] = [];
  public skeletons = new Array(12);
  public loading = true;
  public scrollToElementId: string = null;
  public scrollToY = 0;

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  optionsMulti: CalendarComponentOptions = {
    color: 'secondary',
    weekStart: 1
  }

  constructor(
    private apiService: ApiService,
    private utils: UtilsService,
    private storage: StorageService,
    private ngZone: NgZone
  ) {
    this.apiService.timesUpdated.subscribe(async () => {
      if (!this.pauseAutoRefresh) {
        await this.updateTimes(false);
        if (this.scrollToY != 0) {
          this.viewport.scrollToOffset(this.scrollToY, 'smooth');
        }
      }
    });
    this.doRefresh(null, true);
    this.apiService.getPackages();
  }

  handleScroll(event: CustomEvent<ScrollDetail>) {
    this.scrollToY = event.detail.scrollTop;
  }

  private async updateTimes(force) {
    let groupedTimes = [];
    let daysConfig: Array<DayConfig> = new Array();

    this.times = await this.apiService.getMyTimesheets(force);

    var groupedTimesMap = {};
    for (let time of this.times) {
      if (!groupedTimesMap[time.date]) {
        groupedTimesMap[time.date] = [];
      }
      groupedTimesMap[time.date].push(time);
    }

    for (let key of Object.keys(groupedTimesMap)) {
      const total = groupedTimesMap[key].map(i => this.utils.parseDuration(i.duration)).reduce((i, j) => i + j);
      const date = new Date(groupedTimesMap[key][0].date).toISOString().split('T')[0];
      groupedTimes.push({ date: date, times: groupedTimesMap[key], total: total });
      daysConfig.push({ date: new Date(groupedTimesMap[key][0].date), subTitle: new ToDurationPipe().transform(total), disable: false, cssClass: 'green' } as DayConfig);
    }
    this.groupedTimes = groupedTimes;
    this.optionsMulti = {
      from: new Date(this.times[this.times.length - 1].date),
      to: new Date(this.times[0].date),
      pickMode: 'single',
      daysConfig: daysConfig,
      color: 'secondary',
      weekStart: 1
    };
    // console.log("Grouped Times:", this.groupedTimes);
  }

  public async doRefresh(event?: any, force = false) {
    this.loading = true;
    await this.updateTimes(true);
    this.lastUsedProjects = SetQueue.deserialize(await this.storage.getString(STORAGE.SETTINGS_LAST_THREE_PROJECTS, null)).toList();
    if (event) {
      event.target.complete();
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  calculateOffset(index: number) {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += 45 + this.groupedTimes[i].times.length * 84;
    }
    return offset;
  }
  


  passedDate(selectedDate) {
    var date = new Date(selectedDate.time);
    date.setDate(date.getDate() + 1);
    const dateString = date.toISOString().split('T')[0];

    const index = this.groupedTimes.findIndex(group => group.date === dateString);
    console.log(`Index for date ${dateString} is ${index}`);
    if (index !== -1) {
      //this.viewport.scrollToIndex(index, 'smooth');
      this.viewport.scrollToOffset(this.calculateOffset(index), 'smooth');
    } else {
      console.warn(`Index for date ${dateString} not found.`);
    }
  }

  public async onImport(event) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        const buffer = fileReader.result as ArrayBuffer;
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const user_id = (await this.apiService.getUser()).id

        console.log('jsonData', jsonData)
        const convertDateFormat = (dateStr: string): string => dateStr.split('.').reverse().join('-');
        this.pauseAutoRefresh = true

        for (let row of jsonData) {
          let date = row['Datum']
          let duration = row['Zeit']
          let text = row['Text']
          let project = row['Projekt']
          let timesheet = new Timesheet()
          // timesheet.date = convertDateFormat(date)
          timesheet.tracking.duration = duration
          timesheet.tracking.date = date
          timesheet.text = text
          timesheet.pr_project_id = project
          timesheet.allowable_bill = true
          timesheet.user_id = user_id
          timesheet.client_service_id = 4
          await this.apiService.postTimesheet(timesheet)
        }
        this.pauseAutoRefresh = false
      };
      fileReader.readAsArrayBuffer(file);
    }
  }

  async modify(event: any, timesheet: Timesheet, time: number) {
    event.stopPropagation();
    event.preventDefault();
    let totalMinutes = this.utils.parseDuration(timesheet.tracking.duration)

    totalMinutes += time;

    if (totalMinutes < 0) {
      totalMinutes = 0; // or handle it as per your requirement
    }

    console.log('totalMinutes', totalMinutes)

    timesheet.tracking.duration = this.stringifyDuration(totalMinutes);
    this.apiService.putTimesheet(timesheet);
  }

  private stringifyDuration(minutes: number) {
    const hours = Math.floor( minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }

  async delete(timesheet: Timesheet) {
    if (await this.utils.confirm('Are you sure?', 'Delete ' + timesheet.date + ' ' + timesheet.duration + ' ' + timesheet.text)) {
      await this.apiService.deleteTimesheet(timesheet.id)
      this.utils.showToast('Deleted')
      this.doRefresh()
    } else {
      if (this.list) {
        this.list.closeSlidingItems();
      }
    }
  }

  async copy(timesheet: Timesheet) {
    timesheet.id = null;
    this.apiService.postTimesheet(timesheet);
  }

  public async setProject(event: any, project: QueueItem, timesheet: Timesheet) {
    event.stopPropagation();
    event.preventDefault();
    console.log('setProject', project, timesheet);
    this.apiService.getProjects();
    timesheet.pr_project_id = project.id;
    if (!timesheet.tracking.duration) {
      timesheet.tracking.duration = "00:00";
    }
    this.apiService.putTimesheet(timesheet);
  }

  async check(event: any, timesheet: Timesheet) {
    event.stopPropagation();
    event.preventDefault();
    if (!event.target.checked) {
      this.selectedTimes.push(timesheet);
    } else {
      this.selectedTimes = this.selectedTimes.filter(i => i.id != timesheet.id);
    }
  }

  async merge() {
    if (!this.selectMode) {
      this.selectMode = true;
      return;
    }
    if (this.selectedTimes.length < 2) {
      this.utils.showToast('Select at least 2 timesheets');
      return;
    }
    const first = this.selectedTimes[0];
    first.text = Array.from(new Set(this.selectedTimes.map(i => i.text))).join('\n');
    let totalMinutes = this.selectedTimes.map(i => this.utils.parseDuration(i.tracking.duration)).reduce((i, j) => i + j);
    first.tracking.duration = this.stringifyDuration(totalMinutes * 60);
    this.selectedTimes.map(i => this.apiService.deleteTimesheet(i.id));
    await this.apiService.postTimesheet(first);
    this.scrollToY = document.getElementById(first.date).offsetTop;

    this.selectedTimes = [];
    this.selectMode = false;
    this.utils.showToast('Merged');
  }

  scrollTo(elementId: string) {
    this.ngZone.run(() => {
      this.scrollToElementId = elementId;
    });
  }
}
