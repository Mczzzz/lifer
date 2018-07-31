import { Lifer } from './services/Lifer.js';
import Controller from './controller/Controller.js';

let name = "app";
console.log("addme app");
Lifer.addMe(name);
console.log("adddata app level 0");
Lifer.addData(name,[{"Level" : 0}]);

const LiferApp = new Controller(name);


