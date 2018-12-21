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
			                   values (datetime('now'),
			                          "LOCAL",
			                          "`+data.NoteId+`",
			                          "`+data.NoteTitle+`",
			                          "`+data.RessourceId+`",
			                          "`+data.RessourceTitle+`",
			                          "`+data.id+`",
			                          "`+data.type+`",
			                          "`+data.value+`"
			                          )

			                 `);

	}



//SELECT timestamp,status, note_id, ressource_title,item_id,item_type,item_text,item_value,item_path,item_unit,note_title FROM Notes
//SELECT timestamp,status, note_id, note_title,ressource_id,ressource_title,item_id,item_type,item_text,item_value FROM Notes

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
																	   item_value INTEGER DEFAULT 0,
																	   item_path TEXT INTEGER DEFAULT "",
																	   item_unit INTEGER DEFAULT 0,
						    UNIQUE ( note_id,
                   			    	 ressource_id,
                   			         item_id,
                   			         item_type
                   			       )
                   			ON CONFLICT REPLACE

																	   );
																	   `;


		
		this.webSQL.playQuery(TblNote.db,TblNote.create);


		let TblNoteUp = {};
		TblNoteUp.name = "Notes";
		TblNoteUp.db = "syncUp";
		TblNoteUp.create = `CREATE TABLE IF NOT EXISTS `+TblNoteUp.name+` (timestamp,
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
																	   item_unit
																	   );
																	   `;


		
		this.webSQL.playQuery(TblNoteUp.db,TblNoteUp.create);




	}




	synchroToServer(){



		//je regarde dans mon sync data ce qui a plus d'une seconde d'enregistrement et qui a un status LOCAL order by croissant timestamp (pour gérer les plus vieux en priorité)
		let qry = "SELECT * FROM syncData WHERE timestamp < (STRFTIME('%Y%m%d%H%M%f', 'NOW') - 1)"


		// je copie dans ma base de remonté syncUp les LOCAL de plus d'une seconde
		// j'envoi en auserveru et attedns un retour positif
		//si oui, je regarde dans syncdata si mon timestamp est le même dans ce cas la je flag SYNCHRO
					//sinon je supprime seulement ma ligne dans syncup
		//si non, je resset pour l'envoi suite à échec






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


/*	queuePrepareSend(){

		//je lock tout ce qui est ready
		this.playQuery('update Notes SET status = "LOCKED" where status = "READY"');

		//j'envoi
		this.playQuery('select * from Notes where status = "LOCKED"',"sendCommand");

	}*/








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