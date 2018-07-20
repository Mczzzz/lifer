import superViews from "../../../super/views.js"

import Card from "../../card.js"

export default class Resources extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);

		//console.log(path);

		this.data = this.Lifer.getData(this.path,"Resources",2);


		this.init();
		
	}


	init(){


		for(let Resource of this.data){

			console.log(Resource);


			let card = new Card(this.container,'NoteCardResource_'+Resource.id, this.path);
			card.setId(Resource.id);

			let HeaderElement = card.setElement("header_"+Resource.id);
			card.pushElement(HeaderElement,Resource.update,9,"grey","0px 5px 2px 0px","normal","flex-end","update");


			let MainElement = card.setElement("main"+Resource.id);

			if(Ressource.type == 3){

	//					cardElement = this.photoElement(Ressource.text,Ressource.id,"15px","","black","",Ressource.update);

				}else{

					card.pushElement(MainElement,Resource.text,15,"black","0px 5px 5px 5px","bold","flex-start","main");

				}


/*			this.card = new Card(this.container,'NoteTitleCard', this.path);
			this.card.setId(this.data.id);

			//text, size, color,margin,weight,justify, suffixe
			let HeaderElement = this.card.setElement("header");
			this.card.pushElement(HeaderElement,this.data.update,9,"grey","0px 5px 2px 0px","normal","flex-end","update");


			let MainElement   = this.card.setElement("main");
			this.card.pushElement(MainElement,this.data.name,20,"black","0px 5px 5px 5px","bold","flex-start","main");*/




		}




	}


}
