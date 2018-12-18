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

  start = '14.5768, 121.0332';
  end = '14.5746, 121.0423';

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouteDetailsPage');
    this.plt.ready().then(() => {

      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer({
        preserveViewport: true,
        // polylineOptions: polylineOptionsActual,
        suppressMarkers: true,
    
      });

      let mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.geolocation.getCurrentPosition().then(pos => {
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(16);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      directionsDisplay.setMap(this.map);
      this.calcRoute(directionsService, directionsDisplay);

      var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor: '#393'
      };

      // Create the polyline and add the symbol to it via the 'icons' property.
      var line = new google.maps.Polyline({
        path: [{lat: 14.5768, lng: 121.0332}, {lat: 14.5746, lng: 121.0423}],
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
        map: this.map
      });

      // this.animateCircle(line);

    });
  }

  calcRoute(dirServ, dirDis) {
    var request = {
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    };
    console.log(request);
    dirServ.route(request, function(result, status) {
      if (status == 'OK') {
        dirDis.setDirections(result);
        console.log('Success!!!');
      }
    });
  }

  // animateCircle(line) {
  //   var count = 0;
  //   window.setInterval(function() {
  //     count = (count + 1) % 200;

  //     var icons = line.get('icons');
  //     icons[0].offset = (count / 2) + '%';
  //     line.set('icons', icons);
  //   }, 400);
  // }

  goToScheduleTripPage() {
    this.navCtrl.push(ScheduleTripPage);
  }
}
