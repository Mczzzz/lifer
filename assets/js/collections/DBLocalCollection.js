export default class DBLocalCollection {
	

	constructor(){

	}



	getcacheData(){

		let DBcacheData   = {};
		DBcacheData.name        = "cacheData";
		DBcacheData.version     = "1.0";
		DBcacheData.description = "synchro locale";
		DBcacheData.size = 2 * 1024 * 1024;

		return DBcacheData;

	}





	getsyncData(){

		let DBSyncData   = {};
		DBSyncData.name        = "syncData";
		DBSyncData.version     = "1.0";
		DBSyncData.description = "synchro locale";
		DBSyncData.size = 2 * 1024 * 1024;

		return DBSyncData;

	}

	getsyncUp(){

		let DBSyncData   = {};
		DBSyncData.name        = "syncUp";
		DBSyncData.version     = "1.0";
		DBSyncData.description = "Buffer de syncho vers le serveur localStorage";
		DBSyncData.size = 2 * 1024 * 1024;

		return DBSyncData;

	}



	getDBConnection(db){


		let Base = this["get"+db]();

		return openDatabase(Base.name, Base.version, Base.description, Base.size);

	}


}