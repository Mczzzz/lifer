import EXIF             from 'exif-orientation';

import { Lifer } from './Lifer.js';

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

		localStorage.setItem("imgData"+Math.floor(Math.random() * Math.floor(1000)), pict);

		this.imgObj = new Image();

		this.imgObj.src = pict;

		this.imgObj.addEventListener('load',()=>this.getOrientation(pict,target));



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

		itemResource.addThumb(res);

	}





}

const instance = new LoaderImage();
export { instance as LoaderImage };
