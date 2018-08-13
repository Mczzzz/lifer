import SvcBackEndComm from '../services/BackEndComm.js';

export default class ObjectInfosCollection {


	constructor(){

		this.apiPrefixe = "/object/infos/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  getList(objectId,leafId){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'getListe/'+ objectId + '/' + leafId);

    return result;

  }


  get(objectId,leafId,NoteId){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'get/'+ objectId + '/' + leafId + '/' + NoteId);

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