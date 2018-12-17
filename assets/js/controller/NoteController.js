import LoaderCollection  from '../services/LoaderCollection.js';

import Note           from '../views/frames/note.js';

export default class NoteController {


	constructor(guid=null){

		let Me = 'Note';

		this.path = "Controller-"+Me;

		Lifer.addMe(this.path);

		this.guid = guid;

		this.init();
	}




	init(){

		this.initView();

	}




	initView(){

		this.Note = new Note("Note",null,this.guid);

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