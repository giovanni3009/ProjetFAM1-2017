import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;


@Component({
  selector: 'page-itineraire',
  templateUrl: 'itineraire.html'
})
export class ItinerairePage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    Destination: any = '';
    MonPosition: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public alertCtrl: AlertController) {
  //  this.Destination = { input: '' };
    
  }
/*
  ionViewDidLoad() { 
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }
*/
  calculateAndDisplayRoute() {

    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 46.627344, lng: -20.538878}
    });
    directionsDisplay.setMap(map);



    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        that.MonPosition = new google.maps.LatLng(pos);

      }, function() {
      });
    } else {
      // Browser doesn't support Geolocation 
    }


    directionsService.route({
      origin: this.MonPosition,
      destination: this.Destination,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        let alert = this.alertCtrl.create({
          title: 'Place inconnu',
          subTitle: 'Place introuvable.',
          buttons: ['OK']
        });
        return alert.present();
      }
    });
  }

}
