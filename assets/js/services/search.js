
export default class search {
	

	constructor(){

		this.targets = [];  
		this.inputs = [];
	}


	addTarget(elMethode){

		this.targets.push(elMethode);

	}


	addInput(el){

		this.inputs.push(el);	
		el.element.addEventListener("keyup", (e)=> this.match(e,el.element));

	}


	removeTarget(){


	}


	removeInput(){


	}



	match(e,el){


		for(let target of this.targets){

			target.element[target.methode](el.value);

		}

	}



}