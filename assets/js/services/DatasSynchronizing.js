import Moment from 'moment';
import 'moment/locale/fr';

import LoaderCollection from './LoaderCollection.js';


class DatasSynchronizing {
	

	constructor(){


		this.Stack = [];

	}




	push(from,needTmpId=false){

		//Collection à qui je m'adresse
		//la péthode dont j'ai besoin
		//qui suis-je

		//add


		//je retourne un id temporaire si besoin
		//status
		//id temporaire
		let res = {};
		res.status = 0;
		res.order = {};
		res.order.id = from + Moment().format('x');
		if(needTmpId) res.tmpId = Moment().format('x');
		return res;


	}




}

const instance = new DatasSynchronizing();
export { instance as DatasSynchronizing };
