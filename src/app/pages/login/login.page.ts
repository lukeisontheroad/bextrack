import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IAuthAction, AuthObserver, AuthService, AuthActions } from 'ionic-appauth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  action: IAuthAction;
  observer: AuthObserver;

  constructor(
    private auth: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.observer = this.auth.addActionListener((action) => this.onSignInSuccess(action));
  }

  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }

  onSignInSuccess(action: IAuthAction) {
    this.action = action;
    if (action.action === AuthActions.SignInSuccess ||
      action.action === AuthActions.LoadTokenFromStorageSuccess) {
      this.navCtrl.navigateRoot('loading');
    }
  }

  signIn() {
    this.auth.signIn();
  }
}
