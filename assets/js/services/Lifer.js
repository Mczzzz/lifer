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

		let arrayPath = path.split("/");

		let dataRepresentation = this.dataCenter;


		for(let myPath of arrayPath ){

			if(!(dataRepresentation[myPath] instanceof Object)){
				console.log('aie '+myPath+' not exist');
				return false;
			}

			dataRepresentation = dataRepresentation[myPath];

		}


		if(!(dataRepresentation._datas instanceof Object)){

			dataRepresentation._datas = {};

		}			

		for(let myData of dataArray ){
			console.log('myData');
			console.log(myData);
			dataRepresentation._datas[Object.keys(myData)[0]] = myData[Object.keys(myData)[0]];

		}


		if((dataRepresentation._trigger instanceof Object)){

//TODO : il faut controller s'il y a des objets a prevenirs


		}	



	}



	getData(path,Key, level = 0){


		if(path.length == 0) return false;

		let arrayPath = path.split("/");

		if(level > 0){

			console.log(arrayPath.length);
			console.log(arrayPath);
			arrayPath.splice(arrayPath.length - level, level);
			console.log(arrayPath);
		}

		let dataRepresentation = this.dataCenter;


		for(let myPath of arrayPath ){

			if(!(dataRepresentation[myPath] instanceof Object)){
				console.log('aie '+myPath+' not exist');
				return false;
			}

			dataRepresentation = dataRepresentation[myPath];

		}


		if(!(dataRepresentation._datas instanceof Object)){

			console.log('Pas de datas setter')
			return false;

		}			

		if(!(dataRepresentation._datas[Key] instanceof Object)){

			console.log("Cette clef de data n'existe pas");
			return false;

		}	


		return dataRepresentation._datas[Key];


	}



	addTrigger(path,data,callBack){




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


			target.element[target.methode](el.value);

		}

	}



}

const instance = new Brain();
export { instance as Lifer };
