import Frame from '../services/frame.js';
import SearchServices from '../services/search.js';

export default class Home {


	constructor(){

		let ServicesContainer = {};
		this.searchService = new SearchServices();
		ServicesContainer.search = this.searchService;

		this.frame = new Frame(ServicesContainer);
		this.frame.Home();
	}



}