import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthObserver, AuthService, IAuthAction } from 'ionic-appauth';
import { ApiService } from 'src/app/services/api/api.service';

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
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.observer = this.auth.addActionListener((action) => this.actionHandler(action));
    this.auth.loadTokenFromStorage().then(async value => {
      if (this.auth.session.isAuthenticated) {
        await this.apiService.init()
        console.log('go to tabs')
        this.navCtrl.navigateRoot('tabs')
      } else {
        this.auth.refreshToken().then(async value => {
          await this.apiService.init()
          this.navCtrl.navigateRoot('tabs')
        })
      }
    })
  }

  actionHandler(action: IAuthAction) {
    if (action.error) {
      this.navCtrl.navigateRoot('login');
    }
  }

  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }
}
