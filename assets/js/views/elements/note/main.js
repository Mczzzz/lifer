import superViews from "../common/super/views.js";

import Title      from "./main/title.js";
import Resources  from "./main/resources.js";
import Empty      from "./main/empty.js";


export default class Main extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

				

		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");
		this.setStyle("flex" , 1);



		this.initChilds();


	}


	initChilds(){

		let GUIDNote = this.parentThis.note.guid;
		console.log("GUIDNote");
		console.log(GUIDNote);

		this.Title     = new Title("noteMainTitle",this.path);

		this.Resources = new Resources("noteMainResources",this.path);

		this.Empty     = new Empty("noteMainEmpty",this.path);

	}




}