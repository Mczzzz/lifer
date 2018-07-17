import EXIF             from 'exif-orientation';

import LoaderCollection from '../../../../services/LoaderCollection.js';

import superViews       from "../super/views.js"

import Header           from './note/header.js';
import Main             from './note/main.js';
import Footer           from './note/footer.js';


import Button from "./button.js"

export default class Note extends superViews{
	

	constructor(parent,MyClass,path,id = false){

		super(parent, MyClass , path);

		console.log(id);

		this.note = {};
		this.note.id = id;
		
		this.firstKey = true;



		this.ContainerNode = this.Lifer.getData("app/home/frame/objects","ContainerNode");
		this.LeafNode = this.Lifer.getData("app/home/frame/objects","LeafNode");

		this.NoteCollection = new LoaderCollection("ObjectInfos");
		this.ResourcesCollection = new LoaderCollection("ObjectInfosResources");

		//A REVOIR MAIS MIEUX QU'AVANT

		let noteInfos = [];
		noteInfos[0] = this.NoteCollection.get(this.ContainerNode.id,this.LeafNode.id,this.note.id);

		this.Lifer.addData(this.path, noteInfos);
		let Ressources = this.ResourcesCollection.getList(this.ContainerNode.id, this.LeafNode.id, this.note.id);
		console.log(Ressources);
		this.Lifer.addData(this.path, Ressources);

		this.Lifer.dumpMe();
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
		this.Main   = new Main(this.container,"mainNote",this.path);
	}


	addFooter(){
		this.Footer = new Footer(this.container, 'footerNote' , this.path);
	}


/*
	addRessources(){

		let divCore = document.createElement("div");
		divCore.style.overflowY = "scroll";
		divCore.style.flex = "1";
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
		divEmpty.style.display = "flex";
		let cardEmpty = this.textElement('','text',"15px","","grey","Texte...");
		divEmpty.append(cardEmpty);

		cardEmpty.style.flex  = "1";
		//let validEmpty = document.createElement("div");
		
		
		let  button = new Button(divEmpty,"buttonValid",this.path);
		//divEmpty.append(button);
		this.Main.append(divEmpty);
	
	}
*/







	



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








	importPict(e){

		let reader = new FileReader();
		reader.readAsDataURL(this.camLauncher.files[0]);

		reader.onloadend = ()=> this.loadPict(reader.result);

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