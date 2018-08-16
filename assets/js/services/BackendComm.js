import { Lifer } from './Lifer.js';

export default class BackendComm {



	ajaxSend(VERB,url,from=false,formData = false){

		console.log("on passe bien dans ajaxSend");		

			let params = this._BuildParams(VERB,formData);


			fetch(url, params).then(function(response) {

			   	return response.json();

			}).then(function(json){
				
				if(from !== false) from.This[from.method](json);
				
				console.log(json);

			}, function(error) {

			  error.message //=> String

			})




	}




	_BuildParams(VERB,formData){

		let params = {};
			params.method = VERB;
			params.credentials = "same-origin";

			if(VERB != "GET"){
				params.body = JSON.stringify(formData);

				params.headers = {};
				params.headers["Content-Type"] = "application/json";

			}

		return params;

	}


}