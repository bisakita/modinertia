(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/Content.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/Content.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
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
    FadeTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_0__["FadeTransition"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/ContentFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/ContentFooter.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidebarSharePlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarSharePlugin */ "./resources/js/Pages/Layout/SidebarSharePlugin.vue");
/* harmony import */ var _DashboardNavbar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardNavbar.vue */ "./resources/js/Pages/Layout/DashboardNavbar.vue");
/* harmony import */ var _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentFooter.vue */ "./resources/js/Pages/Layout/ContentFooter.vue");
/* harmony import */ var _Content_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.vue */ "./resources/js/Pages/Layout/Content.vue");
/* harmony import */ var _SidebarFixedToggleButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarFixedToggleButton.vue */ "./resources/js/Pages/Layout/SidebarFixedToggleButton.vue");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DashboardNavbar: _DashboardNavbar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ContentFooter: _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SidebarFixedToggleButton: _SidebarFixedToggleButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DashboardContent: _Content_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SlideYDownTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_7__["SlideYDownTransition"],
    ZoomCenterTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_7__["ZoomCenterTransition"],
    SidebarShare: _SidebarSharePlugin__WEBPACK_IMPORTED_MODULE_2__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var _SidebarToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarToggleButton */ "./resources/js/Pages/Layout/SidebarToggleButton.vue");
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes zoomIn95 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes zoomIn95 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\nto {\n    opacity: 1;\n}\n}\n.main-panel .zoomIn {\n  -webkit-animation-name: zoomIn95;\n          animation-name: zoomIn95;\n}\n@-webkit-keyframes zoomOut95 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\n}\n@keyframes zoomOut95 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\n}\n.main-panel .zoomOut {\n  -webkit-animation-name: zoomOut95;\n          animation-name: zoomOut95;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/Content.vue?vue&type=template&id=66dcd346&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/Content.vue?vue&type=template&id=66dcd346& ***!
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
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c(
        "FadeTransition",
        { attrs: { duration: 200, mode: "out-in" } },
        [_c("router-view")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/ContentFooter.vue?vue&type=template&id=9fc58a50&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/ContentFooter.vue?vue&type=template&id=9fc58a50& ***!
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
        _vm._v(" by\n      "),
        _c(
          "a",
          {
            attrs: {
              href: "https://binarcode.com",
              rel: "noopener",
              target: "_blank"
            }
          },
          [_vm._v("BinarCode")]
        ),
        _vm._v(" and\n      "),
        _c(
          "a",
          {
            attrs: {
              href: "https://www.creative-tim.com/?ref=pdf-vuejs",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("Creative Tim")]
        ),
        _vm._v("\n      for a better web.\n    ")
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
              href: "http://creative-tim.com",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("\n          Creative Tim\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: {
              href: "https://www.creative-tim.com/presentation",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("\n          About Us\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: {
              href: "http://blog.creative-tim.com",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("\n          Blog\n        ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=template&id=6c44a37c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=template&id=6c44a37c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          "short-title": _vm.$t("sidebar.shortTitle"),
          title: _vm.$t("sidebar.title")
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
                }),
                _vm._v(" "),
                _c(
                  "sidebar-item",
                  {
                    attrs: {
                      link: {
                        name: _vm.$t("sidebar.pages"),
                        icon: "tim-icons icon-image-02"
                      }
                    }
                  },
                  [
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.pricing"),
                          path: "/pricing"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.rtl"),
                          path: "/pages/rtl"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.timeline"),
                          path: "/pages/timeline"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: { name: _vm.$t("sidebar.login"), path: "/login" }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.register"),
                          path: "/register"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: { name: _vm.$t("sidebar.lock"), path: "/lock" }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.userProfile"),
                          path: "/pages/user"
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "sidebar-item",
                  {
                    attrs: {
                      link: {
                        name: _vm.$t("sidebar.components"),
                        icon: "tim-icons icon-molecule-40"
                      }
                    }
                  },
                  [
                    _c(
                      "sidebar-item",
                      {
                        attrs: {
                          link: { name: _vm.$t("sidebar.multiLevelCollapse") }
                        }
                      },
                      [
                        _c("sidebar-item", {
                          attrs: {
                            link: {
                              name: _vm.$t("sidebar.example"),
                              isRoute: false,
                              path: "https://google.com",
                              target: "_blank"
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.buttons"),
                          path: "/components/buttons"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.gridSystem"),
                          path: "/components/grid-system"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.panels"),
                          path: "/components/panels"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.sweetAlert"),
                          path: "/components/sweet-alert"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.notifications"),
                          path: "/components/notifications"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.icons"),
                          path: "/components/icons"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.typography"),
                          path: "/components/typography"
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "sidebar-item",
                  {
                    attrs: {
                      link: {
                        name: _vm.$t("sidebar.forms"),
                        icon: "tim-icons icon-notes"
                      }
                    }
                  },
                  [
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.regularForms"),
                          path: "/forms/regular"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.extendedForms"),
                          path: "/forms/extended"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.validationForms"),
                          path: "/forms/validation"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.wizard"),
                          path: "/forms/wizard"
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "sidebar-item",
                  {
                    attrs: {
                      link: {
                        name: _vm.$t("sidebar.tables"),
                        icon: "tim-icons icon-puzzle-10"
                      }
                    }
                  },
                  [
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.regularTables"),
                          path: "/table-list/regular"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.extendedTables"),
                          path: "/table-list/extended"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.paginatedTables"),
                          path: "/table-list/paginated"
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "sidebar-item",
                  {
                    attrs: {
                      link: {
                        name: _vm.$t("sidebar.maps"),
                        icon: "tim-icons icon-pin"
                      }
                    }
                  },
                  [
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.googleMaps"),
                          path: "/maps/google"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.fullScreenMaps"),
                          path: "/maps/full-screen"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("sidebar-item", {
                      attrs: {
                        link: {
                          name: _vm.$t("sidebar.vectorMaps"),
                          path: "/maps/vector-map"
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("sidebar-item", {
                  attrs: {
                    link: {
                      name: _vm.$t("sidebar.widgets"),
                      icon: "tim-icons icon-settings",
                      path: "/widgets"
                    }
                  }
                }),
                _vm._v(" "),
                _c("sidebar-item", {
                  attrs: {
                    link: {
                      name: _vm.$t("sidebar.charts"),
                      icon: "tim-icons icon-chart-bar-32",
                      path: "/charts"
                    }
                  }
                }),
                _vm._v(" "),
                _c("sidebar-item", {
                  attrs: {
                    link: {
                      name: _vm.$t("sidebar.calendar"),
                      icon: "tim-icons icon-time-alarm",
                      path: "/calendar"
                    }
                  }
                })
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("sidebar-share", {
        attrs: { "background-color": _vm.sidebarBackground },
        on: {
          "update:backgroundColor": function($event) {
            _vm.sidebarBackground = $event
          },
          "update:background-color": function($event) {
            _vm.sidebarBackground = $event
          }
        }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a& ***!
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

/***/ "./resources/js/Pages/Layout/Content.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Layout/Content.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_66dcd346___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=66dcd346& */ "./resources/js/Pages/Layout/Content.vue?vue&type=template&id=66dcd346&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layout/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_66dcd346___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_66dcd346___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layout/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layout/Content.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Layout/Content.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layout/Content.vue?vue&type=template&id=66dcd346&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Layout/Content.vue?vue&type=template&id=66dcd346& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_66dcd346___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=66dcd346& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/Content.vue?vue&type=template&id=66dcd346&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_66dcd346___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_66dcd346___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Layout/ContentFooter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Layout/ContentFooter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentFooter_vue_vue_type_template_id_9fc58a50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=template&id=9fc58a50& */ "./resources/js/Pages/Layout/ContentFooter.vue?vue&type=template&id=9fc58a50&");
/* harmony import */ var _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layout/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentFooter_vue_vue_type_template_id_9fc58a50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentFooter_vue_vue_type_template_id_9fc58a50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layout/ContentFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layout/ContentFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Layout/ContentFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layout/ContentFooter.vue?vue&type=template&id=9fc58a50&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Layout/ContentFooter.vue?vue&type=template&id=9fc58a50& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_9fc58a50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=template&id=9fc58a50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/ContentFooter.vue?vue&type=template&id=9fc58a50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_9fc58a50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_9fc58a50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Layout/DashboardLayout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Layout/DashboardLayout.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardLayout_vue_vue_type_template_id_6c44a37c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=template&id=6c44a37c& */ "./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=template&id=6c44a37c&");
/* harmony import */ var _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardLayout_vue_vue_type_template_id_6c44a37c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardLayout_vue_vue_type_template_id_6c44a37c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layout/DashboardLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=template&id=6c44a37c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=template&id=6c44a37c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_6c44a37c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=template&id=6c44a37c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/DashboardLayout.vue?vue&type=template&id=6c44a37c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_6c44a37c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_6c44a37c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Layout/SidebarFixedToggleButton.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Layout/SidebarFixedToggleButton.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarFixedToggleButton_vue_vue_type_template_id_7a08668a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a& */ "./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a&");
/* harmony import */ var _SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarFixedToggleButton.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarFixedToggleButton_vue_vue_type_template_id_7a08668a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarFixedToggleButton_vue_vue_type_template_id_7a08668a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layout/SidebarFixedToggleButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarFixedToggleButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_7a08668a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=7a08668a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_7a08668a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_7a08668a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);