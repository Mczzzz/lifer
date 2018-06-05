import Home from '../views/layout/home.js';
import Objects from '../views/layout/objects.js';

export default class Frame {


	constructor(){

	
		this.Home();


		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));



	}



	Home(){

		let home = new Home();
		let res = home.getHTMLPage();
		document.body.innerHTML = res;

	}


	Objects(){

		let objects = new Objects();
		let res = objects.getHTMLPage();
		document.body.innerHTML += res;


	}



}