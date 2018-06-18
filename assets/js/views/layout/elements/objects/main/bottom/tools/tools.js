export default class tools {


	constructor(){

		this.initSearch();

	}



	initSearch(){

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
		this.toolsInput.style.height   = '2rem';

		this.toolsContainer.append(this.toolsInput);
		$('.tools').append(this.toolsContainer);

		let margeSize = 5;
		$('.toolsInput').css( "margin", margeSize );
		$('.toolsInput').css( "width", $('.tools').width() - margeSize * 4);
		$('.toolsContainer').css( "height", this.toolsInput.style.height + margeSize * 2);

		$('.tools').css( "background", '#E8E8E8' );
	}

 


}