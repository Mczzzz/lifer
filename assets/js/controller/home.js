import Frame from '../services/frame.js';
import SearchServices from '../services/search.js';

export default class Home {


	constructor(){

		let ServicesContainer = {};
		//this.searchService = new SearchServices();
		//ServicesContainer.search = this.searchService;
		ServicesContainer.search = "coucou";

		this.frame = new Frame(ServicesContainer);
		this.frame.Home();
	}



}