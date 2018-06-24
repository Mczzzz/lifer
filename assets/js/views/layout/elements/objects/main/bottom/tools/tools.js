export default class tools {


	constructor(){

		this.initSearch();

	}



	initSearch(){

		this.toolsSearchContainer = document.createElement("div");
		this.toolsSearchContainer.className = "toolsSearchContainer";

		this.toolsInput = document.createElement("input");
		this.toolsInput.className = "toolsInput";
		this.toolsInput.type = "text";
		this.toolsInput.placeholder   = 'Recherche...';
		this.toolsInput.style.display   = 'block';
		this.toolsInput.style.padding   = '5px';
		this.toolsInput.style.borderRadius   = '5px';
		this.toolsInput.style.border   = '1px solid silver';
		this.toolsInput.style.height   = '40px';

		this.toolsSearchContainer.append(this.toolsInput);
		$('.tools').append(this.toolsSearchContainer);

		let margeSize = 5;
		$('.toolsInput').css( "margin", margeSize );
		$('.toolsInput').css( "width", $('.tools').width() - margeSize * 4);

		$('.tools').css( "background", '#E8E8E8' );
	}

	removeSearch(){
		$('.'+'toolsSearchContainer').remove();
	}

	removeInfos(){
		$('.'+'toolsInfosContainer').remove();
	}
 
 	initInfosObjects(){

 		this.toolsInfosContainer = document.createElement("div");
		this.toolsInfosContainer.className = "toolsInfosContainer";
		this.toolsInfosContainer.style.display = 'flex';
		this.toolsInfosContainer.style.height = "50px";
		console.log(this.toolsInfosContainer);

			this.toolsInfos = document.createElement("div");
			this.toolsInfos.className = "toolsInfos";
			this.toolsInfosContainer.append(this.toolsInfos);
			this.toolsInfos.style.flex = "1 1 0%";
			this.toolsInfos.style.textAlign = "center";
			this.toolsInfos.style.paddingTop = "12px";
			let infoButton = document.createElement("a");
				let infoPicto = document.createElement("i");
					infoPicto.className = "material-icons";
					infoPicto.style.color = "#2196F3";
					infoPicto.append("info");

			infoButton.append(infoPicto);
			this.toolsInfos.append(infoButton);




			this.toolsEvent = document.createElement("div");
			this.toolsEvent.className = "toolsEvent";
			this.toolsInfosContainer.append(this.toolsEvent);
			this.toolsEvent.style.flex = "1 1 0%";
			this.toolsEvent.style.textAlign = "center";
			this.toolsEvent.style.paddingTop = "12px";
			let eventButton = document.createElement("a");
				let eventPicto = document.createElement("i");
					eventPicto.className = "material-icons";
					eventPicto.style.color = "#4CAF50";
					eventPicto.append("access_alarms");

			eventButton.append(eventPicto);
			this.toolsEvent.append(eventButton);



		$('.tools').append(this.toolsInfosContainer);


 	}


}