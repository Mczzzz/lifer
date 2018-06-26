export default class Breadcrumb {


	constructor(parent){

		this.parent = parent;
this.parent.empty();
this.parent.css("background-color", "white");

	}





	init(ClassElement, data,first = false){

		if($("."+ClassElement)[0] != null){
			console.log('on remove');
			$("."+ClassElement).remove();
		}

		let element = document.createElement("div");
		element.className = ClassElement;
		
		if(first){
			this.parent.prepend(element);
		}else{
			this.parent.append(element);
		}
		
		this.setData(data,element);

	}

	setData(datas,element){

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

			bc.addEventListener("click", (e)=>this.eventParentDispatcher(e,data));

		}

		//on bouge la frame en fin de liste
this.parent.scrollLeft(this.parent[0].scrollWidth);
this.parent.css("padding", "10px");

	}


	destroy(ClassElement){

		$("."+ClassElement).remove();

	}

	destroyAll(){
this.parent.empty();
this.parent.css("padding", "0px");
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



	eventParentDispatcher(e, data,listener){
		console.log('on passe dans le eventParentDispatcher')
		console.log(listener);
		let NodeEvent = new CustomEvent('callBack', {'detail' : {'data' : data}});
       	window.dispatchEvent(NodeEvent);

	}




}
	