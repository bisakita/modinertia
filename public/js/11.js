(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SampleNavbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SampleNavbar.vue */ "./resources/js/Template/Layout/SampleNavbar.vue");
/* harmony import */ var _SampleFooter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SampleFooter.vue */ "./resources/js/Template/Layout/SampleFooter.vue");
/* harmony import */ var _Layout_SidebarFixedToggleButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/SidebarFixedToggleButton.vue */ "./resources/js/Template/Layout/SidebarFixedToggleButton.vue");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

 // import SidebarShare from './SidebarSharePlugin';

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


 // import DashboardContent from "../Layout/Content.vue";

 // import Starter from "../Layout/SamplePage.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DashboardNavbar: _SampleNavbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContentFooter: _SampleFooter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SidebarFixedToggleButton: _Layout_SidebarFixedToggleButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    // DashboardContent,
    // Starter,
    SlideYDownTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_5__["SlideYDownTransition"],
    ZoomCenterTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_5__["ZoomCenterTransition"]
  },
  data: function data() {
    return {
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary

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
      var isWindows = navigator.platform.startsWith("Win");

      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        _initScrollbar("sidebar");

        _initScrollbar("main-panel");

        _initScrollbar("sidebar-wrapper");

        docClasses.add("perfect-scrollbar-on");
      } else {
        docClasses.add("perfect-scrollbar-off");
      }
    }
  },
  mounted: function mounted() {
    this.initScrollbar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./resources/js/components/index.js");
/* harmony import */ var _SidebarToggleButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarToggleButton.vue */ "./resources/js/Template/Layout/SidebarToggleButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SidebarToggleButton: _SidebarToggleButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CollapseTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_0__["CollapseTransition"],
    BaseNav: _components__WEBPACK_IMPORTED_MODULE_1__["BaseNav"],
    Modal: _components__WEBPACK_IMPORTED_MODULE_1__["Modal"]
  },
  computed: {
    routeName: function routeName() {
      // const { name } = this.$route;
      var _name = {
        name: "dashboard"
      },
          name = _name.name;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var _SidebarToggleButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarToggleButton.vue */ "./resources/js/Template/Layout/SidebarToggleButton.vue");
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
    SidebarToggleButton: _SidebarToggleButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes zoomIn95 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes zoomIn95 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\nto {\n    opacity: 1;\n}\n}\n.main-panel .zoomIn {\n  -webkit-animation-name: zoomIn95;\n          animation-name: zoomIn95;\n}\n@-webkit-keyframes zoomOut95 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\n}\n@keyframes zoomOut95 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n    transform: scale3d(0.95, 0.95, 0.95);\n}\n}\n.main-panel .zoomOut {\n  -webkit-animation-name: zoomOut95;\n          animation-name: zoomOut95;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.top-navbar[data-v-60fb82b0] {\r\n  top: 0px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleFooter.vue?vue&type=template&id=30d01ab3&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleFooter.vue?vue&type=template&id=30d01ab3& ***!
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
  return _c("footer", { staticClass: "footer" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "copyright" }, [
        _vm._v("\n      © " + _vm._s(_vm.year) + ", made with "),
        _c("i", { staticClass: "tim-icons icon-heart-2" }),
        _vm._v(" for\n      a better web.\n    ")
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
              href: "https://example.com",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("\n          Link\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: {
              href: "https://example.com",
              target: "_blank",
              rel: "noopener"
            }
          },
          [_vm._v("\n          Another Link\n        ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=template&id=1efdfe7c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleLayout.vue?vue&type=template&id=1efdfe7c& ***!
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
          "short-title": "CT",
          title: "Creative Tim"
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
                        name: "FFFFFFFFFFFFFFFFFFF",
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
                    })
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-panel", attrs: { data: _vm.sidebarBackground } },
        [
          _c("dashboard-navbar"),
          _vm._v(" "),
          _c(
            "div",
            { class: { content: "content" }, on: { click: _vm.toggleSidebar } },
            [
              _c(
                "zoom-center-transition",
                { attrs: { duration: 200, mode: "out-in" } },
                [_c("article", [_vm._t("default")], 2)]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=template&id=18640978&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=template&id=18640978& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/Template/Layout/SampleFooter.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Template/Layout/SampleFooter.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SampleFooter_vue_vue_type_template_id_30d01ab3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SampleFooter.vue?vue&type=template&id=30d01ab3& */ "./resources/js/Template/Layout/SampleFooter.vue?vue&type=template&id=30d01ab3&");
/* harmony import */ var _SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SampleFooter.vue?vue&type=script&lang=js& */ "./resources/js/Template/Layout/SampleFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SampleFooter_vue_vue_type_template_id_30d01ab3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SampleFooter_vue_vue_type_template_id_30d01ab3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Template/Layout/SampleFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Template/Layout/SampleFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Template/Layout/SampleFooter.vue?vue&type=template&id=30d01ab3&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleFooter.vue?vue&type=template&id=30d01ab3& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_template_id_30d01ab3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleFooter.vue?vue&type=template&id=30d01ab3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleFooter.vue?vue&type=template&id=30d01ab3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_template_id_30d01ab3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleFooter_vue_vue_type_template_id_30d01ab3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Template/Layout/SampleLayout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Template/Layout/SampleLayout.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SampleLayout_vue_vue_type_template_id_1efdfe7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SampleLayout.vue?vue&type=template&id=1efdfe7c& */ "./resources/js/Template/Layout/SampleLayout.vue?vue&type=template&id=1efdfe7c&");
/* harmony import */ var _SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SampleLayout.vue?vue&type=script&lang=js& */ "./resources/js/Template/Layout/SampleLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SampleLayout.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SampleLayout_vue_vue_type_template_id_1efdfe7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SampleLayout_vue_vue_type_template_id_1efdfe7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Template/Layout/SampleLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Template/Layout/SampleLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Template/Layout/SampleLayout.vue?vue&type=template&id=1efdfe7c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleLayout.vue?vue&type=template&id=1efdfe7c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_template_id_1efdfe7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleLayout.vue?vue&type=template&id=1efdfe7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleLayout.vue?vue&type=template&id=1efdfe7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_template_id_1efdfe7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleLayout_vue_vue_type_template_id_1efdfe7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Template/Layout/SampleNavbar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Template/Layout/SampleNavbar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SampleNavbar_vue_vue_type_template_id_60fb82b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true& */ "./resources/js/Template/Layout/SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true&");
/* harmony import */ var _SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SampleNavbar.vue?vue&type=script&lang=js& */ "./resources/js/Template/Layout/SampleNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SampleNavbar_vue_vue_type_style_index_0_id_60fb82b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css& */ "./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SampleNavbar_vue_vue_type_template_id_60fb82b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SampleNavbar_vue_vue_type_template_id_60fb82b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "60fb82b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Template/Layout/SampleNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Template/Layout/SampleNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_60fb82b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=style&index=0&id=60fb82b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_60fb82b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_60fb82b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_60fb82b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_style_index_0_id_60fb82b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Template/Layout/SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_template_id_60fb82b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SampleNavbar.vue?vue&type=template&id=60fb82b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_template_id_60fb82b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SampleNavbar_vue_vue_type_template_id_60fb82b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Template/Layout/SidebarFixedToggleButton.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Template/Layout/SidebarFixedToggleButton.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarFixedToggleButton_vue_vue_type_template_id_24fb3a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c& */ "./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c&");
/* harmony import */ var _SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarFixedToggleButton.vue?vue&type=script&lang=js& */ "./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarFixedToggleButton_vue_vue_type_template_id_24fb3a8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarFixedToggleButton_vue_vue_type_template_id_24fb3a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Template/Layout/SidebarFixedToggleButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarFixedToggleButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_24fb3a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=24fb3a8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_24fb3a8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFixedToggleButton_vue_vue_type_template_id_24fb3a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Template/Layout/SidebarToggleButton.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Template/Layout/SidebarToggleButton.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarToggleButton_vue_vue_type_template_id_18640978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarToggleButton.vue?vue&type=template&id=18640978& */ "./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=template&id=18640978&");
/* harmony import */ var _SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarToggleButton.vue?vue&type=script&lang=js& */ "./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarToggleButton_vue_vue_type_template_id_18640978___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarToggleButton_vue_vue_type_template_id_18640978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Template/Layout/SidebarToggleButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarToggleButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=template&id=18640978&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=template&id=18640978& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_template_id_18640978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarToggleButton.vue?vue&type=template&id=18640978& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Template/Layout/SidebarToggleButton.vue?vue&type=template&id=18640978&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_template_id_18640978___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarToggleButton_vue_vue_type_template_id_18640978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);