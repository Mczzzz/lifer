import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';


export default class Header  extends UIContainer{
	

	constructor(x,y,w,h){
	
		console.log('header before super');
		moment.locale('fr');
     	
		this.addTags();


	}


	addTags(){



	return	`<header id="header" class="page-topbar">
				<div class="navbar-fixed">
					<nav class="navbar-color gradient-45deg-purple-deep-orange gradient-shadow">
						<div class="nav-wrapper">
						</div>
	        		</nav>
	      		</div>
	    	</header>`;


	}




}