import DBLocalCollection from '../collections/DBLocalCollection.js';

export default class webSQL{
	

	constructor(){


		this.DBLocalCollection = new DBLocalCollection();

	}



	playQuery(base,query,callbackObj = false, callbackMethod = false){

		let Bdd = this.DBLocalCollection.getDBConnection(base);
		Bdd.transaction((db)=>this.execQuery(db,query,false,callbackObj,callbackMethod));

	}


	execQuery(db,query,args = false, callbackObj = false, callbackMethod = false){

	if(!args) args = [];
		console.log(query);
		db.executeSql(query,args,(tx,results)=>this.webSQLsucess(tx,results,callbackObj,callbackMethod),(tx,errors)=>this.webSQLerror(tx,errors));
	}


	webSQLsucess(tx,results,callbackObj = false, callbackMethod = false){

		console.log("webSQLsuccess");
		console.log(tx);
		console.log(results);
		if(callbackObj && callbackMethod){
			callbackObj[callbackMethod](results);
		}

	}


	webSQLerror(tx,errors){

		console.log("webSQLerror");
		console.log(tx);
		console.log(errors);

	}





}