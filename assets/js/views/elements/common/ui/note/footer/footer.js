import superViews from "../../../super/views.js"

export default class Footer extends superViews{
	

	constructor(parent){


		this.init();
		
	}


	init(){


		this.background();



	}



	background(){

		this.container.style.position = "absolute";
		this.container.style.height = "100%";
		this.container.style.width = "100%";


	}


}