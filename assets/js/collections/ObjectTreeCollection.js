import SvcBackEndComm from '../services/BackEndComm.js';

export default class ObjectTreeCollection {


	constructor(){

		this.apiPrefixe = "/object/tree/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  getList(id){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'get/'+ id);

    return JSON.parse(result.responseText);

  }



  rename(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'rename',data);

    return JSON.parse(result.responseText);

  }



  delete(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'delete',data);

    return JSON.parse(result.responseText);

  }


  create(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'add',data);

    return JSON.parse(result.responseText);

  }




}