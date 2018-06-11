import SvcBackEndComm from '../services/BackEndComm.js';

export default class ObjectTreeCollection {


	constructor(){

		this.apiPrefixe = "/object/tree/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  getList(id){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'get/'+ id);

    return result;

  }



  rename(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'rename',data);

    return result;

  }



  delete(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'delete',data);

    return result;

  }


  create(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'add',data);

    return result;

  }




}