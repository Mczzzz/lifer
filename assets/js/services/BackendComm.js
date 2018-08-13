import { Lifer } from './Lifer.js';

export default class BackendComm {



	ajaxSend(VERB,url,formData = ""){

		

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

				/*let Note = Lifer.getData("Note", "This");
				Note.note.id = json.datas.note.id;*/
				//console.log(Note.note.id);
				//Note.note.id = json.datas.note.id;
				console.log(json);

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