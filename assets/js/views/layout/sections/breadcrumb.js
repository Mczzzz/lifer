export default class Breadcrumb {


	constructor(){

		this.elParent = $(".breadcrumb");
		this.elParent.empty();
		this.elParent.css("background-color", "white");
		this.elParent.css("padding", "10px");

	}


	skinner(){



	}


	init(ClassElement, data,listener,first = false){

		let element = document.createElement("div");
		element.className = ClassElement;
		
		if(first){
			this.elParent.prepend(element);
		}else{
			this.elParent.append(element);
		}
		
		this.setData(data,element,listener);

	}

	setData(datas,element,listener){

		let MysetLength = datas.length;

		let opacity = 0.2;

		let stepOpacity = (1 - opacity) / ( MysetLength - 1);

		for (let data of datas){

			let bc = document.createElement("a");
			bc.id = data.id;
			bc.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
			bc.style.borderRadius = "4px 12px 4px 4px";
			bc.style.background   = "#0288d1";
			bc.style.color        = "white";
			bc.style.padding      = "5px";
			bc.style.marginRight  = "5px";
			bc.style.opacity      = opacity;
			bc.append(data.text);
			element.append(bc);

			opacity += stepOpacity;
			console.log(listener);
			//link event listener
			bc.addEventListener("click", (e)=>this.eventParentDispatcher(e,data,listener));

		}

		//on bouge la frame en fin de liste
		this.elParent.scrollLeft(this.elParent[0].scrollWidth);

	}


	eventParentDispatcher(e, data,listener){
		console.log('on passe dans le eventParentDispatcher')
		console.log(listener);
		let NodeEvent = new CustomEvent(listener, {'detail' : {'data' : data}});
       	window.dispatchEvent(NodeEvent);

	}


	destroy(ClassElement){

		$("."+ClassElement).remove();

	}

	destroyAll(){
		this.elParent.empty();
		this.elParent.css("padding", "0px");
	}

}
	