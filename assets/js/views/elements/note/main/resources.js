import uuid from "uuid/v1"

import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class Resources extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();

		this.RessourceList = [];
		//this.ItemList = [];
		
	}


	init(){

		this.setStyle("overflowY" , "scroll");
		this.setStyle("overflowX", "hidden");
		this.setStyle("overscrollBehavior","none");
		
		this.TheNote = this.getObjectThisfromPath("Note");
		
		if(this.TheNote.note.guid === false){

			this.setStyle("flex" , 0);
			return false;
		} 




	}







	addRessource(){

		let ressourceTmpId = uuid().replace(/-/gi, '.');
//		console.log(ressourceTmpId);
		this.createRessource(ressourceTmpId);
		this.setStyle("flex" , "");
		return ressourceTmpId;
	}


	createRessource(ressourceTmpId){

		this.RessourceList[ressourceTmpId] = {};

		this.RessourceList[ressourceTmpId].Card = new Card('Card_'+ressourceTmpId, this.path);
		//card.setStyle("display","flex");

		let HeaderElement = this.RessourceList[ressourceTmpId].setElement("header_"+ressourceTmpId);

		this.RessourceTitle = this.RessourceList[ressourceTmpId].push("Text", HeaderElement,"Title", "");
		
		this.RessourceTitle.setStyle("fontSize","22px");


		HeaderElement.setStyle("height","50px");
		HeaderElement.setStyle("background","purple");

	}


	addItem(ressourceTmpId,type){
	//	console.log("in addItem");
	//	console.log(ressourceTmpId);
		let itemTmpId = uuid().replace(/-/gi, '.');
		let ItemElement = this.RessourceList[ressourceTmpId].Card.setElement("Item_"+itemTmpId);

		ItemElement.setStyle("height","50px");
		ItemElement.setStyle("background","yellow");

		this.RessourceList[ressourceTmpId].ItemsList = [];
		this.RessourceList[ressourceTmpId].ItemsList.push(ItemElement);
		//this.ItemList.push({"RessourceId"})
		console.log(this.RessourceList);
		return itemTmpId;
	}




	update(path,data){


		//this.RessourceList[item]

			console.log('au bon encdroit :)');
			console.log(path);
				console.log(data);
	}






//////////////////////////////////////////////////////////////////////////////////////////
// A REPRENDRE CORRECTEMENT
//////////////////////////////////////////////////////////////////////////////////////////


	createCard(Resource){

		let updateTs = this.Moment();
		//on s'assure que le flex de noteMainTitle est bien supprimé sinon on le fait
		//car sinon le Title déborde sur le header de la Note.
		let NoteMainTitle = this.getObjectThisfromPath("Note-Main-Title");
		if(NoteMainTitle.getContainer().style.display == "flex"){
			NoteMainTitle.getContainer().style.display = null;
		}


		this.setStyle("flex" , "");
//Mise a jour du Title update

		let timestamp = updateTs.format('x');


		let card = new Card('Card_'+timestamp, this.path);
		card.setId("TmpCardId-"+timestamp);
		card.setStyle("border","1px solid red");
		
		
//A ne pas oublié sinon ca va merder
//card.setId();

		let carWidth = card.getWidth();

		let HeaderElement = card.setElement("header_new_"+timestamp);
		HeaderElement.setStyle("justifyContent","flex-end");

				let MyText = card.push("Text",HeaderElement,"update_new_"+timestamp,updateTs.format('Do MMMM YYYY, HH:mm:ss'));

				MyText.setStyle("fontSize","9px");
				MyText.setStyle("color","grey");
				MyText.setStyle("margin","0px 5px 2px 0px");
				MyText.setStyle("fontWeight","normal");

		let MainElement = card.setElement("main_new_"+timestamp);

		if(Resource.type == 3){

				//let path = "/object/infos/resources/"+Resource.objectId+"/"+Resource.objectTreeId+"/"+Resource.objectInfoId+"/"+Resource.id;

				card.push("Image", MainElement, "main_"+timestamp, Resource);

		}else{

			MainElement.setStyle("justifyContent","flex-start");


			let theButton = card.push("Button",MainElement,"dragger"+timestamp, "drag_indicator");
			theButton.setAttribute("draggable", "y");
			theButton.initTouch(this.path,"touchMover");

			let aText = card.push("Text",MainElement,"main_new_"+timestamp, Resource.text);

			aText.setStyle("fontSize","15px");
			aText.setStyle("color","black");
			aText.setStyle("margin","0px 5px 5px 5px");
			aText.setStyle("fontWeight","normal");
			aText.setStyle("width","100%");

		}

		//calcul de la nouvelle hauteur du container
		this.container.scrollTop = this.container.scrollHeight;


		//et hop on envoi en sauvegarde la data mon gars
		this.Save(card.path, Resource.text, updateTs);

	}





	Save(Card, Resource, updateTs = false){

		let card = this.getObjectThisfromPath(Card);


		if(updateTs == false){
			updateTs = this.Moment();
		}

		let resp = {};
		resp.type = "text";
		resp.action = "Push";
		resp.guid = card.getId();
		resp.update = updateTs;
		resp.resource = Resource;
		resp.Card = card.path;

    	this.TheNote.Push(resp);

	}


}
