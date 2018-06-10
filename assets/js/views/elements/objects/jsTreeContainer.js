import swal from 'sweetalert';

export default class jsTreeContainer {




	constructor(container,suffixe,collection, data = false ){


		console.log(collection);

		this.container = container;

		this.suffixe = suffixe;

		this.JsTreeContainer = $('#'+ this.container);

		this.searchId = 'JTC-Search'+ this.suffixe;

		this.breadCrumbElt = 'breadcrumb';

		this.collection = collection;

		this.parentId = data;

		this.initJstreeContainer();

		this.getJstreeContainerElements();


		this.linkSearchElement(this.searchId);

		this.initEventsJsTree();

		
		this.initBreadCrumb();

		this.breadcrumbTargetDiv = $('#'+this.breadCrumbElt+this.suffixe);
	}






	initJstreeContainer(){

			let HtmlElementTree = this.JsTreeContainer;

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

			      //  var tree = this.JsTreeContainer.jstree(true);

			        return {
			            "Create": {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Create",
			                "action": function (obj) { 
			                    $node = HtmlElementTree.jstree(true).create_node($node);
			                    HtmlElementTree.jstree(true).edit($node);
			                }
			            },
			            "Rename": {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Rename",
			                "action": function (obj) { 
			                    HtmlElementTree.jstree(true).edit($node);
			                }
			            },                         
			            "Remove": {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Remove",
			                "action": function (obj) { 
			                    HtmlElementTree.jstree(true).delete_node($node);
			                }
			            }
			        };
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




	setParentId(parentId){

		this.parentId = parentId;

	}

	getJstreeContainerElements(){


        this.JsTreeContainer.jstree(true).settings.core.data = this.collection.getList(this.parentId);
        this.JsTreeContainer.jstree(true).refresh();

	}










	linkSearchElement(id){

		if (!$('#'+id).length){

			$('<div><input type="text" id="'+id+'" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver; margin-bottom : 10px" placeholder="Recherche"></div>').insertBefore(this.JsTreeContainer);

			document.querySelector("#"+id).addEventListener("keyup", (e)=> this.linkSearchEvent(e));

		}else{

			$("#"+id).show();

		}

		
	}


	linkSearchEvent(e){
		

            this.JsTreeContainer.jstree(true).search(e.srcElement.value);

            this.notifyLayout();


	}


	notifyLayout(){

			let NodeEvent = "";

		    if(this.parentId){

	           	let NodeEvent = new CustomEvent('childAction', {'detail' : {'container' : this.container }});

        	}else{
        		let NodeEvent = new CustomEvent('parentAction', {'detail' : {'container' : this.container }});
	        	
        	}
        	
			window.dispatchEvent(NodeEvent);

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
            this.breadcrumbTargetDiv.append('<a href="#!" id="bc_'+node.id+'" class="custom-breadcrumb-item">'+node.text+'</a>');
            	

            	this.jsTreeEventBreadcrumb(node);

         	//parsing des parents
         	 for (let k in node.parents){

         	 	let parentNode = this.JsTreeContainer.jstree(true).get_node(node.parents[k]);

				if(parentNode.text !== undefined){
					
					this.breadcrumbTargetDiv.prepend('<a href="#!" id=bc_'+parentNode.id+' class="custom-breadcrumb-item">'+parentNode.text+'</a>');
					
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
		console.log("on init les event sur le jstree");
		this.JsTreeContainer.on("select_node.jstree", (e,data)=>this.onSelectJsTree(e,data));
		this.JsTreeContainer.on("rename_node.jstree", (e,data)=>this.onRenameJsTree(e,data));
		this.JsTreeContainer.on("delete_node.jstree", (e,data)=>this.onDeleteJsTree(e,data));
		this.JsTreeContainer.on("create_node.jstree", (e,data)=>this.onCreateJsTree(e,data));

		this.JsTreeContainer.on("deleteObject", (e,data)=>this.onDeleteJsTree(e,data));
	}



//EVENT LAYOUT


	onSelectJsTree(e,data){


		if(!this.parentId){

			let NodeEvent = new CustomEvent('ContainerSelect', {'detail' : {'container' : this.container, 'id' : data.node.id }});
        	window.dispatchEvent(NodeEvent);

		}else{

			let NodeEvent = new CustomEvent('childAction', {'detail' : {'container' : this.container }});
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

	console.log('in delete');
	console.log(e);
	console.log(data);

	let JstreeHTML = this.jsTreeContainer;
	//Mesaage d'alerte
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
	        formData.append('parent'  ,data.parent);

	        $result = this.collection.delete(formData);
	       
			this.getJstreeContainerElements();


		    swal("Poof! à la poubelle ;)", {
		      icon: "success",
		    });



		  } else {
		    swal("t'inquietes ta data est tjs la");
		    this.JstreeHTML.jstree(true).create_node(data.node);
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
		console.log(result);
		this.JsTreeContainer.jstree(true).set_id(data.node, result.data);


	}


	onDNDJstree(e,data,ref){

  		let formData = new FormData();

        formData.append('node'  ,ref.get_node(data.data.nodes[0]).id);
        formData.append('parent'  ,ref.get_node(data.data.nodes[0]).parent);

        this.collection.move(formData);

	}






}