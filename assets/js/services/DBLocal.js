import BDLocalCollection from '../collections/DBLocalCollection.js';


class DBLocal {
	

	constructor(){

		this.BDLocalCollection = new BDLocalCollection();

		this.init();

	}



	init(){
		console.log("this.BDLocalCollection");
		console.log(this.BDLocalCollection);

		for (let Base of this.BDLocalCollection){



		}


	}




}



const instance = new DBLocal();
export { instance as LocalSGBD };

