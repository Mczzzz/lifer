export default class Header{
	

	constructor(){
	
		this.backGroundColor =  'gradient-45deg-purple-deep-orange';

		this.addTags();
	}


	addTags(){

		let html = 	`<header id="header" class="page-topbar">
					<div class="navbar-fixed">
						<nav id="headerBackground"class="navbar-color `+this.backGroundColor+` gradient-shadow">
							<div class="nav-wrapper">

							

							</div>
		        		</nav>
		      		</div>
	    		</header>`;

	    $('body').append(html);
	}


	setBackgroundColor(color){

		$('#headerBackground').removeAttr('class');
		$('#headerBackground').addClass('navbar-color');
		$('#headerBackground').addClass('gradient-shadow');
		$('#headerBackground').addClass(color);

	}


}