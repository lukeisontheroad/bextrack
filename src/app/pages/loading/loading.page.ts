import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthActions, AuthObserver, AuthService, IAuthAction } from 'ionic-appauth';
import { ApiService } from 'src/app/services/api/api.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit, OnDestroy {

  observer: AuthObserver;

  constructor(
    private auth: AuthService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private storageService: StorageService,
    private utilsService: UtilsService
  ) { }

  async ngOnInit() {
    this.observer = this.auth.addActionListener((action) => this.actionHandler(action));
    this.auth.loadTokenFromStorage().then(async value => {
      this.auth.getValidToken().then( async() => {
        await this.apiService.init()
        this.navCtrl.navigateRoot('tabs')
      }).catch(() => {
        this.auth.refreshToken().then(async value => {
          await this.apiService.init()
          this.navCtrl.navigateRoot('tabs')
        })
      })
    })
  }

  actionHandler(action: IAuthAction) {
    console.log('actionhandler', action)
    if (action.error && action.action === AuthActions.LoadUserInfoFailed) {
      this.navCtrl.navigateRoot('login');
    }
  }

  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }
}
