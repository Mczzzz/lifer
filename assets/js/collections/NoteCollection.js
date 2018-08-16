import SvcBackEndComm from '../services/BackEndComm.js';

export default class NoteCollection {


	constructor(){

		this.apiPrefixe = "/api_v1/notes/";
		this.targetObject = "Note";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  Push(from,datas){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'push',from,datas);

  }



}