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
      title: 'Bienvenue sur notre application!',
      description: '<p style="text-align : left">Une application pour aider les gens desorientés à connaitre des emplacements.<p>',
      image:"assets/imgs/a.jpg"
    },
    {
      title: 'Calcul d\'itinéraire :',
      description: 'Notre application est composée d\'une fonctionnalité de calcul d\'itinéraire de A à B.' ,
      image:"assets/imgs/b.jpg"
    },
    {
      title: 'Mes lieux!',
      description: 'On peut Enregistrer nos lieux favoris grâce à notre Local Storage.',
      image:"assets/imgs/c.jpg"
    },
    {
      title: 'D\'autres fonctionnalités...',
      description: 'Nous avons aussi une fonctionnalité météorologie et galerie.',
      image:"assets/imgs/d.jpg"
    },
  ];

}
