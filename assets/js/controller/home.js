import { Lifer } from '../services/Lifer.js';
import Frame from '../services/frame.js';
//import SearchServices from '../services/search.js';

export default class Home {


	constructor(parent){
		
		Lifer.addMe(parent,'home');
		Lifer.dumpMe();

		this.frame = new Frame();
		this.frame.Home();
	}



}