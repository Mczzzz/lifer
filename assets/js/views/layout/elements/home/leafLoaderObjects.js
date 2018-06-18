import materialize from 'materialize-css';
import ObjectInfosCollect from '../../../collections/ObjectInfosCollection.js';

export default class leafLoaderObjects{


	constructor(){



		this.addHTML();
		this.activeJQUERY();
		this.ObjectInfosCollect = new ObjectInfosCollect();
		window.addEventListener('InfosRefresh', (e) => this.refresh(e));
	}


	addHTML(){

		let html = `<div id="Swipeable-tab" style="  position:absolute;
  bottom: 0;
  top:auto;
  left: 0;width:100%" class="section">
                        <div class="row">
                            <div class="col s12">
                                <ul id="tabs-swipe-demo" class="tabs">
                                    <li class="tab col s3 blue"><a href="#test-swipe-1"><i class="material-icons white-text" style="margin-top:10px">info</i></a></li>
                                    <li class="tab col s3 red"><a class="active" href="#test-swipe-2"><i class="material-icons white-text" style="margin-top:10px">note</i></a></li>
                                    <li class="tab col s3 green" ><a href="#test-swipe-3"><i class="material-icons white-text" style="margin-top:10px">access_alarms</i></a></li>
                                </ul>
                                <div id="test-swipe-1" class="col s12 carousel carousel-item blue white-text" style="overflow-y: scroll;">
                                    <div id="tab_infos_node" class="col s12 mt-1"></div>
                                </div>
		                        <div id="test-swipe-2" class="col s12 carousel carousel-item red white-text">
		                            <div class="col s12 mt-1"></div></div>
		                        </div>
                                <div id="test-swipe-3" class="col s12 carousel carousel-item green white-text">
                                    <div class="col s12 mt-1"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>`;   

        $('#leafInfos').append(html);

	}


	activeJQUERY(){


	    if ($('#tabs-swipe-demo').length) {

	      $('#tabs-swipe-demo').tabs({
	        'swipeable': true
	      });

	    }


	}


	loadList(objectIdSelect,leafId){

		this.objectId = objectIdSelect;
		this.leafId = leafId;
       
       	this.refresh();

	}


	refresh(e){

		 let ListInfos = this.ObjectInfosCollect.getList(this.objectId,this.leafId);

        $('#tab_infos_node').empty();

	    for (let k in ListInfos){

	    	if(ListInfos[k].resources.name == "text"){

		    	$('#tab_infos_node').append(`
		        <i class="material-icons" style="font-size:10px;margin-left:20px">`+ListInfos[k].resources.type.picto+`</i>
		        <a href="`+ListInfos[k].resources.text+`" target="_blank" style="text-decoration:none;color:white">`+ListInfos[k].infos.name+`</a><br />
		        `);

	    	}else if(ListInfos[k].resources.name == "webLink"){


	    	$('#tab_infos_node').append(`
	        <i class="material-icons" style="font-size:10px;margin-left:20px">`+ListInfos[k].resources.type.picto+`</i>
	        <a href="`+ListInfos[k].resources.text+`" target="_blank" style="text-decoration:none;color:white">`+ListInfos[k].infos.name+`</a><br />
	        `);


	    	}




	    }

	}

}