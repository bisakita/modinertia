(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("required", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("numeric", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["numeric"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("regex", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("confirmed", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      required: "",
      email: "",
      number: "",
      url: "",
      equal: "",
      equalTo: ""
    };
  },
  methods: {
    submit: function submit() {
      alert("Form has been submitted!");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=template&id=52cb824e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=template&id=52cb824e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                staticClass: "form-horizontal",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return handleSubmit(_vm.submit)
                  }
                }
              },
              [
                _c("card", [
                  _c(
                    "h4",
                    {
                      staticClass: "card-title",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [_vm._v("Type Validation")]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _c("div", { staticClass: "row" }, [
                      _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                        _vm._v("Requred Text")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-7" },
                        [
                          _c("ValidationProvider", {
                            attrs: { name: "required", rules: "required" },
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
                                          error: errors[0]
                                        },
                                        model: {
                                          value: _vm.required,
                                          callback: function($$v) {
                                            _vm.required = $$v
                                          },
                                          expression: "required"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "col-sm-3 label-on-right" }, [
                        _c("code", [_vm._v('required="true"')])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                        _vm._v("Email")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-7" },
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
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "col-sm-3 label-on-right" }, [
                        _c("code", [_vm._v('email="true"')])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                        _vm._v("Number")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-7" },
                        [
                          _c("ValidationProvider", {
                            attrs: {
                              name: "number",
                              rules: "required|numeric"
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
                                          error: errors[0]
                                        },
                                        model: {
                                          value: _vm.number,
                                          callback: function($$v) {
                                            _vm.number = $$v
                                          },
                                          expression: "number"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "col-sm-3 label-on-right" }, [
                        _c("code", [_vm._v('numeric="true"')])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                        _vm._v("Url")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-7" },
                        [
                          _c("ValidationProvider", {
                            attrs: {
                              name: "url",
                              rules: {
                                required: true,
                                regex: /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/g
                              }
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
                                          type: "text",
                                          error: errors[0]
                                        },
                                        model: {
                                          value: _vm.url,
                                          callback: function($$v) {
                                            _vm.url = $$v
                                          },
                                          expression: "url"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "col-sm-3 label-on-right" }, [
                        _c("code", [_vm._v('url="true"')])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                        _vm._v("Url")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-3" },
                        [
                          _c("ValidationProvider", {
                            attrs: {
                              name: "equal",
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
                                          type: "text",
                                          error: errors[0]
                                        },
                                        model: {
                                          value: _vm.equal,
                                          callback: function($$v) {
                                            _vm.equal = $$v
                                          },
                                          expression: "equal"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-3" },
                        [
                          _c("ValidationProvider", {
                            attrs: {
                              name: "equalTo",
                              rules: "required",
                              vid: "confirmation"
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
                                          type: "text",
                                          error: errors[0]
                                        },
                                        model: {
                                          value: _vm.equalTo,
                                          callback: function($$v) {
                                            _vm.equalTo = $$v
                                          },
                                          expression: "equalTo"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "col-sm-4 label-on-right" }, [
                        _c("code", [_vm._v('confirmed="equalToSource"')])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "base-button",
                        { attrs: { "native-type": "submit", type: "primary" } },
                        [_vm._v("Validate inputs")]
                      )
                    ],
                    1
                  )
                ])
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

/***/ "./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypeValidationForm_vue_vue_type_template_id_52cb824e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypeValidationForm.vue?vue&type=template&id=52cb824e& */ "./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=template&id=52cb824e&");
/* harmony import */ var _TypeValidationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeValidationForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TypeValidationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TypeValidationForm_vue_vue_type_template_id_52cb824e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TypeValidationForm_vue_vue_type_template_id_52cb824e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeValidationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeValidationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeValidationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=template&id=52cb824e&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=template&id=52cb824e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeValidationForm_vue_vue_type_template_id_52cb824e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TypeValidationForm.vue?vue&type=template&id=52cb824e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/ValidationForms/TypeValidationForm.vue?vue&type=template&id=52cb824e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeValidationForm_vue_vue_type_template_id_52cb824e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeValidationForm_vue_vue_type_template_id_52cb824e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);