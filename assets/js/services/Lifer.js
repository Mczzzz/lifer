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

		let testeur = "yi/yu";

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


	addMe(path,me){

		if(path.length > 0){
			this.dataCenter[path][me]={};
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
