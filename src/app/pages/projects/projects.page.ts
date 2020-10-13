import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
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

  @ViewChild(IonList, { static: true }) list: IonList;

  public projects: Project[] = []
  private allProjects: Project[] = []
  
  public showOnlyFavorites = false
  public favorites = []

  constructor(
    private apiService: ApiService,
    private storage: StorageService
    ) {
      this.init()
  }

  private async init(){
    this.showOnlyFavorites = await this.storage.getBoolean(STORAGE.PROJECTS_SHOW_FAVORITES, DEFAULTS.SHOW_FAVORITES)
    this.favorites = JSON.parse(await this.storage.getString(STORAGE.PROJECTS_FAVORITES, JSON.stringify(DEFAULTS.FAVORITES)))
    this.doRefresh();
    this.apiService.projectsUpdated.subscribe(() => this.doRefresh())
  }

  public async doRefresh(event?: any) {
    this.allProjects = await this.apiService.getProjects()
    this.setActiveList()

    if (event) {
      event.target.complete();
    }
  }

  public async toggleFavorites(){
    this.showOnlyFavorites = !this.showOnlyFavorites;
    await this.storage.setItem(STORAGE.PROJECTS_SHOW_FAVORITES, this.showOnlyFavorites)
    this.setActiveList()
  }

  private setActiveList(){
    if(this.showOnlyFavorites){
      this.projects = this.allProjects.filter(i => this.favorites.indexOf(i.id) > -1)
    }else{
      this.projects = this.allProjects
    }
  }

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

}
