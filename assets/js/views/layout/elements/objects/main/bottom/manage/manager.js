import ObjectInfosCollect from '../../../../../../../collections/ObjectInfosCollection.js';

export default class manager {



	constructor(HTMLParent){
		console.log('on passe dans le constructeur du manager');
	this.ParentContainer = $("."+HTMLParent);

	this.initHTML();
	}


	initHTML(){
		console.log('on passe dans le cinitHTML du manager');
			this.Manager = document.createElement("div");
			this.Manager.className = "MyManager";
			this.ParentContainer.append(this.Manager);
	}

	loadInfos(){



	}



}