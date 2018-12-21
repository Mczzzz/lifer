import SvcBackEndComm from '../services/BackendComm.js';

import webSQL from '../services/webSQL.js';

export default class NoteCollection {


	constructor(){

		this.serverStorage = {};
		this.serverStorage.apiPrefixe = "/api_v1/notes/";

		this.webSQL = new webSQL();

    	this.SvcBackEndComm = new SvcBackEndComm();


	}


	init(){

		this._initLocalStorage();

	}


	store(data){

		console.log(data);

		this.webSQL.playQuery('syncData',
			                  `insert into Notes ( timestamp,
			                                       status,
			                                       note_id,
												   note_title,
												   ressource_id,
												   ressource_title,
												   item_id,
												   item_type,
												   item_text
			                                      )
			                   values (STRFTIME('%Y%m%d%H%M%f', 'NOW'),
			                          "LOCAL",
			                          "`+data.NoteId+`",
			                          "`+data.NoteTitle+`",
			                          "`+data.RessourceId+`",
			                          "`+data.RessourceTitle+`",
			                          "`+data.id+`",
			                          "`+data.type+`",
			                          "`+data.value+`"
			                          )
			                   ON CONFLICT(note_id,
			                   			   ressource_id,
			                   			   item_id,
			                   			   item_type
			                   			   )
			                   DO UPDATE SET note_title = "`+data.NoteTitle+`",
			                                 ressource_title = "`+data.RessourceTitle+`",
			                                 item_text = "`+data.value+`";
			                 `);

	}




	_initLocalStorage(){

	//localStorage
		//file d'attente de sauvegarde
		let TblNote = {};
		TblNote.name = "Notes";
		TblNote.db = "syncData";
		TblNote.create = `CREATE TABLE IF NOT EXISTS `+TblNote.name+` (timestamp,
																	   status,
																	   note_id,
																	   note_title,
																	   ressource_id,
																	   ressource_title,
																	   item_id,
																	   item_type,
																	   item_text,
																	   item_value,
																	   item_path,
																	   item_unit,
																	   collection,
																	   dispatch_to
																	   );
																	   `;
		TblNote.index = `CREATE INDEX idx_global_unique 
						 ON `+TblNote.name+` (note_id,
			                   			   	  ressource_id,
			                   			      item_id,
			                   			      item_type);`

		
		this.webSQL.playQuery(TblNote.db,TblNote.create);
		this.webSQL.playQuery(TblNote.db,TblNote.index);



	}





//app component

	getLocalStorage(guid){

	//	let query = "SELECT * FROM " 

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