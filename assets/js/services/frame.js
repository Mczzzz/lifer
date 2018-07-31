import { Lifer } from '../services/Lifer.js';
import Home from '../views/frames/home.js';
import Objects from '../views/frames/objects.js';

export default class Frame {


	constructor(path){

		let Me = 'frame';
		this.path = path+"/"+Me;
		Lifer.addMe(this.path);

		this.init();

		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));

	}

	init(){

		this.container = document.body;
		this.container.style.margin = "0px";

	}

	

	Home(){

		let home = new Home(this.container,"Home",this.path);

	}


	Objects(){

		let objects = new Objects(this.container,false,this.path);

	}



}