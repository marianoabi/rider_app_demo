import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleTripPage } from './schedule-trip';

@NgModule({
  declarations: [
    ScheduleTripPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleTripPage),
  ],
})
export class ScheduleTripPageModule {}
