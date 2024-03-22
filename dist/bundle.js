/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayBoard: () => (/* binding */ displayBoard)
/* harmony export */ });
const displayBoard = function (board) {
  for (let node of board) {
    const square = document.createElement("div");
    square.classList.add("square");
    document.body.appendChild(square);
  }
};




/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");


function Gameboard() {
  let shipTotal = 0;
  let sunkTotal = 0;

  // build board
  let squares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      squares.push(Node(i, j));
    }
  }

  const coordinateToIndex = function (coordinate) {
    // converts a coordinate into the corresponding index of the squares array
    return coordinate[0] * 10 + coordinate[1];
  };

  const placeShip = function (type, coordinate, orientation) {
    // The given coordinate will refer to either the leftmost or topmost coordinate of the ship,
    // depending on whether the orientation is horizontal or vertical
    let ship = (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(type);
    const length = ship.length;
    if (orientation === "horizontal") {
      for (let i = 0; i < length; i++) {
        squares[coordinateToIndex(coordinate) + i].occupiedBy = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        squares[coordinateToIndex(coordinate) + i * 10].occupiedBy = ship;
      }
    }
    shipTotal++;
  };

  const receiveAttack = function (coordinate) {
    const attackedSquare = squares[coordinateToIndex(coordinate)];
    if (attackedSquare.occupiedBy) {
      attackedSquare.occupiedBy.hit();
      attackedSquare.hit = true;
      if (attackedSquare.occupiedBy.isSunk()) sunkTotal++;
    } else {
      attackedSquare.miss = true;
    }
  };

  const allSunk = function () {
    return shipTotal === sunkTotal;
  };

  return { squares, placeShip, receiveAttack, allSunk, coordinateToIndex };
}

function Node(row, column) {
  return {
    occupiedBy: undefined,
    coordinate: [row, column],
    miss: false,
    hit: false,
  };
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");


function Player(type) {
  const randomInt = function (max) {
    return Math.floor(Math.random() * (max + 1));
  };

  const takeTurn = function (enemy, coordinate) {
    if (type === "user") {
      let square =
        enemy.board.squares[enemy.board.coordinateToIndex(coordinate)];
      if (!square.miss && !square.hit) enemy.board.receiveAttack(coordinate);
    } else if (type === "computer") {
      let square = enemy.board.squares[randomInt(99)];
      while (square.miss || square.hit) {
        square = enemy.board.squares[randomInt(99)];
      }
      enemy.board.receiveAttack(square.coordinate);
    }
  };

  return { board: (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), takeTurn };
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(type) {
  let length;
  switch (type) {
    case "destroyer":
      length = 2;
      break;
    case "submarine":
      length = 3;
      break;
    case "cruiser":
      length = 3;
      break;
    case "battleship":
      length = 4;
      break;
    case "carrier":
      length = 5;
      break;
  }

  let hits = 0;

  const hit = function () {
    hits++;
  };

  const isSunk = function () {
    return hits === length;
  };

  const getHits = function () {
    return hits;
  };

  return { length, hit, isSunk, type, getHits };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");





// game loop
const user = (0,_Player_js__WEBPACK_IMPORTED_MODULE_2__["default"])("user");
const computer = (0,_Player_js__WEBPACK_IMPORTED_MODULE_2__["default"])("computer");

user.board.placeShip("destroyer", [0, 0], "horizontal");
user.board.placeShip("submarine", [2, 0], "vertical");
user.board.placeShip("cruiser", [4, 2], "horizontal");
user.board.placeShip("battleship", [7, 0], "horizontal");
user.board.placeShip("carrier", [9, 2], "horizontal");

computer.board.placeShip("destroyer", [0, 0], "horizontal");
computer.board.placeShip("submarine", [2, 0], "horizontal");
computer.board.placeShip("cruiser", [4, 2], "horizontal");
computer.board.placeShip("battleship", [7, 0], "horizontal");
computer.board.placeShip("carrier", [9, 2], "horizontal");

(0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(user.board.squares);
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(computer.board.squares);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDUks7O0FBRWQ7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBSTtBQUNuQjtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0R1Qzs7QUFFeEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLE9BQU8seURBQVM7QUFDM0I7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNVO0FBQ047QUFDTzs7QUFFeEM7QUFDQSxhQUFhLHNEQUFNO0FBQ25CLGlCQUFpQixzREFBTTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFZO0FBQ1oscURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzcGxheUJvYXJkID0gZnVuY3Rpb24gKGJvYXJkKSB7XG4gIGZvciAobGV0IG5vZGUgb2YgYm9hcmQpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheUJvYXJkIH07XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgbGV0IHNoaXBUb3RhbCA9IDA7XG4gIGxldCBzdW5rVG90YWwgPSAwO1xuXG4gIC8vIGJ1aWxkIGJvYXJkXG4gIGxldCBzcXVhcmVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgc3F1YXJlcy5wdXNoKE5vZGUoaSwgaikpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvb3JkaW5hdGVUb0luZGV4ID0gZnVuY3Rpb24gKGNvb3JkaW5hdGUpIHtcbiAgICAvLyBjb252ZXJ0cyBhIGNvb3JkaW5hdGUgaW50byB0aGUgY29ycmVzcG9uZGluZyBpbmRleCBvZiB0aGUgc3F1YXJlcyBhcnJheVxuICAgIHJldHVybiBjb29yZGluYXRlWzBdICogMTAgKyBjb29yZGluYXRlWzFdO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uICh0eXBlLCBjb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuICAgIC8vIFRoZSBnaXZlbiBjb29yZGluYXRlIHdpbGwgcmVmZXIgdG8gZWl0aGVyIHRoZSBsZWZ0bW9zdCBvciB0b3Btb3N0IGNvb3JkaW5hdGUgb2YgdGhlIHNoaXAsXG4gICAgLy8gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIG9yaWVudGF0aW9uIGlzIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICBsZXQgc2hpcCA9IFNoaXAodHlwZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzcXVhcmVzW2Nvb3JkaW5hdGVUb0luZGV4KGNvb3JkaW5hdGUpICsgaV0ub2NjdXBpZWRCeSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3F1YXJlc1tjb29yZGluYXRlVG9JbmRleChjb29yZGluYXRlKSArIGkgKiAxMF0ub2NjdXBpZWRCeSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHNoaXBUb3RhbCsrO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGF0dGFja2VkU3F1YXJlID0gc3F1YXJlc1tjb29yZGluYXRlVG9JbmRleChjb29yZGluYXRlKV07XG4gICAgaWYgKGF0dGFja2VkU3F1YXJlLm9jY3VwaWVkQnkpIHtcbiAgICAgIGF0dGFja2VkU3F1YXJlLm9jY3VwaWVkQnkuaGl0KCk7XG4gICAgICBhdHRhY2tlZFNxdWFyZS5oaXQgPSB0cnVlO1xuICAgICAgaWYgKGF0dGFja2VkU3F1YXJlLm9jY3VwaWVkQnkuaXNTdW5rKCkpIHN1bmtUb3RhbCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRhY2tlZFNxdWFyZS5taXNzID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hpcFRvdGFsID09PSBzdW5rVG90YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3F1YXJlcywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCBjb29yZGluYXRlVG9JbmRleCB9O1xufVxuXG5mdW5jdGlvbiBOb2RlKHJvdywgY29sdW1uKSB7XG4gIHJldHVybiB7XG4gICAgb2NjdXBpZWRCeTogdW5kZWZpbmVkLFxuICAgIGNvb3JkaW5hdGU6IFtyb3csIGNvbHVtbl0sXG4gICAgbWlzczogZmFsc2UsXG4gICAgaGl0OiBmYWxzZSxcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih0eXBlKSB7XG4gIGNvbnN0IHJhbmRvbUludCA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCArIDEpKTtcbiAgfTtcblxuICBjb25zdCB0YWtlVHVybiA9IGZ1bmN0aW9uIChlbmVteSwgY29vcmRpbmF0ZSkge1xuICAgIGlmICh0eXBlID09PSBcInVzZXJcIikge1xuICAgICAgbGV0IHNxdWFyZSA9XG4gICAgICAgIGVuZW15LmJvYXJkLnNxdWFyZXNbZW5lbXkuYm9hcmQuY29vcmRpbmF0ZVRvSW5kZXgoY29vcmRpbmF0ZSldO1xuICAgICAgaWYgKCFzcXVhcmUubWlzcyAmJiAhc3F1YXJlLmhpdCkgZW5lbXkuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgbGV0IHNxdWFyZSA9IGVuZW15LmJvYXJkLnNxdWFyZXNbcmFuZG9tSW50KDk5KV07XG4gICAgICB3aGlsZSAoc3F1YXJlLm1pc3MgfHwgc3F1YXJlLmhpdCkge1xuICAgICAgICBzcXVhcmUgPSBlbmVteS5ib2FyZC5zcXVhcmVzW3JhbmRvbUludCg5OSldO1xuICAgICAgfVxuICAgICAgZW5lbXkuYm9hcmQucmVjZWl2ZUF0dGFjayhzcXVhcmUuY29vcmRpbmF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGJvYXJkOiBHYW1lYm9hcmQoKSwgdGFrZVR1cm4gfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAodHlwZSkge1xuICBsZXQgbGVuZ3RoO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiZGVzdHJveWVyXCI6XG4gICAgICBsZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJhdHRsZXNoaXBcIjpcbiAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgbGVuZ3RoID0gNTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBoaXRzKys7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoaXRzID09PSBsZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0SGl0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGl0cztcbiAgfTtcblxuICByZXR1cm4geyBsZW5ndGgsIGhpdCwgaXNTdW5rLCB0eXBlLCBnZXRIaXRzIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXAuanNcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllci5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheUJvYXJkIH0gZnJvbSBcIi4vRE9NLmpzXCI7XG5cbi8vIGdhbWUgbG9vcFxuY29uc3QgdXNlciA9IFBsYXllcihcInVzZXJcIik7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuXG51c2VyLmJvYXJkLnBsYWNlU2hpcChcImRlc3Ryb3llclwiLCBbMCwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbnVzZXIuYm9hcmQucGxhY2VTaGlwKFwic3VibWFyaW5lXCIsIFsyLCAwXSwgXCJ2ZXJ0aWNhbFwiKTtcbnVzZXIuYm9hcmQucGxhY2VTaGlwKFwiY3J1aXNlclwiLCBbNCwgMl0sIFwiaG9yaXpvbnRhbFwiKTtcbnVzZXIuYm9hcmQucGxhY2VTaGlwKFwiYmF0dGxlc2hpcFwiLCBbNywgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbnVzZXIuYm9hcmQucGxhY2VTaGlwKFwiY2FycmllclwiLCBbOSwgMl0sIFwiaG9yaXpvbnRhbFwiKTtcblxuY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKFwiZGVzdHJveWVyXCIsIFswLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKFwic3VibWFyaW5lXCIsIFsyLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKFwiY3J1aXNlclwiLCBbNCwgMl0sIFwiaG9yaXpvbnRhbFwiKTtcbmNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcChcImJhdHRsZXNoaXBcIiwgWzcsIDBdLCBcImhvcml6b250YWxcIik7XG5jb21wdXRlci5ib2FyZC5wbGFjZVNoaXAoXCJjYXJyaWVyXCIsIFs5LCAyXSwgXCJob3Jpem9udGFsXCIpO1xuXG5kaXNwbGF5Qm9hcmQodXNlci5ib2FyZC5zcXVhcmVzKTtcbmRpc3BsYXlCb2FyZChjb21wdXRlci5ib2FyZC5zcXVhcmVzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==