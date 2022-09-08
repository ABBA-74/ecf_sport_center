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
/* harmony import */ var _js_test_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/test_1 */ "./assets/js/test_1.js");
/* harmony import */ var _js_test_1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_test_1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_test_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/test_2 */ "./assets/js/test_2.js");
/* harmony import */ var _js_test_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_test_2__WEBPACK_IMPORTED_MODULE_4__);
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

/***/ "./assets/js/test_1.js":
/*!*****************************!*\
  !*** ./assets/js/test_1.js ***!
  \*****************************/
/***/ (function() {

// alert('test_1');
// ----------------
// var myModal = document.getElementById('myModal');
// var myInput = document.getElementById('myInput');
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });

/***/ }),

/***/ "./assets/js/test_2.js":
/*!*****************************!*\
  !*** ./assets/js/test_2.js ***!
  \*****************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_web_dom-collections_iterator_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-fb59ef"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQWlCRCxPQUFPLEVBQUU7RUFBMUIsQ0FmQTtFQWdCZmxCLElBQUksRUFBRW9CLE1BaEJTO0VBaUJmbEIsb0JBQW9CLEVBQUVpQixPQWpCUDtFQWtCZmYsV0FBVyxFQUFFO0lBQUVZLElBQUksRUFBRUksTUFBUjtJQUFnQkYsT0FBTyxFQUFFO0VBQXpCO0FBbEJFLENBQW5COzs7Ozs7Ozs7Ozs7O0FDakNBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvc2F5LWhlbGxvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90ZXN0XzEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Rlc3RfMi5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10eXBlZC9SZXNvdXJjZXMvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzNlOGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zY3NzL3N0eWxlLnNjc3M/NWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3NheS1oZWxsby1jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvc2F5LWhlbGxvLWNvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC10eXBlZCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC10eXBlZC9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIHRhcmdldHMgPSBbJ25hbWUnLCAnb3V0cHV0J107XHJcblxyXG4gIGdyZWV0KCkge1xyXG4gICAgdGhpcy5vdXRwdXRUYXJnZXQudGV4dENvbnRlbnQgPSBgSGVsbG8sICR7dGhpcy5uYW1lVGFyZ2V0LnZhbHVlfSFgO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG5jb25zb2xlLmxvZygndGVzdCBqcyEhIScpO1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG4vLyBjb21waWxlIG5ldyBqYXZhc2NyaXB0IGZpbGVcclxuaW1wb3J0ICcuL2pzL3Rlc3RfMSc7XHJcbmltcG9ydCAnLi9qcy90ZXN0XzInO1xyXG5cclxuLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxyXG4vLyB0aGUgYm9vdHN0cmFwIG1vZHVsZSBkb2Vzbid0IGV4cG9ydC9yZXR1cm4gYW55dGhpbmdcclxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbndpbmRvdy5ib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxuLy8gb3IgeW91IGNhbiBpbmNsdWRlIHNwZWNpZmljIHBpZWNlc1xyXG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC90b29sdGlwJyk7XHJcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInKTtcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG4vLyB9KTtcclxuXHJcbi8vIHdpbmRvdy5ib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLmpzJyk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIi8vIGFsZXJ0KCd0ZXN0XzEnKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gdmFyIG15TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xyXG4vLyB2YXIgbXlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUlucHV0Jyk7XHJcblxyXG4vLyBteU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgIG15SW5wdXQuZm9jdXMoKTtcclxuLy8gfSk7XHJcbiIsIi8vIGFsZXJ0KCd0ZXN0XzInKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XHJcbi8vICAgcmV0dXJuIGBXZWxjb21lLCAke25hbWV9YDtcclxuLy8gfVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdHJpbmdzOiB0aGlzLnN0cmluZ3NWYWx1ZSxcbiAgICAgICAgICAgIHR5cGVTcGVlZDogdGhpcy50eXBlU3BlZWRWYWx1ZSxcbiAgICAgICAgICAgIHNtYXJ0QmFja3NwYWNlOiB0aGlzLnNtYXJ0QmFja3NwYWNlVmFsdWUsXG4gICAgICAgICAgICBzdGFydERlbGF5OiB0aGlzLnN0YXJ0RGVsYXlWYWx1ZSxcbiAgICAgICAgICAgIGJhY2tTcGVlZDogdGhpcy5iYWNrU3BlZWRWYWx1ZSxcbiAgICAgICAgICAgIHNodWZmbGU6IHRoaXMuc2h1ZmZsZVZhbHVlLFxuICAgICAgICAgICAgYmFja0RlbGF5OiB0aGlzLmJhY2tEZWxheVZhbHVlLFxuICAgICAgICAgICAgZmFkZU91dDogdGhpcy5mYWRlT3V0VmFsdWUsXG4gICAgICAgICAgICBmYWRlT3V0Q2xhc3M6IHRoaXMuZmFkZU91dENsYXNzVmFsdWUsXG4gICAgICAgICAgICBmYWRlT3V0RGVsYXk6IHRoaXMuZmFkZU91dERlbGF5VmFsdWUsXG4gICAgICAgICAgICBsb29wOiB0aGlzLmxvb3BWYWx1ZSxcbiAgICAgICAgICAgIGxvb3BDb3VudDogdGhpcy5sb29wQ291bnRWYWx1ZSxcbiAgICAgICAgICAgIHNob3dDdXJzb3I6IHRoaXMuc2hvd0N1cnNvclZhbHVlLFxuICAgICAgICAgICAgY3Vyc29yQ2hhcjogdGhpcy5jdXJzb3JDaGFyVmFsdWUsXG4gICAgICAgICAgICBhdXRvSW5zZXJ0Q3NzOiB0aGlzLmF1dG9JbnNlcnRDc3NWYWx1ZSxcbiAgICAgICAgICAgIGF0dHI6IHRoaXMuYXR0clZhbHVlLFxuICAgICAgICAgICAgYmluZElucHV0Rm9jdXNFdmVudHM6IHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHNWYWx1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiB0aGlzLmNvbnRlbnRUeXBlVmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3R5cGVkOnByZS1jb25uZWN0JywgeyBvcHRpb25zIH0pO1xuICAgICAgICBjb25zdCB0eXBlZCA9IG5ldyBUeXBlZCh0aGlzLmVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCd0eXBlZDpjb25uZWN0JywgeyB0eXBlZCwgb3B0aW9ucyB9KTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgc3RyaW5nczogQXJyYXksXG4gICAgdHlwZVNwZWVkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMzAgfSxcbiAgICBzbWFydEJhY2tzcGFjZTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgc3RhcnREZWxheTogTnVtYmVyLFxuICAgIGJhY2tTcGVlZDogTnVtYmVyLFxuICAgIHNodWZmbGU6IEJvb2xlYW4sXG4gICAgYmFja0RlbGF5OiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogNzAwIH0sXG4gICAgZmFkZU91dDogQm9vbGVhbixcbiAgICBmYWRlT3V0Q2xhc3M6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAndHlwZWQtZmFkZS1vdXQnIH0sXG4gICAgZmFkZU91dERlbGF5OiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogNTAwIH0sXG4gICAgbG9vcDogQm9vbGVhbixcbiAgICBsb29wQ291bnQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiBJbmZpbml0eSB9LFxuICAgIHNob3dDdXJzb3I6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGN1cnNvckNoYXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnLicgfSxcbiAgICBhdXRvSW5zZXJ0Q3NzOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBhdHRyOiBTdHJpbmcsXG4gICAgYmluZElucHV0Rm9jdXNFdmVudHM6IEJvb2xlYW4sXG4gICAgY29udGVudFR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnaHRtbCcgfSxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJncmVldCIsIm91dHB1dFRhcmdldCIsIm5hbWVUYXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCIkIiwicmVxdWlyZSIsIndpbmRvdyIsImJvb3RzdHJhcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwiVHlwZWQiLCJkZWZhdWx0XzEiLCJvcHRpb25zIiwic3RyaW5ncyIsInN0cmluZ3NWYWx1ZSIsInR5cGVTcGVlZCIsInR5cGVTcGVlZFZhbHVlIiwic21hcnRCYWNrc3BhY2UiLCJzbWFydEJhY2tzcGFjZVZhbHVlIiwic3RhcnREZWxheSIsInN0YXJ0RGVsYXlWYWx1ZSIsImJhY2tTcGVlZCIsImJhY2tTcGVlZFZhbHVlIiwic2h1ZmZsZSIsInNodWZmbGVWYWx1ZSIsImJhY2tEZWxheSIsImJhY2tEZWxheVZhbHVlIiwiZmFkZU91dCIsImZhZGVPdXRWYWx1ZSIsImZhZGVPdXRDbGFzcyIsImZhZGVPdXRDbGFzc1ZhbHVlIiwiZmFkZU91dERlbGF5IiwiZmFkZU91dERlbGF5VmFsdWUiLCJsb29wIiwibG9vcFZhbHVlIiwibG9vcENvdW50IiwibG9vcENvdW50VmFsdWUiLCJzaG93Q3Vyc29yIiwic2hvd0N1cnNvclZhbHVlIiwiY3Vyc29yQ2hhciIsImN1cnNvckNoYXJWYWx1ZSIsImF1dG9JbnNlcnRDc3MiLCJhdXRvSW5zZXJ0Q3NzVmFsdWUiLCJhdHRyIiwiYXR0clZhbHVlIiwiYmluZElucHV0Rm9jdXNFdmVudHMiLCJiaW5kSW5wdXRGb2N1c0V2ZW50c1ZhbHVlIiwiY29udGVudFR5cGUiLCJjb250ZW50VHlwZVZhbHVlIiwiX2Rpc3BhdGNoRXZlbnQiLCJ0eXBlZCIsIm5hbWUiLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsInZhbHVlcyIsIkFycmF5IiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJCb29sZWFuIiwiU3RyaW5nIiwiSW5maW5pdHkiXSwic291cmNlUm9vdCI6IiJ9