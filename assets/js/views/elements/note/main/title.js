
import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class Title extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){



		this.TheNote = this.getObjectThisfromPath("Note");
		


		if(this.TheNote.note.guid === false){

			this.data = {};
			this.data.update = this.Moment().format('Do MMMM YYYY, HH:mm:ss');
			this.data.name = "";

			this.setStyle("display" , "flex");
			this.setStyle("alignItems" , "flex-end");
			this.setStyle("flex", 1);

		}else{

			this.data = this.Lifer.getData(this.path,"Title",2);

		}


		
		this.addCard();			


	}




	addCard(){


		this.card = new Card('NoteTitleCard', this.path);

		this.card.setId(this.data.id);
		
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px 2px 12px #BBB");
		this.card.setStyle("background", "white");
		this.card.setStyle("flex", "1");

		this.card.setStyle("transitionDuration", "0.5s");
    	this.card.setStyle("transitionDelay", "0.0s");
    	this.card.setStyle("transitionTimingFunction", "cubic-bezier(0.15, -0.35, 0.98, 1.27)");
    	this.card.setStyle("transitionProperty", "width height background-color font-size left top color");




			let HeaderElement = this.card.setElement("header");
			this.card.setStyleElement(HeaderElement,"justifyContent","flex-end");

					this.updateNote = this.card.push("Text", HeaderElement,"update",this.data.update);

					this.card.setStyleComponent(HeaderElement,"update","fontSize","9px");
					this.card.setStyleComponent(HeaderElement,"update","color","grey");
					this.card.setStyleComponent(HeaderElement,"update","margin","0px 5px 2px 0px");
					this.card.setStyleComponent(HeaderElement,"update","fontWeight","normal");



			let MainElement   = this.card.setElement("main");
			this.card.setStyleElement(MainElement,"justifyContent","flex-start");

					let TheTitle = this.card.push("Text", MainElement,"title", this.data.name);

					this.card.setAttributeComponent(MainElement,"title","placeholder","Titre...");

					this.card.setStyleComponent(MainElement,"title","fontSize","20px");
					this.card.setStyleComponent(MainElement,"title","color","black","property");
					this.card.setStyleComponent(MainElement,"title","margin","0px 5px 5px 5px");
					this.card.setStyleComponent(MainElement,"title","fontWeight","bold");
					this.card.setStyleComponent(MainElement,"title","width","100%");


					TheTitle.getContainer().addEventListener("keyup", (e)=>this.changeFocus(e,TheTitle.getContainer()));



		this.card.setStyle("height", this.card.getContainerRect().height+"px");


		if(this.TheNote.note.guid === false){
		//	TheTitle.getContainer().focus();
		}


	}



	changeFocus(e,TheTitle){



		if (e.key === "Enter") {

			TheTitle.innerHTML = TheTitle.innerHTML.replace(/<div><br><\/div>/i, '');

			let toFocus = this.getObjectThisfromPath("Note/mainNote/noteMainEmpty/NoteEmptyCardText/cardElementEmpty/noteEltTextmainNewInput");

			toFocus.getContainer().focus();
			this.setStyle("display" , "");

			
    	}


    	this.TheNote.note.Title = TheTitle.innerHTML;
    	let updateTs = this.Moment();
    	this.updateNote.getContainer().innerHTML = updateTs.format('Do MMMM YYYY, HH:mm:ss');
		this.TheNote.note.Ts = updateTs.format('YYYY-MM-DD HH:mm:ss');
    	this.TheNote.Push();


	}


}
