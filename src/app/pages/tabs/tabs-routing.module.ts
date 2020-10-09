import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'times',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../times/times.module').then(m => m.TimesModule)
          }
        ]
      },
      {
        path: 'stopwatch',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../stopwatch/stopwatch.module').then(m => m.StopwatchPageModule)
          }]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../projects/projects.module').then(m => m.ProjectsPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/times',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/times',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
