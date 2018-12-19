import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  onReserveNowButton() {
    const alert = this.alertCtrl.create({
      title: 'Are you sure you want reserve now?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Reserved clicked');
            this.onReservationSuccess();
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Cancel clicked');
          }
        }

      ]
    });
    alert.present();
  }

  onReservationSuccess() {
    this.presentToast();
    this.goToHomePage();
  }

  goToHomePage() {
    this.navCtrl.push(SearchPage);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Reservation Successful!',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
