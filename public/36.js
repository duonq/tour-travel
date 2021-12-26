(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourFeatured.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/ListTourFeatured.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tour_TourItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/tour/TourItem */ "./resources/js/components/tour/TourItem.vue");
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
    TourItem: _components_tour_TourItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    toursFeatured: {
      type: Array,
      "default": []
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourNew.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/ListTourNew.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tour_TourItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/tour/TourItem */ "./resources/js/components/tour/TourItem.vue");
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
    TourItem: _components_tour_TourItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    toursNew: {
      type: Array,
      "default": []
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home_ListTourNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/home/ListTourNew */ "./resources/js/components/home/ListTourNew.vue");
/* harmony import */ var _components_home_ListTourFeatured__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/home/ListTourFeatured */ "./resources/js/components/home/ListTourFeatured.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ListTourNew: _components_home_ListTourNew__WEBPACK_IMPORTED_MODULE_0__["default"],
    ListTourFeatured: _components_home_ListTourFeatured__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: {
    title: "Trang chủ"
  },
  data: function data() {
    return {
      stops: [{
        icon: "/img/icon(1).png",
        h6: "Restaurants",
        p: "Good place to eat, cool, good service"
      }, {
        icon: "/img/icon(2).png",
        h6: "sightseeing",
        p: "Beautiful places to visit, enjoy a fun trip"
      }, {
        icon: "/img/icon(3).png",
        h6: "shops",
        p: "Shopping, souvenirs, reasonable prices"
      }, {
        icon: "/img/icon(4).png",
        h6: "hotel",
        p: "Good service, cool place, easy to travel"
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("home", ["slides", "topRatings", "toursNew", "toursFeatured", "loadingSlide", "loadingRating", "loadingToursNew", "loadingToursFeatured"])),
  watch: {
    $route: "fetch"
  },
  created: function created() {
    this.fetch();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("home", ["fetchSlides", "fetchTopRating", "fetchToursNew", "fetchToursFeatured"]), {
    fetch: function fetch() {
      Promise.all([this.fetchSlides(), this.fetchTopRating(), this.fetchToursFeatured(), this.fetchToursNew()]);
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.tour-title[data-v-5438f7ac] {\n  font-size: 24px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.tours-banner[data-v-5438f7ac] {\n  position: relative;\n  margin: 0 -50px;\n}\n.ant-carousel .slick-slide[data-v-5438f7ac] {\n  text-align: center;\n  height: 100%;\n  line-height: 100%;\n  background: #364d79;\n  overflow: hidden;\n}\n.ant-carousel .custom-slick-arrow[data-v-5438f7ac] {\n  width: 25px;\n  height: 25px;\n  font-size: 25px;\n  color: #fff;\n  background-color: rgba(31, 45, 61, 0.11);\n  opacity: 0.3;\n}\n.ant-carousel .custom-slick-arrow[data-v-5438f7ac]:before {\n  display: none;\n}\n.ant-carousel .custom-slick-arrow[data-v-5438f7ac]:hover {\n  opacity: 0.5;\n}\n.ant-carousel .slick-slide h3[data-v-5438f7ac] {\n  color: #fff;\n}\nimg[data-v-5438f7ac] {\n  width: auto !important;\n}\n.offer__title[data-v-5438f7ac] {\n  text-align: center;\n  padding-top: 107px;\n  margin: 36px 56px;\n  padding-bottom: 20px;\n}\n.offer__title--size-ms[data-v-5438f7ac] {\n  font-family: revert;\n  font-size: 16px;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.7);\n  max-width: 180px;\n  margin: 15px auto;\n}\n.offer__title img[data-v-5438f7ac]:hover {\n  cursor: pointer;\n  transform: rotate(15deg);\n}\n.offer__title--size-m[data-v-5438f7ac] {\n  font-family: monospace;\n  font-size: 24px;\n  line-height: 27px;\n  max-width: 742px;\n  text-align: justify;\n  margin: 13px auto 50px !important;\n  color: rgba(0, 0, 0, 0.6);\n}\n.offer__title h1[data-v-5438f7ac] {\n  color: #000 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourFeatured.vue?vue&type=template&id=659c5b0e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/ListTourFeatured.vue?vue&type=template&id=659c5b0e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "a-col",
    { style: { marginTop: "16px" } },
    [
      _c(
        "a-row",
        { attrs: { gutter: 16 } },
        _vm._l(_vm.toursFeatured, function(tour) {
          return _c("tour-item", { key: tour.id, attrs: { data: tour } })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourNew.vue?vue&type=template&id=0a1b34b6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/ListTourNew.vue?vue&type=template&id=0a1b34b6& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "a-col",
    { style: { marginTop: "16px" } },
    [
      _c(
        "a-row",
        { attrs: { gutter: 16 } },
        _vm._l(_vm.toursNew, function(tour) {
          return _c("tour-item", { key: tour.id, attrs: { data: tour } })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=template&id=5438f7ac&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Home.vue?vue&type=template&id=5438f7ac&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    [
      _vm.loadingSlide || _vm.loadingRating
        ? _c("loading-full-screen")
        : _vm._e(),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "tours-banner" },
        [
          _c("a-carousel", { attrs: { arrows: "" } }, [
            _c(
              "div",
              {
                staticClass: "custom-slick-arrow",
                staticStyle: { left: "10px", zindex: "1" },
                attrs: { slot: "prevArrow" },
                slot: "prevArrow"
              },
              [_c("a-icon", { attrs: { type: "left-circle" } })],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "custom-slick-arrow",
                staticStyle: { right: "10px" },
                attrs: { slot: "nextArrow" },
                slot: "nextArrow"
              },
              [_c("a-icon", { attrs: { type: "right-circle" } })],
              1
            ),
            _vm._v(" "),
            _c("div", [_c("img", { attrs: { src: "/img/slide_banner.png" } })]),
            _vm._v(" "),
            _c("div", [
              _c("img", { attrs: { src: "/img/slide_banner2.png" } })
            ]),
            _vm._v(" "),
            _c("div", [_c("img", { attrs: { src: "/img/slide_banner3.png" } })])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("section", [
        _c(
          "div",
          { staticClass: "offer__title" },
          [
            _c("h3", [_vm._v("Dịch vụ")]),
            _vm._v(" "),
            _c("p", { staticClass: "offer__title--size-m" }, [
              _vm._v(
                "\n        Tham gia với chúng tôi! để nhận ưu đãi đặc biệt lên đến 50% và tích\n        lũy cho những chuyến đi tiếp theo\n      "
              )
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              _vm._l(_vm.stops, function(stop) {
                return _c(
                  "a-col",
                  {
                    key: stop.icon,
                    staticClass: "text-center",
                    attrs: { span: 6 }
                  },
                  [
                    _c("img", {
                      staticClass: "mx-auto",
                      attrs: { src: stop.icon }
                    }),
                    _vm._v(" "),
                    _c("h6", [_vm._v(_vm._s(stop.h6))]),
                    _vm._v(" "),
                    _c("p", { staticClass: "offer__title--size-ms" }, [
                      _vm._v(_vm._s(stop.p))
                    ])
                  ]
                )
              }),
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "section",
        [
          _c(
            "a-row",
            [
              _c("a-divider", [
                _c("h3", { staticClass: "tour-title" }, [_vm._v("Tour mới")])
              ]),
              _vm._v(" "),
              _c("list-tour-new", { attrs: { toursNew: _vm.toursNew } }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: { "margin-top": "24px", "text-align": "center" }
                },
                [
                  _c(
                    "a-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.$router.push({ name: "tours" })
                        }
                      }
                    },
                    [_vm._v("Xem thêm")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-row",
            [
              _c("a-divider", [
                _c("h3", { staticClass: "tour-title" }, [
                  _vm._v("Tour nổi bật")
                ])
              ]),
              _vm._v(" "),
              _c("list-tour-featured", {
                attrs: { toursFeatured: _vm.toursFeatured }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: { "margin-top": "24px", "text-align": "center" }
                },
                [
                  _c(
                    "a-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.$router.push({ name: "tours" })
                        }
                      }
                    },
                    [_vm._v("Xem thêm")]
                  )
                ],
                1
              )
            ],
            1
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

/***/ "./resources/js/components/home/ListTourFeatured.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/home/ListTourFeatured.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListTourFeatured_vue_vue_type_template_id_659c5b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListTourFeatured.vue?vue&type=template&id=659c5b0e& */ "./resources/js/components/home/ListTourFeatured.vue?vue&type=template&id=659c5b0e&");
/* harmony import */ var _ListTourFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListTourFeatured.vue?vue&type=script&lang=js& */ "./resources/js/components/home/ListTourFeatured.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListTourFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListTourFeatured_vue_vue_type_template_id_659c5b0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListTourFeatured_vue_vue_type_template_id_659c5b0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/ListTourFeatured.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/ListTourFeatured.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/home/ListTourFeatured.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListTourFeatured.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourFeatured.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourFeatured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/ListTourFeatured.vue?vue&type=template&id=659c5b0e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/home/ListTourFeatured.vue?vue&type=template&id=659c5b0e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourFeatured_vue_vue_type_template_id_659c5b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListTourFeatured.vue?vue&type=template&id=659c5b0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourFeatured.vue?vue&type=template&id=659c5b0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourFeatured_vue_vue_type_template_id_659c5b0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourFeatured_vue_vue_type_template_id_659c5b0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/ListTourNew.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/home/ListTourNew.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListTourNew_vue_vue_type_template_id_0a1b34b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListTourNew.vue?vue&type=template&id=0a1b34b6& */ "./resources/js/components/home/ListTourNew.vue?vue&type=template&id=0a1b34b6&");
/* harmony import */ var _ListTourNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListTourNew.vue?vue&type=script&lang=js& */ "./resources/js/components/home/ListTourNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListTourNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListTourNew_vue_vue_type_template_id_0a1b34b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListTourNew_vue_vue_type_template_id_0a1b34b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/ListTourNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/ListTourNew.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/home/ListTourNew.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListTourNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/ListTourNew.vue?vue&type=template&id=0a1b34b6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/home/ListTourNew.vue?vue&type=template&id=0a1b34b6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourNew_vue_vue_type_template_id_0a1b34b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListTourNew.vue?vue&type=template&id=0a1b34b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/ListTourNew.vue?vue&type=template&id=0a1b34b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourNew_vue_vue_type_template_id_0a1b34b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTourNew_vue_vue_type_template_id_0a1b34b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/user/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_5438f7ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=5438f7ac&scoped=true& */ "./resources/js/pages/user/Home.vue?vue&type=template&id=5438f7ac&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_5438f7ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true& */ "./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_5438f7ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_5438f7ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5438f7ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/user/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_5438f7ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=style&index=0&id=5438f7ac&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_5438f7ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_5438f7ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_5438f7ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_5438f7ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_5438f7ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/user/Home.vue?vue&type=template&id=5438f7ac&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/user/Home.vue?vue&type=template&id=5438f7ac&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5438f7ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=5438f7ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Home.vue?vue&type=template&id=5438f7ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5438f7ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_5438f7ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);