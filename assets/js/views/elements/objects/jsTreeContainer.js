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
	}






	initJstreeContainer(){

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

			this.JsTreeContainer.jstree(true).hide_dots();


		}






	getJstreeContainerElements(){


        this.JsTreeContainer.jstree(true).settings.core.data = this.collection.getList(this.parentId);
        this.JsTreeContainer.jstree(true).refresh();

	}










	linkSearchElement(id){

		if (!$('#'+id).length){

			$('<div><input type="text" id="'+id+'" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver; margin-bottom : 10px" placeholder="Recherche"></div>').insertBefore(this.JsTreeContainer);

			document.querySelector("#"+id).addEventListener("keyup", (e)=> this.linkSearchEvent(e));


		}


	}


	linkSearchEvent(e){

           	this.JsTreeContainer.jstree(true).search(e.srcElement.value);

	}






	initBreadCrumb(){


		$('<div class="custom-'+this.breadCrumbElt+'"><div id="'+this.breadCrumbElt+this.suffixe+'" class="col s12"></div></div>').insertBefore(this.JsTreeContainer);


		this.initBreadCrumbCSS(this.breadCrumbElt);

	}


	initBreadCrumbCSS(id){

		let css = document.createElement("style");
			css.type = "text/css";
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




	jsTreeBreadcrumb(JsTreeDiv,breadcrumbTargetDiv,node){
         	
         	breadcrumbTargetDiv.empty();

         	//ajout d ela node active
            breadcrumbTargetDiv.append('<a href="#!" id="bc_'+node.id+'" class="custom-breadcrumb-item">'+node.text+'</a>');
            	

            	this.jsTreeEventBreadcrumb(node,JsTreeDiv);

         	//parsing des parents
         	 for (let k in node.parents){

         	 	let parentNode = JsTreeDiv.jstree(true).get_node(node.parents[k]);

				if(parentNode.text !== undefined){
					breadcrumbTargetDiv.prepend('<a href="#!" id=bc_'+parentNode.id+' class="custom-breadcrumb-item">'+parentNode.text+'</a>');
					
					this.jsTreeEventBreadcrumb(parentNode,JsTreeDiv);

				}

            }

            


            
	}



	jsTreeEventBreadcrumb(node,JsTreeDiv){


		$('#bc_'+node.id).click(function(){

			JsTreeDiv.show();
			JsTreeDiv.jstree(true).close_all();
			JsTreeDiv.jstree(true)._open_to(node);
			JsTreeDiv.jstree(true).open_node(node);
			//
			JsTreeDiv.trigger('ElementDisplay');			
		});
	
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
	}



//EVENT LAYOUT


	onSelectJsTree(e,data){

		let NodeEvent = new CustomEvent('ContainerSelect', {'detail' : {'container' : this.container, 'id' : data.node.id }});
        window.dispatchEvent(NodeEvent);


    //   	this.jsTreeBreadcrumb(this.JsTreeContainer,$('#'+this.breadCrumbElt+this.suffixe),data.node);

/*
       		            "contextmenu": {   

				    "items": function($node) {

				        var tree = this.JsTreeContainer.jstree(true);

				        return {
				            "Create": {
				                "separator_before": false,
				                "separator_after": false,
				                "label": "Create",
				                "action": function (obj) { 
				                    $node = tree.create_node($node);
				                    tree.edit($node);
				                }
				            },
				            "Rename": {
				                "separator_before": false,
				                "separator_after": false,
				                "label": "Rename",
				                "action": function (obj) { 
				                    tree.edit($node);
				                }
				            },                         
				            "Remove": {
				                "separator_before": false,
				                "separator_after": false,
				                "label": "Remove",
				                "action": function (obj) { 
				                    tree.delete_node($node);
				                }
				            }
				        };
				    }
			    },*/



	}


	onMinimize(){

		//calulate and show dreabcrumb
		this.jsTreeBreadcrumb(this.JsTreeContainer,$('#'+this.breadCrumbElt+this.suffixe),data.node);
		$('#'+this.searchId).hide();

	}


	onMaximize(){

		//hide du breadcrumb
		$('#'+this.breadCrumbElt+this.suffixe).hide();
		$('#'+this.searchId).show();

	}


//ACTIONS




	onRenameJsTree(e,data){

       	let formData = new FormData();

        formData.append('node',data.node.id);
        formData.append('name',data.node.text);

        this.collection.rename(formData);

        
	}


	onDeleteJsTree(e,data){

       	let formData = new FormData();

        formData.append('node'  ,data.node.id);
        formData.append('parent'  ,data.parent);

        this.collection.delete(formData);
       
		this.getJstreeContainerElements();

	}


	onCreateJsTree(e,data){

		let formData = new FormData();

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