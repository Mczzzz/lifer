import { Lifer } from '../services/Lifer.js';

import LoaderCollection  from '../services/LoaderCollection.js';

import Note           from '../views/frames/note.js';

export default class NoteController {


	constructor(guid=false){

		let Me = 'Note';

		this.path = "Controller-"+Me;

		Lifer.addMe(this.path);

		console.log("Constructor");
		console.log(guid);


		this.guid = guid;

		this.init();
	}




	init(){

		this.initView();

	}




	initView(){
		console.log("initView");
		console.log(this.guid);

		this.Note = new Note("Frame-Note",false,this.guid);

		if(this.guid) this.updateNote();
		
	}









	updateNote(){


		//je recherche ce que j'ai en local
			//je load ma collection locale
			this.NoteCollection = new LoaderCollection('Note');
			

		//je fais une demande serveur

		//Je match les mises à jour et s'il y en a je les appliques en update à ma note



	}






	store(){


		this.localStorage();

		this.serveurStorage();


	}




	_localStorage(){



	}


	_serverStorage(){



	}



}