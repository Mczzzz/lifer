import superViews from "../../common/superViews.js";
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

		console.log("in showLiiiiiiiiiiiiiiiiiiiiiiiiiist!!!!!!");

		this.NoteCollection = new LoaderCollection('Note');
		this.NoteCollection.getAllNotes(this,'addCards');


	}

	addCards(datas){

		console.log("In Addd Cardsssssssssssssssssss!!!!");

		console.log(datas);





	}




}