(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./resources/js/components/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./resources/js/pages/Tables/users.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: (_components = {
    BasePagination: _components__WEBPACK_IMPORTED_MODULE_1__["BasePagination"]
  }, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Select"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Select"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Option"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Option"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"]), _components),
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData: function queriedData() {
      var result = this.tableData;

      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }

      return result.slice(this.from, this.to);
    },
    to: function to() {
      var highBound = this.from + this.pagination.perPage;

      if (this.total < highBound) {
        highBound = this.total;
      }

      return highBound;
    },
    from: function from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total: function total() {
      return this.searchedData.length > 0 ? this.searchedData.length : this.tableData.length;
    }
  },
  data: function data() {
    return {
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      searchQuery: '',
      propsToSearch: ['name', 'email', 'age'],
      tableColumns: [{
        prop: 'name',
        label: 'Name',
        minWidth: 200
      }, {
        prop: 'email',
        label: 'Email',
        minWidth: 250
      }, {
        prop: 'age',
        label: 'Age',
        minWidth: 100
      }, {
        prop: 'salary',
        label: 'Salary',
        minWidth: 120
      }],
      tableData: _users__WEBPACK_IMPORTED_MODULE_2__["default"],
      searchedData: [],
      fuseSearch: null
    };
  },
  methods: {
    handleLike: function handleLike(index, row) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
        title: "You liked ".concat(row.name),
        buttonsStyling: false,
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-success btn-fill'
        }
      });
    },
    handleEdit: function handleEdit(index, row) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
        title: "You want to edit ".concat(row.name),
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-info btn-fill'
        }
      });
    },
    handleDelete: function handleDelete(index, row) {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        customClass: {
          confirmButton: 'btn btn-success btn-fill',
          cancelButton: 'btn btn-danger btn-fill'
        },
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          _this.deleteRow(row);

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Deleted!',
            text: "You deleted ".concat(row.name),
            icon: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false
          });
        }
      });
    },
    deleteRow: function deleteRow(row) {
      var indexToDelete = this.tableData.findIndex(function (tableRow) {
        return tableRow.id === row.id;
      });

      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    }
  },
  mounted: function mounted() {
    // Fuse search initialization.
    this.fuseSearch = new fuse_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.tableData, {
      keys: ['name', 'email'],
      threshold: 0.3
    });
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery: function searchQuery(value) {
      var result = this.tableData;

      if (value !== '') {
        result = this.fuseSearch.search(this.searchQuery);
      }

      this.searchedData = result;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pagination-select,\r\n.search-input {\r\n  width: 200px;\n}\n.swal2-icon-content{\r\n  font-size: inherit !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginatedTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=template&id=63794491&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=template&id=63794491& ***!
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
  return _c("div", { staticClass: "content" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _c("card", { attrs: { "card-body-classes": "table-full-width" } }, [
            _c(
              "h4",
              {
                staticClass: "card-title",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_vm._v("Paginated Tables")]
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
                  },
                  [
                    _c(
                      "el-select",
                      {
                        staticClass: "select-primary mb-3 pagination-select",
                        attrs: { placeholder: "Per page" },
                        model: {
                          value: _vm.pagination.perPage,
                          callback: function($$v) {
                            _vm.$set(_vm.pagination, "perPage", $$v)
                          },
                          expression: "pagination.perPage"
                        }
                      },
                      _vm._l(_vm.pagination.perPageOptions, function(item) {
                        return _c("el-option", {
                          key: item,
                          staticClass: "select-primary",
                          attrs: { label: item, value: item }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "base-input",
                      [
                        _c("el-input", {
                          staticClass: "mb-3 search-input",
                          attrs: {
                            type: "search",
                            clearable: "",
                            "prefix-icon": "el-icon-search",
                            placeholder: "Search records",
                            "aria-controls": "datatables"
                          },
                          model: {
                            value: _vm.searchQuery,
                            callback: function($$v) {
                              _vm.searchQuery = $$v
                            },
                            expression: "searchQuery"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-table",
                  { attrs: { data: _vm.queriedData } },
                  [
                    _vm._l(_vm.tableColumns, function(column) {
                      return _c("el-table-column", {
                        key: column.label,
                        attrs: {
                          "min-width": column.minWidth,
                          prop: column.prop,
                          label: column.label
                        }
                      })
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: {
                        "min-width": 135,
                        align: "right",
                        label: "Actions"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return _c(
                              "div",
                              {},
                              [
                                _c(
                                  "base-button",
                                  {
                                    staticClass: "like btn-link",
                                    attrs: {
                                      type: "info",
                                      size: "sm",
                                      icon: ""
                                    },
                                    nativeOn: {
                                      click: function($event) {
                                        return _vm.handleLike(
                                          props.$index,
                                          props.row
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "tim-icons icon-heart-2"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "base-button",
                                  {
                                    staticClass: "edit btn-link",
                                    attrs: {
                                      type: "warning",
                                      size: "sm",
                                      icon: ""
                                    },
                                    nativeOn: {
                                      click: function($event) {
                                        return _vm.handleEdit(
                                          props.$index,
                                          props.row
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "tim-icons icon-pencil"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "base-button",
                                  {
                                    staticClass: "remove btn-link",
                                    attrs: {
                                      type: "danger",
                                      size: "sm",
                                      icon: ""
                                    },
                                    nativeOn: {
                                      click: function($event) {
                                        return _vm.handleDelete(
                                          props.$index,
                                          props.row
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "tim-icons icon-simple-remove"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          }
                        }
                      ])
                    })
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                _c("div", {}, [
                  _c("p", { staticClass: "card-category" }, [
                    _vm._v(
                      "\n                Showing " +
                        _vm._s(_vm.from + 1) +
                        " to " +
                        _vm._s(_vm.to) +
                        " of " +
                        _vm._s(_vm.total) +
                        " entries\n              "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("base-pagination", {
                  staticClass: "pagination-no-border",
                  attrs: {
                    "per-page": _vm.pagination.perPage,
                    total: _vm.total
                  },
                  model: {
                    value: _vm.pagination.currentPage,
                    callback: function($$v) {
                      _vm.$set(_vm.pagination, "currentPage", $$v)
                    },
                    expression: "pagination.currentPage"
                  }
                })
              ],
              1
            )
          ])
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
    return _c("div", { staticClass: "col-md-8 ml-auto mr-auto" }, [
      _c("h2", { staticClass: "text-center" }, [_vm._v("Paginated Tables")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center" }, [
        _vm._v(
          "\n        With a selection of custom components & and Element UI components, you\n        can built beautiful data tables. For more info check\n        "
        ),
        _c(
          "a",
          {
            attrs: {
              href: "http://element.eleme.io/#/en-US/component/table",
              target: "_blank"
            }
          },
          [_vm._v("Element UI Table")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Tables/PaginatedTables.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Tables/PaginatedTables.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginatedTables_vue_vue_type_template_id_63794491___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginatedTables.vue?vue&type=template&id=63794491& */ "./resources/js/pages/Tables/PaginatedTables.vue?vue&type=template&id=63794491&");
/* harmony import */ var _PaginatedTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginatedTables.vue?vue&type=script&lang=js& */ "./resources/js/pages/Tables/PaginatedTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PaginatedTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaginatedTables.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PaginatedTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginatedTables_vue_vue_type_template_id_63794491___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginatedTables_vue_vue_type_template_id_63794491___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Tables/PaginatedTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Tables/PaginatedTables.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Tables/PaginatedTables.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginatedTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginatedTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Tables/PaginatedTables.vue?vue&type=template&id=63794491&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Tables/PaginatedTables.vue?vue&type=template&id=63794491& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_template_id_63794491___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginatedTables.vue?vue&type=template&id=63794491& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tables/PaginatedTables.vue?vue&type=template&id=63794491&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_template_id_63794491___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginatedTables_vue_vue_type_template_id_63794491___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Tables/users.js":
/*!********************************************!*\
  !*** ./resources/js/pages/Tables/users.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: "Noelia O'Kon",
  nickname: 'asperiores',
  email: 'otho.smitham@example.com',
  salary: '€ 13098.00',
  age: 39
}, {
  id: 2,
  name: 'Mr. Enid Von PhD',
  nickname: 'alias',
  email: 'pollich.cecilia@example.com',
  salary: '€ 35978.00',
  age: 26
}, {
  id: 3,
  name: 'Colton Koch',
  nickname: 'id',
  email: 'little.myrna@example.net',
  salary: '€ 26278.00',
  age: 48
}, {
  id: 4,
  name: 'Gregory Vandervort',
  nickname: 'vel',
  email: 'dock47@example.org',
  salary: '€ 25537.00',
  age: 27
}, {
  id: 5,
  name: 'Miss Rahsaan Heaney IV',
  nickname: 'qui',
  email: 'ugrady@example.org',
  salary: '€ 49003.00',
  age: 21
}, {
  id: 6,
  name: 'Ms. Crystel Zemlak IV',
  nickname: 'reiciendis',
  email: 'amari.rau@example.com',
  salary: '€ 12383.00',
  age: 48
}, {
  id: 7,
  name: 'Nona McDermott',
  nickname: 'quaerat',
  email: 'adrien.baumbach@example.org',
  salary: '€ 18512.00',
  age: 31
}, {
  id: 8,
  name: 'Miss Genoveva Murazik V',
  nickname: 'rerum',
  email: 'ohettinger@example.net',
  salary: '€ 31209.00',
  age: 28
}, {
  id: 9,
  name: 'Beulah Huels',
  nickname: 'non',
  email: 'stefan99@example.com',
  salary: '€ 36920.00',
  age: 53
}, {
  id: 10,
  name: 'Zoe Klein',
  nickname: 'ex',
  email: 'ejacobson@example.org',
  salary: '€ 35616.00',
  age: 27
}, {
  id: 11,
  name: 'Vickie Kiehn',
  nickname: 'assumenda',
  email: 'ayost@example.com',
  salary: '€ 30790.00',
  age: 29
}, {
  id: 12,
  name: 'Elwyn Herzog',
  nickname: 'praesentium',
  email: 'ckassulke@example.net',
  salary: '€ 35785.00',
  age: 27
}, {
  id: 13,
  name: 'Selena Hettinger',
  nickname: 'et',
  email: 'bashirian.hyman@example.net',
  salary: '€ 31836.00',
  age: 35
}, {
  id: 14,
  name: 'Edwin Beier',
  nickname: 'eos',
  email: 'janis71@example.org',
  salary: '€ 11902.00',
  age: 38
}, {
  id: 15,
  name: 'Lexi Braun MD',
  nickname: 'autem',
  email: 'dusty74@example.net',
  salary: '€ 11927.00',
  age: 45
}, {
  id: 16,
  name: 'Jovany Spencer',
  nickname: 'fugit',
  email: 'gbogisich@example.org',
  salary: '€ 44686.00',
  age: 43
}, {
  id: 17,
  name: 'Prof. Maci Anderson DVM',
  nickname: 'dolorem',
  email: 'btorp@example.com',
  salary: '€ 25055.00',
  age: 29
}, {
  id: 18,
  name: 'Joel Kulas MD',
  nickname: 'sed',
  email: 'phoebe.sauer@example.org',
  salary: '€ 11650.00',
  age: 24
}, {
  id: 19,
  name: 'Mr. Dawson Greenholt',
  nickname: 'nostrum',
  email: 'asawayn@example.org',
  salary: '€ 46962.00',
  age: 53
}, {
  id: 20,
  name: 'Prof. Lloyd Green',
  nickname: 'velit',
  email: 'laila.hintz@example.org',
  salary: '€ 12928.00',
  age: 46
}, {
  id: 21,
  name: 'Shayna Morar',
  nickname: 'rerum',
  email: 'wfay@example.org',
  salary: '€ 22638.00',
  age: 26
}, {
  id: 22,
  name: 'Krista Schulist',
  nickname: 'qui',
  email: 'gregoria.jakubowski@example.com',
  salary: '€ 49345.00',
  age: 42
}, {
  id: 23,
  name: 'Leone Lemke',
  nickname: 'repellat',
  email: 'ltorphy@example.com',
  salary: '€ 17560.00',
  age: 42
}, {
  id: 24,
  name: 'Dr. Willie Kemmer II',
  nickname: 'quasi',
  email: 'ivy51@example.net',
  salary: '€ 35370.00',
  age: 30
}, {
  id: 25,
  name: 'Deonte Lebsack',
  nickname: 'nesciunt',
  email: 'alisa83@example.net',
  salary: '€ 32725.00',
  age: 24
}, {
  id: 26,
  name: 'Prof. Shayne Nader',
  nickname: 'voluptas',
  email: 'bosco.shaina@example.net',
  salary: '€ 9844.00',
  age: 23
}, {
  id: 27,
  name: 'Prof. Kennith Kertzmann',
  nickname: 'alias',
  email: 'satterfield.jonathan@example.com',
  salary: '€ 41950.00',
  age: 25
}, {
  id: 28,
  name: "Miss Meagan O'Keefe",
  nickname: 'corporis',
  email: 'tracy.barrows@example.com',
  salary: '€ 41803.00',
  age: 50
}, {
  id: 29,
  name: 'Prof. Edward Pagac MD',
  nickname: 'quia',
  email: 'gerhard65@example.org',
  salary: '€ 22896.00',
  age: 43
}, {
  id: 30,
  name: 'Samantha Weissnat',
  nickname: 'est',
  email: 'crystel66@example.net',
  salary: '€ 18805.00',
  age: 43
}, {
  id: 31,
  name: 'Dr. Gilbert Ward',
  nickname: 'dolorum',
  email: 'sandrine06@example.net',
  salary: '€ 16644.00',
  age: 32
}, {
  id: 32,
  name: 'Mike West',
  nickname: 'laudantium',
  email: 'jborer@example.net',
  salary: '€ 35728.00',
  age: 42
}, {
  id: 33,
  name: 'Prof. Isabell Cruickshank I',
  nickname: 'recusandae',
  email: 'ondricka.lurline@example.org',
  salary: '€ 44574.00',
  age: 35
}, {
  id: 34,
  name: 'Prof. Lonny Rath',
  nickname: 'nihil',
  email: 'rfeest@example.net',
  salary: '€ 19949.00',
  age: 48
}, {
  id: 35,
  name: 'Santina Medhurst MD',
  nickname: 'suscipit',
  email: 'ila24@example.net',
  salary: '€ 36323.00',
  age: 51
}, {
  id: 36,
  name: 'Jeff Lehner',
  nickname: 'quo',
  email: 'jarred77@example.com',
  salary: '€ 48462.00',
  age: 42
}, {
  id: 37,
  name: 'Samanta Pfeffer',
  nickname: 'officia',
  email: 'fgoyette@example.net',
  salary: '€ 19601.00',
  age: 42
}, {
  id: 38,
  name: 'Ofelia Torp',
  nickname: 'a',
  email: 'ericka44@example.net',
  salary: '€ 33149.00',
  age: 35
}, {
  id: 39,
  name: 'Mrs. Margarete Raynor',
  nickname: 'quia',
  email: 'jlegros@example.net',
  salary: '€ 21951.00',
  age: 40
}, {
  id: 40,
  name: 'Mr. Brant Howell V',
  nickname: 'perspiciatis',
  email: 'franecki.gerald@example.org',
  salary: '€ 41552.00',
  age: 53
}, {
  id: 41,
  name: 'Reilly Ruecker DVM',
  nickname: 'ad',
  email: 'ldeckow@example.net',
  salary: '€ 22709.00',
  age: 42
}, {
  id: 42,
  name: 'Zachery McDermott',
  nickname: 'molestiae',
  email: 'gladyce84@example.com',
  salary: '€ 32354.00',
  age: 25
}, {
  id: 43,
  name: 'Heloise Kulas',
  nickname: 'aut',
  email: 'kessler.helen@example.net',
  salary: '€ 45086.00',
  age: 54
}, {
  id: 44,
  name: 'Norma Dibbert',
  nickname: 'amet',
  email: 'eudora36@example.net',
  salary: '€ 15661.00',
  age: 46
}, {
  id: 45,
  name: 'Immanuel Auer',
  nickname: 'quia',
  email: 'halvorson.theodora@example.org',
  salary: '€ 15862.00',
  age: 39
}, {
  id: 46,
  name: 'Lamont Borer',
  nickname: 'expedita',
  email: 'trantow.neoma@example.com',
  salary: '€ 12544.00',
  age: 25
}, {
  id: 47,
  name: 'Brooke Purdy',
  nickname: 'cupiditate',
  email: 'bhermiston@example.net',
  salary: '€ 14457.00',
  age: 50
}, {
  id: 48,
  name: 'Dr. Leo Dach',
  nickname: 'et',
  email: 'camila.ward@example.com',
  salary: '€ 40278.00',
  age: 49
}, {
  id: 49,
  name: 'Krystal Langosh',
  nickname: 'voluptatum',
  email: 'pacocha.yesenia@example.org',
  salary: '€ 9305.00',
  age: 34
}, {
  id: 50,
  name: 'Florence Greenfelder',
  nickname: 'odit',
  email: 'kenyatta.oconnell@example.com',
  salary: '€ 36980.00',
  age: 38
}]);

/***/ })

}]);