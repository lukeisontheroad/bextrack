import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthActions, AuthObserver, AuthService, IAuthAction } from 'ionic-appauth';
import { ApiService } from 'src/app/services/api/api.service';
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
    private utilsService: UtilsService
  ) { }

  async ngOnInit() {
    this.observer = this.auth.addActionListener((action) => this.actionHandler(action));
    this.auth.loadTokenFromStorage().then(async value => {
      this.auth.getValidToken().then( async() => {
        this.initApiService()
      }).catch(() => {
        this.auth.refreshToken().then(async value => {
          this.initApiService()
        })
      })
    })
  }

  async initApiService(){
    try {
      await this.apiService.init()
      this.navCtrl.navigateRoot('tabs')
    } catch (e) {
      if(e.error && e.error.error_code && e.error.error_code == 403 && e.error.message && e.error.message == 'You are not allowed to access this ressource.'){
        this.utilsService.showToast('no-time-permissions')
      }else if(e.error && e.error.message){
        this.utilsService.showToast(e.error.message)
      }else if(e.message){
        this.utilsService.showToast(e.message)
      }else{
        this.utilsService.showToast('Error: ' + JSON.stringify(e))
      }
      this.navCtrl.navigateRoot('login')
    }
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
