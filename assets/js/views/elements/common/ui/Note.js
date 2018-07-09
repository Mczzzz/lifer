import EXIF from 'exif-orientation';

import LoaderCollection from '../../../../services/LoaderCollection.js';

import Footer from '../sections/footer.js';
import Header from './note/header/header.js';
import superViews from "../super/views.js"

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

		if(this.note.id){

			console.log('in init noteAsked Id');
			//load ma node pour récupérer le titre et la date
			let res = this.NoteCollection.get(this.ContainerNode.id,this.LeafNode.id,this.note.id);

			console.log(res);
			console.log(this.Title);
			if(res.name.length > 0){
				this.Title.append(res.name);
				this.Title.style.color = "black";
			}
	
			//je load mes ressources et je les affichent
			let Ressources = this.ResourcesCollection.getList(this.ContainerNode.id, this.LeafNode.id, this.note.id);
	
			for (let Ressource of Ressources){

				console.log(Ressource);
				this.textElement(Ressource.text);



			}



		}


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
		this.container.append(this.Main);

		this.Main.style.background = "white";
		this.Main.style.display = "flex";
		this.Main.style.overflowY = "scroll";
		this.Main.style.flexDirection = "column";
		this.Main.style.flex = 1;


		this.Title = document.createElement("div");
		this.Title.contentEditable  = "true";
		this.Title.setAttribute("placeholder", "Titre...");
		this.Title.style.fontSize   = "20px";
		this.Title.style.fontWeight = "bold";
		this.Title.style.margin     = "10px";
		this.Title.style.border     = "none";
		this.Title.style.outline    = "none";
		this.Title.style.background = "transparent";
		this.Title.style.color      = "grey";
		this.Title.style.fontFamily = "'Titillium Web',sans-serif,Arial,sans-serif";
		this.Main.append(this.Title);
		this.Title.focus();

		this.Title.addEventListener("keyup", (e)=>this.dispatcher(e,"Title"));


		this.Texte = document.createElement("div");
		this.Texte.contentEditable  = "true";
		this.Texte.setAttribute("placeholder", "Texte...");
		this.Texte.style.fontSize = "15px";
		this.Texte.style.margin = "10px";
		this.Texte.style.flex = "1";
		this.Texte.style.border = "none";
		this.Texte.style.outline = "none";
		this.Texte.style.background = "transparent";
		this.Texte.style.color = "grey";
		this.Texte.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
		this.Main.append(this.Texte);


		this.Texte.addEventListener("keyup", (e)=>this.dispatcher(e,"Texte"));


	}



	textElement(text){
		let Texte = document.createElement("div");
		Texte.contentEditable  = "true";
		Texte.setAttribute("placeholder", "Texte...");
		Texte.style.fontSize = "15px";
		Texte.style.margin = "10px";
		Texte.style.flex = "1";
		Texte.style.border = "none";
		Texte.style.outline = "none";
		Texte.style.background = "transparent";
		Texte.style.color = "grey";
		Texte.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";

		Texte.append(text);
		this.Main.append(Texte);

	}




	dispatcher(e,name){
		console.log('in dispatcher');

		this.Synchronizer(name);

		this.changeTextColor(e,name);

	}



/*	initNoteLife(e, name){


		this.Saver("TEXT");*/

/*SELECT `objects_infos`.`id`,
    `objects_infos`.`Name`,
    `objects_infos`.`object`,
    `objects_infos`.`my_order`,
    `objects_infos`.`creator`,
    `objects_infos`.`objectTree`,
    `objects_infos`.`ts_update`
FROM `lifer`.`objects_infos`;*/

/*
SELECT `objects_infos_resources`.`id`,
    `objects_infos_resources`.`text`,
    `objects_infos_resources`.`ts_update`,
    `objects_infos_resources`.`value`,
    `objects_infos_resources`.`object`,
    `objects_infos_resources`.`objectTree`,
    `objects_infos_resources`.`objectInfos`,
    `objects_infos_resources`.`type`
FROM `lifer`.`objects_infos_resources`;
*/
	//je dois recuperer l'id de 


/*
		this.changeTextColor(e, name);

	}*/



	Synchronizer(name){

		console.log('in Synchronizer');
/*		console.log(name);
		let ContainerNode = this.Lifer.getData("app/home/frame/objects","ContainerNode");
		let LeafNode = this.Lifer.getData("app/home/frame/objects","LeafNode");*/

		let formData = new FormData();
		formData.append('ObjectId' , this.ContainerNode.id);
        formData.append('ObjectLeafId' , this.LeafNode.id);

        console.log("before if");
        console.log(this.note.id);
        console.log(name);
		if (this.note.id == false || name == "Title"){

			//j'init ma note dans tous les cas
			formData.append('titre'  , this.Title.innerHTML);
        	formData.append('noteId'  , this.note.id);

			let res = this.NoteCollection.create(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				this.note.id = res.data;
			}


			this.firstKey = false;


		}

		if(name == "Texte" && Number.isInteger(this.note.id)){

			formData.append('texte'  , this.Texte.innerHTML);
        	formData.append('noteId'  , this.note.id);
        	formData.append('resourceId'  , this.Texte.id);

        	let res = this.ResourcesCollection.createUpdate(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				this.Texte.id = res.data;
			}


		}





	}



	changeTextColor(e,name){

	//this.Synchronizer();

	if(this[name].innerHTML === ""){
		this[name].style.color = "grey";
	}else{
		this[name].style.color = "black";
	}
	
	if(name == 'Title' && e.key == "Enter"){

		this.Title.innerHTML = this.Title.innerHTML.replace(/<div><br><\/div>/i, '');
		this.Texte.focus();

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
		this.Main.prepend(this.imgDiv);
		this.imgDiv.style.display = "flex";

		this.img = document.createElement("img");
		this.img.classList.add("obj");
		this.imgDiv.prepend(this.img); 

		let RatioPhoto = this.imgObj.naturalWidth / this.imgObj.naturalHeight;

		this.img.src = pict;
		this.img.style.width = "100%";
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


	}



}