import { Lifer } from './services/Lifer.js';
import Main from './controller/home.js';

document.body.requestFullscreen();

Lifer.addMe('','app');

const LiferApp = new Main('app');


