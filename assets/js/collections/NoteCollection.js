import SvcBackEndComm from '../services/BackendComm.js';

export default class NoteCollection {


	constructor(){

		this.serverStorage = {};
		this.serverStorage.apiPrefixe = "/api_v1/notes/";

		this.localStorage = {};
		this.localStorage.SQLTable = "Notes";

		//pourquoi pas ne pas setter l'objet mais en cas de multi ca va merder
		//this.targetObject = "Note";

		this.tables = [];

    	this.SvcBackEndComm = new SvcBackEndComm();


	}


	init(){

		this._initLocalStorage();

		//localStorage
		//file d'attente de sauvegarde
		let TblNote = {};
		TblNote.name = "Notes";
		TblNote.db = "syncUp";
		tblNote.create = "CREATE TABLE IF NOT EXISTS "+TblNote.name+" (id PRIMARY KEY, status,collection, dispatch_to, note_id,note_title, ressource_id, ressource_title, item_id, item_type, item_text, item_value, item_path,item_unit)";
		
		this.tables.push(TblNote);





	}


	store(){
		
	}




	_initLocalStorage(){





		
	}





//app component

	getLocalStorage(guid){


		let query = "SELECT * FROM " 




	}



		initwebSQLTables(){

		for (let table of this.table){

			return table.create;


		}

	
	}


	queuePrepareSend(){

		//je lock tout ce qui est ready
		this.playQuery('update Notes SET status = "LOCKED" where status = "READY"');

		//j'envoi
		this.playQuery('select * from Notes where status = "LOCKED"',"sendCommand");

	}








//server Component


	getServerStorage(){


		
	}




	  Push(from,datas){

/*	datas =  {Note: {…}, Resource: {…}}
			Note:
				Title
				Ts
				id
			Resource:
				action
				card
				id
				type
				update
				resource:
					text*/

	// Je supprime de mon object data ce qui ne sert à rien et le supprime.
	let dataCallback = datas;
	let dataSend = datas;
	//delete dataSend.Resource.card;


    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'push',from,dataCallback,dataSend);

  }
















}