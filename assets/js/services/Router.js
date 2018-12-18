import { Lifer } from '../services/Lifer.js';
import Home from '../controller/HomeController.js';
import Objects from '../views/frames/objects.js';
import Note from '../controller/NoteController.js';

export default class Router {


	constructor(path){

		let Me = 'Router';
		this.path = "Service-"+Me;
		Lifer.addMe(this.path);

		this.init();

		window.addEventListener('changeRoute', (e) => this[e.detail.frame](e));

	}

	init(){

		this.container = document.body;
		this.container.style.margin = "0px";

	}

	cleanBody(){

		this.container.innerHTML = "";

	}




	//CALLBACKS

	Home(){

		this.cleanBody();
		let home = new Home();

	}


	Objects(){

		this.cleanBody();
		let objects = new Objects("Objects",null);

	}


	Note(guid=null){

		//this.cleanBody();
		let note = new Note(guid);

	}


	NoteRemove(){

		let note = Lifer.getData("Frame-Note","This");
		note.destroyMe();

	}


}