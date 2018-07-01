class Brain {
	

	constructor(){

		this.dataCenter = {}; 

		//app.views.objects.footer.
/*							main.
							header.
							data[containerId
								 leafId]
							tigger[]*/
		

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


		}


	}


	addData(path,dataArray){

		if(path.length == 0) return false;

		console.log('in addData after Path length');
		let arrayPath = path.split("/");

		let dataRepresentation = this.dataCenter;


		for(let myPath of arrayPath ){

			if(!(dataRepresentation[myPath] instanceof Object)){
				console.log('aie '+myPath+' not exist');
				return false;
			}

			dataRepresentation = dataRepresentation[myPath];

		}


		if(!(dataRepresentation.datas instanceof Object)){
			dataRepresentation.datas = {};
		}			


		console.log(this.dataCenter);

		for(let myData of dataArray ){

			console.log(myData);

		}

		

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
