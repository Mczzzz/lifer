import superViews from "../../../super/views.js";

export default class TextButton extends superViews{ 
	

	constructor(parent, MyClass,path,prepend = false){

		super(parent, MyClass , path);

		this.init();

	}


	init(){

		this.container.style.display = "flex";
		this.container.style.alignItems = "center";


	}



    setData(text){

          this.container.innerHTML = text;

    }


}