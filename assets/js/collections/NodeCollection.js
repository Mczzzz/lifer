export default class NodeCollection {


	constructor(){

		this.api = "/api/node";


	}


	setImage(data){

		this.image = data;

	}


	setText(){

		//this.text =

	}


	save(){


		let formData = new FormData();

        //formData.append('jpg'  ,this.image);
        formData.append('text'  ,$('#textarea').val());

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


	getAll(){

		let AjaxGetter = $.ajax({
              type: 'GET',
              url: this.api,
              async: true,
              cache: false,
              contentType: false,
              processData: false
         })
			.done(function( data ) {
				console.log('AJAX GET DONE');
 				let evUpdateNodeList = new CustomEvent('updateNodeList', {'detail' : data});
                window.dispatchEvent(evUpdateNodeList);
    		});




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
				console.log('AJAX GET DONE');
				let ret = JSON.parse(data);
				$('#textarea').val(ret.data.text);
    		});



	}


}