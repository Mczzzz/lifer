export default class tools {


	constructor(){


		this.initDivs();


	}


	initDivs(){

		let toolsContainer = document.createElement("div");
		toolsContainer.className = "toolsContainer";

			let toolsMain = document.createElement("div");
			toolsMain.className = "toolsMain";
			toolsContainer.append(toolsMain);

			let toolsOjects = document.createElement("div");
			toolsOjects.className = "toolsOjects";
			toolsContainer.append(toolsOjects);

			let toolsHumans = document.createElement("div");
			toolsHumans.className = "toolsHumans";
			toolsContainer.append(toolsHumans);


		$('.tools').append(ToolsContainer);

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