import Header from './sections/header.js';
import Footer from './sections/footer.js';

export default class Home{


	getHTMLPage(){

		let page = this.headerHTML();

		page += this.footerHTML();

		return page;
	}


	headerHTML(){

				let header = new Header();

				return header.addTags();
	}
		



	footerHTML(){

				let footer = new Footer();

				return footer.addTags();
	}

}