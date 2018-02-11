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
  availableDays: any;
  selectedDate: string;
  
  constructor( public navCtrl: NavController, public navParams: NavParams, private sumbitProvider: SubmitProvider	) {
    this.selectedDate = navParams.get('date');

    this.form = { 'date': this.selectedDate, 'apikey': '123' };
    this.sumbitProvider.getDaysFromProvider().subscribe(
      gautaInfo => { this.availableDays = gautaInfo },
      err => { console.log(err) }
    );
  }
  
  ionViewDidLoad() {
    // console.log('ionViewDidLoad FormaPage');
  }
  
  formSubmit() {
    this.sumbitProvider.sendByPost(this.form);
    console.log(this.form);
  }
  
}
