import { Lifer } from '../services/Lifer.js';

import BDLocalCollection from '../collections/DBLocalCollection.js';
import LoaderCollection  from '../services/LoaderCollection.js';

import Frame from '../services/frame.js';


export default class Controller {


	constructor(path){

		let Me = 'controller';

		this.path = path+"-"+Me;

		Lifer.addMe(this.path);

		this.init();

	}



	init(){


		this.BDLocal = new BDLocalCollection();

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


	loadDeviceInfos(){

		let path = "User-Device";

		Lifer.addMe(path);

		let screen = Lifer.getScreenSize();

		let dataPackage = [];

		let Uscreen = [];

		Uscreen.Screen = screen;

		dataPackage.push(Uscreen);

	    Lifer.addData(path,dataPackage);


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

		cryptoTypeCollection.GetInfos();
		//unityTypeCollection.GetUnits(dispatchResponseTo);
		

	}






	gotToHome(){

		this.frame.Home();
		this.loadDeviceInfos();

	}

}