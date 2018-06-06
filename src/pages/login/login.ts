import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, AlertController} from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  //providers: [AngularFireAuth]
})

export class LoginPage {

  user = {} as User;
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public alertCtrl: AlertController) {

  }

  async login(user: User){
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result){
      this.navCtrl.push(AccueilPage);
      /*let alert = this.alertCtrl.create({
        title: 'Bienvenue!',
        subTitle: 'Bienvenue sur notre application.',
        buttons: ['OK']
      });
     return alert.present();*/
    }
    }
    catch(e)
    {
      console.error(e);
      let alert = this.alertCtrl.create({
        title: 'Login incorrect!',
        subTitle: 'email ou mot de passe erroné.',
        buttons: ['OK']
      });
     return alert.present();
    }
  }

  registerpage() {
    this.navCtrl.push(RegisterPage);
  }


}
