export default class Header{
	

	constructor(){
	
		this.backGroundColor =  '';

	}



	setBkgdColor(color){

		$('.header').removeClass('background');
		$('.header').addClass(color);

	}


}