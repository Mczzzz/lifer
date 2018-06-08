import SvcBackEndComm from '../services/BackEndComm.js';

export default class ContainerCollection {


	constructor(){

		this.apiPrefixe = "/container/";

    this.SvcBackEndComm = new SvcBackEndComm();


	}


  getAll(){

    let result = this.SvcBackEndComm.ajaxSend('GET',this.apiPrefixe + 'all');

    return JSON.parse(result.responseText);

  }



  rename(data){

    let result = this.SvcBackEndComm.ajaxSend('POST',this.apiPrefixe + 'rename',data);

    return JSON.parse(result.responseText);

  }



	save(){


		let formData = new FormData();

        //formData.append('jpg'  ,this.image);
        formData.append('text'  ,$('#textarea').val());

        formData.append('id'  ,$('#textarea').attr('node_id'));
        let AjaxSender = $.ajax({
              type: 'POST',
              url: this.api,
              data: formData,
              async: true,
              cache: false,
              contentType: false,
              processData: false
            }).done((e) => this.getAll());





	}





	getOneNode(id){

		let AjaxGetter = $.ajax({
              type: 'GET',
              url: this.api + "/" + id,
              async: true,
              cache: false,
              contentType: false,
              processData: false
         })
			.done(function( data ) {
//				console.log('AJAX GET DONE');
				let ret = JSON.parse(data);
				$('#textarea').val(ret.data.text);
				$('#textarea').attr('node_id',ret.data.id);
    		});



	}


}