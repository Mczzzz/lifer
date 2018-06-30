import { Lifer } from './services/Lifer.js';
import Main from './controller/home.js';

const LiferApp = new Main();

Lifer.addMe('','app');
Lifer.dumpMe();