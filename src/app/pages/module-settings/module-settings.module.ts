import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleSettingsPageRoutingModule } from './module-settings-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { ModuleSettingsPage } from './module-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ModuleSettingsPageRoutingModule
  ],
  declarations: [ModuleSettingsPage]
})
export class NotificationSettingsPageModule {}
