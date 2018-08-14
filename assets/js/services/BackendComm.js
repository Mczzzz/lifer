import { Lifer } from './Lifer.js';

export default class BackendComm {



	ajaxSend(VERB,url,from=false,formData = false){

		console.log("on passe bien dans ajaxSend");		

			let params = {};
			params.method = VERB;
			params.credentials = "same-origin";

			if(VERB != "GET"){
				params.body = formData;

				params.headers = {};
				params.headers["Content-Type"] = "application/json";

			}

			fetch(url, params).then(function(response) {
			   	return response.json();
			}).then(function(json){
				
				if(from !== false) from.This[from.method](json);
				

	/*			Note.note.id = json.datas.note.id;*/
				//console.log(Note.note.id);*/
				//Note.note.id = json.datas.note.id;
				console.log(json);

			}, function(error) {
			  error.message //=> String
			})




	}



}