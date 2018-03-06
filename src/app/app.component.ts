import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { ApproximationPage } from '../pages/approximation/approximation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AccueilPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  private showAccueil(page) {
    this.nav.setRoot(AccueilPage);
  }

  private showApproximation(page) {
    this.nav.setRoot(ApproximationPage);
  }

}

