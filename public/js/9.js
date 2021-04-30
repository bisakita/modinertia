(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
      }
    };
  },
  methods: {
    updateProfile: function updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=fcdc95a4&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=fcdc95a4& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("card", [
    _c(
      "h5",
      { staticClass: "title", attrs: { slot: "header" }, slot: "header" },
      [_vm._v("Edit Profile")]
    ),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updateProfile($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-5" },
            [
              _c("base-input", {
                attrs: {
                  type: "text",
                  label: "Company",
                  disabled: true,
                  placeholder: "Company"
                },
                model: {
                  value: _vm.user.company,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "company", $$v)
                  },
                  expression: "user.company"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-3" },
            [
              _c("base-input", {
                attrs: {
                  type: "text",
                  label: "Username",
                  placeholder: "Username"
                },
                model: {
                  value: _vm.user.username,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "username", $$v)
                  },
                  expression: "user.username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("base-input", {
                attrs: {
                  type: "email",
                  label: "Email address",
                  placeholder: "mike@email.com"
                },
                model: {
                  value: _vm.user.email,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "email", $$v)
                  },
                  expression: "user.email"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("base-input", {
                attrs: {
                  type: "text",
                  label: "First Name",
                  placeholder: "First Name"
                },
                model: {
                  value: _vm.user.firstName,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "firstName", $$v)
                  },
                  expression: "user.firstName"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("base-input", {
                attrs: {
                  type: "text",
                  label: "Last Name",
                  placeholder: "Last Name"
                },
                model: {
                  value: _vm.user.lastName,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "lastName", $$v)
                  },
                  expression: "user.lastName"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("base-input", {
                attrs: {
                  type: "text",
                  label: "Address",
                  placeholder: "Home Address"
                },
                model: {
                  value: _vm.user.address,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "address", $$v)
                  },
                  expression: "user.address"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("base-input", {
                attrs: { type: "text", label: "City", placeholder: "City" },
                model: {
                  value: _vm.user.city,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "city", $$v)
                  },
                  expression: "user.city"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("base-input", {
                attrs: {
                  type: "text",
                  label: "Country",
                  placeholder: "Country"
                },
                model: {
                  value: _vm.user.country,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "country", $$v)
                  },
                  expression: "user.country"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("base-input", {
                attrs: { label: "Postal Code", placeholder: "ZIP Code" },
                model: {
                  value: _vm.user.postalCode,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "postalCode", $$v)
                  },
                  expression: "user.postalCode"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("base-input", { attrs: { label: "About Me" } }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.aboutMe,
                      expression: "user.aboutMe"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "ZIP Code" },
                  domProps: { value: _vm.user.aboutMe },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "aboutMe", $event.target.value)
                    }
                  }
                })
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "base-button",
          {
            staticClass: "btn-fill",
            attrs: { "native-type": "submit", type: "primary" }
          },
          [_vm._v("\n      Save\n    ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Pages/UserProfile/EditProfileForm.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Pages/UserProfile/EditProfileForm.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfileForm_vue_vue_type_template_id_fcdc95a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfileForm.vue?vue&type=template&id=fcdc95a4& */ "./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=fcdc95a4&");
/* harmony import */ var _EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfileForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfileForm_vue_vue_type_template_id_fcdc95a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfileForm_vue_vue_type_template_id_fcdc95a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Pages/UserProfile/EditProfileForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=fcdc95a4&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=fcdc95a4& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_fcdc95a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfileForm.vue?vue&type=template&id=fcdc95a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=fcdc95a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_fcdc95a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_fcdc95a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);