import { Lifer } from '../services/Lifer.js';
import Home from '../views/frames/home.js';
import Objects from '../views/frames/objects.js';

export default class Frame {


	constructor(path){

		let Me = 'frame';
		this.path = path+"/"+Me;
		Lifer.addMe(this.path);

		this.container = document.body;


		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));

	}


	

	Home(){

		let home = new Home(this.container,false,this.path);

	}


	Objects(){

		let objects = new Objects(this.container,false,this.path);

	}



}