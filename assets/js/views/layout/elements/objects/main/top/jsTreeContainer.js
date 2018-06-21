import LoaderCollection from '../../../../../../services/LoaderCollection.js';

import jstree from 'jstree';

export default class jsTreeContainer {


	constructor(HTMLParent,collection,MyClass,ParentINode= false){

		//create the div to attach to parent
		this.MyClass = MyClass;
		this.JsTree = document.createElement("div");
		this.JsTree.className = this.MyClass;
		$('.'+HTMLParent).append(this.JsTree);
		this.collection = new LoaderCollection(collection);
		this.ParentNode = ParentNode;
		this.initJsTree();
		this.jsTreeData();
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
	jsTreeData(){

		let dataList = this.collection.getList(this.ParentNode.id);
		
			for (let k in dataList){

				if (dataList[k].parent == '#') dataList[k].parent = 0;

			}

		let RootName = "Mon Univers";

		if(this.parentNode != false) RootName = this.ParentNode.name;

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

	}

	unlinkSearch(){

		this.searchElement.off("keyup", (e)=> this.linkSearchEvent(e))

	}

	linkSearchEvent(e){

            $('.'+this.MyClass).jstree(true).search(this.searchElement.val());
    }
//SEARCH - END


////LISTENER -> PARENT
	initEventsElementSelect(myMethod){

		$('.'+this.MyClass).on("select_node.jstree", (e,data)=> myMethod(e,data));

	}



}