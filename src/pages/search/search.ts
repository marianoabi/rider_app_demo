import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RouteListPage } from '../route-list/route-list';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  destination: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('viewDidLoad searchPage');
  }

  searchDestination() {
    if (typeof(this.destination) === 'undefined') {
      console.log('hahahha', this.destination);
      this.showAlert();
    } else {
      this.navCtrl.push(RouteListPage, {
        destination: this.destination
      });
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'No selection',
      subTitle: 'Please select your destination first.',
      buttons: ['Okay']
    });
    alert.present();
  }
}
