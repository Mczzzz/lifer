import SvcBackEndComm from '../services/BackendComm.js';

import webSQL from '../services/webSQL.js';
import LocalStorage from '../services/LocalStorage.js';

export default class NotesCollection {


	constructor(){

		this.serverStorage = {};
		this.serverStorage.apiPrefixe = "/api_v1/notes/";

		this.webSQL = new webSQL();

    	this.SvcBackEndComm = new SvcBackEndComm();


	}


	init(){

		this._initLocalStorage();

	}


	getAllNotes(callBackObj,callBackMethod){

		let qry = "SELECT * FROM Notes GROUP BY note_id";
		// je copie dans ma base de remonté syncUp les LOCAL de plus d'une seconde
		this.webSQL.playQuery('cacheData',qry,callBackObj,callBackMethod);


	}

	getRessources(noteId,callBackObj,callBackMethod){

		let qry = "SELECT * FROM Ressources WHERE note_id = '"+noteId+"' ORDER BY timestamp DESC";
		// je copie dans ma base de remonté syncUp les LOCAL de plus d'une seconde
		this.webSQL.playQuery('cacheData',qry,callBackObj,callBackMethod);

	}

	getRessource(ressourceId,callBackObj,callBackMethod){

		let qry = "SELECT * FROM Ressources WHERE ressource_id = '"+ressourceId+"'";
		// je copie dans ma base de remonté syncUp les LOCAL de plus d'une seconde
		this.webSQL.playQuery('cacheData',qry,callBackObj,callBackMethod);

	}


	getRessourcesItems(ressourceId,callBackObj,callBackMethod){

		let qry = "SELECT * FROM Items WHERE ressource_id = '"+ressourceId+"'";
		// je copie dans ma base de remonté syncUp les LOCAL de plus d'une seconde
		this.webSQL.playQuery('cacheData',qry,callBackObj,callBackMethod);

	}


	store(data){
		console.log('in store collection');
		console.log(data);



		this.webSQL.playQuery('cacheData',
			                  `insert into Notes ( timestamp,
			                                       status,
			                                       note_id,
												   note_title,
												   note_tmpId
			                                      )
			                   values (strftime('%Y-%m-%d %H:%M:%f', 'now'),
			                          "LOCAL",
			                          "`+data.NoteId+`",
			                          "`+data.NoteTitle+`",
			                          "`+data.NoteId+`"
			                          )

			                 `);

		if(data.RessourceId){

			console.log("in if data ressourcesId");

					this.webSQL.playQuery('cacheData',
			                  `insert into Ressources ( timestamp,
			                                       status,
			                                       note_id,
												   ressource_id,
												   ressource_tmpId,
												   ressource_title
			                                      )
			                   values (strftime('%Y-%m-%d %H:%M:%f', 'now'),
			                          "LOCAL",
			                          "`+data.NoteId+`",
			                          "`+data.RessourceId+`",
			                          "`+data.RessourceId+`",
			                          "`+data.RessourceTitle+`"
			                          )

			                 `);


		}




		if(data.id){

			console.log("in if data Id");

			data.value = (data.value)? data.value : 0;
			data.path = (data.path)? data.path : "";
			data.unit = (data.unit)? data.unit : 0;


			this.webSQL.playQuery('cacheData',
				                  `insert into Items ( timestamp,
													   status,
													   ressource_id,
													   item_id,
													   item_type,
													   item_text,
													   item_value,
													   item_path,
													   item_unit
				                                      )
				                   values (strftime('%Y-%m-%d %H:%M:%f', 'now'),
				                          "LOCAL",
				                          "`+data.RessourceId+`",
				                          "`+data.id+`",
				                          "`+data.type+`",
				                          "`+data.text+`",
				                          "`+data.value+`",
				                          "`+data.path+`",
				                          "`+data.unit+`"
				                          )

				                 `);



			}


		



	}



//SELECT timestamp,status, note_id, ressource_title,item_id,item_type,item_text,item_value,item_path,item_unit,note_title FROM Notes
//SELECT timestamp,status, note_id, note_title,ressource_id,ressource_title,item_id,item_type,item_text,item_value FROM Notes

	_initLocalStorage(){

	//localStorage

//BASE DE CACHE USUEL
		let TblNote = {};
		TblNote.name = "Notes";
		TblNote.db = "cacheData";
		TblNote.create = `CREATE TABLE IF NOT EXISTS `+TblNote.name+` (timestamp,
																	   status,
																	   note_id,
																	   note_tmpId,
																	   note_title,																   
						    										   UNIQUE (note_id) ON CONFLICT REPLACE
																	   );
																	   `;


		this.webSQL.playQuery(TblNote.db,TblNote.create);




		let TblRessource = {};
		TblRessource.name = "Ressources";
		TblRessource.db = "cacheData";
		TblRessource.create = `CREATE TABLE IF NOT EXISTS `+TblRessource.name+` (timestamp,
																	   status,
																	   note_id,
																	   ressource_id,
																	   ressource_tmpId,
																	   ressource_title,																   
						    										   UNIQUE (ressource_id) ON CONFLICT REPLACE
																	   );
																	   `;


		this.webSQL.playQuery(TblRessource.db,TblRessource.create);



		let TblItems= {};
		TblItems.name = "Items";
		TblItems.db = "cacheData";
		TblItems.create = `CREATE TABLE IF NOT EXISTS `+TblItems.name+` (timestamp,
																	   status,
																	   ressource_id,
																	   item_id,
																	   item_type,
																	   item_text,
																	   item_value INTEGER DEFAULT 0,
																	   item_path TEXT DEFAULT "",
																	   item_unit INTEGER DEFAULT 0,
																	   state TEXT DEFAULT "WAITING",
						    UNIQUE ( ressource_id,
                   			         item_id,
                   			         item_type
                   			       )
                   			ON CONFLICT REPLACE

																	   );
																	   `;

		this.webSQL.playQuery(TblItems.db,TblItems.create);










//EN ATTENTE DE REMONTE AU SERVEUR


	let TblItemUp = {};
		TblItemUp.name = "Items";
		TblItemUp.db = "syncUP";
		TblItemUp.create = `CREATE TABLE IF NOT EXISTS `+TblItemUp.name+` (timestamp,
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


		
		this.webSQL.playQuery(TblItemUp.db,TblItemUp.create);




		let TblItemDataUp = {};
		TblItemDataUp.name = "ItemssDatas";
		TblItemDataUp.db = "syncUP";
		TblItemDataUp.create = `CREATE TABLE IF NOT EXISTS `+TblItemDataUp.name+` (timestamp,
																	   status,
																	   note_id,
																	   ressource_id,
																	   item_id,
																	   item_type TEXT DEFAULT "PERSISTENT",
																	   item_path  TEXT DEFAULT ""
																	   );
																	   `;


		
		this.webSQL.playQuery(TblItemDataUp.db,TblItemDataUp.create);





	}




	synchroToServer(){


	//////PRE TRAITEMENT
		//je regarde dans mon sync data ce qui a plus d'une seconde d'enregistrement et qui a un status LOCAL order by croissant timestamp (pour gérer les plus vieux en priorité)
		let qry = "UPDATE Notes SET state = 'RESERVEDUP' WHERE timestamp < strftime('%Y-%m-%d %H:%M:%f', 'now','-1 seconds') AND state = 'WAITING' ";
		this.webSQL.playQuery('cacheData',qry);

		this._syncEntities();

		this._syncData();
		

	}


	_syncEntities(){


		let qry2 = "SELECT * FROM Notes WHERE state = 'RESERVEDUP' ";
		// je copie dans ma base de remonté syncUp les LOCAL de plus d'une seconde
		this.webSQL.playQuery('cacheData',qry2,this,'_pushInSyncUp');

	//////COMPOSITION DE l'ENVOI
		let qry3 = "SELECT * FROM Items WHERE status = 'BEFOREUP' ";
		this.webSQL.playQuery('syncUp',qry3,this,'_createRequestToServer');
		// j'envoi en auserveru et attedns un retour positif

		//si oui, je regarde dans syncdata si mon timestamp est le même dans ce cas la je flag SYNCHRO
					//sinon je supprime seulement ma ligne dans syncup
		//si non, je resset pour l'envoi suite à échec



	}


	_syncData(){


		//onverifie qu'il n'y a rien en cours d'upload
		let qry = "SELECT * FROM ItemsDatas WHERE status = 'UPLOADING' LIMIT 1";
		this.webSQL.playQuery('syncUp',qry,this,'_canExecuteNewDataSynchro');


	//////COMPOSITION DE l'ENVOI
		/*let qry = "SELECT * FROM NotesDatas WHERE status = 'BEFOREUP' ORDER BY timestamp ASC LIMIT 1";
		this.webSQL.playQuery('syncUp',qry,this,'_createRequestToServerDatas');
*/


	}


	_canExecuteNewDataSynchro(results){

		if(results.rows.length == 0){

			let qry = "SELECT * FROM ItemssDatas WHERE status = 'BEFOREUP' ORDER BY timestamp ASC LIMIT 1";
			this.webSQL.playQuery('syncUp',qry,this,'_createRequestToServerDatas');


		}else{

			console.log("Upload déja en cours on attends");

		}


	}




	_pushInSyncUp(results){

		let len = results.rows.length, i;
		  for (i = 0; i < len; i++) {
		    
		    this.webSQL.playQuery('syncUp',
			                  `insert into Items ( timestamp,
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


		  }

		 if(results.rows.length){

			let qry = "UPDATE Items SET state = 'PREUP' WHERE state = 'RESERVEDUP' ";
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

			let qry = "UPDATE Items SET status = 'UPLOADING' WHERE status = 'BEFOREUP' ";
			this.webSQL.playQuery('syncUp',qry);


		}


	}


	_createRequestToServerDatas(results){

		if(results.rows.length == 0) return true;

		this.DatasToSend = results.rows.item(0);
		let name = this.DatasToSend.item_path;
			//on va chercher le fichier dans le storage
			let PersistLocalStore = new LocalStorage();
			PersistLocalStore.get(name,this, "sendDatasToServer");


			

			


		
	}



	sendDatasToServer(datas){

/*
		console.log('in sendDatasToServer');
		console.log(datas);
		console.log(this.DatasToSend);*/
		this.DatasToSend.datas = datas;
//TODO : A ne pas mettre en dur		
		this.DatasToSend.item_type = "image";
		this.SvcBackEndComm.ajaxSend('POST',this.serverStorage.apiPrefixe + 'pushDatas',this,"_updateAfterRequestData",this.DatasToSend);
		let qry = `UPDATE ItemsDatas
		           SET status = 'UPLOADING'
		           WHERE status = 'BEFOREUP'
		           AND timestamp = '`+this.DatasToSend.timestamp+`'
		           AND item_path = '`+this.DatasToSend.item_path+`'`;
		this.webSQL.playQuery('syncUp',qry);

	}



	_updateAfterRequestData(datas){

			
					//je supprime la ligne de sync up
			let qry = `DELETE FROM Items 
			           WHERE timestamp = "`+datas.data.timestamp+`"
			           AND  note_id = "`+datas.data.note_id+`" 
			           AND  ressource_id = "`+datas.data.ressource_id+`" 
			           AND  item_id = "`+datas.data.item_id+`" 
			           `;
			this.webSQL.playQuery('syncUp',qry);


					//je supprime la ligne de sync up
			let qry2 = `DELETE FROM ItemsDatas 
			           WHERE timestamp = "`+datas.data.timestamp+`"
			           AND  item_id = "`+datas.data.item_id+`" 
			           AND  item_path = "`+datas.data.item_path+`"
			           AND  status = "UPLOADING"   
			           `;
			this.webSQL.playQuery('syncUp',qry2);


//A REVOIR CAR EN 3 TABLES

			//je regarde si en base syncdata je retrouve ma ligne
			let qryTestLine = `UPDATE Notes

	                          SET status = "SYNC",
								state  = "CLEAN" 
	 
							   WHERE timestamp = "`+datas.data.timestamp+`" 
					           AND  note_id = "`+datas.data.note_id+`" 
					           AND  ressource_id = "`+datas.data.ressource_id+`" 
					           AND  item_id = "`+datas.data.item_id+`" 
					           AND STATE = "PARTIAL"
							  `;

			this.webSQL.playQuery('cacheData',qryTestLine);


/////////////////////////////////
			
			//j'enregistre dans le temporaire
			//data:image/jpeg;base64,
			//destroy persistent
			let TemporaryLocalStore = new LocalStorage('TEMPORARY');
			TemporaryLocalStore.push(datas.data.item_path,"data:image/jpeg;base64,"+datas.data.picture);
	

			let PersistLocalStore = new LocalStorage();
			PersistLocalStore.remove(datas.data.item_path);


		}
	


	_updateAfterRequest(datas){


//todo: jE PENSE QU4IL MANQUE UN foR 
/*
		console.log("_updateAfterRequest");
		console.log(datas);*/
					//on regarde si on a du temporaire pour les id

		let NoteId = "";
		let ResourceId = "";
		let ItemId = "";

		let len = datas.data.length, i;
		  for (i = 0; i < len; i++) {



		  	NoteId = (datas.data[i].note_tmpId) ? datas.data[i].note_tmpId : datas.data[i].note_id;
			ResourceId = (datas.data[i].ressource_tmpId) ? datas.data[i].ressource_tmpId : datas.data[i].ressource_id;
			ItemId = (datas.data[i].item_tmpId) ? datas.data[i].item_tmpId : datas.data[i].item_id;




		if(datas.data[i].type == 'text'){



					//je supprime la ligne de sync up

			this.webSQL.playQuery('syncUp',`DELETE FROM Notes 
								           WHERE timestamp = "`+datas.data[i].timestamp+`"
								           AND  note_id = "`+NoteId+`" 
								           AND  ressource_id = "`+ResourceId+`" 
								           AND  item_id = "`+ItemId+`" 
								           `);

			//je regarde si en base syncdata je retrouve ma ligne
			this.webSQL.playQuery('syncData',`UPDATE Notes
	                           SET note_id =  "`+datas.data[i].note_id+`"   ,
								ressource_id =  "`+datas.data[i].ressource_id+`"  ,
								item_id =  "`+datas.data[i].item_id+`"   ,
								status = "SYNC",
								state  = "CLEAN" 
	 
							   WHERE timestamp = "`+datas.data[i].timestamp+`" 
					           AND  note_id = "`+NoteId+`" 
					           AND  ressource_id = "`+ResourceId+`" 
					           AND  item_id = "`+ItemId+`" 
					           AND STATE = "PREUP"
							  `);

			//il faut mettre a jour les id

		}else if(datas.data[i].type == 'image'){


				this.webSQL.playQuery('syncUp',`UPDATE Notes 
												SET note_id =  "`+datas.data[i].note_id+`"   ,
												ressource_id =  "`+datas.data[i].ressource_id+`"  ,
												item_id =  "`+datas.data[i].item_id+`"   ,
												status = "WAITUPDATA"
										           WHERE timestamp = "`+datas.data[i].timestamp+`"
										           AND  note_id = "`+NoteId+`" 
										           AND  ressource_id = "`+ResourceId+`" 
										           AND  item_id = "`+ItemId+`" 
										           `);


		    	this.webSQL.playQuery('syncUp',
			                  `insert into NotesDatas ( timestamp,
			                                       status,
			                                       note_id,
												   ressource_id,
												   item_id,
												   item_type,
												   item_path
			                                      )
			                   values ("`+datas.data[i].timestamp+`",
			                          "BEFOREUP",
			                          "`+datas.data[i].note_id+`",
			                          "`+datas.data[i].ressource_id+`",
			                          "`+datas.data[i].item_id+`",
			                          "PERSISTENT",
			                          "`+datas.data[i].item_path+`"
			                          )

			                 `);


				this.webSQL.playQuery('syncData',`UPDATE Notes
		                           SET note_id =  "`+datas.data[i].note_id+`"   ,
									ressource_id =  "`+datas.data[i].ressource_id+`"  ,
									item_id =  "`+datas.data[i].item_id+`"   ,
									status = "WAITUPDATA",
									state  = "PARTIAL" 
		 
								   WHERE timestamp = "`+datas.data[i].timestamp+`" 
						           AND  note_id = "`+NoteId+`" 
						           AND  ressource_id = "`+ResourceId+`" 
						           AND  item_id = "`+ItemId+`" 
						           AND STATE = "PREUP"
								  `);


			
	


			}


		NoteId = "";
		ResourceId = "";
		ItemId = "";



		}



	}





//app component

	get(guid,callBackObj,callBackMethod){

		let qry = "SELECT * FROM Notes WHERE note_id = '"+guid+"'";
		this.webSQL.playQuery('cacheData',qry,callBackObj,callBackMethod);

	}






	
	


/*	queuePrepareSend(){

		//je lock tout ce qui est ready
		this.playQuery('update Notes SET status = "LOCKED" where status = "READY"');

		//j'envoi
		this.playQuery('select * from Notes where status = "LOCKED"',"sendCommand");

	}*/









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