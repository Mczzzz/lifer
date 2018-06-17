
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

		$('.toolsMain').on("click", (e)=>this.animateChilds(e));

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
	    this.toolsObjects.style.transform      = 'translate(-80px, -30px) scale(0.01)';
	    this.toolsObjects.style.opacity        = '0';
	    this.toolsObjects.style.transition	   = '0.4s cubic-bezier(0, 0.87, 0.01, 0.87)';
	   /* $('.toolsObjects').hide();*/
	   	
		
	}


	animateChilds(e){
		/*$('.toolsObjects').show();*/
		this.toolsObjects.style.transform = '';
		this.toolsObjects.style.opacity = '1';

		this.toolsHumans.style.transform = '';
		this.toolsHumans.style.opacity = '1';

	}


	humans(){

		let text = 'face';

		let humans = document.createElement("a");
		
		let icon = document.createElement("i");
		icon.className = "material-icons";
		icon.style.color = "white";
	
		icon.append(text);
		humans.append(icon);


		this.toolsHumans.append(humans);


		//css
		this.toolsHumans.style.margin         = '17px';
		this.toolsHumans.style.background     = 'linear-gradient(45deg, #0097a7 0%, #9ccc65 100%)';
		this.toolsHumans.style.width          = '46px';
		this.toolsHumans.style.height         = '46px';
		this.toolsHumans.style.borderRadius   = '50%';
		this.toolsHumans.style.display        = 'flex';
		this.toolsHumans.style.alignItems     = 'center';
		this.toolsHumans.style.justifyContent = 'center';
	    this.toolsHumans.style.transform      = 'translate(-160px, -30px) scale(0.01)';
	    this.toolsHumans.style.opacity        = '0';
	    this.toolsHumans.style.transition	   = '0.4s cubic-bezier(0, 0.87, 0.01, 0.87)';
		
	}



/*
	activeJs(){


	    $('#menu-obj').on('click', function() {

	       let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Objects'}});
	       window.dispatchEvent(LinkEvent);
	    });


	}*/

}