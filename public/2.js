(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/TourItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    col: {
      type: Object,
      "default": function _default() {
        return {
          xs: 24,
          sm: 12,
          md: 8,
          lg: 8
        };
      }
    }
  },
  computed: {
    ratingRounded: function ratingRounded() {
      return Math.round(this.data.avg_rating * 100) / 100;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.img-tour[data-v-46819372] {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  transition: 0.5s ease;\n  border-radius: 20px;\n}\nimg.img-tour[data-v-46819372]:hover {\n  opacity: 0.55;\n  cursor: pointer;\n  background-color: beige;\n}\n.content[data-v-46819372] {\n  margin-top: 8px;\n  margin-bottom: -4px;\n}\n.content-rating[data-v-46819372] {\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.content-price[data-v-46819372] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.content-price span[data-v-46819372] {\n  color: #eda378;\n}\nh6[data-v-46819372] {\n  margin-top: 0 !important;\n}\n.mb-16[data-v-46819372] {\n  margin-bottom: 16px;\n}\n.description[data-v-46819372] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.place[data-v-46819372] {\n  margin-bottom: 10px;\n  align-items: center;\n}\n.place i[data-v-46819372] {\n  font-size: 18px;\n  margin-right: 10px;\n  color: #8592b0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=template&id=46819372&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/TourItem.vue?vue&type=template&id=46819372&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "mb-16",
      attrs: { xs: _vm.col.xs, sm: _vm.col.sm, md: _vm.col.md, lg: _vm.col.lg }
    },
    [
      _c(
        "router-link",
        {
          attrs: { to: { name: "tours.show", params: { slug: _vm.data.slug } } }
        },
        [
          _c(
            "a-card",
            {
              staticStyle: { "border-radius": "20px !important" },
              attrs: {
                bordered: false,
                bodyStyle: { padding: "25px !important" },
                hoverable: ""
              }
            },
            [
              _c("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: _vm.data.image,
                    expression: "data.image"
                  }
                ],
                staticClass: "img-tour",
                attrs: { slot: "cover", alt: _vm.data.name },
                slot: "cover"
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex place" },
                [
                  _c("a-icon", { attrs: { type: "environment" } }),
                  _vm._v(" "),
                  _c("h6", [_vm._v(_vm._s(_vm.data.name))])
                ],
                1
              ),
              _vm._v(" "),
              _c("template", { slot: "description" }, [
                _c("div", { staticClass: "description" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.data.from_place_name) +
                      " đến\n          " +
                      _vm._s(_vm.data.to_place_name) +
                      "\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "content" }, [
                _c(
                  "div",
                  { staticClass: "content-rating" },
                  [
                    _c("a-rate", {
                      attrs: {
                        defaultValue: _vm.ratingRounded,
                        disabled: "",
                        allowHalf: ""
                      }
                    }),
                    _vm._v(
                      "\n          | " +
                        _vm._s(_vm.data.count_rating) +
                        " đánh giá\n        "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex justify-space-between" }, [
                  _c("p", { staticClass: "content-price" }, [
                    _vm._v("\n            Giá:\n            "),
                    _c("span", [
                      _vm._v(
                        " " +
                          _vm._s(_vm._f("currencyVN")(_vm.data.price_default))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "content-price" }, [
                    _vm._v("Xem thêm ->")
                  ])
                ])
              ])
            ],
            2
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

/***/ "./resources/js/components/tour/TourItem.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/tour/TourItem.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TourItem_vue_vue_type_template_id_46819372_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourItem.vue?vue&type=template&id=46819372&scoped=true& */ "./resources/js/components/tour/TourItem.vue?vue&type=template&id=46819372&scoped=true&");
/* harmony import */ var _TourItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourItem.vue?vue&type=script&lang=js& */ "./resources/js/components/tour/TourItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TourItem_vue_vue_type_style_index_0_id_46819372_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true& */ "./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TourItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TourItem_vue_vue_type_template_id_46819372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TourItem_vue_vue_type_template_id_46819372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46819372",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tour/TourItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tour/TourItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/tour/TourItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TourItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_style_index_0_id_46819372_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=style&index=0&id=46819372&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_style_index_0_id_46819372_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_style_index_0_id_46819372_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_style_index_0_id_46819372_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_style_index_0_id_46819372_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_style_index_0_id_46819372_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/tour/TourItem.vue?vue&type=template&id=46819372&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/tour/TourItem.vue?vue&type=template&id=46819372&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_template_id_46819372_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TourItem.vue?vue&type=template&id=46819372&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/TourItem.vue?vue&type=template&id=46819372&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_template_id_46819372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourItem_vue_vue_type_template_id_46819372_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);