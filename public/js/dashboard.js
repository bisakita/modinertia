(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Charts.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Charts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _components_Charts_PieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Charts/PieChart */ "./resources/js/components/Charts/PieChart.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ "./resources/js/config.js");
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Charts/config */ "./resources/js/components/Charts/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    PieChart: _components_Charts_PieChart__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      lineChart1: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [{
            label: 'Data',
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#be55ed',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 100, 70, 80, 120, 80]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_4__["purpleChartOptions"],
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      },
      lineChart2: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [{
            label: 'Data',
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.info,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#2380f7',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 100, 70, 80, 120, 80]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_4__["lineChartOptionsBlue"]
      },
      barChart1: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [{
            label: 'Data',
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [80, 100, 70, 80, 120, 80]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartOptionsGradient"],
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.purpleGradient,
        gradientStops: [1, 0]
      },
      barChart2: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [{
            label: 'Data',
            fill: true,
            backgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.orange,
            hoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.orange,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.orange,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [80, 100, 70, 80, 120, 80]
          }, {
            label: 'Data',
            fill: true,
            backgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.info,
            hoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.info,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].colors.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [60, 110, 90, 70, 90, 100]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartOptionsGradient"]
      },
      pieChart1: {
        chartData: {
          labels: [1, 2],
          datasets: [{
            label: 'Emails',
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ['#00c09d', '#e2e2e2'],
            borderWidth: 0,
            data: [60, 40]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_4__["pieChartOptions"]
      },
      pieChart2: {
        chartData: {
          labels: [1, 2, 3],
          datasets: [{
            label: 'Emails',
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ['#ff8779', '#2a84e9', '#e2e2e2'],
            borderWidth: 0,
            data: [60, 40, 20]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_4__["pieChartOptions"]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Charts.vue?vue&type=template&id=0836449e&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Charts.vue?vue&type=template&id=0836449e& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h2", { staticClass: "text-center" }, [_vm._v("Charts.js")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c(
        "div",
        { staticClass: "col-md-5 ml-auto" },
        [
          _c(
            "card",
            { staticClass: "card-chart", attrs: { "no-footer-line": "" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v("Simple With Gradient")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons icon-chart-bar-32 text-primary "
                  }),
                  _vm._v(" 10,000\n          ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    attrs: {
                      "chart-data": _vm.lineChart1.chartData,
                      "gradient-colors": _vm.lineChart1.gradientColors,
                      "gradient-stops": _vm.lineChart1.gradientStops,
                      "extra-options": _vm.lineChart1.extraOptions,
                      height: 200
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-5 mr-auto" },
        [
          _c(
            "card",
            { staticClass: "card-chart" },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v("With Numbers and Grid")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", { staticClass: "tim-icons icon-send text-info " }),
                  _vm._v(" 750,000€\n          ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    attrs: {
                      labels: _vm.lineChart2.labels,
                      "chart-data": _vm.lineChart2.chartData,
                      "extra-options": _vm.lineChart2.extraOptions,
                      height: 200
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-5 ml-auto" },
        [
          _c(
            "card",
            { staticClass: "card-chart" },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v("Gradient Bar Chart")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons icon-shape-star text-danger "
                  }),
                  _vm._v(" 1,000,000£\n          ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("bar-chart", {
                    attrs: {
                      "chart-data": _vm.barChart1.chartData,
                      "extra-options": _vm.barChart1.extraOptions,
                      "gradient-colors": _vm.barChart1.gradientColors,
                      "gradient-stops": _vm.barChart1.gradientStops,
                      height: 200
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-5 mr-auto" },
        [
          _c(
            "card",
            { staticClass: "card-chart", attrs: { "no-footer-line": "" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v("Multiple Bars Chart With Grid")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons icon-time-alarm text-warning "
                  }),
                  _vm._v(" 130,000$\n          ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("bar-chart", {
                    attrs: {
                      "chart-data": _vm.barChart2.chartData,
                      "extra-options": _vm.barChart2.extraOptions,
                      height: 200
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-5 ml-auto" },
        [
          _c("card", { staticClass: "card-chart card-chart-pie" }, [
            _c(
              "h5",
              {
                staticClass: "card-category",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_vm._v("Simple Pie Chart")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "div",
                  { staticClass: "chart-area" },
                  [
                    _c("pie-chart", {
                      attrs: {
                        "chart-data": _vm.pieChart1.chartData,
                        "extra-options": _vm.pieChart1.extraOptions,
                        height: 120
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons  icon-trophy text-success "
                  }),
                  _vm._v(" 10.000$\n            ")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "category" }, [
                  _vm._v("A total of $54000")
                ])
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-5 mr-auto" },
        [
          _c("card", { staticClass: "card-chart card-chart-pie" }, [
            _c(
              "h5",
              {
                staticClass: "card-category",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_vm._v("Multiple Pie Chart")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "div",
                  { staticClass: "chart-area" },
                  [
                    _c("pie-chart", {
                      attrs: {
                        "chart-data": _vm.pieChart2.chartData,
                        "extra-options": _vm.pieChart2.extraOptions,
                        height: 120
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("i", { staticClass: "tim-icons  icon-tag text-warning " }),
                  _vm._v(" 130,000\n            ")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "category" }, [
                  _vm._v("Feedback from 20.000 users")
                ])
              ])
            ])
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
    return _c("p", { staticClass: "category text-center" }, [
      _vm._v(
        "\n    Simple yet flexible JavaScript charting for designers & developers.\n    Made by our friends from\n    "
      ),
      _c(
        "a",
        {
          attrs: {
            target: "_blank",
            rel: "noopener",
            href: "https://vue-chartjs.org/"
          }
        },
        [_vm._v("Vue Charts.js")]
      ),
      _vm._v(". Please check\n    "),
      _c(
        "a",
        {
          attrs: {
            target: "_blank",
            rel: "noopener",
            href: "https://vue-chartjs.org/guide/#vue-single-file-components"
          }
        },
        [_vm._v("the full documentation")]
      ),
      _vm._v(".\n  ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Charts/PieChart.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Charts/PieChart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pie-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp],
  props: {
    extraOptions: Object,
    gradientColors: {
      type: Array,
      "default": function _default() {
        return ['rgba(72,72,176,0.2)', 'rgba(72,72,176,0.0)', 'rgba(119,52,169,0)'];
      },
      validator: function validator(val) {
        return val.length > 1;
      }
    },
    gradientStops: {
      type: Array,
      "default": function _default() {
        return [1, 0.4, 0];
      },
      validator: function validator(val) {
        return val.length > 1;
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  methods: {
    updateGradients: function updateGradients(chartData) {
      var _this = this;

      if (!chartData) return;
      var ctx = this.ctx || document.getElementById(this.chartId).getContext('2d');
      var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      this.gradientStops.forEach(function (stop, index) {
        gradientStroke.addColorStop(stop, _this.gradientColors[index]);
      });
      chartData.datasets.forEach(function (set) {
        if (!set.backgroundColor) {
          set.backgroundColor = gradientStroke;
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$watch('chartData', function (newVal, oldVal) {
      _this2.updateGradients(newVal);

      if (!oldVal) {
        _this2.renderChart(_this2.chartData, _this2.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/pages/Charts.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Charts.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Charts_vue_vue_type_template_id_0836449e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charts.vue?vue&type=template&id=0836449e& */ "./resources/js/pages/Charts.vue?vue&type=template&id=0836449e&");
/* harmony import */ var _Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Charts.vue?vue&type=script&lang=js& */ "./resources/js/pages/Charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Charts_vue_vue_type_template_id_0836449e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Charts_vue_vue_type_template_id_0836449e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Charts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Charts.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Charts.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Charts.vue?vue&type=template&id=0836449e&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Charts.vue?vue&type=template&id=0836449e& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_0836449e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=template&id=0836449e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Charts.vue?vue&type=template&id=0836449e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_0836449e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_0836449e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);