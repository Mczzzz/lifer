import BDLocalCollection from '../collections/DBLocalCollection.js';


class DBLocal {
	

	constructor(){



		this.BDLocalCollection = new BDLocalCollection();

		this.SGBD = [];

		this.init();

	}



	init(){

		for(let base of this.BDLocalCollection.SGBD){


			this.SGBD[base.name] = this.BDLocalCollection.createBases(base);


		}



		


	}


	getDBInstance(name){

		return this.SGBD[name];

	}


}



const instance = new DBLocal();
export { instance as DBLocal };

