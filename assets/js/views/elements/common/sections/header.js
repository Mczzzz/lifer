export default class Header {
	

	constructor(parent){

		this.header = document.getElementsByClassName(parent)[0];
		console.log(this.header);
		this.backGroundColor =  '';
		this.initContainer();


	}

	initContainer(){

		this.headerGlobal = document.createElement("div");
		this.headerGlobal.className = "headerGlobal";
		this.headerGlobal.style.width = "100%";
		this.headerGlobal.draggable = true;

		this.header.append(this.headerGlobal);


		this.headerContainer = document.createElement("div");
		this.headerContainer.className = "headerContainer";


		this.headerGlobal.append(this.headerContainer);


		this.headerContainer.style.display = "flex";
		this.headerContainer.style.justifyContent = "space-between";
		this.headerContainer.style.alignItems = "center";

		//calcul de la marge à applique en fontion du height
		this.margeSize = this.headerGlobal.offsetHeight - this.headerGlobal.offsetHeight * 0.9;

		this.headerContainer.style.width = (this.header.offsetWidth - this.margeSize * 2 ) +"px";
		this.headerContainer.style.height = (this.header.offsetHeight - this.margeSize * 2 ) +"px";

		this.headerContainer.style.margin = this.margeSize+"px";
		

	}


	setBkgdColor(color){

		this.headerGlobal.style.background = color;

	}

	setHeight(height){

		this.headerGlobal.style.height = height+"px";
		this.margeSize = this.headerGlobal.offsetHeight - this.headerGlobal.offsetHeight * 0.9;
		this.headerContainer.style.margin = this.margeSize+"px";
		console.log(this.headerGlobal.offsetHeight);
		console.log(this.margeSize);
		this.headerContainer.style.width = (this.headerGlobal.offsetWidth - this.margeSize * 2 ) +"px";
		this.headerContainer.style.height = (this.headerGlobal.offsetHeight - this.margeSize * 2 ) +"px";

	}

	setBack(){

		let headerBack = document.createElement("div");
		headerBack.className = "headerBack";
		this.headerContainer.append(headerBack);

		let i = document.createElement("i");
		i.className = "material-icons";
		i.style.fontSize = "40px";
		i.style.color = "white";
		i.append('keyboard_backspace');

		headerBack.append(i);

		i.addEventListener("click", (e)=>this.linkBack(e));

	}


	linkBack(e){
/*
       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Home'}});
       window.dispatchEvent(LinkEvent);
*/
	}



	setBackToHome(parent = false){

		let headerBackHome = document.createElement("div");
		headerBackHome.className = "headerBackHome";
		this.headerContainer.append(headerBackHome);

		let i = document.createElement("i");
		i.id = "BackToHome";
		i.className = "material-icons";
		i.style.fontSize = "40px";
		i.style.color = "white";
		i.append('keyboard_backspace');

		headerBackHome.append(i);
	

		if(!parent){
			i.addEventListener("click", (e)=>this.linkBackToHome(e));
		}else{
			i.addEventListener("click", (e)=>this.closeParent(parent));
		}
		

	}

	linkBackToHome(e){

       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Home'}});
       window.dispatchEvent(LinkEvent);

	}


	closeParent(parent){

		parent.remove();

	}


	setIconPage(){

		let headerWidgets = document.createElement("div");
		headerWidgets.className = "headerWidgets";

		this.headerContainer.append(headerWidgets);

		let i = document.createElement("i");
		i.className = "material-icons";
		i.style.fontSize = "40px";
		i.style.color = "white";
		i.append('widgets');

		headerWidgets.append(i);

	}


}