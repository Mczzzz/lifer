import ObjectInfosCollect from '../../../../../../../collections/ObjectInfosCollection.js';

export default class manager {



	constructor(HTMLParent){

	this.ParentContainer = $("."+HTMLParent);

	this.collection = new ObjectInfosCollect();

	this.initHTML();
	}


	initHTML(){
		console.log('on passe dans le cinitHTML du manager');
			this.Manager = document.createElement("div");
			this.Manager.className = "MyManager";
			this.Manager.style.backgroundColor = "black";
			this.Manager.style.height = "250px";
			this.ParentContainer.append(this.Manager);
	}


	loadList(objectIdSelect,leafId){

		this.objectId = objectIdSelect;
		this.leafId = leafId;
       
       	this.refresh();

	}


	refresh(){


		 let ListInfos = this.collection.getList(this.objectId,this.leafId);

        $(".MyManager").empty();

	    for (let k in ListInfos){
	    	console.log('in for');
	    	if(ListInfos[k].resources.name == "text"){
	    		console.log('in text');
		    	this.Manager.append(`
		        <i class="material-icons" style="font-size:10px;margin-left:20px">`+ListInfos[k].resources.type.picto+`</i>
		        <a href="`+ListInfos[k].resources.text+`" target="_blank" style="text-decoration:none;color:white">`+ListInfos[k].infos.name+`</a><br />
		        `);

	    	}else if(ListInfos[k].resources.name == "webLink"){

console.log('webLink');
	    	this.Manager.append(`
	        <i class="material-icons" style="font-size:10px;margin-left:20px">`+ListInfos[k].resources.type.picto+`</i>
	        <a href="`+ListInfos[k].resources.text+`" target="_blank" style="text-decoration:none;color:white">`+ListInfos[k].infos.name+`</a><br />
	        `);


	    	}




	    }

	}


}