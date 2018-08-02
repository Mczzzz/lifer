import superViews from "../../../../common/super/views.js";

export default class note extends superViews{


	constructor(parent, MyClass,path,prepend){


		super(parent,MyClass,path,prepend);

		this.init();

	}


	init(){

		this.toolbar();

	}


	toolbar(){

		this.tb = document.createElement("div");
		this.tb.style.height = "40px";
		this.tb.style.background = "#e8eff7";
		this.tb.style.display = "flex";
		this.tb.style.justifyContent = "space-around";
	    this.container.append(this.tb);

	    this.addButton();
	}


	addButton(){

		let button = document.createElement("div");
		button.style.display = "flex";
		button.style.alignItems = "center";
		this.tb.append(button);

		let i = document.createElement("i");
			i.className = "material-icons";
			i.style.fontSize = "25px";
			i.style.color = "green";
			i.style.marginRight = "15px";

		i.append("note_add");

		button.append(i);


		button.addEventListener("click", (e)=>this.openPopNote(e));

	}


	hide(){

		this.container.style.display = "none";

	}


	show(){

		this.container.style.display = "";
		
	}


	openPopNote(e){

		let ThePopNote = new popNote(this.container,"popNote",this.path);

	}


}