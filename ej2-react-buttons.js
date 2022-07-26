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

/***/ "./src/button/button.component.js":
/*!****************************************!*\
  !*** ./src/button/button.component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonComponent\": () => (/* binding */ ButtonComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"@syncfusion/ej2-buttons\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-react-base */ \"@syncfusion/ej2-react-base\");\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n\n\n\n/**\n * `ButtonComponent` represents the react Button Component.\n * ```ts\n * <ButtonComponent></ButtonComponent>\n * ```\n */\n\nvar ButtonComponent =\n/** @class */\nfunction (_super) {\n  __extends(ButtonComponent, _super);\n\n  function ButtonComponent(props) {\n    var _this = _super.call(this, props) || this;\n\n    _this.initRenderCalled = false;\n    _this.checkInjectedModules = false;\n    _this.immediateRender = true;\n    _this.portals = [];\n    return _this;\n  }\n\n  ButtonComponent.prototype.render = function () {\n    if ((this.element && !this.initRenderCalled || this.refreshing) && !this.isReactForeceUpdate) {\n      _super.prototype.render.call(this);\n\n      this.initRenderCalled = true;\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createElement('button', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));\n    }\n  };\n\n  return ButtonComponent;\n}(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.Button);\n\n\n(0,_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.applyMixins)(ButtonComponent, [_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.ComponentBase, react__WEBPACK_IMPORTED_MODULE_0__.Component]);\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/button/button.component.js?");

/***/ }),

/***/ "./src/button/index.js":
/*!*****************************!*\
  !*** ./src/button/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonComponent\": () => (/* reexport safe */ _button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent)\n/* harmony export */ });\n/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component */ \"./src/button/button.component.js\");\n\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/button/index.js?");

/***/ }),

/***/ "./src/check-box/checkbox.component.js":
/*!*********************************************!*\
  !*** ./src/check-box/checkbox.component.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CheckBoxComponent\": () => (/* binding */ CheckBoxComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"@syncfusion/ej2-buttons\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-react-base */ \"@syncfusion/ej2-react-base\");\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n\n\n\n/**\n * Represents the react CheckBox Component.\n * ```ts\n * <CheckBoxComponent label='Default'></CheckBoxComponent>\n * ```\n */\n\nvar CheckBoxComponent =\n/** @class */\nfunction (_super) {\n  __extends(CheckBoxComponent, _super);\n\n  function CheckBoxComponent(props) {\n    var _this = _super.call(this, props) || this;\n\n    _this.initRenderCalled = false;\n    _this.checkInjectedModules = false;\n    _this.immediateRender = true;\n    _this.portals = [];\n    return _this;\n  }\n\n  CheckBoxComponent.prototype.render = function () {\n    if ((this.element && !this.initRenderCalled || this.refreshing) && !this.isReactForeceUpdate) {\n      _super.prototype.render.call(this);\n\n      this.initRenderCalled = true;\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [].concat(react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", this.getDefaultAttributes()), this.portals));\n    }\n  };\n\n  return CheckBoxComponent;\n}(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBox);\n\n\n(0,_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.applyMixins)(CheckBoxComponent, [_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.ComponentBase, react__WEBPACK_IMPORTED_MODULE_0__.Component]);\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/check-box/checkbox.component.js?");

/***/ }),

/***/ "./src/check-box/index.js":
/*!********************************!*\
  !*** ./src/check-box/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CheckBoxComponent\": () => (/* reexport safe */ _checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckBoxComponent)\n/* harmony export */ });\n/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.component */ \"./src/check-box/checkbox.component.js\");\n\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/check-box/index.js?");

/***/ }),

/***/ "./src/chips/chiplist.component.js":
/*!*****************************************!*\
  !*** ./src/chips/chiplist.component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChipListComponent\": () => (/* binding */ ChipListComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"@syncfusion/ej2-buttons\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-react-base */ \"@syncfusion/ej2-react-base\");\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n\n\n\n/**\n * Represents the Essential JS 2 React ChipList Component.\n * ```ts\n * <ChipListComponent></ChipListComponent>\n * ```\n */\n\nvar ChipListComponent =\n/** @class */\nfunction (_super) {\n  __extends(ChipListComponent, _super);\n\n  function ChipListComponent(props) {\n    var _this = _super.call(this, props) || this;\n\n    _this.initRenderCalled = false;\n    _this.checkInjectedModules = false;\n    _this.directivekeys = {\n      'chips': 'chip'\n    };\n    _this.immediateRender = false;\n    _this.portals = [];\n    return _this;\n  }\n\n  ChipListComponent.prototype.render = function () {\n    if ((this.element && !this.initRenderCalled || this.refreshing) && !this.isReactForeceUpdate) {\n      _super.prototype.render.call(this);\n\n      this.initRenderCalled = true;\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));\n    }\n  };\n\n  return ChipListComponent;\n}(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.ChipList);\n\n\n(0,_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.applyMixins)(ChipListComponent, [_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.ComponentBase, react__WEBPACK_IMPORTED_MODULE_0__.Component]);\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/chips/chiplist.component.js?");

/***/ }),

/***/ "./src/chips/chips-directive.js":
/*!**************************************!*\
  !*** ./src/chips/chips-directive.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChipDirective\": () => (/* binding */ ChipDirective),\n/* harmony export */   \"ChipsDirective\": () => (/* binding */ ChipsDirective)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-react-base */ \"@syncfusion/ej2-react-base\");\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n\n/**\n * `ChipDirective` directive represent a chip of the React ChipList.\n * ```html\n * <ChipListComponent>\n *   <ChipsDirective>\n *    <ChipDirective text='chip1'></ChipDirective>\n *    <ChipDirective text='chip2'></ChipDirective>\n *   </ChipsDirective>\n * </ChipListComponent>\n * ```\n */\n\nvar ChipDirective =\n/** @class */\nfunction (_super) {\n  __extends(ChipDirective, _super);\n\n  function ChipDirective() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  ChipDirective.moduleName = 'chip';\n  return ChipDirective;\n}(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_0__.ComplexBase);\n\n\n\nvar ChipsDirective =\n/** @class */\nfunction (_super) {\n  __extends(ChipsDirective, _super);\n\n  function ChipsDirective() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  ChipsDirective.propertyName = 'chips';\n  ChipsDirective.moduleName = 'chips';\n  return ChipsDirective;\n}(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_0__.ComplexBase);\n\n\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/chips/chips-directive.js?");

/***/ }),

/***/ "./src/chips/index.js":
/*!****************************!*\
  !*** ./src/chips/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChipDirective\": () => (/* reexport safe */ _chips_directive__WEBPACK_IMPORTED_MODULE_0__.ChipDirective),\n/* harmony export */   \"ChipListComponent\": () => (/* reexport safe */ _chiplist_component__WEBPACK_IMPORTED_MODULE_1__.ChipListComponent),\n/* harmony export */   \"ChipsDirective\": () => (/* reexport safe */ _chips_directive__WEBPACK_IMPORTED_MODULE_0__.ChipsDirective)\n/* harmony export */ });\n/* harmony import */ var _chips_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chips-directive */ \"./src/chips/chips-directive.js\");\n/* harmony import */ var _chiplist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chiplist.component */ \"./src/chips/chiplist.component.js\");\n\n\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/chips/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonComponent\": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent),\n/* harmony export */   \"CheckBoxComponent\": () => (/* reexport safe */ _check_box__WEBPACK_IMPORTED_MODULE_1__.CheckBoxComponent),\n/* harmony export */   \"ChipDirective\": () => (/* reexport safe */ _chips__WEBPACK_IMPORTED_MODULE_4__.ChipDirective),\n/* harmony export */   \"ChipListComponent\": () => (/* reexport safe */ _chips__WEBPACK_IMPORTED_MODULE_4__.ChipListComponent),\n/* harmony export */   \"ChipsDirective\": () => (/* reexport safe */ _chips__WEBPACK_IMPORTED_MODULE_4__.ChipsDirective),\n/* harmony export */   \"RadioButtonComponent\": () => (/* reexport safe */ _radio_button__WEBPACK_IMPORTED_MODULE_2__.RadioButtonComponent),\n/* harmony export */   \"SwitchComponent\": () => (/* reexport safe */ _switch__WEBPACK_IMPORTED_MODULE_3__.SwitchComponent)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/button/index.js\");\n/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-box */ \"./src/check-box/index.js\");\n/* harmony import */ var _radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-button */ \"./src/radio-button/index.js\");\n/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch */ \"./src/switch/index.js\");\n/* harmony import */ var _chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chips */ \"./src/chips/index.js\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"@syncfusion/ej2-buttons\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_5__) if([\"default\",\"ButtonComponent\",\"CheckBoxComponent\",\"RadioButtonComponent\",\"SwitchComponent\",\"ChipDirective\",\"ChipListComponent\",\"ChipsDirective\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/index.js?");

/***/ }),

/***/ "./src/radio-button/index.js":
/*!***********************************!*\
  !*** ./src/radio-button/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RadioButtonComponent\": () => (/* reexport safe */ _radiobutton_component__WEBPACK_IMPORTED_MODULE_0__.RadioButtonComponent)\n/* harmony export */ });\n/* harmony import */ var _radiobutton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radiobutton.component */ \"./src/radio-button/radiobutton.component.js\");\n\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/radio-button/index.js?");

/***/ }),

/***/ "./src/radio-button/radiobutton.component.js":
/*!***************************************************!*\
  !*** ./src/radio-button/radiobutton.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RadioButtonComponent\": () => (/* binding */ RadioButtonComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"@syncfusion/ej2-buttons\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-react-base */ \"@syncfusion/ej2-react-base\");\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n\n\n\n/**\n * Represents the react RadioButton Component.\n * ```ts\n * <RadioButtonComponent label='Default'></RadioButtonComponent>\n * ```\n */\n\nvar RadioButtonComponent =\n/** @class */\nfunction (_super) {\n  __extends(RadioButtonComponent, _super);\n\n  function RadioButtonComponent(props) {\n    var _this = _super.call(this, props) || this;\n\n    _this.initRenderCalled = false;\n    _this.checkInjectedModules = false;\n    _this.immediateRender = true;\n    _this.portals = [];\n    return _this;\n  }\n\n  RadioButtonComponent.prototype.render = function () {\n    if ((this.element && !this.initRenderCalled || this.refreshing) && !this.isReactForeceUpdate) {\n      _super.prototype.render.call(this);\n\n      this.initRenderCalled = true;\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [].concat(react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", this.getDefaultAttributes()), this.portals));\n    }\n  };\n\n  return RadioButtonComponent;\n}(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.RadioButton);\n\n\n(0,_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.applyMixins)(RadioButtonComponent, [_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.ComponentBase, react__WEBPACK_IMPORTED_MODULE_0__.Component]);\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/radio-button/radiobutton.component.js?");

/***/ }),

/***/ "./src/switch/index.js":
/*!*****************************!*\
  !*** ./src/switch/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SwitchComponent\": () => (/* reexport safe */ _switch_component__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent)\n/* harmony export */ });\n/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch.component */ \"./src/switch/switch.component.js\");\n\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/switch/index.js?");

/***/ }),

/***/ "./src/switch/switch.component.js":
/*!****************************************!*\
  !*** ./src/switch/switch.component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SwitchComponent\": () => (/* binding */ SwitchComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"@syncfusion/ej2-buttons\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-react-base */ \"@syncfusion/ej2-react-base\");\n/* harmony import */ var _syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = undefined && undefined.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n\n\n\n/**\n * Represents the react Switch Component.\n * ```ts\n * <SwitchComponent></SwitchComponent>\n * ```\n */\n\nvar SwitchComponent =\n/** @class */\nfunction (_super) {\n  __extends(SwitchComponent, _super);\n\n  function SwitchComponent(props) {\n    var _this = _super.call(this, props) || this;\n\n    _this.initRenderCalled = false;\n    _this.checkInjectedModules = false;\n    _this.immediateRender = true;\n    _this.portals = [];\n    return _this;\n  }\n\n  SwitchComponent.prototype.render = function () {\n    if ((this.element && !this.initRenderCalled || this.refreshing) && !this.isReactForeceUpdate) {\n      _super.prototype.render.call(this);\n\n      this.initRenderCalled = true;\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [].concat(react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", this.getDefaultAttributes()), this.portals));\n    }\n  };\n\n  return SwitchComponent;\n}(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_1__.Switch);\n\n\n(0,_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.applyMixins)(SwitchComponent, [_syncfusion_ej2_react_base__WEBPACK_IMPORTED_MODULE_2__.ComponentBase, react__WEBPACK_IMPORTED_MODULE_0__.Component]);\n\n//# sourceURL=webpack://SyncfusionReactButtons/./src/switch/switch.component.js?");

/***/ }),

/***/ "@syncfusion/ej2-buttons":
/*!******************************************!*\
  !*** external "@syncfusion/ej2-buttons" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@syncfusion/ej2-buttons");

/***/ }),

/***/ "@syncfusion/ej2-react-base":
/*!*********************************************!*\
  !*** external "@syncfusion/ej2-react-base" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@syncfusion/ej2-react-base");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	exports.SyncfusionReactButtons = __webpack_exports__;
/******/ 	
/******/ })()
;