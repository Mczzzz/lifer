import { Lifer } from '../services/Lifer.js';
import Frame from '../services/frame.js';
//import SearchServices from '../services/search.js';

export default class Controller {


	constructor(path){

		let Me = 'controller';

		this.path = path+"/"+Me;

		Lifer.addMe(this.path);

/*		let level = Lifer.getData(path,"Level",1);
		Lifer.addData(this.path,[{"Level" : level + 1}]);*/

		this.frame = new Frame(this.path);
		this.frame.Home();
	}



}