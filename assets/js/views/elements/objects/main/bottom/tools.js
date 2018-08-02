import superViews from "../../../common/super/views.js";
import Search from './tools/search.js';
import Note from './tools/note.js';

export default class tools extends superViews{


	constructor(parent, MyClass,path){


		super(parent,MyClass,path);

		this.init();

	}


	init(){

		this.initChilds();

	}


	initChilds(){

		this.search = new Search(this.container,"search",this.path);
		this.note = new Note(this.container,"note",this.path, true);
		this.note.hide();

	}



	//PUBLICS

	openNoteTools(){

		this.note.show();

	}


	hideNoteTools(){

		this.note.hide();

	}

}