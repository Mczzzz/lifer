export default class tools {


	constructor(){


		this.initDivs();

		this.main();
	}


	initDivs(){

		this.toolsContainer = document.createElement("div");
		this.toolsContainer.className = "toolsContainer";

			this.toolsMain = document.createElement("div");
			this.toolsMain.className = "toolsMain";
			this.toolsContainer.append(this.toolsMain);

			this.toolsOjects = document.createElement("div");
			this.toolsOjects.className = "toolsOjects";
			this.toolsContainer.append(this.toolsOjects);

			this.toolsHumans = document.createElement("div");
			this.toolsHumans.className = "toolsHumans";
			this.toolsContainer.append(this.toolsHumans);


		$('.tools').append(toolsContainer);

	}


	main(){

		let text = 'coucou';

		let start = document.createElement("a");
		start.append(text);

		this.toolsMain.append(start);


	}


	objects(){

		
	}


	humans(){

		
	}


/*
floatingHTML(){

		let floating =  `<div class="fixed-action-btn " style="bottom: 19px; left: 19px; width: 60px">
		              <a class="btn-floating btn-large gradient-45deg-light-blue-cyan gradient-shadow">
		                <i class="material-icons">add</i>
		              </a>
		              <ul>
		                <li>
		                  <a href=""  class="btn-floating grey">
		                    <i class="material-icons">face</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="#!" id="menu-obj"class="btn-floating green">
		                    <i class="material-icons">widgets</i>
		                  </a>
		                </li>
		                <li>
		                  <a href="app-calendar.html" class="btn-floating grey">
		                    <i class="material-icons">today</i>
		                  </a>
		                </li>
		              </ul>
		            </div>`;

		$('body').append(floating);

	}

/*	footerHTML(){

		new Footer();
	}
*/
/*
	activeJs(){


	    $('#menu-obj').on('click', function() {

	       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Objects'}});
	       window.dispatchEvent(LinkEvent);
	    });


	}*/

}