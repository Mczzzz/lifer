import superViews from "../../../super/views.js";

export default class button extends superViews{ 
	

	constructor(parent, MyClass,path,prepend = false){

		super(parent, MyClass , path);

		this.color = "green";
		this.size  = 25;
		this.picto = "arrow_forward";

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
		this.i.style.fontSize    = this.size+"px";
		this.i.style.color       = this.color;
		this.i.style.marginRight = "15px";

		this.i.append(this.picto);

		this.container.append(this.i);

	}



	getElement(){

		return this.container;

	}






	setData(picto){

		this.i.innerHTML = "";
		this.i.append(picto);

	}


	setStyle(property,value){

     	this[property] = value;

        this.i.style[property] = this[property];

    }



}