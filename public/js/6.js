(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/index */ "./resources/js/components/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
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




Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])("email", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["email"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])("required", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["required"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])("confirmed", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["confirmed"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BaseCheckbox: _components_index__WEBPACK_IMPORTED_MODULE_0__["BaseCheckbox"]
  },
  data: function data() {
    return {
      email: "",
      password: "",
      confirmation: "",
      subscribe: false
    };
  },
  methods: {
    submit: function submit() {
      alert("Form has been submitted!");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=template&id=6e148cae&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=template&id=6e148cae& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("ValidationObserver", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var handleSubmit = ref.handleSubmit
          return [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return handleSubmit(_vm.submit)
                  }
                }
              },
              [
                _c(
                  "card",
                  { attrs: { "footer-classes": "text-right" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("h4", { staticClass: "card-title" }, [
                        _vm._v("Register Form")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("ValidationProvider", {
                          attrs: { name: "email", rules: "required|email" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var passed = ref.passed
                                  var failed = ref.failed
                                  var errors = ref.errors
                                  return [
                                    _c("base-input", {
                                      class: [
                                        { "has-success": passed },
                                        { "has-danger": failed }
                                      ],
                                      attrs: {
                                        required: "",
                                        type: "email",
                                        label: "Email address",
                                        error: errors[0]
                                      },
                                      model: {
                                        value: _vm.email,
                                        callback: function($$v) {
                                          _vm.email = $$v
                                        },
                                        expression: "email"
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        }),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          attrs: {
                            name: "password",
                            rules: "required|confirmed:confirmation"
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var passed = ref.passed
                                  var failed = ref.failed
                                  var errors = ref.errors
                                  return [
                                    _c("base-input", {
                                      class: [
                                        { "has-success": passed },
                                        { "has-danger": failed }
                                      ],
                                      attrs: {
                                        required: "",
                                        type: "password",
                                        label: "Password",
                                        error: errors[0]
                                      },
                                      model: {
                                        value: _vm.password,
                                        callback: function($$v) {
                                          _vm.password = $$v
                                        },
                                        expression: "password"
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        }),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          attrs: {
                            name: "confirm",
                            vid: "confirmation",
                            rules: "required"
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var passed = ref.passed
                                  var failed = ref.failed
                                  var errors = ref.errors
                                  return [
                                    _c("base-input", {
                                      class: [
                                        { "has-success": passed },
                                        { "has-danger": failed }
                                      ],
                                      attrs: {
                                        required: "",
                                        type: "password",
                                        label: "Confirm Password",
                                        error: errors[0]
                                      },
                                      model: {
                                        value: _vm.confirmation,
                                        callback: function($$v) {
                                          _vm.confirmation = $$v
                                        },
                                        expression: "confirmation"
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "category form-category" }, [
                          _vm._v("* Required fields")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "template",
                      { staticClass: "text-right", slot: "footer" },
                      [
                        _c(
                          "base-checkbox",
                          {
                            staticClass: "pull-left",
                            attrs: { name: "subscribe" },
                            model: {
                              value: _vm.subscribe,
                              callback: function($$v) {
                                _vm.subscribe = $$v
                              },
                              expression: "subscribe"
                            }
                          },
                          [
                            _vm._v(
                              "\n        Accept terms & conditions\n      "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "base-button",
                          {
                            attrs: { "native-type": "submit", type: "primary" }
                          },
                          [_vm._v("Register")]
                        )
                      ],
                      1
                    )
                  ],
                  2
                )
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Forms/ValidationForms/RegisterForm.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Forms/ValidationForms/RegisterForm.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_6e148cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=6e148cae& */ "./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=template&id=6e148cae&");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterForm_vue_vue_type_template_id_6e148cae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterForm_vue_vue_type_template_id_6e148cae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Forms/ValidationForms/RegisterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=template&id=6e148cae&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=template&id=6e148cae& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_6e148cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterForm.vue?vue&type=template&id=6e148cae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/RegisterForm.vue?vue&type=template&id=6e148cae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_6e148cae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_6e148cae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);