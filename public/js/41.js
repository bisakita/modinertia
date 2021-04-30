(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_LoadingPanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/LoadingPanel.vue */ "./resources/js/components/LoadingPanel.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var WorldMap = function WorldMap() {
  return {
    component: Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/WorldMap/AsyncWorldMap.vue */ "./resources/js/components/WorldMap/AsyncWorldMap.vue")),
    loading: _components_LoadingPanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    delay: 200
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'country-map-card',
  components: {
    WorldMap: WorldMap
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=template&id=a01a99cc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=template&id=a01a99cc& ***!
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
  return _c(
    "card",
    [
      _c("template", { slot: "header" }, [
        _c("h4", { staticClass: "card-title" }, [
          _vm._v("Global Sales by Top Locations")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-category" }, [
          _vm._v("All products that were shipped")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 ml-auto mr-auto" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table" }, [
              _c("tbody", [
                _c("tr", [
                  _c("td", [
                    _c("div", { staticClass: "flag" }, [
                      _c("img", { attrs: { src: "img/US.png", alt: "US" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("USA")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("2.920")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("53.23%")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _c("div", { staticClass: "flag" }, [
                      _c("img", { attrs: { src: "img/DE.png", alt: "DE" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Germany")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("1.300")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("20.43%")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _c("div", { staticClass: "flag" }, [
                      _c("img", { attrs: { src: "img/AU.png", alt: "AU" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Australia")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("760")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("10.35%")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _c("div", { staticClass: "flag" }, [
                      _c("img", { attrs: { src: "img/GB.png", alt: "GB" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("United Kingdom")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("690")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("7.87%")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _c("div", { staticClass: "flag" }, [
                      _c("img", { attrs: { src: "img/RO.png", alt: "RO" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Romania")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("600")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("5.94%")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _c("div", { staticClass: "flag" }, [
                      _c("img", { attrs: { src: "img/BR.png", alt: "BR" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Brasil")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("550")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("4.34%")])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [_c("world-map", { staticStyle: { height: "300px" } })],
          1
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard/CountryMapCard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Dashboard/CountryMapCard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountryMapCard_vue_vue_type_template_id_a01a99cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryMapCard.vue?vue&type=template&id=a01a99cc& */ "./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=template&id=a01a99cc&");
/* harmony import */ var _CountryMapCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryMapCard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CountryMapCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CountryMapCard_vue_vue_type_template_id_a01a99cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CountryMapCard_vue_vue_type_template_id_a01a99cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/CountryMapCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMapCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryMapCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMapCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=template&id=a01a99cc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=template&id=a01a99cc& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMapCard_vue_vue_type_template_id_a01a99cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryMapCard.vue?vue&type=template&id=a01a99cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/CountryMapCard.vue?vue&type=template&id=a01a99cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMapCard_vue_vue_type_template_id_a01a99cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMapCard_vue_vue_type_template_id_a01a99cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);