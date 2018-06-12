export default class Footer{
	

	constructor(){

		this.backGroundColor =  'gradient-45deg-purple-deep-orange';

		this.addTags();
	
	}


	addTags(){

		let tags = 	`<footer id="footerBackground" class="page-footer footer-fixed `+this.backGroundColor+`">
		      <div class="footer-copyright">
		        <div class="container">
		        </div>
		      </div>
		    </footer>`;

		$('body').append(tags);

	}


	setBackgroundColor(color){

		$('#footerBackground').removeAttr('class');
		$('#footerBackground').addClass('page-footer');
		$('#footerBackground').addClass('footer-fixed');
		$('#footerBackground').addClass(color);

	}



}