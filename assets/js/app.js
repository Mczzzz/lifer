import { Lifer } from './services/Lifer.js';
import Main from './controller/appController.js';

let name = "app";
Lifer.addMe('',name);
Lifer.addData(name,[{"Level" : 0}]);

const LiferApp = new Main(name);


