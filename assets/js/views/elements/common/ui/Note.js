//import EXIF from "jpeg-exif";
import Footer from '../sections/footer.js';
import Header from '../sections/header.js';
import superViews from "../super/views.js"

export default class Note extends superViews{
	

	constructor(parent,MyClass,path){

		super(parent, MyClass , path);

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

		let Note = new Header(this.MyClass);
		Note.setBkgdColor("linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)");
		Note.setHeight(60);
		Note.setBack();
		
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

		this.Title.addEventListener("keyup", (e)=>this.changeTextColor(e,"Title"));


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


		this.Texte.addEventListener("keyup", (e)=>this.changeTextColor(e,"Texte"));


	}

	changeTextColor(e,name){

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
		this.PhotoPicto.style.fontSize = "40px";
		this.PhotoPicto.style.color = "grey";
		this.PhotoPicto.style.marginLeft = "10px";
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


		let img = document.createElement("img");
		img.classList.add("obj");
			

		this.Main.prepend(img); 


		let reader = new FileReader();
		reader.readAsDataURL(this.camLauncher.files[0]);

		reader.onloadend = ()=> this.loadPict(reader.result);
		//reader.onloadend => this.insertPict(reader.result);


		//console.log(reader.result);
		


		
	}

	loadPict(pict){

		/*let exif = new EXIF({image: new BinaryFile(pict)},function (error, exifData){

	 		if (error){
	            console.log('Error: '+error.message);
	 		}
	        else{
	            console.log(exifData); // Do something with your data!
	        }
	 

		});*/

/*		let data=exif.parseSync(new BinaryFile(pict));
			console.log(data);
		console.log('exif');
		console.log(exif.Orientation);*/
		//on transforme en image

		this.imgObj = new Image();

		this.imgObj.src = pict;

		this.imgObj.addEventListener('load',()=>this.insertPict(pict));


		//on va lire l'exif pour connaitre l'orientation


/*	    switch(exif.Orientation){

	       case 8:
	           ctx.rotate(90*Math.PI/180);
	           break;
	       case 3:
	           ctx.rotate(180*Math.PI/180);
	           break;
	       case 6:
	           ctx.rotate(-90*Math.PI/180);
	           break;

	    }*/

	}



	insertPict(pict){

//on transforme en image


//on insere en mode homotetique

		console.log('in insert pict');

			this.img = document.createElement("img");
			this.img.classList.add("obj");
			this.img.src = pict;
			this.Main.prepend(this.img); 

			//calcul de ma nouvelle taille
			let ratioWidth = this.img.offsetWidth / this.imgObj.naturalWidth;

			this.img.height = this.img.offsetHeight  * ratioWidth;
			console.log(this.img.offsetWidth);
			console.log(this.img.offsetHeight);

	}

}