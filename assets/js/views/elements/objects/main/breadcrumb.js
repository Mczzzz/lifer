import superViews from "../../../elements/common/super/views.js";
//import BreadcrumbCommon from '../../../elements/common/ui/breadcrumb.js';
import Card from "../../common/ui/card.js";

export default class breadcrumb extends superViews{
	

	constructor(parent, MyClass,path){

		super(parent, MyClass,path);
		
		this.init();

	}
	
	init(){

		this.container.style.background = "#ffffff";
		this.initChilds();

	}

	initChilds(){

		//on cree 2 compartiments DIV
		//container
		//objects

		//on y ajoute des instances prêtes à l'emploi
	//	this.BC = new BreadcrumbCommon(this.container,"ObjectsbreadCrumb",this.path);


		this.card = new Card(this.container,'ObjectsBreadCrumbCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");
		this.card.setStyle("overflowX", "scroll");


			let ObjectsBreadcrumbElement   = this.card.setElement("ObjectsBreadcrumbElement");
			this.card.setStyleElement(ObjectsBreadcrumbElement,"justifyContent","flex-start");

					this.card.push("TextButton",ObjectsBreadcrumbElement,"addBreadcrumbChild", "mon text");

					this.card.setStyleComponent(ObjectsBreadcrumbElement,"addBreadcrumbChild","fontSize","25px");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,"addBreadcrumbChild","color","green");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,"addBreadcrumbChild","alignItems","center");




	}




	//CALLBACKS

	on_click(data){

		console.log('in on_click');

		let res = {};
		res.element = "breadcrumb";
		res.Event = {};
		res.Event.type = "select";
		res.data = data.data;
		let NodeEvent = new CustomEvent('callBack', {'detail' : res });
       	this.parent.dispatchEvent(NodeEvent);

	}





	//PUBLICS

	loadData(data,element){

//		this.BC.init(element, data ,true);
	}


	hide(){

		this.container.style.display = "none";

	}

	show(){

		this.container.style.display = "";

	}




}