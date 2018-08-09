import { Lifer } from './Lifer.js';

export default class BackendComm {



	ajaxSend(VERB,url,formData = ""){

		let Note = Lifer.getData("Notes", "This");

			fetch(url, {
			  method: VERB,
			  body: formData,
			  headers: {
			    "Content-Type": "application/json"
			  },
			  credentials: "same-origin"
			}).then(function(response) {
			   	return response.json();
			}).then(function(json){

				//Note.note.id = json.datas.note.id;
				console.log(json.datas.note);

			}, function(error) {
			  error.message //=> String
			})



/*			let AjaxSender = $.ajax({

	          type: VERB,
	          url: url,
	          data: formData,
	          async: false,
	          cache: false,
	          contentType: false,
	          processData: false,
	          success: function(d){
	          }
		    		
		    });



			//console.log(JSON.parse(AjaxSender.responseText));


			return JSON.parse(AjaxSender.responseText);*/

	}



}