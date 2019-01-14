import { Lifer } from './Lifer.js';

export default class BackendComm {



//	ajaxSend(VERB,url,dispatchResponseTo=false,dataCallback = false,dataSend = false){
	ajaxSend(VERB,url,callBackObj=false,callBackMethod = false,dataSend = false){
//		console.log("on passe bien dans ajaxSend");		

			let params = this._BuildParams(VERB,dataSend);


			fetch(url, params).then(function(response) {

				let contentType = response.headers.get("content-type");

				  if(contentType && contentType.indexOf("application/json") !== -1) {

				    return response.json();
				  
				  } else {
				  
				    return response.blob();
				  
				  }


			}).then(function(datas){


				console.log("return from ajax");
				console.log(datas);
				
				if(callBackObj !== false && callBackMethod !== false){


					callBackObj[callBackMethod](datas);


/*						if(eventToDispatch.This == 'Lifer' && eventToDispatch.method == 'addData'){

							//dispatchResponseTo.push({ "This" : "Lifer" , "method" : "addData", "path" : "User"});
							let formatArrayResponse = [json.data];
							Lifer[eventToDispatch.method](eventToDispatch.path,formatArrayResponse);


						}else{

/*							let Myclass = Lifer.getData(eventToDispatch.This,"This");

							Myclass[eventToDispatch.method](json,dataCallback);*/

					




						

				} 
				
				

			}, function(error) {

			  error.message //=> String

			})




	}




	_BuildParams(VERB,dataSend){

		let params = {};
			params.method = VERB;
			params.credentials = "same-origin";

			if(VERB != "GET"){
	//			console.log(dataSend);
				params.body = JSON.stringify(dataSend);

				params.headers = {};
				params.headers["Content-Type"] = "application/json";

			}

		return params;

	}


}