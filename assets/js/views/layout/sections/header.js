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
/*		$('.headerContainer').css( "width", $('.header').style.width * 0.8 );
		$('.headerContainer').css( "height", $('.header').style.height * 0.8 );

		$('.headerContainer').css( "margin-left", $('.header').style.width * 0.1 );
		$('.headerContainer').css( "margin-right", $('.header').style.width * 0.1 );
		$('.headerContainer').css( "margin-top", $('.header').style.height * 0.1 );
		$('.headerContainer').css( "margin-bottom", $('.header').style.height * 0.1 );*/
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