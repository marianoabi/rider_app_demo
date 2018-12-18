import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, IonicPage, NavController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    console.log('test');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleTripPage');
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Reserve
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
    <ion-item>
        <h2>{{station.start}} -> {{station.destination}}</h2>
        <p>{{station.time}}</p>
    </ion-item>
    <ion-item *ngFor="let item of station['slots']">
        {{item.title}}
        <ion-note item-end>
        {{item.note}}
    </ion-note>
    </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  station;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var stations = [
      {
        start: 'North Edsa MRT',
        destination: 'Ortigas Station',
        time: '6:00 AM',
        slots: [
          { title: 'Wheelchair', note: '5' },
          { title: 'Non-wheelchair', note: '10' },
        ]
      },
      {
        start: 'Quezon Ave MRT',
        destination: 'Shaw Station',
        time: '6:30PM',
        slots: [
          { title: 'Wheelchair', note: '5' },
          { title: 'Non-wheelchair', note: '10' },
        ]
      }]
    this.station = stations[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

  // presentReserveTripModal() {
  //   // const modal = this.modalCtrl.create(ReservationModalPage);
  //   // modal.present();
  //   console.log('ionViewDidLoad asda');
  // }

// }
