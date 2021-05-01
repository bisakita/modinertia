(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"]), _components),
  data: function data() {
    return {
      productsTable: [{
        image: 'img/jacket.png',
        title: 'Suede Biker Jacket ',
        description: 'by Saint Laurent',
        color: 'Black',
        size: 'M',
        price: 3390,
        quantity: 1,
        amount: 3390
      }, {
        image: 'img/t-shirt.png',
        title: 'Jersey T-Shirt',
        description: 'by Balmain',
        color: 'Black',
        size: 'M',
        price: 499,
        quantity: 2,
        amount: 998
      }, {
        image: 'img/gucci.png',
        title: '\tSlim-Fit Swim Short ',
        description: 'by Prada',
        color: 'Red',
        size: 'M',
        price: 200,
        quantity: 1,
        amount: 200
      }]
    };
  },
  computed: {
    shoppingTotal: function shoppingTotal() {
      return this.productsTable.reduce(function (accumulator, current) {
        return accumulator + current.amount;
      }, 0);
    }
  },
  methods: {
    increaseQuantity: function increaseQuantity(row) {
      row.quantity++;
      this.computeAmount(row);
    },
    decreaseQuantity: function decreaseQuantity(row) {
      if (row.quantity > 1) {
        row.quantity--;
        this.computeAmount(row);
      }
    },
    computeAmount: function computeAmount(row) {
      row.amount = row.quantity * row.price;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.stats-container[data-v-f4cdf034] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: rgba(255, 255, 255, 0.7);\r\n  padding-right: 20px;\n}\n.stats-total[data-v-f4cdf034] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 20px;\n}\n.stats-total-numbers[data-v-f4cdf034] {\r\n  min-width: 240px;\r\n  display: flex;\r\n  justify-content: space-between;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "table-shopping" },
    [
      _c(
        "el-table",
        { staticStyle: { width: "100%" }, attrs: { data: _vm.productsTable } },
        [
          _c("el-table-column", {
            attrs: { "min-width": "140" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return _c("div", { staticClass: "img-container" }, [
                    _c("img", {
                      attrs: { src: row.image, alt: "product image" }
                    })
                  ])
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "270", label: "Product" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return _c("div", { staticClass: "td-name" }, [
                    _c("a", { attrs: { href: "#jacket" } }, [
                      _vm._v(_vm._s(row.title))
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("small", [_vm._v(_vm._s(row.description))])
                  ])
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "120", label: "Color", prop: "color" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "100", label: "Size", prop: "size" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "100", label: "Price", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("small", [_vm._v("€")]),
                    _vm._v(" " + _vm._s(row.price) + "\n      ")
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "160", label: "QTY", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "div",
                      { staticClass: "btn-group" },
                      [
                        _c(
                          "base-button",
                          {
                            staticClass: "btn-simple",
                            attrs: { type: "info", size: "sm" },
                            on: {
                              click: function($event) {
                                return _vm.decreaseQuantity(row)
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "tim-icons icon-simple-delete"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "base-button",
                          {
                            attrs: { type: "info", size: "sm" },
                            on: {
                              click: function($event) {
                                return _vm.increaseQuantity(row)
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "tim-icons icon-simple-add"
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v("\n        " + _vm._s(row.quantity) + "\n      ")
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "100", label: "Amount", align: "right" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("small", [_vm._v("€")]),
                    _vm._v(" " + _vm._s(row.amount) + "\n      ")
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "60", label: "", align: "left" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "base-button",
                      { staticClass: "btn-link", attrs: { type: "primary" } },
                      [_c("i", { staticClass: "tim-icons icon-simple-remove" })]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "stats-container",
              attrs: { slot: "append" },
              slot: "append"
            },
            [
              _c("div", { staticClass: "stats-total" }, [
                _c("div", { staticClass: "stats-total-numbers" }, [
                  _c("div", { staticClass: "td-total" }, [_vm._v("Total")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "td-price mr-2" }, [
                    _c("small", [_vm._v("€")]),
                    _vm._v(" " + _vm._s(_vm.shoppingTotal) + "\n          ")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex justify-content-end" },
                [
                  _c(
                    "base-button",
                    {
                      staticClass: "float-right",
                      attrs: { type: "info", round: "", title: "" }
                    },
                    [
                      _vm._v("\n          Complete Purchase "),
                      _c("i", { staticClass: "tim-icons icon-minimal-right" })
                    ]
                  )
                ],
                1
              )
            ]
          )
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

/***/ "./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShoppingTable_vue_vue_type_template_id_f4cdf034_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true& */ "./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true&");
/* harmony import */ var _ShoppingTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShoppingTable_vue_vue_type_style_index_0_id_f4cdf034_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css& */ "./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShoppingTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShoppingTable_vue_vue_type_template_id_f4cdf034_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShoppingTable_vue_vue_type_template_id_f4cdf034_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f4cdf034",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShoppingTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_style_index_0_id_f4cdf034_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=style&index=0&id=f4cdf034&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_style_index_0_id_f4cdf034_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_style_index_0_id_f4cdf034_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_style_index_0_id_f4cdf034_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_style_index_0_id_f4cdf034_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_template_id_f4cdf034_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/ExtendedTables/ShoppingTable.vue?vue&type=template&id=f4cdf034&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_template_id_f4cdf034_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingTable_vue_vue_type_template_id_f4cdf034_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);