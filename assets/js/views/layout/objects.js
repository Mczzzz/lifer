import Header from './sections/header.js';
import Footer from './sections/footer.js';

import ContainerCollect from '../../collections/ContainerCollection.js';
import ObjectCollect from '../../collections/ObjectTreeCollection.js';
import ObjectInfosCollect from '../../collections/ObjectInfosCollection.js';

import JsTreeContainer from '../elements/objects/jsTreeContainer.js';
import toolBar from '../elements/objects/toolBarObjects.js';

export default class Objects{


	constructor(){

		this.getHTMLPage();

    this.JsTreeContainer = 'jstreeContainerdiv';

    this.JsTreeObjects   = 'jstreeObjectDiv';

    this.TheContainerCollect = new ContainerCollect();

    this.TheObjectCollect = new ObjectCollect();

    this.TheObjectInfosCollect = new ObjectInfosCollect();

		this.activeCSS();

		this.initContainerJstreeDOMElements();

    this.linkVakataDomEvent();

    this.toolbarHTML();

    this.activeJS();

    window.addEventListener('ContainerSelect', (e) => this.onContainerSelected(e));
    window.addEventListener('childAction', (e) => this.onChildAction(e));
    window.addEventListener('parentAction', (e) => this.onParentAction(e));
	}


	getHTMLPage(){

		let page = this.headerHTML();
		
		page += this.bodyHTML();	

		page += this.footerHTML();

		document.body.innerHTML = page;
	}



	headerHTML(){

				let header = new Header();

				return header.addTags();
	}
		


	bodyHTML(){

		return `<div id="main">

			        <div class="wrapper">

			            <section id="content">

			                <div class="container">

				                <div class="section">
				            					        
						            
						            <div id="jstreeContainerdiv"></div>
						        
						            <div id="jstreeObjectDiv"></div>
						        
				                <div class="divider"></div>

  					            <div id="infos"></div>
						        	
						        
				            	</div>
			          
			        		</div>

			        	</section>
			 
			      	</div>

		    	</div>`;


	}


  footerHTML(){

        let footer = new Footer();

        return footer.addTags();
  }



  toolbarHTML(){

    let ObjectToolBar = new toolBar(this.TheObjectInfosCollect);

  }




	initContainerJstreeDOMElements(){

    //je charge l'objet jstree standard
    this.JstreeContainerObj = new JsTreeContainer(this.JsTreeContainer,'Parent', this.TheContainerCollect);
   
    //trig me ;)
    //this.JstreeContainerObj.trigMe('onSelect', 'ContainerSelect');


	}



  linkVakataDomEvent(){

    $(document).on('dnd_stop.vakata', (e, data) => this.vakataAction(e,data));

  }

  
  
  vakataAction(e, data){

        //Pour savoir quel jstree a lancée l'event
        let MyFrag = $(data.data.origin.element[0]);
        let ref = $('#'+MyFrag.filter("div").attr('id')).jstree(true);

        let TheJstree = "";

        if(MyFrag.filter("div").attr('id') == this.JsTreeContainer){

          TheJstree = this.JstreeContainerObj;
        
        }else if (MyFrag.filter("div").attr('id') == this.JsTreeObjects){
        

        }

        console.log(data);

       TheJstree.onDNDJstree(e,data,ref); 

       

    }

 


  onContainerSelected(e){

    //create or refresh the child
    if( this.JstreeObjectsObj === undefined ){

      this.JstreeObjectsObj = new JsTreeContainer(this.JsTreeObjects,'Child', this.TheObjectCollect,e.detail.id);

    }else{

      this.JstreeObjectsObj.setParentId(e.detail.id);
      this.JstreeObjectsObj.getJstreeContainerElements();
      this.JstreeObjectsObj.onMaximize();

    }

  }


  onChildAction(e){

    this.JstreeContainerObj.onMinimize();
    //$('#toolbar').show();

  }


  onParentAction(e){

    this.JstreeObjectsObj.onMinimize(true);
    //$('#toolbar').hide();

  }



	activeCSS(){


	}



















	activeJS(){

   
/*
                            <div id="add_infos">
                     
                          <input id="Myfile" type="file" accept="image/*" capture="camera">

                      </div>*/





//RECUPERATION DES DATAS DES LISTES + JS TREE


	



/*	    $.get( "unity/type", function( data ) {
            let unityType = JSON.parse(data);
            console.log(unityType);
              $('#unityType').append($('<option>', {
                  value: 0,
                  text: 'Choisir un type' 
                }));
            for (var k in unityType){
                $('#unityType').append($('<option>', {
                  value: k,
                  text: unityType[k]
                }));
            }
           


	                             
	    });*/


///////////////////////////////// 
//EVENTS
/////////////////////////////////

	//DOCUMENT
       



    //TOOLBAR

    	 //LANCE LA CAM
/*
	      $('#launch_cam').on('click', function(e, data) {

	      		$("#Myfile").click();

	      });
*/






    //UNITY-TYPE    

/*        $('#unityType').on('change', function(e, data) {

                $('#unities').show();
                $('#unities').empty();

                for (var k in unityUnities[$('#unityType').val()]){

                  $('#unities').append($('<option>', {
                    title : unityUnities[$('#unityType').val()][k]['tooltip'],
                    value: k,
                    text: unityUnities[$('#unityType').val()][k]['symbol']
                  }));

                }
      });
*/



    //ENVOI DES INFOS D'UNE NODE

/*	$('#infosValid').on('click', function(e, data) {

	    let formData = new FormData();

	    formData.append('name'              ,$('#infosName').val());
		formData.append('file'              ,$('#InfosPhoto').val());
		formData.append('text'              ,$('#InfosText').val());
		formData.append('float'             ,$('#InfosValeur').val());
		formData.append('floatTypeValueId'  ,$('#unities').val());

	    ajaxSend('POST','objects_infos/add',formData);

	});*/


    }

	



}


