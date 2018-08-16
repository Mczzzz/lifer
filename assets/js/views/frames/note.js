

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



	setNoteGuid(id){
		this.note.guid = id;
	}



	Valid(datas,dataCallback){

		console.log(dataCallback);
		console.log(this.orders);
		console.log(datas);
		//this.orders[datas.xxx]
		// je récupère ma commande
		//let MyOrderToAchieve = 

		if(!this.orders.hasOwnProperty(dataCallback.OrderId)){

			return false
		
		}else{



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

	    		let Myclass = actions.object;

	    		if(arrayValue.length == 2){

	    			Myclass[actions.method](arrayValue[0], arrayValue[1]);
	    		
	    		}else{

	    			Myclass[actions.method](arrayValue[0]);
	    		
	    		}
    		

			}
			this.orders[datas.xxx].splice(index,1);
			return true;	
		}


	}




	Push(data){

		console.log("in Note Push");
		console.log(data);


		/*

			$res = {};
			$res.type = "resource";
			$res.id = timestamp;
			$res.update = updateTs.format('YYYY-MM-DD HH:mm:ss');
			$res.resource = Resource;
		
		*/


		//Je fais les pré-actions sur la note
		let updFieldElt = this._PushPreOrderAction(data.update);

		//Je demande un numerode commande a mon fournisseur
		let purchaseOrder = DatasSynchronizing.purchaseOrder();

		//Je prépare la commande
		let order = this._PushPrepareOrder(data,purchaseOrder);

		// Je prépare les actions à la livraison de la commande
		this._PushPreparePostOrderAction(updFieldElt,order,data,purchaseOrder);


		//Je passe la commande
		this._PushExectuteOrder(order,purchaseOrder);

		//on set l'id temporaire à la Note
		this.setNoteGuid(order.tmpId);





	}

	_PushPreOrderAction(update){

		let updateNoteElt = this.Lifer.getData("Note/mainNote/noteMainTitle/NoteTitleCard/cardElementheader/noteEltTextupdate","This");	
		
		this.note.Ts = update; //objet Momentjs à formater a l'utilisation

		updateNoteElt.getContainer().innerHTML = update.format('Do MMMM YYYY, HH:mm:ss');
		updateNoteElt.getContainer().style.color = "red";

		return updateNoteElt;
	}


	_PushPrepareOrder(data, purchaseOrder){

		let fromBack  = { "This"       : this      , "method"   : "Valid"};
		let to        = { "collection" : "Note"    , "method"   : "Push"  };
		let datas     = { "Note"       : this.note , "Resource" : data  , "OrderId" :  purchaseOrder.id  };

		let res = {};
		res.fromBack = fromBack;
		res.to       = to;
		res.datas    = datas;

		return res;

	}

	_PushPreparePostOrderAction(updFieldElt,order,data,purchaseOrder){

	    let actions = [];

	    if(this.Note.guid === false){
	    	actions.push({"object" : this, "method" : "setNoteGuid", "value" : "%guid%"});
	    }

		actions.push({"object" : updFieldElt, "method" : "setStyle", "value" : "color green"});
//actions.push({"object" : data.card,  "method" : "updateIds", "value" : "%guid%"});
//actions.push({"object" : data.card, "method" : "setStyle",  "value" : "color blue"});
//actions.push({"object" : DatasSynchronizing, "method" : "receipt",  "value" : purchaseOrder});

		let commande = {};
		commande.id = purchaseOrder.id;
		commande.status = "pending"; //backaction //close;
		commande.actions = actions;


		this.orders[purchaseOrder.id] =  commande;

		

	}

	_PushExectuteOrder(order,purchaseOrder){

		return DatasSynchronizing.add(order.fromBack,order.to,order.datas,purchaseOrder,true);

	}


}