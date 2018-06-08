import Header from './sections/header.js';
import Footer from './sections/footer.js';

import ContainerCollect from '../../collections/ContainerCollection.js';
import ObjectCollect from '../../collections/ObjectTreeCollection.js';
import JsTreeContainer from '../elements/objects/jsTreeContainer.js';


export default class Objects{


	constructor(){

		this.getHTMLPage();

    this.JsTreeContainer = 'jstree_demo_div';

    this.JsTreeObjects   = 'jstree_object_tree';

    this.TheContainerCollect = new ContainerCollect();

    this.TheObjectCollect = new ObjectCollect();

		this.activeCSS();

		this.initContainerJstreeDOMElements();

    this.linkVakataDomEvent();

    window.addEventListener('ContainerSelect', (e,data) => this.containerSelected(e,data));

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
				            					        
						            
						            <div id="jstree_demo_div"></div>
						        
						            <div id="jstree_object_tree"></div>
						        
				        
							        <div id="infos">

										<div>
						                    <div class="fixed-action-btn horizontal ltr-lifer" style="position: absolute; display: inline-block; left: 0px;">
						                      <a class="btn-floating btn-large">
						                        <i class="material-icons">add</i>
						                      </a>
						                      <ul>
						                        <li>
						                          <a id="launch_cam" class="btn-floating red">
						                            <i class="large material-icons">camera_alt</i>
						                          </a>
						                        </li>
						                        <li>
						                          <a class="btn-floating yellow darken-1">
						                            <i class="large material-icons">format_quote</i>
						                          </a>
						                        </li>
						                        <li>
						                          <a class="btn-floating green">
						                            <i class="large material-icons">date_range</i>
						                          </a>
						                        </li>
						                        <li>
						                          <a class="btn-floating blue">
						                            <i class="large material-icons">insert_link</i>
						                          </a>
						                        </li>
						                        <li>
						                          <a class="btn-floating blue">
						                            <i class="large material-icons">looks_one</i>
						                          </a>
						                        </li>
						                      </ul>
						                    </div>
						                </div>

						        	</div>
						        
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






	initContainerJstreeDOMElements(){

    //je charge l'objet jstree standard
    this.JstreeContainerObj = new JsTreeContainer(this.JsTreeContainer,'box', this.TheContainerCollect);
   
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

 


  containerSelected(e,data){

    this.JstreeObjectsObj = new JsTreeContainer(this.JsTreeObjects,'objects', this.TheObjectCollect,data.node.id);



  }







	activeCSS(){


	}

















	activeJS(){

/*
                            <div id="add_infos">
                     
                          <input id="Myfile" type="file" accept="image/*" capture="camera">

                      </div>*/

//INIT DES ETATS DES ELEMENTS

		$('#Myfile').hide();
		$('#action').hide();
	    $('#infos').hide();
	    $('#unities').hide();


  		let treeJSON = "";



//RECUPERATION DES DATAS DES LISTES + JS TREE


	



	    $.get( "unity/type", function( data ) {
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
           


	                             
	    });

      $.get( "unity/unities", function( data ) {

       let unityUnities = JSON.parse(data);
   
      });






///////////////////////////////// 
//EVENTS
/////////////////////////////////

	//DOCUMENT
       



    //TOOLBAR

    	 //LANCE LA CAM

	      $('#launch_cam').on('click', function(e, data) {

	      		$("#Myfile").click();

	      });







    //UNITY-TYPE    

        $('#unityType').on('change', function(e, data) {

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



       	//ON SELECT
  		$('#jstree_demo_div').on('select_node.jstree', function(e, data) {

         	$('#plugins4_q').hide();
         	$('#infos').show();
         	$('#jstree_object_tree').show();
         	$('#jstree_demo_div').hide();

         	jsTreeBreadcrumb($('#jstree_demo_div'),$('#breadcrumb'),data.node);
         	

         	

            let ActiveDiv = '#jstree_demo_div';
  

             $('#jstree_object_tree').jstree({


                'core' :
                {

	                "check_callback" : true,

	                "themes" : {"dots" : false}

	            },

	                
                "types" :
                {
                
                    "default" : {"icon" : "glyphicon glyphicon-tree-deciduous"},

                    "car"     : {"icon" : "fa fa-car"},
                
                    "kitchen" : {"icon" : "glyphicon glyphicon-apple"},
                
                    "home"   : {"icon" : "glyphicon glyphicon-home"}
                
                },
                
                 "plugins" : [ "dnd", "search" , "types", "contextmenu" ]

	             });


               let treeJSONObject = "";

                $.get( "object/tree/get/"+data.node.id, function( data ) {
                  treeJSONObject = JSON.parse(data);
                  $('#jstree_object_tree').jstree(true).settings.core.check_callback = true;
                  $('#jstree_object_tree').jstree(true).settings.core.data = treeJSONObject;
                  $('#jstree_object_tree').jstree(true).refresh();
                  $('#jstree_object_tree').jstree(true).open_all();
                 // $('#jstree_demo_div').jstree("open_all");
                });


         });






	//JSTREE OBJECTS EVENTS

    	// RENOMMAGE D'UNE BRANCHE OBJET COTE SERVEUR

	         $('#jstree_object_tree').on('rename_node.jstree', function(e, data) {

	            let formData = new FormData();

	            formData.append('node'  ,data.node.id);
				formData.append('name'  ,data.node.text);

				ajaxSend('POST','object/tree/rename',formData);

		     
	         });


	    //DELETE OBJECTS TREE BRANCH/LEAF BACKEND

         $('#jstree_object_tree').on('delete_node.jstree', function(e, data) {

          console.log('delete');
                    let formData = new FormData();

            //formData.append('jpg'  ,this.image);
            formData.append('node'  ,data.node.id);

        formData.append('parent'  ,data.parent);
        let AjaxSender = $.ajax({
              type: 'POST',
              url: 'object/tree/delete',
              data: formData,
              async: true,
              cache: false,
              contentType: false,
              processData: false,
               success: function(d){
                          $.get( "object/tree/get/"+data.node.parents[data.node.parents.length -2].replace(/root_/g, ""), function( data ) {
                            treeJSON = JSON.parse(data);
                            $('#jstree_object_tree').jstree(true).settings.core.check_callback = true;
                            $('#jstree_object_tree').jstree(true).settings.core.data = treeJSON;
                            $('#jstree_object_tree').jstree(true).refresh();
                           // $('#jstree_demo_div').jstree("open_all");
                          });


              }
            });




         });



        //ON SELECT

		 $('#jstree_object_tree').on('select_node.jstree', function(e, data) {

		                $('#action').show();
		                $('#jstree_demo_div').hide();
		      });



		//CREATE
        $('#jstree_object_tree').on('create_node.jstree', function(e, data) {

	        let formData = new FormData();

            formData.append('nodeText' ,data.node.text);
            formData.append('object' , data.node.parents[data.node.parents.length -2]);
	        formData.append('parent'  ,data.parent);

	        let AjaxSender = $.ajax({

              type: 'POST',
              url: 'object/tree/add',
              data: formData,
              async: true,
              cache: false,
              contentType: false,
              processData: false,
              success: function(d){

                 $('#jstree_object_tree').jstree(true).set_id(data.node, d);
              }

	        });


        });





      












    // RENOMMAGE D'UNE BRANCHE OBJET COTE SERVEUR

         $('#jstree_object_tree').on('rename_node.jstree', function(e, data) {

            let formData = new FormData();

            formData.append('node'  ,data.node.id);
			formData.append('name'  ,data.node.text);


	        


         });


    }

	



}


