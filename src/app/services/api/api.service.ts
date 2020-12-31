import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthActions, AuthService } from 'ionic-appauth';
import { ClientService } from 'src/app/models/client_service';
import { Project } from 'src/app/models/project';
import { Timesheet } from 'src/app/models/timesheet';
import { TimesheetStatus } from 'src/app/models/timsheet_status';
import { User } from 'src/app/models/user';
import { Package } from 'src/app/models/package';
import { Contact } from 'src/app/models/contact';
import { UtilsService } from '../utils/utils.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  @Output()
  timesUpdated = new EventEmitter();

  @Output()
  projectsUpdated = new EventEmitter();

  @Output()
  contactsUpdated = new EventEmitter();

  private limit = 300
  private corsProxy = 'https://cors.bextrack.com/'
  private baseUrl = this.corsProxy + 'https://api.bexio.com/'

  private currentUser: User;
  private users: User[] = []
  private usersMap: any = {};
  private projects: Project[] = []
  private contacts: Contact[] = []
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
    private utilsService: UtilsService
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
            this.getProjects(true),
            // this.getContacts(true)
          ]);

          // this.getPackages()

          for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].email === action.user.email) {
              this.currentUser = this.users[i]
              this.authService.removeActionObserver(observer)
              resolve()
            }
          }
        }
      })
      this.authService.loadUserInfo()
    })
  }

  public async getContacts(force = false): Promise<Contact[]> {
    return new Promise(async (resolve, reject) => {
      if (force || this.projects.length === 0) {
        const contacts = await this.http.get<Contact[]>(this.baseUrl + '2.0/contact/?order_by=name_1_asc').toPromise();
        this.contacts = contacts
        this.contactsUpdated.next()
      }
      resolve(this.contacts)
    });
  }

  public async getProjects(force = false): Promise<Project[]> {
    return new Promise(async (resolve, reject) => {
      if (force || this.projects.length === 0) {
        const projects = await this.http.post<Project[]>(this.baseUrl + '2.0/pr_project/search?order_by=name&limit=' + this.limit, [{ "field": "pr_state_id", "value": "2", "criteria": "=" }]).toPromise();
        this.projects = projects
        for (var i = 0; i < this.projects.length; i++) {
          this.projects[i].packages = this.cachedPackagesProjectId[this.projects[i].id]
          if(this.projects[i].packages){
            this.projects[i].spent_time_in_hours = 0
            this.projects[i].estimated_time_in_hours = 0
            
            for(var j = 0; j < this.projects[i].packages.length; j++){
              if(this.projects[i].packages[j].estimated_time_in_hours) this.projects[i].estimated_time_in_hours += this.projects[i].packages[j].estimated_time_in_hours
              if(this.projects[i].packages[j]) this.projects[i].spent_time_in_hours += this.projects[i].packages[j].spent_time_in_hours
            }
          }
          this.projectMap[this.projects[i].id] = this.projects[i]
        }
        this.projectsUpdated.next()
      }
      resolve(this.projects)
    });
  }

  private prepareTimesheetForApi(timesheet:Timesheet){
    delete timesheet.travel_time
    delete timesheet.travel_charge
    delete timesheet.travel_distance
    delete timesheet.date
    delete timesheet.duration
    delete timesheet.running
    delete timesheet.user
    delete timesheet.project
    delete timesheet.package
    if(timesheet.tracking.type === 'duration'){
      delete timesheet.tracking.start
      delete timesheet.tracking.end
    }else{
      timesheet.tracking.start = new DatePipe('en-US').transform(timesheet.tracking.start, 'yyyy-MM-dd HH:mm');
      timesheet.tracking.end = new DatePipe('en-US').transform(timesheet.tracking.end, 'yyyy-MM-dd HH:mm');

      delete timesheet.tracking.date
      delete timesheet.tracking.duration
    }
    return timesheet
  }

  public async putTimesheet(timesheet: Timesheet): Promise<Timesheet> {
    let preparedTimesheet = this.prepareTimesheetForApi(timesheet)
    delete preparedTimesheet.tracking.type
    return new Promise(async (resolve, reject) => {
      let newTimesheet = await this.http.post<Timesheet>(this.baseUrl + '2.0/timesheet/' + timesheet.id, preparedTimesheet).toPromise()
      this.getMyTimesheets(true)
      resolve(newTimesheet)
    })
  }

  public async postTimesheet(timesheet: Timesheet): Promise<Timesheet> {
    let preparedTimesheet = this.prepareTimesheetForApi(timesheet)
    delete preparedTimesheet.id
    return new Promise(async (resolve, reject) => {
      let newTimesheet = await this.http.post<Timesheet>(this.baseUrl + '2.0/timesheet', preparedTimesheet).toPromise()
      this.getMyTimesheets(true)
      resolve(newTimesheet)
    })
  }

  public async deleteTimesheet(id: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
      await this.http.delete<Timesheet>(this.baseUrl + '2.0/timesheet/' + id).toPromise()
      this.getMyTimesheets(true)
      resolve()
    })
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
      timesheet.tracking = this.utilsService.prepareTracking(timesheet.tracking)
      resolve(timesheet)
    })
  }

  public getMyTimesheets(force=false): Promise<Timesheet[]>{
    return new Promise(async (resolve, reject) => {
      let user = await this.getUser()
      let timesheets = await this.getTimesheets(user.id, force)
      if(force){
        this.timesUpdated.next()
      }
      resolve(timesheets)
    })
  }

  public searchContact(value): Promise<Contact[]> {
    return new Promise(async (resolve, reject) => {
      let firstname = this.http.post<Contact[]>(this.baseUrl + '2.0/contact/search?limit=20', [
        {
          "field": "name_1",
          "value": value,
          "criteria": "like"
        }
      ]).toPromise()
      let lastname = this.http.post<Contact[]>(this.baseUrl + '2.0/contact/search?limit=20', [
        {
          "field" : "name_2",
          "value" : value,
          "criteria" : "like"
        }
      ]).toPromise()      

      resolve([...await firstname, ...await lastname])
    })
  }

  public async getTimesheets(user_id: number = -1, force = false): Promise<Timesheet[]> {
    return new Promise(async (resolve, reject) => {
      if (force || this.timesheets.length === 0) {
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
          // timesheets.map(timesheet => {
          //   timesheet.tracking = {
          //     duration: timesheet.duration,
          //     date: timesheet.date,
          //     type: 'duration'
          //   }
          //   return timesheet
          // })
        } else {
          timesheets.push(...await this.http.get<Timesheet[]>(this.baseUrl + '2.0/timesheet?order_by=date_desc').toPromise())
        }

        for (var i = 0; i < timesheets.length; i++) {
          timesheets[i].user = this.usersMap[timesheets[i].user_id]
          timesheets[i].project = this.projectMap[timesheets[i].pr_project_id]
          timesheets[i].package = this.cachedPackagesPackageId[timesheets[i].pr_package_id]

          timesheets[i].tracking = this.utilsService.prepareTracking(timesheets[i].tracking)

        }
        this.timesheets = timesheets
      } 
      resolve(this.timesheets)
    })
  }

  // public async getTimesheetsWithPackages(): Promise<Timesheet[]> {
  //   return new Promise(async (resolve, reject) => {
  //     const timesheets = await this.http.get<Timesheet[]>(this.baseUrl + '2.0/timesheet?order_by=date_desc').toPromise()

  //     for (var i = 0; i < timesheets.length; i++) {
  //       timesheets[i].user = this.usersMap[timesheets[i].user_id]
  //       timesheets[i].project = this.projectMap[timesheets[i].pr_project_id]
  //       timesheets[i].package = this.cachedPackagesPackageId[timesheets[i].pr_package_id]
  //     }

  //     resolve(timesheets)
  //   })
  // }

  public getUsers(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      resolve(this.users)
    })
  }

  public async getPackages(force = false) {
    await this.getProjects(force)
    let promises = []
    for (var i = 0; i < this.projects.length; i++) {
      const projectid = this.projects[i].id
      let promise = this.getPackagesForProject(projectid).then(packagesForProject => {
        this.cachedPackagesProjectId[projectid] = packagesForProject
        for (var j = 0; j < packagesForProject.length; j++) {
          this.cachedPackagesPackageId[packagesForProject[j].id] = packagesForProject
        }
        this.packages.push(...packagesForProject)
      })
      promises.push(promise)
    }
    await Promise.all(promises);
    await this.getProjects(true)
    this.projectsUpdated.next()
  }

  public getPackageForProjectWithId(project_id: number, package_id: number): Promise<Package> {
    return this.http.get<Package>(this.baseUrl + '3.0/projects/' + project_id + '/packages/' + package_id).toPromise();
  }

  public getPackagesForProject(project_id: number): Promise<Package[]> {
    return this.http.get<Package[]>(this.baseUrl + '3.0/projects/' + project_id + '/packages').toPromise();
  }

  public async getUser(): Promise<User> {
    return new Promise(async resolve => {
      resolve(this.currentUser)
    })
  }
}
