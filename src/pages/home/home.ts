import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormaPage } from '../../pages/forma/forma';
import { SubmitProvider } from '../../providers/submit/submit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
      error => console.log('error') // error path,
    );
  }
  
	pushPage(daySelected, month){
    this.navCtrl.push(FormaPage, {
      date: month + "/" + daySelected
    });
  }
}
