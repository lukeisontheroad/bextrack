import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'ionic-appauth';
import { Router } from '@angular/router';
import { StorageBackend } from '@openid/appauth';

@Component({
  selector: 'app-end-session',
  templateUrl: './end-session.page.html',
  styleUrls: ['./end-session.page.scss'],})
export class EndSessionPage implements OnInit {

  constructor(
    private auth: AuthService,
    private navCtrl: NavController,
    private router: Router,
    private storageBackend: StorageBackend
  ) { }

  async ngOnInit() {
    this.auth.handleCallback(window.location.origin + this.router.url);
    await this.storageBackend.clear()
    this.navCtrl.navigateRoot('login')
    ;
  }

}
