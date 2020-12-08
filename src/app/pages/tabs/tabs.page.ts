import { Component } from '@angular/core';
import { DEFAULTS, STORAGE } from 'src/app/models/constants';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public modules = null

  constructor(
    private storage: StorageService
  ) {
    this.init()
  }

  async init(){
    this.modules = JSON.parse(await this.storage.getString(STORAGE.SETTINGS_MODULES, JSON.stringify(DEFAULTS.MODULES)))
  }

}
