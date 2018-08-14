

import LoaderCollection from '../../services/LoaderCollection.js';

import { DatasSynchronizing } from '../../services/DatasSynchronizing.js';

import superViews       from '../elements/common/super/views.js';



import Header           from '../elements/note/header.js';
import Main             from '../elements/note/main.js';
import Footer           from '../elements/note/footer.js';


export default class Note extends superViews{
	

	constructor(MyClass,path,id = false){

		super( MyClass , path);

		console.log(id);

		this.note = {};

		this.note.id = id;
		this.note.Title = "";
		this.note.Ts = this.Moment().format('YYYY-MM-DD HH:mm:ss');
		
		this.orders = [];


		this.init();

	}


	init(){


		this.setStyle("position" , "absolute");
		this.setStyle("top" , "0.5%");
		this.setStyle("left" , "0.5%");
		this.setStyle("height" , "99%");
		this.setStyle("width" , "99%");
		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");
		this.setStyle("background" , "white");
		this.setStyle("boxShadow" , "0px 0px 10px 10px green");

/*		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");
		this.setStyle("height" , "100vh");*/



		this.NoteCollection = new LoaderCollection("Note");

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

		this.Lifer.dumpMe();

		this.initChilds();

	}



	initChilds(){

		this.Header = new Header("headerNote",this.path);

		this.Main   = new Main("mainNote",this.path);

		this.Footer = new Footer('footerNote' , this.path);

	}





	Push(datas){
		console.log("in Note Push");
		console.log(datas);
/*				$res = {};
		$res.type = "resource";
		$res.id = timestamp;
		$res.update = updateTs.format('YYYY-MM-DD HH:mm:ss');
		$res.resource = Resource;
		*/


		
		if(datas.type = "resource"){

			//je met mon IHM à jour

			let updateNote = this.Lifer.getData("Note/mainNote/noteMainTitle/NoteTitleCard/cardElementheader/noteEltTextupdate","This");	
    		
    		updateNote.getContainer().innerHTML = datas.update.format('Do MMMM YYYY, HH:mm:ss');
    		updateNote.getContainer().style.color = "red";

    		this.note.Ts = datas.update.format('YYYY-MM-DD HH:mm:ss');

    		//il faut passer en rouge les valeurs qui ne sont pas encore validée par le serveur




    		let orderNumber = DatasSynchronizing.push(this.MyClass,true,datas);

    		
    		
    		let actions = [];
    		actions.push({"object" : updateNote, "method" : "setStyle", "value" : "color green"});
    		actions.push({"object" : datas.card,  "method" : "updateIds", "value" : "%guid%"});
    		actions.push({"object" : datas.card, "method" : "setStyle",  "value" : "color blue"});

    		let commande = {};
    		commande.id = orderNumber;
    		commande.status = "pending"; //backaction //close;
    		commande.actions = actions;


    		this.orders[orderNumber] =  commande;

    		console.log(this.orders);
    		//action
    		//remettre l'update en vert
    		//modifier les ids de l'ensemble des éléments de la resource
    		//modifier la couleur de la resource
    		//supprimer la comande

		}





		//je récupère un numérode commade
		//je l'ajoute a mon tableau de demande en attente
		//j'y insere les action à executer

	}




/*	_Synchronizer(name,value){

		console.log('in Synchronizer');


		let formData = new FormData();
		formData.append('ObjectId' , this.ContainerNode.id);
        formData.append('ObjectLeafId' , this.LeafNode.id);
        formData.append('noteId'  , this.note.id);


		if (this.note.id == false || (name == "text" && value.id == "title" )){

			//j'init ma note dans tous les cas
			formData.append('titre'  , document.getElementById('title').innerHTML);

			let res = this.NoteCollection.create(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				this.note.id = res.data;
			}


			this.firstKey = false;


		}

		if(name == "text" && Number.isInteger(this.note.id) && value.id != "title"){

			formData.append('texte'  , value.innerHTML);
        	formData.append('resourceId'  , value.id);
        	formData.append('typeId'  , 2);

        	let res = this.ResourcesCollection.createUpdate(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				value.id = res.data;
			}


		}



		if(name == "photo" && Number.isInteger(this.note.id) && value.id != "title"){

			formData.append('data'  , value);
        	formData.append('resourceId'  , value.id);
        	formData.append('typeId'  , 3);

        	let res = this.ResourcesCollection.createUpdate(formData);

			if(res.error == 0 && Number.isInteger(res.data)){
				value.id = res.data;
			}


		}


	}*/






}