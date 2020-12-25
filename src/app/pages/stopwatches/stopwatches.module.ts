import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopwatchesPageRoutingModule } from './stopwatches-routing.module';

import { StopwatchesPage } from './stopwatches.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    StopwatchesPageRoutingModule
  ],
  declarations: [
    StopwatchesPage
  ]
})
export class StopwatchesPageModule {}
