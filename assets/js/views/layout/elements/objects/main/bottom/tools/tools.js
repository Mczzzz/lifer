export default class tools {


	constructor(){

		this.initSearch();

	}



	initSearch(){

		$('.tools').empty();

		this.toolsContainer = document.createElement("div");
		this.toolsContainer.className = "toolsContainer";

		this.toolsInput = document.createElement("input");
		this.toolsInput.className = "toolsInput";
		this.toolsInput.type = "text";
		this.toolsInput.placeholder   = 'Recherche...';
		this.toolsInput.style.display   = 'block';
		this.toolsInput.style.padding   = '5px';
		this.toolsInput.style.borderRadius   = '5px';
		this.toolsInput.style.border   = '1px solid silver';
		this.toolsInput.style.height   = '40px';

		this.toolsContainer.append(this.toolsInput);
		$('.tools').append(this.toolsContainer);

		let margeSize = 5;
		$('.toolsInput').css( "margin", margeSize );
		$('.toolsInput').css( "width", $('.tools').width() - margeSize * 4);

		$('.tools').css( "background", '#E8E8E8' );
	}

 
 	initInfosObjects(){

 		$('.tools').empty();

 		this.toolsContainer = document.createElement("div");
		this.toolsContainer.className = "toolsContainer";
		this.toolsContainer.style.display = 'flex';
		this.toolsContainer.style.height = "50px";

			this.toolsInfos = document.createElement("div");
			this.toolsInfos.className = "toolsInfos";
			this.toolsContainer.append(this.toolsInfos);
			this.toolsInfos.style.flex = "1 1 0%";

			this.toolsEvent = document.createElement("div");
			this.toolsEvent.className = "toolsEvent";
			this.toolsContainer.append(this.toolsEvent);
			this.toolsEvent.style.flex = "1 1 0%";

		$('.tools').append(this.toolsContainer);


 	}


}