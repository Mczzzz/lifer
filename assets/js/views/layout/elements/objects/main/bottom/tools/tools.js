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
		console.log(this.toolsContainer);

			this.toolsInfos = document.createElement("div");
			this.toolsInfos.className = "toolsInfos";
			this.toolsContainer.append(this.toolsInfos);
			this.toolsInfos.style.flex = "1 1 0%";
			this.toolsInfos.style.textAlign = "center";
			this.toolsInfos.style.verticalAlign = "middle";
			let infoButton = document.createElement("a");
				let infoPicto = document.createElement("i");
					infoPicto.className = "material-icons";
					infoPicto.style.color = "#2196F3";
					infoPicto.append("info");

			infoButton.append(infoPicto);
			this.toolsInfos.append(infoButton);




			this.toolsEvent = document.createElement("div");
			this.toolsEvent.className = "toolsEvent";
			this.toolsContainer.append(this.toolsEvent);
			this.toolsEvent.style.flex = "1 1 0%";
			this.toolsEvent.style.textAlign = "center";
			this.toolsEvent.style.verticalAlign = "middle";
			let eventButton = document.createElement("a");
				let eventPicto = document.createElement("i");
					eventPicto.className = "material-icons";
					eventPicto.style.color = "#4CAF50";
					eventPicto.append("access_alarms");

			eventButton.append(eventPicto);
			this.toolsEvent.append(eventButton);








		$('.tools').append(this.toolsContainer);


 	}


}