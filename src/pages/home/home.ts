import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormaPage } from '../../pages/forma/forma';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {}
  
	pushPage(){
    this.navCtrl.push(FormaPage, {
      date: "2018.05.15"
    });
  }
}
