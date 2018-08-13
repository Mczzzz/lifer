import SvcBackEndComm from '../services/BackEndComm.js';

export default class UserCollection {


	constructor(){

	this.apiPrefixe = "/api_v1/user/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  	Get(id){

	    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'get');

	    return result;

  	}



}