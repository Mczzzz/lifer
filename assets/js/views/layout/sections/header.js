export default class Header{
	

	constructor(){
	
		this.backGroundColor =  '';

		this.addTags();
	}


	addTags(){

		let html = 	`<div class="navbar-color `+this.backGroundColor+` gradient-shadow"></div>`;

	    $('.header').append(html);
	}


	setBackgroundColor(color){

		$('#headerBackground').removeAttr('class');
		$('#headerBackground').addClass('navbar-color');
		$('#headerBackground').addClass('gradient-shadow');
		$('#headerBackground').addClass(color);

	}


}