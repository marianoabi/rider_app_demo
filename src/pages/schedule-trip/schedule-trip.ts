import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, IonicPage, NavController } from 'ionic-angular';
import { ReservationPage } from '../reservation/reservation';


/**
 * Generated class for the ScheduleTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-trip',
  templateUrl: 'schedule-trip.html',
})
export class ScheduleTripPage {
  coordinates:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.coordinates = navParams.get('coordinates');
  }

  ionViewDidLoad() {
    // console.log(this.coordinates);
  }

  goToReservationPage() {
    this.navCtrl.push(ReservationPage);
  }
}