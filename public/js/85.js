(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/UserTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BaseTable: _components__WEBPACK_IMPORTED_MODULE_0__["BaseTable"],
    BaseProgress: _components__WEBPACK_IMPORTED_MODULE_0__["BaseProgress"]
  },
  data: function data() {
    return {
      table: [{
        id: 1,
        img: 'img/tania.jpg',
        name: 'Tania Mike',
        job: 'Develop',
        progress: 25,
        salary: '€ 99,225'
      }, {
        id: 2,
        img: 'img/robi.jpg',
        name: 'John Doe',
        job: 'CEO',
        progress: 77,
        salary: '€ 89,241'
      }, {
        id: 3,
        img: 'img/lora.jpg',
        name: 'Alexa Mike',
        job: 'Design',
        progress: 41,
        salary: '€ 92,144'
      }, {
        id: 4,
        img: 'img/jana.jpg',
        name: 'Jana Monday',
        job: 'Marketing',
        progress: 50,
        salary: '€ 49,990'
      }, {
        id: 5,
        img: 'img/mike.jpg',
        name: 'Paul Dickens',
        job: 'Develop',
        progress: 100,
        salary: '€ 69,201'
      }, {
        id: 6,
        img: 'img/emilyz.jpg',
        name: 'Manuela Rico',
        job: 'Manager',
        progress: 15,
        salary: '€ 99,201'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/UserTable.vue?vue&type=template&id=5004ba22&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/UserTable.vue?vue&type=template&id=5004ba22& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("base-table", {
    attrs: { data: _vm.table, "thead-classes": "text-primary" },
    scopedSlots: _vm._u([
      {
        key: "columns",
        fn: function(ref) {
          var columns = ref.columns
          return [
            _c("th", [_vm._v("#")]),
            _vm._v(" "),
            _c("th", [_vm._v("Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Job Position")]),
            _vm._v(" "),
            _c("th", [_vm._v("Salary")]),
            _vm._v(" "),
            _c("th", { staticClass: "text-right" }, [_vm._v("Milestone")]),
            _vm._v(" "),
            _c("th", { staticClass: "text-right" }, [_vm._v("Actions")])
          ]
        }
      },
      {
        key: "default",
        fn: function(ref) {
          var row = ref.row
          var index = ref.index
          return [
            _c("td", { staticClass: "text-center" }, [
              _c("div", { staticClass: "photo" }, [
                _c("img", { attrs: { src: row.img, alt: "photo" } })
              ])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(row.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(row.job))]),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "text-center" },
              [_c("base-progress", { attrs: { value: row.progress } })],
              1
            ),
            _vm._v(" "),
            _c("td", { staticClass: "text-right" }, [_vm._v("€ 99,225")]),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "text-right" },
              [
                _c(
                  "el-tooltip",
                  {
                    attrs: {
                      content: "Refresh",
                      effect: "light",
                      "open-delay": 300,
                      placement: "top"
                    }
                  },
                  [
                    _c(
                      "base-button",
                      {
                        staticClass: "btn-link",
                        attrs: {
                          type: index > 2 ? "success" : "neutral",
                          icon: "",
                          size: "sm"
                        }
                      },
                      [_c("i", { staticClass: "tim-icons icon-refresh-01" })]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-tooltip",
                  {
                    attrs: {
                      content: "Delete",
                      effect: "light",
                      "open-delay": 300,
                      placement: "top"
                    }
                  },
                  [
                    _c(
                      "base-button",
                      {
                        staticClass: "btn-link",
                        attrs: {
                          type: index > 2 ? "danger" : "neutral",
                          icon: "",
                          size: "sm"
                        }
                      },
                      [_c("i", { staticClass: "tim-icons icon-simple-remove" })]
                    )
                  ],
                  1
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

/***/ "./resources/js/pages/Dashboard/UserTable.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Dashboard/UserTable.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserTable_vue_vue_type_template_id_5004ba22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTable.vue?vue&type=template&id=5004ba22& */ "./resources/js/pages/Dashboard/UserTable.vue?vue&type=template&id=5004ba22&");
/* harmony import */ var _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserTable_vue_vue_type_template_id_5004ba22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserTable_vue_vue_type_template_id_5004ba22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/UserTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/UserTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/UserTable.vue?vue&type=template&id=5004ba22&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/UserTable.vue?vue&type=template&id=5004ba22& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_5004ba22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTable.vue?vue&type=template&id=5004ba22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/UserTable.vue?vue&type=template&id=5004ba22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_5004ba22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_5004ba22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);