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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/*! exports provided: id, author, widgets, uis, menuItems, sidebarLinks, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"356cd8c5-4807-4c5f-c60a-6b67c5660d4d\",\"author\":\"eutech\",\"widgets\":[{\"id\":\"energy-budget\",\"name\":\"Yearly Energy Consumption\",\"description\":\"Energy consumption details by year\",\"category\":\"energy-management\"},{\"id\":\"current-monthly-energy\",\"name\":\"Current Monthly Energy Usage\",\"description\":\"Energy consumption details by month\",\"category\":\"energy-management\"},{\"id\":\"energy-breakdown\",\"name\":\"Energy Consumption (Category-wise)\",\"description\":\"Energy consumption data by category\",\"category\":\"energy-management\"}],\"uis\":[{\"id\":\"config\",\"label\":\"Energy Budget Setup\"}],\"menuItems\":[],\"sidebarLinks\":[]}");

/***/ }),

/***/ "./images/upload.svg":
/*!***************************!*\
  !*** ./images/upload.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 15.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='100px' height='100px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E %3Cpath d='M69.271,42.085c-5.941-7.138-11.883-14.276-17.824-21.414C51.01,20.147,50.496,19.956,50,19.99 c-0.496-0.034-1.011,0.157-1.447,0.681c-5.941,7.137-11.883,14.276-17.824,21.414c-1.1,1.319-0.461,3.494,1.446,3.494 c2.494,0,4.986,0,7.479,0c0,10.795,0,21.59,0,32.386c0,1.116,0.931,2.047,2.047,2.047c5.531,0,11.064,0,16.598,0 c1.116,0,2.047-0.931,2.047-2.047c0-10.796,0-21.591,0-32.386c2.493,0,4.985,0,7.479,0C69.732,45.579,70.371,43.404,69.271,42.085z' /%3E %3Cpath d='M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M50,92C26.804,92,8,73.195,8,50 C8,26.804,26.804,8,50,8c23.195,0,42,18.804,42,42C92,73.195,73.195,92,50,92z'/%3E %3C/svg%3E"

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/config.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/config.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/upload.svg */ "./images/upload.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".config {\n  height: 100%;\n  position: relative;\n  overflow-y: hidden;\n}\n.config .instructions {\n  text-align: center;\n  font-style: italic;\n  margin: 20px 0px;\n}\n.config .header {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: auto;\n  width: 90%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #424242;\n  padding-top: 25px;\n  color: #424242;\n}\n.config .header span {\n  font-size: 18px;\n  font-weight: normal;\n}\n.config .header .actions {\n  display: flex;\n  justify-content: end;\n}\n.config .header .actions .uxp-button {\n  height: 35px;\n  color: #424242;\n  background-color: #FAFAFA;\n}\n.config .header .actions .primary {\n  margin-right: 25px;\n}\n.config .header .actions .active {\n  background-color: #CA4F81;\n  color: white;\n}\n.config .connect-container {\n  position: relative;\n  margin-top: 200px;\n}\n.config .co2-container {\n  margin-top: 150px;\n}\n.config .co2-container .gmap {\n  margin-top: 40px;\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.config .co2-container .action {\n  text-align: center;\n  margin-top: 20px;\n}\n.config .co2-container .uxp-select-dropdown-container .uxp-select-dropdown .uxp-select-option-container.selected {\n  color: unset !important;\n}\n.config .co2-container .uxp-select-placeholder.dynamic-select {\n  border: 1px solid #EFEFEF;\n}\n.config .co2-container .amount {\n  display: flex;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n}\n.config .co2-container .amount .uxp-input-container {\n  border: 1px solid #EFEFEF;\n}\n.config .co2-container .amount input {\n  font-size: 16px;\n  padding: 10px;\n  text-align: center;\n}\n.config .co2-container .amount .uxp-input-container {\n  margin: 0px 0px 0px 0px;\n}\n.config .co2-container .amount label {\n  margin: 0px;\n  margin-left: 10px;\n}\n.config .documentation {\n  display: flex;\n  justify-content: center;\n}\n.config .documentation .doc-item {\n  aspect-ratio: 2;\n  height: 165px;\n  margin: 20px;\n  background: #EFEFEF;\n  border-radius: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n}\n.config .documentation .doc-item > .icon {\n  width: 40px;\n  margin: 20px;\n  aspect-ratio: 1;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.config .documentation .doc-item .icon-upload {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.config .documentation .docs {\n  color: black;\n  font-size: 32px;\n  font-weight: bold;\n  position: absolute;\n  top: 150px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.config .documentation .spaceworx {\n  margin-top: 20px;\n}\n.config .documentation .spa_ceworx {\n  width: 250px;\n  height: 50px;\n  border-radius: 15px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 250px;\n}\n.config .documentation .upload-values {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 350px;\n}\n.config .config-container {\n  height: 100%;\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90%;\n  padding: 50px 0 0 15px;\n  margin: auto;\n}\n.config .config-container .instructions {\n  text-align: left;\n}\n.config .content .uxp-button {\n  color: white;\n  aspect-ratio: 1;\n  width: 120px;\n  border-radius: 5px;\n  margin: 0 25px 25px 0;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n}\n.config .content .category-button {\n  background-color: #52A1F2;\n}\n.config .content .add {\n  font-size: 15px;\n  font-weight: bold;\n  aspect-ratio: 1;\n  width: 120px;\n  background-color: #DB4382;\n}\n.config .uxp-input-container {\n  margin: 25px;\n}\n\n.add-category .modal-body {\n  display: flex;\n  flex-direction: column;\n}\n.add-category .modal-body .save-button {\n  display: flex;\n  justify-content: flex-end;\n}\n.add-category .modal-body .save-button .button {\n  margin: 0;\n  background-color: #52A1F2;\n  color: white;\n  display: inline-block;\n  width: 100px;\n  height: 35px;\n  margin-top: 20px;\n}\n.add-category .modal-body .uxp-input-container {\n  margin: 0px;\n  width: 400px;\n}\n.add-category .modal-body label {\n  margin-top: 20px;\n}\n\n.monthly-budget .modal-body {\n  display: flex;\n  flex-direction: column;\n}\n.monthly-budget .modal-body .inputs {\n  padding: 10px;\n  display: flex;\n  margin-bottom: 15px;\n  align-items: center;\n  width: 100%;\n}\n.monthly-budget .modal-body .inputs label {\n  margin-right: 10px;\n}\n.monthly-budget .modal-body .inputs .uxp-input-container {\n  width: 40%;\n  margin-right: 25px;\n}\n.monthly-budget .modal-body .budget-label {\n  margin-left: 15px;\n  margin-bottom: 10px;\n}\n.monthly-budget .modal-body .budgets {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.monthly-budget .modal-body .budgets .budget {\n  padding: 10px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #52A1F2;\n  border-radius: 10px;\n  width: 155px;\n  aspect-ratio: 1;\n  color: white;\n}\n.monthly-budget .modal-body .budgets .budget div {\n  display: flex;\n  align-items: center;\n}\n.monthly-budget .modal-body .budgets .budget div .uxp-form-input {\n  margin-right: 2.5px;\n  text-align: center;\n}\n.monthly-budget .modal-body .budgets .budget .month {\n  margin-top: 10px;\n  font-weight: bold;\n  background: white;\n  color: #06F;\n  padding: 5px 20px;\n  border-radius: 10px;\n}\n.monthly-budget .modal-body .save-button {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  justify-content: end;\n}\n.monthly-budget .modal-body .save-button .uxp-button {\n  margin: 0;\n  margin-right: 40px;\n  color: white;\n  background-color: #52A1F2;\n}\n\n.uploadValuesModal {\n  display: flex;\n  flex-direction: column;\n}\n.uploadValuesModal .uxp-date-time-picker-container {\n  width: 250px;\n}\n.uploadValuesModal .categories {\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px;\n  padding: 5px;\n}\n.uploadValuesModal .categories .single-category {\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.uploadValuesModal .categories .single-category span {\n  width: 150px;\n  margin-right: 15px;\n}\n.uploadValuesModal .categories .single-category label {\n  margin-left: 10px;\n}\n.uploadValuesModal .uxp-button {\n  display: block;\n  color: black;\n  margin-top: 25px;\n  color: white;\n  background-color: #52A1F2;\n}\n\n.monthly-budget .actions {\n  display: flex;\n  margin-top: 20px;\n  justify-content: center;\n}\n.monthly-budget .actions .delete-button {\n  width: 200px;\n}\n.monthly-budget .actions .delete-button a {\n  color: red;\n}\n\n.co2-emission-card img {\n  object-fit: cover;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".selector-energy {\n  margin-bottom: 10px;\n}\n\n.energy-gauge .gauge-face-container {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.energy-widget .no-budget-data {\n  font-size: 3em;\n  opacity: 0.5;\n  text-align: center;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.carbon-footprint {\n  padding: 10px 50px;\n}\n.carbon-footprint .profile-image-container {\n  background-color: transparent !important;\n}\n.carbon-footprint .cf-grid .data-grid-column {\n  border: none !important;\n}\n.carbon-footprint .cf-grid .item-card {\n  padding: 5px;\n}\n.carbon-footprint .cf-grid .item-card .title {\n  font-size: 2.1em;\n  font-weight: 200;\n}\n.carbon-footprint .cf-grid .item-card .content {\n  padding: 0px;\n}\n\n.energy-budget-widget-config-panel {\n  width: 60vw;\n  height: auto;\n}\n.energy-budget-widget-config-panel > .row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.energy-budget-widget-config-panel > .button-row {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.energy-budget-widget-config-panel > .button-row > .uxp-button {\n  margin: 5px;\n}\n.energy-budget-widget-config-panel > .button-row > .uxp-button.save.active {\n  background-color: #52c4c9;\n  color: white;\n}\n\n.u-tt {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  padding: 10px;\n  color: white;\n  display: flex;\n}\n.u-tt div {\n  margin-right: 10px;\n}\n\n.uxp-sample-data-label {\n  text-transform: capitalize;\n}\n\n.energy-widget .chart-responsive, .energy-widget .chart-resp-pie {\n  display: inline-block;\n  width: 100%;\n}\n.energy-widget.w-large .chart-responsive {\n  height: 98%;\n}\n.energy-widget.w-large .chart-resp-pie {\n  height: 99%;\n}\n.energy-widget.w-small .carbon-footprint .data-grid .data-grid-column .item-card .content .title {\n  font-size: 1.1em;\n}\n.energy-widget.w-small .carbon-footprint .data-grid .data-grid-column .item-card .content .sub-title {\n  font-size: 9px;\n}\n.energy-widget.w-small .chart-responsive {\n  height: 220px;\n}\n.energy-widget.w-small .chart-resp-pie {\n  height: 260px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Configuration.tsx":
/*!*******************************!*\
  !*** ./src/Configuration.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
__webpack_require__(/*! ./config.scss */ "./src/config.scss");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const config_util_1 = __webpack_require__(/*! ./config-util */ "./src/config-util.tsx");
const DEFAULT_BUILDING = 'building';
const CARBON_DATASET_URL = 'https://s3.amazonaws.com/ecyber.public/datasets/carbon-intensity-electricity.json';
const ENERGY = 230;
const modelName = 'EnergyBudget';
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Configuration = (props) => {
    const alerts = components_1.useAlert();
    const toast = components_1.useToast();
    const [id, setId] = react_1.default.useState('');
    const [name, setName] = react_1.default.useState('');
    const [addCategory, setAddCategory] = react_1.default.useState(false);
    const [monthlyBudget, setMonthlyBudget] = react_1.default.useState(false);
    const [defaultClick, setDefaultClick] = react_1.default.useState(false);
    const [upload, setUpload] = react_1.default.useState(false);
    const [date, setDate] = react_1.useState(new Date());
    // const [setup, setSetup] = React.useState(false);
    const [mode, setMode] = react_1.default.useState('types');
    const [error, setError] = react_1.default.useState(false);
    const [categories, setcategories] = react_1.default.useState([]);
    const [_id, set_id] = react_1.default.useState('');
    const [category, setCategory] = react_1.default.useState('');
    const [categoryId, setCategoryId] = react_1.default.useState('');
    const [budgetDetails, setBudgetDetails] = react_1.default.useState({});
    const [modelKey, setModelKey] = react_1.default.useState('');
    const [values, setValues] = react_1.default.useState(Array(MONTHS.length).fill(ENERGY));
    const [uploadValues, setUploadValues] = react_1.default.useState([]);
    const [carbonData, setCarbonData] = react_1.default.useState(null);
    const [country, setCountry] = react_1.default.useState('');
    const [emission, setEmission] = react_1.default.useState('');
    react_1.default.useEffect(() => {
        /* mark as completed when the config page opens */
        config_util_1.completeInstallation(props.uxpContext);
        getModelKey();
        getCategories();
        getCarbonData();
    }, []);
    function getCarbonData() {
        return __awaiter(this, void 0, void 0, function* () {
            let resp = yield fetch(CARBON_DATASET_URL);
            let json = yield resp.json();
            setCarbonData(json);
        });
    }
    function getModelKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield props.uxpContext.executeService('System', 'MetadataMap:KeyByname', { Name: modelName });
            const details = JSON.parse(result);
            const { Key } = details[0];
            setModelKey(Key);
        });
    }
    function getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeService("Lucy", "GetPaginatedDocs", {
                collectionName: 'categories',
                modelName,
                max: 20,
                filter: JSON.stringify({})
            });
            const { data } = JSON.parse(res)[0];
            const catArray = JSON.parse(data);
            setcategories(catArray);
            setUploadValues(Array(catArray.length).fill(ENERGY));
        });
    }
    const newCategory = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!id || !name) {
                setError(true);
                return;
            }
            yield props.uxpContext.executeService("Lucy", "AddNewDocument", {
                document: JSON.stringify({ id, label: name }),
                modelName,
                collection: 'categories'
            });
            setId('');
            setName('');
            setAddCategory(false);
            toast.success(`${name} added succefully!!!`);
            yield config_util_1.completeInstallation(props.uxpContext);
            yield getCategories();
            // window.location.reload();
        }
        catch (err) {
            console.log(err);
        }
    });
    const handleValueChange = (index, value) => {
        const newValues = [...values];
        newValues[index] = parseInt(value);
        setValues(newValues);
    };
    const changeUploadValues = (index, value) => {
        const newValues = [...uploadValues];
        newValues[index] = parseInt(value);
        setUploadValues(newValues);
    };
    const onCategoryClick = (c) => __awaiter(void 0, void 0, void 0, function* () {
        if (c) {
            setDefaultClick(false);
            set_id(c === null || c === void 0 ? void 0 : c._id);
            setCategoryId(c === null || c === void 0 ? void 0 : c.id);
            setCategory(c === null || c === void 0 ? void 0 : c.label);
            setId(c === null || c === void 0 ? void 0 : c.id);
            setName(c === null || c === void 0 ? void 0 : c.label);
        }
        const response = yield props.uxpContext.executeService("Lucy", "GetPaginatedDocs", {
            collectionName: 'budget',
            modelName,
            max: 20,
            filter: JSON.stringify({ category: (c === null || c === void 0 ? void 0 : c.id) ? c === null || c === void 0 ? void 0 : c.id : "Default" })
        });
        const [result] = JSON.parse(response);
        const { data } = result;
        const [categoryResult] = JSON.parse(data);
        if (categoryResult === null || categoryResult === void 0 ? void 0 : categoryResult.values) {
            setValues(categoryResult === null || categoryResult === void 0 ? void 0 : categoryResult.values);
            setBudgetDetails(categoryResult);
        }
        else {
            setValues(Array(MONTHS.length).fill(ENERGY));
            setBudgetDetails({});
        }
        setMonthlyBudget(true);
    });
    const addNewCategory = (cid, cname, budget) => __awaiter(void 0, void 0, void 0, function* () {
        yield props.uxpContext.executeService("Lucy", "AddNewDocument", {
            document: JSON.stringify({ id: cid, label: cname }),
            modelName,
            collection: 'categories',
            replace: ''
        });
        yield props.uxpContext.executeService("Lucy", "AddNewDocument", {
            document: JSON.stringify({ location: DEFAULT_BUILDING, values: budget, category: cid }),
            modelName,
            collection: 'budget',
        });
    });
    const setBudgetandUpdateCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
        if (!defaultClick) {
            if (id || name) {
                const body = (id && name) ? { id, label: name } : (id) ? { id } : { label: name };
                yield props.uxpContext.executeService("Lucy", "UpdateDocument", {
                    _id,
                    document: JSON.stringify(body),
                    model: modelKey,
                    collection: 'categories',
                    replace: ''
                });
            }
        }
        const budgetBody = { location: DEFAULT_BUILDING, values, category: defaultClick ? 'Default' : id };
        const cat = defaultClick ? "Default" : category;
        if (Object.keys(budgetDetails).length > 0) {
            const { _id } = budgetDetails;
            yield props.uxpContext.executeService("Lucy", "UpdateDocument", {
                _id,
                document: JSON.stringify(budgetBody),
                model: modelKey,
                collection: 'budget',
                replace: ''
            });
            toast.success(`Budget for ${cat} updated`);
        }
        else {
            yield props.uxpContext.executeService("Lucy", "AddNewDocument", {
                document: JSON.stringify(budgetBody),
                modelName,
                collection: 'budget'
            });
            toast.success(`Budget for ${cat} added successfully.`);
        }
        setMonthlyBudget(false);
        yield getCategories();
        // window.location.reload();
    });
    function deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let b = yield alerts.confirm('Are you sure you want to delete this category and monthly budgets? This will not remove any existing meter data. You can add the category again later');
            if (!b) {
                return;
            }
            yield props.uxpContext.executeAction(modelName, 'DeleteCategory', { category: id }, { json: true });
            toast.success('Category deleted');
            yield getCategories();
        });
    }
    function uploadData() {
        return __awaiter(this, void 0, void 0, function* () {
            if (categories.length < 1) {
                let options = yield alerts.form({
                    title: 'Setup your categories first',
                    content: 'You need to setup at least one energy category and budget before entering data. You can start simple. Lets create a single category. Call it "Overall Energy" or something.',
                    formStructure: [
                        { label: 'Category Name', validate: { required: true }, name: 'category', type: 'string', placeholder: 'Overall Energy' },
                    ]
                });
                let { category } = options;
                if (!category) {
                    return;
                }
                //use last set budget values or defaults
                let cid = category.toLowerCase().replace(/\s+/g, '-');
                yield addNewCategory(cid, category, values);
                yield getCategories();
                setUpload(true);
                return;
            }
            else {
                setUpload(true);
            }
        });
    }
    const uploadValuesManually = () => __awaiter(void 0, void 0, void 0, function* () {
        const month = new Date(date).getMonth() + 1;
        const year = new Date(date).getFullYear();
        let i = 0;
        for (let cat of categories) {
            yield props.uxpContext.executeAction("EnergyBudget", "AddValue", {
                month,
                year,
                location: DEFAULT_BUILDING,
                category: cat.id,
                value: uploadValues[i]
            });
            i++;
        }
        setUpload(false);
        yield config_util_1.completeInstallation(props.uxpContext);
        toast.success('Energy data has been uploaded');
    });
    return (react_1.default.createElement("div", { className: 'config' },
        react_1.default.createElement("div", { className: 'header' },
            react_1.default.createElement("span", null, "Energy Management"),
            react_1.default.createElement("div", { className: 'actions' },
                react_1.default.createElement(components_1.Button, { className: (mode == 'upload') ? 'active primary' : 'primary', title: 'Connect Meters', onClick: () => { setMode('upload'); } }),
                react_1.default.createElement(components_1.Button, { className: (mode == 'types') ? 'active primary' : 'primary', title: 'Setup Budgets and Categories', onClick: () => { setMode('types'); } }),
                react_1.default.createElement(components_1.Button, { className: (mode == 'co2') ? 'active primary' : 'primary', title: 'Carbon Footprint', onClick: () => { setMode('co2'); } }))),
        (mode == 'types') &&
            react_1.default.createElement("div", { className: 'config-container' },
                react_1.default.createElement("div", { className: 'instructions' }, "Setup your energy categories and monthly budgets for each category."),
                react_1.default.createElement("div", { className: 'content' },
                    react_1.default.createElement(components_1.Button, { className: 'category-button', title: 'Default', onClick: () => { setDefaultClick(true); setMonthlyBudget(true); onCategoryClick(); } }),
                    categories.map(c => {
                        return react_1.default.createElement(components_1.Button, { key: c === null || c === void 0 ? void 0 : c._id, className: 'category-button', title: c === null || c === void 0 ? void 0 : c.label, onClick: () => onCategoryClick(c) });
                    }),
                    react_1.default.createElement(components_1.Button, { className: 'add', title: '+', onClick: () => { setId(''); setName(''); setAddCategory(true); } }))),
        (mode == 'upload') && react_1.default.createElement("div", { className: 'connect-container' },
            react_1.default.createElement("div", { className: 'instructions' }, "Either manually enter your energy data here, or connect some smart meters to automatically send data into Lucy"),
            react_1.default.createElement("div", { className: 'documentation' },
                react_1.default.createElement("div", { className: 'doc-item', onClick: () => { uploadData(); } },
                    react_1.default.createElement("div", { className: 'icon icon-upload' }),
                    react_1.default.createElement("div", { className: 'label' }, "Manually upload energy data")),
                react_1.default.createElement("div", { className: 'doc-item' },
                    react_1.default.createElement("div", { className: 'label' }, "Get Smart Meters"),
                    react_1.default.createElement(components_1.BuyOnSpaceworxButton, { className: 'spaceworx', productIds: ['60a7514811463a1ec3e13528', '6284e77efe60b4e6386f8e97', '6284d138fe60b4e6386f8e8b', '63fc771953a83942be8e7be5'] })))),
        (mode == 'co2') && react_1.default.createElement("div", { className: 'co2-container' },
            react_1.default.createElement("div", { className: 'instructions' }, "Select your region to calculate your overall carbon emission"),
            react_1.default.createElement("div", { className: 'gmap' },
                react_1.default.createElement(components_1.Select, { placeholder: 'Select your region', renderOption: (option) => { var _a, _b; return react_1.default.createElement(components_1.ItemCard, { className: 'co2-emission-card', item: option, image: `https://static.iviva.com/flags/${(_a = option.countryCode) === null || _a === void 0 ? void 0 : _a.toLowerCase()}.svg`, titleField: 'name', subTitle: `Emission Intensity: ${(_b = option === null || option === void 0 ? void 0 : option.value) === null || _b === void 0 ? void 0 : _b.toFixed(2)} gCO2/kwh` }); }, options: carbonData, labelField: 'name', valueField: 'countryCode', selected: country, onChange: (v, opt) => {
                        var _a;
                        setCountry(v);
                        let ev = (_a = carbonData.find((x) => x.countryCode == v)) === null || _a === void 0 ? void 0 : _a.value;
                        if (ev) {
                            setEmission(ev + '');
                        }
                    } })),
            react_1.default.createElement("div", { className: 'amount' },
                react_1.default.createElement(components_1.Input, { onChange: setEmission, value: emission }),
                react_1.default.createElement("label", null, "gCO2/kWH")),
            react_1.default.createElement("div", { className: 'action' },
                react_1.default.createElement(components_1.AsyncButton, { title: 'Update', onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                        let v = Number(emission);
                        if (!v) {
                            alerts.show('Please enter a valid emission intensity value. You can select your country to pick a reasonable value');
                            return;
                        }
                        yield props.uxpContext.executeAction('EnergyBudget', 'UpdateLocationEmissionInfo', { location: 'building', 'co2': emission });
                        toast.success('Emission data updated');
                    }) }))),
        addCategory ?
            react_1.default.createElement(components_1.Modal, { autoSize: true, className: 'add-category', title: 'New Category', show: addCategory, onClose: () => setAddCategory(false) },
                react_1.default.createElement("label", null, "Category Name"),
                react_1.default.createElement(components_1.Input, { value: name, placeholder: 'Label', onChange: (val) => {
                        setError(false);
                        setName(val);
                        setId(val.toLowerCase().replace(/\s+/g, '-'));
                    } }),
                react_1.default.createElement("label", null, "Category ID"),
                react_1.default.createElement(components_1.Input, { value: id, placeholder: 'ID', onChange: (val) => { setError(false); setId(val); } }),
                error ? react_1.default.createElement("span", { style: { color: 'red', margin: "5px 5px 10px 5px", textAlign: 'end' } }, "Please fill above fields") : null,
                react_1.default.createElement("div", { className: 'save-button' },
                    react_1.default.createElement(components_1.Button, { className: 'button', title: 'Save', onClick: () => { newCategory(); } })))
            : null,
        ";",
        react_1.default.createElement(components_1.Modal, { className: 'uploadValuesModal', show: upload, autoSize: true, title: 'Update Monthly Energy Consumption', onClose: () => setUpload(false) },
            react_1.default.createElement("div", { className: 'categories' },
                react_1.default.createElement("div", { className: 'single-category' },
                    react_1.default.createElement("span", null, "Date"),
                    react_1.default.createElement(components_1.DatePicker, { title: '', date: date, onChange: val => setDate(val) })),
                categories.map((c, i) => {
                    return react_1.default.createElement("div", { className: 'single-category' },
                        react_1.default.createElement("span", null, c === null || c === void 0 ? void 0 : c.label),
                        react_1.default.createElement(components_1.Input, { value: uploadValues[i], type: 'number', onChange: (v) => changeUploadValues(i, v) }),
                        react_1.default.createElement("label", null, "kwh"));
                })),
            react_1.default.createElement(components_1.AsyncButton, { title: 'Save', onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield uploadValuesManually(); }) })),
        monthlyBudget ?
            react_1.default.createElement(components_1.Modal, { className: 'monthly-budget', title: defaultClick ? "Default" : category, show: monthlyBudget, onClose: () => setMonthlyBudget(false) },
                !defaultClick ?
                    react_1.default.createElement("div", { className: 'inputs' },
                        react_1.default.createElement("label", null, "ID"),
                        react_1.default.createElement(components_1.Input, { placeholder: 'ID', value: id, onChange: (val) => { setError(false); setId(val); } }),
                        react_1.default.createElement("label", null, "Label"),
                        react_1.default.createElement(components_1.Input, { placeholder: 'Name', value: name, onChange: (val) => { setError(false); setName(val); } }))
                    :
                        null,
                react_1.default.createElement("div", { className: 'budget-label' }, "Set monthly energy consumption budgets for this  category"),
                react_1.default.createElement("div", { className: 'budgets' }, MONTHS.map((M, i) => {
                    return react_1.default.createElement("div", { key: M, className: 'budget' },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(components_1.Input, { value: values[i], type: 'number', onChange: (val) => handleValueChange(i, val) }),
                            "kWh"),
                        react_1.default.createElement("span", { className: 'month' }, M));
                })),
                react_1.default.createElement("div", { className: 'actions' },
                    react_1.default.createElement("div", { className: 'delete-button' },
                        react_1.default.createElement("a", { href: '#', onClick: () => deleteCategory(categoryId).then(() => setMonthlyBudget(false)) }, "Delete this category")),
                    react_1.default.createElement("div", { className: 'save-button' },
                        react_1.default.createElement(components_1.Button, { title: 'Save', onClick: () => { setBudgetandUpdateCategory(categoryId); } }))))
            : null));
};
exports.default = Configuration;


/***/ }),

/***/ "./src/config-util.tsx":
/*!*****************************!*\
  !*** ./src/config-util.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeInstallation = exports.assignWebServiceCredentials = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function assignWebServiceCredentials(uxpContext, account, connector, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = Object.assign({}, payload, { WebServiceName: connector, AccountName: account });
        yield uxpContext.executeService('Lucy', 'RESTAccount:CreateFromName', args, { json: true });
    });
}
exports.assignWebServiceCredentials = assignWebServiceCredentials;
function completeInstallation(uxpContext) {
    return __awaiter(this, void 0, void 0, function* () {
        yield uxpContext.executeService('Lucy', 'InstalledUseCase:MarkAsCompleted', { id: bundle_json_1.default.id });
    });
}
exports.completeInstallation = completeInstallation;


/***/ }),

/***/ "./src/config.scss":
/*!*************************!*\
  !*** ./src/config.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./config.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/config.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUsage = exports.EnergyBreakdown = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const Configuration_1 = __importDefault(__webpack_require__(/*! ./Configuration */ "./src/Configuration.tsx"));
// import { SampleDataLabel } from "./SampleDataLabel";
const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
const PowerIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class="a" cx="16.5" cy="16.5" r="16.5"/%3E%3Cpath class="b" d="M7.316,1.928,2.571,8.256H7.316L4.153,14.583,15.226,6.674H8.9l4.746-4.746Z" transform="translate(7.385 8.602)"/%3E%3C/svg%3E';
const Co2Icon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class="a" cx="16.5" cy="16.5" r="16.5"/%3E%3Cpath class="b" d="M7.608,12.061a3.251,3.251,0,0,1,.734-2.08A3.188,3.188,0,0,1,10.2,8.817a4.046,4.046,0,0,1,6.454-2.311,3.955,3.955,0,0,1,1.428,2.22H18.3A3.258,3.258,0,0,1,20.68,9.7a3.2,3.2,0,0,1,.982,2.352,3.253,3.253,0,0,1-.305,1.4,3.377,3.377,0,0,1-.85,1.131v.025a2.07,2.07,0,0,1-.462,1.312,2.007,2.007,0,0,1-1.155.734,2.574,2.574,0,0,1-2.1,1.964,1.443,1.443,0,0,1-1.081,2.385,1.36,1.36,0,0,1-1.015-.429,1.4,1.4,0,0,1-.421-1.023,1.347,1.347,0,0,1,.083-.47h-.083a1.775,1.775,0,0,1-1.758-1.758,1.6,1.6,0,0,1,.248-.883,2.05,2.05,0,0,1-.924-1.032H10.785V15.4a3.323,3.323,0,0,1-2.253-1.048A3.184,3.184,0,0,1,7.608,12.061Zm1.155-.206a2.367,2.367,0,0,0,2.368,2.377,2.32,2.32,0,0,0,1.131-.281,2.529,2.529,0,0,0,.858,1.535,2.448,2.448,0,0,0,1.667.611,2.5,2.5,0,0,0,1.832-.759,1.591,1.591,0,0,0,1.271.586,1.691,1.691,0,0,0,1.7-1.7,2.374,2.374,0,0,0,.784-.858,2.327,2.327,0,0,0,.289-1.131,2.232,2.232,0,0,0-.7-1.667,2.349,2.349,0,0,0-1.692-.685,2.323,2.323,0,0,0-1.263.363,2.729,2.729,0,0,0,.066-.652,2.743,2.743,0,0,0-.85-2.03,2.931,2.931,0,0,0-4.06-.033,2.724,2.724,0,0,0-.883,1.956h-.14a2.3,2.3,0,0,0-1.675.693A2.276,2.276,0,0,0,8.763,11.854Z" transform="translate(1.332 3.3)"/%3E%3C/svg%3E';
const TreesIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class="a" cx="16.5" cy="16.5" r="16.5"/%3E%3Cpath class="b" d="M14.215,4.221a.43.43,0,0,1-.2-.369,4.239,4.239,0,0,0-8.443,0,.432.432,0,0,1-.2.369A4.25,4.25,0,0,0,6.717,11.8a1.159,1.159,0,0,0,.738.039,1.953,1.953,0,0,0,.369-1.433,1.4,1.4,0,0,0-.657-.328A2.506,2.506,0,0,1,5.324,7.664,2.466,2.466,0,0,1,5.98,5.981a2.3,2.3,0,0,1,.614-.49,1.451,1.451,0,0,0,.738-1.272,2.357,2.357,0,0,1,.122-.778,2.5,2.5,0,0,1,4.753,0,2.357,2.357,0,0,1,.122.778,1.365,1.365,0,0,0,.739,1.264,1.722,1.722,0,0,1,.612.487,2.445,2.445,0,0,1,.657,1.682,2.485,2.485,0,0,1-2.5,2.5,2.87,2.87,0,0,0-2.869,2.859v1.633a1.528,1.528,0,0,0,.123.739,1.849,1.849,0,0,0,1.475,0,1.421,1.421,0,0,0,.126-.739V12.973A1.109,1.109,0,0,1,11.8,11.864,4.211,4.211,0,0,0,14.225,4.2l-.01.021Z" transform="translate(7 8.769)"/%3E%3C/svg%3E';
/* default value to use when calculating radial gauge limits when no budget is set */
const DEFAULT_BUDGET_VALUE = 250;
function toFixed(n, places = 2) {
    let f = Math.pow(10, places);
    return Math.round(n * f) / f;
}
function intFmt(x) {
    return Intl.NumberFormat().format(Number(x));
}
let startYear = new Date().getFullYear();
let Years = [];
for (var i = 0; i < 3; i++) {
    let y = startYear - i;
    Years.push({ label: '' + y, value: '' + y });
}
function useEffectWithPolling(context, channel, interval, callback, deps) {
    let [tick, setTick] = React.useState(0);
    let [timer, setTimer] = React.useState(null);
    let newDeps = deps.slice();
    newDeps.push(tick);
    function startTimer() {
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            setTick((x) => x + 1);
        }, interval));
    }
    React.useEffect(() => {
        clearTimeout(timer);
        console.log('running poll job');
        callback().then(() => {
            startTimer();
        }).catch(e => {
            console.log('Error in useEffectWithPolling', channel, e);
            startTimer();
        });
        return () => timer && clearTimeout(timer);
    }, newDeps);
    components_1.useMessageBus(context, channel, (p, ch) => {
        setTick((x) => x + 1);
        return "";
    });
}
;
/**
 *  Transform a location/category/value tuple to a list of locations with a category/values map.
 */
function transformLocations(locations) {
    let result = [];
    for (let l of locations) {
        let item = result.find(x => x.location == l.location);
        if (!item) {
            item = { location: l.location, categories: {} };
            result.push(item);
        }
        if (!item.categories[l.category]) {
            item.categories[l.category] = [];
        }
        item.categories[l.category] = l.values;
    }
    return result;
}
;
function transformCategories(categories) {
    return categories.map(c => {
        if (!c.label)
            c.label = c.id;
        return c;
    });
}
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function getMonthName(year, month) {
    return Months[month - 1]; // + ' - ' + year;
}
const model = 'EnergyBudget';
let ValidYears = null;
function getYears(context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ValidYears != null)
            return ValidYears;
        let years = yield context.executeAction(model, 'GetValidYears', {}, { json: true });
        ValidYears = years;
        return ValidYears;
    });
}
const EnergyBudgetWidget = (props) => {
    let { colors, labels } = props;
    let [yearList, setYearList] = React.useState([]);
    let [buildings, setBuildings] = React.useState([]);
    let [categories, setCategories] = React.useState([]);
    //let [selectedBudget, setSelectedBudget] = React.useState<number[]>([]);
    let [chartData, setChartData] = React.useState([]);
    let [co2, setCo2] = React.useState(0);
    // configurable states 
    // get defaults from props  
    let [year, setYear] = React.useState(props.year);
    let [selectedBuilding, setSelectedBuilding] = React.useState(props.building);
    let [selectedCategory, setSelectedCategory] = React.useState(props.category);
    let updater = components_1.useUpdateWidgetProps();
    function loadLocations() {
        return __awaiter(this, void 0, void 0, function* () {
            let { locations, categories } = yield props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true });
            setBuildings(transformLocations(locations));
            setCategories(transformCategories(categories));
        });
    }
    React.useEffect(() => {
        loadLocations().then(_ => { });
        getYears(props.uxpContext).then(setYearList);
    }, []);
    function getSelectedBudget() {
        var _a;
        let l = buildings.find(b => b.location == selectedBuilding);
        return ((_a = l === null || l === void 0 ? void 0 : l.categories) === null || _a === void 0 ? void 0 : _a[selectedCategory]) || [];
    }
    React.useEffect(() => {
        props.uxpContext.executeAction(model, 'ConsumptionForLocationWithEmission', { year, location: selectedBuilding, category: selectedCategory }, { json: true }).then((data) => {
            let consumptionData = {};
            let _co2 = 0;
            for (var j in data) {
                let row = data[j];
                consumptionData[Number(row.month)] = Number(row.value);
                _co2 = Number(row.co2) || 0;
            }
            setCo2(_co2);
            let selectedBudget = getSelectedBudget();
            chartData = [];
            let cummulativeBudget = 0;
            let cummulativeEnergy = 0;
            for (var i = 1; i < 13; i++) {
                cummulativeBudget += selectedBudget[i - 1] || 0;
                cummulativeEnergy += consumptionData[i] || 0;
                chartData.push({
                    name: getMonthName(Number(year), i),
                    energy: toFixed(consumptionData[i] || 0),
                    budgeted: toFixed(selectedBudget[i - 1] || 0),
                    cummulativeBudget: toFixed(cummulativeBudget),
                    cummulativeEnergy: toFixed(cummulativeEnergy),
                });
            }
            setChartData(chartData);
            updater(props.instanceId, { year, building: selectedBuilding, category: selectedCategory });
        });
    }, [year, buildings, selectedBuilding, selectedCategory]);
    let hasChartData = chartData.filter(x => !!Number(x.energy)).length > 0;
    let hasBudget = getSelectedBudget().filter(x => !!Number(x)).length > 0;
    let isSample = !hasChartData && !hasBudget && !categories.length;
    if (isSample) {
        chartData = [];
        hasBudget = true;
        let cy = new Date().getFullYear();
        let energy = [280, 250, 280, 300, 320, 290, 250, 230, 290, 310, 320, 290];
        let budgeted = [300, 300, 310, 320, 300, 310, 290, 290, 290, 300, 290, 290];
        let i = 0;
        let cummulativeBudget = 0;
        let cummulativeEnergy = 0;
        for (let e of energy) {
            cummulativeBudget += budgeted[i - 1] || 0;
            cummulativeEnergy += energy[i] || 0;
            chartData.push({
                name: getMonthName(cy, i + 1),
                energy: toFixed(energy[i]),
                budgeted: toFixed(budgeted[i]),
                cummulativeBudget: toFixed(cummulativeBudget),
                cummulativeEnergy: toFixed(cummulativeEnergy)
            });
            i++;
        }
        co2 = 200;
    }
    let totalConsumption = 0;
    if (chartData && chartData.length > 0) {
        totalConsumption = chartData[chartData.length - 1].cummulativeEnergy;
    }
    let showCO2 = false;
    let emissions = totalConsumption * co2 / (1000 * 1000);
    let trees = 16.5 * emissions;
    if (co2 > 0)
        showCO2 = true;
    let hasData = chartData.filter(x => !!Number(x.energy)).length > 0;
    console.log('budget', hasBudget, hasData);
    return (React.createElement(components_1.WidgetWrapper, { className: 'energy-widget', cssBreakPoints: {
            width: {
                default: 'large',
                650: 'small'
            }
        }, instanceId: props.instanceId, sampleData: {
            showLabel: isSample,
            description: 'This widget contains sample Energy Consumption data. To use data from your own location, click on the Spaceworx icon to purchase the required product(s).',
            productIds: ['60a7514811463a1ec3e13528', '6284e77efe60b4e6386f8e97', '6284d138fe60b4e6386f8e8b', '63fc771953a83942be8e7be5']
        } },
        React.createElement(components_1.TitleBar, { icon: EnergyIcon, title: 'YEARLY ENERGY CONSUMPTION ' + (hasBudget ? 'Budgeted vs Actual ' : '') + (selectedBuilding ? `${selectedBuilding} - ${year}` : '') + ' ' + (selectedCategory ? `[${selectedCategory}]` : '') },
            React.createElement(components_1.FilterPanel, { enableClear: false },
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Year', onChange: (year) => setYear(year), options: yearList, labelField: 'year', valueField: 'year', selected: year }),
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Location', onChange: (b) => setSelectedBuilding(b), selected: selectedBuilding, options: buildings, labelField: 'location', valueField: 'location' }),
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Energy Type', onChange: (b) => setSelectedCategory(b), selected: selectedCategory, options: categories, labelField: 'label', valueField: 'id' }))),
        showCO2 && React.createElement("div", { className: 'carbon-footprint' },
            React.createElement(components_1.DataGrid, { className: 'cf-grid', data: [
                    { 'title': 'Power consumed', value: `${totalConsumption} kWh`, image: PowerIcon },
                    { 'title': 'CO2 emitted', value: `${(emissions).toFixed(1)} tonnes`, image: Co2Icon },
                    { 'title': 'Trees to offset CO2', value: `${(trees).toFixed(0)} `, image: TreesIcon },
                ], columns: 3, renderItem: (item) => {
                    return React.createElement(components_1.ItemCard, { imageField: 'image', item: item, titleField: 'value', subTitleField: 'title' });
                } })),
        React.createElement("div", { style: { flex: 1, padding: '10px 30px 20px 30px' } }, (!hasData && !hasBudget)
            ?
                React.createElement("div", { className: 'no-budget-data' }, "No data available")
            :
                React.createElement("div", { className: "chart-responsive" },
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                        React.createElement(recharts_1.ComposedChart, { width: 500, height: 300, data: chartData, margin: {
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            } },
                            React.createElement("defs", null,
                                React.createElement("filter", { id: "shadow", height: "200%" },
                                    React.createElement("feDropShadow", { dx: "4", dy: "4", stdDeviation: "4" }))),
                            React.createElement(recharts_1.CartesianGrid, { strokeWidth: 1, vertical: false, strokeOpacity: 0.5 }),
                            React.createElement(recharts_1.XAxis, { dataKey: "name", label: {
                                    position: "center",
                                    value: (labels === null || labels === void 0 ? void 0 : labels.xAxis) || "Months",
                                    dy: 15
                                } }),
                            React.createElement(recharts_1.YAxis, { axisLine: false, label: {
                                    position: "center",
                                    value: (labels === null || labels === void 0 ? void 0 : labels.yAxis) || "KwH",
                                    angle: -90,
                                    dx: -30,
                                } }),
                            React.createElement(recharts_1.YAxis, { axisLine: false, orientation: 'right', yAxisId: 'cummulative' }),
                            React.createElement(recharts_1.Tooltip, { formatter: (value, name, entry, index) => {
                                    return `${intFmt(Number(value).toFixed(2)) + ((labels === null || labels === void 0 ? void 0 : labels.yAxis) || '')}`;
                                } }),
                            React.createElement(recharts_1.Legend, { align: "center", verticalAlign: "bottom", wrapperStyle: { paddingTop: 20 } }),
                            React.createElement(recharts_1.Area, { filter: "url(#shadow)", name: 'Cumulative Consumption', yAxisId: 'cummulative', fill: (colors === null || colors === void 0 ? void 0 : colors.cumulativeConsumption) || "#06F", fillOpacity: 0.5, stroke: (colors === null || colors === void 0 ? void 0 : colors.cumulativeConsumption) || "#06F", dataKey: "cummulativeEnergy" }),
                            React.createElement(recharts_1.Bar, { name: 'Consumption', barSize: 15, dataKey: "energy", fill: (colors === null || colors === void 0 ? void 0 : colors.consumption) || "#F78FAA" }),
                            hasBudget &&
                                React.createElement(recharts_1.Bar, { name: 'Baseline', barSize: 15, dataKey: "budgeted", fill: (colors === null || colors === void 0 ? void 0 : colors.baseline) || "#79B7B6" }),
                            hasBudget &&
                                React.createElement(recharts_1.Line, { name: 'Cumulative Budget', strokeDasharray: '0 1 1 1', strokeDashoffset: 3, strokeOpacity: 0.8, strokeWidth: 2, yAxisId: 'cummulative', type: "monotone", fill: 'red', fillOpacity: 0.1, dataKey: "cummulativeBudget", stroke: (colors === null || colors === void 0 ? void 0 : colors.cumulativeBudget) || "#ff7300" })))))));
};
const EnergyBudgetWidgetConfigPanel = (props) => {
    let { onSubmit, onCancel, configs } = props;
    let toast = components_1.useToast();
    let [baseline, setBaseline] = React.useState("");
    let [consumption, setConsumption] = React.useState("");
    let [cumulativeConsumption, setCumulativeConsumption] = React.useState("");
    let [cumulativeBudget, setCumulativeBudget] = React.useState("");
    let [xAxis, setXAxis] = React.useState("");
    let [yAxis, setYAxis] = React.useState("");
    React.useEffect(() => {
        if (configs) {
            if (configs.colors) {
                if (configs.colors.baseline)
                    setBaseline(configs.colors.baseline);
                if (configs.colors.consumption)
                    setConsumption(configs.colors.consumption);
                if (configs.colors.cumulativeConsumption)
                    setCumulativeConsumption(configs.colors.cumulativeConsumption);
                if (configs.colors.cumulativeBudget)
                    setCumulativeBudget(configs.colors.cumulativeBudget);
            }
            if (configs.labels) {
                if (configs.labels.xAxis)
                    setXAxis(configs.labels.xAxis);
                if (configs.labels.yAxis)
                    setYAxis(configs.labels.yAxis);
            }
        }
    }, [configs]);
    // validate 
    function isValid() {
        let isValid = true;
        if (!baseline || baseline.trim().length == 0) {
            isValid = false;
        }
        if (!consumption || consumption.trim().length == 0) {
            isValid = false;
        }
        if (!cumulativeConsumption || cumulativeConsumption.trim().length == 0) {
            isValid = false;
        }
        if (!consumption || consumption.trim().length == 0) {
            isValid = false;
        }
        if (!cumulativeBudget || cumulativeBudget.trim().length == 0) {
            isValid = false;
        }
        if (!xAxis || xAxis.trim().length == 0) {
            isValid = false;
        }
        if (!yAxis || yAxis.trim().length == 0) {
            isValid = false;
        }
        return isValid;
    }
    function save() {
        let valid = isValid();
        if (valid) {
            onSubmit({
                colors: { baseline, consumption, cumulativeBudget, cumulativeConsumption },
                labels: { xAxis: xAxis, yAxis: yAxis }
            });
        }
        else {
            toast.error("Please complete the form. All fields are required");
        }
    }
    function cancel() {
        onCancel();
    }
    return React.createElement("div", { className: "energy-budget-widget-config-panel" },
        React.createElement("h4", null, "Chart Colors"),
        React.createElement("div", { className: "row" },
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Label, null, "Baseline"),
                React.createElement(components_1.ColorPicker, { color: baseline || "", onChange: setBaseline })),
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Label, null, "Consumption"),
                React.createElement(components_1.ColorPicker, { color: consumption || "", onChange: setConsumption }))),
        React.createElement("div", { className: "row" },
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Label, null, "Cumulative Consumption"),
                React.createElement(components_1.ColorPicker, { color: cumulativeConsumption || "", onChange: setCumulativeConsumption })),
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Label, null, "Cumulative Budget"),
                React.createElement(components_1.ColorPicker, { color: cumulativeBudget || "", onChange: setCumulativeBudget }))),
        React.createElement("h4", null, "Axis Labels"),
        React.createElement("div", { className: "row" },
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Label, null, "X Axis"),
                React.createElement(components_1.Input, { value: xAxis || "", onChange: setXAxis })),
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Label, null, "Y Axis"),
                React.createElement(components_1.Input, { value: yAxis || "", onChange: setYAxis }))),
        React.createElement(components_1.FormField, { className: "button-row" },
            React.createElement(components_1.Button, { className: "cancel", title: "Cancel", onClick: cancel }),
            React.createElement(components_1.Button, { className: "save", title: "Save", onClick: save, active: isValid() })));
};
exports.EnergyBreakdown = (props) => {
    let [year, setYear] = React.useState(props.year || new Date().getFullYear().toString());
    let [month, setMonth] = React.useState(props.month || ((new Date().getMonth()).toString()));
    let [building, setBuilding] = React.useState(props.building || '');
    let [categories, setCategories] = React.useState([]);
    let [selectedCategories, setSelectedCategories] = React.useState(props.categories || []);
    let [buildings, setBuildings] = React.useState([]);
    let [utilityData, setUtilityData] = React.useState([]);
    let [yearList, setYearList] = React.useState([]);
    let propsUpdater = components_1.useUpdateWidgetProps();
    function lookupCategory(cat) {
        let i = categories.find(c => c.id == cat);
        if (!i) {
            return cat;
        }
        return i === null || i === void 0 ? void 0 : i.label;
    }
    function loadLocations() {
        return __awaiter(this, void 0, void 0, function* () {
            let { locations, categories } = yield props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true });
            setBuildings(transformLocations(locations));
            setCategories(transformCategories(categories));
        });
    }
    React.useEffect(() => {
        props.uxpContext.executeAction(model, 'ConsumptionBreakdownForLocationMonth', { location: building, year, month: Number(month) + 1 }, { json: true }).then(data => {
            setUtilityData(data.map((item) => ({ value: Number(item.value), category: item.category, label: lookupCategory(item.category) })));
            propsUpdater(props.instanceId, { building, year, month: Number(month), categories: selectedCategories });
        });
    }, [building, year, month, selectedCategories]);
    React.useEffect(() => {
        loadLocations();
        getYears(props.uxpContext).then(setYearList);
    }, []);
    function selectBuilding(name) {
        setBuilding(name);
    }
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    let consumptionData = utilityData.filter(x => selectedCategories.indexOf(x.category) >= 0);
    let hasData = consumptionData.filter(x => Number(x.value)).length > 0;
    let isSample = (!buildings.length && !categories.length && !utilityData.length);
    if (isSample) {
        let SampleData = [{ value: 34, category: 'Heating', label: 'HVAC' }, { value: 22, category: 'Workstations', label: 'Workstations' }, { value: 19, 'category': 'Utilities', label: 'Utilities' }];
        consumptionData = SampleData;
        hasData = true;
    }
    return React.createElement(components_1.WidgetWrapper, { className: 'energy-widget', cssBreakPoints: {
            width: {
                default: 'large',
                350: 'small'
            }
        }, instanceId: props.instanceId, sampleData: {
            showLabel: isSample,
            description: 'This widget contains sample Energy Consumption data. To use data from your own location, click on the Spaceworx icon to purchase the required product(s).',
            productIds: ['60a7514811463a1ec3e13528', '6284e77efe60b4e6386f8e97', '6284d138fe60b4e6386f8e8b', '63fc771953a83942be8e7be5']
        } },
        React.createElement(components_1.TitleBar, { icon: EnergyIcon, title: 'Energy Consumption (Category-wise) ' },
            React.createElement(components_1.FilterPanel, { enableClear: false },
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Year', onChange: (year) => setYear(year), options: yearList, labelField: 'year', valueField: 'year', selected: year }),
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Month', onChange: (month) => setMonth(month), options: Months.map((m, i) => ({ label: m, value: '' + i })), selected: '' + month }),
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Location', onChange: (b) => selectBuilding(b), selected: building, options: buildings, labelField: 'location', valueField: 'location' }),
                React.createElement("div", { className: 'cat-list' }, categories.filter(c => { var _a; return !((_a = c === null || c === void 0 ? void 0 : c.subcategories) === null || _a === void 0 ? void 0 : _a.length); }).map(c => {
                    let category = c.id;
                    return React.createElement(components_1.Checkbox, { checked: selectedCategories.indexOf(category) >= 0, label: c.label, onChange: (checked) => {
                            let i = selectedCategories.indexOf(category);
                            if (checked) {
                                if (i < 0) {
                                    selectedCategories.push(category);
                                }
                            }
                            if (!checked) {
                                if (i >= 0) {
                                    selectedCategories.splice(i, 1);
                                }
                            }
                            setSelectedCategories(selectedCategories.slice());
                        } });
                })))),
        React.createElement("div", { style: { flex: 1, padding: '30px', paddingBottom: '45px' } }, !hasData ?
            React.createElement("div", { className: 'no-budget-data' }, "No data available")
            :
                React.createElement("div", { className: "chart-resp-pie" },
                    React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                        React.createElement(recharts_1.PieChart, null,
                            React.createElement(recharts_1.Legend, { verticalAlign: "top", height: 35 }),
                            React.createElement(recharts_1.Pie, { data: consumptionData, label: true, cx: '50%', nameKey: 'label', cy: '50%', innerRadius: '55%', outerRadius: '85%', paddingAngle: 5, dataKey: "value" }, consumptionData.map((entry, index) => (React.createElement(recharts_1.Cell, { key: `cell-${index}`, fill: COLORS[index % COLORS.length] })))),
                            React.createElement(recharts_1.Tooltip, { content: (opts) => {
                                    var _a, _b;
                                    return React.createElement("div", { className: 'u-tt' },
                                        React.createElement("div", null, (_a = opts === null || opts === void 0 ? void 0 : opts.payload[0]) === null || _a === void 0 ? void 0 : _a.name),
                                        React.createElement("div", null, intFmt(Number((_b = opts === null || opts === void 0 ? void 0 : opts.payload[0]) === null || _b === void 0 ? void 0 : _b.value).toFixed(2)) + ' kWh'));
                                } }))))));
};
exports.CurrentUsage = (props) => {
    var _a;
    let radius = '50%';
    let [buildings, setBuildings] = React.useState([]);
    let [building, setBuilding] = React.useState(props.building || '');
    let [value, setValue] = React.useState(0);
    // let [budget, setBudget] = React.useState(0);
    let updater = components_1.useUpdateWidgetProps();
    let [categories, setCategories] = React.useState([]);
    let [selectedCategory, setSelectedCategory] = React.useState(props.category || '');
    function loadLocations() {
        return __awaiter(this, void 0, void 0, function* () {
            let { locations, categories } = yield props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true });
            setBuildings(transformLocations(locations));
            setCategories(transformCategories(categories));
        });
    }
    React.useEffect(() => {
        loadLocations().then(_ => {
        });
    }, []);
    useEffectWithPolling(props.uxpContext, "lxp/energy", 15 * 60 * 1000, () => __awaiter(void 0, void 0, void 0, function* () {
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let data = yield props.uxpContext.executeAction(model, 'ConsumptionForLocationMonth', { location: building, year, month, category: selectedCategory }, { json: true });
        if (data && data[0]) {
            setValue(Number(data[0].value) || 0);
        }
        else {
            setValue(0);
        }
        updater(props.instanceId, { category: selectedCategory, building });
    }), [building, selectedCategory]);
    let l = buildings.find(b => b.location == building);
    let budgetItems = ((_a = l === null || l === void 0 ? void 0 : l.categories) === null || _a === void 0 ? void 0 : _a[selectedCategory]) || [];
    let budget = budgetItems[new Date().getMonth() + 1] || 0;
    let budgetValue = Number(budget) || (value || DEFAULT_BUDGET_VALUE * 0.5) * 2;
    let isSample = !buildings.length && !categories.length && !Number(budget);
    if (isSample) {
        budgetValue = DEFAULT_BUDGET_VALUE;
        budget = DEFAULT_BUDGET_VALUE;
        value = DEFAULT_BUDGET_VALUE * 0.75;
    }
    return React.createElement(components_1.WidgetWrapper, { className: 'energy-gauge', instanceId: props.instanceId, sampleData: {
            showLabel: isSample,
            description: 'This widget contains sample Energy Usage data. To use data from your own location, click on the Spaceworx icon to purchase the required product(s).',
            productIds: ['60a7514811463a1ec3e13528', '6284e77efe60b4e6386f8e97', '6284d138fe60b4e6386f8e8b', '63fc771953a83942be8e7be5']
        } },
        React.createElement(components_1.TitleBar, { title: 'Current Monthly Energy Usage ' + (selectedCategory ? `[${selectedCategory}]` : '') },
            React.createElement(components_1.FilterPanel, { enableClear: false },
                React.createElement(components_1.Select, { className: 'selector-energy', onChange: setBuilding, selected: building, options: buildings, labelField: 'location', valueField: 'location' }),
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Energy Type', onChange: (b) => setSelectedCategory(b), selected: selectedCategory, options: categories, labelField: 'label', valueField: 'id' }))),
        React.createElement("div", { style: { flex: 1, position: 'relative' } },
            React.createElement(components_1.RadialGauge, { tickColor: '#424242', thickness: 40, gradient: true, colors: [
                    { color: 'lightblue', stopAt: 0.25 * budgetValue },
                    { color: 'lightgreen', stopAt: 0.33 * budgetValue },
                    { color: 'orange', stopAt: 0.65 * budgetValue },
                    { color: 'coral', stopAt: 0.80 * budgetValue }
                ], max: budgetValue, value: value, min: 0 })),
        React.createElement("div", { style: { fontSize: '1em', textAlign: 'center', padding: '10px', marginTop: '20px' } },
            React.createElement("span", { style: { height: '20px', backgroundSize: 'contain', display: 'inline-block', verticalAlign: 'middle', width: '14px', backgroundRepeat: 'no-repeat', marginRight: '10px', backgroundImage: `url(${EnergyIcon})` } }),
            React.createElement("span", { style: { textTransform: 'uppercase' } }, "This Month's Consumption")),
        React.createElement("div", { style: { fontSize: '2.8em', textAlign: 'center', padding: '0px 10px 10px 10px' } },
            value.toFixed(2),
            React.createElement("span", { style: { fontSize: '0.3em', opacity: 0.5 } }, "KWH"),
            Number(budget) > 0 ?
                React.createElement(React.Fragment, null,
                    React.createElement("span", { style: { marginLeft: '10px', opacity: 0.8, textTransform: 'uppercase', fontSize: '0.3em' } }, 'of ' + budget),
                    React.createElement("span", { style: { fontSize: '0.3em', opacity: 0.5 } }, "KWH"))
                : null));
};
/**
 * Register as a Widget
 */
uxp_1.registerWidget({
    id: "energy-budget",
    widget: EnergyBudgetWidget,
    configs: {
        layout: {
            w: 13,
            h: 9,
            minH: 9,
            minW: 13,
        },
        props: [
            {
                name: "colors",
                label: "Colors",
                type: "string"
            },
            {
                name: "labels",
                label: "axis labels",
                type: "string"
            }
        ],
        configPanel: EnergyBudgetWidgetConfigPanel
    },
    defaultProps: {
        colors: {
            baseline: "#79B7B6",
            consumption: "#F78FAA",
            cumulativeConsumption: "#06F",
            cumulativeBudget: "#ff7300",
        },
        labels: {
            xAxis: "",
            yAxis: ""
        }
    }
});
uxp_1.registerWidget({
    id: "current-monthly-energy",
    widget: exports.CurrentUsage,
    configs: {
        layout: {
            w: 6,
            h: 8,
            minH: 8,
            minW: 6,
            maxH: 10,
            maxW: 12
        },
    },
});
uxp_1.registerWidget({
    id: "energy-breakdown",
    widget: exports.EnergyBreakdown,
    configs: {
        layout: {
            // w: 7,
            // h: 8,
            // minH: 8,
            // minW: 7,
            // maxH: 12,
            // maxW: 16
            w: 7,
            h: 8,
            minH: 8,
            minW: 7,
            maxH: 12,
            maxW: 16
        },
    },
});
uxp_1.registerUI({
    id: 'config',
    component: Configuration_1.default,
    showDefaultHeader: false
});


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Recharts;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = UXPComponents;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map