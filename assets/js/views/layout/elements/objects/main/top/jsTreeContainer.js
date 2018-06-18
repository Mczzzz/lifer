import LoaderCollection from '../../../../../../services/LoaderCollection.js';

import jstree from 'jstree';

export default class jsTreeContainer {


	constructor(HTMLParent,collection){
		console.log('in contructor');
		//create the div to attach to parent
		this.JsTreeContain = document.createElement("div");
		this.JsTreeContain.className = "JsTreeContain";
		$('.'+HTMLParent).append(this.JsTreeContain);

		this.collection = new LoaderCollection(collection);

		this.initJstreeContainer();

		this.getJstreeContainerElements();

	}


	initJstreeContainer(){

		let HtmlElementTree = $('.JsTreeContain');

/*			this.JsTreeContainer.on("deleteNode", (e, data) => this.onDeleteJsTree(e,data));
			this.JsTreeContainer.on("addType", (e, data) => this.onAddTypeJsTree(e,data));*/

			$('.JsTreeContain').jstree({
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

			$('.JsTreeContain').jstree(true).hide_dots();

	}


	getJstreeContainerElements(){


		let dataList = this.collection.getList(this.parentId);

		

			for (let k in dataList){

				if (dataList[k].parent == '#') dataList[k].parent = 0;

			}


		let RootName = "Mon Univers";

		if(this.parentId != false) RootName = this.parentName;


			let MyUnivers = {'id': 0, 'parent': "#", 'text': RootName, type: ""};
			dataList.unshift(MyUnivers);

		

        $('.JsTreeContain').jstree(true).settings.core.data = dataList;
        $('.JsTreeContain').jstree(true).refresh();
	}


}