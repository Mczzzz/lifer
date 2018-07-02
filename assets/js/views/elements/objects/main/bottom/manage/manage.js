import superViews from "../../../../../elements/common/super/views.js"
import List from './list/list.js';

export default class manage extends superViews{


	constructor(parent,MyClass,path){

		super(parent,MyClass,path);

		this.init();

	}
	

	init(){

		this.initContainer();

	}


	initContainer(){

		this.List = new List(this.container,"list",this.path);

	}


	open(ojbectId,leafId){
		this.List.showList();
		this.List.getList(ojbectId,leafId);
	}

	close(){

		this.List.hideList();
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