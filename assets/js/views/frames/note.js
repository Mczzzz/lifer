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

		this.note.guid = id;
		this.note.Title = "";
		this.note.Ts = this.Moment().format('YYYY-MM-DD HH:mm:ss');
		
		this.orders = [];


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

		this.Header = new Header("Header",this.path);

		this.Main   = new Main("Main",this.path);

		this.Footer = new Footer('Footer' , this.path);

	}



	setNoteGuid(id){
		this.note.guid = id;
	}



	Confirm(datas,dataCallback){

		console.log(dataCallback);
		console.log(this.orders);
		console.log(datas);

		// je récupère ma commande

		if(!this.orders.hasOwnProperty(dataCallback.OrderId)){

			return false
		
		}else{



			//je set monIddéfinitif à ma note si je suis encore en tmp
			if(this.note.guid.indexOf("tmp-") == 0){
				console.log("on set l'id")
				this.setNoteGuid(datas.datas.Note.id);
			}

			//Si il y a une ressource je set l'id si ce n'est pas fait
			if(datas.datas.hasOwnProperty("Resource")){


				//TmpCardId-
				//on reload la Card pour lui assigner son id définitif
				let CardToSet = this.getObjectThisfromPath(dataCallback.Resource.Card);

				if(CardToSet.getId().indexOf("TmpCardId-") == 0){
					CardToSet.setId(datas.datas.Resource.id);
				}

				


			}





			for(let actions of this.orders[dataCallback.OrderId].actions){


				console.log('in for');
				console.log(actions);


					//faire les actions
	/*    		{"object" : updateNote, "method" : "setStyle", "value" : "color green"}
	    		{"object" : data.card,  "method" : "updateIds", "value" : "%guid%"}
	    		{"object" : data.card, "method" : "setStyle",  "value" : "color blue"}
	    		{"object" : dataSynchronizing, "method" : "receipt",  "value" : orderNumber}
	*/

	    		let arrayValue = actions.value.split(" ");

	    		let Myclass = this.getObjectThisfromPath(actions.object);	

	    		if(MyClass.indexOf("TmpCardId-") == 0){
				console.log("on set l'id de la resource")
					MyClass.setId("grrr");

				}

	    		if(arrayValue.length == 2){

	    			Myclass[actions.method](arrayValue[0], arrayValue[1]);
	    		
	    		}else{

	    			Myclass[actions.method](arrayValue[0]);
	    		
	    		}
    		

			}

			//on informe datassynchronig que tous c'est bien passé.
			DatasSynchronizing.receipt(dataCallback.OrderId);

			delete this.orders[dataCallback.OrderId];
			console.log(this.orders);
			return true;	
		}


	}




	Push(data){

//		console.log("in Note Push");
//		console.log(data);


		/*

			$res = {};
			$res.type = "resource";
			$res.id = timestamp;
			$res.update = updateTs.format('YYYY-MM-DD HH:mm:ss');
			$res.resource = Resource;
		
		*/


		//Je fais les pré-actions sur la note
		//this._PushPreOrderAction(data.update);

		//normalisation des dates de la ressource
		//data.update = data.update.format("YYYY-MM-DD HH:mm:ss");

		//Je demande un numero de commande a mon fournisseur
		let purchaseOrder = DatasSynchronizing.purchaseOrder();


		//on set l'id temporaire à la Note
		if(this.note.guid === false) this.setNoteGuid("tmp-"+purchaseOrder.id);

		//Je prépare la commande
		let order = this._PushPrepareOrder(data,purchaseOrder);

		// Je prépare les actions à la livraison de la commande
		this._PushPreparePostOrderAction(order,data,purchaseOrder);


		//Je passe la commande
		this._PushExectuteOrder(order,purchaseOrder);







	}

/*	DEPRECATED_PushPreOrderAction(update){

		
		
		this.note.Ts = update.format("YYYY-MM-DD HH:mm:ss");//objet Momentjs à formater a l'utilisation

		let updateNoteTitleElt = this.getObjectThisfromPath("Note-Main-Title-Card");	
		updateNoteTitleElt.getContainer().style.background = "red";

		let updateNoteElt = this.getObjectThisfromPath("Note-Main-Title-Card-Element-Textupdate");	
		updateNoteElt.getContainer().innerHTML = update.format('Do MMMM YYYY, HH:mm:ss');
		updateNoteElt.getContainer().style.color = "red";


		//faire un tableau des retours daction atten uet envoyé a la comande


	}*/


	_PushPrepareOrder(data, purchaseOrder){

		let to        		= { "collection" : "Note"    , "method"   : "Push"  };
		
		let dispatchResponseTo  = [];
		dispatchResponseTo.push({ "This"       : "Note"      , "method"   : "Confirm"});

		let datas     		= { "Note"       : this.note , "Resource" : data  , "OrderId" :  purchaseOrder.id  };

		let res = {};
		res.to       = to;
		res.dispatchResponseTo = dispatchResponseTo;
		res.datas    = datas;

		return res;

	}

	_PushPreparePostOrderAction(order,data,purchaseOrder){

	    let actions = [];
	    console.log("_PushPreparePostOrderAction");
	    console.log("data");
	    console.log(data);
		actions.push({"object" : "Note-mainNote-noteMainTitle-NoteTitleCard", "method" : "setStyle", "value" : "color green"});
		actions.push({"object" : data.card, "method" : "setStyle",  "value" : "background blue"});

		let commande = {};
		commande.id = purchaseOrder.id;
		commande.status = "pending"; //backaction //close;
		commande.actions = actions;


		this.orders[purchaseOrder.id] =  commande;

		

	}

	_PushExectuteOrder(order,purchaseOrder){

		return DatasSynchronizing.add(order.dispatchResponseTo,order.to,order.datas,purchaseOrder,true);

	}


}