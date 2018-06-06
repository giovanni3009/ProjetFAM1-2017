import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { ApproximationPage } from '../pages/approximation/approximation';
import { MelocaliserPage } from '../pages/melocaliser/melocaliser';
import { AproposPage } from '../pages/apropos/apropos';
import { TabsPage } from '../pages/tabs/tabs';
import { ListeapproximationPage } from '../pages/listeapproximation/listeapproximation';
import { RecherchelieuPage } from '../pages/recherchelieu/recherchelieu';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ItinerairePage } from '../pages/itineraire/itineraire';
import { MapnearbyPage } from '../pages/mapnearby/mapnearby';
// import { MeteoPage } from '../pages/meteo/meteo';


import { Geolocation } from '@ionic-native/geolocation';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    ApproximationPage,
    AproposPage,
    MelocaliserPage,
    ListeapproximationPage,
    MapnearbyPage,
    TabsPage,
    RecherchelieuPage,
    LoginPage,
    RegisterPage,
    ItinerairePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    ApproximationPage,
    AproposPage,
    MelocaliserPage,
    ListeapproximationPage,
    MapnearbyPage,
    TabsPage,
    RecherchelieuPage,
    LoginPage,
    RegisterPage,
    ItinerairePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
