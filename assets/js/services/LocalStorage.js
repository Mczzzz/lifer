import { Lifer } from '../services/Lifer.js';

export default class LocalStorage {


	constructor(){


		this.grantedBytes = 1024*1024*100;


		

	}





	push(name, Myfile){

/*		this.pict = pict;
		this.name = name;*/

		navigator.webkitPersistentStorage.requestQuota ( this.grantedBytes, (grantedBytes) => this.pushAction(grantedBytes, name, Myfile), (e) => this.consoleSizeError(e) );


	}


	get(name){


		navigator.webkitPersistentStorage.requestQuota ( this.grantedBytes, (grantedBytes) => this.getAction(grantedBytes, name), (e) => this.consoleSizeError(e) );	

	}


	getAction(grantedBytes,name){



		function onInitFs(fs) {


			function errorHandler(e){

				console.log(e);
			}

			function file(file){


				let reader = new FileReader();

				//reader.readAsDataURL(elt);
				reader.readAsText(file);

				reader.onloadend = ()=> this.getOut(reader.result);

/*		       reader.onloadend = function(e) {
		         let txtArea = document.createElement('textarea');
		         txtArea.value = this.result;
		         document.body.appendChild(txtArea);
		       };

		       reader.readAsText(file);*/

			}


			function fileEntry(fileEntry){

				 fileEntry.file(file, errorHandler);
			}


	        fs.root.getFile(name , {}, fileEntry , errorHandler);

		}

		 window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, this.errorHandler);



	}


	getOut(MyFile){
		
		console.log(MyFile);
	
	}




	pushAction(grantedBytes,name,pict){


	//	let pict = this.pict;
	


		function onInitFs(localstorage){




			function errorHandler(e){

				console.log(e);
			}

			function fileEntry(fileEntry){

				fileEntry.createWriter(fileW , errorHandler);
			}


			function fileW(fileWriter){



			      fileWriter.onwriteend = function(e) {
			        console.log('Write completed.');
			      };

			      fileWriter.onerror = function(e) {
			        console.log('Write failed: ' + e.toString());
			      };


			      // Create a new Blob and write it to log.txt.
			      let blob = new Blob([pict], {type: 'image/jpg'});

			      fileWriter.write(blob);



				}


			localstorage.root.getFile(name, {create: true}, fileEntry , errorHandler);



			}


		 window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, this.errorHandler);


		 this.getSize();

	}


       errorHandler(e){

			console.log(e);
		}



	consoleSize(usedBytes, grantedBytes){
		console.log('we are using ', usedBytes, ' of ', grantedBytes, 'bytes');
	}


	consoleSizeError(e){
		console.log('Error', e);
	}


	getSize(){
		navigator.webkitPersistentStorage.queryUsageAndQuota ( (usedBytes, grantedBytes) => this.consoleSize(usedBytes, grantedBytes), (e) => this.consoleSizeError(e) );
	}



}