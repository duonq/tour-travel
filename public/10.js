(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
      pages: [{
        title: "Trang chủ"
      }, {
        title: "Tours"
      }, {
        title: "Giới thiệu"
      }, {
        title: "Liên hệ"
      }, {
        title: "Blog"
      }],
      contacts: [{
        icon: "environment",
        name: "Bình Giang, Hải Dương",
        link: "https://goo.gl/maps/Wk8ZfN3UUy3XpShQA"
      }, {
        icon: "phone",
        name: "033 706 7403",
        link: "033 706 7403"
      }, {
        icon: "mail",
        name: "ntlduong99@gmail",
        link: "mailto:ntlduong99@gmail.com"
      }, {
        icon: "skype",
        name: "travel.tour",
        link: "skype:live:.cid.85a5edae5f4fb96b"
      }, {
        icon: "instagram",
        name: "travel.tour.mit",
        link: "https://www.instagram.com/duong.mit.9/?hl=vi"
      }],
      follows: [{
        icon: "facebook",
        link: "https://www.facebook.com/duong.mit.201"
      }, {
        icon: "twitter",
        link: "https://twitter.com/home"
      }, {
        icon: "google",
        link: "https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1"
      }, {
        icon: "behance",
        link: "https://www.behance.com/"
      }, {
        icon: "linkedin",
        link: "https://www.linkedin.com/feed/"
      }],
      images: [{
        picture: "/img/sport31.png"
      }, {
        picture: "/img/sport21.png"
      }, {
        picture: "/img/image2.png"
      }, {
        picture: "/img/image3.png"
      }, {
        picture: "/img/image4.png"
      }, {
        picture: "/img/image5.png"
      }, {
        picture: "/img/image6.png"
      }, {
        picture: "/img/sec6_img21.png"
      }, {
        picture: "/img/BT1.png"
      }]
    };
  },
  methods: {
    getCurrentYear: function getCurrentYear() {
      return new Date().getFullYear();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_HeaderAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/HeaderAvatar */ "./resources/js/layouts/shared/HeaderAvatar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import ModalFeedback from "@/components/modal/Feedback";
// import HeaderNotification from "./shared/HeaderNotification";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HeaderAvatar: _shared_HeaderAvatar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      visibleModalFeedback: false
    };
  },
  computed: {
    pageManager: function pageManager() {
      if (this.$auth.isOwner) return "owner.dashboard";
      if (this.$auth.isAdmin) return "admin.dashboard";
    }
  },
  methods: {
    openModalFeedback: function openModalFeedback() {
      this.visibleModalFeedback = true;
    },
    closeModalFeedback: function closeModalFeedback() {
      this.visibleModalFeedback = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalHeader */ "./resources/js/layouts/GlobalHeader.vue");
/* harmony import */ var _GlobalFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalFooter */ "./resources/js/layouts/GlobalFooter.vue");
//
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
    GlobalHeader: _GlobalHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    GlobalFooter: _GlobalFooter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    var fb = document.getElementById("fb-root");

    if (fb) {
      fb.removeAttribute("style");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("auth", ["logout"]))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer[data-v-63555082] {\n  background-color: #7786a7e5;\n}\n.footer-title[data-v-63555082] {\n  font-family: Courier Prime;\n  font-size: 16px;\n  line-height: 26px;\n  color: #ffffff;\n  margin-top: 48px;\n  padding-right: 30px;\n}\n.footer-link[data-v-63555082] {\n  margin-top: 32px;\n  list-style-type: none;\n}\n.footer a[data-v-63555082] {\n  color: #fff !important;\n  font-family: monospace;\n  font-size: 18px;\n  line-height: 26px;\n  align-items: center;\n}\n.footer a[data-v-63555082]:hover {\n  color: #ceeffb !important;\n}\n.footer-follow__icon[data-v-63555082] {\n  line-height: 30px;\n  background-color: #e5e5e5;\n  border-radius: 50%;\n  margin-right: 15px;\n  width: 30px;\n  height: 30px;\n}\n.footer-follow__icon i[data-v-63555082] {\n  color: rgba(96, 120, 171, 0.5);\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  width: 100%;\n}\n.footer-follow__icon[data-v-63555082]:hover {\n  border-radius: 50%;\n  background-color: #6078ab;\n}\n.footer-follow__icon:hover i[data-v-63555082] {\n  color: #f8a323;\n}\n.footer-follow__name[data-v-63555082] {\n  margin-left: 25px;\n}\n.footer-follow .rounded[data-v-63555082] {\n  width: 35px;\n  height: 35px;\n  background-color: #6078ab;\n  transition: 0.3s ease;\n  margin-right: 10px;\n  border-radius: 3px;\n}\n.footer-follow .rounded[data-v-63555082]:hover {\n  margin-top: -5px;\n}\n.footer-follow .rounded[data-v-63555082]:nth-child(2) {\n  background-color: #78e4f2;\n}\n.footer-follow .rounded[data-v-63555082]:nth-child(3) {\n  background-color: #e26d5f;\n}\n.footer-follow .rounded[data-v-63555082]:nth-child(4) {\n  background-color: #d14d54;\n}\n.footer-follow .rounded[data-v-63555082]:nth-child(5) {\n  background-color: #3c90b8;\n}\n.footer-follow .rounded i[data-v-63555082] {\n  font-size: 16px;\n  line-height: 35px;\n  text-align: center;\n  width: 100%;\n}\nh5[data-v-63555082] {\n  color: #fff !important;\n}\n.bv-example-row[data-v-63555082] {\n  padding: 50px 0 150px !important;\n}\n.d-table[data-v-63555082] {\n  margin: 20px 0;\n}\n.footer-title[data-v-63555082] {\n  font-size: 18px;\n  font-family: monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header[data-v-f6f09718] {\n  position: fixed;\n  background: #6078AB;\n  box-shadow: 0px 1px 10px 0 rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  width: 100%;\n}\n@media (max-width: 576px) {\n#header[data-v-f6f09718] {\n    padding-right: 15px !important;\n    padding-left: 15px !important;\n}\n}\n@media (min-width: 576px) {\n#header[data-v-f6f09718] {\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n}\n}\n@media (min-width: 768px) {\n#header[data-v-f6f09718] {\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n}\n}\n@media (min-width: 992px) {\n#header[data-v-f6f09718] {\n    padding-right: 35px !important;\n    padding-left: 35px !important;\n}\n}\n@media (min-width: 1200px) {\n#header[data-v-f6f09718] {\n    padding-right: 50px !important;\n    padding-left: 50px !important;\n}\n}\n#header .menu-right[data-v-f6f09718] {\n  float: right;\n  margin-right: 0;\n  margin-left: auto;\n}\n.ant-menu[data-v-f6f09718] {\n  font-size: 15px;\n  font-weight: 500;\n  background-color: #6078AB !important;\n  color: #fff;\n}\n.ant-menu-horizontal[data-v-f6f09718] {\n  border-bottom: none;\n}\n.ant-menu-horizontal .ant-menu-item-selected[data-v-f6f09718] {\n  border-bottom: 2px solid #1890ff;\n}\n.ant-menu-horizontal > .ant-menu-item > a[data-v-f6f09718] {\n  color: #fff !important;\n}\n.ant-menu-horizontal > .ant-menu-item > a[data-v-f6f09718]:hover {\n  color: #1890ff !important;\n}\n.ant-menu-item[data-v-f6f09718]:hover {\n  background: #DFE9ED !important;\n}\n.ant-btn[data-v-f6f09718] {\n  background: #8da8e4;\n  border: none !important;\n}\n.ant-btn[data-v-f6f09718]:hover {\n  background: #6276a0 !important;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#global-layout[data-v-23063691] {\n  margin-top: 64px;\n  margin-bottom: 32px;\n  min-height: calc(100vh - 165px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=template&id=63555082&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalFooter.vue?vue&type=template&id=63555082&scoped=true& ***!
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
  return _c("a-layout-footer", { staticClass: "footer" }, [
    _c("div", [
      _c(
        "div",
        { staticClass: "bv-example-row container" },
        [
          _c(
            "a-row",
            [
              _c("a-col", { attrs: { span: 8 } }, [
                _c("div", { staticClass: "footer__logo" }, [
                  _c("h1", [_vm._v("Travel .")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "footer-title" }, [
                    _vm._v(
                      "\n              Luôn mang đến cho bạn những trải nghiệm tuyệt vời bên những\n              người thân yêu Hãy chia sẻ và tận hưởng nó\n            "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("a-col", { attrs: { span: 8 } }, [
                _c(
                  "div",
                  { staticClass: "footer-follow" },
                  [
                    _c("h5", [_vm._v("contact us")]),
                    _vm._v(" "),
                    _vm._l(_vm.contacts, function(contact) {
                      return _c(
                        "div",
                        { key: contact.name, staticClass: "d-table" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "footer-follow__icon d-inline-block"
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: contact.link,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c("a-icon", {
                                    attrs: { type: contact.icon }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "footer-follow__name d-table-cell" },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: contact.link,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(contact.name) +
                                      "\n                "
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between w-75" },
                      _vm._l(_vm.follows, function(follow) {
                        return _c(
                          "div",
                          { key: follow.icon, staticClass: "rounded" },
                          [
                            _c(
                              "a",
                              {
                                attrs: { href: follow.link, target: "_blank" }
                              },
                              [_c("a-icon", { attrs: { type: follow.icon } })],
                              1
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("a-col", { attrs: { span: 8 } }, [
                _c(
                  "div",
                  { staticClass: "footer__ins" },
                  [
                    _c("h5", [_vm._v("Instagram")]),
                    _vm._v(" "),
                    _c(
                      "a-row",
                      { staticClass: "mx-auto" },
                      _vm._l(_vm.images, function(img) {
                        return _c(
                          "a-col",
                          {
                            key: img.picture,
                            staticStyle: { margin: "10px 5px" },
                            attrs: { span: 7 }
                          },
                          [
                            _c("div", { staticClass: "zoom" }, [
                              _c("img", { attrs: { src: img.picture } })
                            ])
                          ]
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true& ***!
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
    "div",
    [
      _c(
        "a-layout-header",
        { attrs: { id: "header" } },
        [
          _c(
            "a-row",
            [
              _c(
                "a-col",
                { attrs: { xs: 4, sm: 4, md: 12, lg: 12 } },
                [
                  _c(
                    "a-row",
                    { attrs: { gutter: { xs: 0, sm: 8, md: 24, lg: 24 } } },
                    [
                      _c(
                        "a-col",
                        { attrs: { xs: 24, sm: 24, md: 5, lg: 5 } },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "home" } } },
                            [_c("h1", [_vm._v("Travel.")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-col",
                        { attrs: { xs: 0, sm: 0, md: 19, lg: 19 } },
                        [
                          _c(
                            "a-menu",
                            {
                              style: { lineHeight: "62px" },
                              attrs: {
                                mode: "horizontal",
                                selectedKeys: [_vm.$route.name]
                              }
                            },
                            [
                              _c(
                                "a-menu-item",
                                { key: "home" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "home" } } },
                                    [_vm._v("Trang chủ")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-menu-item",
                                { key: "tours" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "tours" } } },
                                    [_vm._v("Tour du lịch")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-menu-item",
                                { key: "about" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "about" } } },
                                    [_vm._v("Giới thiệu")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-menu-item",
                                { key: "contact" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "contact" } } },
                                    [_vm._v("Liên hệ")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-menu-item",
                                { key: "blog" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "blog" } } },
                                    [_vm._v("Blog")]
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
                ],
                1
              ),
              _vm._v(" "),
              _c("a-col", { attrs: { xs: 20, sm: 20, md: 12, lg: 12 } }, [
                _c("div", { staticClass: "menu-right" }, [
                  !_vm.$auth.loggedIn && !_vm.$auth.user
                    ? _c(
                        "div",
                        [
                          _c(
                            "a-button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.$router.push({ name: "login" })
                                }
                              }
                            },
                            [_vm._v("Đăng nhập")]
                          )
                        ],
                        1
                      )
                    : _c(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                          }
                        },
                        [
                          _vm.$auth.isAdmin
                            ? _c(
                                "a-button",
                                {
                                  staticStyle: { marginRight: "24px" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push({
                                        name: _vm.pageManager
                                      })
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              Quản trị\n            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("header-avatar")
                        ],
                        1
                      )
                ])
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=template&id=23063691&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/GlobalLayout.vue?vue&type=template&id=23063691&scoped=true& ***!
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
    "a-layout",
    { ref: "container", style: { overflowY: "auto" } },
    [
      _c("global-header"),
      _vm._v(" "),
      _c(
        "a-layout-content",
        { staticClass: "tb-margin", attrs: { id: "global-layout" } },
        [_c("router-view")],
        1
      ),
      _vm._v(" "),
      _c("global-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=template&id=2127ef3c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=template&id=2127ef3c& ***!
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
    "a-dropdown",
    {
      staticStyle: {
        display: "inline-block",
        height: "100%",
        "vertical-align": "initial"
      },
      attrs: { placement: "bottomRight", trigger: ["click"] }
    },
    [
      _c(
        "div",
        { style: { cursor: "pointer" } },
        [
          _c("span", { staticStyle: { marginRight: "6px" } }, [
            _c("b", [_vm._v(_vm._s(_vm.$auth.user.name))])
          ]),
          _vm._v(" "),
          _vm.$auth.user.avatar
            ? _c("a-avatar", {
                attrs: { src: _vm.$auth.user.avatar, size: 32, shape: "circle" }
              })
            : _c("a-avatar", { attrs: { icon: "user", size: 32 } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-menu",
        {
          staticStyle: { width: "150px" },
          attrs: { slot: "overlay" },
          slot: "overlay"
        },
        [
          _c(
            "a-menu-item",
            [
              _c(
                "router-link",
                { attrs: { to: { name: "profile.info" } } },
                [
                  _c("a-icon", {
                    style: { marginRight: "5px" },
                    attrs: { type: "user" }
                  }),
                  _vm._v("Trang cá nhân")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("a-menu-divider"),
          _vm._v(" "),
          _c("a-menu-item", [
            _c(
              "a",
              { on: { click: _vm.logout } },
              [
                _c("a-icon", {
                  style: { marginRight: "5px" },
                  attrs: { type: "logout" }
                }),
                _vm._v("Đăng xuất ")
              ],
              1
            )
          ])
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

/***/ "./resources/js/layouts/GlobalFooter.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/GlobalFooter.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalFooter_vue_vue_type_template_id_63555082_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalFooter.vue?vue&type=template&id=63555082&scoped=true& */ "./resources/js/layouts/GlobalFooter.vue?vue&type=template&id=63555082&scoped=true&");
/* harmony import */ var _GlobalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalFooter.vue?vue&type=script&lang=js& */ "./resources/js/layouts/GlobalFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GlobalFooter_vue_vue_type_style_index_0_id_63555082_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true& */ "./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GlobalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlobalFooter_vue_vue_type_template_id_63555082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GlobalFooter_vue_vue_type_template_id_63555082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63555082",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/GlobalFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/GlobalFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/GlobalFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_style_index_0_id_63555082_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=style&index=0&id=63555082&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_style_index_0_id_63555082_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_style_index_0_id_63555082_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_style_index_0_id_63555082_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_style_index_0_id_63555082_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_style_index_0_id_63555082_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/GlobalFooter.vue?vue&type=template&id=63555082&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/layouts/GlobalFooter.vue?vue&type=template&id=63555082&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_template_id_63555082_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalFooter.vue?vue&type=template&id=63555082&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalFooter.vue?vue&type=template&id=63555082&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_template_id_63555082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalFooter_vue_vue_type_template_id_63555082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/GlobalHeader.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/GlobalHeader.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalHeader_vue_vue_type_template_id_f6f09718_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true& */ "./resources/js/layouts/GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true&");
/* harmony import */ var _GlobalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalHeader.vue?vue&type=script&lang=js& */ "./resources/js/layouts/GlobalHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GlobalHeader_vue_vue_type_style_index_0_id_f6f09718_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true& */ "./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GlobalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlobalHeader_vue_vue_type_template_id_f6f09718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GlobalHeader_vue_vue_type_template_id_f6f09718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f6f09718",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/GlobalHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/GlobalHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/GlobalHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_style_index_0_id_f6f09718_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=style&index=0&id=f6f09718&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_style_index_0_id_f6f09718_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_style_index_0_id_f6f09718_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_style_index_0_id_f6f09718_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_style_index_0_id_f6f09718_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_style_index_0_id_f6f09718_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/layouts/GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_template_id_f6f09718_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalHeader.vue?vue&type=template&id=f6f09718&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_template_id_f6f09718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalHeader_vue_vue_type_template_id_f6f09718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/GlobalLayout.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/GlobalLayout.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalLayout_vue_vue_type_template_id_23063691_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalLayout.vue?vue&type=template&id=23063691&scoped=true& */ "./resources/js/layouts/GlobalLayout.vue?vue&type=template&id=23063691&scoped=true&");
/* harmony import */ var _GlobalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/GlobalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GlobalLayout_vue_vue_type_style_index_0_id_23063691_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css& */ "./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GlobalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlobalLayout_vue_vue_type_template_id_23063691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GlobalLayout_vue_vue_type_template_id_23063691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23063691",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/GlobalLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/GlobalLayout.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/GlobalLayout.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_style_index_0_id_23063691_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=style&index=0&id=23063691&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_style_index_0_id_23063691_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_style_index_0_id_23063691_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_style_index_0_id_23063691_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_style_index_0_id_23063691_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_style_index_0_id_23063691_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/GlobalLayout.vue?vue&type=template&id=23063691&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/layouts/GlobalLayout.vue?vue&type=template&id=23063691&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_template_id_23063691_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalLayout.vue?vue&type=template&id=23063691&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/GlobalLayout.vue?vue&type=template&id=23063691&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_template_id_23063691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalLayout_vue_vue_type_template_id_23063691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/shared/HeaderAvatar.vue":
/*!******************************************************!*\
  !*** ./resources/js/layouts/shared/HeaderAvatar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderAvatar_vue_vue_type_template_id_2127ef3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderAvatar.vue?vue&type=template&id=2127ef3c& */ "./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=template&id=2127ef3c&");
/* harmony import */ var _HeaderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderAvatar.vue?vue&type=script&lang=js& */ "./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderAvatar_vue_vue_type_template_id_2127ef3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderAvatar_vue_vue_type_template_id_2127ef3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/shared/HeaderAvatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderAvatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=template&id=2127ef3c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=template&id=2127ef3c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAvatar_vue_vue_type_template_id_2127ef3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderAvatar.vue?vue&type=template&id=2127ef3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/shared/HeaderAvatar.vue?vue&type=template&id=2127ef3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAvatar_vue_vue_type_template_id_2127ef3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAvatar_vue_vue_type_template_id_2127ef3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);