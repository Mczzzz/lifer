import Moment from 'moment';
import 'moment/locale/fr';

import LoaderCollection from './LoaderCollection.js';


class DatasSynchronizing {
	

	constructor(){


		this.Stack = [];
		this.active = false;

	}




	purchaseOrder(){

		let stackId = Moment().format('x') + "-" + Math.floor(Math.random() * Math.floor(100000));

		//on regarde si le numéro existe déja mais ya peux de chance
		let index = this.Stack.indexOf(stackId);

		if(index == -1){

			this.Stack[stackId] = {};
			this.Stack[stackId].id = stackId;
			this.Stack[stackId].status = "waiting";

			console.log("this.Stack");
			console.log(this.Stack);

			return this.Stack[stackId];

		}else{
			console.log('purshaseOrder Allready exist');
		}


	}



	add(from,to,datas,purchaseOrder,needTmpId=false){
	//from : pour le retour
	//methode de la collection
	//data a envoyer
			console.log("this.Stack in add");
			console.log(this.Stack);
			console.log(purchaseOrder);
			console.log(this.Stack[purchaseOrder.id]);
	
		//Ajout a la stack
		let MaCommande = {};
		MaCommande.to = to;
		MaCommande.from = from;
		MaCommande.datas = datas;
		this.Stack[purchaseOrder.id].status = "pending";
		this.Stack[purchaseOrder.id].order = MaCommande;

		console.log("before execute Task");
		//je demarra le traitement de la stack
		this.excuteStack();

		//Préparation de la réponse
		let res = {};
		res.status = 0;
		res.order = {};
		res.order.id = from + purchaseOrder;
		if(needTmpId) res.tmpId = purchaseOrder;


		return res;


	}


	executeStack(){

		console.log("executeStack");

		if(this.Stack.length > 0 && this.active === false){

			console.log("stack > 0");

			this.active = true;


			for (let order of this.Stack){

				let collection = new LoaderCollection(order.who.collection);
				collection[order.who.method](order.datas,order.from);

				this.Stack[order.id].status = "sending";

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
		let index = this.Stack.indexOf(orderNumber);

		if(index == -1){
			console.log("Commande non trouvée dans receipt datasynchronising");
			return false
		}else{

			this.Stack.splice(index,1);
			return true;	
		}

	}




}

const instance = new DatasSynchronizing();
export { instance as DatasSynchronizing };
