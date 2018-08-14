

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


	Valid(datas){

		//this.orders[datas.xxx]
		let index = this.orders[datas.xxx].indexOf(datas.xxx);

		if(index == -1){
			console.log("Commande non trouvée dans Valid Note");
			return false
		}else{


			for(let actions of this.orders[datas.xxx].actions){


			

				//faire les actions
/*    		{"object" : updateNote, "method" : "setStyle", "value" : "color green"}
    		{"object" : data.card,  "method" : "updateIds", "value" : "%guid%"}
    		{"object" : data.card, "method" : "setStyle",  "value" : "color blue"}
    		{"object" : dataSynchronizing, "method" : "receipt",  "value" : orderNumber}*/
    		let arrayValue = actions.value.split(" ");

    		if(arrayValue.length == 2){

    			actions.object[actions.method](arrayValue[0], arrayValue[1]);
    		
    		}else{

    			actions.object[actions.method](arrayValue[0]);
    		
    		}
    		

    			

			}
			this.orders[datas.xxx].splice(index,1);
			return true;	
		}


	}


	Push(data){
		console.log("in Note Push");
		console.log(data);
/*				$res = {};
		$res.type = "resource";
		$res.id = timestamp;
		$res.update = updateTs.format('YYYY-MM-DD HH:mm:ss');
		$res.resource = Resource;
		*/


		
		if(data.type = "resource"){

			//je met mon IHM à jour

			let updateNote = this.Lifer.getData("Note/mainNote/noteMainTitle/NoteTitleCard/cardElementheader/noteEltTextupdate","This");	
    		
			this.note.Ts = data.update; //objet Momentjs à formater a l'utilisation

    		updateNote.getContainer().innerHTML = data.update.format('Do MMMM YYYY, HH:mm:ss');
    		updateNote.getContainer().style.color = "red";

			//Passer le background en une autre couleur tant que tout est pas dépiler    		

			//faire un objet
			//-collection
			//-methode
			let from  = { "This"       : this      , "method"   : "Valid" };
			let who   = { "collection" : "Note"    , "method"   : "Push"  };
			let datas = { "Note"       : this.note , "Resource" : data    };

    		let orderNumber = dataSynchronizing.add(this.MyClass,PushCollect,datas,true);

    		//assign le tmpid à la note
    		this.note.id = orderNumber.tmpId;

    		console.log("orderNumber");
    		console.log(orderNumber);
    		
    		let actions = [];
    		actions.push({"object" : updateNote, "method" : "setStyle", "value" : "color green"});
    		//actions.push({"object" : updateNoteId, "method" : "This", "value" : "note.id green"});
    		actions.push({"object" : data.card,  "method" : "updateIds", "value" : "%guid%"});
    		actions.push({"object" : data.card, "method" : "setStyle",  "value" : "color blue"});
    		actions.push({"object" : dataSynchronizing, "method" : "receipt",  "value" : orderNumber});

    		let commande = {};
    		commande.id = orderNumber.order.id;
    		commande.status = "pending"; //backaction //close;
    		commande.actions = actions;


    		this.orders[orderNumber.tmpId] =  commande;

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