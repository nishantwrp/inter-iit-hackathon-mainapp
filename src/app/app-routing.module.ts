import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegisterComponent } from './login-register/login-register.component';
import { MapLandingComponent } from './map-landing/map-landing.component';
import { ProfileComponent } from './profile/profile.component';
import { StatusComponent } from './status/status.component';
import { HistoryComponent } from './history/history.component';
import { CameraPageComponent } from './camera-page/camera-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapLandingComponent
  },
  {
    path: 'loginregister',
    component: LoginRegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'camera',
    component: CameraPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
