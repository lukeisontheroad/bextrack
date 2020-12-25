import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StopwatchPage } from './stopwatch.page';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PipesModule,
    IonicSelectableModule,
    RouterModule.forChild([{ path: '', component: StopwatchPage }])
  ],
  declarations: [
    StopwatchPage,
  ]
})
export class CreateStopwatchPageModule {}
