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
		Lifer.addMe("User");

		let dispatchResponseTo  = [];
		dispatchResponseTo.push({ "This" : "Lifer" , "method" : "addData", "path" : "User"});

		userCollection.Get(dispatchResponseTo);

	}

	loadUnity(){

		let unityTypeCollection = new LoaderCollection("Unity");

		Lifer.addMe("Unity");
		Lifer.addData("Unity",[{"Types" : unityTypeCollection.Get()}]);
		

	}


	gotToHome(){

		this.frame.Home();

	}

}