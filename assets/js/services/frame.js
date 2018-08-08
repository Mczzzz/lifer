import { Lifer } from '../services/Lifer.js';
import Home from '../views/frames/home.js';
import Objects from '../views/frames/objects.js';
import Note from '../views/frames/note.js';

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

	cleanBody(){

		this.container.innerHTML = "";

	}



	//CALLBACKS

	Home(){

		this.cleanBody();
		let home = new Home("Home",null);

	}


	Objects(){

		this.cleanBody();
		let objects = new Objects("Objects",null);

	}


	Note(){
		
		this.cleanBody();
		let note = new Note("Note",null);

	}


/*	NoteRemove(){

		let note = Lifer.getData("Note","This");
		note.destroyMe();

	}*/


}