import BDLocalCollection from '../collections/DBLocalCollection.js';


class DBLocal {
	

	constructor(){

		this.BDLocalCollection = new BDLocalCollection();

		this.init();

	}



	init(){
		console.log("this.BDLocalCollection");
		console.log(this.BDLocalCollection);

		


	}


	getDBInstance(name){

		return this.BDLocalCollection[name];

	}


}



const instance = new DBLocal();
export { instance as DBLocal };

