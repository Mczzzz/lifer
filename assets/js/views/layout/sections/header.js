export default class Header{
	

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
		$('.headerContainer').css( "width", "100%" );
		$('.headerContainer').css( "height", "100%" );
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