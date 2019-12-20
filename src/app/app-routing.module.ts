import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegisterComponent } from './login-register/login-register.component';
import { MapLandingComponent } from './map-landing/map-landing.component';
import { ProfileComponent } from './profile/profile.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
