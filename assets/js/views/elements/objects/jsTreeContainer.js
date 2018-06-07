import SvcBackEndComm from '../../../services/BackEndComm.js';

export default class jsTreeContainer {




	constructor(container){


		//va faire l'init de l'arbre
			//charger les data
			//afficher les éléments
			//link du breadcrumb + recherche

		this.JsTreeContainer = container;

		this.initJstreeContainer();

		this.getJstreeContainerElements();

		this.linkSearchElement();

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




	linkSearchElement(){

		let id = 'JTC-Search';
		//CREATE PREVIOUS SIBLING OF DIV CONTAINER
		$('<div><input type="text" id="'+id+'" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;"></div>').insertBefore(this.JsTreeContainer);


		document.querySelector("#"+id).addEventListener("keyup", (e)=> this.eventLink(e));



	}


	eventLink(e){

		{
			console.log(e.KeyboardEvent);
			let v = "fr";
           	this.JsTreeContainer.jstree(true).search(e.SrcElement);
		}


	}


}