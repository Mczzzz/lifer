import superViews from "../../common/superViews.js";

import Card from "../../common/ui/card.js";

import LoaderCollection from '../../../services/LoaderCollection.js';

export default class Main extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path)

		this.init();
		
	}


	init(){

		this.setStyle("background" , "linear-gradient(45deg, rgb(199, 28, 28) 0%, rgb(216, 216, 216) 100%)");
		this.setStyle("flex" , 1);
		this.setStyle("alignItems" , "center");


		//je récupère la liste des notes
		//j'affiche

	
		this.showList();
	}




	showList(){


		this.NoteCollection = new LoaderCollection('Note');
		this.NoteCollection.getAllNotes(this,'addCards');


	}

	addCards(datas){

		console.log(datas);

		let card = "";
		let Elt = "";
		let item = "";

		let len = datas.rows.length, i;
		  for (i = 0; i < len; i++) {


		  	card = new Card('Card', this.path);
	
		    card.setStyle("borderWidth", "0px");
		    card.setStyle("borderRadius", "0px");
		    card.setStyle("margin", "0px");
		    card.setStyle("padding", "10px");
		    card.setStyle("background", "transparent");


			Elt = card.setElement("Element");
			Elt.setStyle("justifyContent","flex-start");



				item = card.push("textButton", Elt,"view_Note", "viewNote");

					item.setStylePicto("fontSize","25px");
					item.setStylePicto("marginRight","0px");
					item.setStylePicto("color","green");
					item.setStylePicto("alignItems","center");

					//item.getContainer().addEventListener("click",()=>this.StartNote());









		  }





	}




}