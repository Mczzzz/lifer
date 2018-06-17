export default class tools {


	constructor(){


		this.initDivs();

		this.main();
		this.objects();
	}


	initDivs(){

		this.toolsContainer = document.createElement("div");
		this.toolsContainer.className = "toolsContainer";

			this.toolsMain = document.createElement("div");
			this.toolsMain.className = "toolsMain";
			this.toolsContainer.append(this.toolsMain);

			this.toolsObjects = document.createElement("div");
			this.toolsObjects.className = "toolsObjects";
			this.toolsContainer.append(this.toolsObjects);

			this.toolsHumans = document.createElement("div");
			this.toolsHumans.className = "toolsHumans";
			this.toolsContainer.append(this.toolsHumans);


		$('.tools').append(this.toolsContainer);

		this.toolsContainer.style.display = "flex";
	}


	main(){

		let text = 'add';

		let start = document.createElement("a");
		
		let icon = document.createElement("i");
		icon.className = "material-icons";
		icon.style.color = "white";
	
		icon.append(text);
		start.append(icon);


		this.toolsMain.append(start);


		//css
		this.toolsMain.style.margin         = '10px';
		this.toolsMain.style.background     = 'linear-gradient(45deg, #0288d1 0%, #26c6da 100%)';
		this.toolsMain.style.width          = '60px';
		this.toolsMain.style.height         = '60px';
		this.toolsMain.style.borderRadius   = '50%';
		this.toolsMain.style.display        = 'flex';
		this.toolsMain.style.alignItems     = 'center';
		this.toolsMain.style.justifyContent = 'center';
		/*this.toolsMain.style.boxShadow      = '0 3px 10px 0 rgba(38, 198, 218, 0.5)';*/

		$('.toolsMain').on("click", (e)=>this.animateObjects(e));

	}


	objects(){


		let text = 'widgets';

		let objects = document.createElement("a");
		
		let icon = document.createElement("i");
		icon.className = "material-icons";
		icon.style.color = "white";
	
		icon.append(text);
		objects.append(icon);


		this.toolsObjects.append(objects);


		//css
		this.toolsObjects.style.margin         = '17px';
		this.toolsObjects.style.background     = 'linear-gradient(45deg, #0097a7 0%, #9ccc65 100%)';
		this.toolsObjects.style.width          = '46px';
		this.toolsObjects.style.height         = '46px';
		this.toolsObjects.style.borderRadius   = '50%';
		this.toolsObjects.style.display        = 'flex';
		this.toolsObjects.style.alignItems     = 'center';
		this.toolsObjects.style.justifyContent = 'center';
	    this.toolsObjects.style.transform      = 'translate(-80px, 0)';
	    this.toolsObjects.style.opacity        = '0.1';
	    this.toolsObjects.style.transition     = 'opacity .25s ease-in-out';
	    /*this.toolsObjects.style.transition     = 'opacity .25s ease-in-out';*/
		/*this.toolsMain.style.boxShadow      = '0 3px 10px 0 rgba(38, 198, 218, 0.5)';*/
		
		
	}


	animateObjects(e){

		console.log('on click');
		$('.toolsObjects').transition({perspective: '100px',
  rotateY: '180deg'});

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