class Brain {
	

	constructor(){

		this.dataCenter = {}; 

		//app.views.objects.footer.
/*							main.
							header.
							data[containerId
								 leafId]
							tigger[]*/
		let toto = {};
		let witi = "yi";
		 toto[witi] = {};
		let tata = "ya";

		let tutu = "yu";

		let testeur = "yi/yu/yaya/yiyi/coucou/kiki";

		let arrayPath = testeur.split("/");

		let FinalObject = toto;

		for(let myPath of arrayPath ){

			if(!(FinalObject[myPath] instanceof Object)){
				FinalObject[myPath] = {};
			}

			FinalObject = FinalObject[myPath];

		}


	//	 toto["yi"]["yu"] = {};

		console.log(toto);				

	}


	dumpMe(){

		console.log(this.dataCenter);

	}



addMe(path){

		if(path.length > 0){

			let arrayPath = path.split("/");

			let dataRepresentation = this.dataCenter;

			for(let myPath of arrayPath ){

				if(!(dataRepresentation[myPath] instanceof Object)){
					dataRepresentation[myPath] = {};
				}

				dataRepresentation = dataRepresentation[myPath];

			}


		}else{
			
			this.dataCenter[me]={};
		
		}


	}


	addData(path,data){



		this.targets.push(elMethode);

	}


	addTrigger(path,data,callBack){



		this.targets.push(elMethode);

	}



/*	removeTarget(el){

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

	}*/





	matcher(e,el){

		for(let target of this.targets){

			console.log(target);
			target.element[target.methode](el.value);

		}

	}



}

const instance = new Brain();
export { instance as Lifer };
