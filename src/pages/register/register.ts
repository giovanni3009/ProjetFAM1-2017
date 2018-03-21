import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
    
  user = {} as User;

    constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public alertCtrl: AlertController) {

  }

  async register(user: User){
    try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        if(result){
          this.navCtrl.push(LoginPage);
          let alert = this.alertCtrl.create({
            title: 'Succès!',
            subTitle: 'vous etes inscrits',
            buttons: ['OK']
          });
         return alert.present();
        }
    }
    catch (e) {
      let alert = this.alertCtrl.create({
        title: 'Erreur!',
        subTitle: 'email ou mot de passe incorrect.',
        buttons: ['OK']
      });
     return alert.present();
    }
  }

 
}
