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


		this.init();
	}




	init(){

		this.initView();

	}




	initView(){

		let id = "tmp-"+Lifer.newTmpId();
		let Note = new Note("Frame-Note_"+id,false,id);

		//
		
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









}