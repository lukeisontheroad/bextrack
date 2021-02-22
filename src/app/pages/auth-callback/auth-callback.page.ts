import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthActions, IAuthAction, AuthObserver, AuthService } from 'ionic-appauth';
import { ApiService } from 'src/app/services/api/api.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.page.html',
  styleUrls: ['./auth-callback.page.scss'],
})
export class AuthCallbackPage implements OnInit, OnDestroy {
  observer: AuthObserver;

  constructor(
    private auth: AuthService,
    private apiService: ApiService,
    private utilsService: UtilsService,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.observer = this.auth.addActionListener((action) => this.postCallback(action));
    this.auth.handleCallback(window.location.origin + this.router.url);
  }

  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }

  async postCallback(action: IAuthAction) {
    if (action.action === AuthActions.SignInSuccess) {
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

    if (action.action === AuthActions.SignInFailed) {
      this.utilsService.showToast('sign-in-failed')
      console.log('SignInFailed redirect to login')
      this.navCtrl.navigateRoot('login');
    }
  }

}
