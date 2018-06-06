import Header from './sections/header.js';
import Footer from './sections/footer.js';

export default class Objects{


	getHTMLPage(){

		let page = this.headerHTML();
		
		page += this.bodyHTML();

		

		page += this.footerHTML();

		return page;
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
				        <hr>
				        <div id="jstree_object_tree"></div>
				        <hr>
		        
				        <div id="infos">

							<div>
			                    <div class="fixed-action-btn horizontal ltr-lifer" style="position: absolute; display: inline-block; left: -15px;">
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
			                            <i class="large material-icons">publish</i>
			                          </a>
			                        </li>
			                        <li>
			                          <a class="btn-floating blue">
			                            <i class="large material-icons">attach_file</i>
			                          </a>
			                        </li>
			                      </ul>
			                    </div>
			                </div>

			                <div id="add_infos">
						        <br />
						        Nom :<input type="text" id="infosName" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;">
						        <br />



						        <input id="Myfile" type="file" accept="image/*" capture="camera">


						        <br />
						        <textarea id="InfosText" rows="4" cols="50" placeholder="Ton Texte"></textarea>
						        <br />
						        <input id="InfosValeur" type="number" step="any"  placeholder="1000">
						        <select id="unityType"></select>
						        <select id="unities"></select>
						        <br />
						        <button id="infosValid" name="button">Enregistrer</button>
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

	activeJS(){

/*		$('#add_infos').hide();
		$('#InfosPhoto').hide();*/

		$('#action').hide();
	    $('#infos').hide();
	    $('#unities').hide();

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
                           console.log(unityUnities);
                          });

        $('#unityType').on('change', function(e, data) {

                console.log('ca change');
                $('#unities').show();
                console.log($('#unityType').val());
                $('#unities').empty();
                for (var k in unityUnities[$('#unityType').val()]){
                  $('#unities').append($('<option>', {
                    title : unityUnities[$('#unityType').val()][k]['tooltip'],
                    value: k,
                    text: unityUnities[$('#unityType').val()][k]['symbol']
                  }));
                }
      });





      $('#launch_cam').on('click', function(e, data) {
      	console.log('in touchstart launch cam');
      	
      		//$('#Myfile').hide();
/*      	$('#add_infos').show();
      	$('#InfosPhoto').show();*/
      		$("#Myfile").click();

      		//document.getElementById("file").click();
      		console.log('in touchstart after click');
               
      });


      $('#infosValid').on('click', function(e, data) {

            let formData = new FormData();

            //formData.append('jpg'  ,this.image);
            formData.append('name'  ,$('#infosName').val());
            formData.append('file'  ,$('#InfosPhoto').val());
            formData.append('text'  ,$('#InfosText').val());
            formData.append('float'  ,$('#InfosValeur').val());
            formData.append('floatTypeValueId'  ,$('#unities').val());

            let AjaxSender = $.ajax({
                  type: 'POST',
                  url: 'objects_infos/add',
                  data: formData,
                  async: true,
                  cache: false,
                  contentType: false,
                  processData: false
            });
      });



         $('#jstree_demo_div').jstree({
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

    
        $(document)
        // listen for events
        .on('dnd_start.vakata', function (e, data) {
            console.log('Dragged');


        })
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

            let AjaxSender = $.ajax({
                  type: 'POST',
                  url: url,
                  data: formData,
                  async: true,
                  cache: false,
                  contentType: false,
                  processData: false
            });


        })



         $('#jstree_demo_div').on('rename_node.jstree', function(e, data) {
            console.log('remane');
                    let formData = new FormData();

            //formData.append('jpg'  ,this.image);
            formData.append('node'  ,data.node.id);

        formData.append('name'  ,data.node.text);
        let AjaxSender = $.ajax({
              type: 'POST',
              url: 'node/rename',
              data: formData,
              async: true,
              cache: false,
              contentType: false,
              processData: false,
               success: function(d){
                
              }
            });

         });
        


         $('#jstree_object_tree').on('rename_node.jstree', function(e, data) {
            console.log('remane');
                    let formData = new FormData();

            //formData.append('jpg'  ,this.image);
            formData.append('node'  ,data.node.id);

        formData.append('name'  ,data.node.text);
        let AjaxSender = $.ajax({
              type: 'POST',
              url: 'object/tree/rename',
              data: formData,
              async: true,
              cache: false,
              contentType: false,
              processData: false,
               success: function(d){
                
              }
            });

         });







         $('#jstree_demo_div').on('delete_node.jstree', function(e, data) {

          console.log('delete');
                    let formData = new FormData();

            //formData.append('jpg'  ,this.image);
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
                           // $('#jstree_demo_div').jstree("open_all");
                          });


              }
            });




         });




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






         $('#jstree_demo_div').on('select_node.jstree', function(e, data) {

         	$('#infos').show();
         	$('#jstree_object_tree').show();
         	$('#jstree_demo_div').hide();
         	//creation du breadcrumb
         	
         	$('#breadcrumb').empty();
         	 for (let k in data.node.parents){


				//console.log($('#jstree_demo_div').jstree(true).get_node(data.node.parents[k]).text);
				if($('#jstree_demo_div').jstree(true).get_node(data.node.parents[k]).text !== undefined){
					$('#breadcrumb').prepend('<a href="#!" id=bc_'+$('#jstree_demo_div').jstree(true).get_node(data.node.parents[k]).id+' class="custom-breadcrumb-item">'+$('#jstree_demo_div').jstree(true).get_node(data.node.parents[k]).text+'</a>');
					
					$('#bc_'+$('#jstree_demo_div').jstree(true).get_node(data.node.parents[k]).id).click(function(){
						$('#jstree_demo_div').show();
						$('#jstree_object_tree').hide();
						$('#jstree_demo_div').jstree(true).close_all();
						$('#jstree_demo_div').jstree(true)._open_to($('#jstree_demo_div').jstree(true).get_node(data.node.parents[k]));
						$('#jstree_demo_div').jstree(true).open_node($('#jstree_demo_div').jstree(true).get_node(data.node.parents[k]));


					});
				}

            }
            $('#breadcrumb').append('<a href="#!" id="bc_'+data.node.id+'" class="custom-breadcrumb-item">'+data.node.text+'</a>');
            	$('#bc_'+data.node.id).click(function(){
						$('#jstree_demo_div').show();
						$('#jstree_object_tree').hide();
						$('#jstree_demo_div').jstree(true).close_all();
						$('#jstree_demo_div').jstree(true)._open_to(data.node);
						$('#jstree_demo_div').jstree(true).open_node(data.node);
					});
            //fin de creation breadcrumb


            let ActiveDiv = '#jstree_demo_div';
  

             $('#jstree_object_tree').jstree({
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


      $('#jstree_object_tree').on('select_node.jstree', function(e, data) {

                $('#action').show();
                $('#jstree_demo_div').hide();
      });



        $('#jstree_object_tree').on('create_node.jstree', function(e, data) {
            console.log('hi', data);

            

        let formData = new FormData();

            //formData.append('jpg'  ,this.image);
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





























        $('#jstree_demo_div').on('create_node.jstree', function(e, data) {
            console.log('hi', data);

        let formData = new FormData();

            //formData.append('jpg'  ,this.image);
            formData.append('node'  ,data.node.text);

        formData.append('parent'  ,data.parent);
        let AjaxSender = $.ajax({
              type: 'POST',
              url: 'node/add',
              data: formData,
              async: true,
              cache: false,
              contentType: false,
              processData: false,
               success: function(d){
                 $('#jstree_demo_div').jstree(true).set_id(data.node, d);
              }
            });


        });





        let treeJSON = "";

        $.get( "children", function( data ) {
          treeJSON = JSON.parse(data);
          $('#jstree_demo_div').jstree(true).settings.core.check_callback = true;
          $('#jstree_demo_div').jstree(true).settings.core.data = treeJSON;
          $('#jstree_demo_div').jstree(true).refresh();
         // $('#jstree_demo_div').jstree("open_all");
        });


          let to = false;
          $('#plugins4_q').keyup(function () {
            if(to) { clearTimeout(to); }
            to = setTimeout(function () {
              var v = $('#plugins4_q').val();
              $('#jstree_demo_div').jstree(true).search(v);
            }, 250);
          });
	}


	


	

	footerHTML(){

				let footer = new Footer();

				return footer.addTags();
	}

}