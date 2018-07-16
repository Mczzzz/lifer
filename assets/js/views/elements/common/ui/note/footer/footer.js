import superViews from "../../../super/views.js"

//import Footer from '../../../sections/footer.js';
import Button from "../../button.js"

export default class Footer extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){


		this.background();

		this.addButtons();


	}



	background(){

/*		this.container.style.position = "absolute";
		this.container.style.height = "100%";
		this.container.style.width = "100%";*/
		this.container.style.background = "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)";
		this.container.style.height = "40px";
		this.container.style.display = "flex";
		this.container.style.alignItems = "center";
		this.container.style.color = "";


	}


	addButtons(){


/*		addPhoto();
		addGallery();
		addNumber();
		addText();*/
		let Photo  = new Button(this.container,"inputPhoto",this.path);
		Photos.setPicto("camera_alt");

		let Gallery = new Button(this.container,"inputGallery",this.path);
		Gallery.setPicto("photo");

/*		this.Photo = document.createElement("div");
		this.Footer.append(this.Photo);

		this.PhotoPicto = document.createElement("i");
		this.PhotoPicto.className = "material-icons";
		this.PhotoPicto.style.fontSize = "30px";
		this.PhotoPicto.style.color = "grey";
		this.PhotoPicto.style.marginLeft = "10px";
		this.PhotoPicto.style.marginTop = "5px";
		this.PhotoPicto.append('camera_alt');
		this.Photo.append(this.PhotoPicto);
*/
/*		this.PhotoPicto.addEventListener("click", (e)=>this.launchCam(e));


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

		this.PictPicto.addEventListener("click", (e)=>this.launchGallery(e));*/


	}





}