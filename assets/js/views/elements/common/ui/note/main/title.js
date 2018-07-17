import superViews from "../../../super/views.js"

export default class Title extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);

		this.init();
		
	}


	init(){

		let cardTitle = this.textElement('','title',"20px","bold","grey","Titre...");

	}


}
