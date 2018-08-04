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

		EXIF(this.elt,(err,orientation) => this.rotateImg(err,orientation,pict));

	}



	rotateImg(err,orientation,pict){


		//j'envoi à ressource l'image ainsi que les infos necessaires
		//tous le code en dessous vas passé côté card


		let NoteResource = Lifer.getData("Note/mainNote/noteMainResources", "This");

		let res = {};
		res.data = pict;
		res.type = 3;

		NoteResource.createCard(res);
		//envoyer en sauvegarde background
		//this.dispatcher("","photo",this.camLauncher.files[0]);

	}





}

const instance = new ImageLoader();
export { instance as ImgLoader };
