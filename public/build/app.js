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


 // this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
// require('bootstrap');

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


window.bootstrap = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js"); // or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');
// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover();
// });
// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

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
// var myModal = document.getElementById('myModal');
// var myInput = document.getElementById('myInput');
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-aea8f8"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRW9CLE1BaEJTO0VBaUJmbEIsb0JBQW9CLEVBQUVpQixPQWpCUDtFQWtCZmYsV0FBVyxFQUFFO0lBQUVZLElBQUksRUFBRUksTUFBUjtJQUFnQkYsT0FBTyxFQUFFO0VBQXpCO0FBbEJFLENBQW5COzs7Ozs7Ozs7Ozs7O0FDakNBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvc2F5LWhlbGxvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qYXZhc2NyaXB0L3Rlc3RfMS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvamF2YXNjcmlwdC90ZXN0XzIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHlwZWQvUmVzb3VyY2VzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2Nzcy9zdHlsZS5zY3NzPzVjOGMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9zYXktaGVsbG8tY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3NheS1oZWxsby1jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtdHlwZWQnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtdHlwZWQvZGlzdC9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyB0YXJnZXRzID0gWyduYW1lJywgJ291dHB1dCddO1xyXG5cclxuICBncmVldCgpIHtcclxuICAgIHRoaXMub3V0cHV0VGFyZ2V0LnRleHRDb250ZW50ID0gYEhlbGxvLCAke3RoaXMubmFtZVRhcmdldC52YWx1ZX0hYDtcclxuICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuY29uc29sZS5sb2coJ3Rlc3QganMhISEnKTtcclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc2Nzcy9zdHlsZS5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuLy8gY29tcGlsZSBuZXcgamF2YXNjcmlwdCBmaWxlXHJcbmltcG9ydCAnLi9qYXZhc2NyaXB0L3Rlc3RfMSc7XHJcbmltcG9ydCAnLi9qYXZhc2NyaXB0L3Rlc3RfMic7XHJcblxyXG4vLyB0aGlzIFwibW9kaWZpZXNcIiB0aGUganF1ZXJ5IG1vZHVsZTogYWRkaW5nIGJlaGF2aW9yIHRvIGl0XHJcbi8vIHRoZSBib290c3RyYXAgbW9kdWxlIGRvZXNuJ3QgZXhwb3J0L3JldHVybiBhbnl0aGluZ1xyXG4vLyByZXF1aXJlKCdib290c3RyYXAnKTtcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxud2luZG93LmJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG4vLyBvciB5b3UgY2FuIGluY2x1ZGUgc3BlY2lmaWMgcGllY2VzXHJcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnKTtcclxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3ZlcicpO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLyAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gd2luZG93LmJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUuanMnKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiLy8gYWxlcnQoJ3Rlc3RfMScpO1xyXG5cclxuY29uc3QgYnRuTGlzdFN0cnVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZGlzcGxheS1saXN0LXN0cnVjdHVyZScpO1xyXG5jb25zdCBidG5DYXJkU3RydWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kaXNwbGF5LWNhcmQtc3RydWN0dXJlJyk7XHJcbmNvbnN0IGNhcmRzU3RydWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1jYXJkcy1zdHJ1Y3R1cmUnKTtcclxuY29uc3QgdGFibGVTdHJ1Y3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRhYmxlLXN0cnVjdHVyZScpO1xyXG5cclxuY29uc3QgaGFuZGxlRGlzcGxheUxpc3RTdHJ1Y3R1cmUgPSAoKSA9PiB7XHJcbiAgdGFibGVTdHJ1Y3R1cmUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgY2FyZHNTdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgLy8gICBidG5MaXN0U3RydWN0dXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgLy8gICBidG5MaXN0U3RydWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuICAvLyAgIC8vICAgYnRuQ2FyZFN0cnVjdHVyZS5jbGFzc0xpc3QucmVtb3ZlKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcbiAgLy8gICAvLyAgIGJ0bkNhcmRTdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKTtcclxufTtcclxuY29uc3QgaGFuZGxlRGlzcGxheUNhcmRTdHJ1Y3R1cmUgPSAoKSA9PiB7XHJcbiAgdGFibGVTdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgY2FyZHNTdHJ1Y3R1cmUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgLy8gICAvLyAgIGJ0bkxpc3RTdHJ1Y3R1cmUuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG4gIC8vICAgLy8gICBidG5MaXN0U3RydWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgLy8gICBidG5DYXJkU3RydWN0dXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgLy8gICBidG5DYXJkU3RydWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxufTtcclxuaWYgKGJ0bkxpc3RTdHJ1Y3R1cmUgIT0gbnVsbCAmJiBidG5DYXJkU3RydWN0dXJlICE9IG51bGwpIHtcclxuICBidG5MaXN0U3RydWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGlzcGxheUxpc3RTdHJ1Y3R1cmUpO1xyXG4gIGJ0bkNhcmRTdHJ1Y3R1cmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEaXNwbGF5Q2FyZFN0cnVjdHVyZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTIpIHtcclxuICAgICAgaGFuZGxlRGlzcGxheUNhcmRTdHJ1Y3R1cmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyB2YXIgbXlNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XHJcbi8vIHZhciBteUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SW5wdXQnKTtcclxuXHJcbi8vIG15TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgbXlJbnB1dC5mb2N1cygpO1xyXG4vLyB9KTtcclxuIiwiLy8gYWxlcnQoJ3Rlc3RfMicpO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUpIHtcclxuLy8gICByZXR1cm4gYFdlbGNvbWUsICR7bmFtZX1gO1xyXG4vLyB9XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHN0cmluZ3M6IHRoaXMuc3RyaW5nc1ZhbHVlLFxuICAgICAgICAgICAgdHlwZVNwZWVkOiB0aGlzLnR5cGVTcGVlZFZhbHVlLFxuICAgICAgICAgICAgc21hcnRCYWNrc3BhY2U6IHRoaXMuc21hcnRCYWNrc3BhY2VWYWx1ZSxcbiAgICAgICAgICAgIHN0YXJ0RGVsYXk6IHRoaXMuc3RhcnREZWxheVZhbHVlLFxuICAgICAgICAgICAgYmFja1NwZWVkOiB0aGlzLmJhY2tTcGVlZFZhbHVlLFxuICAgICAgICAgICAgc2h1ZmZsZTogdGhpcy5zaHVmZmxlVmFsdWUsXG4gICAgICAgICAgICBiYWNrRGVsYXk6IHRoaXMuYmFja0RlbGF5VmFsdWUsXG4gICAgICAgICAgICBmYWRlT3V0OiB0aGlzLmZhZGVPdXRWYWx1ZSxcbiAgICAgICAgICAgIGZhZGVPdXRDbGFzczogdGhpcy5mYWRlT3V0Q2xhc3NWYWx1ZSxcbiAgICAgICAgICAgIGZhZGVPdXREZWxheTogdGhpcy5mYWRlT3V0RGVsYXlWYWx1ZSxcbiAgICAgICAgICAgIGxvb3A6IHRoaXMubG9vcFZhbHVlLFxuICAgICAgICAgICAgbG9vcENvdW50OiB0aGlzLmxvb3BDb3VudFZhbHVlLFxuICAgICAgICAgICAgc2hvd0N1cnNvcjogdGhpcy5zaG93Q3Vyc29yVmFsdWUsXG4gICAgICAgICAgICBjdXJzb3JDaGFyOiB0aGlzLmN1cnNvckNoYXJWYWx1ZSxcbiAgICAgICAgICAgIGF1dG9JbnNlcnRDc3M6IHRoaXMuYXV0b0luc2VydENzc1ZhbHVlLFxuICAgICAgICAgICAgYXR0cjogdGhpcy5hdHRyVmFsdWUsXG4gICAgICAgICAgICBiaW5kSW5wdXRGb2N1c0V2ZW50czogdGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50c1ZhbHVlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IHRoaXMuY29udGVudFR5cGVWYWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgndHlwZWQ6cHJlLWNvbm5lY3QnLCB7IG9wdGlvbnMgfSk7XG4gICAgICAgIGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3R5cGVkOmNvbm5lY3QnLCB7IHR5cGVkLCBvcHRpb25zIH0pO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBzdHJpbmdzOiBBcnJheSxcbiAgICB0eXBlU3BlZWQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAzMCB9LFxuICAgIHNtYXJ0QmFja3NwYWNlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBzdGFydERlbGF5OiBOdW1iZXIsXG4gICAgYmFja1NwZWVkOiBOdW1iZXIsXG4gICAgc2h1ZmZsZTogQm9vbGVhbixcbiAgICBiYWNrRGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA3MDAgfSxcbiAgICBmYWRlT3V0OiBCb29sZWFuLFxuICAgIGZhZGVPdXRDbGFzczogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd0eXBlZC1mYWRlLW91dCcgfSxcbiAgICBmYWRlT3V0RGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA1MDAgfSxcbiAgICBsb29wOiBCb29sZWFuLFxuICAgIGxvb3BDb3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IEluZmluaXR5IH0sXG4gICAgc2hvd0N1cnNvcjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgY3Vyc29yQ2hhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcuJyB9LFxuICAgIGF1dG9JbnNlcnRDc3M6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGF0dHI6IFN0cmluZyxcbiAgICBiaW5kSW5wdXRGb2N1c0V2ZW50czogQm9vbGVhbixcbiAgICBjb250ZW50VHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdodG1sJyB9LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0Iiwib3V0cHV0VGFyZ2V0IiwibmFtZVRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIiQiLCJyZXF1aXJlIiwid2luZG93IiwiYm9vdHN0cmFwIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJidG5MaXN0U3RydWN0dXJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnRuQ2FyZFN0cnVjdHVyZSIsImNhcmRzU3RydWN0dXJlIiwidGFibGVTdHJ1Y3R1cmUiLCJoYW5kbGVEaXNwbGF5TGlzdFN0cnVjdHVyZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhhbmRsZURpc3BsYXlDYXJkU3RydWN0dXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpbm5lcldpZHRoIiwiVHlwZWQiLCJkZWZhdWx0XzEiLCJvcHRpb25zIiwic3RyaW5ncyIsInN0cmluZ3NWYWx1ZSIsInR5cGVTcGVlZCIsInR5cGVTcGVlZFZhbHVlIiwic21hcnRCYWNrc3BhY2UiLCJzbWFydEJhY2tzcGFjZVZhbHVlIiwic3RhcnREZWxheSIsInN0YXJ0RGVsYXlWYWx1ZSIsImJhY2tTcGVlZCIsImJhY2tTcGVlZFZhbHVlIiwic2h1ZmZsZSIsInNodWZmbGVWYWx1ZSIsImJhY2tEZWxheSIsImJhY2tEZWxheVZhbHVlIiwiZmFkZU91dCIsImZhZGVPdXRWYWx1ZSIsImZhZGVPdXRDbGFzcyIsImZhZGVPdXRDbGFzc1ZhbHVlIiwiZmFkZU91dERlbGF5IiwiZmFkZU91dERlbGF5VmFsdWUiLCJsb29wIiwibG9vcFZhbHVlIiwibG9vcENvdW50IiwibG9vcENvdW50VmFsdWUiLCJzaG93Q3Vyc29yIiwic2hvd0N1cnNvclZhbHVlIiwiY3Vyc29yQ2hhciIsImN1cnNvckNoYXJWYWx1ZSIsImF1dG9JbnNlcnRDc3MiLCJhdXRvSW5zZXJ0Q3NzVmFsdWUiLCJhdHRyIiwiYXR0clZhbHVlIiwiYmluZElucHV0Rm9jdXNFdmVudHMiLCJiaW5kSW5wdXRGb2N1c0V2ZW50c1ZhbHVlIiwiY29udGVudFR5cGUiLCJjb250ZW50VHlwZVZhbHVlIiwiX2Rpc3BhdGNoRXZlbnQiLCJ0eXBlZCIsIm5hbWUiLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsInZhbHVlcyIsIkFycmF5IiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJCb29sZWFuIiwiU3RyaW5nIiwiSW5maW5pdHkiXSwic291cmNlUm9vdCI6IiJ9