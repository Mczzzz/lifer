import swal from 'sweetalert';

export default class jsTreeContainer {




	constructor(container,suffixe,collection, data = false,dataName ){




		this.container = container;

		this.suffixe = suffixe;

		this.JsTreeContainer = $('#'+ this.container);

		this.searchId = 'JTC-Search'+ this.suffixe;

		this.breadCrumbElt = 'breadcrumb';

		this.collection = collection;

		this.parentId = data;
		this.parentName = dataName;

		this.initJstreeContainer();

		this.getJstreeContainerElements();


		this.linkSearchElement(this.searchId);

		this.initEventsJsTree();

		
		this.initBreadCrumb();

		this.breadcrumbTargetDiv = $('#'+this.breadCrumbElt+this.suffixe);


	}






	initJstreeContainer(){


			let HtmlElementTree = this.JsTreeContainer;

			this.JsTreeContainer.on("deleteNode", (e, data) => this.onDeleteJsTree(e,data));
			this.JsTreeContainer.on("addType", (e, data) => this.onAddTypeJsTree(e,data));

			this.JsTreeContainer.jstree({
	          'core' : {
	          		'themes': {
			            'name': 'proton',
			            'responsive': true
			        },
	              	"check_callback" : true
	                      },

				"contextmenu": {   

			    "items": function($node) {



			      	let create = {
					                "separator_before": false,
					                "separator_after": false,
					                "label": "Ajouter",
					                "action": function (obj) { 
					                    $node = HtmlElementTree.jstree(true).create_node($node);
					                    HtmlElementTree.jstree(true).edit($node);
					                }

									}


				    let rename = {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Renomer",
			                "action": function (obj) { 
			                    HtmlElementTree.jstree(true).edit($node);
			                }
			            };



					let remove = {

			                "separator_before": false,
			                "separator_after": false,
			                "label": "Supprimer",
			                "action": function (obj) {

			                	HtmlElementTree.trigger( "deleteNode", [{'node' : $node}] );
			                	}
			                };

			        let type = {
			                "separator_before": true,
			                "separator_after": false,
			                "label": "Type",
			                "submenu": { "Assign" : {
			               					"separator_before": true,
											"separator_after": false,
			                				"label": "Assigner",			             
							                "action": function (obj) { 
							                   HtmlElementTree.trigger( "addType", [{'node' : $node}] );
							                }
			                			},
			                			"AssignChilds" : {
			               					"separator_before": true,
											"separator_after": false,
			                				"label": "Types enfants",			             
							                "action": function (obj) { 
							                   HtmlElementTree.trigger( "addChildType", [{'node' : $node}] );
							                }
			                			}
			                }


			            };

					
					let res = {};
					res.Create = create;
					if($node.id > 0){
						res.Rename = rename;
						res.Remove = remove;
						res.Type = type;
					}
			        
			        return res;

/*			        {
			            "Create": {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Ajouter",
			                "action": function (obj) { 
			                    $node = HtmlElementTree.jstree(true).create_node($node);
			                    HtmlElementTree.jstree(true).edit($node);
			                }
			            },
			            "Rename": {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Renomer",
			                "action": function (obj) { 
			                    HtmlElementTree.jstree(true).edit($node);
			                }
			            },                         
			            "Remove": {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Supprimer",
			                "action": function (obj) {

			                	HtmlElementTree.trigger( "deleteNode", [{'node' : $node}] );
			                	}
			                }
			            }*/
			        }
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

			this.JsTreeContainer.jstree(true).hide_dots();

			this.JsTreeContainer.show();
		}




	setParentId(parentId,parentName){

		this.parentId = parentId;
		this.parentName = parentName;

	}














	initBreadCrumb(){


		if (!$('#'+this.breadCrumbElt+this.suffixed).length){

			$('<div class="custom-'+this.breadCrumbElt+'"><div id="'+this.breadCrumbElt+this.suffixe+'" class="col s12"></div></div>').insertBefore(this.JsTreeContainer);

		}

		this.initBreadCrumbCSS(this.breadCrumbElt);

	}


	initBreadCrumbCSS(id){

		let css = document.createElement("style");
			css.type = "text/css";
			css.id = "bc_css_style";
			css.innerHTML = `

							.custom-`+id+` {
							    padding-left: 20px;
							    padding-bottom: 5px;
							}


							.custom-`+id+`-item { 
								color: red;

							}

							.custom-`+id+`-item::before { 
								content: " > ";

							}

							`;
			document.body.appendChild(css);
	}





	jsTreeBreadcrumb(){

         	this.breadcrumbTargetDiv.empty();

         	let node = this.JsTreeContainer.jstree(true).get_node(this.JsTreeContainer.jstree(true).get_selected()[0]);
         	
         	//ajout d ela node active
            this.breadcrumbTargetDiv.append('<a id="bc_'+node.id+'" style="border-radius: 4px 12px 4px 4px;background: #0288d1;color:white;padding:5px;margin-right: 5px;" class="">'+node.text+'</a>');
            	

            	this.jsTreeEventBreadcrumb(node);

         	//parsing des parents
         	let i = 1;
         	 for (let k in node.parents){

         	 	let parentNode = this.JsTreeContainer.jstree(true).get_node(node.parents[k]);

				if(parentNode.text !== undefined){

					i -=0.15;
					
					this.breadcrumbTargetDiv.prepend('<a href="#!" id="bc_'+parentNode.id+'" style="opacity: '+i+';border-radius: 4px 12px 4px 4px;background: #0288d1;color:white;padding:5px;margin-right: 5px" class="">'+parentNode.text+'</a>');
					
					this.jsTreeEventBreadcrumb(parentNode);

				}

            }

            


            
	}



	jsTreeEventBreadcrumb(node){


		$('#bc_'+node.id).on("click", (e) => this.onMaximize(e,node));

		
	}



/////////////////////////////////
//EVENTS
/////////////////////////////////


	//add All Events on Jstree
	initEventsJsTree(){

		this.JsTreeContainer.on("select_node.jstree", (e,data)=>this.onSelectJsTree(e,data));
		this.JsTreeContainer.on("rename_node.jstree", (e,data)=>this.onRenameJsTree(e,data));
		this.JsTreeContainer.on("create_node.jstree", (e,data)=>this.onCreateJsTree(e,data));

	}



//EVENT LAYOUT


	onSelectJsTree(e,data){


		if(!this.parentId){

			let NodeEvent = new CustomEvent('ContainerSelect', {'detail' : {'container' : this.container, 'id' : data.node.id, 'name' : data.node.text }});
        	window.dispatchEvent(NodeEvent);

		}else{

			let NodeEvent = new CustomEvent('childAction', {'detail' : {'container' : this.container, 'id' : data.node.id, 'name' : data.node.text }});
        	window.dispatchEvent(NodeEvent);

		}
	


	}


	onMinimize(hideBC = false){


		
		if(hideBC){
			$('#'+this.breadCrumbElt+this.suffixe).hide();
		}else{
			this.jsTreeBreadcrumb();
			$('#'+this.breadCrumbElt+this.suffixe).show();
		}
		

		$('#'+this.searchId).hide();
		this.JsTreeContainer.hide();

	}


	onMaximize(e,node){

		//hide du breadcrumb
		$('#'+this.breadCrumbElt+this.suffixe).hide();
		$('#'+this.searchId).show();
		$('#'+this.searchId).val('');
		this.JsTreeContainer.jstree(true).clear_search();
		this.JsTreeContainer.jstree(true).close_all();
		this.JsTreeContainer.jstree(true)._open_to(node);
		this.JsTreeContainer.jstree(true).open_node(node);
		this.JsTreeContainer.show();

		if(!this.parentId){

			let NodeEvent = new CustomEvent('parentAction', {'detail' : {'container' : this.container}});
        	window.dispatchEvent(NodeEvent);
		}


	}


//ACTIONS




	onRenameJsTree(e,data){

       	let formData = new FormData();

        formData.append('node',data.node.id);
        formData.append('name',data.node.text);

        this.collection.rename(formData);

        
	}


	onDeleteJsTree(e,data){



	let JstreeHTML = this.jsTreeContainer;


		swal({
		  title: "t sur ???",
		  text: "Ctrl-Z n'est pas implémenté alors réfléchis bien !",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})

		.then((willDelete) => {
		  if (willDelete) {


		  	let formData = new FormData();

	        formData.append('node'  ,data.node.id);
	        formData.append('parent'  ,data.node.parent);

	        let result = this.collection.delete(formData);

	        if(result.error == 0){

	        	this.JsTreeContainer.jstree(true).delete_node(data.node);
	       
				this.getJstreeContainerElements();

	        }



		    swal("Poof! à la poubelle ;)", {
		      icon: "success",
		    });




		  } else {

		    swal("t'inquietes ta data est tjs la");
		    return false;
		  }
		});



       	

	}






	onCreateJsTree(e,data){

		let formData = new FormData();

		if(this.parentId){

			formData.append('container'    ,this.parentId);
		
		}

        formData.append('node'    ,data.node.text);
        formData.append('parent'  ,data.parent);

		let result = this.collection.create(formData);

		this.JsTreeContainer.jstree(true).set_id(data.node, result.data);


	}


	onDNDJstree(e,data,ref){

  		let formData = new FormData();

        formData.append('node'  ,ref.get_node(data.data.nodes[0]).id);
        formData.append('parent'  ,ref.get_node(data.data.nodes[0]).parent);

        this.collection.move(formData);

	}



	onAddTypeJsTree(e,data){


		swal({
		  title: "Choisissez son type",
		  text: "Cela vous permet d'hériter de propriétés communes",
		  icon: "info",
		  buttons: {
		  		cancel:{
		  			text: "Annuler",
			    	closeModal: true
		  		}

			},
		  dangerMode: false,
		})
		.then((value) => {

			switch (value){

				case "other" :

					 swal("Oh noes!", "The AJAX request failed!", "error");
					 break;


			}



			})


	}



}