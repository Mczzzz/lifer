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

		this.header.append(this.headerGlobal);

		this.headerContainer = document.createElement("div");
		this.headerContainer.className = "headerContainer";


		this.headerGlobal.append(this.headerContainer);

		this.headerContainer.style.display = "flex";
		this.headerContainer.style.justifyContent = "space-between";

		//calcul de la marge à applique en fontion du height
		let margeSize = this.header.offsetHeight - this.header.offsetHeight * 0.9;

/*		$('.headerContainer').css( "width", $('.header').width() - margeSize * 2 );
		$('.headerContainer').css( "height", $('.header').height() - margeSize * 2 );*/

		this.headerContainer.style.width = (this.header.offsetWidth - margeSize * 2 ) +"px";
		this.headerContainer.style.height = (this.header.offsetHeight - margeSize * 2 ) +"px";

		this.headerContainer.style.margin = margeSize+"px";
		

	}


	setBkgdColor(color){

		this.headerGlobal.style.background = color;

	}

	setHeight(height){

		this.headerGlobal.style.height = height+"px";

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



	setBackToHome(){

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
	

		i.addEventListener("click", (e)=>this.linkBackToHome(e));

	}

	linkBackToHome(e){

       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Home'}});
       window.dispatchEvent(LinkEvent);

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