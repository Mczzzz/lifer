import { Lifer } from '../services/Lifer.js';
import Frame from '../services/frame.js';
//import SearchServices from '../services/search.js';

export default class Home {


	constructor(path){

		let Me = 'home';

		Lifer.addMe(path);
		Lifer.dumpMe();

		this.frame = new Frame(path+"/"+Me+"/guigui/er/fli");
		this.frame.Home();
	}



}