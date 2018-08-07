import SvcBackEndComm from '../services/BackEndComm.js';

export default class NoteCollection {


	constructor(){

		this.apiPrefixe = "/api_v1/notes/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  Push(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'push',data);

    return result;

  }



}