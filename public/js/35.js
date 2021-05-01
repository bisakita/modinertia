(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SampleNavbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SampleNavbar.vue */ "./resources/js/pages/Starter/SampleNavbar.vue");
/* harmony import */ var _SampleFooter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SampleFooter.vue */ "./resources/js/pages/Starter/SampleFooter.vue");
/* harmony import */ var _Layout_Content_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/Content.vue */ "./resources/js/pages/Layout/Content.vue");
/* harmony import */ var _Layout_SidebarFixedToggleButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout/SidebarFixedToggleButton.vue */ "./resources/js/pages/Layout/SidebarFixedToggleButton.vue");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-new */



function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function _initScrollbar(className) {
  if (hasElement(className)) {
    new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](".".concat(className));
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(function () {
      _initScrollbar(className);
    }, 100);
  }
}






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DashboardNavbar: _SampleNavbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContentFooter: _SampleFooter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SidebarFixedToggleButton: _Layout_SidebarFixedToggleButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DashboardContent: _Layout_Content_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SlideYDownTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_6__["SlideYDownTransition"],
    ZoomCenterTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_6__["ZoomCenterTransition"]
  },
  data: function data() {
    return {
      sidebarBackground: 'vue' //vue|blue|orange|green|red|primary

    };
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    initScrollbar: function initScrollbar() {
      var docClasses = document.body.classList;
      var isWindows = navigator.platform.startsWith('Win');

      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        _initScrollbar('sidebar');

        _initScrollbar('main-panel');

        _initScrollbar('sidebar-wrapper');

        docClasses.add('perfect-scrollbar-on');
      } else {
        docClasses.add('perfect-scrollbar-off');
      }
    }
  },
  mounted: function mounted() {
    this.initScrollbar();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes zoomIn95 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes zoomIn95 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\nto {\n    opacity: 1;\n}\n}\n.main-panel .zoomIn {\n  -webkit-animation-name: zoomIn95;\n          animation-name: zoomIn95;\n}\n@-webkit-keyframes zoomOut95 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\n}\n@keyframes zoomOut95 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\n}\n.main-panel .zoomOut {\n  -webkit-animation-name: zoomOut95;\n          animation-name: zoomOut95;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleFooter.vue?vue&type=template&id=1ab217e4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleFooter.vue?vue&type=template&id=1ab217e4& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("footer", { staticClass: "footer" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "copyright" }, [
        _vm._v("\n      © " + _vm._s(_vm.year) + ", made with "),
        _c("i", { staticClass: "tim-icons icon-heart-2" }),
        _vm._v(" for\n      a better web.\n    ")
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: {
              href: "https://example.com",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("\n          Link\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: {
              href: "https://example.com",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("\n          Another Link\n        ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=template&id=9b504bc6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleLayout.vue?vue&type=template&id=9b504bc6& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "wrapper", class: { "nav-open": _vm.$sidebar.showSidebar } },
    [
      _c("notifications"),
      _vm._v(" "),
      _c("sidebar-fixed-toggle-button"),
      _vm._v(" "),
      _c("side-bar", {
        attrs: {
          "background-color": _vm.sidebarBackground,
          "short-title": "CT",
          title: "Creative Tim"
        },
        scopedSlots: _vm._u([
          {
            key: "links",
            fn: function(props) {
              return [
                _c("sidebar-item", {
                  attrs: {
                    link: {
                      name: _vm.$t("sidebar.dashboard"),
                      icon: "tim-icons icon-chart-pie-36",
                      path: "/dashboard"
                    }
                  }
                })
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-panel", attrs: { data: _vm.sidebarBackground } },
        [
          _c("dashboard-navbar"),
          _vm._v(" "),
          _c("router-view", { attrs: { name: "header" } }),
          _vm._v(" "),
          _c(
            "div",
            {
              class: { content: !_vm.$route.meta.hideContent },
              on: { click: _vm.toggleSidebar }
            },
            [
              _c(
                "zoom-center-transition",
                { attrs: { duration: 200, mode: "out-in" } },
                [_c("router-view")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.$route.meta.hideFooter ? _c("content-footer") : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Starter/SampleFooter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Starter/SampleFooter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SampleFooter_vue_vue_type_template_id_1ab217e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SampleFooter.vue?vue&type=template&id=1ab217e4& */ "./resources/js/pages/Starter/SampleFooter.vue?vue&type=template&id=1ab217e4&");
/* harmony import */ var _SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SampleFooter.vue?vue&type=script&lang=js& */ "./resources/js/pages/Starter/SampleFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SampleFooter_vue_vue_type_template_id_1ab217e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SampleFooter_vue_vue_type_template_id_1ab217e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Starter/SampleFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Starter/SampleFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Starter/SampleFooter.vue?vue&type=template&id=1ab217e4&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleFooter.vue?vue&type=template&id=1ab217e4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_template_id_1ab217e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleFooter.vue?vue&type=template&id=1ab217e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleFooter.vue?vue&type=template&id=1ab217e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_template_id_1ab217e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_template_id_1ab217e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Starter/SampleLayout.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Starter/SampleLayout.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SampleLayout_vue_vue_type_template_id_9b504bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SampleLayout.vue?vue&type=template&id=9b504bc6& */ "./resources/js/pages/Starter/SampleLayout.vue?vue&type=template&id=9b504bc6&");
/* harmony import */ var _SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SampleLayout.vue?vue&type=script&lang=js& */ "./resources/js/pages/Starter/SampleLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SampleLayout.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SampleLayout_vue_vue_type_template_id_9b504bc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SampleLayout_vue_vue_type_template_id_9b504bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Starter/SampleLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Starter/SampleLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Starter/SampleLayout.vue?vue&type=template&id=9b504bc6&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleLayout.vue?vue&type=template&id=9b504bc6& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_template_id_9b504bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=template&id=9b504bc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleLayout.vue?vue&type=template&id=9b504bc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_template_id_9b504bc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_template_id_9b504bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);