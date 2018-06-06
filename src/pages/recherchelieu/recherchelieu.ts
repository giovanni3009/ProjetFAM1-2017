import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';



declare var google;
 


@Component({
  selector: 'page-recherchelieu',
  templateUrl: 'recherchelieu.html'
})
export class RecherchelieuPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  markers: any;

    constructor(public navCtrl: NavController, public geolocation: Geolocation, public zone: NgZone,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {


      this.geocoder = new google.maps.Geocoder;
      this.markers = [];
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];

    
  }

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

  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    /*else { 
      
    }*/
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {

      if (status != google.maps.places.PlacesServiceStatus.OK) {
        let alert = this.alertCtrl.create({
          title: 'Place inconnue',
          subTitle: 'Cette place est introuvable!',
          buttons: ['OK']
        });
       return alert.present();
       
      }

      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    }
  );
  }
  

  selectSearchResult(item){
    //this.clearMarkers();
    this.autocompleteItems = [];
  
    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        let position = {
            lat: results[0].geometry.location.lat,
            lng: results[0].geometry.location.lng
        };
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
        let content = "<center><h5>C\'est ici</h5></center>";
        this.addInfoWindow(marker, content);
      }
    })
  }
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }



}
