import SvcBackEndComm from '../../services/BackEndComm.js';

export default class jsTreeContainer {




	constructor(container){


		//va faire l'init de l'arbre
			//charger les data
			//afficher les éléments
			//link du breadcrumb + recherche

		this.JsTreeContainer = container;

		this.initJstreeContainer();
		this.getJstreeContainerElements();



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

		}






	getJstreeContainerElements(){

		let GetData = new SvcBackEndComm();
		let result = GetData.ajaxSend('GET','children');

        this.JsTreeContainer.jstree(true).settings.core.data = JSON.parse(result.responseText);
        this.JsTreeContainer.jstree(true).refresh();

	}







}