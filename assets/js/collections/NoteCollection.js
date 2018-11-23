import SvcBackEndComm from '../services/BackendComm.js';

export default class NoteCollection {


	constructor(){

		this.apiPrefixe = "/api_v1/notes/";
		this.targetObject = "Note";

    	this.SvcBackEndComm = new SvcBackEndComm();


	}


	initwebSQLDB(){

		return 'CREATE TABLE IF NOT EXISTS Notes (id PRIMARY KEY, status,collection, dispatch_to, note_id,note_title, ressource_id, ressource_title, item_id, item_type, item_text, item_value, item_path,item_unit)';
	
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
	let dataCallback = false;
	let dataSend = datas;
	//delete dataSend.Resource.card;


    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'push',from,dataCallback,dataSend);

  }



}