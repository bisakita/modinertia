(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskList */ "./resources/js/pages/Dashboard/TaskList.vue");
/* harmony import */ var _UserTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserTable */ "./resources/js/pages/Dashboard/UserTable.vue");
/* harmony import */ var _CountryMapCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CountryMapCard */ "./resources/js/pages/Dashboard/CountryMapCard.vue");
/* harmony import */ var _components_Cards_StatsCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Cards/StatsCard */ "./resources/js/components/Cards/StatsCard.vue");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config */ "./resources/js/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var bigChartData = [[100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100], [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120], [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]];
var bigChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var bigChartDatasetOptions = {
  fill: true,
  borderColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primary,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primary,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    StatsCard: _components_Cards_StatsCard__WEBPACK_IMPORTED_MODULE_6__["default"],
    TaskList: _TaskList__WEBPACK_IMPORTED_MODULE_3__["default"],
    CountryMapCard: _CountryMapCard__WEBPACK_IMPORTED_MODULE_5__["default"],
    UserTable: _UserTable__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      statsCards: [{
        title: '150GB',
        subTitle: 'Number',
        type: 'warning',
        icon: 'tim-icons icon-chat-33',
        footer: '<i class="tim-icons icon-refresh-01"></i> Update Now'
      }, {
        title: '+45K',
        subTitle: 'Followers',
        type: 'primary',
        icon: 'tim-icons icon-shape-star',
        footer: '<i class="tim-icons icon-sound-wave"></i></i> Last Research'
      }, {
        title: '150,000',
        subTitle: 'Users',
        type: 'info',
        icon: 'tim-icons icon-single-02',
        footer: '<i class="tim-icons icon-trophy"></i> Customer feedback'
      }, {
        title: '23',
        subTitle: 'Errors',
        type: 'danger',
        icon: 'tim-icons icon-molecule-40',
        footer: '<i class="tim-icons icon-watch-time"></i> In the last hours'
      }],
      bigLineChart: {
        activeIndex: 0,
        chartData: {
          datasets: [_objectSpread(_objectSpread({}, bigChartDatasetOptions), {}, {
            data: bigChartData[0]
          })],
          labels: bigChartLabels
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["purpleChartOptions"],
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      },
      purpleLineChart: {
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["purpleChartOptions"],
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [{
            label: 'Data',
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 100, 70, 80, 120, 80]
          }]
        },
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
      },
      greenLineChart: {
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["greenChartOptions"],
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
          datasets: [{
            label: 'My First dataset',
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [90, 27, 60, 12, 80]
          }]
        },
        gradientColors: ['rgba(66,134,121,0.15)', 'rgba(66,134,121,0.0)', 'rgba(66,134,121,0)'],
        gradientStops: [1, 0.4, 0]
      },
      blueBarChart: {
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartOptions"],
        chartData: {
          labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
          datasets: [{
            label: 'Countries',
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [53, 20, 10, 80, 100, 45]
          }]
        },
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_7__["default"].colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      }
    };
  },
  computed: {
    enableRTL: function enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL: function isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories: function bigLineChartCategories() {
      return [{
        name: 'Accounts',
        icon: 'tim-icons icon-single-02'
      }, {
        name: 'Purchases',
        icon: 'tim-icons icon-gift-2'
      }, {
        name: 'Sessions',
        icon: 'tim-icons icon-tap-02'
      }];
    }
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [_objectSpread(_objectSpread({}, bigChartDatasetOptions), {}, {
          data: bigChartData[index]
        })],
        labels: bigChartLabels
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.i18n = this.$i18n;

    if (this.enableRTL) {
      this.i18n.locale = 'ar';
      this.$rtl.enableRTL();
    }

    this.initBigChart(0);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = 'en';
      this.$rtl.disableRTL();
    }
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Dashboard.vue?vue&type=template&id=a0719380&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Dashboard.vue?vue&type=template&id=a0719380& ***!
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
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-sm-6",
                      class: _vm.isRTL ? "text-right" : "text-left"
                    },
                    [
                      _c("h5", { staticClass: "card-category" }, [
                        _vm._v("Total shipments")
                      ]),
                      _vm._v(" "),
                      _c("h2", { staticClass: "card-title" }, [
                        _vm._v("Performance")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6 d-flex d-sm-block" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group btn-group-toggle",
                        class: _vm.isRTL ? "float-left" : "float-right",
                        attrs: { "data-toggle": "buttons" }
                      },
                      _vm._l(_vm.bigLineChartCategories, function(
                        option,
                        index
                      ) {
                        return _c(
                          "label",
                          {
                            key: option.name,
                            staticClass: "btn btn-sm btn-primary btn-simple",
                            class: {
                              active: _vm.bigLineChart.activeIndex === index
                            },
                            attrs: { id: index }
                          },
                          [
                            _c("input", {
                              attrs: {
                                type: "radio",
                                name: "options",
                                autocomplete: "off"
                              },
                              domProps: {
                                checked: _vm.bigLineChart.activeIndex === index
                              },
                              on: {
                                click: function($event) {
                                  return _vm.initBigChart(index)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "d-none d-sm-block" }, [
                              _vm._v(_vm._s(option.name))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "d-block d-sm-none" }, [
                              _c("i", { class: option.icon })
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    ref: "bigChart",
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-data": _vm.bigLineChart.chartData,
                      "gradient-colors": _vm.bigLineChart.gradientColors,
                      "gradient-stops": _vm.bigLineChart.gradientStops,
                      "extra-options": _vm.bigLineChart.extraOptions
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
      _vm._l(_vm.statsCards, function(card) {
        return _c(
          "div",
          { key: card.title, staticClass: "col-lg-3 col-md-6" },
          [
            _c(
              "stats-card",
              {
                attrs: {
                  title: card.title,
                  "sub-title": card.subTitle,
                  type: card.type,
                  icon: card.icon
                }
              },
              [
                _c("div", {
                  attrs: { slot: "footer" },
                  domProps: { innerHTML: _vm._s(card.footer) },
                  slot: "footer"
                })
              ]
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-4", class: { "text-right": _vm.isRTL } },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v("Total Shipments")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons icon-bell-55 text-primary "
                  }),
                  _vm._v(" 763,215\n        ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-data": _vm.purpleLineChart.chartData,
                      "gradient-colors": _vm.purpleLineChart.gradientColors,
                      "gradient-stops": _vm.purpleLineChart.gradientStops,
                      "extra-options": _vm.purpleLineChart.extraOptions
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
        { staticClass: "col-lg-4", class: { "text-right": _vm.isRTL } },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v("Daily Sales")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons icon-delivery-fast text-info "
                  }),
                  _vm._v(" 3,500€\n        ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("bar-chart", {
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-data": _vm.blueBarChart.chartData,
                      "gradient-stops": _vm.blueBarChart.gradientStops,
                      "extra-options": _vm.blueBarChart.extraOptions
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
        { staticClass: "col-lg-4", class: { "text-right": _vm.isRTL } },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v("Completed tasks")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", { staticClass: "tim-icons icon-send text-success " }),
                  _vm._v(" 12,100K\n        ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-data": _vm.greenLineChart.chartData,
                      "gradient-stops": _vm.greenLineChart.gradientStops,
                      "extra-options": _vm.greenLineChart.extraOptions
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
        { staticClass: "col-lg-5" },
        [
          _c(
            "card",
            {
              attrs: {
                type: "tasks",
                "header-classes": { "text-right": _vm.isRTL }
              }
            },
            [
              _c(
                "template",
                { slot: "header" },
                [
                  _c("h6", { staticClass: "title d-inline" }, [
                    _vm._v("Tasks (5)")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-category d-inline" }, [
                    _vm._v("Today")
                  ]),
                  _vm._v(" "),
                  _c(
                    "base-dropdown",
                    {
                      class: { "float-left": _vm.isRTL },
                      attrs: {
                        "menu-on-right": "",
                        tag: "div",
                        "title-classes": "btn btn-link btn-icon"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "tim-icons icon-settings-gear-63",
                        attrs: { slot: "title" },
                        slot: "title"
                      }),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#pablo" }
                        },
                        [_vm._v(" Action ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#pablo" }
                        },
                        [_vm._v(" Another action ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#pablo" }
                        },
                        [_vm._v(" Something else ")]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-full-width table-responsive" },
                [_c("task-list")],
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
        { staticClass: "col-lg-7" },
        [
          _c(
            "card",
            {
              staticClass: "card",
              attrs: { "header-classes": { "text-right": _vm.isRTL } }
            },
            [
              _c(
                "h5",
                {
                  staticClass: "card-title",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [_vm._v("Management table")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [_c("user-table")],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [_c("country-map-card")], 1)
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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



/***/ }),

/***/ "./resources/js/pages/Dashboard/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Dashboard/Dashboard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_a0719380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=a0719380& */ "./resources/js/pages/Dashboard/Dashboard.vue?vue&type=template&id=a0719380&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_a0719380___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_a0719380___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/Dashboard.vue?vue&type=template&id=a0719380&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Dashboard.vue?vue&type=template&id=a0719380& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_a0719380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=a0719380& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Dashboard.vue?vue&type=template&id=a0719380&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_a0719380___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_a0719380___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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