import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class ActionButtons extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);


		this.init();
		
	}


	init(){

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

					camera.addEventListener("click",()=>this.StartCamera(true));


					this.card.push("Button", FooterElement,"footerGallery", "photo");

					this.card.setStylePictoComponent(FooterElement,"footerGallery","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerGallery","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerGallery","alignItems","center");


					this.card.push("Button", FooterElement,"footerNumbers", "looks_5");

					this.card.setStylePictoComponent(FooterElement,"footerNumbers","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerNumbers","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerNumbers","alignItems","center");


	}


	StartCamera(capture){


		this.camLauncher = document.createElement("input");
		this.camLauncher.type = "file";
		this.camLauncher.accept = "image/*";

		if(capture){
			this.camLauncher.capture = "camera";	
		}

		this.camLauncher.style.display = "none";
		this.container.append(this.camLauncher);
		this.camLauncher.click();

		this.camLauncher.addEventListener("change", (e)=>this.importPict(e));


/*		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'NoteRemove'}});
		window.dispatchEvent(LinkEvent);
*/
	}



}
