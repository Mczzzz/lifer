import { Lifer } from '../services/Lifer.js';
import Home from '../views/frames/home.js';
import Objects from '../views/frames/objects.js';

export default class Frame {


	constructor(path){

		let Me = 'frame';
		this.path = path+"/"+Me;

		Lifer.addMe(this.path);
		Lifer.dumpMe();

		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));

	}


	

	Home(){

		//this.active = "Home";
		$('body').empty();
		let home = new Home(this.path);

	}


	Objects(){

		//on vide le body
		$('body').empty();
		//on recharge le body
		let objects = new Objects(this.path);

	}



}