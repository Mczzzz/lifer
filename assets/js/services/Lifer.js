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


	addMe(path,me){


		this.dataCenter[me]={};

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
