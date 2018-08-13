import { Lifer } from '../services/Lifer.js';

import LoaderCollection from '../services/LoaderCollection.js';

import Frame from '../services/frame.js';


export default class Controller {


	constructor(path){

		let Me = 'controller';

		this.path = path+"/"+Me;

		Lifer.addMe(this.path);

		this.init();

	}



	init(){

		this.loadUser();

		this.frame = new Frame(this.path);
		this.gotToHome();

	}


	loadUser(){

		let userCollection = new LoaderCollection("User");

		let MyInfos = userCollection.get();

		console.log(MyInfos);

	}



	gotToHome(){

		this.frame.Home();

	}

}