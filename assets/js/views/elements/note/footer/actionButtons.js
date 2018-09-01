import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

import { LoaderImage } from '../../../../services/LoaderImage.js';

export default class ActionButtons extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.ServImgLoader = LoaderImage;

		this.init();

		
		this.Empty = this.getObjectThisfromPath("Note/mainNote/noteMainEmpty");

	}


	init(){

		this.setStyle("overflow-y", "scroll");

		this.card = new Card('NoteFooterCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let FooterElement   = this.card.setElement("footer");
			this.card.setStyleElement(FooterElement,"justifyContent","flex-start");

					let camera = this.card.push("Button", FooterElement,"footerPhoto", "camera_alt");

					this.card.setStylePictoComponent(FooterElement,"footerPhoto","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerPhoto","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerPhoto","alignItems","center");

					camera.getContainer().addEventListener("click",()=>this.StartCamera("image",true));



					let videocam = this.card.push("Button", FooterElement,"footerVideocam", "videocam");

					this.card.setStylePictoComponent(FooterElement,"footerVideocam","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerVideocam","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerVideocam","alignItems","center");

					videocam.getContainer().addEventListener("click",()=>this.StartCamera("video",true));




					let micro = this.card.push("Button", FooterElement,"footerMic", "mic");

					this.card.setStylePictoComponent(FooterElement,"footerMic","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerMic","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerMic","alignItems","center");
					this.card.setStylePictoComponent(FooterElement,"footerMic","marginRight","0px");

					micro.getContainer().addEventListener("click",()=>this.StartCamera("audio",true));


					////////////
					this.card.push("Button", FooterElement,"separator1", "more_vert");

					this.card.setStylePictoComponent(FooterElement,"separator1","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"separator1","margin","5px");
					this.card.setStylePictoComponent(FooterElement,"separator1","color","#cfcfcf");
					this.card.setStylePictoComponent(FooterElement,"separator1","alignItems","center");
					//////////////



					let photo = this.card.push("Button", FooterElement,"footerGallery", "photo");

					this.card.setStylePictoComponent(FooterElement,"footerGallery","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerGallery","color","orange");
					this.card.setStylePictoComponent(FooterElement,"footerGallery","alignItems","center");

					photo.getContainer().addEventListener("click",()=>this.StartCamera("image"));



					let video = this.card.push("Button", FooterElement,"footerVideo", "movie");

					this.card.setStylePictoComponent(FooterElement,"footerVideo","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerVideo","color","orange");
					this.card.setStylePictoComponent(FooterElement,"footerVideo","alignItems","center");

					video.getContainer().addEventListener("click",()=>this.StartCamera("video"));




					let musique = this.card.push("Button", FooterElement,"footerMusique", "music_video");

					this.card.setStylePictoComponent(FooterElement,"footerMusique","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerMusique","color","orange");
					this.card.setStylePictoComponent(FooterElement,"footerMusique","alignItems","center");
					this.card.setStylePictoComponent(FooterElement,"footerMusique","marginRight","0px");

					musique.getContainer().addEventListener("click",()=>this.StartCamera("audio"));



					///////////////
					this.card.push("Button", FooterElement,"separator2", "more_vert");

					this.card.setStylePictoComponent(FooterElement,"separator2","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"separator2","margin","5px");
					this.card.setStylePictoComponent(FooterElement,"separator2","color","#cfcfcf");
					this.card.setStylePictoComponent(FooterElement,"separator2","alignItems","center");
					///////////////


					let number = this.card.push("Button", FooterElement,"footerNumbers", "looks_5");

					this.card.setStylePictoComponent(FooterElement,"footerNumbers","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerNumbers","color","blue");
					this.card.setStylePictoComponent(FooterElement,"footerNumbers","alignItems","center");

					number.getContainer().addEventListener("click",()=>this.StartNumber("time"));



					let todoList = this.card.push("Button", FooterElement,"todoList", "list");

					this.card.setStylePictoComponent(FooterElement,"todoList","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"todoList","color","blue");
					this.card.setStylePictoComponent(FooterElement,"todoList","alignItems","center");



					let text = this.card.push("Button", FooterElement,"textElt", "text_fields");

					this.card.setStylePictoComponent(FooterElement,"textElt","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"textElt","color","blue");
					this.card.setStylePictoComponent(FooterElement,"textElt","alignItems","center");

					text.getContainer().addEventListener("click",()=>this.Start("text"));

/*
button	Defines a clickable button (mostly used with a JavaScript to activate a script)
checkbox	Defines a checkbox
-color	Defines a color picker
-date	Defines a date control (year, month, day (no time))
-datetime-local	Defines a date and time control (year, month, day, time (no timezone)
-email	Defines a field for an e-mail address
file	Defines a file-select field and a "Browse" button (for file uploads)
hidden	Defines a hidden input field
image	Defines an image as the submit button
-month	Defines a month and year control (no timezone)
-number	Defines a field for entering a number
-password	Defines a password field
radio	Defines a radio button
-range	Defines a range control (like a slider control)
reset	Defines a reset button
-search	Defines a text field for entering a search string
submit	Defines a submit button
-tel	Defines a field for entering a telephone number
-text	Default. Defines a single-line text field
-time	Defines a control for entering a time (no timezone)
-url	Defines a field for entering a URL
-week	Defines a week and year control (no timezone)

*/

}


Start(type){

	this.Empty.show(type);

}




StartNumber(type){

//il faut changer le type de empty
		this.numberLauncher = document.createElement("input");
		this.numberLauncher.type = type;

		this.numberLauncher.min = 5;
		this.numberLauncher.max = 98;
		this.numberLauncher.step = 3;
		this.numberLauncher.value = 53;

		//this.numberLauncher.style.display = "none";
		this.container.append(this.numberLauncher);
		this.numberLauncher.click();


	}




	StartCamera(type,capture = false){


		this.camLauncher = document.createElement("input");
		this.camLauncher.type = "file";
		this.camLauncher.accept = type+"/*";

		if(capture){
			this.camLauncher.capture = "camera";	
		}

		this.camLauncher.style.display = "none";
		this.container.append(this.camLauncher);
		this.camLauncher.click();
	
		this.camLauncher.addEventListener("change", ()=>this.ServImgLoader.importPict(this.camLauncher.files[0]));


	}



}
