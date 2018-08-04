
import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class Title extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){




		let TheNote = this.Lifer.getData("Note","This");
		
		if(TheNote.note.id === false){

			this.data = {};
			this.data.update = this.Moment.format('llll');
			this.data.name = "";

			this.setStyle("display" , "flex");
			this.setStyle("alignItems" , "flex-end");
			this.setStyle("flex", 1);

		}else{

			this.data = this.Lifer.getData(this.path,"Title",2);

		}

		

		this.card = new Card('NoteTitleCard', this.path);

		this.card.setId(this.data.id);
		
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px 2px 12px #BBB");
		this.card.setStyle("background", "white");
		this.card.setStyle("flex", "1");



			let HeaderElement = this.card.setElement("header");
			this.card.setStyleElement(HeaderElement,"justifyContent","flex-end");

					this.card.push("Text", HeaderElement,"update",this.data.update);

					this.card.setStyleComponent(HeaderElement,"update","fontSize","9px");
					this.card.setStyleComponent(HeaderElement,"update","color","grey");
					this.card.setStyleComponent(HeaderElement,"update","margin","0px 5px 2px 0px");
					this.card.setStyleComponent(HeaderElement,"update","fontWeight","normal");



			let MainElement   = this.card.setElement("main");
			this.card.setStyleElement(MainElement,"justifyContent","flex-start");

					let TheTitle = this.card.push("Text", MainElement,"title", this.data.name);

					this.card.setAttributeComponent(MainElement,"title","placeholder","Titre...");

					this.card.setStyleComponent(MainElement,"title","fontSize","20px");
					this.card.setStyleComponent(MainElement,"title","color","black",true);
					this.card.setStyleComponent(MainElement,"title","margin","0px 5px 5px 5px");
					this.card.setStyleComponent(MainElement,"title","fontWeight","bold");

					TheTitle.addEventListener("keydown", (e)=>this.changeFocus(e));
	}



	changeFocus(e){

		if (e.key === "Enter") {

			let toFocus = document.getElementsByClassName("noteEltTextmainNewInput");

			toFocus[0].focus();
			toFocus[0].innetHTML = "";
    	}


	}


}
