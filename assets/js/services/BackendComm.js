import { Lifer } from './Lifer.js';

export default class BackendComm {



	ajaxSend(VERB,url,from=false,dataCallback = false,dataSend = false){

		console.log("on passe bien dans ajaxSend");		

			let params = this._BuildParams(VERB,dataSend);


			fetch(url, params).then(function(response) {

			   	return response.json();

			}).then(function(json){
				
				if(from !== false) from.This[from.method](json,dataCallback);
				
				console.log(json);

			}, function(error) {

			  error.message //=> String

			})




	}




	_BuildParams(VERB,dataSend){

		let params = {};
			params.method = VERB;
			params.credentials = "same-origin";

			if(VERB != "GET"){
				console.log(dataSend);
				params.body = JSON.stringify(dataSend);

				params.headers = {};
				params.headers["Content-Type"] = "application/json";

			}

		return params;

	}


}