(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Pages/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components */ "./resources/js/components/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BaseCheckbox: _components__WEBPACK_IMPORTED_MODULE_0__["BaseCheckbox"]
  },
  data: function data() {
    return {
      email: '',
      fullname: '',
      password: ''
    };
  },
  methods: {
    submit: function submit() {
      alert("Form has been submitted!");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/Register.vue?vue&type=template&id=3d51e912&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Pages/Register.vue?vue&type=template&id=3d51e912& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-7 mr-auto" },
        [
          _c("ValidationObserver", {
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
                          { staticClass: "card-register card-white" },
                          [
                            _c("template", { slot: "header" }, [
                              _c("img", {
                                staticClass: "card-img",
                                attrs: {
                                  src: "img/card-primary.png",
                                  alt: "Card image"
                                }
                              }),
                              _vm._v(" "),
                              _c("h4", { staticClass: "card-title" }, [
                                _vm._v("Register")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: { name: "fullname", rules: "required" },
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
                                            placeholder: "Full Name",
                                            "addon-left-icon":
                                              "tim-icons icon-single-02",
                                            type: "text",
                                            error: errors[0]
                                          },
                                          model: {
                                            value: _vm.fullname,
                                            callback: function($$v) {
                                              _vm.fullname = $$v
                                            },
                                            expression: "fullname"
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
                                            placeholder: "Email",
                                            "addon-left-icon":
                                              "tim-icons icon-email-85",
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
                            }),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: { name: "password", rules: "required" },
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
                                            placeholder: "Password",
                                            "addon-left-icon":
                                              "tim-icons icon-lock-circle",
                                            type: "password",
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
                            _c("base-checkbox", { staticClass: "text-left" }, [
                              _vm._v("\n              I agree to the "),
                              _c("a", { attrs: { href: "#something" } }, [
                                _vm._v("terms and conditions")
                              ]),
                              _vm._v(".\n            ")
                            ]),
                            _vm._v(" "),
                            _c(
                              "base-button",
                              {
                                attrs: {
                                  slot: "footer",
                                  "native-type": "submit",
                                  type: "primary",
                                  round: "",
                                  block: "",
                                  size: "lg"
                                },
                                slot: "footer"
                              },
                              [
                                _vm._v(
                                  "\n              Get Started\n            "
                                )
                              ]
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
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5 ml-auto" }, [
      _c("div", { staticClass: "info-area info-horizontal mt-5" }, [
        _c("div", { staticClass: "icon icon-warning" }, [
          _c("i", { staticClass: "tim-icons icon-wifi" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "description" }, [
          _c("h3", { staticClass: "info-title" }, [_vm._v("Marketing")]),
          _vm._v(" "),
          _c("p", { staticClass: "description" }, [
            _vm._v(
              "\n            We've created the marketing campaign of the website. It was a very\n            interesting collaboration.\n          "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-area info-horizontal" }, [
        _c("div", { staticClass: "icon icon-primary" }, [
          _c("i", { staticClass: "tim-icons icon-triangle-right-17" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "description" }, [
          _c("h3", { staticClass: "info-title" }, [
            _vm._v("Fully Coded in HTML5")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "description" }, [
            _vm._v(
              "\n            We've developed the website with HTML5 and CSS3. The client has\n            access to the code using GitHub.\n          "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-area info-horizontal" }, [
        _c("div", { staticClass: "icon icon-info" }, [
          _c("i", { staticClass: "tim-icons icon-trophy" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "description" }, [
          _c("h3", { staticClass: "info-title" }, [_vm._v("Built Audience")]),
          _vm._v(" "),
          _c("p", { staticClass: "description" }, [
            _vm._v(
              "\n            There is also a Fully Customizable CMS Admin Dashboard for this\n            product.\n          "
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Pages/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/Pages/Register.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_3d51e912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3d51e912& */ "./resources/js/pages/Pages/Register.vue?vue&type=template&id=3d51e912&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3d51e912___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_3d51e912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Pages/Register.vue?vue&type=template&id=3d51e912&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Pages/Register.vue?vue&type=template&id=3d51e912& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3d51e912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=3d51e912& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/Register.vue?vue&type=template&id=3d51e912&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3d51e912___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3d51e912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);