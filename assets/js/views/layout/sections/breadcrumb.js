export default class Breadcrumb {


	constructor(){

		this.elParent = $(".breadcrumb");
		this.elParent.empty();
		this.elParent.css("background-color", "white");
		this.elParent.css("padding", "10px");

	}


	skinner(){



	}


	init(ClassElement, data,first = false){

		let element = document.createElement("div");
		element.className = ClassElement;
		
		if(first){
			this.elParent.prepend(element);
		}else{
			this.elParent.append(element);
		}
		
		console.log(data);

		this.setData(data,element);

	}

	setData(datas,element){


		for (let data of datas){

			let bc = document.createElement("a");
			bc.id = data.id;
			bc.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
			bc.style.borderRadius = "4px 12px 4px 4px";
			bc.style.background   = "#0288d1";
			bc.style.color        = "white";
			bc.style.padding      = "5px";
			bc.style.marginRight  = "5px";
			bc.style.opacity      = 1;
			bc.append(data.text);
			element.append(bc);

		}

		//on bouge la frame en fin de liste
		this.elParent.scrollLeft(this.elParent[0].scrollWidth);
		
	}


	destroy(ClassElement){

		$("."+ClassElement).remove();

	}

	destroyAll(){
		this.elParent.empty();
		this.elParent.css("padding", "0px");
	}

}
	