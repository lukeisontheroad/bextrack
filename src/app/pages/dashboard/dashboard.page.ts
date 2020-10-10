import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';
import { ToDurationPipe } from 'src/app/pipes/to-duration.pipe';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

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

  // options
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  private projects:any  = {}

  constructor(
    private apiService: ApiService
  ) {
  }

  private parseDuration(duration) {
    return parseInt(duration) + parseInt(duration.split(':')[1]) / 60
  }

  async ngOnInit() {
    this.timesheets = await this.apiService.getMyTimesheets(true)

    this.timesheetsLastWeek = this.timesheets.filter(timesheet => new Date(timesheet.date) >= this.lastWeek)
    this.timesheetsLastMonth = this.timesheets.filter(timesheet => new Date(timesheet.date) >= this.lastMonth)

    this.totalHoursLastWeek = this.timesheetsLastWeek.map(timesheet => this.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.payedHoursLastWeek = this.timesheetsLastWeek.filter(timesheet => timesheet.allowable_bill).map(timesheet => this.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.chargeabilityLastWeek = this.payedHoursLastWeek / this.totalHoursLastWeek * 100

    this.totalHoursLastMonth = this.timesheetsLastMonth.map(timesheet => this.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.payedHoursLastMonth = this.timesheetsLastMonth.filter(timesheet => timesheet.allowable_bill).map(timesheet => this.parseDuration(timesheet.duration)).reduce((a, b) => a + b)
    this.chargeabilityLastMonth = this.payedHoursLastMonth / this.totalHoursLastMonth * 100

    for(var i = 0; i < this.timesheetsLastMonth.length; i++){
      let timesheet = this.timesheetsLastMonth[i]
      if(timesheet.project){
        if(timesheet.project.name in this.projects){
          this.projects[timesheet.project.name] += this.parseDuration(timesheet.duration)
        }else{
          this.projects[timesheet.project.name] = this.parseDuration(timesheet.duration)
        }
      }else{
        if('Unknown' in this.projects){
          this.projects['Unknown'] += this.parseDuration(timesheet.duration)
        }else{
          this.projects['Unknown'] = this.parseDuration(timesheet.duration)
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
