import Home from '../views/layout/home.js';
import Objects from '../views/layout/objects.js';

export default class Frame {


	constructor(){

	
		this.Home();
		//this.active = "";

		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));



	}



	Home(){

		//this.active = "Home";
		let home = new Home();

	}


	Objects(){

		//on recharge le body
		let objects = new Objects();

	}



}