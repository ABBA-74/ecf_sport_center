(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./say-hello-controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/say-hello-controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'symfony--ux-typed': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-typed/dist/controller.js */ "./vendor/symfony/ux-typed/Resources/assets/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

/* harmony default export */ __webpack_exports__["default"] = (class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
  connect() {
    this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
  }

});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/say-hello-controller.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/say-hello-controller.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _class; }
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class _class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
  greet() {
    this.outputTarget.textContent = "Hello, ".concat(this.nameTarget.value, "!");
  }

}

_defineProperty(_class, "targets", ['name', 'output']);

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scss/style.scss */ "./assets/styles/scss/style.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _javascript_test_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/test_1 */ "./assets/javascript/test_1.js");
/* harmony import */ var _javascript_test_1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_javascript_test_1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _javascript_test_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/test_2 */ "./assets/javascript/test_2.js");
/* harmony import */ var _javascript_test_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_javascript_test_2__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
console.log('test js!!!'); // any CSS you import will output into a single css file (app.css in this case)


 // start the Stimulus application

 // compile new javascript file


 // const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js"); // or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');
// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": function() { return /* binding */ app; }
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

const app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/javascript/test_1.js":
/*!*************************************!*\
  !*** ./assets/javascript/test_1.js ***!
  \*************************************/
/***/ (function() {

// alert('test_1');
const btnListStructure = document.querySelector('.btn-display-list-structure');
const btnCardStructure = document.querySelector('.btn-display-card-structure');
const cardsStructure = document.querySelector('.container-cards-structure');
const tableStructure = document.querySelector('.container-table-structure');

const handleDisplayListStructure = () => {
  tableStructure.classList.remove('d-none');
  cardsStructure.classList.add('d-none'); //   btnListStructure.classList.remove('btn-primary');
  //   btnListStructure.classList.add('btn-outline-primary');
  //   //   btnCardStructure.classList.remove('btn-outline-primary');
  //   //   btnCardStructure.classList.add('btn-primary');
};

const handleDisplayCardStructure = () => {
  tableStructure.classList.add('d-none');
  cardsStructure.classList.remove('d-none'); //   //   btnListStructure.classList.remove('btn-outline-primary');
  //   //   btnListStructure.classList.add('btn-primary');
  //   btnCardStructure.classList.remove('btn-primary');
  //   btnCardStructure.classList.add('btn-outline-primary');
};

if (btnListStructure != null && btnCardStructure != null) {
  btnListStructure.addEventListener('click', handleDisplayListStructure);
  btnCardStructure.addEventListener('click', handleDisplayCardStructure);
  window.addEventListener('resize', e => {
    if (window.innerWidth < 992) {
      handleDisplayCardStructure();
    }
  });
} // ----------------


var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});

/***/ }),

/***/ "./assets/javascript/test_2.js":
/*!*************************************!*\
  !*** ./assets/javascript/test_2.js ***!
  \*************************************/
/***/ (function() {

// alert('test_2');
// export default function (name) {
//   return `Welcome, ${name}`;
// }

/***/ }),

/***/ "./vendor/symfony/ux-typed/Resources/assets/dist/controller.js":
/*!*********************************************************************!*\
  !*** ./vendor/symfony/ux-typed/Resources/assets/dist/controller.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ default_1; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);




class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_1__.Controller {
  connect() {
    const options = {
      strings: this.stringsValue,
      typeSpeed: this.typeSpeedValue,
      smartBackspace: this.smartBackspaceValue,
      startDelay: this.startDelayValue,
      backSpeed: this.backSpeedValue,
      shuffle: this.shuffleValue,
      backDelay: this.backDelayValue,
      fadeOut: this.fadeOutValue,
      fadeOutClass: this.fadeOutClassValue,
      fadeOutDelay: this.fadeOutDelayValue,
      loop: this.loopValue,
      loopCount: this.loopCountValue,
      showCursor: this.showCursorValue,
      cursorChar: this.cursorCharValue,
      autoInsertCss: this.autoInsertCssValue,
      attr: this.attrValue,
      bindInputFocusEvents: this.bindInputFocusEventsValue,
      contentType: this.contentTypeValue
    };

    this._dispatchEvent('typed:pre-connect', {
      options
    });

    const typed = new (typed_js__WEBPACK_IMPORTED_MODULE_2___default())(this.element, options);

    this._dispatchEvent('typed:connect', {
      typed,
      options
    });
  }

  _dispatchEvent(name, payload) {
    this.element.dispatchEvent(new CustomEvent(name, {
      detail: payload,
      bubbles: true
    }));
  }

}

default_1.values = {
  strings: Array,
  typeSpeed: {
    type: Number,
    default: 30
  },
  smartBackspace: {
    type: Boolean,
    default: true
  },
  startDelay: Number,
  backSpeed: Number,
  shuffle: Boolean,
  backDelay: {
    type: Number,
    default: 700
  },
  fadeOut: Boolean,
  fadeOutClass: {
    type: String,
    default: 'typed-fade-out'
  },
  fadeOutDelay: {
    type: Number,
    default: 500
  },
  loop: Boolean,
  loopCount: {
    type: Number,
    default: Infinity
  },
  showCursor: {
    type: Boolean,
    default: true
  },
  cursorChar: {
    type: String,
    default: '.'
  },
  autoInsertCss: {
    type: Boolean,
    default: true
  },
  attr: String,
  bindInputFocusEvents: Boolean,
  contentType: {
    type: String,
    default: 'html'
  }
};


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/scss/style.scss":
/*!***************************************!*\
  !*** ./assets/styles/scss/style.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-281964"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWRHO0VBZWZwQixhQUFhLEVBQUU7SUFBRWtCLElBQUksRUFBRUcsT0FBUjtJQUFpQkQsT0FBTyxFQUFFO0VBQTFCLENBZkE7RUFnQmZsQixJQUFJLEVBQUVvQixNQWhCUztFQWlCZmxCLG9CQUFvQixFQUFFaUIsT0FqQlA7RUFrQmZmLFdBQVcsRUFBRTtJQUFFWSxJQUFJLEVBQUVJLE1BQVI7SUFBZ0JGLE9BQU8sRUFBRTtFQUF6QjtBQWxCRSxDQUFuQjs7Ozs7Ozs7Ozs7OztBQ2pDQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3NheS1oZWxsby1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvamF2YXNjcmlwdC90ZXN0XzEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2phdmFzY3JpcHQvdGVzdF8yLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR5cGVkL1Jlc291cmNlcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/M2U4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGUuc2Nzcz81YzhjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vc2F5LWhlbGxvLWNvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9zYXktaGVsbG8tY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXR5cGVkJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXR5cGVkL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgdGFyZ2V0cyA9IFsnbmFtZScsICdvdXRwdXQnXTtcclxuXHJcbiAgZ3JlZXQoKSB7XHJcbiAgICB0aGlzLm91dHB1dFRhcmdldC50ZXh0Q29udGVudCA9IGBIZWxsbywgJHt0aGlzLm5hbWVUYXJnZXQudmFsdWV9IWA7XHJcbiAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbmNvbnNvbGUubG9nKCd0ZXN0IGpzISEhJyk7XHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbi8vIGNvbXBpbGUgbmV3IGphdmFzY3JpcHQgZmlsZVxyXG5pbXBvcnQgJy4vamF2YXNjcmlwdC90ZXN0XzEnO1xyXG5pbXBvcnQgJy4vamF2YXNjcmlwdC90ZXN0XzInO1xyXG5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxyXG4vLyB0aGUgYm9vdHN0cmFwIG1vZHVsZSBkb2Vzbid0IGV4cG9ydC9yZXR1cm4gYW55dGhpbmdcclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcblxyXG4vLyBvciB5b3UgY2FuIGluY2x1ZGUgc3BlY2lmaWMgcGllY2VzXHJcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnKTtcclxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3ZlcicpO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG4vLyB9KTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiLy8gYWxlcnQoJ3Rlc3RfMScpO1xyXG5cclxuY29uc3QgYnRuTGlzdFN0cnVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZGlzcGxheS1saXN0LXN0cnVjdHVyZScpO1xyXG5jb25zdCBidG5DYXJkU3RydWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kaXNwbGF5LWNhcmQtc3RydWN0dXJlJyk7XHJcbmNvbnN0IGNhcmRzU3RydWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1jYXJkcy1zdHJ1Y3R1cmUnKTtcclxuY29uc3QgdGFibGVTdHJ1Y3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRhYmxlLXN0cnVjdHVyZScpO1xyXG5cclxuY29uc3QgaGFuZGxlRGlzcGxheUxpc3RTdHJ1Y3R1cmUgPSAoKSA9PiB7XHJcbiAgdGFibGVTdHJ1Y3R1cmUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgY2FyZHNTdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgLy8gICBidG5MaXN0U3RydWN0dXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgLy8gICBidG5MaXN0U3RydWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuICAvLyAgIC8vICAgYnRuQ2FyZFN0cnVjdHVyZS5jbGFzc0xpc3QucmVtb3ZlKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcbiAgLy8gICAvLyAgIGJ0bkNhcmRTdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKTtcclxufTtcclxuY29uc3QgaGFuZGxlRGlzcGxheUNhcmRTdHJ1Y3R1cmUgPSAoKSA9PiB7XHJcbiAgdGFibGVTdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgY2FyZHNTdHJ1Y3R1cmUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgLy8gICAvLyAgIGJ0bkxpc3RTdHJ1Y3R1cmUuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG4gIC8vICAgLy8gICBidG5MaXN0U3RydWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgLy8gICBidG5DYXJkU3RydWN0dXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgLy8gICBidG5DYXJkU3RydWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxufTtcclxuaWYgKGJ0bkxpc3RTdHJ1Y3R1cmUgIT0gbnVsbCAmJiBidG5DYXJkU3RydWN0dXJlICE9IG51bGwpIHtcclxuICBidG5MaXN0U3RydWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGlzcGxheUxpc3RTdHJ1Y3R1cmUpO1xyXG4gIGJ0bkNhcmRTdHJ1Y3R1cmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEaXNwbGF5Q2FyZFN0cnVjdHVyZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTIpIHtcclxuICAgICAgaGFuZGxlRGlzcGxheUNhcmRTdHJ1Y3R1cmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgbXlNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XHJcbnZhciBteUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SW5wdXQnKTtcclxuXHJcbm15TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgbXlJbnB1dC5mb2N1cygpO1xyXG59KTtcclxuIiwiLy8gYWxlcnQoJ3Rlc3RfMicpO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUpIHtcclxuLy8gICByZXR1cm4gYFdlbGNvbWUsICR7bmFtZX1gO1xyXG4vLyB9XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHN0cmluZ3M6IHRoaXMuc3RyaW5nc1ZhbHVlLFxuICAgICAgICAgICAgdHlwZVNwZWVkOiB0aGlzLnR5cGVTcGVlZFZhbHVlLFxuICAgICAgICAgICAgc21hcnRCYWNrc3BhY2U6IHRoaXMuc21hcnRCYWNrc3BhY2VWYWx1ZSxcbiAgICAgICAgICAgIHN0YXJ0RGVsYXk6IHRoaXMuc3RhcnREZWxheVZhbHVlLFxuICAgICAgICAgICAgYmFja1NwZWVkOiB0aGlzLmJhY2tTcGVlZFZhbHVlLFxuICAgICAgICAgICAgc2h1ZmZsZTogdGhpcy5zaHVmZmxlVmFsdWUsXG4gICAgICAgICAgICBiYWNrRGVsYXk6IHRoaXMuYmFja0RlbGF5VmFsdWUsXG4gICAgICAgICAgICBmYWRlT3V0OiB0aGlzLmZhZGVPdXRWYWx1ZSxcbiAgICAgICAgICAgIGZhZGVPdXRDbGFzczogdGhpcy5mYWRlT3V0Q2xhc3NWYWx1ZSxcbiAgICAgICAgICAgIGZhZGVPdXREZWxheTogdGhpcy5mYWRlT3V0RGVsYXlWYWx1ZSxcbiAgICAgICAgICAgIGxvb3A6IHRoaXMubG9vcFZhbHVlLFxuICAgICAgICAgICAgbG9vcENvdW50OiB0aGlzLmxvb3BDb3VudFZhbHVlLFxuICAgICAgICAgICAgc2hvd0N1cnNvcjogdGhpcy5zaG93Q3Vyc29yVmFsdWUsXG4gICAgICAgICAgICBjdXJzb3JDaGFyOiB0aGlzLmN1cnNvckNoYXJWYWx1ZSxcbiAgICAgICAgICAgIGF1dG9JbnNlcnRDc3M6IHRoaXMuYXV0b0luc2VydENzc1ZhbHVlLFxuICAgICAgICAgICAgYXR0cjogdGhpcy5hdHRyVmFsdWUsXG4gICAgICAgICAgICBiaW5kSW5wdXRGb2N1c0V2ZW50czogdGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50c1ZhbHVlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IHRoaXMuY29udGVudFR5cGVWYWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgndHlwZWQ6cHJlLWNvbm5lY3QnLCB7IG9wdGlvbnMgfSk7XG4gICAgICAgIGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3R5cGVkOmNvbm5lY3QnLCB7IHR5cGVkLCBvcHRpb25zIH0pO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBzdHJpbmdzOiBBcnJheSxcbiAgICB0eXBlU3BlZWQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAzMCB9LFxuICAgIHNtYXJ0QmFja3NwYWNlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBzdGFydERlbGF5OiBOdW1iZXIsXG4gICAgYmFja1NwZWVkOiBOdW1iZXIsXG4gICAgc2h1ZmZsZTogQm9vbGVhbixcbiAgICBiYWNrRGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA3MDAgfSxcbiAgICBmYWRlT3V0OiBCb29sZWFuLFxuICAgIGZhZGVPdXRDbGFzczogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd0eXBlZC1mYWRlLW91dCcgfSxcbiAgICBmYWRlT3V0RGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA1MDAgfSxcbiAgICBsb29wOiBCb29sZWFuLFxuICAgIGxvb3BDb3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IEluZmluaXR5IH0sXG4gICAgc2hvd0N1cnNvcjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgY3Vyc29yQ2hhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcuJyB9LFxuICAgIGF1dG9JbnNlcnRDc3M6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGF0dHI6IFN0cmluZyxcbiAgICBiaW5kSW5wdXRGb2N1c0V2ZW50czogQm9vbGVhbixcbiAgICBjb250ZW50VHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdodG1sJyB9LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0Iiwib3V0cHV0VGFyZ2V0IiwibmFtZVRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsImJ0bkxpc3RTdHJ1Y3R1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidG5DYXJkU3RydWN0dXJlIiwiY2FyZHNTdHJ1Y3R1cmUiLCJ0YWJsZVN0cnVjdHVyZSIsImhhbmRsZURpc3BsYXlMaXN0U3RydWN0dXJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGFuZGxlRGlzcGxheUNhcmRTdHJ1Y3R1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZSIsImlubmVyV2lkdGgiLCJteU1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJteUlucHV0IiwiZm9jdXMiLCJUeXBlZCIsImRlZmF1bHRfMSIsIm9wdGlvbnMiLCJzdHJpbmdzIiwic3RyaW5nc1ZhbHVlIiwidHlwZVNwZWVkIiwidHlwZVNwZWVkVmFsdWUiLCJzbWFydEJhY2tzcGFjZSIsInNtYXJ0QmFja3NwYWNlVmFsdWUiLCJzdGFydERlbGF5Iiwic3RhcnREZWxheVZhbHVlIiwiYmFja1NwZWVkIiwiYmFja1NwZWVkVmFsdWUiLCJzaHVmZmxlIiwic2h1ZmZsZVZhbHVlIiwiYmFja0RlbGF5IiwiYmFja0RlbGF5VmFsdWUiLCJmYWRlT3V0IiwiZmFkZU91dFZhbHVlIiwiZmFkZU91dENsYXNzIiwiZmFkZU91dENsYXNzVmFsdWUiLCJmYWRlT3V0RGVsYXkiLCJmYWRlT3V0RGVsYXlWYWx1ZSIsImxvb3AiLCJsb29wVmFsdWUiLCJsb29wQ291bnQiLCJsb29wQ291bnRWYWx1ZSIsInNob3dDdXJzb3IiLCJzaG93Q3Vyc29yVmFsdWUiLCJjdXJzb3JDaGFyIiwiY3Vyc29yQ2hhclZhbHVlIiwiYXV0b0luc2VydENzcyIsImF1dG9JbnNlcnRDc3NWYWx1ZSIsImF0dHIiLCJhdHRyVmFsdWUiLCJiaW5kSW5wdXRGb2N1c0V2ZW50cyIsImJpbmRJbnB1dEZvY3VzRXZlbnRzVmFsdWUiLCJjb250ZW50VHlwZSIsImNvbnRlbnRUeXBlVmFsdWUiLCJfZGlzcGF0Y2hFdmVudCIsInR5cGVkIiwibmFtZSIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwidmFsdWVzIiwiQXJyYXkiLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIkJvb2xlYW4iLCJTdHJpbmciLCJJbmZpbml0eSJdLCJzb3VyY2VSb290IjoiIn0=