export default class DBLocalCollection {
	

	constructor(){

	}



	getSyncData(){

		let DBSyncData   = {};
		DBup.name        = "syncData";
		DBup.version     = "1.0";
		DBup.description = "Buffer de syncho vers le serveur localStorage";
		DBup.size = 2 * 1024 * 1024;

		return DBSyncData;

	}



	getDBConnection(db){

		let Base = this["get"+db];

		return openDatabase(Base.name, Base.version, Base.description, Base.size);

	}


}