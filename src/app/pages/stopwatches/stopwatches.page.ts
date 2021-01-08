import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonList, NavController } from '@ionic/angular';
import { StopwatchTemplateComponent } from 'src/app/components/stopwatch-template/stopwatch-template.component';
import { DEFAULTS, STORAGE } from 'src/app/models/constants';
import { Stopwatch } from 'src/app/models/stopwatch';
import { StopwatchesService } from 'src/app/services/stopwatches/stopwatches.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-stopwatches',
  templateUrl: './stopwatches.page.html',
  styleUrls: ['./stopwatches.page.scss'],
})
export class StopwatchesPage {
  
  public stopwatches:Stopwatch[] = []
  public loading = false

  @ViewChild(IonList, { static: true }) list: IonList;
  @ViewChildren(StopwatchTemplateComponent) stopwatchComponents: QueryList<StopwatchTemplateComponent>;


  constructor(
    private navController: NavController,
    private stopwatchesService: StopwatchesService,
    private storage: StorageService
  ) {
    this.stopwatchesService.stopwatches.subscribe(stopwatches => this.stopwatches = stopwatches)
    this.stopwatchesService.getCurrentStopwatch().subscribe(async stopwatch => {
      if(await this.storage.getBoolean(STORAGE.SETTINGS_STOPWATCH_SINGULAR, DEFAULTS.STOPWATCH_SINGULAR)){
        this.stopwatchComponents.filter(s => s.stopwatch.id != stopwatch.id).map(s => s.pauseTimer())
      }
    })
  }

  public async doRefresh(event?: any, force = false) {
    this.loading = true

    if (event) {
      event.target.complete();
    }
    setTimeout(()=> {
      this.loading = false
    }, 1000)
  }

  async delete(wasDeleted:boolean) {
    if(!wasDeleted){
      this.list.closeSlidingItems()
    }
  }

  async edit(id:string) {
    this.navController.navigateRoot('/stopwatch/' + id)
  }
}
