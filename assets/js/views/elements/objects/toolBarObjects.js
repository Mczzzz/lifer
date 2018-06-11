import toolBar from '../common/toolBar.js';


export default class toolBarObjects  extends toolBar {

	constructor(){


		super();


		this.init();
	}


	init(){

		this.initButton("add");

		this.ObjectsInitActions();
	}


	ObjectsInitActions(){


		let buttons = {

			"photo" : {

				"color" :  "red",
				"icon"  :  "camera_alt",
				"action" : "startPhoto"

			}
		};

	

	this.alimentList(buttons);


	}

}