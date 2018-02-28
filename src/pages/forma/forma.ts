import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubmitProvider } from '../../providers/submit/submit';


@IonicPage()
@Component({
  selector: 'page-forma',
  templateUrl: 'forma.html',
})
export class FormaPage {
  form = {};
  formSent: boolean;
  availableDays: any;
  selectedDate: string;
  
  constructor( public navCtrl: NavController, public navParams: NavParams, private submitProvider: SubmitProvider	) {
    this.selectedDate = navParams.get('date');
    
    this.form = { 'date': this.selectedDate, 'apikey': '987654321' };
    this.submitProvider.getDaysFromProvider().subscribe(
      gautaInfo => { this.availableDays = gautaInfo },
      err => { console.log(err) }
    );

    this.formSent = false;
  }
  
  ionViewDidLoad() {
    // console.log('ionViewDidLoad FormaPage');
  }
  
  goBack() {
    this.navCtrl.pop();
  }
  
  formSubmit() {
    this.submitProvider.sendByPost(this.form).then(
      res => (this.formSent = true, console.log('form is sent'))
    );
  }
}
