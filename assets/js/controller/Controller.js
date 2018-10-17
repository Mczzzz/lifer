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
		this.loadCrypto();

		this.frame = new Frame(this.path);
		this.gotToHome();

	}



	loadUser(){

		let userCollection = new LoaderCollection("User");
		Lifer.addMe("User");

		let dispatchResponseTo  = [{ "This" : "Lifer" , "method" : "addData", "path" : "User"}];

		userCollection.Get(dispatchResponseTo);

	}

	loadUnity(){

		let unityTypeCollection = new LoaderCollection("Unity");
		Lifer.addMe("Unity");

		let dispatchResponseTo  = [{ "This" : "Lifer" , "method" : "addData", "path" : "Unity"}];

		unityTypeCollection.GetTypes(dispatchResponseTo);
		unityTypeCollection.GetUnits(dispatchResponseTo);
		

	}


	loadCrypto(){

		let cryptoTypeCollection = new LoaderCollection("Crypto");
		Lifer.addMe("Crypto");

		//et dispatchResponseTo  = [{ "This" : "Lifer" , "method" : "addData", "path" : "Unity"}];

		cryptoTypeCollection.GetTypes();
		//unityTypeCollection.GetUnits(dispatchResponseTo);
		

	}






	gotToHome(){

		this.frame.Home();

	}

}