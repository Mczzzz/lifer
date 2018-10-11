/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/workers/ws.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/workers/ws.js":
/*!*********************************!*\
  !*** ./assets/js/workers/ws.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {


/////////////////////////////////////////
//INIT
/////////////////////////////////////////
// Install.
self.addEventListener('install', function (evt) {
  console.log('The service worker is being installed.');
  evt.waitUntil(active());
});

// Activate
function active() {
  self.addEventListener('activate', function (event) {
    console.log('activated!');
  });
}
//////////////////////////////////////////////


this.onmessage = function (event) {
  console.log("Got message in SW", event.data.text);

  if (event.source) {
    console.log("event.source present");
    event.source.postMessage("Woop!");
  } else if (self.clients) {
    console.log("Attempting postMessage via clients API");
    clients.matchAll().then(function (clients) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = clients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var client = _step.value;

          client.postMessage("Whoop! (via client api)");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  } else if (event.data.port) {
    event.data.port.postMessage("Woop!");
  } else {
    console.log('No useful return channel');
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY5YjkxNzQ3OWQwOWZmZmJjNGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3dvcmtlcnMvd3MuanMiXSwibmFtZXMiOlsic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJjb25zb2xlIiwibG9nIiwid2FpdFVudGlsIiwiYWN0aXZlIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJkYXRhIiwidGV4dCIsInNvdXJjZSIsInBvc3RNZXNzYWdlIiwiY2xpZW50cyIsIm1hdGNoQWxsIiwidGhlbiIsImNsaWVudCIsInBvcnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsS0FBS0MsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsVUFBU0MsR0FBVCxFQUFjO0FBQzdDQyxVQUFRQyxHQUFSLENBQVksd0NBQVo7QUFDQUYsTUFBSUcsU0FBSixDQUFjQyxRQUFkO0FBQ0QsQ0FIRDs7QUFLQTtBQUNBLFNBQVNBLE1BQVQsR0FBa0I7QUFDbEJOLE9BQUtDLGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDLFVBQVNNLEtBQVQsRUFBZTtBQUM3Q0osWUFBUUMsR0FBUixDQUFZLFlBQVo7QUFDSCxHQUZEO0FBR0M7QUFDRDs7O0FBR0EsS0FBS0ksU0FBTCxHQUFpQixVQUFTRCxLQUFULEVBQWdCO0FBQy9CSixVQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNHLE1BQU1FLElBQU4sQ0FBV0MsSUFBNUM7O0FBRUEsTUFBSUgsTUFBTUksTUFBVixFQUFrQjtBQUNoQlIsWUFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FHLFVBQU1JLE1BQU4sQ0FBYUMsV0FBYixDQUF5QixPQUF6QjtBQUNELEdBSEQsTUFJSyxJQUFJWixLQUFLYSxPQUFULEVBQWtCO0FBQ3JCVixZQUFRQyxHQUFSLENBQVksd0NBQVo7QUFDQVMsWUFBUUMsUUFBUixHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBU0YsT0FBVCxFQUFrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN4Qyw2QkFBbUJBLE9BQW5CLDhIQUE0QjtBQUFBLGNBQW5CRyxNQUFtQjs7QUFDMUJBLGlCQUFPSixXQUFQLENBQW1CLHlCQUFuQjtBQUNEO0FBSHVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJekMsS0FKRDtBQUtELEdBUEksTUFRQSxJQUFJTCxNQUFNRSxJQUFOLENBQVdRLElBQWYsRUFBcUI7QUFDeEJWLFVBQU1FLElBQU4sQ0FBV1EsSUFBWCxDQUFnQkwsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxHQUZJLE1BR0E7QUFDSFQsWUFBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0Q7QUFDRixDQXJCRCxDIiwiZmlsZSI6IndzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvd29ya2Vycy93cy5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZjliOTE3NDc5ZDA5ZmZmYmM0YyIsIlxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL0lOSVRcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gSW5zdGFsbC5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgY29uc29sZS5sb2coJ1RoZSBzZXJ2aWNlIHdvcmtlciBpcyBiZWluZyBpbnN0YWxsZWQuJyk7XHJcbiAgZXZ0LndhaXRVbnRpbChhY3RpdmUoKSk7XHJcbn0pO1xyXG5cclxuLy8gQWN0aXZhdGVcclxuZnVuY3Rpb24gYWN0aXZlKCkge1xyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgY29uc29sZS5sb2coJ2FjdGl2YXRlZCEnKTtcclxufSk7XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbnRoaXMub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIkdvdCBtZXNzYWdlIGluIFNXXCIsIGV2ZW50LmRhdGEudGV4dCk7XHJcblxyXG4gIGlmIChldmVudC5zb3VyY2UpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXZlbnQuc291cmNlIHByZXNlbnRcIik7XHJcbiAgICBldmVudC5zb3VyY2UucG9zdE1lc3NhZ2UoXCJXb29wIVwiKTtcclxuICB9XHJcbiAgZWxzZSBpZiAoc2VsZi5jbGllbnRzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgcG9zdE1lc3NhZ2UgdmlhIGNsaWVudHMgQVBJXCIpO1xyXG4gICAgY2xpZW50cy5tYXRjaEFsbCgpLnRoZW4oZnVuY3Rpb24oY2xpZW50cykge1xyXG4gICAgICBmb3IgKHZhciBjbGllbnQgb2YgY2xpZW50cykge1xyXG4gICAgICAgIGNsaWVudC5wb3N0TWVzc2FnZShcIldob29wISAodmlhIGNsaWVudCBhcGkpXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSBpZiAoZXZlbnQuZGF0YS5wb3J0KSB7XHJcbiAgICBldmVudC5kYXRhLnBvcnQucG9zdE1lc3NhZ2UoXCJXb29wIVwiKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnTm8gdXNlZnVsIHJldHVybiBjaGFubmVsJyk7XHJcbiAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy93b3JrZXJzL3dzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==