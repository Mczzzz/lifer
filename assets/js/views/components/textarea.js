import UIContainer from '../../services/uiContainer.js';
export default class TextArea  extends UIContainer{


	constructor(x , y , w , h ){

		super(x,y,w,h);

	}


	addElements(){

		this.drawTextArea(this.width, this.height);

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
		tArea.setAttribute("style", "background: transparent;border: 0 none;width: "+ w +"px; height: "+ h +"px;font-size:medium");
		$("#divText").append(tArea);


	}




}