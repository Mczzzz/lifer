class webSQL{
	

	constructor(db){


	}



	playQuery(base,query,callback = false){

		base.transaction((db)=>this.execQuery(db,query,false,callback));

	}


	execQuery(db,query,args = false, callback = false){

	if(!args) args = [];

		db.executeSql(query,args,(tx,results)=>this.webSQLsucess(tx,results,callback),(tx,errors)=>this.webSQLerror(tx,errors));
	}


	webSQLsucess(tx,results,callback = false){

		console.log("webSQLsuccess");
		console.log(tx);
		console.log(results);
		if(callback){
			this[callback](results);
		}

	}


	webSQLerror(tx,errors){

		console.log("webSQLerror");
		console.log(tx);
		console.log(errors);

	}





}