import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'ionic-appauth';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private navCtrl: NavController,
    private apiService: ApiService
    ) { }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.auth.session.isAuthenticated) {
      this.navCtrl.navigateRoot('login');
    }

    // await this.apiService.init()

    return this.auth.session.isAuthenticated;
  }
}
