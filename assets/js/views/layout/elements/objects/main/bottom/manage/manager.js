import ObjectInfosCollect from '../../../../../../../collections/ObjectInfosCollection.js';

export default class manager {



	constructor(HTMLParent){

	this.ParentContainer = $('.'+HTMLParent);

	this.initHTML();
	}


	initHTML(){
			this.Manager = document.createElement("div");
			this.Manager.className = "MyManager";
			this.ParentContainer.append(this.Manager);
	}

	loadInfos(){



	}



}