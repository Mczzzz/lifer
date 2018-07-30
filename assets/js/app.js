import { Lifer } from './services/Lifer.js';
import Controller from './controller/Controller.js';

let name = "app";
Lifer.addMe('',name);
Lifer.addData(name + "/",[{"Level" : 0}]);

const LiferApp = new Controller(name);


