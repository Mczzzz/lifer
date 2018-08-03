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

		this.setStyle("display" , "flex");
		this.setStyle("alignItems" , "center");
		
		this.createPicto();

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


	setStylePicto(property,value){

     	this.Picto[property] = value;

        this.i.style[property] = this.Picto[property];

    }



}