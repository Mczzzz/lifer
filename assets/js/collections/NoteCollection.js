import SvcBackEndComm from '../services/BackEndComm.js';

export default class NoteCollection {


	constructor(){

		this.apiPrefixe = "/api_v1/notes/";
		this.targetObject = "Note";

    this.SvcBackEndComm = new SvcBackEndComm();


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

	console.log(JSON.stringify(datas.Note));
	delete datas.Resource.card;
	console.log(JSON.stringify(datas.Resource));


    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'push',from,datas);

  }



}