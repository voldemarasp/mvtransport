import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormaPage } from './forma';
import { SubmitProvider } from '../../providers/submit/submit';

@NgModule({
  declarations: [
    FormaPage,
  ],
  imports: [
    IonicPageModule.forChild(FormaPage),
  ],
  providers: [
    SubmitProvider
  ]
})
export class FormaPageModule {}
