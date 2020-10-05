import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'ionic-appauth';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private navCtrl: NavController) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(req.url.startsWith(environment.auth_config.server_host) || req.url.startsWith('./assets/')){
      return next.handle(req)
    }else{
      return from(this.handle(req, next))
    }
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    if(!this.auth.session.isAuthenticated){
      this.navCtrl.navigateRoot('login')
      return
    }
    const token = await this.auth.getValidToken()
    const authReq = req.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token.accessToken
      }
    })
    return next.handle(authReq).toPromise()
  }
}