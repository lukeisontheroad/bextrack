import { Component, ViewChild } from '@angular/core';
import { IonContent, IonList, NavController } from '@ionic/angular';
import { Stopwatch } from 'src/app/models/stopwatch';
import { StopwatchesService } from 'src/app/services/stopwatches/stopwatches.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-stopwatches',
  templateUrl: './stopwatches.page.html',
  styleUrls: ['./stopwatches.page.scss'],
})
export class StopwatchesPage {
  
  public stopwatches = []
  public loading = false

  @ViewChild(IonList, { static: true }) list: IonList;

  constructor(
    private storage: StorageService,
    private utils: UtilsService,
    private navController: NavController,
    private stopwatchesService: StopwatchesService
  ) {
    this.stopwatchesService.stopwatches.subscribe(stopwatches => this.stopwatches = stopwatches)
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
