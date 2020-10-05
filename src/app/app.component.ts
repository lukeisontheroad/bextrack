import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './services/api/api.service';

const { SplashScreen, Device } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private translateService: TranslateService,
    private apiService: ApiService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async() => {
      // await this.apiService.init()
      let language = await Device.getLanguageCode()
      this.translateService.use(language.value);
      SplashScreen.hide();
    });
  }
}
