import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleSettingsPage } from './module-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleSettingsPageRoutingModule {}
