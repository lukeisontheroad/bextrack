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

    // console.log('triggered')
    // let currentVersion = 8
    // let version = await this.storageService.getNumber('current_version')
    // console.log('version', version)
    // if(isNaN(version) || version < currentVersion){
    //   await this.storageService.removeItem('cap_sec_token_response', '')
    //   // await this.storageService.removeItem('cap_sec_kqTM0rk1LD_appauth_authorization_request')
    //   await this.storageService.setItem('current_version', currentVersion)
    //   console.warn('migration required - new login needed')
    //   this.utilsService.showToast('New permissions required - please sign in again')
    // }else{
    //   console.log('no migration required')
    // }

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
    if (action.error && action.action != AuthActions.LoadUserInfoFailed) {
      this.navCtrl.navigateRoot('login');
    }
  }

  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }
}
