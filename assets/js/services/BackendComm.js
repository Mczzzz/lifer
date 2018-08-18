import { Lifer } from './Lifer.js';

export default class BackendComm {



	ajaxSend(VERB,url,dispatchResponseTo=false,dataCallback = false,dataSend = false){

		console.log("on passe bien dans ajaxSend");		

			let params = this._BuildParams(VERB,dataSend);


			fetch(url, params).then(function(response) {

			   	return response.json();

			}).then(function(json){

				console.log(json);
				
				if(dispatchResponseTo !== false){

					for (let eventToDispatch of dispatchResponseTo){

						let Myclass = this.Lifer.getData(eventToDispatch.This,"This");

						Myclass[eventToDispatch.method](json,dataCallback);


					}

						

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
				console.log(dataSend);
				params.body = JSON.stringify(dataSend);

				params.headers = {};
				params.headers["Content-Type"] = "application/json";

			}

		return params;

	}


}