
import superViews from "../../../common/superViews.js";

import Card from "../../../common/ui/card.js";

export default class Title extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){



		this.TheNote = this.getObjectThisfromPath("Frame-Note");
		


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


		this.card = new Card('Card', this.path);

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
			HeaderElement.setStyle("justifyContent","flex-end");

					this.updateNote = this.card.push("Text", HeaderElement,"update",this.data.update);

					this.updateNote.setStyle("fontSize","9px");
					this.updateNote.setStyle("color","grey");
					this.updateNote.setStyle("margin","0px 5px 2px 0px");
					this.updateNote.setStyle("fontWeight","normal");



			let MainElement   = this.card.setElement("main");
			MainElement.setStyle("justifyContent","flex-start");

					let TheTitle = this.card.push("Text", MainElement,"title", this.data.name);

					TheTitle.setAttribute("placeholder","Titre Note...");

					TheTitle.setStyle("fontSize","20px");
					TheTitle.setStyle("color","black","property");
					TheTitle.setStyle("margin","0px 5px 5px 5px");
					TheTitle.setStyle("fontWeight","bold");
					TheTitle.setStyle("width","100%");
					TheTitle.setCallBack("keyup",this.path, 'changeFocus');

					//TheTitle.getContainer().addEventListener("keyup", (e)=>this.changeFocus(e,TheTitle.getContainer()));




		if(this.TheNote.note.guid === false){
			TheTitle.getContainer().focus();
		}


	}



	changeFocus(e,TheTitle){



		if (e.key === "Enter") {

			TheTitle.innerHTML = TheTitle.innerHTML.replace(/<div><br><\/div>/i, '');
			//this.title = "";
			//let toFocus = this.getObjectThisfromPath("Note/mainNote/noteMainEmpty/NoteEmptyCardText/cardElementEmpty/noteEltTextmainNewInput");

			//toFocus.getContainer().focus();
			//this.setStyle("display" , "");

			
    	}


    	this.TheNote.setTitle = TheTitle.innerHTML;
    	let updateTs = this.Moment();
    	this.updateNote.getContainer().innerHTML = updateTs.format('Do MMMM YYYY, HH:mm:ss');
		this.TheNote.note.Ts = updateTs.format('YYYY-MM-DD HH:mm:ss');
    	//this.TheNote.Push();


	}


}
