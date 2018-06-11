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

			},

			"texte" : {

				"color" :  " yellow darken-1",
				"icon"  :  "format_quote",
				"action" : "startPhoto"

			},

			"event" : {

				"color" :  "green",
				"icon"  :  "date_range",
				"action" : "startPhoto"

			},

			"weblink" : {

				"color" :  "blue",
				"icon"  :  "insert_link",
				"action" : "startPhoto"

			},

			"value" : {

				"color" :  "blue",
				"icon"  :  "looks_one",
				"action" : "startPhoto"

			},

		};

	

	this.alimentList(buttons);

	//add listener here


	}


	startPhoto(){

		console.log('instartphoto');
	}

}