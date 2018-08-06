import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class Resources extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.setStyle("overflowY" , "scroll");
		
		let TheNote = this.Lifer.getData("Note","This");
		
		if(TheNote.note.id === false){

			this.setStyle("flex" , 0);
			return false;
		} 

		this.setStyle("flex" , 0);

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



		}




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

				card.push("Text",HeaderElement,"update_new_"+timestamp,this.Moment().format('Do MMMM YYYY, h:mm:ss'));

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

		}



	}




	ImageFromCapture(){


		/*this.imgDiv = document.createElement("div");
		this.divCore.append(this.imgDiv);
		this.imgDiv.style.display = "flex";
		this.imgDiv.style.borderRadius = "8px";
		this.imgDiv.style.margin = "10px";

		this.img = document.createElement("img");
		this.img.classList.add("obj");
		this.imgDiv.prepend(this.img)*/; 

		let RatioPhoto = this.imgObj.naturalWidth / this.imgObj.naturalHeight;

		this.img.src = pict;
		this.img.style.width  = "100%";
		this.img.style.borderRadius = "8px";
		this.img.height = this.img.offsetWidth  / RatioPhoto;
		
		console.log(orientation);

		if(orientation.rotate == 90){

			let ImgHeight = this.img.offsetWidth;
			let ImgWidth = this.img.offsetWidth * RatioPhoto;

			console.log(ImgWidth);
			console.log(this.img.offsetWidth);
			let decalY = ((ImgWidth - this.img.offsetWidth) / 2);
			//let decalY = ((ImgWidth - this.img.offsetWidth) / 2);

			this.img.style.width = "";
			this.img.width = ImgWidth;
			this.img.height = ImgHeight;

			this.img.style.transform = 'rotate(' + orientation.rotate + 'deg) translate('+'80'+'px, 0px)';

			this.imgDiv.style.minHeight = ImgWidth+"px";

		}else{

			this.imgDiv.style.minHeight = this.img.height+"px";
		}





	}




	//PUBLICS
	addResource(){


	}





}
