import superViews from "../super/views.js"

export default class button extends superViews{ 
	

	constructor(parent, MyClass,path,prepend = false){

		super(parent, MyClass , path);


		this.init();

	}


	init(){

		this.containerStyle();
		this.createPicto();

	}




	containerStyle(){

		this.container.style.display = "flex";
		this.container.style.alignItems = "center";

	}


	createPicto(){

		this.i = document.createElement("i");

		this.i.className         = "material-icons";
		this.i.style.fontSize    = "25px";
		this.i.style.color       = "green";
		this.i.style.marginRight = "15px";

		this.i.append("arrow_forward");

		this.container.append(this.i);

	}



	getElement(){
		this.Lifer.dumpMe();
		return this.container;
	}



	setColor(color){

		this.i.style.color = color;

	}


	setPicto(picto){

		this.i.innerHTML = "";
		this.i.append(picto);

	}


	setMarginLeft(size){

		this.i.style.marginLeft = size + "px";

	}


}