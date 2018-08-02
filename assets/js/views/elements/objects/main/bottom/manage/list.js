import LoaderCollection from '../../../../../../services/LoaderCollection.js';
import superViews from "../../../../common/super/views.js";

import Card from "../../../../common/ui/card.js";

export default class list extends superViews{


	constructor(parent,MyClass,path){


		super(parent,MyClass,path);
		
		this.init();

	}
	

	init(){

		this.collection = new LoaderCollection('ObjectInfos');

		this.container.style.display = "flex";
		this.container.style.flexDirection = "column";
		this.container.style.maxHeight = "150px";
		this.container.style.height = null;

	}


	getList(){

		this.container.innerHTML ="";

		let ContainerNode = this.Lifer.getData("Objects","ContainerNode");
		let LeafNode = this.Lifer.getData("Objects","LeafNode");

		let ListInfos = this.collection.getList(ContainerNode.id,LeafNode.id);


	    for (let info of ListInfos){



			let card = new Card(this.container,'ObjectsInfosCard_'+info.infos.id, this.path);
				
				card.setStyle("borderWidth", "0px");
				card.setStyle("borderRadius", "0px");
				card.setStyle("margin", "0px");
				card.setStyle("padding", "5px");
				card.setStyle("background", "transparent");


					let ObjectsInfosCardElement  = card.setElement("ObjectsInfosCardElement_" + info.infos.id);
					card.setStyleElement(ObjectsInfosCardElement,"justifyContent","flex-start");

							card.push("Text", ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id, info.infos.name);

							card.setStyleComponent(ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id,"fontSize","15px");
							card.setStyleComponent(ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id,"color","white");
							card.setStyleComponent(ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id,"alignItems","center");


		}


	}


	//PUBLICS

	show(){
		console.log('in show list');
		this.container.style.height = null;
		
	}


	hide(){
		console.log('in hide list');
		this.container.style.height = "0px";
		
	}




}