export default class Header {
	

	constructor(){
	
		this.backGroundColor =  '';
		this.initContainer();

	}

	initContainer(){

		let headerContainer = document.createElement("div");
		headerContainer.className = "headerContainer";
		$('.header').append(headerContainer);

		$('.headerContainer').css( "display", "flex" );
		$('.headerContainer').css( "justify-content", "space-between" );

		$('.headerContainer').css( "background", "grey" );

		//calcul de la marge à applique en fontion du height
		let margeSize = $('.header').height() - $('.header').height() * 0.9;

		$('.headerContainer').css( "width", $('.header').width() - margeSize * 2 );
		$('.headerContainer').css( "height", $('.header').height() - margeSize * 2 );

		$('.headerContainer').css( "margin", margeSize );

	}


	setBkgdColor(color){

		$('.header').css( "background", color );

	}


	setBackToHome(){

		let headerBackHome = document.createElement("div");
		headerBackHome.className = "headerBackHome";
		$('.headerContainer').append(headerBackHome);

		$('.headerBackHome').css( "background", "blue" );

		$('.hheaderBackHome').append('<i id="BackToHome" class="material-icons" style="font-size:40px;margin-left:10px">keyboard_backspace</i>');
		/*$(".nav-wrapper").append('<i id="BackToHome" class="material-icons" style="font-size:40px;margin-left:10px">keyboard_backspace</i>');*/
	}

}