(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingPanel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
//
//
//


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(element_ui__WEBPACK_IMPORTED_MODULE_1__["Loading"].directive);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Notifications.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _components__WEBPACK_IMPORTED_MODULE_0__["Modal"],
    BaseAlert: _components__WEBPACK_IMPORTED_MODULE_0__["BaseAlert"]
  },
  data: function data() {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      },
      modals: {
        classic: false,
        notice: false,
        mini: false
      }
    };
  },
  methods: {
    notifyVue: function notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message: 'Welcome to <b>Vue Black Dashboard Pro</b> - a beautiful resource for every web developer',
        timeout: 30000,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#loading {\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n}\n.el-loading-spinner .path {\n  stroke: #66615b !important;\n}\n.el-loading-mask {\n  background: transparent !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card .alert {\n  position: relative !important;\n  width: 100%;\n}\n.modal-body, .modal-footer {\n  padding: 24px 24px 16px 24px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingPanel.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=template&id=551883da&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingPanel.vue?vue&type=template&id=551883da& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    directives: [
      { name: "loading", rawName: "v-loading", value: true, expression: "true" }
    ],
    staticClass: "row",
    attrs: { id: "loading" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=template&id=d35652d0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Notifications.vue?vue&type=template&id=d35652d0& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c(
          "card",
          [
            _c(
              "h4",
              {
                staticClass: "card-title",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_vm._v("Notifications Style")]
            ),
            _vm._v(" "),
            _c("base-alert", { attrs: { type: "info" } }, [
              _vm._v(" This is a plain notification")
            ]),
            _vm._v(" "),
            _c("base-alert", { attrs: { type: "info", dismissible: "" } }, [
              _vm._v(
                "\n        This is a notification with close button.\n      "
              )
            ]),
            _vm._v(" "),
            _c(
              "base-alert",
              {
                attrs: {
                  type: "info",
                  dismissible: "",
                  icon: "tim-icons icon-bell-55"
                }
              },
              [
                _vm._v(
                  "\n        This is a notification with close button and icon.\n      "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "base-alert",
              {
                attrs: {
                  type: "info",
                  dismissible: "",
                  icon: "tim-icons icon-bell-55"
                }
              },
              [
                _vm._v(
                  "\n        This is a notification with close button and icon and have many lines.\n        You can see that the icon and the close button are always vertically\n        aligned. This is a beautiful notification. So you don't have to worry\n        about the style.\n      "
                )
              ]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c(
          "card",
          [
            _c(
              "h4",
              {
                staticClass: "card-title",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_vm._v("Notification states")]
            ),
            _vm._v(" "),
            _c("base-alert", { attrs: { type: "primary", dismissible: "" } }, [
              _c("span", [
                _c("b", [_vm._v(" Primary - ")]),
                _vm._v(
                  ' This is a regular notification made with\n          ".alert-primary"'
                )
              ])
            ]),
            _vm._v(" "),
            _c("base-alert", { attrs: { type: "info", dismissible: "" } }, [
              _c("span", [
                _c("b", [_vm._v(" Info - ")]),
                _vm._v(
                  ' This is a regular notification made with\n          ".alert-info"'
                )
              ])
            ]),
            _vm._v(" "),
            _c("base-alert", { attrs: { type: "success", dismissible: "" } }, [
              _c("span", [
                _c("b", [_vm._v(" Success - ")]),
                _vm._v(
                  ' This is a regular notification made with\n          ".alert-success"'
                )
              ])
            ]),
            _vm._v(" "),
            _c("base-alert", { attrs: { type: "warning", dismissible: "" } }, [
              _c("span", [
                _c("b", [_vm._v(" Warning - ")]),
                _vm._v(
                  ' This is a regular notification made with\n          ".alert-warning"'
                )
              ])
            ]),
            _vm._v(" "),
            _c("base-alert", { attrs: { type: "danger", dismissible: "" } }, [
              _c("span", [
                _c("b", [_vm._v(" Danger - ")]),
                _vm._v(
                  ' This is a regular notification made with\n          ".alert-danger"'
                )
              ])
            ])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-12" },
      [
        _c("card", { staticClass: "text-center" }, [
          _c("div", { staticClass: "places-buttons" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6 ml-auto mr-auto text-center" },
                [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(
                      "\n              Notifications Places\n              "
                    ),
                    _c("p", { staticClass: "category" }, [
                      _vm._v("Click to view notifications")
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-8 ml-auto mr-auto" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", block: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.notifyVue("top", "left")
                            }
                          }
                        },
                        [_vm._v("Top Left\n                ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", block: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.notifyVue("top", "center")
                            }
                          }
                        },
                        [_vm._v("Top Center\n                ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", block: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.notifyVue("top", "right")
                            }
                          }
                        },
                        [_vm._v("Top Right\n                ")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-8 ml-auto mr-auto" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", block: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.notifyVue("bottom", "left")
                            }
                          }
                        },
                        [_vm._v("Bottom Left\n                ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", block: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.notifyVue("bottom", "center")
                            }
                          }
                        },
                        [_vm._v("Bottom Center\n                ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", block: "" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.notifyVue("bottom", "right")
                            }
                          }
                        },
                        [_vm._v("Bottom Right\n                ")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-12 text-center" },
              [
                _c("div", { staticClass: "card-header" }, [
                  _c("h4", { staticClass: "card-title" }, [_vm._v("Modal")])
                ]),
                _vm._v(" "),
                _c(
                  "base-button",
                  {
                    attrs: { type: "primary" },
                    nativeOn: {
                      click: function($event) {
                        _vm.modals.classic = true
                      }
                    }
                  },
                  [_vm._v("\n            Classic modal\n          ")]
                ),
                _vm._v("\n           \n          "),
                _c(
                  "base-button",
                  {
                    attrs: { type: "info" },
                    nativeOn: {
                      click: function($event) {
                        _vm.modals.notice = true
                      }
                    }
                  },
                  [_vm._v("\n            Notice modal\n          ")]
                ),
                _vm._v("\n           \n          "),
                _c(
                  "base-button",
                  {
                    nativeOn: {
                      click: function($event) {
                        _vm.modals.mini = true
                      }
                    }
                  },
                  [_vm._v("\n            Small alert modal\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "modal",
                  {
                    attrs: {
                      show: _vm.modals.classic,
                      headerClasses: "justify-content-center"
                    },
                    on: {
                      "update:show": function($event) {
                        return _vm.$set(_vm.modals, "classic", $event)
                      }
                    }
                  },
                  [
                    _c(
                      "h4",
                      {
                        staticClass: "title title-up",
                        attrs: { slot: "header" },
                        slot: "header"
                      },
                      [_vm._v("Modal title")]
                    ),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics,\n              a large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "template",
                      { slot: "footer" },
                      [
                        _c("base-button", [_vm._v("Nice Button")]),
                        _vm._v(" "),
                        _c(
                          "base-button",
                          {
                            attrs: { type: "danger" },
                            nativeOn: {
                              click: function($event) {
                                _vm.modals.classic = false
                              }
                            }
                          },
                          [_vm._v("Close\n              ")]
                        )
                      ],
                      1
                    )
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "modal",
                  {
                    attrs: {
                      show: _vm.modals.notice,
                      footerClasses: "justify-content-center",
                      type: "notice"
                    },
                    on: {
                      "update:show": function($event) {
                        return _vm.$set(_vm.modals, "notice", $event)
                      }
                    }
                  },
                  [
                    _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { slot: "header" },
                        slot: "header"
                      },
                      [
                        _vm._v(
                          "\n              How Do You Become an Affiliate?\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "instruction" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-8" }, [
                          _c("strong", [_vm._v("1. Register")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "description" }, [
                            _vm._v(
                              "\n                    The first step is to create an account at\n                    "
                            ),
                            _c(
                              "a",
                              {
                                attrs: { href: "http://www.creative-tim.com/" }
                              },
                              [_vm._v("Creative Tim")]
                            ),
                            _vm._v(
                              ".\n                    You can choose a social network or go for the classic\n                    version, whatever works best for you.\n                  "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "picture" }, [
                            _c("img", {
                              staticClass: "rounded img-raised",
                              attrs: {
                                src: "img/bg1.jpg",
                                alt: "Thumbnail Image"
                              }
                            })
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "instruction" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-8" }, [
                          _c("strong", [_vm._v("2. Apply")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "description" }, [
                            _vm._v(
                              "\n                    The first step is to create an account at\n                    "
                            ),
                            _c(
                              "a",
                              {
                                attrs: { href: "http://www.creative-tim.com/" }
                              },
                              [_vm._v("Creative Tim")]
                            ),
                            _vm._v(
                              ".\n                    You can choose a social network or go for the classic\n                    version, whatever works best for you.\n                  "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "picture" }, [
                            _c("img", {
                              staticClass: "rounded img-raised",
                              attrs: {
                                src: "img/bg3.jpg",
                                alt: "Thumbnail Image"
                              }
                            })
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n              If you have more questions, don't hesitate to contact us or send\n              us a tweet @creativetim. We're here to help!\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "justify-content-center",
                        attrs: { slot: "footer" },
                        slot: "footer"
                      },
                      [
                        _c(
                          "base-button",
                          {
                            attrs: { type: "info", round: "" },
                            nativeOn: {
                              click: function($event) {
                                _vm.modals.notice = false
                              }
                            }
                          },
                          [_vm._v("Sounds good!\n              ")]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "modal",
                  {
                    staticClass: "modal-primary",
                    attrs: {
                      show: _vm.modals.mini,
                      "show-close": false,
                      headerClasses: "justify-content-center",
                      type: "mini"
                    },
                    on: {
                      "update:show": function($event) {
                        return _vm.$set(_vm.modals, "mini", $event)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "modal-profile",
                        attrs: { slot: "header" },
                        slot: "header"
                      },
                      [_c("i", { staticClass: "tim-icons icon-single-02" })]
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v("Always have an access to your profile")]),
                    _vm._v(" "),
                    _c(
                      "template",
                      { slot: "footer" },
                      [
                        _c(
                          "base-button",
                          { attrs: { type: "neutral", link: "" } },
                          [_vm._v("Back")]
                        ),
                        _vm._v(" "),
                        _c(
                          "base-button",
                          {
                            attrs: { type: "neutral", link: "" },
                            nativeOn: {
                              click: function($event) {
                                _vm.modals.mini = false
                              }
                            }
                          },
                          [_vm._v("Close\n              ")]
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
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/LoadingPanel.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/LoadingPanel.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingPanel_vue_vue_type_template_id_551883da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingPanel.vue?vue&type=template&id=551883da& */ "./resources/js/components/LoadingPanel.vue?vue&type=template&id=551883da&");
/* harmony import */ var _LoadingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/LoadingPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingPanel.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingPanel_vue_vue_type_template_id_551883da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingPanel_vue_vue_type_template_id_551883da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoadingPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoadingPanel.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/LoadingPanel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingPanel.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/LoadingPanel.vue?vue&type=template&id=551883da&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/LoadingPanel.vue?vue&type=template&id=551883da& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_template_id_551883da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingPanel.vue?vue&type=template&id=551883da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingPanel.vue?vue&type=template&id=551883da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_template_id_551883da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_template_id_551883da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Components/Notifications.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Components/Notifications.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications_vue_vue_type_template_id_d35652d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=d35652d0& */ "./resources/js/pages/Components/Notifications.vue?vue&type=template&id=d35652d0&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/pages/Components/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Notifications_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_d35652d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notifications_vue_vue_type_template_id_d35652d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Components/Notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Components/Notifications.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Components/Notifications.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Components/Notifications.vue?vue&type=template&id=d35652d0&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Components/Notifications.vue?vue&type=template&id=d35652d0& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d35652d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=template&id=d35652d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Notifications.vue?vue&type=template&id=d35652d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d35652d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d35652d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);