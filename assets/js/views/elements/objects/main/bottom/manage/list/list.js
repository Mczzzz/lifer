import LoaderCollection from '../../../../../../../services/LoaderCollection.js';
import superViews from "../../../../../../elements/common/super/views.js"

export default class list extends superViews{


	constructor(parent,MyClass,path){


		super(parent,MyClass,path);
		

		this.collection = new LoaderCollection('ObjectInfos');
		this.init();

	}
	

	init(){

		this.initContainer();

	}


	initContainer(){

		
	}

	showList(){
		console.log('in show list');
		this.container.style.maxHeight = "300px";
		
	}

	hideList(){
		console.log('in hide list');
		this.container.style.height = "0px";
		
	}

	getList(){

		let ContainerNode = this.Lifer.getData("app/home/frame/objects","ContainerNode");
		let LeafNode = this.Lifer.getData("app/home/frame/objects","LeafNode");
		
		let ListInfos = this.collection.getList(ContainerNode.id,LeafNode.id);

		let ul = document.createElement("ul");
		ul.style.listStyleType = "none";
		this.container.append(ul);

	    for (let k in ListInfos){

	    let li = document.createElement("li");
	    ul.append(li);

	    	let i = document.createElement("i");
				i.className = "material-icons";
				i.style.fontSize = "30px";
				i.style.color = "white";
				//i.style.marginLeft = "0px";
				i.style.marginRight = "15px";

			i.append(ListInfos[k].resources.type.picto);

			li.append(i);

			let a = document.createElement("a");
				a.href = ListInfos[k].resources.text;
				a.target = "_blank";
				a.style.textDecoration = "none";
				a.style.color = "white";
				a.style.fontSize = "20px";

			a.append(ListInfos[k].infos.name);

			li.append(a);


	    }



	}


/*	constructor(HTMLParent){

	this.ParentContainer = $("."+HTMLParent);

	this.collection = new ObjectInfosCollect();

	this.initHTML();
	}


	initHTML(){
		console.log('on passe dans le cinitHTML du manager');
			this.Manager = document.createElement("div");
			this.Manager.className = "MyManager";
			//this.Manager.style.backgroundColor = "black";
			this.Manager.style.height = "250px";
			this.ParentContainer.append(this.Manager);
	}


	loadList(objectIdSelect,leafId){

		this.objectId = objectIdSelect;
		this.leafId = leafId;
       
       	this.refresh();

	}


	refresh(){
///GROS HACK
			return true;
		 let ListInfos = this.collection.getList(this.objectId,this.leafId);

        $(".MyManager").empty();

	    for (let k in ListInfos){
	    	console.log('in for');
	    	console.log(ListInfos[k]);
	    	if(ListInfos[k].resources.type.name == "text"){
	    		console.log('in text');


		    	$(".MyManager").append(`
		        <i class="material-icons" style="font-size:10px;margin-left:20px">`+ListInfos[k].resources.type.picto+`</i>
		        <a href="`+ListInfos[k].resources.text+`" target="_blank" style="text-decoration:none;color:white">`+ListInfos[k].infos.name+`</a><br />
		        `);

	    	}else if(ListInfos[k].resources.type.name == "webLink"){

console.log('webLink');
	    	$(".MyManager").append(`
	        <i class="material-icons" style="font-size:10px;margin-left:20px">`+ListInfos[k].resources.type.picto+`</i>
	        <a href="`+ListInfos[k].resources.text+`" target="_blank" style="text-decoration:none;color:white">`+ListInfos[k].infos.name+`</a><br />
	        `);


	    	}




	    }

	}*/


}