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
		console.log('in store collection');
		console.log(data);
		data.value = (data.value)? data.value : 0;
		data.path = (data.path)? data.path : "";
		data.unit = (data.unit)? data.unit : 0;

		this.webSQL.playQuery('syncData',
			                  `insert into Notes ( timestamp,
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
			                                      )
			                   values (strftime('%Y-%m-%d %H:%M:%f', 'now'),
			                          "LOCAL",
			                          "`+data.NoteId+`",
			                          "`+data.NoteTitle+`",
			                          "`+data.RessourceId+`",
			                          "`+data.RessourceTitle+`",
			                          "`+data.id+`",
			                          "`+data.type+`",
			                          "`+data.text+`",
			                          "`+data.value+`",
			                          "`+data.path+`",
			                          "`+data.unit+`"
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
																	   item_path TEXT DEFAULT "",
																	   item_unit INTEGER DEFAULT 0,
																	   state TEXT DEFAULT "WAITING",
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
																	   item_value INTEGER DEFAULT 0,
																	   item_path  TEXT DEFAULT "",
																	   item_unit  INTEGER DEFAULT 0
																	   );
																	   `;


		
		this.webSQL.playQuery(TblNoteUp.db,TblNoteUp.create);




		let TblNoteDataUp = {};
		TblNoteDataUp.name = "NotesDatas";
		TblNoteDataUp.db = "syncUp";
		TblNoteDataUp.create = `CREATE TABLE IF NOT EXISTS `+TblNoteDataUp.name+` (timestamp,
																	   status,
																	   note_id,
																	   ressource_id,
																	   item_id,
																	   item_type TEXT DEFAULT "PERSISTENT",
																	   item_path  TEXT DEFAULT ""
																	   );
																	   `;


		
		this.webSQL.playQuery(TblNoteDataUp.db,TblNoteDataUp.create);



	}




	synchroToServer(){


	//////PRE TRAITEMENT
		//je regarde dans mon sync data ce qui a plus d'une seconde d'enregistrement et qui a un status LOCAL order by croissant timestamp (pour gérer les plus vieux en priorité)
		let qry = "UPDATE Notes SET state = 'RESERVEDUP' WHERE timestamp < strftime('%Y-%m-%d %H:%M:%f', 'now','-1 seconds') AND state = 'WAITING' ";
		this.webSQL.playQuery('syncData',qry);

		this._syncEntities();

		this._syncData();

	}


	_syncEntities(){


		let qry2 = "SELECT * FROM Notes WHERE state = 'RESERVEDUP' ";
		// je copie dans ma base de remonté syncUp les LOCAL de plus d'une seconde
		this.webSQL.playQuery('syncData',qry2,this,'_pushInSyncUp');

	//////COMPOSITION DE l'ENVOI
		let qry3 = "SELECT * FROM Notes WHERE status = 'BEFOREUP' ";
		this.webSQL.playQuery('syncUp',qry3,this,'_createRequestToServer');
		// j'envoi en auserveru et attedns un retour positif



		//si oui, je regarde dans syncdata si mon timestamp est le même dans ce cas la je flag SYNCHRO
					//sinon je supprime seulement ma ligne dans syncup
		//si non, je resset pour l'envoi suite à échec



	}


	_syncData(){


	//////COMPOSITION DE l'ENVOI
		let qry = "SELECT * FROM NotesDatas WHERE status = 'BEFOREUP' ORDER BY timestamp ASC LIMIT 1";
		this.webSQL.playQuery('syncUp',qry,this,'_createRequestToServerDatas');



	}



	_pushInSyncUp(results){

		let len = results.rows.length, i;
		  for (i = 0; i < len; i++) {
		    
		    this.webSQL.playQuery('syncUp',
			                  `insert into Notes ( timestamp,
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
			                                      )
			                   values ("`+results.rows.item(i).timestamp+`",
			                          "BEFOREUP",
			                          "`+results.rows.item(i).note_id+`",
			                          "`+results.rows.item(i).note_title+`",
			                          "`+results.rows.item(i).ressource_id+`",
			                          "`+results.rows.item(i).ressource_title+`",
			                          "`+results.rows.item(i).item_id+`",
			                          "`+results.rows.item(i).item_type+`",
			                          "`+results.rows.item(i).item_text+`",
			                          "`+results.rows.item(i).item_value+`",
			                          "`+results.rows.item(i).item_path+`",
			                          "`+results.rows.item(i).item_unit+`"
			                          )

			                 `);


		    if(results.rows.item(i).item_type == "image" && results.rows.item(i).item_path.length > 0)


		    	this.webSQL.playQuery('syncUp',
			                  `insert into NotesDatas ( timestamp,
			                                       status,
			                                       note_id,
												   ressource_id,
												   item_id,
												   item_type,
												   item_path
			                                      )
			                   values ("`+results.rows.item(i).timestamp+`",
			                          "BEFOREUP",
			                          "`+results.rows.item(i).note_id+`",
			                          "`+results.rows.item(i).ressource_id+`",
			                          "`+results.rows.item(i).item_id+`",
			                          "PERSISTENT",
			                          "`+results.rows.item(i).item_path+`"
			                          )

			                 `);



		  }

		 if(results.rows.length){

			let qry = "UPDATE Notes SET state = 'PREUP' WHERE state = 'RESERVEDUP' ";
			this.webSQL.playQuery('syncData',qry);

		 }


	}




	_createRequestToServer(results){

		//console.log('IN _createRequestToServer !!!')

		let arrayToSend = [];
		let len = results.rows.length, i;
		  for (i = 0; i < len; i++) {

		 // 	console.log(results.rows.item(i));

		  	arrayToSend.push(results.rows.item(i));



			}

		if(arrayToSend.length){

			this.SvcBackEndComm.ajaxSend('POST',this.serverStorage.apiPrefixe + 'push',this,"_updateAfterRequest",arrayToSend);

			let qry = "UPDATE Notes SET status = 'UPLOADING' WHERE status = 'BEFOREUP' ";
			this.webSQL.playQuery('syncUp',qry);


		}


	}


	_createRequestToServerDatas(results){

		this.DatasToSend = results.rows;
		let name = results.rows.item(i).item_path;
			//on va chercher le fichier dans le storage
			let PersistLocalStore = new LocalStorage();
			PersistLocalStore.get(name,this, "sendDatasToServer");


			

			


		
	}



	sendDatasToServer(datas){


		console.log('in sendDatasToServer');
		console.log(this.DatasToSend);

	//	this.SvcBackEndComm.ajaxSend('POST',this.serverStorage.apiPrefixe + 'pushDatas',this,"_updateAfterRequest",toSend);
/*		let qry = "UPDATE NotesDatas SET status = 'UPLOADING' WHERE status = 'BEFOREUP' ";
			this.webSQL.playQuery('syncUp',qry);*/

	}



	_updateAfterRequest(datas){
/*
		console.log("_updateAfterRequest");
		console.log(datas);*/

		//on regarde si on a du temporaire pour les id
		let NoteId = (datas.data.Note.tmpId) ? datas.data.Note.tmpId : datas.data.Note.id;
		let ResourceId = (datas.data.Resource.tmpId) ? datas.data.Resource.tmpId : datas.data.Resource.id;
		let ItemId = (datas.data.Item.tmpId) ? datas.data.Item.tmpId : datas.data.Item.id;

		//je supprime la ligne de sync up
		let qry = `DELETE FROM Notes 
		           WHERE timestamp = "`+datas.data.timestamp+`"
		           AND  note_id = "`+NoteId+`" 
		           AND  ressource_id = "`+ResourceId+`" 
		           AND  item_id = "`+ItemId+`" 
		           `;
		this.webSQL.playQuery('syncUp',qry);

		//je regarde si en base syncdata je retrouve ma ligne
		let qryTestLine = `UPDATE Notes
                           SET note_id =  "`+datas.data.Note.id+`"   ,
							ressource_id =  "`+datas.data.Resource.id+`"  ,
							item_id =  "`+datas.data.Item.id+`"   ,
							status = "SYNC",
							state  = "CLEAN" 
 
						   WHERE timestamp = "`+datas.data.timestamp+`" 
				           AND  note_id = "`+NoteId+`" 
				           AND  ressource_id = "`+ResourceId+`" 
				           AND  item_id = "`+ItemId+`" 
				           AND STATE = "PREUP"
						  `;

		this.webSQL.playQuery('syncData',qryTestLine);

		//il faut mettre a jour les id

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