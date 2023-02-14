/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".selector-energy {\n  margin-bottom: 10px;\n}\n\n.energy-gauge .gauge-face-container {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.energy-widget .no-budget-data {\n  font-size: 3em;\n  opacity: 0.5;\n  text-align: center;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.carbon-footprint {\n  padding: 10px 50px;\n}\n.carbon-footprint .profile-image-container {\n  background-color: transparent !important;\n}\n.carbon-footprint .cf-grid .data-grid-column {\n  border: none !important;\n}\n.carbon-footprint .cf-grid .item-card {\n  padding: 5px;\n}\n.carbon-footprint .cf-grid .item-card .title {\n  font-size: 2.4em;\n  font-weight: 200;\n}\n.carbon-footprint .cf-grid .item-card .content {\n  padding: 0px;\n}\n\n.energy-budget-widget-config-panel {\n  width: 60vw;\n  height: auto;\n}\n.energy-budget-widget-config-panel > .row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.energy-budget-widget-config-panel > .button-row {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.energy-budget-widget-config-panel > .button-row > .uxp-button {\n  margin: 5px;\n}\n.energy-budget-widget-config-panel > .button-row > .uxp-button.save.active {\n  background-color: #52c4c9;\n  color: white;\n}\n\n.u-tt {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  padding: 10px;\n  color: white;\n  display: flex;\n}\n.u-tt div {\n  margin-right: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
    var nonce =  true ? __webpack_require__.nc : 0;

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

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUsage = exports.EnergyBreakdown = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
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
    (0, components_1.useMessageBus)(context, channel, (p, ch) => {
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
    let updater = (0, components_1.useUpdateWidgetProps)();
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
    return (React.createElement(components_1.WidgetWrapper, { className: 'energy-widget' },
        React.createElement(components_1.TitleBar, { icon: EnergyIcon, title: 'YEARLY ENERGY CONSUMPTION ' + (hasBudget ? 'Budgeted vs Actual ' : '') + (selectedBuilding ? `${selectedBuilding} - ${year}` : '') + ' ' + (selectedCategory ? `[${selectedCategory}]` : '') },
            React.createElement(components_1.FilterPanel, { enableClear: false },
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Year', onChange: (year) => setYear(year), options: yearList, labelField: 'year', valueField: 'year', selected: year }),
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Location', onChange: (b) => setSelectedBuilding(b), selected: selectedBuilding, options: buildings, labelField: 'location', valueField: 'location' }),
                React.createElement(components_1.Select, { className: 'selector-energy', placeholder: 'Energy Type', onChange: (b) => setSelectedCategory(b), selected: selectedCategory, options: categories, labelField: 'label', valueField: 'id' }))),
        showCO2 && React.createElement("div", { className: 'carbon-footprint' },
            React.createElement(components_1.DataGrid, { className: 'cf-grid', data: [
                    { 'title': 'power consumed', value: `${totalConsumption} kWh`, image: PowerIcon },
                    { 'title': 'co2 emitted', value: `${(emissions).toFixed(1)} tonnes`, image: Co2Icon },
                    { 'title': 'trees to offset co2', value: `${(trees).toFixed(0)} `, image: TreesIcon },
                ], columns: 3, renderItem: (item) => {
                    return React.createElement(components_1.ItemCard, { imageField: 'image', item: item, titleField: 'value', subTitleField: 'title' });
                } })),
        React.createElement("div", { style: { flex: 1, padding: '30px' } }, (!hasData && !hasBudget)
            ?
                React.createElement("div", { className: 'no-budget-data' }, "No data available")
            :
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
                            React.createElement(recharts_1.Line, { name: 'Cumulative Budget', strokeDasharray: '0 1 1 1', strokeDashoffset: 3, strokeOpacity: 0.8, strokeWidth: 2, yAxisId: 'cummulative', type: "monotone", fill: 'red', fillOpacity: 0.1, dataKey: "cummulativeBudget", stroke: (colors === null || colors === void 0 ? void 0 : colors.cumulativeBudget) || "#ff7300" })))),
        React.createElement(components_1.SampleDataLabel, { show: isSample })));
};
const EnergyBudgetWidgetConfigPanel = (props) => {
    let { onSubmit, onCancel, configs } = props;
    let toast = (0, components_1.useToast)();
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
const EnergyBreakdown = (props) => {
    let [year, setYear] = React.useState(props.year || new Date().getFullYear().toString());
    let [month, setMonth] = React.useState(props.month || ((new Date().getMonth()).toString()));
    let [building, setBuilding] = React.useState(props.building || '');
    let [categories, setCategories] = React.useState([]);
    let [selectedCategories, setSelectedCategories] = React.useState(props.categories || []);
    let [buildings, setBuildings] = React.useState([]);
    let [utilityData, setUtilityData] = React.useState([]);
    let [yearList, setYearList] = React.useState([]);
    let propsUpdater = (0, components_1.useUpdateWidgetProps)();
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
    return React.createElement(components_1.WidgetWrapper, { className: 'energy-widget' },
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
                React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                    React.createElement(recharts_1.PieChart, null,
                        React.createElement(recharts_1.Legend, { verticalAlign: "top", height: 36 }),
                        React.createElement(recharts_1.Pie, { data: consumptionData, label: true, cx: '50%', nameKey: 'label', cy: '50%', innerRadius: '55%', outerRadius: '85%', paddingAngle: 5, dataKey: "value" }, consumptionData.map((entry, index) => (React.createElement(recharts_1.Cell, { key: `cell-${index}`, fill: COLORS[index % COLORS.length] })))),
                        React.createElement(recharts_1.Tooltip, { content: (opts) => {
                                var _a, _b;
                                return React.createElement("div", { className: 'u-tt' },
                                    React.createElement("div", null, (_a = opts === null || opts === void 0 ? void 0 : opts.payload[0]) === null || _a === void 0 ? void 0 : _a.name),
                                    React.createElement("div", null, intFmt(Number((_b = opts === null || opts === void 0 ? void 0 : opts.payload[0]) === null || _b === void 0 ? void 0 : _b.value).toFixed(2)) + ' kWh'));
                            } })))),
        isSample && React.createElement(components_1.SampleDataLabel, null));
};
exports.EnergyBreakdown = EnergyBreakdown;
const CurrentUsage = (props) => {
    var _a;
    let radius = '50%';
    let [buildings, setBuildings] = React.useState([]);
    let [building, setBuilding] = React.useState(props.building || '');
    let [value, setValue] = React.useState(0);
    // let [budget, setBudget] = React.useState(0);
    let updater = (0, components_1.useUpdateWidgetProps)();
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
    return React.createElement(components_1.WidgetWrapper, { className: 'energy-gauge' },
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
        React.createElement("div", { style: { fontSize: '4em', textAlign: 'center', padding: '10px' } },
            value.toFixed(2),
            React.createElement("span", { style: { fontSize: '0.3em', opacity: 0.5 } }, "KWH"),
            Number(budget) > 0 ?
                React.createElement(React.Fragment, null,
                    React.createElement("span", { style: { marginLeft: '10px', opacity: 0.8, textTransform: 'uppercase', fontSize: '0.3em' } }, 'of ' + budget),
                    React.createElement("span", { style: { fontSize: '0.3em', opacity: 0.5 } }, "KWH"))
                : null),
        React.createElement(components_1.SampleDataLabel, { show: isSample }));
};
exports.CurrentUsage = CurrentUsage;
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "energy-budget",
    name: "Yearly Energy Consumption",
    widget: EnergyBudgetWidget,
    configs: {
        layout: {},
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
(0, uxp_1.registerWidget)({
    id: "current-monthly-energy",
    name: "Current Monthly Energy Usage",
    widget: exports.CurrentUsage,
    configs: {
        layout: {},
    },
});
(0, uxp_1.registerWidget)({
    id: "energy-breakdown",
    name: "Energy Consumption (Category-wise)",
    widget: exports.EnergyBreakdown,
    configs: {
        layout: {},
    },
});


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerUI = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    let widget = Object.assign({}, _widget, { id: (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase() });
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    window.registerWidget(widget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    let link = Object.assign({}, _link, { id: (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase() });
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', link.id);
    window.registerLink(link);
}
exports.registerLink = registerLink;
function registerUI(_ui) {
    let ui = Object.assign({}, _ui, { id: (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase() });
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', ui.id);
    window.registerUI(ui);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = Recharts;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":"356cd8c5-4807-4c5f-c60a-6b67c5660d4d","author":"eutech","widgets":[{"id":"energy-budget","name":"Yearly Energy Consumption","description":"Show actual energy consumption for the year vs budgeted consumption","category":"utility"},{"id":"current-monthly-energy","name":"Current Monthly Energy Usage","description":"A gauge display of how much of your monthly energy budget has been used. This can be set per category or overall.","category":"utility"},{"id":"energy-breakdown","name":"Energy Consumption (Category-wise)","description":"Provides insight on how energy is consumed across different categories of energy consumption.","category":"utility"}]}');

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map