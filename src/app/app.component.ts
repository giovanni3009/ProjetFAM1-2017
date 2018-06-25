import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, App,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { ApproximationPage } from '../pages/approximation/approximation';
import { MelocaliserPage } from '../pages/melocaliser/melocaliser';
import { AproposPage } from '../pages/apropos/apropos';
import { TabsPage } from '../pages/tabs/tabs';
import { RecherchelieuPage } from '../pages/recherchelieu/recherchelieu';
import { LoginPage } from '../pages/login/login';
import { ItinerairePage } from '../pages/itineraire/itineraire';

/*
var firebaseConfig  = {
  apiKey: ,
  authDomain: "authprojetm12018-c8549.firebaseapp.com",
  databaseURL: "https://authprojetm12018-c8549.firebaseio.com",
  projectId: "authprojetm12018-c8549",
  storageBucket: "",
  messagingSenderId: "131770217650"
};*/

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = ApproximationPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public app : App, 
    public alertCtrl: AlertController) {
      

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //firebase.initializeApp(firebaseConfig);
    });
    
  }
  
  private showAccueil(page) {
    this.nav.setRoot(AccueilPage);

  }

  private showApproximation(page) {
    this.nav.setRoot(ApproximationPage);

  }

  private showItineraie(page) {
    this.nav.setRoot(ItinerairePage);

  }

  private showMelocaliser(page) {
    this.nav.setRoot(MelocaliserPage);

  }

  private showRecherchelieu(page) {
    this.nav.setRoot(RecherchelieuPage);
    
  }

    

  private showApropos(page) {
    this.nav.setRoot(AproposPage);

  }
  
  private logout() {

    let confirm = this.alertCtrl.create({
      title: 'Quitter?',
      message: 'Voulez-vous quitter l\'application?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Non');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.nav.setRoot(LoginPage);
            console.log('Oui');
          }
        }
      ]
    });
    confirm.present();

  }

}

