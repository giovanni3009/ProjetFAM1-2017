import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {

  constructor(public navCtrl: NavController, private toastctrl: ToastController) {

  }

  slider = [
    {
      title: 'Me localiser',
      description: 'Une application pour aider les gens desorientés à connaitre son emplacement et son entourage.',
      image:"/assets/imgs/a.jpg"
    },
    {
      title: 'Itinéraire',
      description: 'Une itinéraire sûr pour arriver à bonne destination, et pour bien mésurer son temps',
      image:"/assets/imgs/b.jpg"
    },
    {
      title: 'Mes lieux',
      description: 'Blalaalallalalaaaaa',
      image:"/assets/imgs/c.jpg"
    },
    {
      title: 'Autre fonction',
      description: 'Blalaalallalalaaaaa',
      image:"/assets/imgs/a.jpg"
    },
  ];

  slidechanded() {
    this.toastctrl.create({
      message: 'slide changed!'
    })
  }

}
