/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/like.js":
/*!***************************!*\
  !*** ./src/pages/like.js ***!
  \***************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

var likeHeartArray = document.querySelectorAll(".like-icon");
var likeButtonArray = document.querySelectorAll(".card__like-button");
var iconButtonArray = document.querySelectorAll(".card__icon-button");
iconButtonArray.forEach(function (iconButton, index) {
  iconButton.onclick = function () {
    return toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  };
});
likeButtonArray.forEach(function (button, index) {
  button.onclick = function () {
    return toggleIsLiked(likeHeartArray[index], button);
  };
});
function toggleIsLiked(heart, button) {
  heart.classList.toggle("is-liked");
  setButtonText(heart, button);
}
function setButtonText(heart, button) {
  if (_toConsumableArray(heart.classList).includes("is-liked")) {
    setTimeout(function () {
      return button.querySelector(".button__text").textContent = "Unlike";
    }, 500);
  } else {
    setTimeout(function () {
      return button.querySelector(".button__text").textContent = "Like";
    }, 500);
  }
}

/***/ }),

/***/ "./src/pages/set-theme.js":
/*!********************************!*\
  !*** ./src/pages/set-theme.js ***!
  \********************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* Этот скрипт использует имена классов theme-menu__button, theme-dark, theme-light и theme-auto;
еще атрибуты disabled и data-theme. Поэтому их нельзя менять в HTML. */

function changeTheme(theme) {
  document.documentElement.className = "";
  document.documentElement.classList.add("theme-".concat(theme));
  localStorage.setItem("theme", theme);
}
(function initTheme() {
  var theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
  }
})();
document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var themeButtons = document.querySelectorAll(".theme-menu__button");
  function setDisabled(theme) {
    themeButtons.forEach(function (item) {
      if (item.getAttribute("data-theme") === theme) {
        item.setAttribute("disabled", true);
      } else {
        item.removeAttribute("disabled");
      }
    });
  }
  if (_toConsumableArray(root.classList).includes("theme-light")) {
    setDisabled("light");
  } else if (_toConsumableArray(root.classList).includes("theme-dark")) {
    setDisabled("dark");
  } else {
    setDisabled("auto");
  }
  themeButtons.forEach(function (button) {
    button.onclick = function () {
      changeTheme(button.getAttribute("data-theme"));
      setDisabled(button.getAttribute("data-theme"));
    };
  });
});

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./like */ "./src/pages/like.js");
/* harmony import */ var _like__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_like__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _set_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-theme */ "./src/pages/set-theme.js");
/* harmony import */ var _set_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_set_theme__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWtyaXZheXVzY2hpeS10ZWctZi8uL3NyYy9wYWdlcy9saWtlLmpzIiwid2VicGFjazovL3pha3JpdmF5dXNjaGl5LXRlZy1mLy4vc3JjL3BhZ2VzL3NldC10aGVtZS5qcyIsIndlYnBhY2s6Ly96YWtyaXZheXVzY2hpeS10ZWctZi8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzk5ZDIiLCJ3ZWJwYWNrOi8vemFrcml2YXl1c2NoaXktdGVnLWYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vemFrcml2YXl1c2NoaXktdGVnLWYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vemFrcml2YXl1c2NoaXktdGVnLWYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3pha3JpdmF5dXNjaGl5LXRlZy1mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemFrcml2YXl1c2NoaXktdGVnLWYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly96YWtyaXZheXVzY2hpeS10ZWctZi8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiDRjdGC0L7RgiDRgdC60YDQuNC/0YIg0LjRgdC/0L7Qu9GM0LfRg9C10YIg0YLQsNC60LjQtSDQuNC80LXQvdCwINC60LvQsNGB0YHQvtCyOlxyXG7inKYgbGlrZS1pY29uIOKAlCDQtNC70Y8gc3ZnLdC40LrQvtC90LrQuCDQsNC90LjQvNC40YDQvtCy0LDQvdC90L7Qs9C+INGB0LXRgNC00YbQsFxyXG7inKYgY2FyZF9fbGlrZS1idXR0b24g4oCUINC00LvRjyDQutC90L7Qv9C60LggTGlrZSDRgNGP0LTQvtC8INGBINC40LrQvtC90LrQvtC5XHJcbuKcpiBjYXJkX19pY29uLWJ1dHRvbiDigJQg0LTQu9GPINC60L3QvtC/0LrQuCwg0L7QsdC+0YDQsNGH0LjQstCw0Y7RidC10Lkg0LjQutC+0L3QutGDXHJcbuKcpiBjYXJkX19pY29uLWJ1dHRvbiDigJQg0LTQu9GPINC60L3QvtC/0LrQuCwg0L7QsdC+0YDQsNGH0LjQstCw0Y7RidC10Lkg0LjQutC+0L3QutGDXHJcbuKcpiBpcy1saWtlZCDigJQg0LTQu9GPINC+0LHQvtC30L3QsNGH0LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNGPINC70LDQudC60L3Rg9GC0L7QuSDQuNC60L7QvdC60Lgg0LIg0LLQuNC00LUg0YHQtdGA0LTRhtCwXHJcbuKcpiBidXR0b25fX3RleHQg4oCUINC00LvRjyDQvtCx0L7Qt9C90LDRh9C10L3QuNGPINGC0LXQutGB0YLQvtCy0L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0LLQvdGD0YLRgNC4INC60L3QvtC/0LrQuFxyXG7QldGB0LvQuCDRjdGC0Lgg0LrQu9Cw0YHRgdGLINC/0L7QvNC10L3Rj9GC0Ywg0LIgSFRNTCwg0YHQutGA0LjQv9GCINC/0LXRgNC10YHRgtCw0L3QtdGCINGA0LDQsdC+0YLQsNGC0YwuINCR0YPQtNGM0YLQtSDQsNC60LrRg9GA0LDRgtC90YsuXHJcbiovXHJcblxyXG5jb25zdCBsaWtlSGVhcnRBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlrZS1pY29uXCIpO1xyXG5jb25zdCBsaWtlQnV0dG9uQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xyXG5jb25zdCBpY29uQnV0dG9uQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2ljb24tYnV0dG9uXCIpO1xyXG5cclxuaWNvbkJ1dHRvbkFycmF5LmZvckVhY2goKGljb25CdXR0b24sIGluZGV4KSA9PiB7XHJcbiAgaWNvbkJ1dHRvbi5vbmNsaWNrID0gKCkgPT5cclxuICAgIHRvZ2dsZUlzTGlrZWQobGlrZUhlYXJ0QXJyYXlbaW5kZXhdLCBsaWtlQnV0dG9uQXJyYXlbaW5kZXhdKTtcclxufSk7XHJcblxyXG5saWtlQnV0dG9uQXJyYXkuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG4gIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlSXNMaWtlZChsaWtlSGVhcnRBcnJheVtpbmRleF0sIGJ1dHRvbik7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlSXNMaWtlZChoZWFydCwgYnV0dG9uKSB7XHJcbiAgaGVhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWxpa2VkXCIpO1xyXG4gIHNldEJ1dHRvblRleHQoaGVhcnQsIGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEJ1dHRvblRleHQoaGVhcnQsIGJ1dHRvbikge1xyXG4gIGlmIChbLi4uaGVhcnQuY2xhc3NMaXN0XS5pbmNsdWRlcyhcImlzLWxpa2VkXCIpKSB7XHJcbiAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAoKSA9PiAoYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uX190ZXh0XCIpLnRleHRDb250ZW50ID0gXCJVbmxpa2VcIiksXHJcbiAgICAgIDUwMFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgKCkgPT4gKGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbl9fdGV4dFwiKS50ZXh0Q29udGVudCA9IFwiTGlrZVwiKSxcclxuICAgICAgNTAwXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvKiDQrdGC0L7RgiDRgdC60YDQuNC/0YIg0LjRgdC/0L7Qu9GM0LfRg9C10YIg0LjQvNC10L3QsCDQutC70LDRgdGB0L7QsiB0aGVtZS1tZW51X19idXR0b24sIHRoZW1lLWRhcmssIHRoZW1lLWxpZ2h0INC4IHRoZW1lLWF1dG87XHJcbtC10YnQtSDQsNGC0YDQuNCx0YPRgtGLIGRpc2FibGVkINC4IGRhdGEtdGhlbWUuINCf0L7RjdGC0L7QvNGDINC40YUg0L3QtdC70YzQt9GPINC80LXQvdGP0YLRjCDQsiBIVE1MLiAqL1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGhlbWUodGhlbWUpIHtcclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgdGhlbWUtJHt0aGVtZX1gKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcclxufVxyXG5cclxuKGZ1bmN0aW9uIGluaXRUaGVtZSgpIHtcclxuICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XHJcbiAgaWYgKHRoZW1lKSB7XHJcbiAgICBjaGFuZ2VUaGVtZSh0aGVtZSk7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgY29uc3QgdGhlbWVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aGVtZS1tZW51X19idXR0b25cIik7XHJcblxyXG4gIGZ1bmN0aW9uIHNldERpc2FibGVkKHRoZW1lKSB7XHJcbiAgICB0aGVtZUJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpID09PSB0aGVtZSkge1xyXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoWy4uLnJvb3QuY2xhc3NMaXN0XS5pbmNsdWRlcyhcInRoZW1lLWxpZ2h0XCIpKSB7XHJcbiAgICBzZXREaXNhYmxlZChcImxpZ2h0XCIpO1xyXG4gIH0gZWxzZSBpZiAoWy4uLnJvb3QuY2xhc3NMaXN0XS5pbmNsdWRlcyhcInRoZW1lLWRhcmtcIikpIHtcclxuICAgIHNldERpc2FibGVkKFwiZGFya1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0RGlzYWJsZWQoXCJhdXRvXCIpO1xyXG4gIH1cclxuXHJcbiAgdGhlbWVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZVRoZW1lKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpKTtcclxuICAgICAgc2V0RGlzYWJsZWQoYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1xyXG4gICAgfTtcclxuICB9KTtcclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBcIi4vbGlrZVwiO1xyXG5pbXBvcnQgXCIuL3NldC10aGVtZVwiO1xyXG4iXSwibmFtZXMiOlsibGlrZUhlYXJ0QXJyYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaWtlQnV0dG9uQXJyYXkiLCJpY29uQnV0dG9uQXJyYXkiLCJmb3JFYWNoIiwiaWNvbkJ1dHRvbiIsImluZGV4Iiwib25jbGljayIsInRvZ2dsZUlzTGlrZWQiLCJidXR0b24iLCJoZWFydCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNldEJ1dHRvblRleHQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjaGFuZ2VUaGVtZSIsInRoZW1lIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NOYW1lIiwiYWRkIiwiY29uY2F0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImluaXRUaGVtZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwicm9vdCIsInRoZW1lQnV0dG9ucyIsInNldERpc2FibGVkIiwiaXRlbSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=