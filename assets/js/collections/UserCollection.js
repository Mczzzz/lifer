import SvcBackEndComm from '../services/BackEndComm.js';

export default class UserCollection {


	constructor(){

	this.apiPrefixe = "/api_v1/user/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  	Get(){

  		console.log("on passe bien dans Get");
	    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'get');

  	}



}