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

		this.ChildId = 0;

	}




	initView(guid=false){

		let NewNote = new Note("Frame-Note_"+this.ChildId,guid);
		this.ChildId++;
		
		
	}




	dataToStore(data=false){

	
		if(data){

			data.collection = "Notes";
			DatasSynchronizing.store(data);

		} 

	}









}