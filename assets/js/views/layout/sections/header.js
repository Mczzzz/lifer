export default class Header{
	

	constructor(){
	
		this.backGroundColor =  '';
		this.initContainer();

	}

	initContainer(){

		let headerContainer = document.createElement("div");
		headerContainer.className = "headercontainer";
		$('.header').append(headerContainer);

		$('.headerContainer ').css( "display", "flex" );
		$('.headerContainer ').css( "justify-content", "space-between" );
	}


	setBkgdColor(color){

		$('.header').css( "background", color );

	}


	setBackToHome(){

		$(".nav-wrapper").append('<i id="BackToHome" class="material-icons" style="font-size:40px;margin-left:10px">keyboard_backspace</i>');
	}

}