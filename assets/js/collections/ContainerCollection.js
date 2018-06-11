import SvcBackEndComm from '../services/BackEndComm.js';

export default class ContainerCollection {


	constructor(){

		this.apiPrefixe = "/container/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  getList(){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'all');

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


  move(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'dnd',data);

    return result;

  }

}