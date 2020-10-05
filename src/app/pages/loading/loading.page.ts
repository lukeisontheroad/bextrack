import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private auth: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.auth.loadTokenFromStorage().then(value => {
      if(this.auth.session.isAuthenticated){
        console.log('go to tabs')
        this.navCtrl.navigateRoot('tabs')
      }else{
        this.auth.refreshToken().then(value => {
          this.navCtrl.navigateRoot('tabs')
        }).catch(_ => {
          this.navCtrl.navigateRoot('login')
        })
      }
    }).catch(_ => {
      this.navCtrl.navigateRoot('login')
    });
  }

}
