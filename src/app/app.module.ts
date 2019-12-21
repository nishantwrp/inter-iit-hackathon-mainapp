import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProfileComponent } from './profile/profile.component';
import { MapLandingComponent } from './map-landing/map-landing.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { HistoryComponent } from './history/history.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraPageComponent } from './camera-page/camera-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    ProfileComponent,
    MapLandingComponent,
    StatusComponent,
    HistoryComponent,
    CameraPageComponent,
    SuccessPageComponent,
    ReviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
