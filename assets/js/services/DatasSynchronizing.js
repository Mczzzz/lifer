import Moment from 'moment';
import 'moment/locale/fr';

import LoaderCollection from './LoaderCollection.js';


class DatasSynchronizing {
	

	constructor(){

		this.active = false;

		this.init();
	

	}


	init(){

		this.syncData = openDatabase('syncData', '1.0', 'queue de synchronisation', 2 * 1024 * 1024);
		this.playQuery('CREATE TABLE IF NOT EXISTS Notes (id PRIMARY KEY, status,collection, dispatch_to, note_id,note_title, ressource_id, ressource_title, item_id, item_type, item_text, item_value, item_path,item_unit)');


		this.startService();


	}


	startService(){

		this.service = setInterval(()=> this.fillQueue() , 2000 );
	}


	fillQueue(){

		console.log('fill queue !!!');
		//je lock tout ce qui est ready
		this.playQuery('update Notes SET status = "LOCKED" where status = "READY"');

		//j'envoi
		this.playQuery('select * from Notes where status = "LOCKED"',"sendCommand");

	}


	sendCommand(purchases){
		console.log('in send command');

		for(let cmd of Array.from(purchases.rows)){

			console.log(cmd);
			console.log(JSON.parse(cmd.collection));

			this.add(JSON.parse(cmd.dispatch_to),JSON.parse(cmd.collection),false,cmd.id,false);


		}

	}




	playQuery(query,callback = false){
		this.syncData.transaction((db)=>this.execQuery(db,query,false,callback));
	}

	execQuery(db,query,args = false, callback = false){

	if(!args) args = [];

		db.executeSql(query,args,(tx,results)=>this.webSQLsucess(tx,results,callback),(tx,errors)=>this.webSQLerror(tx,errors));
	}


	webSQLsucess(tx,results,callback = false){

/*		console.log("webSQLsuccess");
		console.log(tx);
		console.log(results);*/
		if(callback){
			this[callback](results);
		}

	}


	webSQLerror(tx,errors){

		console.log("webSQLerror");
		console.log(tx);
		console.log(errors);

	}




	purchaseOrder(){

		let stackId = Moment().format('x') + "-" + Math.floor(Math.random() * Math.floor(100000));

		this.playQuery('insert into Notes (id,status) values ('+stackId+',"INIT")');


		return stackId;

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
