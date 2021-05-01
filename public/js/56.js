(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorldMap/WorldMap.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorldMap/WorldMap.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson */ "./node_modules/topojson/build/topojson.js");
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(topojson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datamaps */ "./node_modules/datamaps/dist/datamaps.all.js");
/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/throttle */ "./resources/js/util/throttle.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      color1: '#AAAAAA',
      color2: '#444444',
      highlightFillColor: '#66615B',
      borderColor: '#3c3c3c',
      highlightBorderColor: '#3c3c3c',
      mapData: {
        AUS: 760,
        BRA: 550,
        CAN: 120,
        DEU: 1300,
        FRA: 540,
        GBR: 690,
        GEO: 200,
        IND: 200,
        ROU: 600,
        RUS: 300,
        USA: 2920
      }
    };
  },
  methods: {
    generateColors: function generateColors(length) {
      return d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, length]).range([this.color1, this.color2]);
    },
    generateMapColors: function generateMapColors() {
      var mapDataValues = Object.values(this.mapData);
      var maxVal = Math.max.apply(Math, _toConsumableArray(mapDataValues));
      var colors = this.generateColors(maxVal);
      var mapData = {};
      var fills = {
        defaultFill: '#e4e4e4'
      };

      for (var key in this.mapData) {
        var val = this.mapData[key];
        fills[key] = colors(val);
        mapData[key] = {
          fillKey: key,
          value: val
        };
      }

      return {
        mapData: mapData,
        fills: fills
      };
    },
    initVectorMap: function initVectorMap() {
      var _this$generateMapColo = this.generateMapColors(),
          fills = _this$generateMapColo.fills,
          mapData = _this$generateMapColo.mapData;

      var worldMap = new datamaps__WEBPACK_IMPORTED_MODULE_3___default.a({
        scope: 'world',
        element: document.getElementById('worldMap'),
        fills: fills,
        data: mapData,
        responsive: true,
        geographyConfig: {
          borderColor: this.borderColor,
          borderWidth: 0.5,
          borderOpacity: 0.8,
          highlightFillColor: this.highlightFillColor,
          highlightBorderColor: this.highlightBorderColor,
          highlightBorderWidth: 0.5,
          highlightBorderOpacity: 0.8
        }
      });
      var resizeFunc = worldMap.resize.bind(worldMap);
      window.addEventListener('resize', function () {
        Object(_util_throttle__WEBPACK_IMPORTED_MODULE_4__["throttle"])(resizeFunc, 40);
      }, false);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.initVectorMap();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorldMap/WorldMap.vue?vue&type=template&id=5ed38a34&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorldMap/WorldMap.vue?vue&type=template&id=5ed38a34& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticStyle: { height: "300px" },
    attrs: { id: "worldMap" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/WorldMap/WorldMap.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/WorldMap/WorldMap.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorldMap_vue_vue_type_template_id_5ed38a34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorldMap.vue?vue&type=template&id=5ed38a34& */ "./resources/js/components/WorldMap/WorldMap.vue?vue&type=template&id=5ed38a34&");
/* harmony import */ var _WorldMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldMap.vue?vue&type=script&lang=js& */ "./resources/js/components/WorldMap/WorldMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorldMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorldMap_vue_vue_type_template_id_5ed38a34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorldMap_vue_vue_type_template_id_5ed38a34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/WorldMap/WorldMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/WorldMap/WorldMap.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/WorldMap/WorldMap.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorldMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorldMap/WorldMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/WorldMap/WorldMap.vue?vue&type=template&id=5ed38a34&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/WorldMap/WorldMap.vue?vue&type=template&id=5ed38a34& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldMap_vue_vue_type_template_id_5ed38a34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorldMap.vue?vue&type=template&id=5ed38a34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorldMap/WorldMap.vue?vue&type=template&id=5ed38a34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldMap_vue_vue_type_template_id_5ed38a34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldMap_vue_vue_type_template_id_5ed38a34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/util/throttle.js":
/*!***************************************!*\
  !*** ./resources/js/util/throttle.js ***!
  \***************************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/**
 * Simple throttle function that executes a passed function only once in the specified timeout
 * @param handlerFunc
 * @param [timeout] the throttle interval
 */
function throttle(handlerFunc) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 66;
  var resizeTimeout;

  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      handlerFunc(); // The actualResizeHandler will execute at a rate of 15fps
    }, timeout);
  }
}

/***/ })

}]);