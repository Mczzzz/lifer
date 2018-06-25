export default class Main{
	

	constructor(){
	
		this.backGroundColor =  '';

	}



	setBkgdTopColor(color){

		$('.top').css( "background", color );

	}

	setBkgdBottomColor(color){

		$('.bottom').css( "background", color );

	}

}