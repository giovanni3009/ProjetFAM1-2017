import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { ListeapproximationPage } from '../listeapproximation/listeapproximation';
//import { ApproximationPage } from '../approximation/approximation';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'ListeapproximationPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }


}
