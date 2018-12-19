import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { RouteDetailsPage } from '../pages/route-details/route-details';
import { SearchPage } from '../pages/search/search';
import { RouteListPage } from '../pages/route-list/route-list';
import { ScheduleTripPage } from '../pages/schedule-trip/schedule-trip';
import { ReservationPage } from '../pages/reservation/reservation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    RouteListPage,
    RouteDetailsPage,
    ScheduleTripPage,
    ReservationPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    RouteListPage,
    RouteDetailsPage,
    ScheduleTripPage,
    ReservationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
