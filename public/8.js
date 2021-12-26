(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ckeditor/CKEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ckeditor/CKEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorData: "",
      editorConfig: {
        toolbar: ["heading", "|", "bold", "italic", "link", "|", "outdent", "indent", "|", "bulletedList", "numberedList", "|", "blockQuote", "mediaEmbed", "|", "undo", "redo"]
      }
    };
  },
  watch: {
    editorData: function editorData(data) {
      this.$emit("sendEditorData", data);
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    eventBus.$on("emptyEditor", function (e) {
      _this.editorData = "";
    });
    eventBus.$on("receiverDataEditor", function (e) {
      _this.editorData = e;
    });
  },
  beforeDestroy: function beforeDestroy() {
    eventBus.$off("emptyEditor");
    eventBus.$off("receiverDataEditor");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/description/DescriptionItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["icon", "title", "content"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/DrawerPreview.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_description_DescriptionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/description/DescriptionItem */ "./resources/js/components/description/DescriptionItem.vue");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/tools */ "./resources/js/helpers/tools.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DescriptionItem: _components_description_DescriptionItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visiblePreview: {
      type: Boolean,
      "default": false
    },
    width: {
      type: Number,
      "default": 640
    },
    data: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {
      pStyle: {
        fontSize: "16px",
        color: "rgba(0,0,0,0.85)",
        lineHeight: "24px",
        display: "block",
        marginBottom: "16px"
      }
    };
  },
  computed: {
    description: function description() {
      return md.parse(this.data.description);
    }
  },
  methods: {
    close: function close() {
      this.$emit("closeDrawerPreview");
    },
    colorActive: function colorActive(v) {
      return Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_1__["colorActive"])(v);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Tour.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/tools */ "./resources/js/helpers/tools.js");
/* harmony import */ var _services_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/upload */ "./resources/js/services/upload.js");
/* harmony import */ var _components_card_CardTable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/card/CardTable.vue */ "./resources/js/components/card/CardTable.vue");
/* harmony import */ var _components_pagination_PaginationTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pagination/PaginationTable */ "./resources/js/components/pagination/PaginationTable.vue");
/* harmony import */ var _components_drawer_DrawerTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/drawer/DrawerTable */ "./resources/js/components/drawer/DrawerTable.vue");
/* harmony import */ var _components_tour_DrawerPreview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/tour/DrawerPreview */ "./resources/js/components/tour/DrawerPreview.vue");
/* harmony import */ var _components_ckeditor_CKEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ckeditor/CKEditor */ "./resources/js/components/ckeditor/CKEditor.vue");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CardTable: _components_card_CardTable_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PaginationTable: _components_pagination_PaginationTable__WEBPACK_IMPORTED_MODULE_5__["default"],
    DrawerTable: _components_drawer_DrawerTable__WEBPACK_IMPORTED_MODULE_6__["default"],
    DrawerPreview: _components_tour_DrawerPreview__WEBPACK_IMPORTED_MODULE_7__["default"],
    CKEditor: _components_ckeditor_CKEditor__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  metaInfo: {
    title: "Tour"
  },
  data: function data() {
    return {
      title: "Tour",
      pagination: {
        total: 0,
        perPage: 0,
        current: 1
      },
      sorter: {},
      q: "",
      //form
      visible: false,
      editMode: false,
      isActive: true,
      isFeatured: false,
      updateId: "",
      categoryId: "",
      imageUpload: null,
      galleryUpload: [],
      loadingButton: false,
      //preview
      visiblePreview: false,
      tour: null,
      //image cropper
      visibleModal: false,
      imageUrl: "",
      imagePreview: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("tour", ["loading", "tours", "categories", "getTourById"]), {
    columns: function columns() {
      var columns = [{
        title: "No",
        width: "6%",
        scopedSlots: {
          customRender: "no"
        }
      }, {
        title: "Mã tour",
        width: "15%",
        scopedSlots: {
          customRender: "code"
        }
      }, {
        title: "Tên tour",
        dataIndex: "name",
        sorter: true
      }, {
        title: "Nơi đi/nơi đến",
        scopedSlots: {
          customRender: "from_to_place"
        }
      }, {
        title: "Loại tour",
        dataIndex: "category_name"
      }, {
        title: "Trạng thái",
        dataIndex: "is_active",
        key: "status",
        width: "13%",
        scopedSlots: {
          customRender: "status"
        }
      }, {
        title: "Nổi bật",
        align: "center",
        width: "7%",
        scopedSlots: {
          customRender: "featured"
        }
      }, {
        title: "Ẩn/hiện",
        align: "center",
        width: "5%",
        scopedSlots: {
          customRender: "active"
        }
      }, {
        title: "Tùy chọn",
        key: "action",
        align: "center",
        width: "13%",
        scopedSlots: {
          customRender: "action"
        }
      }];
      return columns;
    },
    cities: function cities() {
      if (!this.categoryId) {
        return this.$root.cities;
      }

      if (this.categoryId == 1) {
        return this.$root.cities.filter(function (item) {
          return item.code < 100;
        });
      }

      if (this.categoryId == 2) {
        return this.$root.cities.filter(function (item) {
          return item.code >= 100;
        });
      }
    }
  }),
  created: function created() {
    this.fetchData();
    this.fetchCategories();
    this.initForm();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("tour", ["fetchCategories", "fetchTours", "createTour", "updateTour", "updateStatusTour", "deleteTour"]), {
    fetchData: function fetchData() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, pagination, _yield$_this$fetchTou, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
                pagination = _objectSpread({}, _this.pagination);
                _context.next = 4;
                return _this.fetchTours(params);

              case 4:
                _yield$_this$fetchTou = _context.sent;
                data = _yield$_this$fetchTou.data;
                pagination.total = data.meta.total;
                pagination.perPage = data.meta.per_page;
                pagination.current = data.meta.current_page;
                _this.pagination = pagination;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onTableChange: function onTableChange(pagination, filters, sorter) {
      var pager = _objectSpread({}, this.pagination);

      var page = pager.current;
      var perPage = pager.perPage;
      var sortBy = sorter.field;
      var orderBy = Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__["convertOrderBy"])(sorter.order);
      var q = this.q;
      this.fetchData({
        page: page,
        perPage: perPage,
        sortBy: sortBy,
        orderBy: orderBy,
        q: q
      });
      this.sorter = sorter;
    },
    onShowSizeChange: function onShowSizeChange(_ref) {
      var current = _ref.current,
          pageSize = _ref.pageSize;

      var sorter = _objectSpread({}, this.sorter);

      var sortBy = sorter.field;
      var orderBy = Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__["convertOrderBy"])(sorter.order);
      var q = this.q;
      var page = current;
      var perPage = pageSize;
      this.fetchData({
        page: page,
        perPage: perPage,
        sortBy: sortBy,
        orderBy: orderBy,
        q: q
      });
    },
    onChange: function onChange(_ref2) {
      var page = _ref2.page,
          pageSize = _ref2.pageSize;

      var sorter = _objectSpread({}, this.sorter);

      var sortBy = sorter.field;
      var orderBy = Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__["convertOrderBy"])(sorter.order);
      var q = this.q;
      var perPage = pageSize;
      this.fetchData({
        page: page,
        perPage: perPage,
        sortBy: sortBy,
        orderBy: orderBy,
        q: q
      });
    },
    search: function search(value) {
      if (value) {
        var pager = _objectSpread({}, this.pagination);

        var sorter = _objectSpread({}, this.sorter);

        var orderBy = Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__["convertOrderBy"])(sorter.order);
        var page = pager.current;
        var perPage = pager.perPage;
        var sortBy = sorter.field;
        var q = Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__["cleanAccents"])(value);
        this.fetchData({
          page: page,
          perPage: perPage,
          sortBy: sortBy,
          orderBy: orderBy,
          q: q
        });
        this.q = q;
      }
    },
    reset: function reset() {
      this.fetchData();
      this.pagination.current = 1;
      this.q = "";
    },
    onClickFeatured: function onClickFeatured(is_featured, e) {
      var id = +e.target.name.replace("t_f_", "");
      this.updateStatusTour({
        id: id,
        values: {
          is_featured: is_featured
        }
      });
    },
    onClickActive: function onClickActive(is_active, e) {
      var id = +e.target.name.replace("t_a_", "");
      this.updateStatusTour({
        id: id,
        values: {
          is_active: is_active
        }
      });
    },
    colorActive: function colorActive(value) {
      return Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__["colorActive"])(value);
    },
    open: function open() {
      this.editMode = false;
      this.visible = true;
    },
    onUpdate: function onUpdate(tourId) {
      var tour = this.getTourById(tourId);
      this.form.setFieldsValue(tour);
      eventBus.$emit("receiverDataEditor", tour.description);
      this.updateId = tourId;
      this.visible = this.editMode = true;
    },
    onDelete: function onDelete(tourId) {
      this.deleteTour(tourId);
      this.fetchData();
    },
    //Handle with form
    initForm: function initForm() {
      this.form = this.$form.createForm(this);
      this.form.getFieldDecorator("name", {
        initialValue: ""
      });
      this.form.getFieldDecorator("from_place_name", {
        initialValue: ""
      });
      this.form.getFieldDecorator("to_place_code", {
        initialValue: undefined
      });
      this.form.getFieldDecorator("transport", {
        initialValue: ""
      });
      this.form.getFieldDecorator("number_days", {
        initialValue: 1
      });
      this.form.getFieldDecorator("number_persons", {
        initialValue: 1
      });
      this.form.getFieldDecorator("depart", {
        initialValue: undefined
      });
      this.form.getFieldDecorator("price_default", {
        initialValue: 0
      });
      this.form.getFieldDecorator("price_children", {
        initialValue: 0
      });
      this.form.getFieldDecorator("price_baby", {
        initialValue: 0
      });
      this.form.getFieldDecorator("description", {
        initialValue: ""
      });
      this.form.getFieldDecorator("note", {
        initialValue: ""
      });
      this.form.getFieldDecorator("is_featured", {
        initialValue: false
      });
      this.form.getFieldDecorator("is_active", {
        initialValue: true
      });
      this.form.getFieldDecorator("category_id", {
        initialValue: undefined
      });
      this.form.getFieldDecorator("image", {
        initialValue: ""
      });
      this.form.getFieldDecorator("gallery", {
        initialValue: ""
      });
    },
    sendEditorData: function sendEditorData(data) {
      this.form.setFieldsValue({
        description: data
      });
    },
    saveForm: function saveForm() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var imageUpload = _this2.imageUpload;
          var galleryUpload = _this2.galleryUpload;
          var galleryUploadLength = galleryUpload.length;

          if (!_this2.editMode) {
            if (!imageUpload) {
              _this2.$message.error("Bạn chưa chọn hình");

              return;
            }

            _this2.loadingButton = true;
            Object(_services_upload__WEBPACK_IMPORTED_MODULE_3__["uploadImage"])("tours", imageUpload).then( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        values.image = url;

                        if (!(galleryUploadLength > 0)) {
                          _context3.next = 3;
                          break;
                        }

                        return _context3.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                          var gallery, i;
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  gallery = [];
                                  i = 0;

                                case 2:
                                  if (!(i < galleryUploadLength)) {
                                    _context2.next = 8;
                                    break;
                                  }

                                  _context2.next = 5;
                                  return Object(_services_upload__WEBPACK_IMPORTED_MODULE_3__["uploadImage"])("tours", galleryUpload[i]).then(function (url) {
                                    gallery.push(url);
                                  });

                                case 5:
                                  i++;
                                  _context2.next = 2;
                                  break;

                                case 8:
                                  values.gallery = gallery;

                                case 9:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        })(), "t0", 3);

                      case 3:
                        _this2.createTour(values);

                        _this2.loadingButton = false;

                        _this2.closeForm();

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }());
          } else {
            if (imageUpload) {
              Object(_services_upload__WEBPACK_IMPORTED_MODULE_3__["uploadImage"])("tours", imageUpload).then( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(url) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          values.image = url;

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }());
            }

            _this2.loadingButton = true;

            _this2.updateTour({
              id: _this2.updateId,
              values: values
            });

            _this2.loadingButton = false;

            _this2.closeForm();
          }
        }
      });
    },
    closeForm: function closeForm() {
      this.visible = this.editMode = false;
      this.imageUpload = null;
      this.galleryUpload.length = 0;
      this.onClickClearImage();
      this.form.resetFields();
      eventBus.$emit("emptyEditor", function () {});
    },
    //preview
    onPreview: function onPreview(tourId) {
      var tour = this.getTourById(tourId);
      this.tour = tour;
      this.visiblePreview = true;
    },
    closeDrawerPreview: function closeDrawerPreview() {
      this.visiblePreview = false;
    },
    //image
    onChangeGallery: function onChangeGallery(e) {
      var _this$galleryUpload;

      var gallery = e.target.files;

      (_this$galleryUpload = this.galleryUpload).push.apply(_this$galleryUpload, _toConsumableArray(gallery));
    },
    //image cropper
    onChangeImage: function onChangeImage(e) {
      var file = e.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
      this.visibleModal = true;
    },
    onCloseModal: function onCloseModal() {
      this.imageUrl = "";
      this.visibleModal = false;
    },
    getImage: function getImage(data) {
      this.imagePreview = URL.createObjectURL(data);
      this.imageUpload = new File([data], "file.webp", {
        type: "image/webp"
      });
    },
    onClickClearImage: function onClickClearImage() {
      this.imagePreview = this.imageUpload = "";
    },
    onChangeCategory: function onChangeCategory(value) {
      this.categoryId = value;
      this.form.setFieldsValue({
        to_place_code: undefined
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description[data-v-0c10fffe] {\n  font-size: 14px;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.65);\n  margin-bottom: 4px;\n}\n.description .title[data-v-0c10fffe] {\n  font-weight: 500;\n  margin-right: 8px;\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.85);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 24px;\n  display: block;\n  margin-bottom: 16px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload-box {\n  display: table;\n  width: 100%;\n  min-height: 150px;\n  text-align: center;\n  vertical-align: top;\n  background-color: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./DrawerPreview.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ckeditor/CKEditor.vue?vue&type=template&id=70e9b6b4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ckeditor/CKEditor.vue?vue&type=template&id=70e9b6b4& ***!
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
  return _c("ckeditor", {
    attrs: {
      editor: _vm.editor,
      config: _vm.editorConfig,
      "tag-name": "textarea"
    },
    model: {
      value: _vm.editorData,
      callback: function($$v) {
        _vm.editorData = $$v
      },
      expression: "editorData"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/description/DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "description" }, [
    _c(
      "div",
      { staticClass: "title" },
      [
        _vm.icon ? _c("a-icon", { attrs: { type: _vm.icon } }) : _vm._e(),
        _vm._v(" " + _vm._s(_vm.title))
      ],
      1
    ),
    _vm._v("\n  " + _vm._s(_vm.content) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=template&id=4824b8ea&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tour/DrawerPreview.vue?vue&type=template&id=4824b8ea& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "a-drawer",
    {
      attrs: { width: _vm.width, visible: _vm.visiblePreview },
      on: { close: _vm.close }
    },
    [
      _c("p", { staticClass: "preview-title" }, [
        _vm._v("Tour #" + _vm._s(_vm.data.code))
      ]),
      _vm._v(" "),
      _c("p", { style: _vm.pStyle }, [_vm._v("Thông tin")]),
      _vm._v(" "),
      _c(
        "a-row",
        [
          _c("a-col", { attrs: { span: 12 } }, [
            _c("img", {
              style: {
                height: "95%",
                width: "95%",
                borderRadius: "3px",
                boxShadow: "2px 2px 6px 0 #00152924"
              },
              attrs: { src: _vm.data.image }
            })
          ]),
          _vm._v(" "),
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c(
                "a-row",
                [
                  _c(
                    "a-col",
                    [
                      _c("description-item", {
                        attrs: { title: "Tên tour", content: _vm.data.name }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    [
                      _c("description-item", {
                        attrs: {
                          title: "Loại tour",
                          content: _vm.data.category_name
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    [
                      _c("description-item", {
                        attrs: { title: "Khởi hành", content: _vm.data.depart }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    [
                      _c("description-item", {
                        attrs: {
                          title: "Nơi đi",
                          content: _vm.data.from_place_name
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    [
                      _c("description-item", {
                        attrs: {
                          title: "Nơi đến",
                          content: _vm.data.to_place_name
                        }
                      })
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
      _c(
        "a-row",
        [
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: {
                  title: "Số ngày",
                  content: _vm.data.number_days + " ngày"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: {
                  title: "Số người",
                  content: _vm.data.number_persons + " người"
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
        "a-row",
        [
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: { title: "Phương tiện", content: _vm.data.transport }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: {
                  title: "Giá người lớn",
                  content: _vm.data.price_default + " đồng"
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
        "a-row",
        [
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: {
                  title: "Giá trẻ em",
                  content: _vm.data.price_children + " đồng"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: {
                  title: "Giá em bé",
                  content: _vm.data.price_baby + " đồng"
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
        "a-row",
        [
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: {
                  title: "Nổi bật",
                  content: _vm.data.is_featured ? "Nổi bật" : ""
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            { attrs: { span: 12 } },
            [
              _c("description-item", {
                attrs: {
                  title: "Ẩn/Hiện",
                  content: _vm.data.is_active ? "Hiện" : "Ẩn"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("a-divider"),
      _vm._v(" "),
      _c("p", { style: _vm.pStyle }, [_vm._v("Mô tả")]),
      _vm._v(" "),
      _c(
        "a-row",
        [
          _c("a-col", { attrs: { span: 24 } }, [
            _c("div", { domProps: { innerHTML: _vm._s(_vm.description) } })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("a-divider"),
      _vm._v(" "),
      _c(
        "a-row",
        [
          _c(
            "a-col",
            { attrs: { span: 24 } },
            [
              _c("description-item", {
                attrs: { title: "Ghi chú", content: _vm.data.note }
              })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=template&id=ff2ae13e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Tour.vue?vue&type=template&id=ff2ae13e& ***!
  \********************************************************************************************************************************************************************************************************/
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
        "card-table",
        {
          attrs: {
            placeholder: "Tìm kiếm theo tên, mã tour",
            title: _vm.title,
            "add-button": true
          },
          on: { open: _vm.open, reset: _vm.reset, search: _vm.search }
        },
        [
          _c("a-table", {
            attrs: {
              columns: _vm.columns,
              loading: _vm.loading,
              rowKey: function(record) {
                return record.id
              },
              dataSource: _vm.tours,
              pagination: false
            },
            on: { change: _vm.onTableChange },
            scopedSlots: _vm._u([
              {
                key: "no",
                fn: function(text, record, index) {
                  return _c("strong", {}, [_vm._v(_vm._s(++index))])
                }
              },
              {
                key: "code",
                fn: function(record) {
                  return [
                    _c(
                      "a-tooltip",
                      {
                        attrs: {
                          placement: "top",
                          title: "Click để xem chi tiết"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "color-code",
                            on: {
                              click: function($event) {
                                return _vm.onPreview(record.id)
                              }
                            }
                          },
                          [_vm._v(_vm._s(record.code))]
                        )
                      ]
                    )
                  ]
                }
              },
              {
                key: "from_to_place",
                fn: function(record) {
                  return [
                    _c("span", [
                      _vm._v(
                        _vm._s(record.from_place_name) +
                          " - " +
                          _vm._s(record.to_place_name)
                      )
                    ])
                  ]
                }
              },
              {
                key: "status",
                fn: function(record) {
                  return [
                    _c("a-tag", { attrs: { color: _vm.colorActive(record) } }, [
                      _vm._v(_vm._s(_vm._f("status")(record)))
                    ])
                  ]
                }
              },
              {
                key: "featured",
                fn: function(record) {
                  return [
                    _c("a-switch", {
                      key: record.id,
                      attrs: {
                        size: "small",
                        name: "t_f_" + record.id,
                        checked: record.is_featured,
                        defaultChecked: record.is_featured
                      },
                      on: { click: _vm.onClickFeatured }
                    })
                  ]
                }
              },
              {
                key: "active",
                fn: function(record) {
                  return [
                    _c("a-switch", {
                      key: record.id,
                      attrs: {
                        size: "small",
                        name: "t_a_" + record.id,
                        checked: record.is_active,
                        defaultChecked: record.is_active
                      },
                      on: { click: _vm.onClickActive }
                    })
                  ]
                }
              },
              {
                key: "action",
                fn: function(record) {
                  return [
                    _c(
                      "a-button",
                      {
                        attrs: { type: "dashed", size: "small" },
                        on: {
                          click: function($event) {
                            return _vm.onUpdate(record.id)
                          }
                        }
                      },
                      [_c("a-icon", { attrs: { type: "edit" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("a-divider", { attrs: { type: "vertical" } }),
                    _vm._v(" "),
                    _vm.tours.length
                      ? _c(
                          "a-popconfirm",
                          {
                            attrs: { title: "Bạn có chắc chắn?" },
                            on: {
                              confirm: function($event) {
                                return _vm.onDelete(record.id)
                              }
                            }
                          },
                          [
                            _c(
                              "a-button",
                              { attrs: { type: "dashed", size: "small" } },
                              [_c("a-icon", { attrs: { type: "delete" } })],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("pagination-table", {
            attrs: {
              total: _vm.pagination.total,
              pageSize: _vm.pagination.perPage,
              current: _vm.pagination.current
            },
            on: {
              onShowSizeChange: _vm.onShowSizeChange,
              onChange: _vm.onChange
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.tour
        ? _c("drawer-preview", {
            attrs: { visiblePreview: _vm.visiblePreview, data: _vm.tour },
            on: { closeDrawerPreview: _vm.closeDrawerPreview }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "drawer-table",
        {
          attrs: {
            width: 720,
            visible: _vm.visible,
            "edit-mode": _vm.editMode,
            "loading-button": _vm.loadingButton
          },
          on: { saveForm: _vm.saveForm, closeForm: _vm.closeForm }
        },
        [
          _c(
            "a-form",
            {
              attrs: {
                form: _vm.form,
                layout: "vertical",
                hideRequiredMark: ""
              },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveForm($event)
                }
              }
            },
            [
              _c(
                "a-row",
                { attrs: { gutter: 16 } },
                [
                  _c(
                    "a-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Tên tour", "has-feedback": "" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "name",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Không được trống"
                                      },
                                      { max: 255, message: "Tối đa 255 ký tự" }
                                    ]
                                  }
                                ],
                                expression:
                                  "[\n                'name',\n                {\n                  rules: [\n                    { required: true, message: 'Không được trống' },\n                    { max: 255, message: 'Tối đa 255 ký tự' },\n                  ],\n                },\n              ]"
                              }
                            ],
                            attrs: { placeholder: "Nhập tên tour" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Loại tour", "has-feedback": "" } },
                        [
                          _c(
                            "a-select",
                            {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "category_id",
                                    {
                                      rules: [
                                        {
                                          required: true,
                                          message: "Không được trống"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n                'category_id',\n                {\n                  rules: [{ required: true, message: 'Không được trống' }],\n                },\n              ]"
                                }
                              ],
                              attrs: { placeholder: "Chọn loại tour" },
                              on: { change: _vm.onChangeCategory }
                            },
                            _vm._l(_vm.categories, function(cate) {
                              return _c(
                                "a-select-option",
                                { key: cate.id, attrs: { value: cate.id } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(cate.name) +
                                      "\n              "
                                  )
                                ]
                              )
                            }),
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
              _c(
                "a-row",
                { attrs: { gutter: 16 } },
                [
                  _c(
                    "a-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Nơi đi", "has-feedback": "" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "from_place_name",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Không được trống"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "[\n                'from_place_name',\n                {\n                  rules: [{ required: true, message: 'Không được trống' }],\n                },\n              ]"
                              }
                            ],
                            attrs: { placeholder: "Nhập nơi đi" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Nơi đến", "has-feedback": "" } },
                        [
                          _c(
                            "a-select",
                            {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "to_place_code",
                                    {
                                      rules: [
                                        {
                                          required: true,
                                          message: "Không được trống",
                                          type: "array"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n                'to_place_code',\n                {\n                  rules: [\n                    {\n                      required: true,\n                      message: 'Không được trống',\n                      type: 'array',\n                    },\n                  ],\n                },\n              ]"
                                }
                              ],
                              attrs: {
                                mode: "multiple",
                                placeholder: "Chọn nơi đến"
                              }
                            },
                            _vm._l(_vm.cities, function(city) {
                              return _c(
                                "a-select-option",
                                { key: city.code, attrs: { value: city.code } },
                                [_vm._v(_vm._s(city.name))]
                              )
                            }),
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
              _c(
                "a-row",
                { attrs: { gutter: 16 } },
                [
                  _c(
                    "a-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Phương tiện", "has-feedback": "" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["transport"],
                                expression: "['transport']"
                              }
                            ],
                            attrs: { placeholder: "Nhập phương tiện" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Số ngày" } },
                        [
                          _c("a-input-number", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["number_days"],
                                expression: "['number_days']"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: { defaultValue: 1, min: 1, max: 30 }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Số người tối đa" } },
                        [
                          _c("a-input-number", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["number_persons"],
                                expression: "['number_persons']"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: { defaultValue: 1, min: 1, max: 20 }
                          })
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
              _c(
                "a-row",
                { attrs: { gutter: 16 } },
                [
                  _c(
                    "a-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Khởi hành", "has-feedback": "" } },
                        [
                          _c(
                            "a-select",
                            {
                              directives: [
                                {
                                  name: "decorator",
                                  rawName: "v-decorator",
                                  value: [
                                    "depart",
                                    {
                                      rules: [
                                        {
                                          required: true,
                                          message: "Không được trống"
                                        }
                                      ]
                                    }
                                  ],
                                  expression:
                                    "[\n                'depart',\n                { rules: [{ required: true, message: 'Không được trống' }] },\n              ]"
                                }
                              ],
                              attrs: { placeholder: "Chọn" }
                            },
                            [
                              _c(
                                "a-select-option",
                                { attrs: { value: "daily" } },
                                [_vm._v("Hằng ngày")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a-select-option",
                                { attrs: { value: "contact" } },
                                [_vm._v("Liên hệ")]
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
                  _c(
                    "a-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Giá người lớn (đồng)" } },
                        [
                          _c("a-input-number", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["price_default"],
                                expression: "['price_default']"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: {
                              min: 0,
                              step: 10000,
                              formatter: function(value) {
                                return ("" + value).replace(
                                  /\B(?=(\d{3})+(?!\d))/g,
                                  ","
                                )
                              },
                              parser: function(value) {
                                return value.replace(/(,*)/g, "")
                              }
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
                    "a-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Giá trẻ em (đồng)" } },
                        [
                          _c("a-input-number", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["price_children"],
                                expression: "['price_children']"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: {
                              min: 0,
                              step: 10000,
                              formatter: function(value) {
                                return ("" + value).replace(
                                  /\B(?=(\d{3})+(?!\d))/g,
                                  ","
                                )
                              },
                              parser: function(value) {
                                return value.replace(/(,*)/g, "")
                              }
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
                    "a-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Giá em bé (đồng)" } },
                        [
                          _c("a-input-number", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["price_baby"],
                                expression: "['price_baby']"
                              }
                            ],
                            staticStyle: { width: "100%" },
                            attrs: {
                              min: 0,
                              step: 10000,
                              formatter: function(value) {
                                return ("" + value).replace(
                                  /\B(?=(\d{3})+(?!\d))/g,
                                  ","
                                )
                              },
                              parser: function(value) {
                                return value.replace(/(,*)/g, "")
                              }
                            }
                          })
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
              _c(
                "a-row",
                [
                  _c(
                    "a-col",
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Mô tả" } },
                        [
                          _c("CKEditor", {
                            on: { sendEditorData: _vm.sendEditorData }
                          }),
                          _vm._v(" "),
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["description"],
                                expression: "['description']"
                              }
                            ],
                            style: { display: "none" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Ghi chú" } },
                        [
                          _c("a-textarea", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["note"],
                                expression: "['note']"
                              }
                            ],
                            attrs: {
                              placeholder: "Nhập ghi chú (nếu cần)",
                              autosize: { minRows: 3, maxRows: 5 }
                            }
                          })
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
              _c(
                "a-row",
                { style: { marginBottom: "24px" }, attrs: { gutter: 16 } },
                [
                  _vm.imagePreview
                    ? _c("a-col", [
                        _c("img", {
                          staticClass: "rounded w-100 mb-2",
                          attrs: { src: _vm.imagePreview }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    [
                      _c("input", {
                        ref: "image",
                        style: { display: "none" },
                        attrs: { type: "file", accept: "image/*" },
                        on: { change: _vm.onChangeImage }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        ref: "gallery",
                        style: { display: "none" },
                        attrs: {
                          type: "file",
                          accept: "image/*",
                          multiple: ""
                        },
                        on: { change: _vm.onChangeGallery }
                      }),
                      _vm._v(" "),
                      _vm.imagePreview
                        ? _c(
                            "a-button",
                            {
                              staticClass: "mb-2",
                              attrs: {
                                type: "danger",
                                icon: "delete",
                                block: ""
                              },
                              on: { click: _vm.onClickClearImage }
                            },
                            [_vm._v("Xóa")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.imagePreview
                        ? _c(
                            "a-button",
                            {
                              staticClass: "mb-2",
                              attrs: {
                                type: "dashed",
                                icon: "picture",
                                block: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$refs.image.click()
                                }
                              }
                            },
                            [_vm._v("Image")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "a-button",
                        {
                          attrs: {
                            type: "dashed",
                            icon: "switcher",
                            block: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.gallery.click()
                            }
                          }
                        },
                        [_vm._v("Gallery")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a-row",
                        { style: { marginTop: "24px" }, attrs: { gutter: 16 } },
                        [
                          _c(
                            "a-col",
                            { attrs: { span: 6 } },
                            [
                              _c(
                                "a-form-item",
                                {
                                  attrs: {
                                    label: "Nổi bật",
                                    wrapperCol: { span: 12 },
                                    labelCol: { span: 12 }
                                  }
                                },
                                [
                                  _c("a-switch", {
                                    directives: [
                                      {
                                        name: "decorator",
                                        rawName: "v-decorator",
                                        value: ["is_featured"],
                                        expression: "['is_featured']"
                                      }
                                    ],
                                    model: {
                                      value: _vm.isFeatured,
                                      callback: function($$v) {
                                        _vm.isFeatured = $$v
                                      },
                                      expression: "isFeatured"
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
                            "a-col",
                            { attrs: { span: 6 } },
                            [
                              _c(
                                "a-form-item",
                                {
                                  attrs: {
                                    label: "Ẩn/hiện",
                                    wrapperCol: { span: 12 },
                                    labelCol: { span: 12 }
                                  }
                                },
                                [
                                  _c("a-switch", {
                                    directives: [
                                      {
                                        name: "decorator",
                                        rawName: "v-decorator",
                                        value: ["is_active"],
                                        expression: "['is_active']"
                                      }
                                    ],
                                    model: {
                                      value: _vm.isActive,
                                      callback: function($$v) {
                                        _vm.isActive = $$v
                                      },
                                      expression: "isActive"
                                    }
                                  })
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
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("image-cropper", {
        attrs: { visibleModal: _vm.visibleModal, imageUrl: _vm.imageUrl },
        on: { onCloseModal: _vm.onCloseModal, getImage: _vm.getImage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ckeditor/CKEditor.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ckeditor/CKEditor.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CKEditor_vue_vue_type_template_id_70e9b6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CKEditor.vue?vue&type=template&id=70e9b6b4& */ "./resources/js/components/ckeditor/CKEditor.vue?vue&type=template&id=70e9b6b4&");
/* harmony import */ var _CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CKEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/ckeditor/CKEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CKEditor_vue_vue_type_template_id_70e9b6b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CKEditor_vue_vue_type_template_id_70e9b6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ckeditor/CKEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ckeditor/CKEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ckeditor/CKEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CKEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ckeditor/CKEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ckeditor/CKEditor.vue?vue&type=template&id=70e9b6b4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ckeditor/CKEditor.vue?vue&type=template&id=70e9b6b4& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_template_id_70e9b6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CKEditor.vue?vue&type=template&id=70e9b6b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ckeditor/CKEditor.vue?vue&type=template&id=70e9b6b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_template_id_70e9b6b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CKEditor_vue_vue_type_template_id_70e9b6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/description/DescriptionItem.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/description/DescriptionItem.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DescriptionItem_vue_vue_type_template_id_0c10fffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true& */ "./resources/js/components/description/DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true&");
/* harmony import */ var _DescriptionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DescriptionItem.vue?vue&type=script&lang=js& */ "./resources/js/components/description/DescriptionItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DescriptionItem_vue_vue_type_style_index_0_id_0c10fffe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true& */ "./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DescriptionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DescriptionItem_vue_vue_type_template_id_0c10fffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DescriptionItem_vue_vue_type_template_id_0c10fffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c10fffe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/description/DescriptionItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/description/DescriptionItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/description/DescriptionItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DescriptionItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_style_index_0_id_0c10fffe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=style&index=0&id=0c10fffe&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_style_index_0_id_0c10fffe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_style_index_0_id_0c10fffe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_style_index_0_id_0c10fffe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_style_index_0_id_0c10fffe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_style_index_0_id_0c10fffe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/description/DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/description/DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_template_id_0c10fffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/description/DescriptionItem.vue?vue&type=template&id=0c10fffe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_template_id_0c10fffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DescriptionItem_vue_vue_type_template_id_0c10fffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tour/DrawerPreview.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/tour/DrawerPreview.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerPreview_vue_vue_type_template_id_4824b8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawerPreview.vue?vue&type=template&id=4824b8ea& */ "./resources/js/components/tour/DrawerPreview.vue?vue&type=template&id=4824b8ea&");
/* harmony import */ var _DrawerPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerPreview.vue?vue&type=script&lang=js& */ "./resources/js/components/tour/DrawerPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DrawerPreview_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawerPreview.vue?vue&type=style&index=0&lang=less& */ "./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DrawerPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DrawerPreview_vue_vue_type_template_id_4824b8ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DrawerPreview_vue_vue_type_template_id_4824b8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tour/DrawerPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tour/DrawerPreview.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/tour/DrawerPreview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DrawerPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./DrawerPreview.vue?vue&type=style&index=0&lang=less& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/tour/DrawerPreview.vue?vue&type=template&id=4824b8ea&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/tour/DrawerPreview.vue?vue&type=template&id=4824b8ea& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_template_id_4824b8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DrawerPreview.vue?vue&type=template&id=4824b8ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tour/DrawerPreview.vue?vue&type=template&id=4824b8ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_template_id_4824b8ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerPreview_vue_vue_type_template_id_4824b8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/admin/Tour.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/admin/Tour.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tour_vue_vue_type_template_id_ff2ae13e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tour.vue?vue&type=template&id=ff2ae13e& */ "./resources/js/pages/admin/Tour.vue?vue&type=template&id=ff2ae13e&");
/* harmony import */ var _Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tour.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Tour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Tour_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tour.vue?vue&type=style&index=0&lang=less& */ "./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tour_vue_vue_type_template_id_ff2ae13e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tour_vue_vue_type_template_id_ff2ae13e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Tour.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Tour.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/admin/Tour.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=style&index=0&lang=less& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/admin/Tour.vue?vue&type=template&id=ff2ae13e&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/admin/Tour.vue?vue&type=template&id=ff2ae13e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_ff2ae13e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=template&id=ff2ae13e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Tour.vue?vue&type=template&id=ff2ae13e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_ff2ae13e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_ff2ae13e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/firebase/index.js":
/*!*************************************************!*\
  !*** ./resources/js/services/firebase/index.js ***!
  \*************************************************/
/*! exports provided: storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");

 // Initialize Firebase

var firebaseConfig = {
  apiKey: "AIzaSyAp4bkPzIT_PgxURfR2aIGngM8ArIXP35E",
  authDomain: "graduation-4e427.firebaseapp.com",
  databaseURL: "https://graduation-4e427.firebaseio.com",
  projectId: "graduation-4e427",
  storageBucket: "graduation-4e427.appspot.com",
  messagingSenderId: "266525495476",
  appId: "1:266525495476:web:9cee6a5e3a4c69913947e1",
  measurementId: "G-4X4ZT1R4C9"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
var storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();


/***/ }),

/***/ "./resources/js/services/upload.js":
/*!*****************************************!*\
  !*** ./resources/js/services/upload.js ***!
  \*****************************************/
/*! exports provided: uploadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ "./resources/js/services/firebase/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function uploadImage(_x, _x2) {
  return _uploadImage.apply(this, arguments);
}

function _uploadImage() {
  _uploadImage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(folder, image) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var originalName = image.name;
              var ext = originalName.slice(originalName.lastIndexOf("."));
              var time = new Date().getTime();
              var imageName = time + ext;
              var uploadTask = _firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].ref("images/".concat(folder, "/").concat(imageName)).put(image);
              uploadTask.on("state_changed", function (snapshot) {}, function (error) {
                reject(error);
              }, function () {
                // complete function ....
                _firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].ref("images/".concat(folder)).child(imageName).getDownloadURL().then(function (url) {
                  resolve(url);
                });
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _uploadImage.apply(this, arguments);
}

/***/ })

}]);