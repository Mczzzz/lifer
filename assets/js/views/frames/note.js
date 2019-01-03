import LoaderCollection from '../../services/LoaderCollection.js';

import { DatasSynchronizing } from '../../services/DatasSynchronizing.js';

import superViews       from '../common/superViews.js';



import Header           from './note/header.js';
import Main             from './note/main.js';
import Footer           from './note/footer.js';


export default class Note extends superViews{
	

	constructor(MyClass,path,id = false){


		super( MyClass , path);

		console.log('in note.js');
		console.log(id);

		 if(id){

		 	this.container.id = id;
		 	this.new = false;

		 }else{

		 	this.container.id = "tmp-"+this.Lifer.newTmpId();
		 	this.new = true;
		 }	


		this.Title = "";
		
		this.init();

	}


	init(){


		this.setStyle("position" , "absolute");
		this.setStyle("top" , "0px");
		this.setStyle("left" , "0px");
		this.setStyle("height" , "100%");
		this.setStyle("width" , "100%");
		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");
		this.setStyle("background" , "white");
		//this.setStyle("boxShadow" , "0px 0px 10px 10px green");

/*		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");
		this.setStyle("height" , "100vh");*/



		this.NoteCollection = new LoaderCollection("Notes");

/*		if(this.note.id !== false){


			this.ContainerNode = this.Lifer.getData("Objects","ContainerNode");
			this.LeafNode = this.Lifer.getData("Objects","LeafNode");

			this.NoteCollection = new LoaderCollection("ObjectInfos");
			this.ResourcesCollection = new LoaderCollection("ObjectInfosResources");

			//A REVOIR MAIS MIEUX QU'AVANT

			let noteInfos = this.NoteCollection.get(this.ContainerNode.id,this.LeafNode.id,this.note.id);
			this.Lifer.addData(this.path,[{"Title" : noteInfos}]);

			let noteResources = this.ResourcesCollection.getList(this.ContainerNode.id, this.LeafNode.id, this.note.id);
			this.Lifer.addData(this.path,[{"Resources" : noteResources}]);


		}*/

	//	this.Lifer.dumpMe();

		this.initChilds();

	}



	initChilds(){

		this.Header = new Header("Header",this.path);

		this.Main   = new Main("Main",this.path);

		this.Footer = new Footer('Footer' , this.path);

	}



	setNoteGuid(id){
		this.note.guid = id;
	}


	setTitle(title){

		console.log("in note.js !!!!!!!!!!!!!!!!!!");
		this.Title = title;

		this.store();

	}


	store(data=false){

		if(!data) data = {};
		
		data.NoteId = this.container.id;
		data.NoteTitle = this.Title;
		

				//inform controller
		let Notecontroller = this.getObjectThisfromPath("Controller-Note");

		Notecontroller.dataToStore(data);

	}


}