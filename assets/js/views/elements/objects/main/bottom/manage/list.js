import LoaderCollection from '../../../../../../services/LoaderCollection.js';
import superViews from "../../../../common/super/views.js";

export default class list extends superViews{


	constructor(parent,MyClass,path){


		super(parent,MyClass,path);
		
		this.init();

	}
	

	init(){

		this.collection = new LoaderCollection('ObjectInfos');

	}



	//PUBLICS

	showList(){
		console.log('in show list');
		console.log(this.container);
		this.container.style.maxHeight = "150px";
		this.container.style.height = null;
		
	}

	hideList(){
		console.log('in hide list');
		this.container.style.height = "0px";
		
	}

	getList(){

		this.container.innerHTML ="";

		let ContainerNode = this.Lifer.getData("objects","ContainerNode");
		let LeafNode = this.Lifer.getData("objects","LeafNode");
		
		let ListInfos = this.collection.getList(ContainerNode.id,LeafNode.id);

		let ul = document.createElement("ul");
		ul.style.listStyleType = "none";
		ul.style.margin = "0px";
		ul.style.padding = "15px";
		this.container.append(ul);


		console.log('listInfos');
		console.log(ListInfos);

	    for (let k in ListInfos){

	    let li = document.createElement("li");
	    ul.append(li);

	    	let i = document.createElement("i");
				i.className = "material-icons";
				i.style.fontSize = "25px";
				i.style.color = "white";
				//i.style.marginLeft = "0px";
				i.style.marginRight = "15px";

			i.append(ListInfos[k].resources.type.picto);

			li.append(i);

			let a = document.createElement("a");
				//a.href = ListInfos[k].resources.text;
				//a.target = "_blank";
				a.style.textDecoration = "none";
				a.style.color = "white";
				a.style.verticalAlign =  "super";
				a.style.fontSize = "20px";

			a.append(ListInfos[k].infos.name);

			a.addEventListener("click", (e)=>this.openPopNote(e,ListInfos[k].infos.id));

			li.append(a);



	    }



	}


}