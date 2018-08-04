import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class Resources extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.setStyle("overflowY" , "scroll");
		
		let TheNote = this.Lifer.getData("Note","This");
		
		if(TheNote.note.id === false){

			this.setStyle("flex" , 0);
			return false;
		} 

		this.setStyle("flex" , 0);

		this.data = this.Lifer.getData(this.path,"Resources",2);




		for(let Resource of this.data){



			let card = new Card('NoteCardResource_'+Resource.id, this.path);
			card.setId(Resource.id);

			let carWidth = card.getWidth();

			let HeaderElement = card.setElement("header_"+Resource.id);
			card.setStyleElement(HeaderElement,"justifyContent","flex-end");

					card.push("Text",HeaderElement,"update_"+Resource.id,Resource.update);

					card.setStyleComponent(HeaderElement,"update_"+Resource.id,"fontSize","9px");
					card.setStyleComponent(HeaderElement,"update_"+Resource.id,"color","grey");
					card.setStyleComponent(HeaderElement,"update_"+Resource.id,"margin","0px 5px 2px 0px");
					card.setStyleComponent(HeaderElement,"update_"+Resource.id,"fontWeight","normal");

			let MainElement = card.setElement("main"+Resource.id);

			if(Resource.type == 3){

					let path = "/object/infos/resources/"+Resource.objectId+"/"+Resource.objectTreeId+"/"+Resource.objectInfoId+"/"+Resource.id;

					card.push("Image", MainElement, "main_"+Resource.id, path);

			}else{

				card.setStyleElement(MainElement,"justifyContent","flex-start");

				card.push("Text",MainElement,"main_"+Resource.id, Resource.text);

				card.setStyleComponent(MainElement,"main_"+Resource.id,"fontSize","15px");
				card.setStyleComponent(MainElement,"main_"+Resource.id,"color","black");
				card.setStyleComponent(MainElement,"main_"+Resource.id,"margin","0px 5px 5px 5px");
				card.setStyleComponent(MainElement,"main_"+Resource.id,"fontWeight","normal");

			}



		}




	}


	createCard(Resource){



		let card = new Card('NoteCardResource_New', this.path);
		
		//A ne pas oublié sinon ca va merder
		//card.setId();

		let carWidth = card.getWidth();

		let HeaderElement = card.setElement("header_new");
		card.setStyleElement(HeaderElement,"justifyContent","flex-end");

				card.push("Text",HeaderElement,"update_new",this.Moment.format('llll'));

				card.setStyleComponent(HeaderElement,"update_new","fontSize","9px");
				card.setStyleComponent(HeaderElement,"update_new","color","grey");
				card.setStyleComponent(HeaderElement,"update_new","margin","0px 5px 2px 0px");
				card.setStyleComponent(HeaderElement,"update_new","fontWeight","normal");

		let MainElement = card.setElement("main_new");

		if(Resource.type == 3){

/*				let path = "/object/infos/resources/"+Resource.objectId+"/"+Resource.objectTreeId+"/"+Resource.objectInfoId+"/"+Resource.id;

				card.push("Image", MainElement, "main_"+Resource.id, path);*/

		}else{

			card.setStyleElement(MainElement,"justifyContent","flex-start");

			card.push("Text",MainElement,"main_new", Resource.text);

			card.setStyleComponent(MainElement,"main_new","fontSize","15px");
			card.setStyleComponent(MainElement,"main_new","color","black");
			card.setStyleComponent(MainElement,"main_new","margin","0px 5px 5px 5px");
			card.setStyleComponent(MainElement,"main_new","fontWeight","normal");

		}



	}





	//PUBLICS
	addResource(){


	}





}
