export default class DBLocalCollection {
	

	constructor(){

		this.LocalDB = {};
		this.BDRessources = [];

		this.init();

	}


	init(){

		//instanciation et propagation des instance de db

		//base de synchro d'enregistrement montant
		this.DBup         = {};
		this.DBup.name    = "syncUp";
		this.DBup.version = "1.0";
		this.DBup.description = "Buffer de syncho vers le serveur";
		this.DBup.size = 2 * 1024 * 1024;

		this.BDRessources.push(this.DBup);

		//base de synchro serveur descendant
		this.DBdown         = {};
		this.DBdown.name    = "syncDown";
		this.DBdown.version = "1.0";
		this.DBdown.description = "Replica Serveur pour Offline";
		this.DBdown.size = 2 * 1024 * 1024;

		this.BDRessources.push(this.DBdown);


		//base de synchro serveur descendant
		this.DBdownCommon         = {};
		this.DBdownCommon.name    = "commonAppData";
		this.DBdownCommon.version = "1.0";
		this.DBdownCommon.description = "Données communes pour l'app";
		this.DBdownCommon.size = 2 * 1024 * 1024;

		this.BDRessources.push(this.DBdownCommon);




		this.createBases();


	}


	createBases(){

		for (let Base of this.BDRessources){

			this.LocalDB[Base.name] = openDatabase(Base.name, Base.version, Base.description, Base.size);

		}

	}




}