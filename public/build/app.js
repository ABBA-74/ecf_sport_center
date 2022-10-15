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
  'symfony--ux-chartjs--chart': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-chartjs/dist/controller.js */ "./vendor/symfony/ux-chartjs/Resources/assets/dist/controller.js")),
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
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // start the Stimulus application

 // compile new javascript file
// import './js/test_1';
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

/***/ "./vendor/symfony/ux-chartjs/Resources/assets/dist/controller.js":
/*!***********************************************************************!*\
  !*** ./vendor/symfony/ux-chartjs/Resources/assets/dist/controller.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ default_1; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.mjs");




class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_1__.Controller {
  connect() {
    if (!(this.element instanceof HTMLCanvasElement)) {
      throw new Error('Invalid element');
    }

    const payload = this.viewValue;

    if (Array.isArray(payload.options) && 0 === payload.options.length) {
      payload.options = {};
    }

    this._dispatchEvent('chartjs:pre-connect', {
      options: payload.options
    });

    const canvasContext = this.element.getContext('2d');

    if (!canvasContext) {
      throw new Error('Could not getContext() from Element');
    }

    const chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](canvasContext, payload);

    this._dispatchEvent('chartjs:connect', {
      chart
    });
  }

  _dispatchEvent(name, payload) {
    this.element.dispatchEvent(new CustomEvent(name, {
      detail: payload
    }));
  }

}

default_1.values = {
  view: Object
};


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_web_dom-collections_iterator_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-6030a2"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEVBQUU7SUFBRUksSUFBSSxFQUFFRyxNQUFSO0lBQWdCM0MsT0FBTyxFQUFFO0VBQXpCO0FBbEJFLENBQW5COzs7Ozs7Ozs7Ozs7O0FDakNBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvc2F5LWhlbGxvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWNoYXJ0anMvUmVzb3VyY2VzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHlwZWQvUmVzb3VyY2VzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2Nzcy9zdHlsZS5zY3NzPzVjOGMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9zYXktaGVsbG8tY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3NheS1oZWxsby1jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtY2hhcnRqcy0tY2hhcnQnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXR5cGVkJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXR5cGVkL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgdGFyZ2V0cyA9IFsnbmFtZScsICdvdXRwdXQnXTtcclxuXHJcbiAgZ3JlZXQoKSB7XHJcbiAgICB0aGlzLm91dHB1dFRhcmdldC50ZXh0Q29udGVudCA9IGBIZWxsbywgJHt0aGlzLm5hbWVUYXJnZXQudmFsdWV9IWA7XHJcbiAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc2Nzcy9zdHlsZS5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuLy8gY29tcGlsZSBuZXcgamF2YXNjcmlwdCBmaWxlXHJcbi8vIGltcG9ydCAnLi9qcy90ZXN0XzEnO1xyXG5cclxuLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxyXG4vLyB0aGUgYm9vdHN0cmFwIG1vZHVsZSBkb2Vzbid0IGV4cG9ydC9yZXR1cm4gYW55dGhpbmdcclxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbndpbmRvdy5ib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxuLy8gb3IgeW91IGNhbiBpbmNsdWRlIHNwZWNpZmljIHBpZWNlc1xyXG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC90b29sdGlwJyk7XHJcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInKTtcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG4vLyB9KTtcclxuXHJcbi8vIHdpbmRvdy5ib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLmpzJyk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmlld1ZhbHVlO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkLm9wdGlvbnMpICYmIDAgPT09IHBheWxvYWQub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBheWxvYWQub3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2NoYXJ0anM6cHJlLWNvbm5lY3QnLCB7IG9wdGlvbnM6IHBheWxvYWQub3B0aW9ucyB9KTtcbiAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoIWNhbnZhc0NvbnRleHQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldENvbnRleHQoKSBmcm9tIEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGFydCA9IG5ldyBDaGFydChjYW52YXNDb250ZXh0LCBwYXlsb2FkKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnY2hhcnRqczpjb25uZWN0JywgeyBjaGFydCB9KTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQgfSkpO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdmlldzogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHN0cmluZ3M6IHRoaXMuc3RyaW5nc1ZhbHVlLFxuICAgICAgICAgICAgdHlwZVNwZWVkOiB0aGlzLnR5cGVTcGVlZFZhbHVlLFxuICAgICAgICAgICAgc21hcnRCYWNrc3BhY2U6IHRoaXMuc21hcnRCYWNrc3BhY2VWYWx1ZSxcbiAgICAgICAgICAgIHN0YXJ0RGVsYXk6IHRoaXMuc3RhcnREZWxheVZhbHVlLFxuICAgICAgICAgICAgYmFja1NwZWVkOiB0aGlzLmJhY2tTcGVlZFZhbHVlLFxuICAgICAgICAgICAgc2h1ZmZsZTogdGhpcy5zaHVmZmxlVmFsdWUsXG4gICAgICAgICAgICBiYWNrRGVsYXk6IHRoaXMuYmFja0RlbGF5VmFsdWUsXG4gICAgICAgICAgICBmYWRlT3V0OiB0aGlzLmZhZGVPdXRWYWx1ZSxcbiAgICAgICAgICAgIGZhZGVPdXRDbGFzczogdGhpcy5mYWRlT3V0Q2xhc3NWYWx1ZSxcbiAgICAgICAgICAgIGZhZGVPdXREZWxheTogdGhpcy5mYWRlT3V0RGVsYXlWYWx1ZSxcbiAgICAgICAgICAgIGxvb3A6IHRoaXMubG9vcFZhbHVlLFxuICAgICAgICAgICAgbG9vcENvdW50OiB0aGlzLmxvb3BDb3VudFZhbHVlLFxuICAgICAgICAgICAgc2hvd0N1cnNvcjogdGhpcy5zaG93Q3Vyc29yVmFsdWUsXG4gICAgICAgICAgICBjdXJzb3JDaGFyOiB0aGlzLmN1cnNvckNoYXJWYWx1ZSxcbiAgICAgICAgICAgIGF1dG9JbnNlcnRDc3M6IHRoaXMuYXV0b0luc2VydENzc1ZhbHVlLFxuICAgICAgICAgICAgYXR0cjogdGhpcy5hdHRyVmFsdWUsXG4gICAgICAgICAgICBiaW5kSW5wdXRGb2N1c0V2ZW50czogdGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50c1ZhbHVlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IHRoaXMuY29udGVudFR5cGVWYWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgndHlwZWQ6cHJlLWNvbm5lY3QnLCB7IG9wdGlvbnMgfSk7XG4gICAgICAgIGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3R5cGVkOmNvbm5lY3QnLCB7IHR5cGVkLCBvcHRpb25zIH0pO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBzdHJpbmdzOiBBcnJheSxcbiAgICB0eXBlU3BlZWQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAzMCB9LFxuICAgIHNtYXJ0QmFja3NwYWNlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBzdGFydERlbGF5OiBOdW1iZXIsXG4gICAgYmFja1NwZWVkOiBOdW1iZXIsXG4gICAgc2h1ZmZsZTogQm9vbGVhbixcbiAgICBiYWNrRGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA3MDAgfSxcbiAgICBmYWRlT3V0OiBCb29sZWFuLFxuICAgIGZhZGVPdXRDbGFzczogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd0eXBlZC1mYWRlLW91dCcgfSxcbiAgICBmYWRlT3V0RGVsYXk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA1MDAgfSxcbiAgICBsb29wOiBCb29sZWFuLFxuICAgIGxvb3BDb3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IEluZmluaXR5IH0sXG4gICAgc2hvd0N1cnNvcjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgY3Vyc29yQ2hhcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcuJyB9LFxuICAgIGF1dG9JbnNlcnRDc3M6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGF0dHI6IFN0cmluZyxcbiAgICBiaW5kSW5wdXRGb2N1c0V2ZW50czogQm9vbGVhbixcbiAgICBjb250ZW50VHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdodG1sJyB9LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0Iiwib3V0cHV0VGFyZ2V0IiwibmFtZVRhcmdldCIsInZhbHVlIiwiJCIsInJlcXVpcmUiLCJ3aW5kb3ciLCJib290c3RyYXAiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsIkNoYXJ0IiwiZGVmYXVsdF8xIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJFcnJvciIsInBheWxvYWQiLCJ2aWV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJvcHRpb25zIiwibGVuZ3RoIiwiX2Rpc3BhdGNoRXZlbnQiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImNoYXJ0IiwibmFtZSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInZhbHVlcyIsInZpZXciLCJPYmplY3QiLCJkZWZhdWx0IiwiVHlwZWQiLCJzdHJpbmdzIiwic3RyaW5nc1ZhbHVlIiwidHlwZVNwZWVkIiwidHlwZVNwZWVkVmFsdWUiLCJzbWFydEJhY2tzcGFjZSIsInNtYXJ0QmFja3NwYWNlVmFsdWUiLCJzdGFydERlbGF5Iiwic3RhcnREZWxheVZhbHVlIiwiYmFja1NwZWVkIiwiYmFja1NwZWVkVmFsdWUiLCJzaHVmZmxlIiwic2h1ZmZsZVZhbHVlIiwiYmFja0RlbGF5IiwiYmFja0RlbGF5VmFsdWUiLCJmYWRlT3V0IiwiZmFkZU91dFZhbHVlIiwiZmFkZU91dENsYXNzIiwiZmFkZU91dENsYXNzVmFsdWUiLCJmYWRlT3V0RGVsYXkiLCJmYWRlT3V0RGVsYXlWYWx1ZSIsImxvb3AiLCJsb29wVmFsdWUiLCJsb29wQ291bnQiLCJsb29wQ291bnRWYWx1ZSIsInNob3dDdXJzb3IiLCJzaG93Q3Vyc29yVmFsdWUiLCJjdXJzb3JDaGFyIiwiY3Vyc29yQ2hhclZhbHVlIiwiYXV0b0luc2VydENzcyIsImF1dG9JbnNlcnRDc3NWYWx1ZSIsImF0dHIiLCJhdHRyVmFsdWUiLCJiaW5kSW5wdXRGb2N1c0V2ZW50cyIsImJpbmRJbnB1dEZvY3VzRXZlbnRzVmFsdWUiLCJjb250ZW50VHlwZSIsImNvbnRlbnRUeXBlVmFsdWUiLCJ0eXBlZCIsImJ1YmJsZXMiLCJ0eXBlIiwiTnVtYmVyIiwiQm9vbGVhbiIsIlN0cmluZyIsIkluZmluaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==