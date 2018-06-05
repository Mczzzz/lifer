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

		return `
			<div id="main">
		      <!-- START WRAPPER -->
		      <div class="wrapper">

				    <div class="custom-breadcrumb">
				      <div class="col s12">
				        <a href="#!" class="breadcrumb">First</a>
				        <a href="#!" class="breadcrumb">Second</a>
				        <a href="#!" class="breadcrumb">Third</a>
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
				        <div id="action">
				        <button id="bInfos" name="button">Infos</button>
				        <button name="button">Evènements</button>
				        </div>
				        <hr>
				        <div id="infos">
				          Nom :<input type="text" id="infosName" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;">
				          <br />
				          <input id="InfosPhoto" type="file" accept="image/*"  capture="camera" placeholder="titre info">
				          <br />
				          <button name="button">+ Text /lien</button>
				          <button name="button">+ Photo/video/fichier</button>
				          <button name="button">+ Valeur</button>
				          <br />
				          <textarea id="InfosText" rows="4" cols="50" placeholder="Ton Texte"></textarea>
				          <br />
				          <input id="InfosValeur" type="number" step="any"  placeholder="1000">
				          <select id="unityType"></select>
				          <select id="unities"></select>
				          <br />
				          <button id="infosValid" name="button">Enregistrer</button>
				        </div>
				        <hr>

				        <div id="evenement"></div>
 
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


	activeJs(){

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



      $('#bInfos').on('click', function(e, data) {

                $('#infos').show();
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

            let ActiveDiv = '#jstree_demo_div';
            console.log('selection object');

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