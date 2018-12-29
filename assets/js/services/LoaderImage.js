import EXIF             from 'exif-orientation';

import { Lifer } from './Lifer.js';
import LocalStorage from './LocalStorage.js';

class LoaderImage {
	

	constructor(){

	}



	importPict(elt,target){



		this.elt = elt;

		let reader = new FileReader();
		reader.readAsDataURL(elt);

		reader.onloadend = ()=> this.loadPict(reader.result,target);

	}



	loadPict(pict,target){


		let PersistLocalStore = new LocalStorage();
		let name = Lifer.newTmpId()+".jpg";
		PersistLocalStore.push(name,pict);

		setTimeout(()=>this.testread(name), 1000);
		


		this.imgObj = new Image();

		this.imgObj.src = pict;
		this.imgObj.PersistName = name;

		this.imgObj.addEventListener('load',()=>this.getOrientation(pict,target));



	}


	testread(name){

		let PersistLocalStore = new LocalStorage();
		PersistLocalStore.get(name);

	}


	getOrientation(pict,target){

		EXIF(this.elt,(err,orientation) => this.sendImg(err,orientation,pict,target));

	}



	sendImg(err,orientation,pict,target){

		let res = {};
		res.data = {};
		res.data.pict = pict;
		res.data.ObjImg = this.imgObj;
		res.data.orientation = orientation;
		res.type = 3;
		res.capture = true;


		let itemResource = Lifer.getData(target, "This");
//TODO: je sasi pas si c'est encore un peux moche oupas
		itemResource.addThumb(res);

	}





}

const instance = new LoaderImage();
export { instance as LoaderImage };
