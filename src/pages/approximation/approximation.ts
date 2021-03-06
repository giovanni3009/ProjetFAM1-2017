import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@Component({
  selector: 'page-approximation',
  templateUrl: 'approximation.html'
})


export class ApproximationPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: location.coords.latitude, lng: location.coords.longitude },
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: { lat: location.coords.latitude, lng: location.coords.longitude },
        radius: 1000,
        type: ['store','bank','hospital','airport','restaurant']
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
    var myplace = { lat: -33.8665, lng: 151.1956 };
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }



}
