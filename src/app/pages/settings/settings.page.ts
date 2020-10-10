import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  public user: User

  constructor(
    private apiService: ApiService,
    private authService: AuthService,

    ) {
      this.getUser()
  }

  async getUser() {
    this.user = await this.apiService.getUser()
  }

  logout() {
    this.authService.signOut()
  }
}
