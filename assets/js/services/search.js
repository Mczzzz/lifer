class search {
	

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


	removeTarget(el){

		let it = 0;
		for(let target of this.targets){
			console.log(it);
			console.log(el);
			if(target.me == el){

				this.targets.splice(it,1);

			}

			break;
			it++;
			
		}

		console.log(it);
		console.log(this.targets);

	}


	removeInput(){


	}



	match(e,el){

		for(let target of this.targets){

			console.log(target);
			target.element[target.methode](el.value);

		}

	}



}

const instance = new search();
export { instance as SearchServices };
