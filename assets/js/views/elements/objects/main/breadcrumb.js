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
		this.container.style.display = "none";

	}



	BackToMe(e, data,element){

		let res = {};
		res.element = element;
		res.Event = {};
		res.Event.type = "click";
		res.data = data
		
		this.callBackToParent(res);

	}



	//PUBLICS

	populate(datas){


		console.log(datas);

		this.card = new Card(this.container,'ObjectsBreadCrumbCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "5px");
		this.card.setStyle("background", "transparent");
		this.card.setStyle("overflowX", "scroll");


			let ObjectsBreadcrumbElement   = this.card.setElement("ObjectsBreadcrumbElement");
			this.card.setStyleElement(ObjectsBreadcrumbElement,"justifyContent","flex-start");


			for(let node of datas) {

				let className = "addBreadcrumbChild_"+node.id;

				className = this.card.push("TextButton",ObjectsBreadcrumbElement,className, node.text);

					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"fontSize","15px");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"fontFamily","'Titillium Web',sans-serif,Arial,sans-serif");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"whiteSpace","nowrap");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"color","white");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"alignItems","center");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"borderRadius","4px 12px 4px 4px");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"background","#0288d1");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"padding","5px");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"marginRight","5px");
					this.card.setStyleComponent(ObjectsBreadcrumbElement,className,"opacity","1");


				className.addEventListener("click",(e)=>this.BackToMe(e,node,className));

			}


	}


	hide(){

		this.container.style.display = "none";

	}

	show(){

		this.container.style.display = "";

	}




}