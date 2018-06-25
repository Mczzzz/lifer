export default class Breadcrumb {


	constructor(){

		this.elParent = $(".breadcrumb");
		this.elParent.empty();
		this.elParent.css("background-color", "white");

	}


	skin(el,opacity){

		el.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
		el.style.borderRadius = "4px 12px 4px 4px";
		el.style.background   = "#0288d1";
		el.style.color        = "white";
		el.style.padding      = "5px";
		el.style.marginRight  = "5px";
		el.style.opacity      = opacity;

	}


	init(ClassElement, data,listener,first = false){

		if($("."+ClassElement)[0] != null){
			console.log('on remove');
			$("."+ClassElement).remove();
		}

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

			this.skin(bc,opacity);
			
			bc.append(data.text);

			element.append(bc);

			opacity += stepOpacity;

			bc.addEventListener("click", (e)=>this.eventParentDispatcher(e,data,listener));

		}

		//on bouge la frame en fin de liste
		this.elParent.scrollLeft(this.elParent[0].scrollWidth);
		this.elParent.css("padding", "10px");

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
	