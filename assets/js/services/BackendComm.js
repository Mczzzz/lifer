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
			  response.status     //=> number 100–599
			  response.statusText //=> String
			  response.headers    //=> Headers
			  response.url        //=> String

			  return JSON.parse(response.text());
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