import Moment from 'moment';
import 'moment/locale/fr';

import LoaderCollection from './LoaderCollection.js';


class DatasSynchronizing {
	

	constructor(){


		this.Stack = [];
		this.active = false;

	}




	add(from,who,datas,needTmpId=false){
	//from : pour le retour
	//methode de la collection
	//data a envoyer

		



		let stackId = Moment().format('x');

		//Ajout a la stack
		let MaCommande = {};
		MaCommande.who = who;
		MaCommande.from = from;
		MaCommande.datas = datas;
		this.Stack[stackId] = {};
		this.Stack[stackId].id = stackId;
		this.Stack[stackId].status = "pending";
		this.Stack[stackId].order = MaCommande;

		//je demarra le traitement de la stack
		this.excuteStack;

		//Préparation de la réponse
		let res = {};
		res.status = 0;
		res.order = {};
		res.order.id = from + stackId;
		if(needTmpId) res.tmpId = stackId;


		return res;


	}


	executeStack(){

		if(this.Stack.length > 0 && this.active === false){

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
