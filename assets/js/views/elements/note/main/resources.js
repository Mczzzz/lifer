import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class Resources extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.setStyle("overflowY" , "scroll");
		this.setStyle("overflowX", "hidden");
		this.setStyle("overscrollBehavior","none");
		
		this.TheNote = this.Lifer.getData("Note","This");
		
		if(this.TheNote.note.id === false){

			this.setStyle("flex" , 0);
			return false;
		} 

/*		this.setStyle("flex" , 0);

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



		}*/




	}


	createCard(Resource){


		//on s'assure que le flex de noteMainTitle est bien supprimé sinon on le fait
		//car sinon le Title déborde sur le header de la Note.
		let NoteMainTitle = this.Lifer.getData("Note/mainNote/noteMainTitle", "This");
		if(NoteMainTitle.getContainer().style.display == "flex"){
			NoteMainTitle.getContainer().style.display = null;
		}


		this.setStyle("flex" , "");
//Mise a jour du Title update
		let date = new Date();
		let timestamp = date.getTime();


		let card = new Card('NoteCardResource_New_'+timestamp, this.path);
		card.setStyle("border","1px solid red");
		
//A ne pas oublié sinon ca va merder
//card.setId();

		let carWidth = card.getWidth();

		let HeaderElement = card.setElement("header_new_"+timestamp);
		card.setStyleElement(HeaderElement,"justifyContent","flex-end");

				card.push("Text",HeaderElement,"update_new_"+timestamp,this.Moment().format('Do MMMM YYYY, hh:mm:ss'));

				card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"fontSize","9px");
				card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"color","grey");
				card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"margin","0px 5px 2px 0px");
				card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"fontWeight","normal");

		let MainElement = card.setElement("main_new_"+timestamp);

		if(Resource.type == 3){

				//let path = "/object/infos/resources/"+Resource.objectId+"/"+Resource.objectTreeId+"/"+Resource.objectInfoId+"/"+Resource.id;

				card.push("Image", MainElement, "main_"+timestamp, Resource);

		}else{

			card.setStyleElement(MainElement,"justifyContent","flex-start");

			card.push("Text",MainElement,"main_new_"+timestamp, Resource.text);

			card.setStyleComponent(MainElement,"main_new_"+timestamp,"fontSize","15px");
			card.setStyleComponent(MainElement,"main_new_"+timestamp,"color","black");
			card.setStyleComponent(MainElement,"main_new_"+timestamp,"margin","0px 5px 5px 5px");
			card.setStyleComponent(MainElement,"main_new_"+timestamp,"fontWeight","normal");
			card.setStyleComponent(MainElement,"main_new_"+timestamp,"width","100%");

		}

		//calcul de la nouvelle hauteur du container
		this.container.scrollTop = this.container.scrollHeight;


		//et hop on envoi en sauvegarde la data mon gars
		let updateTs = this.Moment();

		this.updateNote = this.Lifer.getData("Note/mainNote/noteMainTitle/NoteTitleCard/cardElementheader/noteEltTextupdate","This");	
    	this.updateNote.getContainer().innerHTML = updateTs.format('Do MMMM YYYY, HH:mm:ss');

		this.TheNote.note.Ts = updateTs.format('YYYY-MM-DD HH:mm:ss');
    	this.TheNote.Push();

	}



}
