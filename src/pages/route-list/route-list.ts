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
  destination: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.destination = navParams.get('destination');
  }

  ionViewDidLoad() {
    console.log('destination is', this.destination);
  }

  onRouteClick(route) {
    this.navCtrl.push(RouteDetailsPage, {
      destination: this.destination,
      route: route
    });
  }
}
