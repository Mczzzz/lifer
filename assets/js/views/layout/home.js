import Header from './sections/header.js';

export default class Home{


	constructor(){

		

		//this.container.name = 'Home';
		//console.log($(this).attr('class'));

		this.addElements();

	}


	addElements(){

				let header = new Header();

				let getHeaderHTMLFragment = header.addTags();
				document.body.innerHTML = getHeaderHTMLFragment;


		


	}
		



}