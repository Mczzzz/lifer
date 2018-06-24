import LoaderCollection from '../../../../../../services/LoaderCollection.js';

import swal from 'sweetalert';
import jstree from 'jstree';

export default class jsTreeContainer {


	constructor(HTMLParent,collection,MyClass){

		//create the div to attach to parent
		this.MyClass = MyClass;
		this.JsTree = document.createElement("div");
		this.JsTree.className = this.MyClass;
		this.HTMLParent = $('.'+HTMLParent);
		this.HTMLParent.append(this.JsTree);
		this.searchElt = false;
		this.BreadEventCallBack = false;
		this.collection = new LoaderCollection(collection);
		this.initJsTree();

	}

	getHTMLParent(){
		return this.HTMLParent;
	}



	initJsTree(){

			/*this.HTMLParent.css("padding", "10px");*/
			$('.'+this.MyClass).on("deleteNode", (e, data) => this.onDeleteJsTree(e,data));
			$('.'+this.MyClass).on("addType", (e, data) => this.onAddTypeJsTree(e,data));

			let JqElName = this.MyClass;

			$('.'+this.MyClass).jstree({
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
			      	console.log('jstree context menu before return');
			      	console.log($node);

			      	let create = {
					                "separator_before": false,
					                "separator_after": false,
					                "label": "Ajouter",
					                "action": function (obj) { 
					                    $node = $('.'+JqElName).jstree(true).create_node($node);
					                    $('.'+JqElName).jstree(true).edit($node);
					                }

									}


				    let rename = {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Renomer",
			                "action": function (obj) { 
			                   $('.'+JqElName).jstree(true).edit($node);
			                }
			            };



					let remove = {

			                "separator_before": false,
			                "separator_after": false,
			                "label": "Supprimer",
			                "action": function (obj) {

			                	$('.'+JqElName).trigger( "deleteNode", [{'node' : $node}] );
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
							                //   $('.'+this.MyClass).trigger( "addType", [{'node' : $node}] );
							                }
			                			},
			                			"AssignChilds" : {
			               					"separator_before": true,
											"separator_after": false,
			                				"label": "Types enfants",			             
							                "action": function (obj) { 
							                 //  $('.'+this.MyClass).trigger( "addChildType", [{'node' : $node}] );
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

			$('.'+this.MyClass).jstree(true).hide_dots();

	}

//LOAD DATAS
	loadData(ParentNode = false){

		let dataList = this.collection.getList(ParentNode.id);
		
			for (let k in dataList){

				if (dataList[k].parent == '#') dataList[k].parent = 0;

			}

		let RootName = "Mon Univers";

		if(ParentNode != false) RootName = ParentNode.text;

		let MyUnivers = {'id': 0, 'parent': "#", 'text': RootName, type: ""};
		dataList.unshift(MyUnivers);

        $('.'+this.MyClass).jstree(true).settings.core.data = dataList;
        $('.'+this.MyClass).jstree(true).refresh();
	}
//LOAD DATAS - END


//SEARCH
	linkSearch(element){

		this.searchElement = $('.'+element);

		this.searchElement.on("keyup", (e)=> this.linkSearchEvent(e));
		this.searchElt = true;

	}

	unlinkSearch(){

		if(this.searchElt){
			this.searchElement.off("keyup", (e)=> this.linkSearchEvent(e));
			this.searchElt = false;
		}
		

	}

	linkSearchEvent(e){

            $('.'+this.MyClass).jstree(true).search(this.searchElement.val());
    }
//SEARCH - END



//BREADCRUMB

	breadcrumbize(breadcrumb){

		this.breadcrumbTargetDiv = $('.'+breadcrumb);
		this.breadcrumbTargetDiv.empty();
		this.breadcrumbTargetDiv.css("background-color", "white");
		this.breadcrumbTargetDiv.css("padding", "10px");

		let node = $('.'+this.MyClass).jstree(true).get_node($('.'+this.MyClass).jstree(true).get_selected()[0]);

     	//ajout d ela node active
        this.breadcrumbTargetDiv.append('<a id="bc_'+node.id+'" style="font-family: \'Titillium Web\',sans-serif,Arial,sans-serif;border-radius: 4px 12px 4px 4px;background: #0288d1;color:white;padding:5px;margin-right: 5px;" class="">'+node.text+'</a>');
        	

        this.jsTreeEventBreadcrumb(node);

     	//parsing des parents
     	let i = 1;
     	 for (let k in node.parents){

     	 	let parentNode = $('.'+this.MyClass).jstree(true).get_node(node.parents[k]);

			if(parentNode.text !== undefined){

				i -=0.15;
				
				this.breadcrumbTargetDiv.prepend('<a id="bc_'+parentNode.id+'" style="font-family: \'Titillium Web\',sans-serif,Arial,sans-serif;opacity: '+i+';border-radius: 4px 12px 4px 4px;background: #0288d1;color:white;padding:5px;margin-right: 5px" class="">'+parentNode.text+'</a>');
				
		        this.jsTreeEventBreadcrumb(parentNode);

			}

        }

        this.breadcrumbTargetDiv.scrollLeft(this.breadcrumbTargetDiv[0].scrollWidth);

	}


	jsTreeEventBreadcrumb(node){


		$('#bc_'+node.id).on("click", (e) => this.openNode(e,node));

		
	}


	openNode(e,node){

		$('.'+this.MyClass).jstree(true).clear_search();
		$('.'+this.MyClass).jstree(true).close_all();
		$('.'+this.MyClass).jstree(true)._open_to(node);
		$('.'+this.MyClass).jstree(true).open_node(node);
		//clearbreadcrumb
		this.breadcrumbTargetDiv.empty();
		this.breadcrumbTargetDiv.css("padding", "0px");
		//$('.'+this.MyClass).show();
		if(this.BreadEventCallBack != false){
			let ev = new CustomEvent(this.BreadEventCallBack, {'detail' : node});
        	window.dispatchEvent(ev);
		}

	}





	hide(){
		$('.'+this.MyClass).hide();
		this.HTMLParent.css("padding", "0px");
		this.deselectAll();
		this.closeAll();
	}

	show(){
		$('.'+this.MyClass).show();
		this.HTMLParent.css("padding", "10px");
	}



	deselectAll(){

		$('.'+this.MyClass).jstree(true).deselect_all();

	}


	closeAll(){


		$('.'+this.MyClass).jstree(true).close_all();


	}



////LISTENER -> PARENT
	initEventsElementSelect(myMethod){

		$('.'+this.MyClass).on("select_node.jstree", function(e,data){

			let ev = new CustomEvent(myMethod, {'detail' : data});
            window.dispatchEvent(ev);

		});


		$('.'+this.MyClass).on("rename_node.jstree", (e,data)=>this.onRenameJsTree(e,data));
		$('.'+this.MyClass).on("create_node.jstree", (e,data)=>this.onCreateJsTree(e,data));


	}


	initEventsBreadSelect(myMethod){

		this.BreadEventCallBack = myMethod;

	}




//MISE A JOUR COLLECTION
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




}