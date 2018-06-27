
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

		for(let target of this.targets){

			console.log(target);
			target.element[target.methode](el.value);

		}


	}


	removeInput(){


	}



	match(e,el){

	console.log(this.targets);
		for(let target of this.targets){

			console.log(target);
			target.element[target.methode](el.value);

		}

	}



}