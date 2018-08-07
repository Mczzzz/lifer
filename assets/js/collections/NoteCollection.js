import SvcBackEndComm from '../services/BackEndComm.js';

export default class NoteCollection {


	constructor(){

		this.apiPrefixe = "/api_v1/notes/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  pushResource(){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'push');

    return result;

  }



}