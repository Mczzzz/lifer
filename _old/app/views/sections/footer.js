export default class Footer{
	

	constructor(parent){
		
		this.footer = document.getElementsByClassName(parent)[0];
		this.backGroundColor =  '';

	}



	setBkgdColor(color){

		this.footer.style.background = color;

	}



}