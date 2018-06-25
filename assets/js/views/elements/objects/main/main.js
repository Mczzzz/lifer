import Breadcrumb from './breadcrumb/breadcrumb.js';
import Top from './top/top.js';
import Bottom from './bottom/bottom.js';

export default class main {
	

	constructor(){

		this.breadcrumb = new Breadcrumb();
		this.top = new Top();
		this.bottom = new Bottom();

	}
	


}