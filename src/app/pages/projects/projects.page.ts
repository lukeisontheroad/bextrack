import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss']
})
export class ProjectsPage {

  public projects: Project[] = []
  private allProjects: Project[] = []
  
  public showOnlyFavorites = false
  public favorites = []

  constructor(private apiService: ApiService) {
    if(localStorage.getItem('favorites')){
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
    }

    if(localStorage.getItem('showOnlyFavorites')){
      this.showOnlyFavorites = JSON.parse(localStorage.getItem('showOnlyFavorites'))
    }

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

  public toggleFavorites(){
    this.showOnlyFavorites = !this.showOnlyFavorites;
    localStorage.setItem('showOnlyFavorites', JSON.stringify(this.showOnlyFavorites))
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
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

}
