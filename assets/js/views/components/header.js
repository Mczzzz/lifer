import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';


export default class Header{
	

	constructor(x,y,w,h){
	
		console.log('header before super');
		moment.locale('fr');
     	let res = this.addTags();
     	console.log(res);
		return res;


	}


	addTags(){

		console.log('on passe dans le haeder');

	return	'<header id="header" class="page-topbar">';
/*				<div class="navbar-fixed">
					<nav class="navbar-color gradient-45deg-purple-deep-orange gradient-shadow">
						<div class="nav-wrapper">
						</div>
	        		</nav>
	      		</div>
	    	</header>';*/


	}




}