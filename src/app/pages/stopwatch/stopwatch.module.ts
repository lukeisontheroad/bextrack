import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopwatchPageRoutingModule } from './stopwatch-routing.module';

import { StopwatchPage } from './stopwatch.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    StopwatchPageRoutingModule
  ],
  declarations: [StopwatchPage]
})
export class StopwatchPageModule {}
