import SvcBackEndComm from '../services/BackEndComm.js';

export default class UserCollection {


	constructor(){

	this.apiPrefixe = "/api_v1/user/";
	this.targetObject = "User";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  	Get(){

    	this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'get');

  	}



}