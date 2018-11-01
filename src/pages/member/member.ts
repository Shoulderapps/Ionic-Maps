import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutusPage } from '../../pages/aboutus/aboutus';

/**
 * Generated class for the MemberPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {

	// aboutUsPage = AboutusPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberPage');
  }

  topUpAccount(){
		console.log('ionViewDidLoad topUpAccount');
  }

  tradeRecord(){
		console.log('ionViewDidLoad tradeRecord');
  }

  bookingRecord(){
		console.log('ionViewDidLoad bookingRecord');
  }

  otherStuff(){
		console.log('ionViewDidLoad otherStuff');
  }

  aboutUs(){
		console.log('ionViewDidLoad aboutUs');
		this.navCtrl.push(AboutusPage);
  }

}
