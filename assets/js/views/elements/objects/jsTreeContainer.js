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
		this.JsTreeContainer.insertBefore('<div><input type="text" id="'+id+'" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;"></div>');


		let to = false;
        $('#'+id).keyup(function () {

            if(to) { clearTimeout(to); }

            to = setTimeout(function () {

              var v = $('#'+id).val();
              this.JsTreeContainer.jstree(true).search(v);

            }, 250);


        });


	}



}