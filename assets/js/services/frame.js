import Home from '../views/layout/home.js';

export default class Frame {


	constructor(){

	let home = new Home();
	let res = home.getHTMLPage();
	document.body.innerHTML = res;

	}










}