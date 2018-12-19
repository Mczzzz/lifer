import superViews from "../../../common/superViews.js";

import Ressource from "../../../common/component/ressource.js";


export default class Empty extends superViews{
	

	constructor( MyClass , path, ressource = false){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.setStyle("display","none");
		this.setStyle("boxShadow","rgb(187, 187, 187) 0px -2px 12px");
		//this.setStyle("maxHeight","70%");
		//this.active = false;
		this.Ressource = new Ressource('Ressource' , this.path);
		this.Ressource.setTargetData("Controller-Note","dataToStore");

		this.initialSet = 1;

	}



	addRessource(ressourceTmpId=false,title=false){

		this.Ressource.destroyMe();
		this.Ressource = new Ressource('Ressource' , this.path,ressourceTmpId);
		this.initialSet = 1;

	}

	setTitle(title){

		this.Ressource.setTitle(title);
		
	}


	show(type){

		this.addItem(type);

	}

	addItem(type, ItemId = false, data=false, pict=false,margin = false){

		console.log("in add item empty");
		if(this.initialSet){
			let TitleCard = this.Lifer.getData('Frame-Note-Main-Title-Card',"This");
				TitleCard.getContainer().remove();
				this.Lifer.getData('Frame-Note-Header-Action',"This").showTitle(this.Lifer.getData('Frame-Note',"This").note.Title);
				this.setStyle("display","");
		//		console.log("animation finish");
	   		 //this.Ressource.setTarget("Frame-Note-Main-Story");
	   		 this.Ressource.setTarget("Frame-Note-Main-Story");
	   		this.initialSet = 0;
	   	}
	  
	   this.Ressource.addItem(type,ItemId, data, pict, margin);
	   
		//this.Ressource.addItem(type);
	}




}