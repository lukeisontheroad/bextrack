import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthActions, AuthService } from 'ionic-appauth';
import { ClientService } from 'src/app/models/client_service';
import { Project } from 'src/app/models/project';
import { Timesheet } from 'src/app/models/timesheet';
import { TimesheetStatus } from 'src/app/models/timsheet_status';
import { User } from 'src/app/models/user';
import { Package } from 'src/app/models/package';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private limit = 300

  // private proxy = 'https://cors-proxy.azure.prod.gke.papers.tech/'
  private proxy = 'https://cors-proxy.bexio.prod.gke.papers.tech/'
  //private corsProxy = this.proxy + 'proxy?url='
  private corsProxy = 'https://cors-anywhere.herokuapp.com/'

  private baseUrl = this.corsProxy + 'https://api.bexio.com/'
  //private baseUrl = 'https://api.bexio.com/'

  private currentUser: User;
  private users: User[] = []
  private usersMap: any = {};
  private projects: Project[] = []
  private projectMap: any = {};
  private timesheets: Timesheet[] = []
  private timesheetStatus: TimesheetStatus[] = []
  private clientServicees: ClientService[] = []

  private packages: Package[] = []
  private cachedPackagesProjectId: any = {};
  private cachedPackagesPackageId: any = {};

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  public async init() {
    return new Promise(resolve => {
      let observer = this.authService.addActionListener(async (action) => {
        if (action.action === AuthActions.LoadUserInfoSuccess) {
          this.users = await this.http.get<any>(this.baseUrl + '3.0/users').toPromise()
          for (var i = 0; i < this.users.length; i++) {
            this.usersMap[this.users[i].id] = this.users[i]
          }

          await Promise.all([
            this.getTimesheetStatus(true),
            this.getClientService(true),
            this.getProjects(true)
          ]);

          for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].email === action.user.email) {
              this.currentUser = this.users[i]
              console.log('current user', this.currentUser)
              this.authService.removeActionObserver(observer)
              resolve()
            }
          }
        }
      })
      this.authService.loadUserInfo()

    })
  }



  public async getProjects(force = false): Promise<Project[]> {
    return new Promise(async (resolve, reject) => {
      if (force || this.projects.length === 0) {
        const projects = await this.http.post<Project[]>(this.baseUrl + '2.0/pr_project/search?order_by=name&limit=' + this.limit, [{ "field": "pr_state_id", "value": "2", "criteria": "=" }]).toPromise();
        this.projects = projects
        for (var i = 0; i < this.projects.length; i++) {
          this.projectMap[this.projects[i].id] = this.projects[i]
        }
      }
      resolve(this.projects)
    });
  }

  public async putTimesheet(timesheet: any): Promise<Timesheet> {
    return this.http.post<Timesheet>(this.baseUrl + '2.0/timesheet/' + timesheet.id, timesheet).toPromise()
  }

  public async postTimesheet(timesheet: any): Promise<Timesheet> {
    return this.http.post<Timesheet>(this.baseUrl + '2.0/timesheet', timesheet).toPromise()
  }

  public async deleteTimesheet(timesheet: any): Promise<Timesheet> {
    return this.http.delete<Timesheet>(this.baseUrl + '2.0/timesheet/' + timesheet.id).toPromise()
  }

  public async getTimesheetStatus(force = false): Promise<TimesheetStatus[]> {
    return new Promise(async (resolve, reject) => {
      if (force || this.timesheetStatus.length === 0) {
        this.timesheetStatus = await this.http.get<TimesheetStatus[]>(this.baseUrl + '2.0/timesheet_status').toPromise();
      }
      resolve(this.timesheetStatus)
    })
  }

  public async getClientService(force = false): Promise<ClientService[]> {
    return new Promise(async (resolve, reject) => {
      if (force || this.clientServicees.length === 0) {
        this.clientServicees = await this.http.get<ClientService[]>(this.baseUrl + '2.0/client_service').toPromise();
      }
      resolve(this.clientServicees)
    })
  }

  public async getTimesheet(time_id: number, force = false): Promise<Timesheet> {
    return new Promise(async (resolve, reject) => {
      if (!force) {
        let filteredTimesheets = this.timesheets.filter(timesheet => timesheet.id === time_id)
        if (filteredTimesheets.length === 1) {
          resolve(filteredTimesheets[0])
          return
        }
      }
      const timesheet = await this.http.get<Timesheet>(this.baseUrl + '2.0/timesheet/' + time_id).toPromise()
      timesheet.user = this.usersMap[timesheet.user_id]
      timesheet.project = this.projectMap[timesheet.pr_project_id]
      timesheet.package = this.cachedPackagesPackageId[timesheet.pr_package_id]
      resolve(timesheet)
    })
  }

  public async getTimesheets(user_id: number = -1): Promise<Timesheet[]> {
    return new Promise(async (resolve, reject) => {
      const timesheets: Timesheet[] = []
      if (user_id > -1) {
        const filter = [
          {
            "field": "user_id",
            "value": user_id,
            "criteria": "="
          }
        ]
        timesheets.push(...await await this.http.post<Timesheet[]>(this.baseUrl + '2.0/timesheet/search?order_by=date_desc&limit=50', filter).toPromise())
      } else {
        timesheets.push(...await this.http.get<Timesheet[]>(this.baseUrl + '2.0/timesheet?order_by=date_desc').toPromise())
      }

      for (var i = 0; i < timesheets.length; i++) {
        timesheets[i].user = this.usersMap[timesheets[i].user_id]
        timesheets[i].project = this.projectMap[timesheets[i].pr_project_id]
        timesheets[i].package = this.cachedPackagesPackageId[timesheets[i].pr_package_id]
      }
      this.timesheets = timesheets
      resolve(timesheets)
    })
  }

  public async getTimesheetsWithPackages(): Promise<Timesheet[]> {
    return new Promise(async (resolve, reject) => {
      const timesheets = await this.http.get<Timesheet[]>(this.baseUrl + '2.0/timesheet?order_by=date_desc').toPromise()

      for (var i = 0; i < timesheets.length; i++) {
        timesheets[i].user = this.usersMap[timesheets[i].user_id]
        timesheets[i].project = this.projectMap[timesheets[i].pr_project_id]
        timesheets[i].package = this.cachedPackagesPackageId[timesheets[i].pr_package_id]
      }

      resolve(timesheets)
    })
  }

  public getUsers(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      resolve(this.users)
    })
  }

  // public async getPackages(projects){
  //   for(var i = 0; i < projects.length; i++){
  //     this.packages.push(...(await this.getPackagesForProject(projects[i].id)))
  //   }
  //   for (var i = 0; i < -.length; i++) {
  //     projects[i].packages = this.cachedPackagesProjectId[projects[i].id]
  //   }
  // }

  public getPackageForProjectWithId(project_id: number, package_id: number): Promise<Package> {
    return this.http.get<Package>(this.baseUrl + '3.0/projects/' + project_id + '/packages/' + package_id).toPromise();
  }

  public getPackagesForProject(project_id: number): Promise<Package[]> {
    return this.http.get<Package[]>(this.baseUrl + '3.0/projects/' + project_id + '/packages/').toPromise();
  }

  public async getUser(): Promise<User> {
    return new Promise(async resolve => {
      resolve(this.currentUser)
    })
  }
}
