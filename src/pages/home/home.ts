import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormaPage } from '../../pages/forma/forma';
import { SubmitProvider } from '../../providers/submit/submit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // availableDays: any;
  pirmasI: any;
  pirmasIS: any;
  antrasI: any;
  antrasIS: any;
  
  constructor(public navCtrl: NavController, private sumbitProvider: SubmitProvider) {
    this.sumbitProvider.getDaysFromProvider()
    .subscribe(
      res => (
        this.pirmasI = res['pirmasI'], 
        this.pirmasIS = res['pirmasIS'], 
        this.antrasI = res['antrasI'], 
        this.antrasIS = res['antrasIS']
      ), // success path
      error => console.log('error'), // error path,
      () => (console.log(this.pirmasI))
    );
    // this.pirmasI = this.availableDays['pirmasI'];

  }
  
	pushPage(daySelected, month){
    this.navCtrl.push(FormaPage, {
      date: month + "/" + daySelected
    });
  }
}
