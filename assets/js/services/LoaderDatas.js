import EXIF             from 'exif-orientation';

import { Lifer } from './Lifer.js';
import LocalStorage from './LocalStorage.js';

import LoaderCollection from './LoaderCollection.js';

export default class LoaderDatas {
	

	constructor(name,itemID,targetToLoadData){

		this.name = name;
		this.elt = targetToLoadData;
		this.itemId = itemID;

		this.NotesCollection = new LoaderCollection("Notes");


		this.init();
	}


	init(){

		//je tente de lire le temporary pour voir
		let TemporaryLocalStore = new LocalStorage('TEMPORARY');
		TemporaryLocalStore.get(name,this,'loadIn');



	}



	loadIn(datas){

		console.log('In Load IN');
		console.log(datas);
		console.log(fromServer);

		if(datas == "DOMException"){

			console.log('IN DOMExeptions !!!!!!!!!!!!!');

			//on va chercher l'image sur le serveur
			this.NotesCollection.getPictureFromServer(this.itemId+"_"+this.name,this,'synchoApp');


		}else{




		}




	}


	synchoApp(datas, datas2 = false){

		console.log(datas);
		console.log(datas2);

	}


}

