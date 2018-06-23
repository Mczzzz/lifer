import LoaderCollection from '../../../../../../services/LoaderCollection.js';

import jstree from 'jstree';

export default class jsTreeContainer {


	constructor(HTMLParent,collection,MyClass){

		//create the div to attach to parent
		this.MyClass = MyClass;
		this.JsTree = document.createElement("div");
		this.JsTree.className = this.MyClass;
		$('.'+HTMLParent).append(this.JsTree);
		this.searchElt = false;
		this.collection = new LoaderCollection(collection);
		this.initJsTree();

	}


	initJsTree(){

			$('.'+this.MyClass).on("deleteNode", (e, data) => this.onDeleteJsTree(e,data));
			$('.'+this.MyClass).on("addType", (e, data) => this.onAddTypeJsTree(e,data));

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
					                    $node = $('.'+this.MyClass).jstree(true).create_node($node);
					                    $('.'+this.MyClass).jstree(true).edit($node);
					                }

									}


				    let rename = {
			                "separator_before": false,
			                "separator_after": false,
			                "label": "Renomer",
			                "action": function (obj) { 
			                   $('.'+this.MyClass).jstree(true).edit($node);
			                }
			            };



					let remove = {

			                "separator_before": false,
			                "separator_after": false,
			                "label": "Supprimer",
			                "action": function (obj) {

			                	$('.'+this.MyClass).trigger( "deleteNode", [{'node' : $node}] );
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

		let node = $('.'+this.MyClass).jstree(true).get_node($('.'+this.MyClass).jstree(true).get_selected()[0]);

     	//ajout d ela node active
        this.breadcrumbTargetDiv.append('<a id="bc_'+node.id+'" style="border-radius: 4px 12px 4px 4px;background: #0288d1;color:white;padding:5px;margin-right: 5px;" class="">'+node.text+'</a>');
        	

        //	this.jsTreeEventBreadcrumb(node);

     	//parsing des parents
     	let i = 1;
     	 for (let k in node.parents){

     	 	let parentNode = $('.'+this.MyClass).jstree(true).get_node(node.parents[k]);

			if(parentNode.text !== undefined){

				i -=0.15;
				
				this.breadcrumbTargetDiv.prepend('<a href="#!" id="bc_'+parentNode.id+'" style="opacity: '+i+';border-radius: 4px 12px 4px 4px;background: #0288d1;color:white;padding:5px;margin-right: 5px" class="">'+parentNode.text+'</a>');
				
		//		this.jsTreeEventBreadcrumb(parentNode);

			}

        }

	}


	hide(){
		$('.'+this.MyClass).hide();
	}


	deselectAll(){

		$('.'+this.MyClass).jstree(true).deselect_all();

	}


	closeAll(){


		$('.'+this.MyClass).jstree(true).close_all();


	}

	openNode(id){

		let node = $('.'+this.MyClass).jstree(true).get_node(id);
		console.log(node);
		$('.'+this.MyClass).jstree(true).open_node(node);


	}



////LISTENER -> PARENT
	initEventsElementSelect(myMethod){

		$('.'+this.MyClass).on("select_node.jstree", function(e,data){

			let ev = new CustomEvent(myMethod, {'detail' : data});
            window.dispatchEvent(ev);

		});

	}



}