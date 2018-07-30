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

			console.log(arrayPath);

			let dataRepresentation = this.dataCenter;

			for(let myPath of arrayPath ){

				if(!(dataRepresentation[myPath] instanceof Object)){
					dataRepresentation[myPath] = {};
				}

				dataRepresentation = dataRepresentation[myPath];

			}


		}


		this.dumpMe();
	}


	addData(path,dataArray){

		if(path.length == 0) return false;

		let arrayPath = path.split("/");

		console.log(arrayPath);

		let dataRepresentation = this.dataCenter;


		for(let myPath of arrayPath ){

			console.log(myPath);
			console.log(dataRepresentation);
			console.log(dataRepresentation[myPath]);

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

			arrayPath.splice(arrayPath.length - level, level);

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



	matcher(e,el){

		for(let target of this.targets){


			target.element[target.methode](el.value);

		}

	}



}

const instance = new Brain();
export { instance as Lifer };
