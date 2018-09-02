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
		this.loadUnity();

		this.frame = new Frame(this.path);
		this.gotToHome();

	}


	loadUser(){

		let userCollection = new LoaderCollection("User");

		userCollection.Get();

	}

	loadUnity(){

		console.log("controller loadUnity");

		let unityTypeCollection = new LoaderCollection("Unity");

		unityTypeCollection.Get();

	}


	gotToHome(){

		this.frame.Home();

	}

}