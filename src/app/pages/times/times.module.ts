import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimesPage } from './times.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    TranslateModule,
    CalendarModule,
    RouterModule.forChild([{ path: '', component: TimesPage }])
  ],
  declarations: [
    TimesPage, 
  ]
})
export class TimesPageModule {}
