import * as PIXI from 'pixi.js';
import Frame from './services/frame.js';
import Main from './views/main.js';

//loader de Frame via custom Events
new Frame();

const LiferApp = new Main();

