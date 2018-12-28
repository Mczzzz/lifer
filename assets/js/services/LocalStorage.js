
export default class LocalStorage {


	constructor(){


		this.grantedBytes = 1024*1024*100;


		// window.requestFileSystem(PERSISTENT, grantedBytes, this.onInitFs, this.errorHandler);
		//navigator.webkitPersistentStorage.queryUsageAndQuota ( (usedBytes, grantedBytes) => this.consoleSize(usedBytes, grantedBytes), (e) => this.consoleSizeError(e) );


		
	


	}





	push(name, pict){

/*		this.pict = pict;
		this.name = name;*/

		navigator.webkitPersistentStorage.requestQuota ( this.grantedBytes, (grantedBytes) => this.pushAction(grantedBytes, name, pict), (e) => this.consoleSizeError(e) );


	}


	get(){



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
		      let blob = new Blob([pict.data.pict], {type: 'image/jpg'});

		      fileWriter.write(blob);



			}


		localstorage.root.getFile(name, {create: true}, fileEntry , errorHandler);



		}


		 window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);


	}





	consoleSize(usedBytes, grantedBytes){
		console.log('we are using ', usedBytes, ' of ', grantedBytes, 'bytes');
	}


	consoleSizeError(e){
		console.log('Error', e);
	}






}