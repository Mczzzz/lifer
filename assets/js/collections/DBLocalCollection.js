export default class DBLocalCollection {
	

	constructor(){

		this.SGBD = [];

		this.init();

	}


	init(){

		//instanciation et propagation des instance de db

        this.SGBD.push(this.getDBup());
        this.SGBD.push(this.getDBdown());
        this.SGBD.push(this.getDBdownCommon());


	}


	getDBup(){

		let DBup         = {};
		DBup.name    = "syncUp";
		DBup.version = "1.0";
		DBup.description = "Buffer de syncho vers le serveur";
		DBup.size = 2 * 1024 * 1024;

		return DBup;

	}


	getDBdown(){

		let DBdown         = {};
		DBdown.name    = "syncDown";
		DBdown.version = "1.0";
		DBdown.description = "Replica Serveur pour Offline";
		DBdown.size = 2 * 1024 * 1024;

		return DBdown;

	}


	getDBdownCommon(){

		let DBdownCommon         = {};
		DBdownCommon.name    = "commonAppData";
		DBdownCommon.version = "1.0";
		DBdownCommon.description = "Données communes pour l'app";
		DBdownCommon.size = 2 * 1024 * 1024;

		return DBdownCommon;

	}




	createBases(Base){

		return openDatabase(Base.name, Base.version, Base.description, Base.size);

	}





}