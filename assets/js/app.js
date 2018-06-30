import { Lifer } from './services/Lifer.js';
import Main from './controller/home.js';

Lifer.addMe('','app');
Lifer.dumpMe();

const LiferApp = new Main('app');

