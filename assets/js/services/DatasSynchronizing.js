import Moment from 'moment';
import 'moment/locale/fr';

import LoaderCollection from './LoaderCollection.js';


class DatasSynchronizing {
	

	constructor(){


		this.Stack = [];
		this.active = false;

		this.init();
		openDatabase

	}


	init(){

		this.syncData = openDatabase('syncData', '1.0', 'queue de synchronisation', 2 * 1024 * 1024);


	}


	purchaseOrder(){

		let stackId = Moment().format('x') + "-" + Math.floor(Math.random() * Math.floor(100000));

		//on regarde si le numéro existe déja mais ya peux de chance
		let index = this.Stack.indexOf(stackId);

		if(index == -1){

			this.Stack[stackId] = {};
			this.Stack[stackId].id = stackId;
			this.Stack[stackId].status = "waiting";

//			console.log("this.Stack");
//			console.log(this.Stack);

			return this.Stack[stackId];

		}else{
//			console.log('purshaseOrder Allready exist');
		}


	}



	add(dispatchResponseTo,to,datas,purchaseOrder,needTmpId=false){
	//from : pour le retour
	//methode de la collection
	//data a envoyer
/*			console.log("this.Stack in add");
			console.log(this.Stack);
			console.log(purchaseOrder);
			console.log(this.Stack[purchaseOrder.id]);*/
	
		//Ajout a la stack
		let MaCommande = {};
		MaCommande.to = to;
		MaCommande.dispatchResponseTo  = dispatchResponseTo ;
		MaCommande.datas = datas;
		this.Stack[purchaseOrder.id].status = "pending";
		this.Stack[purchaseOrder.id].order = MaCommande;

	//	console.log("before execute Task");
		//je demarra le traitement de la stack
		this.executeStack();

		//Préparation de la réponse
		let res = {};
		res.status = 0;
		res.order = {};
		if(needTmpId) res.tmpId = purchaseOrder;


		return res;


	}


	executeStack(){

	//	console.log("executeStack");

		if(Object.keys(this.Stack).length > 0 && this.active === false){

	//		console.log("stack > 0");

			this.active = true;


			for (let key in this.Stack){

	//			console.log("in for");

				if(this.Stack[key].status == "pending"){
					let collection = new LoaderCollection(this.Stack[key].order.to.collection);
					collection[this.Stack[key].order.to.method](this.Stack[key].order.dispatchResponseTo,this.Stack[key].order.datas);

					this.Stack[key].status = "sending";
				}
			}

		}

		if(this.Stack.length > 0){
			this.executeStack();
		}else{
			this.active = false;
		}
		
	}


	receipt(orderNumber){
		//suppresion de la commande de la stack 


		if(this.Stack[orderNumber].status == "sending"){

			delete this.Stack[orderNumber];

			return true;	

		}

		return false;
		

	}




}

const instance = new DatasSynchronizing();
export { instance as DatasSynchronizing };
