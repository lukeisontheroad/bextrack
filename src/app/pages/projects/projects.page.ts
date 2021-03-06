import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonList, IonSelect } from '@ionic/angular';
import { DEFAULTS, STORAGE } from 'src/app/models/constants';
import { Project } from 'src/app/models/project';
import { ApiService } from 'src/app/services/api/api.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss']
})
export class ProjectsPage {

  loading = true
  public skeletons = new Array(30);

  @ViewChild(IonList, { static: true }) list: IonList;

  public projects: Project[] = []
  private allProjects: Project[] = []
  
  public showOnlyFavorites = false
  public currentFilter = ''
  public searchString = ''
  public favorites = []

  constructor(
    private apiService: ApiService,
    private storage: StorageService
    ) {
      this.init()
  }

  private async init(){
    this.currentFilter = await this.storage.getString(STORAGE.PROJECTS_CURRENT_FILTER, DEFAULTS.CURRENT_FILTER)
    this.showOnlyFavorites = await this.storage.getBoolean(STORAGE.PROJECTS_SHOW_FAVORITES, DEFAULTS.SHOW_FAVORITES)
    this.favorites = JSON.parse(await this.storage.getString(STORAGE.PROJECTS_FAVORITES, JSON.stringify(DEFAULTS.FAVORITES)))
    this.doRefresh();
    this.apiService.projectsUpdated.subscribe(async () => {
      this.allProjects = await this.apiService.getProjects()
      this.setActiveList()
    })
  }

  public async doRefresh(event?: any) {
    this.loading = true
    await this.apiService.getPackages(true)
    if (event) {
      event.target.complete();
    }
    this.loading = false
  }

  public async toggleFavorites(){
    this.showOnlyFavorites = !this.showOnlyFavorites;
    await this.storage.setItem(STORAGE.PROJECTS_SHOW_FAVORITES, this.showOnlyFavorites)
    this.setActiveList()
  }

  public setActiveList(){
    if(this.showOnlyFavorites){
      this.projects = this.allProjects.filter(i => this.favorites.indexOf(i.id) > -1)
    }else{
      this.projects = this.allProjects
    }

    if(this.currentFilter === '1'){
      this.projects = this.projects.filter(i => i.packages.length > 0)
    }else if(this.currentFilter === '2'){
      this.projects = this.projects.filter(i => i.spent_time_in_hours > 0)
    }

    if(this.searchString.length > 0){
      this.projects = this.projects.filter(i => i.name.toLocaleLowerCase().indexOf(this.searchString.toLocaleLowerCase()) > -1)
    }
  }

  @ViewChild('sectionSelect') sectionSelect: IonSelect;


  public favorite(id){
    if(this.favorites.indexOf(id) === -1){
      this.favorites.push(id);
    }else{
      this.favorites = this.favorites.filter(obj => obj !== id);
    }
    this.storage.setItem(STORAGE.PROJECTS_FAVORITES, JSON.stringify(this.favorites))
    this.list.closeSlidingItems()
    this.doRefresh()
  }

  public toggleFilters(event){
    this.sectionSelect.open(event);
  }

  public filterSet(event){
    this.currentFilter = event.detail.value
    this.setActiveList()
    this.storage.setItem(STORAGE.PROJECTS_CURRENT_FILTER, this.currentFilter)
  }

}
