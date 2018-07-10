import SvcBackEndComm from '../services/BackEndComm.js';

export default class ObjectInfosResourcesCollection {


	constructor(){

		this.apiPrefixe = "/object/infos/resources/";

    	this.SvcBackEndComm = new SvcBackEndComm();


	}


  getType(){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'types');

    return result;

  }


  getListe(id){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'getListe/'+ id);

    return result;

  }


  createUpdate(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'createUpdate',data);

    return result;

  }


}