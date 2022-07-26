/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("SyncfusionBase"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["SyncfusionBase", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["SyncfusionReactBase"] = factory(require("SyncfusionBase"), require("react"), require("react-dom"));
	else
		root["SyncfusionReactBase"] = factory(root["SyncfusionBase"], root["react"], root["react-dom"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__syncfusion_ej2_base__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/complex-base.js":
/*!*****************************!*\
  !*** ./src/complex-base.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ \"react\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n  }));\n\n  var ComplexBase = function (_super) {\n    __extends(ComplexBase, _super);\n\n    function ComplexBase() {\n      return _super !== null && _super.apply(this, arguments) || this;\n    }\n\n    ComplexBase.prototype.render = function () {\n      return null;\n    };\n\n    ComplexBase.isDirective = true;\n    return ComplexBase;\n  }(React.PureComponent);\n\n  exports.ComplexBase = ComplexBase;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://SyncfusionReactBase/./src/complex-base.js?");

/***/ }),

/***/ "./src/component-base.js":
/*!*******************************!*\
  !*** ./src/component-base.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ \"react\"), __webpack_require__(/*! react-dom */ \"react-dom\"), __webpack_require__(/*! @syncfusion/ej2-base */ \"@syncfusion/ej2-base\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React, ReactDOM, ej2_base_1) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n  }));\n  var defaulthtmlkeys = ['alt', 'className', 'disabled', 'form', 'id', 'readOnly', 'style', 'tabIndex', 'title', 'type', 'name', 'onClick', 'onFocus', 'onBlur'];\n  var delayUpdate = ['accordion', 'tab', 'splitter'];\n  var reactUid = 0;\n  var isColEName = new RegExp('\\]');\n\n  var ComponentBase = function (_super) {\n    __extends(ComponentBase, _super);\n\n    function ComponentBase() {\n      var _this = _super !== null && _super.apply(this, arguments) || this;\n\n      _this.mountingState = false;\n      _this.attrKeys = [];\n      _this.cachedTimeOut = 0;\n      _this.isAppendCalled = false;\n      _this.initRenderCalled = false;\n      _this.isReactForeceUpdate = false;\n      _this.isReact = true;\n      _this.isshouldComponentUpdateCalled = false;\n      _this.isCreated = false;\n      return _this;\n    }\n\n    ComponentBase.prototype.componentDidMount = function () {\n      this.refreshChild(true);\n      this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;\n      this.renderReactComponent();\n\n      if (this.portals && this.portals.length) {\n        this.mountingState = true;\n        this.renderReactTemplates();\n        this.mountingState = false;\n      }\n    };\n\n    ComponentBase.prototype.componentDidUpdate = function (prev) {\n      if (!this.isshouldComponentUpdateCalled && this.initRenderCalled && !this.isReactForeceUpdate) {\n        this.isshouldComponentUpdateCalled = true;\n\n        if (prev !== this.props) {\n          this.refreshProperties(this.props, true);\n        }\n      }\n    };\n\n    ComponentBase.prototype.renderReactComponent = function () {\n      var ele = this.reactElement;\n\n      if (ele && !this.isAppendCalled) {\n        this.isAppendCalled = true;\n        this.appendTo(ele);\n      }\n    };\n\n    ComponentBase.prototype.shouldComponentUpdate = function (nextProps) {\n      this.isshouldComponentUpdateCalled = true;\n\n      if (!this.initRenderCalled) {\n        this.updateProperties(nextProps, true);\n        return true;\n      }\n\n      if (!this.isAppendCalled) {\n        clearTimeout(this.cachedTimeOut);\n        this.isAppendCalled = true;\n        this.appendTo(this.reactElement);\n      }\n\n      this.updateProperties(nextProps);\n      return true;\n    };\n\n    ComponentBase.prototype.updateProperties = function (nextProps, silent) {\n      var _this = this;\n\n      var dProps = ej2_base_1.extend({}, nextProps);\n      var keys = Object.keys(nextProps);\n\n      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {\n        var propkey = keys_1[_i];\n        var isClassName = propkey === 'className';\n\n        if (propkey === 'children') {\n          continue;\n        }\n\n        if (!isClassName && !ej2_base_1.isNullOrUndefined(this.htmlattributes[propkey]) && this.htmlattributes[propkey] !== dProps[propkey]) {\n          this.htmlattributes[propkey] = dProps[propkey];\n        }\n\n        if (this.compareValues(this.props[propkey], nextProps[propkey])) {\n          delete dProps[propkey];\n        } else if (this.attrKeys.indexOf(propkey) !== -1) {\n          if (isClassName) {\n            this.clsName = true;\n            var propsClsName = this.props[propkey].split(' ');\n\n            for (var i = 0; i < propsClsName.length; i++) {\n              this.element.classList.remove(propsClsName[i]);\n            }\n\n            var dpropsClsName = dProps[propkey].split(' ');\n\n            for (var j = 0; j < dpropsClsName.length; j++) {\n              this.element.classList.add(dpropsClsName[j]);\n            }\n          } else if (propkey !== 'disabled') {\n            delete dProps[propkey];\n          }\n        } else if (propkey === 'value' && nextProps[propkey] === this[propkey]) {\n          delete dProps[propkey];\n        } else if ((propkey === 'valueTemplate' || propkey === 'itemTemplate' || propkey === 'headerTemplate') && nextProps[propkey].toString() === this[propkey].toString()) {\n          delete dProps[propkey];\n        }\n      }\n\n      if (dProps['children']) {\n        delete dProps['children'];\n      }\n\n      if (this.initRenderCalled && (this.canDelayUpdate || this.props.delayUpdate)) {\n        setTimeout(function () {\n          _this.refreshProperties(dProps, nextProps, silent);\n        });\n      } else {\n        this.refreshProperties(dProps, nextProps, silent);\n      }\n    };\n\n    ComponentBase.prototype.refreshProperties = function (dProps, nextProps, silent) {\n      if (Object.keys(dProps).length) {\n        if (!silent) {\n          this.processComplexTemplate(dProps, this);\n        }\n\n        this.setProperties(dProps, silent);\n      }\n\n      this.refreshChild(silent, nextProps);\n    };\n\n    ComponentBase.prototype.processComplexTemplate = function (curObject, context) {\n      var compTemplate = context.complexTemplate;\n\n      if (compTemplate) {\n        for (var prop in compTemplate) {\n          var PropVal = compTemplate[prop];\n\n          if (curObject[prop]) {\n            ej2_base_1.setValue(PropVal, ej2_base_1.getValue(prop, curObject), curObject);\n          }\n        }\n      }\n    };\n\n    ComponentBase.prototype.getDefaultAttributes = function () {\n      var _this = this;\n\n      this.isReact = true;\n      var propKeys = Object.keys(this.props);\n      var stringValue = [\"autocomplete\", \"dropdownlist\", \"combobox\"];\n\n      if (!this.htmlattributes) {\n        this.htmlattributes = {};\n      }\n\n      this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);\n\n      for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {\n        var prop = propKeys_1[_i];\n\n        if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1) {\n          if (this.htmlattributes[prop] !== this.props[prop]) {\n            this.htmlattributes[prop] = this.props[prop];\n          }\n        }\n      }\n\n      if (!this.htmlattributes.ref) {\n        this.htmlattributes.ref = function (ele) {\n          _this.reactElement = ele;\n        };\n\n        var keycompoentns = ['autocomplete', 'combobox', 'dropdownlist', 'dropdowntree', 'multiselect', 'listbox', 'colorpicker', 'numerictextbox', 'textbox', 'uploader', 'maskedtextbox', 'slider', 'datepicker', 'datetimepicker', 'daterangepicker', 'timepicker', 'checkbox', 'switch', 'radio'];\n\n        if (keycompoentns.indexOf(this.getModuleName()) !== -1) {\n          this.htmlattributes.key = '' + ComponentBase.reactUid;\n          ComponentBase.reactUid++;\n        }\n      }\n\n      if (this.clsName) {\n        var clsList = this.element.classList;\n        var className = this.htmlattributes['className'];\n\n        for (var i = 0; i < clsList.length; i++) {\n          if (className.indexOf(clsList[i]) == -1) {\n            this.htmlattributes['className'] = this.htmlattributes['className'] + ' ' + clsList[i];\n          }\n        }\n\n        this.clsName = false;\n      }\n\n      return this.htmlattributes;\n    };\n\n    ComponentBase.prototype.trigger = function (eventName, eventProp, successHandler) {\n      var _this = this;\n\n      if (this.isDestroyed !== true && this.modelObserver) {\n        if (isColEName.test(eventName)) {\n          var handler = ej2_base_1.getValue(eventName, this);\n\n          if (handler) {\n            handler.call(this, eventProp);\n\n            if (successHandler) {\n              successHandler.call(this, eventProp);\n            }\n          } else if (successHandler) {\n            successHandler.call(this, eventProp);\n          }\n        }\n\n        if (eventName === 'change' || eventName === 'input') {\n          if (this.props.onChange && eventProp.event) {\n            this.props.onChange.call(undefined, {\n              syntheticEvent: eventProp.event,\n              nativeEvent: {\n                text: eventProp.value\n              },\n              value: eventProp.value,\n              target: this\n            });\n          }\n        }\n\n        var prevDetection = this.isProtectedOnChange;\n        this.isProtectedOnChange = false;\n\n        if (eventName === 'created') {\n          setTimeout(function () {\n            _this.isCreated = true;\n\n            if (!_this.isDestroyed) {\n              _this.modelObserver.notify(eventName, eventProp, successHandler);\n            }\n          });\n        } else {\n          this.modelObserver.notify(eventName, eventProp, successHandler);\n        }\n\n        this.isProtectedOnChange = prevDetection;\n      }\n    };\n\n    ComponentBase.prototype.compareValues = function (value1, value2) {\n      var typeVal = _typeof(value1);\n\n      var typeVal2 = _typeof(value2);\n\n      if (typeVal === typeVal2) {\n        if (value1 === value2) {\n          return true;\n        }\n\n        if ((!ej2_base_1.isNullOrUndefined(value1) && value1.constructor) !== (!ej2_base_1.isNullOrUndefined(value2) && value2.constructor)) {\n          return false;\n        }\n\n        if (value1 instanceof Date || value1 instanceof RegExp || value1 instanceof String || value1 instanceof Number) {\n          return value1.toString() === value2.toString();\n        }\n\n        if (ej2_base_1.isObject(value1) || Array.isArray(value1)) {\n          var tempVal = value1;\n          var tempVal2 = value2;\n\n          if (ej2_base_1.isObject(tempVal)) {\n            tempVal = [value1];\n            tempVal2 = [value2];\n          }\n\n          return this.compareObjects(tempVal, tempVal2).status;\n        }\n      }\n\n      return false;\n    };\n\n    ComponentBase.prototype.compareObjects = function (oldProps, newProps, propName) {\n      var status = true;\n      var lenSimilarity = oldProps.length === newProps.length;\n      var diffArray = [];\n\n      if (lenSimilarity) {\n        for (var i = 0, len = newProps.length; i < len; i++) {\n          var curObj = {};\n          var oldProp = oldProps[i];\n          var newProp = newProps[i];\n          var keys = Object.keys(newProp);\n\n          if (keys.length !== 0) {\n            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {\n              var key = keys_2[_i];\n              var oldValue = oldProp[key];\n              var newValue = newProp[key];\n\n              if (key === 'items') {\n                for (var _j = 0; _j < newValue.length; _j++) {\n                  if (this.getModuleName() === 'richtexteditor' && _typeof(newValue[_j]) === 'object') {\n                    return {\n                      status: true\n                    };\n                  }\n                }\n              }\n\n              if (this.getModuleName() === 'grid' && key === 'field') {\n                curObj[key] = newValue;\n              }\n\n              if (!oldProp.hasOwnProperty(key) || !this.compareValues(oldValue, newValue)) {\n                if (!propName) {\n                  return {\n                    status: false\n                  };\n                }\n\n                status = false;\n                curObj[key] = newValue;\n              }\n            }\n          } else if (newProp[i] === oldProp[i]) {\n            status = true;\n          } else {\n            if (!propName) {\n              return {\n                status: false\n              };\n            }\n\n            status = false;\n          }\n\n          if (Object.keys(curObj).length) {\n            diffArray.push({\n              index: i,\n              value: curObj,\n              key: propName\n            });\n          }\n        }\n      } else {\n        status = false;\n      }\n\n      return {\n        status: status,\n        changedProperties: diffArray\n      };\n    };\n\n    ComponentBase.prototype.refreshChild = function (silent, props) {\n      if (this.checkInjectedModules) {\n        var prevModule = this.getInjectedModules() || [];\n        var curModule = this.getInjectedServices() || [];\n\n        for (var _i = 0, curModule_1 = curModule; _i < curModule_1.length; _i++) {\n          var mod = curModule_1[_i];\n\n          if (prevModule.indexOf(mod) === -1) {\n            prevModule.push(mod);\n          }\n        }\n\n        this.injectedModules = prevModule;\n      }\n\n      if (this.directivekeys) {\n        var changedProps = [];\n        var directiveValue = this.validateChildren({}, this.directivekeys, props || this.props);\n\n        if (directiveValue && Object.keys(directiveValue).length) {\n          if (!silent && this.skipRefresh) {\n            for (var _a = 0, _b = this.skipRefresh; _a < _b.length; _a++) {\n              var fields = _b[_a];\n              delete directiveValue[fields];\n            }\n          }\n\n          if (this.prevProperties) {\n            var dKeys = Object.keys(this.prevProperties);\n\n            for (var i = 0; i < dKeys.length; i++) {\n              var key = dKeys[i];\n\n              if (!directiveValue.hasOwnProperty(key)) {\n                continue;\n              }\n\n              var compareOutput = this.compareObjects(this.prevProperties[key], directiveValue[key], key);\n\n              if (compareOutput.status) {\n                delete directiveValue[key];\n              } else {\n                if (compareOutput.changedProperties.length) {\n                  changedProps = changedProps.concat(compareOutput.changedProperties);\n                }\n\n                var obj = {};\n                obj[key] = directiveValue[key];\n                this.prevProperties = ej2_base_1.extend(this.prevProperties, obj);\n              }\n            }\n          } else {\n            this.prevProperties = ej2_base_1.extend({}, directiveValue, {}, true);\n          }\n\n          if (changedProps.length) {\n            if (this.getModuleName() === 'grid' && key === 'columns') {\n              for (var _c1 = 0, allColumns = this.columns; _c1 < allColumns.length; _c1++) {\n                var compareField1 = ej2_base_1.getValue('field', allColumns[_c1]);\n                var compareField2 = ej2_base_1.getValue(_c1 + '.value.field', changedProps);\n\n                if (compareField1 === compareField2) {\n                  var propInstance = ej2_base_1.getValue(changedProps[_c1].key + '.' + changedProps[_c1].index, this);\n\n                  if (propInstance && propInstance.setProperties) {\n                    propInstance.setProperties(changedProps[_c1].value);\n                  } else {\n                    ej2_base_1.extend(propInstance, changedProps[_c1].value);\n                  }\n                } else {\n                  this.setProperties(directiveValue, silent);\n                }\n              }\n            } else {\n              for (var _c = 0, changedProps_1 = changedProps; _c < changedProps_1.length; _c++) {\n                var changes = changedProps_1[_c];\n                var propInstance_1 = ej2_base_1.getValue(changes.key + '.' + changes.index, this);\n\n                if (propInstance_1 && propInstance_1.setProperties) {\n                  propInstance_1.setProperties(changes.value);\n                } else {\n                  ej2_base_1.extend(propInstance_1, changes.value);\n                }\n              }\n            }\n          } else {\n            this.setProperties(directiveValue, silent);\n          }\n        }\n      }\n    };\n\n    ComponentBase.prototype.componentWillUnmount = function () {\n      clearTimeout(this.cachedTimeOut);\n      var modulesName = ['dropdowntree', 'checkbox'];\n\n      if (this.initRenderCalled && this.isAppendCalled && this.element && (!modulesName.indexOf(this.getModuleName()) ? document.body.contains(this.element) : true) && !this.isDestroyed && this.isCreated) {\n        this.destroy();\n      }\n    };\n\n    ComponentBase.prototype.appendReactElement = function (element, container) {\n      var portal = ReactDOM.createPortal(element, container);\n\n      if (!this.portals) {\n        this.portals = [portal];\n      } else {\n        this.portals.push(portal);\n      }\n    };\n\n    ;\n\n    ComponentBase.prototype.renderReactTemplates = function (callback) {\n      this.isReactForeceUpdate = true;\n\n      if (callback) {\n        this.forceUpdate(callback);\n      } else {\n        this.forceUpdate();\n      }\n\n      this.isReactForeceUpdate = false;\n    };\n\n    ComponentBase.prototype.clearTemplate = function (templateNames, index, callback) {\n      var _this = this;\n\n      var tempPortal = [];\n\n      if (templateNames && templateNames.length) {\n        Array.prototype.forEach.call(templateNames, function (propName) {\n          var indexCount = 0;\n          var propIndexCount = 0;\n\n          _this.portals.forEach(function (portal) {\n            if (portal.propName === propName) {\n              tempPortal.push(propIndexCount);\n              propIndexCount++;\n            }\n          });\n\n          if (index && _this.portals[tempPortal[index[indexCount]]].propName == propName) {\n            _this.portals.splice(index, 1);\n\n            indexCount++;\n          } else {\n            for (var i = 0; i < _this.portals.length; i++) {\n              if (_this.portals[i].propName == propName) {\n                _this.portals.splice(i, 1);\n\n                i--;\n              }\n            }\n          }\n        });\n      } else {\n        this.portals = [];\n      }\n\n      this.renderReactTemplates(callback);\n    };\n\n    ;\n\n    ComponentBase.prototype.validateChildren = function (childCache, mapper, props) {\n      var flag = false;\n      var childs = React.Children.toArray(props.children);\n\n      for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {\n        var child = childs_1[_i];\n        var ifield = this.getChildType(child);\n        var key = mapper[ifield];\n\n        if (ifield && mapper) {\n          var childProps = this.getChildProps(React.Children.toArray(child.props.children), key);\n\n          if (childProps.length) {\n            flag = true;\n            childCache[child.type.propertyName || ifield] = childProps;\n          }\n        }\n      }\n\n      if (flag) {\n        return childCache;\n      }\n\n      return null;\n    };\n\n    ComponentBase.prototype.getChildType = function (child) {\n      if (child.type && child.type.isDirective) {\n        return child.type.moduleName || '';\n      }\n\n      return '';\n    };\n\n    ComponentBase.prototype.getChildProps = function (subChild, matcher) {\n      var ret = [];\n\n      for (var _i = 0, subChild_1 = subChild; _i < subChild_1.length; _i++) {\n        var child = subChild_1[_i];\n        var accessProp = false;\n        var key = void 0;\n\n        if (typeof matcher === 'string') {\n          accessProp = true;\n          key = matcher;\n        } else {\n          key = Object.keys(matcher)[0];\n        }\n\n        var prop = child.props;\n        var field = this.getChildType(child);\n\n        if (field === key) {\n          if (accessProp || !prop.children) {\n            var cacheVal = ej2_base_1.extend({}, prop, {}, true);\n            this.processComplexTemplate(cacheVal, child.type);\n            ret.push(cacheVal);\n          } else {\n            var cachedValue = this.validateChildren(ej2_base_1.extend({}, prop), matcher[key], prop) || prop;\n\n            if (cachedValue['children']) {\n              delete cachedValue['children'];\n            }\n\n            this.processComplexTemplate(cachedValue, child.type);\n            ret.push(cachedValue);\n          }\n        }\n      }\n\n      return ret;\n    };\n\n    ComponentBase.prototype.getInjectedServices = function () {\n      var childs = React.Children.toArray(this.props.children);\n\n      for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {\n        var child = childs_2[_i];\n\n        if (child.type.isService) {\n          return child.props.services;\n        }\n      }\n\n      return [];\n    };\n\n    ComponentBase.reactUid = 1;\n    return ComponentBase;\n  }(React.Component);\n\n  exports.ComponentBase = ComponentBase;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://SyncfusionReactBase/./src/component-base.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./component-base */ \"./src/component-base.js\"), __webpack_require__(/*! ./util */ \"./src/util.js\"), __webpack_require__(/*! ./complex-base */ \"./src/complex-base.js\"), __webpack_require__(/*! ./services */ \"./src/services.js\"), __webpack_require__(/*! ./template */ \"./src/template.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, component_base_1, util_1, complex_base_1, services_1, template_1) {\n  \"use strict\";\n\n  function __export(m) {\n    for (var p in m) {\n      if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n    }\n  }\n\n  Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n  }));\n\n  __export(component_base_1);\n\n  __export(util_1);\n\n  __export(complex_base_1);\n\n  __export(services_1);\n\n  __export(template_1);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://SyncfusionReactBase/./src/index.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (b.hasOwnProperty(p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ \"react\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n  }));\n\n  var Inject = function (_super) {\n    __extends(Inject, _super);\n\n    function Inject() {\n      return _super !== null && _super.apply(this, arguments) || this;\n    }\n\n    Inject.prototype.render = function () {\n      return null;\n    };\n\n    Inject.isService = true;\n    return Inject;\n  }(React.PureComponent);\n\n  exports.Inject = Inject;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://SyncfusionReactBase/./src/services.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @syncfusion/ej2-base */ \"@syncfusion/ej2-base\"), __webpack_require__(/*! react-dom */ \"react-dom\"), __webpack_require__(/*! react */ \"react\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ej2_base_1, ReactDOM, React) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n  }));\n  var stringCompiler = ej2_base_1.getTemplateEngine();\n\n  function compile(templateElement, helper) {\n    if (typeof templateElement === 'string') {\n      return stringCompiler(templateElement, helper);\n    } else {\n      return function (data, component, prop, element) {\n        var actTemplate = templateElement;\n        var actData = data;\n\n        if (_typeof(actTemplate) === 'object') {\n          actTemplate = templateElement.template;\n          actData = ej2_base_1.extend({}, data, templateElement.data || {});\n        }\n\n        var cEle;\n\n        if (element) {\n          cEle = element;\n        } else {\n          cEle = document.createElement('div');\n        }\n\n        var rele = React.createElement(actTemplate, actData);\n        var portal = ReactDOM.createPortal(rele, cEle);\n        portal.propName = prop;\n\n        if (!component.portals) {\n          component.portals = [portal];\n        } else {\n          component.portals.push(portal);\n        }\n\n        if (!element) {\n          return [cEle];\n        }\n      };\n    }\n  }\n\n  exports.compile = compile;\n  ej2_base_1.setTemplateEngine({\n    compile: compile\n  });\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://SyncfusionReactBase/./src/template.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", ({\n    value: true\n  }));\n\n  function applyMixins(derivedClass, baseClass) {\n    baseClass.forEach(function (baseClass) {\n      Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {\n        if (name !== 'isMounted' && name !== 'replaceState') {\n          derivedClass.prototype[name] = baseClass.prototype[name];\n        }\n      });\n    });\n  }\n\n  exports.applyMixins = applyMixins;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://SyncfusionReactBase/./src/util.js?");

/***/ }),

/***/ "@syncfusion/ej2-base":
/*!*********************************!*\
  !*** external "SyncfusionBase" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__syncfusion_ej2_base__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});