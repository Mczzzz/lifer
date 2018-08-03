import superViews from "../common/super/views.js";

import Title      from "./main/title.js";
import Resources  from "./main/resources.js";
import Empty      from "./main/empty.js";


export default class Main extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

				

		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");
		this.setStyle("flex" , 1);



		this.initChilds();


	}


	initChilds(){

		this.Title     = new Title("noteMainTitle",this.path);

		this.Resources = new Resources("noteMainResources",this.path);

		this.Empty     = new Empty("noteMainEmpty",this.path);

	}




/*	_addRessources(){

		let divCore = document.createElement("div");
		divCore.style.overflowY = "scroll";
		divCore.style.flex = "1";
		this.Main.append(divCore);

		this.divCore = divCore;

		if(this.note.id){

			console.log('in init noteAsked Id');
			//load ma node pour récupérer le titre et la date
			let res = this.NoteCollection.get(this.ContainerNode.id,this.LeafNode.id,this.note.id);

			console.log(res);
			console.log(this.Title);
			if(res.name.length > 0){
				let title = document.getElementById('title');
				title.append(res.name);
				title.style.color = "black";
			}
	
			//je load mes ressources et je les affichent
			let Ressources = this.ResourcesCollection.getList(this.ContainerNode.id, this.LeafNode.id, this.note.id);
	
			for (let Ressource of Ressources){

					let cardElement = "";

				if(Ressource.type == 3){

					cardElement = this.photoElement(Ressource.text,Ressource.id,"15px","","black","",Ressource.update);

				}else{

					cardElement = this.textElement(Ressource.text,Ressource.id,"15px","","black","",Ressource.update);
				}

				divCore.append(cardElement);

			}

			console.log(divCore.scrollTop);
			console.log(divCore.scrollHeight);
			divCore.scrollTop = divCore.scrollHeight;

		}



	}*/






/*	_addEmpty(){
		let divEmpty = document.createElement("div");
		divEmpty.style.display = "flex";
		let cardEmpty = this.textElement('','text',"15px","","grey","Texte...");
		divEmpty.append(cardEmpty);

		cardEmpty.style.flex  = "1";
		//let validEmpty = document.createElement("div");
		
		
		let  button = new Button(divEmpty,"buttonValid",this.path);
		//divEmpty.append(button);
		this.Main.append(divEmpty);
	
	}*/





}