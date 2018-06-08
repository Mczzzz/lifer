import SvcBackEndComm from '../services/BackEndComm.js';

export default class ContainerCollection {


	constructor(){

		this.apiPrefixe = "/container/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  getList(){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'all');

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


  move(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'dnd',data);

    return JSON.parse(result.responseText);

  }

}