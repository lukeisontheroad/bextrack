import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopwatchesPage } from './stopwatches.page';

const routes: Routes = [
  {
    path: '',
    component: StopwatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopwatchesPageRoutingModule {}
