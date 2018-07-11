import header from '../../layout/sections/header.js';


export default class headerObjects  extends header {


	constructor(){


		super();

		this.addBack();

	}



	addBack(){



		$(".nav-wrapper").append('<i id="BackToHome" class="material-icons" style="font-size:40px;margin-left:10px">keyboard_backspace</i>');

		 $('#BackToHome').on('click', function() {

	       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Home'}});
	       window.dispatchEvent(LinkEvent);
	    });

	}

}