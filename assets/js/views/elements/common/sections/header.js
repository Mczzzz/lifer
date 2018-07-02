export default class Header {
	

	constructor(){

		this.header = document.getElementsByClassName('header')[0];
		console.log(this.header);
		this.backGroundColor =  '';
		this.initContainer();


	}

	initContainer(){

		this.headerContainer = document.createElement("div");
		this.headerContainer.className = "headerContainer";


		this.header.append(this.headerContainer);

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

		this.header.style.background = color;

	}


	setBackToHome(){

		let headerBackHome = document.createElement("div");
		headerBackHome.className = "headerBackHome";
		this.headerContainer.append(headerBackHome);

		/*$('.headerBackHome').css( "background", "blue" );*/

		$('.headerBackHome').append('<i id="BackToHome" class="material-icons" style="font-size:40px;color:white">keyboard_backspace</i>');
	
		 $('#BackToHome').on('click', function() {

	       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Home'}});
	       window.dispatchEvent(LinkEvent);
	    });

	}


	setIconPage(){

		let headerWidgets = document.createElement("div");
		headerWidgets.className = "headerWidgets";
		this.headerContainer.append(headerWidgets);

		/*$('.headerBackHome').css( "background", "blue" );*/

		$('.headerWidgets').append('<i id="BackToHome" class="material-icons" style="font-size:40px;color:white">widgets</i>');

	}


}