import { Component } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

const { SplashScreen, Device } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private translateService: TranslateService,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    try {
      if (Capacitor.isNativePlatform()) {
        const language = await Device.getLanguageCode();
        this.translateService.use(language.value);

        // Hide the splash screen if the platform is native
        if (SplashScreen) {
          await SplashScreen.hide();
        }
      } else {
        // Fallback for web or unsupported platforms
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|fr|es|de/) ? browserLang : 'en');
      }
    } catch (error) {
      console.error('Error initializing app:', error);
      // Fallback to default language if there's an error
      this.translateService.setDefaultLang('en');
    }
  }
}
