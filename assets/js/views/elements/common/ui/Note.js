import EXIF from 'exif-orientation';

import LoaderCollection from '../../../../services/LoaderCollection.js';

import Footer from '../sections/footer.js';
import Header from './note/header/header.js';
import superViews from "../super/views.js"
import Button from "./button.js"

export default class Note extends superViews{
	

	constructor(parent,MyClass,path,id = false){

		super(parent, MyClass , path);

		console.log(id);


		this.NoteCollection = new LoaderCollection("ObjectInfos");
		this.ResourcesCollection = new LoaderCollection("ObjectInfosResources");

		this.ContainerNode = this.Lifer.getData("app/home/frame/objects","ContainerNode");
		this.LeafNode = this.Lifer.getData("app/home/frame/objects","LeafNode");

		this.note = {};
		this.note.id = id;
		this.firstKey = true;

		this.init();


	}


	init(){


		this.background();
		this.addHeader();
		this.addMain();
		this.addFooter();

	}



	background(){

		this.container.style.position = "absolute";
		this.container.style.top = "0.5%";
		this.container.style.left = "0.5%";
		this.container.style.height = "99%";
		this.container.style.width = "99%";
		this.container.style.display = "flex";
		this.container.style.flexDirection = "column";
		this.container.style.background = "white";
		this.container.style.boxShadow = "0px 0px 10px 10px green";


	}



	addHeader(){

		this.Header = new Header(this.container,"headerNote",this.path);
		
	}


	addMain(){

		//add css for placeholder div
		let css = document.createElement("style");
			css.type = "text/css";
			css.id = "divContentEditable_css_style";
			css.innerHTML = `[contenteditable=true]:empty::before {
			  					content: attr(placeholder);
								}
							`;
			document.body.appendChild(css);
		

		this.Main = document.createElement("div");
		this.Main.className = "mainNote";
		this.Main.style.display = "flex";
		this.Main.style.flexDirection = "column";
		this.container.append(this.Main);

		this.Main.style.background = "white";
		this.Main.style.display = "flex";
		//this.Main.style.overflowY = "scroll";
		this.Main.style.flexDirection = "column";
		this.Main.style.flex = 1;


		this.addTitle();


		this.addRessources();


		this.addEmpty();


	}


	addRessources(){

		let divCore = document.createElement("div");
		divCore.style.overflowY = "scroll";
		this.Main.append(divCore);

		this.divCore = divCore;

		if(this.note.id){

			console.log('in init noteAsked Id');
			//load ma node pour récupérer le titre et la date
			let res = this.NoteCollection.get(this.ContainerNode.id,this.LeafNode.id,this.note.id);

			console.log(res);
			console.log(this.Title);
			if(res.name.length > 0){
				let title = document.getElementById('title');
				title.append(res.name);
				title.style.color = "black";
			}
	
			//je load mes ressources et je les affichent
			let Ressources = this.ResourcesCollection.getList(this.ContainerNode.id, this.LeafNode.id, this.note.id);
	
			for (let Ressource of Ressources){

					let cardElement = "";

				if(Ressource.type == 3){

					cardElement = this.photoElement(Ressource.text,Ressource.id,"15px","","black","",Ressource.update);

				}else{

					cardElement = this.textElement(Ressource.text,Ressource.id,"15px","","black","",Ressource.update);
				}

				divCore.append(cardElement);

			}

			console.log(divCore.scrollTop);
			console.log(divCore.scrollHeight);
			divCore.scrollTop = divCore.scrollHeight;

		}



	}


	addTitle(){
		let divTitle = document.createElement("div");
		let cardTitle = this.textElement('','title',"20px","bold","grey","Titre...");
		divTitle.append(cardTitle);
		this.Main.append(divTitle);

		this.blocWidth = cardTitle.offsetWidth;
	}

	addEmpty(){
		let divEmpty = document.createElement("div");
		let cardEmpty = this.textElement('','text',"15px","","grey","Texte...");
		divEmpty.append(cardEmpty);

		let validEmpty = document.createElement("div");
		divEmpty.append(validEmpty);
		
		let  button = new Button(divEmpty,"buttonValid",this.path);
		this.Main.append(divEmpty);
	
	}








	photoElement(text,id,size,weight,color,holder,update = false){

		let card = document.createElement("div");
		card.style.marginBottom = "20px";
		card.style.borderWidth  =  "1px";
    	card.style.borderStyle  =  "dashed";
    	card.style.borderColor  = "#b7b7b7";
    	card.style.margin       = "10px";
    	card.style.borderRadius = "8px";
    	card.style.background   = "rgba(149, 146, 255, 0.14)";
		//card.style.display = "flex";
		//card.style.flexDirection = "column";

		let header = document.createElement("div");
		header.style.display = "flex";
		header.style.justifyContent = "space-around";
		card.append(header);

		if(update){
			let date = document.createElement("div");
			date.innerHTML = update;
			date.style.fontSize = "9px";
			date.style.color = "grey";

			header.append(date);

		}



		let img = document.createElement("img");
		img.style.borderRadius = "8px";

		let theMarge = 8;
		img.style.margin = theMarge+"px";
		let width = this.blocWidth - (theMarge * 2);
		img.src = "/object/infos/resources/"+this.ContainerNode.id+"/"+this.LeafNode.id+"/"+this.note.id+"/"+id+"/"+width;
		card.append(img);

		return card;

	}

	textElement(text,id,size,weight,color,holder,update = false){

		let card = document.createElement("div");
		card.style.marginBottom = "20px";
		card.style.borderWidth  =  "1px";
    	card.style.borderStyle  =  "dashed";
    	card.style.borderColor  = "#b7b7b7";
    	card.style.margin       = "10px";
    	card.style.borderRadius = "8px";
    	card.style.background   = "rgba(149, 146, 255, 0.14)";
		//card.style.display = "flex";
		//card.style.flexDirection = "column";

		let header = document.createElement("div");
		header.style.display = "flex";
		header.style.justifyContent = "space-around";
		card.append(header);

		if(update){
			let date = document.createElement("div");
			date.innerHTML = update;
			date.style.fontSize = "9px";
			date.style.color = "grey";

			header.append(date);

		}

		


		let Texte = document.createElement("div");
		Texte.contentEditable  = "true";
		Texte.setAttribute("placeholder", holder);
		Texte.style.fontSize = size;
		Texte.style.margin = "10px";
		Texte.style.fontWeight = weight;
		//Texte.style.flex = flex;
		Texte.style.border = "none";
		Texte.style.outline = "none";
		Texte.style.background = "transparent";
		Texte.style.color = color;
		Texte.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
		Texte.id = id;
		Texte.innerHTML = text;
		card.append(Texte);

		Texte.addEventListener("keyup", (e)=>this.dispatcher(e,"text",Texte));

		return card;

	}




	dispatcher(e,name, value){
		console.log('in dispatcher');
		console.log(value);
		this.Synchronizer(name,value);

		this.changeTextColor(e,value);

	}



	Synchronizer(name,value){

		console.log('in Synchronizer');
/*		console.log(name);
		let ContainerNode = this.Lifer.getData("app/home/frame/objects","ContainerNode");
		let LeafNode = this.Lifer.getData("app/home/frame/objects","LeafNode");*/

		let formData = new FormData();
		formData.append('ObjectId' , this.ContainerNode.id);
        formData.append('ObjectLeafId' , this.LeafNode.id);
        formData.append('noteId'  , this.note.id);

/*        console.log("before if");
        console.log(this.note.id);
        console.log(name);*/
		if (this.note.id == false || (name == "text" && value.id == "title" )){

			//j'init ma note dans tous les cas
			formData.append('titre'  , document.getElementById('title').innerHTML);

			let res = this.NoteCollection.create(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				this.note.id = res.data;
			}


			this.firstKey = false;


		}

		if(name == "text" && Number.isInteger(this.note.id) && value.id != "title"){

			formData.append('texte'  , value.innerHTML);
        	formData.append('resourceId'  , value.id);
        	formData.append('typeId'  , 2);

        	let res = this.ResourcesCollection.createUpdate(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				value.id = res.data;
			}


		}



		if(name == "photo" && Number.isInteger(this.note.id) && value.id != "title"){

			formData.append('data'  , value);
        	formData.append('resourceId'  , value.id);
        	formData.append('typeId'  , 3);

        	let res = this.ResourcesCollection.createUpdate(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				value.id = res.data;
			}


		}




	}



	changeTextColor(e,value){

	//this.Synchronizer();

	if(value.innerHTML === ""){
		value.style.color = "grey";
	}else{
		value.style.color = "black";
	}
	
	if(value.id == 'title' && e.key == "Enter"){

		value.innerHTML = value.innerHTML.replace(/<div><br><\/div>/i, '');
		value.focus();

	}

	}



	addFooter(){

		this.Footer = document.createElement("div");
		this.Footer.className = "footerNote";
		this.container.append(this.Footer);

		this.Footer.style.background = "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)";
		this.Footer.style.height = "40px";
		this.Footer.style.display = "flex";
		this.Footer.style.alignItems = "center";
		this.Footer.style.color = "";

		this.Photo = document.createElement("div");
		this.Footer.append(this.Photo);

		this.PhotoPicto = document.createElement("i");
		this.PhotoPicto.className = "material-icons";
		this.PhotoPicto.style.fontSize = "30px";
		this.PhotoPicto.style.color = "grey";
		this.PhotoPicto.style.marginLeft = "10px";
		this.PhotoPicto.style.marginTop = "5px";
		this.PhotoPicto.append('camera_alt');
		this.Photo.append(this.PhotoPicto);

		this.PhotoPicto.addEventListener("click", (e)=>this.launchCam(e));


		this.Pict = document.createElement("div");
		this.Footer.append(this.Pict);

		this.PictPicto = document.createElement("i");
		this.PictPicto.className = "material-icons";
		this.PictPicto.style.fontSize = "30px";
		this.PictPicto.style.color = "grey";
		this.PictPicto.style.marginLeft = "10px";
		this.PictPicto.style.marginTop = "5px";
		this.PictPicto.append('photo');
		this.Pict.append(this.PictPicto);

		this.PictPicto.addEventListener("click", (e)=>this.launchGallery(e));

	}


	launchCam(){

		this.camLauncher = document.createElement("input");
		this.camLauncher.type = "file";
		this.camLauncher.accept = "image/*";
		this.camLauncher.capture = "camera";
		this.camLauncher.style.display = "none";
		this.Footer.append(this.camLauncher);
		this.camLauncher.click();

		this.camLauncher.addEventListener("change", (e)=>this.importPict(e));
	}	

	launchGallery(){

		this.camLauncher = document.createElement("input");
		this.camLauncher.type = "file";
		this.camLauncher.accept = "image/*";
		this.camLauncher.style.display = "none";
		this.Footer.append(this.camLauncher);
		this.camLauncher.click();

		this.camLauncher.addEventListener("change", (e)=>this.importPict(e));
	}


	importPict(e){


/*		let img = document.createElement("img");
		img.classList.add("obj");
			

		this.Main.prepend(img); */


		let reader = new FileReader();
		reader.readAsDataURL(this.camLauncher.files[0]);

		reader.onloadend = ()=> this.loadPict(reader.result);
		//reader.onloadend => this.insertPict(reader.result);


		//console.log(reader.result);
		


		
	}

	loadPict(pict){


		this.imgObj = new Image();

		this.imgObj.src = pict;

		this.imgObj.addEventListener('load',()=>this.getOrientation(pict));


	}

	getOrientation(pict){

		EXIF(this.camLauncher.files[0],(err,orientation) => this.rotateImg(err,orientation,pict));

	}



	rotateImg(err,orientation,pict){


		this.imgDiv = document.createElement("div");
		this.divCore.append(this.imgDiv);
		this.imgDiv.style.display = "flex";
		this.imgDiv.style.borderRadius = "8px";
		this.imgDiv.style.margin = "10px";

		this.img = document.createElement("img");
		this.img.classList.add("obj");
		this.imgDiv.prepend(this.img); 

		let RatioPhoto = this.imgObj.naturalWidth / this.imgObj.naturalHeight;

		this.img.src = pict;
		this.img.style.width  = "100%";
		this.img.style.borderRadius = "8px";
		this.img.height = this.img.offsetWidth  / RatioPhoto;
		

		if(orientation.rotate == 90){

			let ImgHeight = this.img.offsetWidth;
			let ImgWidth = this.img.offsetWidth * RatioPhoto;

			let decalX = ((ImgWidth - this.img.offsetWidth) / 2);
			//let decalY = ((ImgWidth - this.img.offsetWidth) / 2);

			this.img.style.width = "";
			this.img.width = ImgWidth;
			this.img.height = ImgHeight;

			this.img.style.transform = 'rotate(' + orientation.rotate + 'deg) translate('+decalX+'px,'+decalX+'px)';

			this.imgDiv.style.minHeight = ImgWidth+"px";

		}else{

			this.imgDiv.style.minHeight = this.img.height+"px";
		}


		//envoyer en sauvegarde background
		this.dispatcher("","photo",this.camLauncher.files[0]);

	}



}