import EXIF             from 'exif-orientation';

import { Lifer } from './Lifer.js';

class ImageLoader {
	

	constructor(){

	}



	importPict(elt){



		this.elt = elt;

		let reader = new FileReader();
		reader.readAsDataURL(elt);

		reader.onloadend = ()=> this.loadPict(reader.result);

	}

	loadPict(pict){


		this.imgObj = new Image();

		this.imgObj.src = pict;

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


		let NoteResource = Lifer.getData("Note/mainNote/noteMainResources", "This");

		NoteResource.createCard(res);

	}





}

const instance = new ImageLoader();
export { instance as ImgLoader };
