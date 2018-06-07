export default class BackendComm {



	ajaxSend(VERB,url,formData = ""){


			let AjaxSender = $.ajax({

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


			return AjaxSender;

	}



}