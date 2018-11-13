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

		let ressourceTmpId = "TmpResourceId-"+uuid().replace(/-/gi, '.');
//		console.log(ressourceTmpId);
		this.createRessource(ressourceTmpId);
		this.setStyle("flex" , "");
		return ressourceTmpId;
	}


	createRessource(ressourceTmpId){

		this.RessourceList[ressourceTmpId] = {};
		this.RessourceList[ressourceTmpId].Items = [];


		this.RessourceList[ressourceTmpId].Card = new Card('Card_'+ressourceTmpId, this.path);
		//card.setStyle("display","flex");

		let HeaderElement = this.RessourceList[ressourceTmpId].Card.setElement("header_"+ressourceTmpId);

		this.RessourceTitle = this.RessourceList[ressourceTmpId].Card.push("Text", HeaderElement,"Title", "");
		
		this.RessourceTitle.setStyle("fontSize","22px");
		this.RessourceTitle.removeAttribute("contentEditable");

		//HeaderElement.setStyle("height","50px");
		HeaderElement.setStyle("background","purple");

		//get resourcecommmune
		let eltTitle = this.getObjectThisfromPath("Note-Main-Empty-Ressource-Header-Card-Element-Text-Title");

		let config = { characterData: true, childList: true, subtree: true};
		let observer = new MutationObserver(()=>this.updateTitle(eltTitle));
			observer.observe(eltTitle.getContainer(), config);


	}


	updateTitle(eltTitle){

		let newTitle = eltTitle.getText();

		this.RessourceTitle.setData(newTitle);

	}

	updateText(MyText,elt,ressourceTmpId){
		//console.log(elt);
		let newText = elt.text.getText();
		console.log('newText: '+newText);
		MyText.setData(newText);
	//	console.log(elt.text.getContainer().style.marginLeft);
		MyText.setStyle("marginLeft", elt.bloc.getContainer().style.marginLeft);

		//reorder
		//get child list of : //Note-Main-Empty-Ressource-Main
		let EditRessource = this.getObjectThisfromPath('Note-Main-Empty-Ressource-Main');
		let ChildList = EditRessource.getContainer().childNodes;
		let ReverseChildList = Array.from(ChildList).reverse();

		for (let item of ReverseChildList){
		//	console.log(item.firstChild.id);
			this.RessourceList[ressourceTmpId].Card.getContainer().prepend(this.RessourceList[ressourceTmpId].Card["Item_"+item.firstChild.id].getContainer());


		}

		this.RessourceList[ressourceTmpId].Card.getContainer().prepend(this.RessourceList[ressourceTmpId].Card["header_"+ressourceTmpId].getContainer());


		//on save
		this.save(ressourceTmpId,elt.bloc.ClassId,"text","text",newText);

		
	}


	newTmpId(){

		return uuid().replace(/-/gi, '.');

	}


	addItem(ressourceTmpId,type,itemTmpId, elt){
	//	console.log("in addItem");
	//	console.log(ressourceTmpId);
		//let itemTmpId = uuid().replace(/-/gi, '.');

		let ItemElement = this.RessourceList[ressourceTmpId].Card.setElement("Item_"+itemTmpId);
		//ItemElement.setStyle("height","50px");
		ItemElement.setStyle("background","yellow");
		ItemElement.setStyle("justifyContent","flex-start");

		this.RessourceList[ressourceTmpId].Items[itemTmpId] = {};

		switch (type){

			case 'text':

				this.RessourceList[ressourceTmpId].Items[itemTmpId].type = type;
				let MyText = this.RessourceList[ressourceTmpId].Card.push("Text",ItemElement,"text","...");
				MyText.setStyle("color","black");
				MyText.setStyle("fontSize","14px");
				MyText.removeAttribute("contentEditable");
				this.RessourceList[ressourceTmpId].Items[itemTmpId].object = MyText;

				let config = { attributes: true, characterData: true, childList: true, subtree: true};

				let observer = new MutationObserver(()=>this.updateText(MyText,elt,ressourceTmpId));
				observer.observe(elt.bloc.getContainer(), config);
				observer.observe(elt.text.getContainer(), config);

			break;



		}
//TODO: je set mon element, j'ay ajoute le composant, j'enregistre mon composant dans this.RessourceList pour pouvoir le modifier à la mise à jour

		//this.RessourceList[ressourceTmpId].ItemsList.push(ItemElement);
		//this.ItemList.push({"RessourceId"})
		console.log(this.RessourceList);

	}




	update(data){

			console.log(data);
			//on set le texte
			this.RessourceList[data.RessourceId].Items[data.id].object.setData(data.data.container.innerHTML);
			//on set la marge

			this.RessourceList[data.RessourceId].Items[data.id].object.setStyle("marginLeft", data.data.parentThis.parentThis.parentThis.container.style.marginLeft); 
			//this.Save(Ressource, item );
			
	}


	save(ressourceTmpId,itemId = false,type, element,value){

		let updateTs = this.Moment();

		let resp = {};
		resp.action = "Push";
		resp.type = type;
		resp.guid = ressourceTmpId;
		resp.itemId = itemId;
		resp.itemElt = element;
		resp.itemVal = value;
		resp.update = updateTs;
		
    	this.TheNote.Push(resp);

	}



//////////////////////////////////////////////////////////////////////////////////////////
// A REPRENDRE CORRECTEMENT
//////////////////////////////////////////////////////////////////////////////////////////



	_OldSave(Card, Resource, updateTs = false){

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



	/*createCard(Resource){

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

	}*/







}
