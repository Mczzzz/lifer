import Header from './sections/header.js';

export default class Home{


	constructor(){

		

		//this.container.name = 'Home';
		//console.log($(this).attr('class'));

		this.addElements();

	}


	addElements(){

				let header = new Header();

				console.log(header);
				document.body.innerHTML = header;
/*				
				let toto = header.addTags();
				document.body.innerHTML = toto;
*/

		


	}
		



}