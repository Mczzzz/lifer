export default class TextArea {


	constructor(x , y , w , h ){

		//add html textarea
		//css position absolute + sous l'image

		this.declareContainer();

		this.container.x = x;
		this.container.y = y;

		this.drawTextArea(w, h);

		return this.container;

	}


	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}


	drawTextArea(w, h){

//$('body').append('<div id="divText"><textarea id="textInput">Ceci est un text par default</textarea><div>');
		const tDiv = document.createElement("DIV");
		tDiv.setAttribute("id", "divText");
		tDiv.setAttribute("style", "position:absolute;top: "+this.container.y+"px;left: "+this.container.x+"px;");
		document.body.appendChild(tDiv);


		const tArea = document.createElement("TEXTAREA");
		//tArea.setAttribute("type", "file");
		tArea.setAttribute("id", "textarea");
		tArea.setAttribute("placeholder", "Je rentre les infos ...");
		tArea.setAttribute("style", "background: transparent;border: 0 none;width: "+ w +"px; height: "+ h +"px;");
		$("#divText").append(tArea);


	}




}