export default class tools {


	constructor(){

		this.initSearch();

	}



	initSearch(){

		this.toolsContainer = document.createElement("div");
		this.toolsContainer.className = "toolsContainer";

		this.toolsInput = document.createElement("input");
		this.toolsInput.type = "text";
		this.toolsInput.placeHolder   = 'Recherche...';
		this.toolsInput.style.display   = 'block';
		this.toolsInput.style.padding   = '4px';
		this.toolsInput.style.borderRadius   = '4px';
		this.toolsInput.style.border   = '1px solid silver';
		
		this.toolsInput.style.height   = '2rem';

	
		this.toolsInput.className = "toolsInput";
		this.toolsContainer.append(this.toolsInput);


		$('.tools').append(this.toolsContainer);

		let margeSize = 5;

		$('.toolsInput').css( "margin", margeSize );
		$('.toolsInput').css( "width", $('.tools').width() - margeSize * 2);
	}

 


}