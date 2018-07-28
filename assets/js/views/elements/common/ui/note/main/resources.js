import superViews from "../../../super/views.js"

import Card from "../../card.js"

export default class Resources extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);

		//console.log(path);

		this.data = this.Lifer.getData(this.path,"Resources",2);

		this.container.style.overflowY = "scroll";
		this.container.style.flex = "1";


		this.init();
		
	}


	init(){


		for(let Resource of this.data){



			let card = new Card(this.container,'NoteCardResource_'+Resource.id, this.path);
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


}
