import { Lifer } from '../services/Lifer.js';

import LoaderCollection  from '../services/LoaderCollection.js';

import Note           from '../views/frames/note.js';

export default class NoteController {


	constructor(guid=false){

		let Me = 'Note';

		this.path = "Controller-"+Me;

		Lifer.addMe(this.path);

		Lifer.addData(this.path,[{"This" : this}]);

		this.guid = guid;

		this.init();
	}




	init(){

		this.initView();

	}




	initView(){

		this.Note = new Note("Frame-Note",false,this.guid);

		if(this.guid) this.updateNote();
		
	}




	dataToStore(data){

		console.log("NOTE CONTROLLER - dataToStore");
		console.log(data);
		console.log(this.guid);
		//il faut que j'ajoute mon id
		//comme j'ai une data, je fais la demande de création au serveur
		//en attendant je local sorage et une fois que j'ai un retour
		//je suis pret pour envoyé l'info


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