import { Component, ElementRef, ViewChild } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';
import { ApiService } from 'src/app/services/api/api.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  @ViewChild('width', { static: true }) 
  widthElement: ElementRef;

  public view: any[] = null;

  public timesheets: Timesheet[] = []
  public timesheetsLastWeek: Timesheet[] = []
  public timesheetsLastMonth: Timesheet[] = []

  private lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  private lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  public totalHoursLastWeek = 0
  public payedHoursLastWeek = 0
  public chargeabilityLastWeek = 0

  public totalHoursLastMonth = 0
  public payedHoursLastMonth = 0
  public chargeabilityLastMonth = 0

  public data = [];

  public loading = false

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: string = 'left';

  colorScheme = {
    domain: ['#093948', '#A2C003', '#0085BA', '#DCC521', '#DB7C00', '#C81919']
  };

  private projects: any = {}

  constructor(
    private apiService: ApiService,
    private utils: UtilsService
  ) {
    this.doRefresh()
    this.apiService.timesUpdated.subscribe(() => this.doRefresh())
  }

  ionViewDidEnter(): void {
    let width = (this.widthElement as any).el.scrollWidth
    this.view = [width, width]
  }

  public async doRefresh(event?: any, force = false) {
    this.loading = true
    this.data = []
    setTimeout(() => {
      this.calculateStatistics()
      if (event) {
        event.target.complete();
      }
      this.loading = false
    }, 1000)
  }

  private async calculateStatistics() {
    this.timesheets = await this.apiService.getMyTimesheets()

    this.timesheetsLastWeek = this.timesheets.filter(timesheet => new Date(timesheet.date) >= this.lastWeek)
    this.timesheetsLastMonth = this.timesheets.filter(timesheet => new Date(timesheet.date) >= this.lastMonth)

    this.totalHoursLastWeek = this.timesheetsLastWeek.map(timesheet => this.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.payedHoursLastWeek = this.timesheetsLastWeek.filter(timesheet => timesheet.allowable_bill).map(timesheet => this.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.chargeabilityLastWeek = this.payedHoursLastWeek / this.totalHoursLastWeek * 100

    this.totalHoursLastMonth = this.timesheetsLastMonth.map(timesheet => this.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.payedHoursLastMonth = this.timesheetsLastMonth.filter(timesheet => timesheet.allowable_bill).map(timesheet => this.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.chargeabilityLastMonth = this.payedHoursLastMonth / this.totalHoursLastMonth * 100

    for (var i = 0; i < this.timesheetsLastMonth.length; i++) {
      let timesheet = this.timesheetsLastMonth[i]
      if (timesheet.project) {
        if (timesheet.project.name in this.projects) {
          this.projects[timesheet.project.name] += this.utils.parseDuration(timesheet.duration)
        } else {
          this.projects[timesheet.project.name] = this.utils.parseDuration(timesheet.duration)
        }
      } else {
        if ('Unknown' in this.projects) {
          this.projects['Unknown'] += this.utils.parseDuration(timesheet.duration)
        } else {
          this.projects['Unknown'] = this.utils.parseDuration(timesheet.duration)
        }
      }
    }

    let data = []
    for (const [key, value] of Object.entries(this.projects)) {
      data.push({
        "name": key,
        "value": value
      })
    }
    this.data = data
  }

}
