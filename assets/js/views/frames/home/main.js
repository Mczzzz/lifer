import superViews from "../../common/superViews.js";

import Card from "../../common/ui/card.js";

import LoaderCollection from '../../../services/LoaderCollection.js';

export default class Main extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path)

		this.init();
		
	}


	init(){

		//this.setStyle("background" , "linear-gradient(45deg, rgb(199, 28, 28) 0%, rgb(216, 216, 216) 100%)");
		this.setStyle("background" , "white");
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


		
		let len = datas.rows.length, i;
		  for (i = 0; i < len; i++) {


		  	this.createCard(datas.rows[i]);


		  }





	}


	createCard(datas){

		let id = datas.item_id;

			let card = new Card('Card'+id, this.path);
	
		    card.setStyle("borderWidth", "1px");
		    card.setStyle("borderRadius", "3px");
		    card.setStyle("margin", "5px");
		    card.setStyle("padding", "10px");
		    card.setStyle("background", "navajowhite");


			let Elt = card.setElement("Element"+id);
			Elt.setStyle("justifyContent","flex-start");


			
			let 	item = card.push("TextButton", Elt,"view_Note"+id,id);
				item.getContainer().addEventListener("click",()=>this.openNote(id));

					//item.setData(datas.rows[i].item_id);

					//item.getContainer().addEventListener("click",()=>this.StartNote());



	}



	openNote(guid){

	 let LinkEvent = new CustomEvent('changeRoute', {'detail' : {'frame' : 'Note',
	 	                                                          'guid' : guid
	 	                                                         }
	 	                                             }
	 	                            );
     window.dispatchEvent(LinkEvent);


	}




}