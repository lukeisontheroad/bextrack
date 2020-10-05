import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthActions, IAuthAction, AuthObserver, AuthService } from 'ionic-appauth';
import { ApiService } from 'src/app/services/api/api.service';

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
      await this.apiService.init()
      this.navCtrl.navigateRoot('tabs');
    }

    if (action.action === AuthActions.SignInFailed) {
      console.log('SignInFailed redirect to login')
      this.navCtrl.navigateRoot('login');
    }
  }

}
