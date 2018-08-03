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

					camera.addEventListener("click",()=>this.StartCamera("image",true));



					let videocam = this.card.push("Button", FooterElement,"footerVideocam", "videocam");

					this.card.setStylePictoComponent(FooterElement,"footerVideocam","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerVideocam","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerVideocam","alignItems","center");

					videocam.addEventListener("click",()=>this.StartCamera("video",true));




					let micro = this.card.push("Button", FooterElement,"footerMic", "mic");

					this.card.setStylePictoComponent(FooterElement,"footerMic","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerMic","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerMic","alignItems","center");
					this.card.setStylePictoComponent(FooterElement,"footerMic","marginRight","0px");

					micro.addEventListener("click",()=>this.StartCamera("audio",true));


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

					photo.addEventListener("click",()=>this.StartCamera("image"));



					let video = this.card.push("Button", FooterElement,"footerVideo", "movie");

					this.card.setStylePictoComponent(FooterElement,"footerVideo","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerVideo","color","green");
					this.card.setStylePictoComponent(FooterElement,"footerVideo","alignItems","center");

					video.addEventListener("click",()=>this.StartCamera("video"));




					let musique = this.card.push("Button", FooterElement,"footerMusique", "music_video");

					this.card.setStylePictoComponent(FooterElement,"footerMusique","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerMusique","color","orange");
					this.card.setStylePictoComponent(FooterElement,"footerMusique","alignItems","center");
					this.card.setStylePictoComponent(FooterElement,"footerMusique","marginRight","0px");

					musique.addEventListener("click",()=>this.StartCamera("audio"));



					///////////////
					this.card.push("Button", FooterElement,"separator2", "more_vert");

					this.card.setStylePictoComponent(FooterElement,"separator2","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"separator2","margin","5px");
					this.card.setStylePictoComponent(FooterElement,"separator2","color","#cfcfcf");
					this.card.setStylePictoComponent(FooterElement,"separator2","alignItems","center");
					///////////////


					this.card.push("Button", FooterElement,"footerNumbers", "looks_5");

					this.card.setStylePictoComponent(FooterElement,"footerNumbers","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"footerNumbers","color","blue");
					this.card.setStylePictoComponent(FooterElement,"footerNumbers","alignItems","center");


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

		this.camLauncher.addEventListener("change", (e)=>this.importPict(e));


/*		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'NoteRemove'}});
		window.dispatchEvent(LinkEvent);
*/
	}



}
