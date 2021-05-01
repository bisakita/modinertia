(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Buttons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Buttons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BasePagination: _components__WEBPACK_IMPORTED_MODULE_0__["BasePagination"]
  },
  data: function data() {
    return {
      defaultPagination: 1,
      infoPagination: 3
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Buttons.vue?vue&type=template&id=6403829e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Buttons.vue?vue&type=template&id=6403829e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("base-button", [_vm._v("Default")]),
                _vm._v(" \n            "),
                _c("base-button", { attrs: { type: "primary" } }, [
                  _vm._v("Primary")
                ]),
                _vm._v(" "),
                _c("base-button", { attrs: { type: "info" } }, [
                  _vm._v("Info")
                ]),
                _vm._v("  "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "base-button",
                  {
                    staticClass: "animation-on-hover",
                    attrs: { type: "success" }
                  },
                  [_vm._v("Success")]
                ),
                _vm._v("  "),
                _c("base-button", { attrs: { type: "warning" } }, [
                  _vm._v("Warning")
                ]),
                _vm._v(" \n            "),
                _c("base-button", { attrs: { type: "danger" } }, [
                  _vm._v("Danger")
                ]),
                _vm._v(" \n          ")
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("base-button", [
                  _c("i", { staticClass: "tim-icons icon-minimal-left" }),
                  _vm._v(" Left\n            ")
                ]),
                _vm._v("\n             \n\n            "),
                _c("base-button", [
                  _vm._v("\n              Right "),
                  _c("i", { staticClass: "tim-icons icon-minimal-right" })
                ]),
                _vm._v("\n             \n\n            "),
                _c("base-button", { attrs: { type: "info" } }, [
                  _c("i", { staticClass: "tim-icons icon-alert-circle-exc" }),
                  _vm._v(" Info\n            ")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("base-button", { attrs: { type: "success" } }, [
                  _c("i", { staticClass: "tim-icons icon-check-2" }),
                  _vm._v(" Success\n            ")
                ]),
                _vm._v("\n             \n\n            "),
                _c("base-button", { attrs: { type: "warning" } }, [
                  _c("i", { staticClass: "tim-icons icon-time-alarm" }),
                  _vm._v(" Warning\n            ")
                ]),
                _vm._v("\n             \n\n            "),
                _c("base-button", { attrs: { type: "danger" } }, [
                  _c("i", { staticClass: "tim-icons icon-simple-remove" }),
                  _vm._v(" Danger\n            ")
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("base-button", { attrs: { type: "primary", size: "sm" } }, [
                  _vm._v("Small")
                ]),
                _vm._v(" "),
                _c("base-button", { attrs: { type: "primary" } }, [
                  _vm._v("Regular")
                ]),
                _vm._v(" "),
                _c("base-button", { attrs: { type: "primary", size: "lg" } }, [
                  _vm._v("Large")
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("base-button", { attrs: { type: "primary" } }, [
                  _vm._v("Default")
                ]),
                _vm._v(" "),
                _c("base-button", { attrs: { type: "primary", round: "" } }, [
                  _vm._v("round")
                ]),
                _vm._v(" "),
                _c("base-button", { attrs: { type: "primary", round: "" } }, [
                  _c("i", {
                    staticClass: "tim-icons icon-heart-2",
                    attrs: { slot: "label" },
                    slot: "label"
                  }),
                  _vm._v(" with icon\n            ")
                ]),
                _vm._v(" "),
                _c(
                  "base-button",
                  { attrs: { type: "primary", round: "", icon: "" } },
                  [_c("i", { staticClass: "tim-icons icon-heart-2" })]
                ),
                _vm._v(" "),
                _c("base-button", { attrs: { type: "primary", simple: "" } }, [
                  _vm._v("Simple")
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("base-pagination", {
                  attrs: {
                    type: "warning",
                    "page-count": 10,
                    "show-arrows": false
                  },
                  model: {
                    value: _vm.defaultPagination,
                    callback: function($$v) {
                      _vm.defaultPagination = $$v
                    },
                    expression: "defaultPagination"
                  }
                }),
                _vm._v(" "),
                _c("base-pagination", {
                  attrs: { "page-count": 10, "pages-to-display": 3 },
                  model: {
                    value: _vm.infoPagination,
                    callback: function($$v) {
                      _vm.infoPagination = $$v
                    },
                    expression: "infoPagination"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._m(5)
        ]),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _vm._m(7)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Pick your Color")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Buttons with Label")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Pick your Size")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Pick your Style")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Pagination")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("h4", { staticClass: "card-title" }, [_vm._v("Button Group")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                Left\n              ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                Middle\n              ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                Right\n              ")]
          )
        ]),
        _vm._v(" "),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                1\n              ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                2\n              ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                3\n              ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                4\n              ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-round btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                5\n              ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-round btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                6\n              ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info btn-round btn-outline",
              attrs: { type: "button" }
            },
            [_vm._v("\n                7\n              ")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Social buttons")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("p", { staticClass: "category" }, [_vm._v("Default")]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-twitter" }, [
            _c("i", { staticClass: "fab fa-twitter" }),
            _vm._v(" Connect with Twitter\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("p", { staticClass: "category" }, [_vm._v(" ")]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-icon btn-twitter" }, [
            _c("i", { staticClass: "fab fa-twitter" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("p", { staticClass: "category" }, [_vm._v(" ")]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-icon btn-round btn-twitter" }, [
            _c("i", { staticClass: "fab fa-twitter" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("p", { staticClass: "category" }, [_vm._v("Neutral")]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-icon btn-simple btn-twitter" }, [
            _c("i", { staticClass: "fab fa-twitter" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("p", { staticClass: "category" }, [_vm._v(" ")]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-simple btn-twitter" }, [
            _c("i", { staticClass: "fab fa-twitter" }),
            _vm._v(" Connect with Twitter\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-facebook" }, [
            _c("i", { staticClass: "fab fa-facebook-square" }),
            _vm._v(" Share · 2.2k\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-facebook" }, [
            _c("i", { staticClass: "fab fa-facebook-f" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-facebook" }, [
            _c("i", { staticClass: "fab fa-facebook-f" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c(
            "button",
            { staticClass: "btn btn-icon btn-simple btn-facebook" },
            [_c("i", { staticClass: "fab fa-facebook-square" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-facebook" }, [
            _c("i", { staticClass: "fab fa-facebook-square" }),
            _vm._v(" Share · 2.2k\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-google" }, [
            _c("i", { staticClass: "fab fa-google-plus-g" }),
            _vm._v(" Share on Google+\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon  btn-google" }, [
            _c("i", { staticClass: "fab fa-google-plus-g" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-google" }, [
            _c("i", { staticClass: "fab fa-google-plus-g" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-simple btn-google" }, [
            _c("i", { staticClass: "fab fa-google-plus-g" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-google" }, [
            _c("i", { staticClass: "fab fa-google-plus-g" }),
            _vm._v(" Share on Google+\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-linkedin" }, [
            _c("i", { staticClass: "fab fa-linkedin" }),
            _vm._v(" Connect with Linkedin\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon  btn-linkedin" }, [
            _c("i", { staticClass: "fab fa-linkedin" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-linkedin" }, [
            _c("i", { staticClass: "fab fa-linkedin" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c(
            "button",
            { staticClass: "btn btn-icon btn-simple btn-linkedin" },
            [_c("i", { staticClass: "fab fa-linkedin" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-linkedin" }, [
            _c("i", { staticClass: "fab fa-linkedin" }),
            _vm._v(" Connect with Linkedin\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-pinterest" }, [
            _c("i", { staticClass: "fab fa-pinterest" }),
            _vm._v(" Pint it · 212\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-pinterest" }, [
            _c("i", { staticClass: "fab fa-pinterest" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c(
            "button",
            { staticClass: "btn btn-icon btn-round btn-pinterest" },
            [_c("i", { staticClass: "fab fa-pinterest" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c(
            "button",
            { staticClass: "btn btn-icon btn-simple btn-pinterest" },
            [_c("i", { staticClass: "fab fa-pinterest" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-pinterest" }, [
            _c("i", { staticClass: "fab fa-pinterest" }),
            _vm._v(" Pint it · 212\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-youtube" }, [
            _c("i", { staticClass: "fab fa-youtube" }),
            _vm._v(" View on Youtube\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-youtube" }, [
            _c("i", { staticClass: "fab fa-youtube" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-youtube" }, [
            _c("i", { staticClass: "fab fa-youtube" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-simple btn-youtube" }, [
            _c("i", { staticClass: "fab fa-youtube" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-youtube" }, [
            _c("i", { staticClass: "fab fa-youtube" }),
            _vm._v(" View on Youtube\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-tumblr" }, [
            _c("i", { staticClass: "fab fa-tumblr-square" }),
            _vm._v(" Repost\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon  btn-tumblr" }, [
            _c("i", { staticClass: "fab fa-tumblr" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-tumblr" }, [
            _c("i", { staticClass: "fab fa-tumblr" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-simple btn-tumblr" }, [
            _c("i", { staticClass: "fab fa-tumblr-square" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-tumblr" }, [
            _c("i", { staticClass: "fab fa-tumblr-square" }),
            _vm._v(" Repost\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-github" }, [
            _c("i", { staticClass: "fab fa-github" }),
            _vm._v(" Connect with Github\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon  btn-github" }, [
            _c("i", { staticClass: "fab fa-github" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-github" }, [
            _c("i", { staticClass: "fab fa-github" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-simple btn-github" }, [
            _c("i", { staticClass: "fab fa-github" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-github" }, [
            _c("i", { staticClass: "fab fa-github" }),
            _vm._v(" Connect with Github\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-behance" }, [
            _c("i", { staticClass: "fab fa-behance-square" }),
            _vm._v(" Follow us\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon  btn-behance" }, [
            _c("i", { staticClass: "fab fa-behance" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-behance" }, [
            _c("i", { staticClass: "fab fa-behance" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-simple btn-behance" }, [
            _c("i", { staticClass: "fab fa-behance" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-behance" }, [
            _c("i", { staticClass: "fab fa-behance-square" }),
            _vm._v(" Follow us\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-dribbble" }, [
            _c("i", { staticClass: "fab fa-dribbble" }),
            _vm._v(" Find us on Dribble\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon  btn-dribbble" }, [
            _c("i", { staticClass: "fab fa-dribbble" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-dribbble" }, [
            _c("i", { staticClass: "fab fa-dribbble" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c(
            "button",
            { staticClass: "btn btn-icon btn-simple btn-dribbble" },
            [_c("i", { staticClass: "fab fa-dribbble" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-dribbble" }, [
            _c("i", { staticClass: "fab fa-dribbble" }),
            _vm._v(" Find us on Dribble\n            ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-sm-5" }, [
          _c("button", { staticClass: "btn btn-reddit" }, [
            _c("i", { staticClass: "fab fa-reddit" }),
            _vm._v(" Repost · 232\n            ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon  btn-reddit" }, [
            _c("i", { staticClass: "fab fa-reddit" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-round btn-reddit" }, [
            _c("i", { staticClass: "fab fa-reddit" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1 col-sm-1" }, [
          _c("button", { staticClass: "btn btn-icon btn-simple btn-reddit" }, [
            _c("i", { staticClass: "fab fa-reddit" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-4" }, [
          _c("button", { staticClass: "btn btn-simple btn-reddit" }, [
            _c("i", { staticClass: "fab fa-reddit" }),
            _vm._v(" Repost · 232\n            ")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Components/Buttons.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Components/Buttons.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Buttons_vue_vue_type_template_id_6403829e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons.vue?vue&type=template&id=6403829e& */ "./resources/js/pages/Components/Buttons.vue?vue&type=template&id=6403829e&");
/* harmony import */ var _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons.vue?vue&type=script&lang=js& */ "./resources/js/pages/Components/Buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Buttons_vue_vue_type_template_id_6403829e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Buttons_vue_vue_type_template_id_6403829e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Components/Buttons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Components/Buttons.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Components/Buttons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Buttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Components/Buttons.vue?vue&type=template&id=6403829e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Components/Buttons.vue?vue&type=template&id=6403829e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_6403829e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Buttons.vue?vue&type=template&id=6403829e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Buttons.vue?vue&type=template&id=6403829e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_6403829e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_6403829e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);