import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

import { ScheduleTripPage } from '../schedule-trip/schedule-trip';

/**
 * Generated class for the RouteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google;

@IonicPage()
@Component({
  selector: 'page-route-details',
  templateUrl: 'route-details.html',
})
export class RouteDetailsPage {
  @ViewChild('map')mapElement: ElementRef;
  map: any;
  destination: string;
  route: string;
  // pickup = '14.6245, 121.0493';
  pickup = [
    {
      location : 'Sta. Rosa',
      coordinates : '15.4251, 120.9384'
    },
    {
      location : 'Isabela',
      coordinates : '16.9754, 121.8107'
    },
    {
      location : 'Olongapo City',
      coordinates : '14.8386, 120.2842'
    }
  ]; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private geolocation: Geolocation) {
    this.destination = navParams.get('destination');
    this.route = navParams.get('route');
  }

  ionViewDidLoad() {
      this.calcRoute(this.pickup);
  }

  calcRoute(pickups) {
    var i = 0;
    var directionsService = new google.maps.DirectionsService();

    let mapOptions = {
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.geolocation.getCurrentPosition().then(pos => {
      let splitted = this.destination.split(',',2);
      console.log(splitted);
      // let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      let latLng = new google.maps.LatLng(splitted[0], splitted[1]);
      map.setCenter(latLng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
    for(i = 0; i < pickups.length; i++){
      // console.log(pickups[this.i].coordinates);
      var request = {
        origin: pickups[i].coordinates,
        destination: this.destination,
        travelMode: 'DRIVING'
      };

      directionsService.route(request, function(result, status){
        if (status == 'OK') {
          let directionsDisplay = new google.maps.DirectionsRenderer({ preserveViewport: true, suppressMarkers: false });
          directionsDisplay.setMap(map);
          directionsDisplay.setDirections(result);
        }
      });
    }
  }

  goToScheduleTripPage(pickup_location) {
    this.navCtrl.push(ScheduleTripPage, {
      destination: this.destination,
      route: this.route,
      pickup: pickup_location
    });
  }
}
