import superViews from "../../common/superViews.js";

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


		if(this.parentThis.note.guid == false){

			this.Title     = new Title("Title",this.path);
		
		}

			

		this.Resources = new Resources("Resources",this.path);

		this.Empty     = new Empty("Empty",this.path);

	}




}