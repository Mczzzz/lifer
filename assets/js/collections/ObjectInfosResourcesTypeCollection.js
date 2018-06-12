import SvcBackEndComm from '../services/BackEndComm.js';

export default class ObjectInfosResourcesTypeCollection {


	constructor(){

		this.apiPrefixe = "/object/infos/resources/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  getList(){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'types');

    return result;

  }



}