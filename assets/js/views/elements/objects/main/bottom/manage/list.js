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


					let ObjectsInfosCardElement   = card.setElement("ObjectsInfosCardElement");
					card.setStyleElement(ObjectsInfosCardElement,"justifyContent","flex-start");

							card.push("Text", ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id, info.infos.name);

							card.setStyleComponent(ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id,"fontSize","15px");
							card.setStyleComponent(ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id,"color","white");
							card.setStyleComponent(ObjectsInfosCardElement,"ObjectsInfosCardElementItem_" + info.infos.id,"alignItems","center");


		}




	  /*  let li = document.createElement("li");
	    ul.append(li);

	    	let i = document.createElement("i");
				i.className = "material-icons";
				i.style.fontSize = "25px";
				i.style.color = "white";

				i.style.marginRight = "15px";

			i.append(ListInfos[k].resources.type.picto);

			li.append(i);

			let a = document.createElement("a");

				a.style.textDecoration = "none";
				a.style.color = "white";
				a.style.verticalAlign =  "super";
				a.style.fontSize = "20px";

			a.append(ListInfos[k].infos.name);

			a.addEventListener("click", (e)=>this.openPopNote(e,ListInfos[k].infos.id));

			li.append(a);



	    }
*/


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