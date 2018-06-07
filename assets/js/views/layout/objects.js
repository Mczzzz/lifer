import Header from './sections/header.js';
import Footer from './sections/footer.js';

import JsTreeContainer from '../elements/objects/jsTreeContainer.js';


export default class Objects{


	constructor(){

		this.getHTMLPage();

		this.activeCSS();

		this.linkDOMElements()

		this.JstreeContainerObj = new JsTreeContainer();


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
		      <!-- START WRAPPER -->
		      <div class="wrapper">

				    <div class="custom-breadcrumb">
				      <div id="breadcrumb"class="col s12">
				      </div>
				    </div>

		        <!-- START CONTENT -->
		        <section id="content">

		          <!--start container-->
		          <div class="container">
		            <div class="section">
		            	<div><input type="text" id="plugins4_q" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;"></div>
				        
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

			                <div id="add_infos">
						     
						        <input id="Myfile" type="file" accept="image/*" capture="camera">
						    </div>

				        </div>
				        

				        <div id="evenement"></div>
 					  <br />
		              <div class="divider"></div>
		            </div>
		          
		          </div>
		          <!--end container-->
		        </section>
		        <!-- END CONTENT -->
		      </div>
		      <!-- END WRAPPER -->
		    </div>`;


	}



	linkDOMElements(){

		//JSTREE CONTAINER
		this.JsTreeContainer = $('#jstree_demo_div');


		//JSTREE OBJECTS
		this.JsTreeObjects = $('#jstree_object_tree');



	}



	activeCSS(){

		let css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = `

							.custom-breadcrumb {
							    padding-left: 20px;
							    padding-top: 5px;
							}


							.custom-breadcrumb-item { 
								color: red;

							}

							.custom-breadcrumb-item::before { 
								content: " > ";

							}

							`;
			document.body.appendChild(css);
	}





	/*initJstreeContainer(){

		this.JsTreeContainer.jstree({
          'core' : {
              "check_callback" : true
                      },
              "types" : {
                  "default" : {
                    "icon" : "glyphicon glyphicon-tree-deciduous"
                  },

                  "car" : {
                    "icon" : "fa fa-car"
                  },
                  "kitchen" : {
                    "icon" : "glyphicon glyphicon-apple"
                  },
                  "home" : {
                    "icon" : "glyphicon glyphicon-home"
                  }
              },
              "plugins" : [ "dnd", "search" , "types", "contextmenu" ]

         });


	}*/


/*	getJstreeContainerElements(){

		let GetData = new SvcBackEndComm();
		let result = GetData.ajaxSend('GET','children');

        this.JsTreeContainer.jstree(true).settings.core.data = JSON.parse(result.responseText);
        this.JsTreeContainer.jstree(true).refresh();

	}*/




	







	activeJS(){


//INIT DES ETATS DES ELEMENTS

		$('#Myfile').hide();
		$('#action').hide();
	    $('#infos').hide();
	    $('#unities').hide();


  		let treeJSON = "";



//RECUPERATION DES DATAS DES LISTES + JS TREE


		

/*
		$.get( "children", function( data ) {
          treeJSON = JSON.parse(data);
          $('#jstree_demo_div').jstree(true).settings.core.check_callback = true;
          $('#jstree_demo_div').jstree(true).settings.core.data = treeJSON;
          $('#jstree_demo_div').jstree(true).refresh();
         // $('#jstree_demo_div').jstree("open_all");
        });*/



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



//INSTANCIATION DU JS TREE  PRINCIPAL

/*         $('#jstree_demo_div').jstree({
          'core' : {
              "check_callback" : true
                      },
              "types" : {
                  "default" : {
                    "icon" : "glyphicon glyphicon-tree-deciduous"
                  },

                  "car" : {
                    "icon" : "fa fa-car"
                  },
                  "kitchen" : {
                    "icon" : "glyphicon glyphicon-apple"
                  },
                  "home" : {
                    "icon" : "glyphicon glyphicon-home"
                  }
              },
              "plugins" : [ "dnd", "search" , "types", "contextmenu" ]

         });*/

    

//LINK DU CHAMP DE RECECHERCHE
          let to = false;
          $('#plugins4_q').keyup(function () {
            if(to) { clearTimeout(to); }
            to = setTimeout(function () {
              var v = $('#plugins4_q').val();
              $('#jstree_demo_div').jstree(true).search(v);
            }, 250);
          });



///////////////////////////////// 
//EVENTS
/////////////////////////////////

	//DOCUMENT
        $(document)
        // listen for events
        .on('dnd_start.vakata', function (e, data) {})
        .on('dnd_stop.vakata', function (e, data) {
            console.log('Dropped');

            //Pour savoir quel jstree a lancée l'event
            let MyFrag = $(data.data.origin.element[0]);
             console.log(MyFrag.filter("div").attr('id'));
           
              ref = $('#'+MyFrag.filter("div").attr('id')).jstree(true);

              if(MyFrag.filter("div").attr('id') == 'jstree_demo_div'){
                var url = 'node/dnd'
              }else if (MyFrag.filter("div").attr('id') == 'jstree_object_tree'){
                var url = 'object/tree/dnd'

              }
             // console.log(data.data.origin.element[0]);

        
            let formData = new FormData();

            //formData.append('jpg'  ,this.image);
            formData.append('node'  ,ref.get_node(data.data.nodes[0]).id);
            formData.append('parent'  ,ref.get_node(data.data.nodes[0]).parent);

            ajaxSend('POST',url,formData);

        });



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

	$('#infosValid').on('click', function(e, data) {

	    let formData = new FormData();

	    formData.append('name'              ,$('#infosName').val());
		formData.append('file'              ,$('#InfosPhoto').val());
		formData.append('text'              ,$('#InfosText').val());
		formData.append('float'             ,$('#InfosValeur').val());
		formData.append('floatTypeValueId'  ,$('#unities').val());

	    ajaxSend('POST','objects_infos/add',formData);

	});


	//JSTREE CONTAINER EVENTS


    	//RENOMMAGE D'UN CONTAINER BACKEND

        $('#jstree_demo_div').on('rename_node.jstree', function(e, data) {
            
            let formData = new FormData();

            formData.append('node',data.node.id);
            formData.append('name',data.node.text);

            ajaxSend('POST','node/rename',formData);

        });
    

        //DELETE CONTAINER BRANCH/LEAF BACKEND
       	$('#jstree_demo_div').on('delete_node.jstree', function(e, data) {

            let formData = new FormData();

            formData.append('node'  ,data.node.id);
            formData.append('parent'  ,data.parent);

            let AjaxSender = $.ajax({

                type: 'POST',
                url: 'node/delete',
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function(d){

                    $.get( "children", function( data ) {

                        treeJSON = JSON.parse(data);

                        $('#jstree_demo_div').jstree(true).settings.core.check_callback = true;
                        $('#jstree_demo_div').jstree(true).settings.core.data = treeJSON;
                        $('#jstree_demo_div').jstree(true).refresh();

                    });
              	}
        	});
    	});


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



  		//ON CREATE
        $('#jstree_demo_div').on('create_node.jstree', function(e, data) {

	        let formData = new FormData();

            formData.append('node'    ,data.node.text);
            formData.append('parent'  ,data.parent);


            let rData = ajaxSend('POST','node/add',formData);

            console.log(rData);
            $('#jstree_demo_div').jstree(true).set_id(data.node, rData);

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





      






// a finir de factoriser +sortir les show et hides

	function jsTreeBreadcrumb(JsTreeDiv,breadcrumbTargetDiv,node){
         	
         	breadcrumbTargetDiv.empty();

         	//ajout d ela node active
            breadcrumbTargetDiv.append('<a href="#!" id="bc_'+node.id+'" class="custom-breadcrumb-item">'+node.text+'</a>');
            	

            jsTreeEventBreadcrumb(node,JsTreeDiv);

         	//parsing des parents
         	 for (let k in node.parents){

         	 	let parentNode = JsTreeDiv.jstree(true).get_node(node.parents[k]);

				if(parentNode.text !== undefined){
					breadcrumbTargetDiv.prepend('<a href="#!" id=bc_'+parentNode.id+' class="custom-breadcrumb-item">'+parentNode.text+'</a>');
					
					jsTreeEventBreadcrumb(parentNode,JsTreeDiv);

				}

            }

            


            
	}



	function jsTreeEventBreadcrumb(node,JsTreeDiv){


		$('#bc_'+node.id).click(function(){

			JsTreeDiv.show();
			JsTreeDiv.jstree(true).close_all();
			JsTreeDiv.jstree(true)._open_to(node);
			JsTreeDiv.jstree(true).open_node(node);
			//
			JsTreeDiv.trigger('ElementDisplay');			
		});




		
	}





    // RENOMMAGE D'UNE BRANCHE OBJET COTE SERVEUR

         $('#jstree_object_tree').on('rename_node.jstree', function(e, data) {

            let formData = new FormData();

            formData.append('node'  ,data.node.id);
			formData.append('name'  ,data.node.text);


	        


         });





	function ajaxSend(VERB,url,formData){


		let AjaxSender = $.ajax({

          type: VERB,
          url: url,
          data: formData,
          async: true,
          cache: false,
          contentType: false,
          processData: false,
          success: function(d){
          	return d;
          }
	    		
	    });


		return AjaxSender;

	}


}

	


	

	footerHTML(){

				let footer = new Footer();

				return footer.addTags();
	}








}


