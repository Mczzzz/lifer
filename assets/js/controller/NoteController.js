import { Lifer } from '../services/Lifer.js';

import { DatasSynchronizing } from '../services/DatasSynchronizing.js';

import LoaderCollection  from '../services/LoaderCollection.js';

import Note           from '../views/frames/note.js';

export default class NoteController {


	constructor(guid=false){

		let Me = 'Note';

		this.path = "Controller-"+Me;

		Lifer.addMe(this.path);

		Lifer.addData(this.path,[{"This" : this}]);

		this.guid = guid;

		this.title = "";

		this.init();
	}




	init(){

		this.initView();

	}




	initView(){

		this.Note = new Note("Frame-Note",false,this.guid);

		if(this.guid) this.updateNote();
		
	}


	setTitle(title){

		this.title = title;
		this.dataToStore();

	}



	dataToStore(data=false){

		if(!data) data = {};
		console.log('in dataStore');
		console.log(data);

		data.collection = "Note"; 

		if (!this.guid) this.guid = "tmp-"+Lifer.newTmpId();
			
		data.NoteId = this.guid;
		data.NoteTitle = this.title;
		

		DatasSynchronizing.store(data);


	}




	updateNote(){


		//je recherche ce que j'ai en local
			//je load ma collection locale
			this.NoteCollection = new LoaderCollection('Note');
			

		//je fais une demande serveur

		//Je match les mises à jour et s'il y en a je les appliques en update à ma note



	}





}