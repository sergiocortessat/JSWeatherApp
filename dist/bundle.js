/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_main_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/main.jpg */ \"./src/assets/main.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Squada+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_main_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Squada One\\\", cursive;\\n  color: white;\\n}\\n\\nh1 {\\n  font-size: 4.5rem;\\n}\\n\\nbody,\\nhtml {\\n  height: 100%;\\n}\\n\\ninput {\\n  background-color: rgba(0, 0, 0, 0.5) !important;\\n  border-radius: 10px !important;\\n  color: white !important;\\n}\\n\\n.body-background {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  line-height: normal;\\n  overflow-x: hidden;\\n  height: 100%;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-attachment: fixed;\\n}\\n\\n.content {\\n  font-size: 2.5rem;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  border-radius: 10px;\\n  width: 50%;\\n  margin: 0 auto;\\n  min-height: auto;\\n}\\n\\n.weather > img {\\n  min-width: 100px;\\n}\\n\\n.alert {\\n  width: 30%;\\n  margin: 0 auto;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  border-radius: 10px;\\n  color: red;\\n}\\n\\n#find-me {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  border-radius: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JSWeatherApp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JSWeatherApp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://JSWeatherApp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://JSWeatherApp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JSWeatherApp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/cloud.jpg":
/*!******************************!*\
  !*** ./src/assets/cloud.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22208e8e3a4efe84ffba.jpg\";\n\n//# sourceURL=webpack://JSWeatherApp/./src/assets/cloud.jpg?");

/***/ }),

/***/ "./src/assets/fog.jpg":
/*!****************************!*\
  !*** ./src/assets/fog.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a0c5e037125bb4161b7.jpg\";\n\n//# sourceURL=webpack://JSWeatherApp/./src/assets/fog.jpg?");

/***/ }),

/***/ "./src/assets/main.jpg":
/*!*****************************!*\
  !*** ./src/assets/main.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"840cc29659a4ce35f2dd.jpg\";\n\n//# sourceURL=webpack://JSWeatherApp/./src/assets/main.jpg?");

/***/ }),

/***/ "./src/assets/rain.jpg":
/*!*****************************!*\
  !*** ./src/assets/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d03ac283e75457ebbac7.jpg\";\n\n//# sourceURL=webpack://JSWeatherApp/./src/assets/rain.jpg?");

/***/ }),

/***/ "./src/assets/suny3.jpg":
/*!******************************!*\
  !*** ./src/assets/suny3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c528fb250bb77832420f.jpg\";\n\n//# sourceURL=webpack://JSWeatherApp/./src/assets/suny3.jpg?");

/***/ }),

/***/ "./src/assets/weatherFaviCon.png":
/*!***************************************!*\
  !*** ./src/assets/weatherFaviCon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04fb1e2f4ec7ec4e0917.png\";\n\n//# sourceURL=webpack://JSWeatherApp/./src/assets/weatherFaviCon.png?");

/***/ }),

/***/ "./src/async.js":
/*!**********************!*\
  !*** ./src/async.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n// ASYNC FUNCTION // FETCHING WEATHER APP\n\nconst errorHandler = () => {\n  const error = document.querySelector('.error');\n  error.innerHTML = `\n    <div class=\"alert alert-primary\" role=\"alert\">\n    Sorry. We couldn't find the city. Try again!\n    </div>`;\n  setTimeout(() => {\n    error.innerHTML = '';\n  }, 2000);\n};\n\nconst getWeatherData = async (location, units) => {\n  const content = document.querySelector('.content');\n  try {\n    content.classList.remove('d-none');\n    const apiKey = '6bec4de18a94a1ec6fd65b14fff7ae04';\n    const tempUnits = units;\n    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${tempUnits}&appid=${apiKey}`;\n    const response = await fetch(apiCall);\n    const weatherData = await response.json();\n    const test = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.default)(weatherData, location, units);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)(test);\n  } catch (err) {\n    content.classList.add('d-none');\n    errorHandler();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);\n\n//# sourceURL=webpack://JSWeatherApp/./src/async.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selectBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectBackground */ \"./src/selectBackground.js\");\n// PUSH TO DOM\n\n// import weatherTemp from './logic';\n\nconst pushToDom = (parsedWeather) => {\n  // SELECTING BACKGROUND\n  (0,_selectBackground__WEBPACK_IMPORTED_MODULE_0__.default)(parsedWeather);\n  // TEMP WEATHER BUTTON\n  const tempButton = document.querySelector('.temp-button');\n  tempButton.classList.remove('d-none');\n  tempButton.classList.add('btn', 'btn-secondary', 'cel', 'my-3');\n  tempButton.innerText = parsedWeather.measureUnits;\n\n  // SELECTING AND CLEAN selectBackground DOM\n  const resultsDiv = document.querySelector('.content');\n  const nameDiv = document.querySelector('.name');\n  nameDiv.innerHTML = '';\n  const weatherDiv = document.querySelector('.weather');\n  weatherDiv.innerHTML = '';\n  const tempDiv = document.querySelector('.temp');\n  tempDiv.innerHTML = '';\n  const realTempDiv = document.querySelector('.real-temp');\n  realTempDiv.innerHTML = '';\n\n  // ELEMENTS TO PUSH\n  const nameElement = document.createElement('h2');\n  nameElement.textContent = parsedWeather.cityName.toUpperCase();\n\n  const weatherIconElement = document.createElement('img');\n  weatherIconElement.src = `http://openweathermap.org/img/w/${parsedWeather.weatherIcon}.png`;\n\n  const weatherName = document.createElement('p');\n  weatherName.textContent = 'Condition';\n\n  const weatherNameElement = document.createElement('p');\n  weatherNameElement.textContent = parsedWeather.weather;\n\n  const tempName = document.createElement('p');\n  tempName.textContent = 'Temperature';\n\n  const tempElement = document.createElement('p');\n  tempElement.textContent = parsedWeather.condition;\n  tempElement.innerHTML += parsedWeather.symbol;\n\n  const realTempName = document.createElement('p');\n  realTempName.textContent = 'Real Thermal Feeling';\n\n  const realTempElement = document.createElement('p');\n  realTempElement.textContent = parsedWeather.realFeel;\n  realTempElement.innerHTML += parsedWeather.symbol;\n\n  // APPEND CHILD'S\n\n  nameDiv.appendChild(nameElement);\n  weatherDiv.append(weatherName, weatherIconElement, weatherNameElement);\n  tempDiv.append(tempName, tempElement);\n  realTempDiv.append(realTempName, realTempElement);\n  resultsDiv.append(tempButton, nameDiv, weatherDiv, tempDiv, realTempDiv);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pushToDom);\n\n//# sourceURL=webpack://JSWeatherApp/./src/dom.js?");

/***/ }),

/***/ "./src/geoLocation.js":
/*!****************************!*\
  !*** ./src/geoLocation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst errorHandler = () => {\n  const error = document.querySelector('.error-location');\n  error.innerHTML = `\n      <div class=\"alert alert-primary\" role=\"alert\">\n      Unable to retrieve your location!\n      </div>`;\n  setTimeout(() => {\n    error.innerHTML = '';\n  }, 2000);\n};\n\nconst getLocation = async (lat, lon) => {\n  try {\n    const apiCall2 = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;\n    // const apiCall = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + '54.7114102' + '%2C' + '18.4089522' + '&language=en';\n    const response = await fetch(apiCall2);\n    const coordinatesCity = await response.json();\n    const cityName = coordinatesCity.localityInfo.administrative[3].name;\n    const cityName2 = coordinatesCity.city;\n    return cityName === '' ? cityName2 : cityName;\n  } catch (err) {\n    // status.textContent = 'Unable to find the city';\n    errorHandler();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);\n\n//# sourceURL=webpack://JSWeatherApp/./src/geoLocation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_weatherFaviCon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/weatherFaviCon.png */ \"./src/assets/weatherFaviCon.png\");\n/* harmony import */ var _searchEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchEventListener */ \"./src/searchEventListener.js\");\n/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./async */ \"./src/async.js\");\n/* harmony import */ var _geoLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geoLocation */ \"./src/geoLocation.js\");\n\n\n\n\n\n\nfunction geoFindMe() {\n  const status = document.querySelector('#status');\n  // const mapLink = document.querySelector('#map-link');\n\n  // mapLink.href = '';\n  // mapLink.textContent = '';\n\n  function success(position) {\n    const { latitude } = position.coords;\n    const { longitude } = position.coords;\n\n    status.textContent = '';\n    // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;\n    // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;\n    const content = document.querySelector('.content');\n    content.classList.add('py-3', 'px-2');\n    const location = (0,_geoLocation__WEBPACK_IMPORTED_MODULE_4__.default)(latitude, longitude);\n    location.then((city) => {\n    //   console.log(city);\n      (0,_async__WEBPACK_IMPORTED_MODULE_3__.default)(city, 'metric');\n    });\n  }\n\n  function error() {\n    // status.textContent = 'Unable to retrieve your location';\n    const error = document.querySelector('.error');\n    error.innerHTML = `\n      <div class=\"alert alert-primary\" role=\"alert\">\n      Unable to retrieve your location!\n      </div>`;\n    setTimeout(() => {\n      error.innerHTML = '';\n    }, 2000);\n  }\n\n  if (!navigator.geolocation) {\n    status.textContent = 'Geolocation is not supported by your browser';\n  } else {\n    // status.textContent = 'Locating…';\n    navigator.geolocation.getCurrentPosition(success, error);\n  }\n}\n\ngeoFindMe();\n// document.querySelector('#find-me').addEventListener('click', geoFindMe);\n_searchEventListener__WEBPACK_IMPORTED_MODULE_2__.default.EnterPress();\n_searchEventListener__WEBPACK_IMPORTED_MODULE_2__.default.Click();\n_searchEventListener__WEBPACK_IMPORTED_MODULE_2__.default.Button();\n\n//# sourceURL=webpack://JSWeatherApp/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherDataFilter = (data, location, units) => {\n  const cityName = location;\n  const condition = data.main.temp;\n  const weather = data.weather[0].description;\n  const weatherIcon = data.weather[0].icon;\n  const realFeel = data.main.feels_like;\n  const weatherBackground = data.weather[0].main;\n  let measureUnits;\n  let symbol;\n  if (units === 'imperial') {\n    measureUnits = 'CELSIUS';\n    symbol = '&#8457';\n  } else {\n    measureUnits = 'FAHRENHEIT';\n    symbol = '&#8451';\n  }\n  return {\n    cityName,\n    condition,\n    weather,\n    weatherIcon,\n    realFeel,\n    weatherBackground,\n    measureUnits,\n    symbol,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherDataFilter);\n\n\n//# sourceURL=webpack://JSWeatherApp/./src/logic.js?");

/***/ }),

/***/ "./src/searchEventListener.js":
/*!************************************!*\
  !*** ./src/searchEventListener.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ \"./src/async.js\");\n\n\n// SEARCH BUTTON AND KEYPRESS EVENT LISTENERS\nconst search = {};\nsearch.EnterPress = () => {\n  document.querySelector('input')\n    .addEventListener('keyup', (keyPressed) => {\n      if (keyPressed.which === 13) {\n        const location = document.querySelector('input').value;\n        (0,_async__WEBPACK_IMPORTED_MODULE_0__.default)(location, 'metric');\n      }\n    });\n  search.Click = () => {\n    document.querySelector('.search-button')\n      .addEventListener('click', () => {\n        const content = document.querySelector('.content');\n        content.classList.add('py-3', 'px-2');\n        const location = document.querySelector('input').value;\n        (0,_async__WEBPACK_IMPORTED_MODULE_0__.default)(location, 'metric');\n      });\n  };\n  search.Button = () => {\n    document.querySelector('.temp-button')\n      .addEventListener('click', (e) => {\n        const content = document.querySelector('.content');\n        content.classList.add('py-3', 'px-2');\n        const location = document.querySelector('.name').innerText;\n        if (e.target.innerHTML === 'FAHRENHEIT') {\n          (0,_async__WEBPACK_IMPORTED_MODULE_0__.default)(location, 'imperial');\n        } else {\n          (0,_async__WEBPACK_IMPORTED_MODULE_0__.default)(location, 'metric');\n        }\n      });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://JSWeatherApp/./src/searchEventListener.js?");

/***/ }),

/***/ "./src/selectBackground.js":
/*!*********************************!*\
  !*** ./src/selectBackground.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_rain_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/rain.jpg */ \"./src/assets/rain.jpg\");\n/* harmony import */ var _assets_fog_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/fog.jpg */ \"./src/assets/fog.jpg\");\n/* harmony import */ var _assets_cloud_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cloud.jpg */ \"./src/assets/cloud.jpg\");\n/* harmony import */ var _assets_suny3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/suny3.jpg */ \"./src/assets/suny3.jpg\");\n\n\n\n\n\nconst selectBackground = (parsedWeather) => {\n  const body = document.getElementById('body');\n  if (parsedWeather.weatherBackground === 'Clear') {\n    body.style.backgroundImage = `url(${_assets_suny3_jpg__WEBPACK_IMPORTED_MODULE_3__})`;\n  } else if (parsedWeather.weatherBackground === 'Rain' || parsedWeather.weatherBackground === 'Drizzle' || parsedWeather.weatherBackground === 'Thunderstorm') {\n    body.style.backgroundImage = `url(${_assets_rain_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\n  } else if (parsedWeather.weatherBackground === 'Snow') {\n    body.style.backgroundImage = 'url(\"\")';\n  } else if (parsedWeather.weatherBackground === 'Clouds') {\n    body.style.backgroundImage = `url(${_assets_cloud_jpg__WEBPACK_IMPORTED_MODULE_2__})`;\n  } else {\n    body.style.backgroundImage = `url(${_assets_fog_jpg__WEBPACK_IMPORTED_MODULE_1__})`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectBackground);\n\n//# sourceURL=webpack://JSWeatherApp/./src/selectBackground.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;