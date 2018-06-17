//import i18n from 'i18next';
import Home from '../views/layout/frames/home.js';
import Objects from '../views/layout/frames/objects.js';

export default class Frame {


	constructor(){

	
		this.Home();
		//this.active = "";

		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));



	}



	Home(){

		//this.active = "Home";
		$('body').empty();
		let home = new Home();

	}


	Objects(){

		//on vide le body
		$('body').empty();
		//on recharge le body
		let objects = new Objects();

	}



}