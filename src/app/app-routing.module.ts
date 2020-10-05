import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  // {
  //   path: 'tabs/:tab',
  //   pathMatch: 'full',
  //   redirectTo: 'loading',
  // },
  {
    path: 'tabs',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'create-time',
    loadChildren: () => import('./pages/time/time.module').then(m => m.CreateTimePageModule)
  },
  {
    path: 'create-time/:project_id',
    loadChildren: () => import('./pages/time/time.module').then(m => m.CreateTimePageModule)
  },
  {
    path: 'create-time/:project_id/:package_id',
    loadChildren: () => import('./pages/time/time.module').then(m => m.CreateTimePageModule)
  },
  {
    path: 'display-time/:time_id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/time/time.module').then(m => m.CreateTimePageModule)
  },
  {
    path: 'auth/callback',
    loadChildren: () => import('./pages/auth-callback/auth-callback.module').then(m => m.AuthCallbackPageModule)
  },
  {
    path: 'auth/endsession',
    loadChildren: () => import('./pages/end-session/end-session.module').then(m => m.EndSessionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    // canActivate: [AuthGuardService],
    redirectTo: 'loading',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: environment.useHash })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
