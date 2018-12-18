import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RouteDetailsPage } from '../route-details/route-details';

/**
 * Generated class for the RouteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route-list',
  templateUrl: 'route-list.html',
})
export class RouteListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouteListPage');
  }

  onRouteClick() {
    this.navCtrl.push(RouteDetailsPage);
  }
}
