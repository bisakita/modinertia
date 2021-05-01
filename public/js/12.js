(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./resources/js/components/index.js");
/* harmony import */ var _Layout_SidebarToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/SidebarToggleButton */ "./resources/js/pages/Layout/SidebarToggleButton.vue");
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
  components: {
    SidebarToggleButton: _Layout_SidebarToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    CollapseTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_0__["CollapseTransition"],
    BaseNav: _components__WEBPACK_IMPORTED_MODULE_1__["BaseNav"],
    Modal: _components__WEBPACK_IMPORTED_MODULE_1__["Modal"]
  },
  computed: {
    routeName: function routeName() {
      var name = this.$route.name;
      return this.capitalizeFirstLetter(name);
    },
    isRTL: function isRTL() {
      return this.$rtl.isRTL;
    }
  },
  data: function data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown: function toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown: function closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar: function toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar: function hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu: function toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.top-navbar[data-v-dd4dcffa] {\r\n  top: 0px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "base-nav",
    {
      staticClass: "navbar-absolute top-navbar",
      attrs: { type: "white", transparent: true },
      model: {
        value: _vm.showMenu,
        callback: function($$v) {
          _vm.showMenu = $$v
        },
        expression: "showMenu"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "navbar-wrapper",
          attrs: { slot: "brand" },
          slot: "brand"
        },
        [
          _c(
            "div",
            { staticClass: "navbar-minimize d-inline" },
            [_c("sidebar-toggle-button")],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "navbar-toggle d-inline",
              class: { toggled: _vm.$sidebar.showSidebar }
            },
            [
              _c(
                "button",
                {
                  staticClass: "navbar-toggler",
                  attrs: { type: "button" },
                  on: { click: _vm.toggleSidebar }
                },
                [
                  _c("span", { staticClass: "navbar-toggler-bar bar1" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "navbar-toggler-bar bar2" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "navbar-toggler-bar bar3" })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("a", { staticClass: "navbar-brand", attrs: { href: "#pablo" } }, [
            _vm._v(_vm._s(_vm.routeName))
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "navbar-nav",
          class: _vm.$rtl.isRTL ? "mr-auto" : "ml-auto"
        },
        [
          _c(
            "div",
            {
              staticClass: "search-bar input-group",
              on: {
                click: function($event) {
                  _vm.searchModalVisible = true
                }
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-link",
                  attrs: {
                    id: "search-button",
                    "data-toggle": "modal",
                    "data-target": "#searchModal"
                  }
                },
                [_c("i", { staticClass: "tim-icons icon-zoom-split" })]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "modal",
            {
              staticClass: "modal-search",
              attrs: {
                show: _vm.searchModalVisible,
                id: "searchModal",
                centered: false,
                "show-close": true
              },
              on: {
                "update:show": function($event) {
                  _vm.searchModalVisible = $event
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchQuery,
                    expression: "searchQuery"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  slot: "header",
                  type: "text",
                  id: "inlineFormInputGroup",
                  placeholder: "SEARCH"
                },
                domProps: { value: _vm.searchQuery },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.searchQuery = $event.target.value
                  }
                },
                slot: "header"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "base-dropdown",
            {
              staticClass: "nav-item",
              attrs: {
                tag: "li",
                "menu-on-right": !_vm.$rtl.isRTL,
                "title-tag": "a",
                "title-classes": "nav-link",
                "menu-classes": "dropdown-navbar"
              }
            },
            [
              _c("template", { slot: "title" }, [
                _c("div", { staticClass: "photo" }, [
                  _c("img", { attrs: { src: "img/mike.jpg" } })
                ]),
                _vm._v(" "),
                _c("b", { staticClass: "caret d-none d-lg-block d-xl-block" }),
                _vm._v(" "),
                _c("p", { staticClass: "d-lg-none" }, [_vm._v("Log out")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-link" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-item dropdown-item",
                    attrs: { href: "#" }
                  },
                  [_vm._v("Profile")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-link" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-item dropdown-item",
                    attrs: { href: "#" }
                  },
                  [_vm._v("Settings")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c("li", { staticClass: "nav-link" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-item dropdown-item",
                    attrs: { href: "#" }
                  },
                  [_vm._v("Log out")]
                )
              ])
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Starter/SampleNavbar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Starter/SampleNavbar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SampleNavbar_vue_vue_type_template_id_dd4dcffa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true& */ "./resources/js/pages/Starter/SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true&");
/* harmony import */ var _SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SampleNavbar.vue?vue&type=script&lang=js& */ "./resources/js/pages/Starter/SampleNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SampleNavbar_vue_vue_type_style_index_0_id_dd4dcffa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css& */ "./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SampleNavbar_vue_vue_type_template_id_dd4dcffa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SampleNavbar_vue_vue_type_template_id_dd4dcffa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dd4dcffa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Starter/SampleNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Starter/SampleNavbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleNavbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_dd4dcffa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=style&index=0&id=dd4dcffa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_dd4dcffa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_dd4dcffa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_dd4dcffa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_dd4dcffa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Starter/SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/Starter/SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_template_id_dd4dcffa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Starter/SampleNavbar.vue?vue&type=template&id=dd4dcffa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_template_id_dd4dcffa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_template_id_dd4dcffa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);