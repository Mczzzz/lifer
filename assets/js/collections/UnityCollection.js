import SvcBackEndComm from '../services/BackEndComm.js';

export default class UnityCollection {


	constructor(){

		this.apiPrefixe = "/api_v1/unity/";
		this.targetObject = "Note";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  Get(){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'get-all-types');

  }



}