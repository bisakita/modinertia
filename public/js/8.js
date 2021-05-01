(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components */ "./resources/js/components/index.js");
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
  name: 'sidebar-share',
  components: {
    BaseSwitch: _components__WEBPACK_IMPORTED_MODULE_0__["BaseSwitch"]
  },
  props: {
    backgroundColor: String
  },
  data: function data() {
    return {
      sidebarMini: true,
      darkMode: true,
      isOpen: false,
      sidebarColors: [{
        color: 'primary',
        active: false,
        value: 'primary'
      }, {
        color: 'vue',
        active: true,
        value: 'vue'
      }, {
        color: 'info',
        active: false,
        value: 'blue'
      }, {
        color: 'success',
        active: false,
        value: 'green'
      }, {
        color: 'warning',
        active: false,
        value: 'orange'
      }, {
        color: 'danger',
        active: false,
        value: 'red'
      }]
    };
  },
  methods: {
    toggleDropDown: function toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown: function closeDropDown() {
      this.isOpen = false;
    },
    toggleList: function toggleList(list, itemToActivate) {
      list.forEach(function (listItem) {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    changeSidebarBackground: function changeSidebarBackground(item) {
      this.$emit('update:backgroundColor', item.value);
      this.toggleList(this.sidebarColors, item);
    },
    toggleMode: function toggleMode(type) {
      var docClasses = document.body.classList;

      if (type) {
        docClasses.remove('white-content');
      } else {
        docClasses.add('white-content');
      }
    },
    minimizeSidebar: function minimizeSidebar() {
      this.$sidebar.toggleMinimize();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*     brand Colors              */\n/* navbar color */\n.settings-icon[data-v-c4f8617c] {\n  cursor: pointer;\n}\n.badge-vue[data-v-c4f8617c] {\n  background-color: #42b883;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.closeDropDown,
          expression: "closeDropDown"
        }
      ],
      staticClass: "fixed-plugin"
    },
    [
      _c(
        "div",
        { staticClass: "dropdown show-dropdown", class: { show: _vm.isOpen } },
        [
          _c(
            "a",
            {
              staticClass: "settings-icon",
              attrs: { "data-toggle": "dropdown" }
            },
            [
              _c("i", {
                staticClass: "fa fa-cog fa-2x",
                on: { click: _vm.toggleDropDown }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "dropdown-menu", class: { show: _vm.isOpen } },
            [
              _c("li", { staticClass: "header-title" }, [
                _vm._v("Sidebar Background")
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "adjustments-line" }, [
                _c("a", { staticClass: "switch-trigger background-color" }, [
                  _c(
                    "div",
                    { staticClass: "badge-colors text-center" },
                    _vm._l(_vm.sidebarColors, function(item) {
                      return _c("span", {
                        key: item.color,
                        staticClass: "badge filter",
                        class: ["badge-" + item.color, { active: item.active }],
                        attrs: { "data-color": item.color },
                        on: {
                          click: function($event) {
                            return _vm.changeSidebarBackground(item)
                          }
                        }
                      })
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" })
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "header-title" }, [
                _vm._v("Sidebar Mini")
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "adjustments-line" }, [
                _c(
                  "div",
                  { staticClass: "togglebutton switch-sidebar-mini" },
                  [
                    _c("span", { staticClass: "label-switch" }, [
                      _vm._v("OFF")
                    ]),
                    _vm._v(" "),
                    _c("base-switch", {
                      on: { input: _vm.minimizeSidebar },
                      model: {
                        value: _vm.sidebarMini,
                        callback: function($$v) {
                          _vm.sidebarMini = $$v
                        },
                        expression: "sidebarMini"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "label-switch label-right" }, [
                      _vm._v("ON")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "togglebutton switch-change-color mt-3" },
                  [
                    _c("span", { staticClass: "label-switch" }, [
                      _vm._v("LIGHT MODE")
                    ]),
                    _vm._v(" "),
                    _c("base-switch", {
                      on: { input: _vm.toggleMode },
                      model: {
                        value: _vm.darkMode,
                        callback: function($$v) {
                          _vm.darkMode = $$v
                        },
                        expression: "darkMode"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "label-switch label-right" }, [
                      _vm._v("DARK MODE")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "button-container mt-4" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-default btn-block btn-round",
          attrs: {
            href:
              "https://demos.creative-tim.com/vue-black-dashboard-pro/documentation",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("\n          Documentation\n        ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-primary btn-block btn-round",
          attrs: {
            href: "https://creative-tim.com/product/vue-black-dashboard-pro",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("\n          Buy for $59\n        ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-info btn-block btn-round",
          attrs: {
            href: "https://demos.creative-tim.com/vue-black-dashboard",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("\n          Free Version\n        ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Layout/SidebarSharePlugin.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Layout/SidebarSharePlugin.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarSharePlugin_vue_vue_type_template_id_c4f8617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true& */ "./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true&");
/* harmony import */ var _SidebarSharePlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarSharePlugin.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SidebarSharePlugin_vue_vue_type_style_index_0_id_c4f8617c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss& */ "./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SidebarSharePlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarSharePlugin_vue_vue_type_template_id_c4f8617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarSharePlugin_vue_vue_type_template_id_c4f8617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c4f8617c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layout/SidebarSharePlugin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarSharePlugin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_style_index_0_id_c4f8617c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=style&index=0&id=c4f8617c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_style_index_0_id_c4f8617c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_style_index_0_id_c4f8617c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_style_index_0_id_c4f8617c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_style_index_0_id_c4f8617c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_template_id_c4f8617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarSharePlugin.vue?vue&type=template&id=c4f8617c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_template_id_c4f8617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarSharePlugin_vue_vue_type_template_id_c4f8617c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);