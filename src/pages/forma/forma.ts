import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubmitProvider } from '../../providers/submit/submit';

/**
 * Generated class for the FormaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forma',
  templateUrl: 'forma.html',
})
export class FormaPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private sumbitProvider: SubmitProvider, 
	public alertCtrl: AlertController
	) {
     let id = navParams.get('date');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormaPage');
  }

}
