(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var _SidebarToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarToggleButton */ "./resources/js/pages/Layout/SidebarToggleButton.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sidebar-fixed-toggle-button',
  components: {
    SidebarToggleButton: _SidebarToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    FadeTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_0__["FadeTransition"]
  },
  data: function data() {
    return {
      showScrollThreshold: 50,
      currentScroll: 0,
      scrollTicking: false
    };
  },
  computed: {
    showButton: function showButton() {
      return this.currentScroll > this.showScrollThreshold;
    }
  },
  methods: {
    handleScroll: function handleScroll() {
      var _this = this;

      this.currentScroll = window.scrollY;

      if (!this.scrollTicking) {
        window.requestAnimationFrame(function () {
          _this.scrollTicking = false;
        });
        this.scrollTicking = true;
      }
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sidebar-toggle-button',
  methods: {
    minimizeSidebar: function minimizeSidebar() {
      // Remove this code if you don't want to display notifications while minimizing sidebar
      var isMinimizedText = this.$sidebar.isMinimized ? 'deactivated' : 'activated';
      this.$notify({
        type: 'primary',
        message: "Sidebar mini ".concat(isMinimizedText, "..."),
        icon: 'tim-icons icon-bell-55'
      });
      this.$sidebar.toggleMinimize();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "navbar-minimize-fixed", staticStyle: { opacity: "1" } },
    [
      _c(
        "fade-transition",
        [
          _vm.showButton
            ? _c("sidebar-toggle-button", { staticClass: "text-muted" })
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=32005734&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=32005734& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "el-tooltip",
    {
      attrs: {
        content: "Sidebar toggle",
        effect: "light",
        "open-delay": 300,
        placement: "right"
      }
    },
    [
      _c(
        "button",
        {
          staticClass: "minimize-sidebar btn btn-link btn-just-icon",
          attrs: {
            rel: "tooltip",
            "data-original-title": "Sidebar toggle",
            "data-placement": "right"
          },
          on: { click: _vm.minimizeSidebar }
        },
        [
          _c("i", {
            staticClass:
              "tim-icons icon-align-center visible-on-sidebar-regular"
          }),
          _vm._v(" "),
          _c("i", {
            staticClass: "tim-icons icon-bullet-list-67 visible-on-sidebar-mini"
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Layout/SidebarFixedToggleButton.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Layout/SidebarFixedToggleButton.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarFixedToggleButton_vue_vue_type_template_id_0e0dc6aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa& */ "./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa&");
/* harmony import */ var _SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarFixedToggleButton.vue?vue&type=script&lang=js& */ "./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarFixedToggleButton_vue_vue_type_template_id_0e0dc6aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarFixedToggleButton_vue_vue_type_template_id_0e0dc6aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Layout/SidebarFixedToggleButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarFixedToggleButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_0e0dc6aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=0e0dc6aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_0e0dc6aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_0e0dc6aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Layout/SidebarToggleButton.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/Layout/SidebarToggleButton.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarToggleButton_vue_vue_type_template_id_32005734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarToggleButton.vue?vue&type=template&id=32005734& */ "./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=32005734&");
/* harmony import */ var _SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarToggleButton.vue?vue&type=script&lang=js& */ "./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarToggleButton_vue_vue_type_template_id_32005734___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarToggleButton_vue_vue_type_template_id_32005734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Layout/SidebarToggleButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarToggleButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=32005734&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=32005734& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_template_id_32005734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarToggleButton.vue?vue&type=template&id=32005734& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=32005734&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_template_id_32005734___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_template_id_32005734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);