import EXIF             from 'exif-orientation';

import { Lifer } from './Lifer.js';
import LocalStorage from './LocalStorage.js';

class LoaderImage {
	

	constructor(){




	}



	importPict(elt,target){


		this.target = target;

		this.elt = elt;

		let reader = new FileReader();
		reader.readAsDataURL(elt);

		reader.onloadend = ()=> this.loadPict(reader.result);

	}



	loadPict(pict){



		let name = Lifer.newTmpId()+".jpg";

		let PersistLocalStore = new LocalStorage();
        PersistLocalStore.push(name,pict);

		let TemporaryLocalStore = new LocalStorage('TEMPORARY');
		TemporaryLocalStore.push(name,pict);

		

		this.imgObj = new Image();

		this.imgObj.src = pict;

		this.imgObj.PersistName = name;

		this.imgObj.addEventListener('load',()=>this.getOrientation(pict));



	}




	getOrientation(pict){

		EXIF(this.elt,(err,orientation) => this.sendImg(err,orientation,pict));

	}



	sendImg(err,orientation,pict){

		let res = {};
		res.data = {};
		res.data.pict = pict;
		res.data.ObjImg = this.imgObj;
		res.data.orientation = orientation;
		res.type = 3;
		res.capture = true;


		this.target.Object[this.target.Method](res);

	}





}

const instance = new LoaderImage();
export { instance as LoaderImage };
