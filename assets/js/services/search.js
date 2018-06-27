
export default class search {
	

	constructor(){

		this.targets = [];  
		this.inputs = [];
	}


	addTarget(elMethode){

		this.targets.push(elMethode);
		console.log('addTarget');
		console.log(this.targets);
	}

	addInput(el){
		console.log('addInput');
		this.inputs.push(el);	
		el.element.addEventListener("keyup", (e)=> this.match(e,el.element));

	}


	removeTarget(){


	}


	removeInput(){


	}



	match(e,el){

		console.log('in match');
		console.log(e);
		console.log(el);
		console.log(this.targets);

		for(let target of this.targets){
			console.log('in for');
			console.log(target);
			target.element[target.methode](el.value);

		}

	}



	//les élements s'enregistre à moi

	//je manipule ceux qui sont enregistrés


}