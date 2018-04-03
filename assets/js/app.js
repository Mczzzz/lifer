import * as PIXI from 'pixi.js';
import Main from './controller/main.js';

//loader de Frame via custom Events
//console.log(moment(123456).fromNow());

navigator.geolocation.getCurrentPosition(function(location) {
  console.log(location.coords.latitude);
  console.log(location.coords.longitude);
  console.log(location.coords.accuracy);

});
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.devicePixelRatio);

const LiferApp = new Main();

