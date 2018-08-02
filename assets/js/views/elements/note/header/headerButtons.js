import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class HeaderButtons extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'NoteHeaderCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let HeaderElement   = this.card.setElement("headerNote");
			this.card.setStyleElement(HeaderElement,"justifyContent","space-between");

					let HeaderBackButton = this.card.push("Button", HeaderElement,"NoteHeaderBack", "keyboard_backspace");

					this.card.setStyleComponent(HeaderElement,"NoteHeaderBack","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"NoteHeaderBack","color","green");
					this.card.setStyleComponent(HeaderElement,"NoteHeaderBack","alignItems","center");

					HeaderBackButton.addEventListener("click",()=>this.CloseMe());


					this.card.push("Button", HeaderElement,"NoteHeaderLogo", "widgets");

					this.card.setStyleComponent(HeaderElement,"NoteHeaderLogo","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"NoteHeaderLogo","color","green");
					this.card.setStyleComponent(HeaderElement,"NoteHeaderLogo","alignItems","center");



	}



	CloseMe(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'NoteRemove'}});
		window.dispatchEvent(LinkEvent);

	}


}
