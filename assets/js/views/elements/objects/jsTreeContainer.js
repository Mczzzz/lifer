import SvcBackEndComm from '../../../services/BackEndComm.js';

export default class jsTreeContainer {




	constructor(container){


		//va faire l'init de l'arbre
			//charger les data
			//afficher les éléments
			//link du breadcrumb + recherche

		this.container = container;
		console.log(this.container);


		this.JsTreeContainer = $('#'+ container);

		this.initJstreeContainer();

		this.getJstreeContainerElements();

		this.linkSearchElement();

		this.initEventsJsTree();

		this.breadCrumbElt = 'breadcrumb';

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

		}






	getJstreeContainerElements(){

		let GetData = new SvcBackEndComm();
		let result = GetData.ajaxSend('GET','children');

        this.JsTreeContainer.jstree(true).settings.core.data = JSON.parse(result.responseText);
        this.JsTreeContainer.jstree(true).refresh();

	}










	linkSearchElement(){

		let id = 'JTC-Search';

		$('<div><input type="text" id="'+id+'" value="" class="input" style=" display:block; padding:4px; border-radius:4px; border:1px solid silver;"></div>').insertBefore(this.JsTreeContainer);

		document.querySelector("#"+id).addEventListener("keyup", (e)=> this.linkSearchEvent(e));

	}


	linkSearchEvent(e){

           	this.JsTreeContainer.jstree(true).search(e.srcElement.value);

	}






	initBreadCrumb(){


		$('<div class="custom-'+this.breadCrumbElt+'"><div id="'+this.breadCrumbElt+'" class="col s12"></div></div>').insertBefore(this.JsTreeContainer);


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






	onSelectJsTree(e,data){

       	this.jsTreeBreadcrumb(this.JsTreeContainer,$('#'+this.breadCrumbElt),data.node);

	}


	onRenameJsTree(e,data){

       	let formData = new FormData();

        formData.append('node',data.node.id);
        formData.append('name',data.node.text);

		let GetData = new SvcBackEndComm();
		let result = GetData.ajaxSend('POST','node/rename',formData);
        
	}


	onDeleteJsTree(e,data){

       	let formData = new FormData();

        formData.append('node'  ,data.node.id);
        formData.append('parent'  ,data.parent);

		let GetData = new SvcBackEndComm();
		let result = GetData.ajaxSend('POST','node/delete',formData);
       
		this.getJstreeContainerElements();

	}


	onCreateJsTree(e,data){

		console.log("on passe");

		let formData = new FormData();

        formData.append('node'    ,data.node.text);
        formData.append('parent'  ,data.parent);

        let GetData = new SvcBackEndComm();
		let result = GetData.ajaxSend('POST','node/add',formData);

		this.JsTreeContainer.jstree(true).set_id(data.node, result.responseText);


	}









}