/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _libs_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);


new Vue({
  el: '#notifications-container',
  render: function render(createElement) {
    return createElement(_Application_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: {
        assetRoot: $('#container').data('asset').replace(/\/\?_=[0-9]+/, '')
      }
    });
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_44b1e432__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "notifications-container" },
    [
      _c("Notification-List", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.view === "list",
            expression: "view === 'list'",
          },
        ],
      }),
      _vm._v(" "),
      _vm.view === "form" ? _c("Notification-Form") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NotificationList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _components_NotificationForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _libs_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
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
      view: 'list'
    };
  },
  props: {
    assetRoot: String
  },
  created: function created() {
    Object(_store__WEBPACK_IMPORTED_MODULE_2__["setAssetRoot"])(this.assetRoot);
    _libs_bus__WEBPACK_IMPORTED_MODULE_3__["default"].$on('set-view', this.onSetView);
    _libs_bus__WEBPACK_IMPORTED_MODULE_3__["default"].$on('autosize', this.onAutosize);
  },
  destroyed: function destroyed() {
    _libs_bus__WEBPACK_IMPORTED_MODULE_3__["default"].$off('set-view', this.onSetView);
    _libs_bus__WEBPACK_IMPORTED_MODULE_3__["default"].$off('autosize', this.onAutosize);
  },
  components: {
    NotificationList: _components_NotificationList__WEBPACK_IMPORTED_MODULE_0__["default"],
    NotificationForm: _components_NotificationForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    onSetView: function onSetView(view) {
      this.view = view;
      Fliplet.Widget.autosize();
    },
    onAutosize: function onAutosize() {
      Fliplet.Widget.autosize();
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationList_vue_vue_type_template_id_93ede84e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _NotificationList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationList_vue_vue_type_template_id_93ede84e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationList_vue_vue_type_template_id_93ede84e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NotificationList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationList_vue_vue_type_template_id_93ede84e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationList_vue_vue_type_template_id_93ede84e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationList_vue_vue_type_template_id_93ede84e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-6" }, [
        _c("p", [
          _c(
            "a",
            {
              staticClass: "btn btn-primary",
              attrs: { href: "#" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.createNotification.apply(null, arguments)
                },
              },
            },
            [
              _c("i", { staticClass: "fa fa-fw fa-lg fa-plus" }),
              _vm._v(" Create new"),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xs-12" },
        [
          _vm.isLoading
            ? _c(
                "div",
                {
                  staticClass: "notifications-loading spinner-holder animated",
                },
                [
                  _c("div", { staticClass: "spinner-overlay" }),
                  _vm._v(" "),
                  _c("p", [_vm._v("Loading notifications")]),
                ]
              )
            : [
                !_vm.notifications.length
                  ? [_vm._m(1)]
                  : [
                      _c("div", { staticClass: "checkbox checkbox-icon" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.showTimezone,
                              expression: "showTimezone",
                            },
                          ],
                          attrs: { id: "show-timezone", type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.showTimezone)
                              ? _vm._i(_vm.showTimezone, null) > -1
                              : _vm.showTimezone,
                          },
                          on: {
                            change: function ($event) {
                              var $$a = _vm.showTimezone,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.showTimezone = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.showTimezone = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.showTimezone = $$c
                              }
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(2),
                      ]),
                      _vm._v(" "),
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-condensed notification-list",
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.notifications, function (notification) {
                              return _c(
                                "tr",
                                {
                                  key: _vm.getNotificationKey(notification),
                                  attrs: {
                                    "data-notification-id": notification.id,
                                    "data-job-id":
                                      notification.job && notification.job.id,
                                  },
                                },
                                [
                                  _c(
                                    "td",
                                    { staticClass: "list-col-content" },
                                    [
                                      _c(
                                        "p",
                                        [
                                          _c(
                                            "tooltip",
                                            {
                                              attrs: {
                                                title:
                                                  _vm.getNotificationTooltip(
                                                    notification
                                                  ),
                                              },
                                            },
                                            [
                                              notification.status === "draft"
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "label label-default",
                                                    },
                                                    [_vm._v("Draft")]
                                                  )
                                                : [
                                                    notification.status ===
                                                    "scheduled"
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "label label-info",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Scheduled for " +
                                                                _vm._s(
                                                                  _vm.getNotificationDate(
                                                                    notification
                                                                  )
                                                                )
                                                            ),
                                                          ]
                                                        )
                                                      : _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "label label-success",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Sent on " +
                                                                _vm._s(
                                                                  _vm.getNotificationDate(
                                                                    notification
                                                                  )
                                                                )
                                                            ),
                                                          ]
                                                        ),
                                                  ],
                                            ],
                                            2
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("p", [
                                        notification.data.title
                                          ? _c("strong", [
                                              _vm._v(
                                                _vm._s(notification.data.title)
                                              ),
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        notification.data.title &&
                                        notification.data.message
                                          ? _c("br")
                                          : _vm._e(),
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(notification.data.message) +
                                            "\n                  "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("Notification-Link", {
                                        attrs: { notification: notification },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "list-col-notes" },
                                    [
                                      _c("Notification-Notes", {
                                        attrs: { notification: notification },
                                        on: {
                                          "update:notification": function (
                                            $event
                                          ) {
                                            notification = $event
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "list-col-sent-to" },
                                    [
                                      _c("p", [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(_vm.userCount(notification))
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          [
                                            _vm._v("via "),
                                            notification.type === "in-app"
                                              ? [_vm._v("in-app")]
                                              : _vm._e(),
                                            _vm._v(" "),
                                            notification.type === "in-app" &&
                                            notification.job
                                              ? [_vm._v("&")]
                                              : _vm._e(),
                                            _vm._v(" "),
                                            notification.job ||
                                            notification.type === "push"
                                              ? [_vm._v("push")]
                                              : _vm._e(),
                                            _vm._v(
                                              "\n                      notifications"
                                            ),
                                          ],
                                          2
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "list-col-actions" },
                                    [
                                      _vm.notificationIsEditable(notification)
                                        ? _c(
                                            "tooltip",
                                            { attrs: { title: "Edit" } },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function ($event) {
                                                      $event.preventDefault()
                                                      return _vm.editNotification(
                                                        notification
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-fw fa-lg fa-pencil",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "tooltip",
                                        { attrs: { title: "Copy" } },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: { href: "#" },
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.cloneNotification(
                                                    notification
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-fw fa-lg fa-copy",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      notification.pushResult
                                        ? _c(
                                            "tooltip",
                                            {
                                              attrs: {
                                                title:
                                                  "Push notification result",
                                              },
                                            },
                                            [
                                              _c(
                                                "popover",
                                                {
                                                  attrs: {
                                                    title:
                                                      "Push notification result",
                                                    placement: "left",
                                                    content:
                                                      _vm.getNotificationLog(
                                                        notification
                                                      ),
                                                    "data-job-id":
                                                      notification.job.id,
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: { href: "#" },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.doNothing.apply(
                                                            null,
                                                            arguments
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-fw fa-lg fa-list-alt",
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.notificationIsDeletable(notification)
                                        ? _c(
                                            "tooltip",
                                            { attrs: { title: "Delete" } },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function ($event) {
                                                      $event.preventDefault()
                                                      return _vm.deleteNotification(
                                                        notification
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-fw fa-lg fa-trash",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ]
                              )
                            }),
                            0
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "list-pagination clearfix" },
                        [
                          _c("paginate", {
                            attrs: {
                              "page-count": _vm.pageCount,
                              "prev-text": "Prev",
                              "next-text": "Next",
                              "container-class": "pagination clearfix",
                            },
                            model: {
                              value: _vm.pageNumber,
                              callback: function ($$v) {
                                _vm.pageNumber = $$v
                              },
                              expression: "pageNumber",
                            },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "top-align" }, [
                            _vm._v("Show rows:"),
                          ]),
                          _vm._v(" "),
                          _c("label", { staticClass: "select-proxy-display" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.batchSize,
                                    expression: "batchSize",
                                  },
                                ],
                                staticClass: "hidden-select form-control",
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.batchSize = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              _vm._l(_vm.batchSizes, function (size, index) {
                                return _c("option", {
                                  key: index,
                                  domProps: {
                                    value: size,
                                    innerHTML: _vm._s(size),
                                  },
                                })
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("span", {
                              staticClass: "icon fa fa-chevron-down",
                            }),
                          ]),
                        ],
                        1
                      ),
                    ],
              ],
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-6" }, [
      _c("p", [
        _c(
          "a",
          {
            staticClass: "btn btn-default show-settings pull-right",
            attrs: { href: "#" },
          },
          [
            _c("i", { staticClass: "fa fa-fw fa-lg fa-cog" }),
            _vm._v(" Push notification settings"),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notifications-empty" }, [
      _c("h4", [_vm._v("Send a notification")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Communicate latest updates and promotions with your users so they can re-engage with your app."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "show-timezone" } }, [
      _c("span", { staticClass: "check" }, [
        _c("i", { staticClass: "fa fa-check" }),
      ]),
      _vm._v(" Show timezones\n            "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Notification")]),
        _vm._v(" "),
        _c("th", [_vm._v("Notes")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sent to")]),
        _vm._v(" "),
        _c("th"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _NotificationNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _libs_bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _libs_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);
/* harmony import */ var _libs_timezones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










var defaultAudience = '';
var defaultScope = [];
var pushNotificationErrorTypes = {
  NoSubscriptions: 'One or more devices are not subscribed to receive this push notification.',
  NotRegistered: 'One or more devices are not subscribed to receive this push notification, or the app might be uninstalled.',
  InvalidProviderToken: 'The APN Key ID, push certificate, or Team ID are not valid. Please verify your settings.',
  MismatchSenderId: 'The Sender ID provided for the push notification service does not match the ID used user subscribed to push notifications. Please ensure that the Sender ID is consistent and corresponds to the one used for subscribing to push notifications.',
  DeviceTokenNotForTopic: 'The target bundle identifier does not match with the one used the subscribed devices.',
  TopicDisallowed: 'The target bundle identifier doesn\'t match what some subscribed devices are using.',
  GCMNotSet: 'Firebase push notifications (for Android devices) haven\'t been set up.',
  APNNotSet: 'Apple push notifications (for iOS devices) haven\'t been set up.'
};
var defaultPushNotificationErrorMessage = 'Unknown error. Please contact support.';
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      notifications: [],
      instance: null,
      pageCount: 0,
      pageNumber: Object(_store__WEBPACK_IMPORTED_MODULE_5__["getPageNumber"])(),
      lastNotificationShown: false,
      showTimezone: Object(_store__WEBPACK_IMPORTED_MODULE_5__["getShowTimezone"])(),
      userTimezone: Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_8__["validate"])(moment.tz.guess()),
      batchSize: 10,
      batchSizes: [10, 25, 50, 100, 250, 500]
    };
  },
  computed: {
    offset: function offset() {
      return (this.pageNumber - 1) * this.batchSize;
    }
  },
  watch: {
    showTimezone: function showTimezone(value) {
      Object(_store__WEBPACK_IMPORTED_MODULE_5__["setShowTimezone"])(!!value);
    },
    notifications: {
      deep: true,
      handler: function handler() {
        _libs_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$emit('autosize');
      }
    },
    batchSize: function batchSize() {
      this.loadNotifications();
    },
    pageNumber: function pageNumber(_pageNumber) {
      Object(_store__WEBPACK_IMPORTED_MODULE_5__["setPageNumber"])(_pageNumber);
    },
    offset: function offset() {
      this.loadNotifications();
    }
  },
  components: {
    NotificationLink: _NotificationLink__WEBPACK_IMPORTED_MODULE_0__["default"],
    NotificationNotes: _NotificationNotes__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginate: vuejs_paginate__WEBPACK_IMPORTED_MODULE_4___default.a,
    Tooltip: _Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"],
    Popover: _Popover__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    this.initialize();
    _libs_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$on('refresh-list', this.loadNotifications);
  },
  destroyed: function destroyed() {
    _libs_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$off('refresh-list', this.loadNotifications);
  },
  methods: {
    doNothing: function doNothing() {
      return;
    },
    getNotificationKey: function getNotificationKey(notification) {
      var id = notification.id;
      if (!id) {
        id = "legacy-".concat(_.get(notification, 'job.id'));
      }
      var createdAt = moment(notification.createdAt).unix();
      var updatedAt = moment(notification.updatedAt).unix();
      return "".concat(id, "-").concat(createdAt, "-").concat(updatedAt);
    },
    getNotificationTooltip: function getNotificationTooltip(notification) {
      if (notification.id) {
        return "Notification ".concat(notification.id);
      }
      if (notification.job && notification.job.id) {
        return "Job ".concat(notification.job.id);
      }
      return 'No ID found';
    },
    initialize: function initialize() {
      var _this = this;
      return Fliplet.Pages.get().then(function (pages) {
        Object(_store__WEBPACK_IMPORTED_MODULE_5__["setAppPages"])(pages);
        _this.instance = Fliplet.Notifications.init();
        return _this.loadNotifications();
      });
    },
    userCount: function userCount(notification) {
      if (!notification) {
        return;
      }
      var audience = _.get(notification, 'data.audience', defaultAudience);
      var scope = _.get(notification, 'scope', defaultScope);
      if (!audience && _.isEmpty(scope)) {
        return 'All users';
      }
      return "".concat(notification.userCount, " user").concat(notification.userCount !== 1 ? 's' : '');
    },
    getNotificationTimezone: function getNotificationTimezone(notification) {
      var timezone = _.get(notification, 'data._metadata.scheduledAtTimezone');
      var date = moment.utc(_.get(notification, 'orderAt')).toDate();
      return Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_8__["getOffsetString"])(timezone, date);
    },
    getNotificationDate: function getNotificationDate(notification) {
      if (!this.showTimezone) {
        return "".concat(Object(_libs_date__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(notification.orderAt, this.userTimezone));
      }
      var timezone = Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_8__["validate"])(_.get(notification, 'data._metadata.scheduledAtTimezone'));
      return "".concat(Object(_libs_date__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(notification.orderAt, timezone), " ").concat(this.getNotificationTimezone(notification));
    },
    getNotificationLog: function getNotificationLog(notification) {
      var tpl = Fliplet.Widget.Templates['templates.notificationLog'];
      var data = _.merge({
        android: {
          count: 0,
          success: 0,
          failed: 0,
          errors: {}
        },
        ios: {
          count: 0,
          success: 0,
          failed: 0,
          errors: {}
        },
        web: {
          count: 0,
          success: 0,
          failed: 0,
          errors: {}
        }
      }, notification.pushResult);
      var allErrors = _.reduce(_.map(_.values(data), 'errors'), function (summary, platformErrors) {
        _.forIn(platformErrors, function (count, type) {
          if (!_.has(summary, type)) {
            summary[type] = count;
            return;
          }
          summary[type] += count;
        });
        return summary;
      }, {});
      var acceptedCount = _.sumBy(_.keys(data), function (platform) {
        return data[platform].success;
      });
      var totalCount = _.sumBy(_.keys(data), function (platform) {
        return data[platform].count;
      });
      data.accepted = {
        count: acceptedCount,
        percent: totalCount === 0 ? 0 : Math.round(acceptedCount / totalCount * 100)
      };
      data.errors = _.orderBy(_.map(_.keys(allErrors), function (type) {
        return {
          type: type,
          description: pushNotificationErrorTypes[type] || defaultPushNotificationErrorMessage,
          count: allErrors[type]
        };
      }), ['count'], ['desc']);
      data.batches = _.get(notification, 'job.batches', {
        sent: 0,
        total: 0
      });
      return tpl(data);
    },
    notificationIsEditable: function notificationIsEditable(notification) {
      return notification.status !== 'published';
    },
    editNotification: function editNotification(notification) {
      Object(_store__WEBPACK_IMPORTED_MODULE_5__["setNotification"])(notification);
      _libs_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$emit('set-view', 'form');
    },
    cloneNotification: function cloneNotification(notification) {
      Object(_store__WEBPACK_IMPORTED_MODULE_5__["setNotification"])(_.pick(notification, ['status', 'type', 'data', 'scope', 'orderAt', 'pushNotification']));
      _libs_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$emit('set-view', 'form');
    },
    notificationIsDeletable: function notificationIsDeletable(notification) {
      return ['draft', 'scheduled'].indexOf(notification.status) > -1 || notification.type === 'in-app';
    },
    deleteNotification: function deleteNotification(notification) {
      var _this2 = this;
      var confirm = Promise.resolve();
      if (window.parent === window.self) {
        confirm = Promise.resolve(window.confirm('Are you sure you want to delete this notification? This cannot be undone.')); // eslint-disable-line no-alert
      } else {
        confirm = Fliplet.Modal.confirm({
          title: 'Delete notification',
          message: 'Are you sure you want to delete this notification? This cannot be undone.'
        });
      }
      return confirm.then(function (confirmed) {
        if (!confirmed) {
          return;
        }
        var removedIndex = _.findIndex(_this2.notifications, {
          id: notification.id
        });
        if (removedIndex < 0) {
          return;
        }
        _this2.notifications.splice(removedIndex, 1);
        return _this2.instance.remove(notification.id).then(function () {
          _this2.loadNotifications();
        })["catch"](function (error) {
          _this2.loadNotifications();
          Fliplet.Modal.alert({
            title: 'Error deleting notification',
            message: Fliplet.parseError(error)
          });
        });
      });
    },
    createNotification: function createNotification() {
      Object(_store__WEBPACK_IMPORTED_MODULE_5__["setNotification"])();
      _libs_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$emit('set-view', 'form');
    },
    loadNotifications: function loadNotifications(notificationId) {
      var _this3 = this;
      if (typeof notificationId === 'number' && _.findIndex(this.notifications, {
        id: notificationId
      }) === -1 && this.pageNumber !== 1) {
        this.pageNumber = 1;
        return;
      }
      this.isLoading = true;
      return this.instance.poll({
        includeLogs: true,
        offset: this.offset,
        limit: this.batchSize,
        includeAllScopes: true,
        publishToStream: false // Avoid saving the notification to storage
      }).then(function (response) {
        if (!response.entries.length && _this3.pageNumber > response.pageCount) {
          // Load last page
          _this3.pageNumber = response.pageCount;
          return;
        }
        _this3.isLoading = false;
        _this3.notifications = response.entries;
        _this3.pageCount = response.pageCount;
        _this3.pageNumber = response.pageNumber + 1;
      })["catch"](function (error) {
        Fliplet.Modal.alert({
          title: 'Error loading notifications',
          message: Fliplet.parseError(error)
        });
      });
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationLink_vue_vue_type_template_id_a5fc0596__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _NotificationLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationLink_vue_vue_type_template_id_a5fc0596__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationLink_vue_vue_type_template_id_a5fc0596__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NotificationLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationLink_vue_vue_type_template_id_a5fc0596__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationLink_vue_vue_type_template_id_a5fc0596__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationLink_vue_vue_type_template_id_a5fc0596__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.link.action
    ? _c(
        "p",
        [
          _vm.link.action === "screen"
            ? [
                _vm._v("\n    Screen link: "),
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.previewPage.apply(null, arguments)
                      },
                    },
                  },
                  [_vm._v(_vm._s(_vm.pageName))]
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.link.action === "url"
            ? [
                _vm._v("\n    URL link: "),
                _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.link.url,
                      target: "_blank",
                      title: _vm.link.url,
                    },
                  },
                  [_vm._v(_vm._s(_vm.linkHost))]
                ),
              ]
            : _vm._e(),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
//
//
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
      type: '',
      pageName: '',
      linkHost: '',
      openPage: false
    };
  },
  computed: {
    link: function link() {
      var link = _.get(this.notification, 'data.navigate', {});
      if (_.isNull(link)) {
        return {};
      }
      return link;
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  mounted: function mounted() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.pageName = this.getPageName();
      this.linkHost = this.getLinkHost();
    },
    getPageName: function getPageName() {
      if (this.link.action !== 'screen' || !this.link.page) {
        return '';
      }
      var appPages = Object(_store__WEBPACK_IMPORTED_MODULE_0__["getAppPages"])();
      var page = _.find(appPages, {
        id: parseInt(this.link.page, 10)
      });
      if (!page) {
        return '(Page not found)';
      }
      this.openPage = true;
      return page.title;
    },
    previewPage: function previewPage() {
      if (!this.openPage) {
        return;
      }
      Fliplet.Studio.emit('overlay', {
        name: 'page-preview',
        options: {
          size: 'medium',
          title: this.getPageName(),
          classes: 'preview-notification',
          data: {
            appId: Fliplet.Env.get('appId'),
            pageId: this.link.page,
            query: this.link.query
          }
        }
      });
    },
    getLinkHost: function getLinkHost() {
      if (!this.link.url) {
        return '';
      }
      var link = document.createElement('a');
      link.href = this.link.url;
      return link.host;
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultNotification", function() { return getDefaultNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppPages", function() { return setAppPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppPages", function() { return getAppPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getView", function() { return getView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setView", function() { return setView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotification", function() { return setNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotification", function() { return getNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationLinkAction", function() { return getNotificationLinkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageNumber", function() { return getPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPageNumber", function() { return setPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssetRoot", function() { return setAssetRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetRoot", function() { return getAssetRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowTimezone", function() { return getShowTimezone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setShowTimezone", function() { return setShowTimezone; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

var COOKIE = {
  showTimezone: '_show_timezone'
};
var COOKIE_EXPIRE_DAYS = 30;

// Define here the initial state of the app
function getDefaultNotification() {
  return {
    data: {
      title: '',
      message: '',
      navigate: {},
      audience: '',
      _metadata: {
        filters: [],
        subscriptions: [],
        schedule: 'now',
        notes: '',
        channels: []
      }
    }
  };
}
var state = {
  appPages: [],
  view: 'list',
  notification: getDefaultNotification(),
  assetRoot: location.origin,
  pageNumber: 1,
  // 1-based
  showTimezone: js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(COOKIE.showTimezone) === 'true'
};
function setAppPages(appPages) {
  state.appPages = appPages;
}
function getAppPages() {
  return state.appPages;
}
function getView() {
  return state.view;
}
function setView(view) {
  if (['list', 'form'].indexOf(view) === -1) {
    return;
  }
  state.view = view;
}
function setNotification(notification) {
  state.notification = _.defaultsDeep({}, notification, getDefaultNotification());
}
function getNotification() {
  return state.notification;
}
function getNotificationLinkAction() {
  return _.get(state.notification, 'data.navigate.action', '');
}
function getPageNumber() {
  return state.pageNumber || 1;
}
function setPageNumber(number) {
  state.pageNumber = Math.max(1, parseInt(number, 10) || 1);
}
function setAssetRoot(url) {
  state.assetRoot = url || location.origin;
}
function getAssetRoot() {
  return state.assetRoot;
}
function getShowTimezone() {
  return state.showTimezone;
}
function setShowTimezone(show) {
  state.showTimezone = !!show;
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(COOKIE.showTimezone, state.showTimezone, {
    expires: COOKIE_EXPIRE_DAYS
  });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationNotes_vue_vue_type_template_id_7c3cf4d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _NotificationNotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationNotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationNotes_vue_vue_type_template_id_7c3cf4d4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationNotes_vue_vue_type_template_id_7c3cf4d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NotificationNotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationNotes_vue_vue_type_template_id_7c3cf4d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationNotes_vue_vue_type_template_id_7c3cf4d4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationNotes_vue_vue_type_template_id_7c3cf4d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.notification.id
        ? _c("p", { staticClass: "notes-unsupported" }, [
            _vm._v("Not supported"),
          ])
        : [
            _vm.mode === "view"
              ? [
                  _vm.notes
                    ? [
                        _c("p", {
                          staticClass: "notes-content",
                          domProps: { innerHTML: _vm._s(_vm.getNotes()) },
                        }),
                        _vm._v(" "),
                        _c("p", { staticClass: "notes-toolbar" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-default",
                              on: {
                                click: function ($event) {
                                  return _vm.edit()
                                },
                              },
                            },
                            [_vm._v("Edit notes")]
                          ),
                        ]),
                      ]
                    : [
                        _c("p", { staticClass: "notes-toolbar" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-default",
                              on: {
                                click: function ($event) {
                                  return _vm.edit()
                                },
                              },
                            },
                            [_vm._v("Add notes")]
                          ),
                        ]),
                      ],
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.mode === "edit"
              ? [
                  _c("p", [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.notes,
                          expression: "notes",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        rows: "4",
                        placeholder:
                          "(Optional) Add some notes to this notification. Your users will not see this.",
                      },
                      domProps: { value: _vm.notes },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.notes = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        on: {
                          click: function ($event) {
                            return _vm.update()
                          },
                        },
                      },
                      [_vm._v("Save")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-default",
                        on: {
                          click: function ($event) {
                            return _vm.cancel()
                          },
                        },
                      },
                      [_vm._v("Cancel")]
                    ),
                  ]),
                ]
              : _vm._e(),
          ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationNotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationNotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _libs_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      instance: null,
      mode: 'view',
      notes: _.get(this.notification, 'data._metadata.notes'),
      cachedNotes: ''
    };
  },
  mounted: function mounted() {
    this.instance = Fliplet.Notifications.init();
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  watch: {
    mode: function mode() {
      _libs_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('autosize');
    }
  },
  methods: {
    getNotes: function getNotes() {
      return Object(_libs_string__WEBPACK_IMPORTED_MODULE_0__["nl2br"])(this.notes);
    },
    edit: function edit() {
      this.cachedNotes = this.notes;
      this.mode = 'edit';
    },
    cancel: function cancel() {
      this.notes = this.cachedNotes;
      this.mode = 'view';
    },
    update: function update() {
      var _this = this;
      _.set(this.notification, 'data._metadata.notes', this.notes);
      return this.instance.update(this.notification.id, _.pick(this.notification, 'data')).then(function () {
        _this.cachedNotes = '';
        _this.mode = 'view';
        _this.$emit('update:notification', _this.notification);
      })["catch"](function (error) {
        _.set(_this.notification, 'data._metadata.notes', _this.cachedNotes);
        Fliplet.Modal.alert({
          title: 'Error updating notes',
          message: Fliplet.parseError(error)
        });
      });
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nl2br", function() { return nl2br; });
function nl2br(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This bus can be used like a VueComponent
// and it simulates the Node EventEmitter
// bus.$emit bus.$on bus.$off
var bus = new Vue();
bus.callbacks = {};
/* harmony default export */ __webpack_exports__["default"] = (bus);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip_vue_vue_type_template_id_70596efa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _Tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tooltip_vue_vue_type_template_id_70596efa__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tooltip_vue_vue_type_template_id_70596efa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Tooltip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_template_id_70596efa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_template_id_70596efa__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_template_id_70596efa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      attrs: {
        "data-toggle": "tooltip",
        "data-placement": _vm.placement,
        title: _vm.title,
      },
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placement: {
      type: String,
      "default": 'top'
    },
    title: {
      type: String,
      required: true
    }
  },
  mounted: function mounted() {
    $(this.$el).tooltip({
      trigger: 'hover'
    });
  },
  unmounted: function unmounted() {
    $(this.$el).tooltip('destroy');
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popover_vue_vue_type_template_id_b98493b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _Popover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Popover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Popover_vue_vue_type_template_id_b98493b6__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Popover_vue_vue_type_template_id_b98493b6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Popover.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_b98493b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_b98493b6__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_b98493b6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      attrs: {
        "data-toggle": "popover",
        "data-placement": _vm.placement,
        title: _vm.title,
        "data-content": _vm.content,
        "data-trigger": _vm.trigger,
      },
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placement: {
      type: String,
      "default": 'top'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    trigger: {
      type: String,
      "default": 'focus'
    },
    html: {
      type: Boolean,
      "default": true
    }
  },
  mounted: function mounted() {
    $(this.$el).popover({
      html: this.html
    });
  },
  unmounted: function unmounted() {
    $(this.$el).popover('destroy');
  }
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var a=n[s]={exports:{},id:s,loaded:!1};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=n(1),i=s(a);e.exports=i.default},function(e,t,n){n(2);var s=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=s.exports},function(e,t,n){var s=n(3);"string"==typeof s&&(s=[[e.id,s,""]]);n(5)(s,{});s.locals&&(e.exports=s.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(s[i]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(e,t,n){function s(e,t){for(var n=0;n<e.length;n++){var s=e[n],a=c[s.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](s.parts[i]);for(;i<s.parts.length;i++)a.parts.push(l(s.parts[i],t))}else{for(var r=[],i=0;i<s.parts.length;i++)r.push(l(s.parts[i],t));c[s.id]={id:s.id,refs:1,parts:r}}}}function a(e){for(var t=[],n={},s=0;s<e.length;s++){var a=e[s],i=a[0],r=a[1],o=a[2],l=a[3],u={css:r,media:o,sourceMap:l};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=g(),s=C[C.length-1];if("top"===e.insertAt)s?s.nextSibling?n.insertBefore(t,s.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),C.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=C.indexOf(e);t>=0&&C.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e,t){var n,s,a;if(t.singleton){var i=v++;n=h||(h=o(t)),s=u.bind(null,n,i,!1),a=u.bind(null,n,i,!0)}else n=o(t),s=d.bind(null,n),a=function(){r(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else a()}}function u(e,t,n,s){var a=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var i=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function d(e,t){var n=t.css,s=t.media,a=t.sourceMap;if(s&&e.setAttribute("media",s),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,C=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return s(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var o=n[r],l=c[o.id];l.refs--,i.push(l)}if(e){var u=a(e);s(u,t)}for(var r=0;r<i.length;r++){var l=i[r];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete c[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,s){var a,i=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,i=e.default);var o="function"==typeof i?i.options:i;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),s){var l=o.computed||(o.computed={});Object.keys(s).forEach(function(e){var t=s[e];l[e]=function(){return t}})}return{esModule:a,exports:i,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var s={index:n,content:n+1,selected:n===this.selected-1};t[n]=s}else{for(var a=Math.floor(this.pageRange/2),i=function(n){var s={index:n,content:n+1,selected:n===e.selected-1};t[n]=s},r=function(e){var n={disabled:!0,breakView:!0};t[e]=n},o=0;o<this.marginPages;o++)i(o);var l=0;this.selected-a>0&&(l=this.selected-1-a);var u=l+this.pageRange-1;u>=this.pageCount&&(u=this.pageCount-1,l=u-this.pageRange+1);for(var d=l;d<=u&&d<=this.pageCount-1;d++)i(d);l>this.marginPages&&r(l-1),u+1<this.pageCount-this.marginPages&&r(u+1);for(var c=this.pageCount-1;c>=this.pageCount-this.marginPages;c--)i(c)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])]}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])])}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarDate", function() { return calendarDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* eslint-disable no-extend-native */

// Adds support for Date.prototype.setTimezoneOffset
// https://stackoverflow.com/questions/22724898/settimezoneoffset-globally-for-whole-script/40518781
Date.prototype.timezoneOffset = new Date().getTimezoneOffset();
Date.setTimezoneOffset = function (timezoneOffset) {
  this.prototype.timezoneOffset = timezoneOffset;
  return this;
};
Date.getTimezoneOffset = function () {
  return this.prototype.timezoneOffset;
};
Date.prototype.setTimezoneOffset = function (timezoneOffset) {
  this.timezoneOffset = timezoneOffset;
  return this;
};
Date.prototype.getTimezoneOffset = function () {
  return this.timezoneOffset;
};
Date.prototype.toString = function () {
  var offsetDate;
  var offsetTime;
  offsetTime = this.timezoneOffset * 60 * 1000;
  offsetDate = new Date(this.getTime() - offsetTime);
  return offsetDate.toUTCString();
};
['Milliseconds', 'Seconds', 'Minutes', 'Hours', 'Date', 'Month', 'FullYear', 'Year', 'Day'].forEach(function () {
  return function (key) {
    Date.prototype['get' + key] = function () {
      var offsetDate;
      var offsetTime;
      offsetTime = this.timezoneOffset * 60 * 1000;
      offsetDate = new Date(this.getTime() - offsetTime);
      return offsetDate['getUTC' + key]();
    };
    Date.prototype['set' + key] = function (value) {
      var offsetDate;
      var offsetTime;
      var time;
      offsetTime = this.timezoneOffset * 60 * 1000;
      offsetDate = new Date(this.getTime() - offsetTime);
      offsetDate['setUTC' + key](value);
      time = offsetDate.getTime() + offsetTime;
      this.setTime(time);
      return time;
    };
    return this;
  };
}(undefined));
function calendarDate(value) {
  return moment(value).calendar(null, {
    sameDay: '[Today at] h:mm A',
    nextDay: '[Tomorrow at ] h:mm A',
    nextWeek: 'dddd [at] h:mm A',
    lastDay: '[Yesterday at] h:mm A',
    lastWeek: '[Last] dddd [at] h:mm A',
    sameElse: 'MMMM Do YYYY'
  });
}
function formatDate(value, timezone) {
  // @param value (Moment | Date | Number | String) Number would be a UNIX timestamp in seconds
  var date;
  if (value instanceof moment) {
    date = value;
  } else if (value instanceof Date) {
    date = moment(value);
  } else if (typeof value === 'number' || parseFloat(value).toString() === value) {
    date = moment.utc(moment.unix(value));
  } else {
    date = moment(value);
  }
  if (!date.isValid()) {
    // Invalid date. Using current time as fallback.
    date = moment.utc();
  }
  if (timezone) {
    try {
      date.tz(timezone);
    } catch (e) {
      date.tz('UTC');
    }
  }
  return date.format('MMM D YYYY, h:mm A');
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timezones", function() { return timezones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetString", function() { return getOffsetString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetObject", function() { return getOffsetObject; });
var DEFAULT_TIMEZONE = 'Europe/London';
var timezones = [{
  value: 'Etc/GMT+12',
  label: 'International Date Line West'
}, {
  value: 'Pacific/Midway',
  label: 'Midway Island, Samoa'
}, {
  value: 'Pacific/Honolulu',
  label: 'Hawaii'
}, {
  value: 'US/Alaska',
  label: 'Alaska'
}, {
  value: 'America/Los_Angeles',
  label: 'Pacific Time (US & Canada)'
}, {
  value: 'America/Tijuana',
  label: 'Tijuana, Baja California'
}, {
  value: 'US/Arizona',
  label: 'Arizona'
}, {
  value: 'America/Chihuahua',
  label: 'Chihuahua, La Paz, Mazatlan'
}, {
  value: 'US/Mountain',
  label: 'Mountain Time (US & Canada)'
}, {
  value: 'America/Managua',
  label: 'Central America'
}, {
  value: 'US/Central',
  label: 'Central Time (US & Canada)'
}, {
  value: 'America/Mexico_City',
  label: 'Guadalajara, Mexico City, Monterrey'
}, {
  value: 'Canada/Saskatchewan',
  label: 'Saskatchewan'
}, {
  value: 'America/Bogota',
  label: 'Bogota, Lima, Quito, Rio Branco'
}, {
  value: 'US/Eastern',
  label: 'Eastern Time (US & Canada)'
}, {
  value: 'US/East-Indiana',
  label: 'Indiana (East)'
}, {
  value: 'Canada/Atlantic',
  label: 'Atlantic Time (Canada)'
}, {
  value: 'America/Caracas',
  label: 'Caracas, La Paz'
}, {
  value: 'America/Manaus',
  label: 'Manaus'
}, {
  value: 'America/Santiago',
  label: 'Santiago'
}, {
  value: 'Canada/Newfoundland',
  label: 'Newfoundland'
}, {
  value: 'America/Sao_Paulo',
  label: 'Brasilia'
}, {
  value: 'America/Argentina/Buenos_Aires',
  label: 'Buenos Aires, Georgetown'
}, {
  value: 'America/Godthab',
  label: 'Greenland'
}, {
  value: 'America/Montevideo',
  label: 'Montevideo'
}, {
  value: 'America/Noronha',
  label: 'Mid-Atlantic'
}, {
  value: 'Atlantic/Cape_Verde',
  label: 'Cape Verde Is.'
}, {
  value: 'Atlantic/Azores',
  label: 'Azores'
}, {
  value: 'Europe/London',
  label: 'Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London'
}, {
  value: 'Iceland',
  label: 'Reykjavik'
}, {
  value: 'Europe/Brussels',
  label: 'Brussels, Copenhagen, Madrid, Paris'
}, {
  value: 'Europe/Amsterdam',
  label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'
}, {
  value: 'Europe/Belgrade',
  label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague'
}, {
  value: 'Europe/Sarajevo',
  label: 'Sarajevo, Skopje, Warsaw, Zagreb'
}, {
  value: 'Africa/Lagos',
  label: 'West Central Africa'
}, {
  value: 'Asia/Amman',
  label: 'Amman'
}, {
  value: 'Europe/Athens',
  label: 'Athens, Bucharest, Istanbul'
}, {
  value: 'Asia/Beirut',
  label: 'Beirut'
}, {
  value: 'Africa/Cairo',
  label: 'Cairo'
}, {
  value: 'Africa/Harare',
  label: 'Harare, Pretoria'
}, {
  value: 'Europe/Helsinki',
  label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius'
}, {
  value: 'Asia/Jerusalem',
  label: 'Jerusalem'
}, {
  value: 'Europe/Minsk',
  label: 'Minsk'
}, {
  value: 'Africa/Windhoek',
  label: 'Windhoek'
}, {
  value: 'Asia/Kuwait',
  label: 'Kuwait, Riyadh, Baghdad'
}, {
  value: 'Europe/Moscow',
  label: 'Moscow, St. Petersburg, Volgograd'
}, {
  value: 'Africa/Nairobi',
  label: 'Nairobi'
}, {
  value: 'Asia/Tbilisi',
  label: 'Tbilisi'
}, {
  value: 'Asia/Tehran',
  label: 'Tehran'
}, {
  value: 'Asia/Muscat',
  label: 'Abu Dhabi, Muscat'
}, {
  value: 'Asia/Baku',
  label: 'Baku'
}, {
  value: 'Asia/Yerevan',
  label: 'Yerevan'
}, {
  value: 'Asia/Kabul',
  label: 'Kabul'
}, {
  value: 'Asia/Yekaterinburg',
  label: 'Yekaterinburg'
}, {
  value: 'Asia/Karachi',
  label: 'Islamabad, Karachi, Tashkent'
}, {
  value: 'Asia/Calcutta',
  label: 'Chennai, Kolkata, Mumbai, New Delhi'
}, {
  value: 'Asia/Calcutta',
  label: 'Sri Jayawardenapura'
}, {
  value: 'Asia/Katmandu',
  label: 'Kathmandu'
}, {
  value: 'Asia/Almaty',
  label: 'Almaty, Novosibirsk'
}, {
  value: 'Asia/Dhaka',
  label: 'Astana, Dhaka'
}, {
  value: 'Asia/Rangoon',
  label: 'Yangon (Rangoon)'
}, {
  value: 'Asia/Bangkok',
  label: 'Bangkok, Hanoi, Jakarta'
}, {
  value: 'Asia/Krasnoyarsk',
  label: 'Krasnoyarsk'
}, {
  value: 'Asia/Hong_Kong',
  label: 'Beijing, Chongqing, Hong Kong, Urumqi'
}, {
  value: 'Asia/Kuala_Lumpur',
  label: 'Kuala Lumpur, Singapore'
}, {
  value: 'Asia/Irkutsk',
  label: 'Irkutsk, Ulaan Bataar'
}, {
  value: 'Australia/Perth',
  label: 'Perth'
}, {
  value: 'Asia/Taipei',
  label: 'Taipei'
}, {
  value: 'Asia/Tokyo',
  label: 'Osaka, Sapporo, Tokyo'
}, {
  value: 'Asia/Seoul',
  label: 'Seoul'
}, {
  value: 'Asia/Yakutsk',
  label: 'Yakutsk'
}, {
  value: 'Australia/Adelaide',
  label: 'Adelaide'
}, {
  value: 'Australia/Darwin',
  label: 'Darwin'
}, {
  value: 'Australia/Brisbane',
  label: 'Brisbane'
}, {
  value: 'Australia/Canberra',
  label: 'Canberra, Melbourne, Sydney'
}, {
  value: 'Australia/Hobart',
  label: 'Hobart'
}, {
  value: 'Pacific/Guam',
  label: 'Guam, Port Moresby'
}, {
  value: 'Asia/Vladivostok',
  label: 'Vladivostok'
}, {
  value: 'Asia/Magadan',
  label: 'Magadan, Solomon Is., New Caledonia'
}, {
  value: 'Pacific/Auckland',
  label: 'Auckland, Wellington'
}, {
  value: 'Pacific/Fiji',
  label: 'Fiji, Kamchatka, Marshall Is.'
}, {
  value: 'Pacific/Tongatapu',
  label: 'Nuku\'alofa'
}];
function validate(name) {
  if (!name) {
    name = DEFAULT_TIMEZONE;
  }
  var zone = _.find(timezones, {
    value: name
  });
  if (zone) {
    return name;
  }
  zone = moment.tz.zone(name);
  if (!zone) {
    throw new Error("Timezone ".concat(name, " not found"));
  }
  var now = moment();
  var timezoneOffset = zone.utcOffset(now);
  return _.get(_.find(timezones, function (tz) {
    return moment.tz.zone(tz.value).utcOffset(now) === timezoneOffset;
  }), 'value');
}
function getOffset(timezone, date) {
  var zone = moment.tz.zone(timezone);
  if (date instanceof moment && date.isValid()) {
    date = date.toDate();
  }
  if (!(date instanceof Date)) {
    date = new Date();
  }
  date.setHours(12);
  if (!zone) {
    // Timezone name invalid
    // Default to UTC time
    return 0;
  }
  return zone.utcOffset(moment(date));
}
function getOffsetString(timezone, date) {
  var offset = getOffset(timezone, date);
  var hh = "0".concat(Math.floor(Math.abs(offset) / 60)).slice(-2);
  var mm = "0".concat(Math.round(Math.abs(offset) % 60)).slice(-2);
  var sign = offset > 0 ? '-' : '+';
  return "GMT".concat(sign).concat(hh, ":").concat(mm);
}
function getOffsetObject(timezone, date) {
  return {
    value: getOffset(timezone, date),
    label: getOffsetString(timezone, date)
  };
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationForm_vue_vue_type_template_id_fbe03602__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _NotificationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationForm_vue_vue_type_template_id_fbe03602__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationForm_vue_vue_type_template_id_fbe03602__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NotificationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationForm_vue_vue_type_template_id_fbe03602__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationForm_vue_vue_type_template_id_fbe03602__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationForm_vue_vue_type_template_id_fbe03602__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "notification-form" }, [
      _vm.isSaving
        ? _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "spinner-holder animated" }, [
              _c("div", { staticClass: "spinner-overlay" }),
              _vm._v(" "),
              _c("p", { domProps: { innerHTML: _vm._s(_vm.saveMessage) } }),
            ]),
          ])
        : _c(
            "div",
            { staticClass: "container-fluid" },
            [
              _c(
                "div",
                { staticClass: "steps-holder" },
                _vm._l(_vm.steps, function (stepObj, index) {
                  return _c("div", {
                    key: stepObj.name,
                    staticClass: "step",
                    class: { active: index === _vm.step },
                  })
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.steps[_vm.step].name === "configure",
                      expression: "steps[step].name === 'configure'",
                    },
                  ],
                  staticClass: "row",
                },
                [
                  _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
                    _c("h3", [_vm._v("Configure your notification")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group clearfix" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.notification.data.title,
                            expression: "notification.data.title",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter notification title",
                          "data-count-selector": "#title-count",
                          maxlength: _vm.titleCharacterLimit,
                          required: "",
                        },
                        domProps: { value: _vm.notification.data.title },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.notification.data,
                              "title",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "pull-right",
                          class: {
                            "text-success": _vm.titleCharactersRemaining >= 0,
                            "text-danger": _vm.titleCharactersRemaining < 0,
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.titleCharactersRemaining) + " character"
                          ),
                          _vm.titleCharactersRemaining !== 1
                            ? void 0
                            : _vm._e(),
                          _vm._v(" left"),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.title
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.title)),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group clearfix" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.notification.data.message,
                            expression: "notification.data.message",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          rows: "4",
                          placeholder:
                            "Enter notification message (15 words recommended)",
                          maxlength: _vm.messageCharacterLimit,
                          required: "",
                        },
                        domProps: { value: _vm.notification.data.message },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.notification.data,
                              "message",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "pull-right",
                          class: {
                            "text-success": _vm.messageCharactersRemaining >= 0,
                            "text-danger": _vm.messageCharactersRemaining < 0,
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.messageCharactersRemaining) +
                              " character"
                          ),
                          _vm.messageCharactersRemaining !== 1
                            ? void 0
                            : _vm._e(),
                          _vm._v(" left"),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.message
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.message)),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group clearfix" }, [
                      _c("h3", [_vm._v("Add a link")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "tab-selection" }, [
                        _c(
                          "span",
                          {
                            staticClass: "tab",
                            class: { active: _vm.linkAction === "" },
                            on: {
                              click: function ($event) {
                                _vm.linkAction = ""
                              },
                            },
                          },
                          [_vm._v("No link")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "tab",
                            class: { active: _vm.linkAction === "screen" },
                            on: {
                              click: function ($event) {
                                _vm.linkAction = "screen"
                              },
                            },
                          },
                          [_vm._v("Link to screen")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "tab",
                            class: { active: _vm.linkAction === "url" },
                            on: {
                              click: function ($event) {
                                _vm.linkAction = "url"
                              },
                            },
                          },
                          [_vm._v("Link to web page")]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.linkAction !== "none",
                            expression: "linkAction !== 'none'",
                          },
                        ],
                        staticClass: "clearfix link-providers",
                      },
                      [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.linkAction === "screen",
                                expression: "linkAction === 'screen'",
                              },
                            ],
                            staticClass: "form-group",
                          },
                          [
                            _c("div", { ref: "screenLinkProvider" }),
                            _vm._v(" "),
                            _vm.errors.screenLink
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors.screenLink)),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-center" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-default",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.previewScreenLink.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Preview target screen")]
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.linkAction === "url",
                                expression: "linkAction === 'url'",
                              },
                            ],
                            staticClass: "form-group",
                          },
                          [
                            _c("div", { ref: "urlLinkProvider" }),
                            _vm._v(" "),
                            _vm.errors.urlLink
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors.urlLink)),
                                ])
                              : _vm._e(),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "step-summary" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-default",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.cancel.apply(null, arguments)
                            },
                          },
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.nextStep.apply(null, arguments)
                            },
                          },
                        },
                        [_vm._v("Select recipients")]
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-link",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.save("draft")
                            },
                          },
                        },
                        [_vm._v("Save as draft")]
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _vm.steps[_vm.step].name === "recipients"
                ? _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-10 col-md-offset-1" },
                      [
                        _c("h3", [_vm._v("Send notification to...")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "tab-selection" }, [
                          _c(
                            "span",
                            {
                              staticClass: "tab",
                              class: { active: _vm.audience === "" },
                              on: {
                                click: function ($event) {
                                  _vm.audience = ""
                                },
                              },
                            },
                            [_vm._v("All users")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "tab",
                              class: { active: _vm.audience === "loggedIn" },
                              on: {
                                click: function ($event) {
                                  _vm.audience = "loggedIn"
                                },
                              },
                            },
                            [_vm._v("Signed in users")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "tab",
                              class: { active: _vm.audience === "sessions" },
                              on: {
                                click: function ($event) {
                                  _vm.audience = "sessions"
                                },
                              },
                            },
                            [_vm._v("Test sessions")]
                          ),
                        ]),
                        _vm._v(" "),
                        _vm.audience !== "sessions" && _vm.filters.length
                          ? [
                              _c("h4", [
                                _vm._v(
                                  "Recipients must match all of the following"
                                ),
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.filters, function (filter, index) {
                                return _c(
                                  "div",
                                  { key: index, staticClass: "filters" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "form-group clearfix" },
                                      [
                                        _c("div", { staticClass: "col-xs-1" }, [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn btn-circle btn-default",
                                              on: {
                                                click: function ($event) {
                                                  return _vm.removeFilter(index)
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-fw fa-minus",
                                              }),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-xs-4" }, [
                                          _c("p", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: filter.column,
                                                  expression: "filter.column",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                placeholder: "Field name",
                                              },
                                              domProps: {
                                                value: filter.column,
                                              },
                                              on: {
                                                input: function ($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    filter,
                                                    "column",
                                                    $event.target.value
                                                  )
                                                },
                                              },
                                            }),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-inline filter-path",
                                            },
                                            [
                                              !_vm.showFilterPath(filter)
                                                ? _c(
                                                    "a",
                                                    {
                                                      staticClass: "add-path",
                                                      attrs: {
                                                        href: "#",
                                                        tabindex: "-1",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.addFilterPath(
                                                            filter
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "This field is an object"
                                                      ),
                                                    ]
                                                  )
                                                : _c(
                                                    "div",
                                                    {
                                                      staticClass: "form-group",
                                                    },
                                                    [
                                                      _c(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "filter-path-label",
                                                        },
                                                        [_vm._v("Path")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: filter.path,
                                                            expression:
                                                              "filter.path",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          placeholder:
                                                            "e.g. companies[0].name",
                                                        },
                                                        domProps: {
                                                          value: filter.path,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              filter,
                                                              "path",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-fw fa-times",
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.removeFilterPath(
                                                              filter
                                                            )
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-xs-3" }, [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "select-proxy-display",
                                            },
                                            [
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: filter.condition,
                                                      expression:
                                                        "filter.condition",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "hidden-select form-control",
                                                  on: {
                                                    change: function ($event) {
                                                      var $$selectedVal =
                                                        Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function (o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function (o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                      _vm.$set(
                                                        filter,
                                                        "condition",
                                                        $event.target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      )
                                                    },
                                                  },
                                                },
                                                _vm._l(
                                                  _vm.filterTypes,
                                                  function (type) {
                                                    return _c("option", {
                                                      key: type.name,
                                                      domProps: {
                                                        value: type.name,
                                                        innerHTML: _vm._s(
                                                          type.label
                                                        ),
                                                      },
                                                    })
                                                  }
                                                ),
                                                0
                                              ),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass:
                                                  "icon fa fa-chevron-down",
                                              }),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-xs-4" },
                                          [
                                            _c("Filter-Value", {
                                              attrs: {
                                                type: _vm.getFilterValueType(
                                                  filter
                                                ),
                                                value: filter.value,
                                              },
                                              on: {
                                                "update:value": function (
                                                  $event
                                                ) {
                                                  return _vm.$set(
                                                    filter,
                                                    "value",
                                                    $event
                                                  )
                                                },
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              }),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.audience === "sessions"
                          ? [
                              _c("h4", [_vm._v("Session IDs")]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-center" }, [
                                _vm._v(
                                  "To test notifications with individual devices, enter the session ID for each device."
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                [
                                  _c("Token-Field", {
                                    attrs: {
                                      value: _vm.sessions,
                                      placeholder:
                                        "Separate multiple IDs with commas",
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        _vm.sessions = $event
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._m(0),
                              _vm._v(" "),
                              _vm.errors.sessions
                                ? _c(
                                    "p",
                                    { staticClass: "text-center text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.sessions))]
                                  )
                                : _vm._e(),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xs-12 filter-summary" }, [
                          _c("div", { staticClass: "col-xs-8" }, [
                            _vm.audience !== "sessions"
                              ? _c("p", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-default",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.addFilter.apply(
                                            null,
                                            arguments
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-fw fa-plus",
                                      }),
                                      _vm._v(" Add filter"),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "filter-help",
                                      attrs: {
                                        href: "https://help.fliplet.com/notifications-component/",
                                        target: "_blank",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "How to add data for filtering users"
                                      ),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-xs-4 text-right" }, [
                            _c("p", [
                              _vm.audience !== "" || _vm.filterScopes.length
                                ? _c(
                                    "span",
                                    { staticClass: "recipient-count" },
                                    [
                                      _vm.loadingMatches
                                        ? [
                                            _vm._v(
                                              "\n                    Estimating...\n                  "
                                            ),
                                          ]
                                        : [
                                            _vm._v(
                                              "\n                    Estimated: " +
                                                _vm._s(_vm.matches.count) +
                                                " user"
                                            ),
                                            _vm.matches.count !== 1
                                              ? [_vm._v("s")]
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "tooltip",
                                              {
                                                attrs: {
                                                  title:
                                                    "This is an approximation and will depend on the user preference at the time of publish. Users who have never used the app will be excluded.",
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-info-circle",
                                                }),
                                              ]
                                            ),
                                          ],
                                    ],
                                    2
                                  )
                                : _vm._e(),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("h3", [_vm._v("Notes")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notes,
                                expression: "notes",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              rows: "4",
                              placeholder:
                                "(Optional) Add some notes to this notification. Your users will not see this.",
                            },
                            domProps: { value: _vm.notes },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.notes = $event.target.value
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "step-summary" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-default",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.prevStep.apply(null, arguments)
                                },
                              },
                            },
                            [_vm._v("Back")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.nextStep.apply(null, arguments)
                                },
                              },
                            },
                            [_vm._v("Prepare for send")]
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-link",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.save("draft")
                                },
                              },
                            },
                            [_vm._v("Save as draft")]
                          ),
                        ]),
                      ],
                      2
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.steps[_vm.step].name === "schedule"
                ? [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
                        _c("div", { staticClass: "tab-selection" }, [
                          _c(
                            "span",
                            {
                              staticClass: "tab",
                              class: { active: _vm.schedule === "now" },
                              on: {
                                click: function ($event) {
                                  _vm.schedule = "now"
                                },
                              },
                            },
                            [_vm._v("Now")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "tab",
                              class: { active: _vm.schedule === "scheduled" },
                              on: {
                                click: function ($event) {
                                  _vm.schedule = "scheduled"
                                },
                              },
                            },
                            [_vm._v("Later")]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.schedule === "scheduled"
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-8 col-md-offset-2 text-center",
                            },
                            [
                              _c("Datepicker", {
                                attrs: {
                                  inline: true,
                                  "monday-first": true,
                                  required: true,
                                  "disabled-dates": _vm.disabledDates,
                                },
                                on: {
                                  changedMonth: _vm.autosize,
                                  changedYear: _vm.autosize,
                                  changedDecade: _vm.autosize,
                                },
                                model: {
                                  value: _vm.scheduledAtDate,
                                  callback: function ($$v) {
                                    _vm.scheduledAtDate = $$v
                                  },
                                  expression: "scheduledAtDate",
                                },
                              }),
                              _vm._v(" "),
                              _c("Timepicker", {
                                attrs: {
                                  hour: _vm.scheduledAtHour,
                                  minute: _vm.scheduledAtMinute,
                                  timezone: _vm.scheduledAtTimezone,
                                  date: _vm.scheduledAtDate,
                                },
                                on: {
                                  "update:hour": function ($event) {
                                    _vm.scheduledAtHour = $event
                                  },
                                  "update:minute": function ($event) {
                                    _vm.scheduledAtMinute = $event
                                  },
                                  "update:timezone": function ($event) {
                                    _vm.scheduledAtTimezone = $event
                                  },
                                  "update:date": function ($event) {
                                    _vm.scheduledAtDate = $event
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("h3", [_vm._v("Show notification as...")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
                        _c("div", { staticClass: "tab-selection" }, [
                          _c(
                            "span",
                            {
                              staticClass: "tab tab-checked",
                              class: {
                                active: _vm.notificationHasChannel("in-app"),
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.toggleNotificationChannel("in-app")
                                },
                              },
                            },
                            [_vm._v("In-app notification")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "tab tab-checked",
                              class: {
                                active: _vm.notificationHasChannel("push"),
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.toggleNotificationChannel("push")
                                },
                              },
                            },
                            [_vm._v("Push notification")]
                          ),
                        ]),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        !_vm.pushIsConfigured
                          ? _c("div", { staticClass: "alert alert-warning" }, [
                              _vm._v(
                                "To send push notifications to your native app, you must configure push notifications on "
                              ),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "https://help.fliplet.com/configure-push-notifications-for-ios/",
                                    target: "_blank",
                                  },
                                },
                                [_vm._v("iOS")]
                              ),
                              _vm._v(" and "),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "https://help.fliplet.com/configure-push-notifications-for-android/",
                                    target: "_blank",
                                  },
                                },
                                [_vm._v("Android")]
                              ),
                              _vm._v("."),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.channels
                          ? _c(
                              "p",
                              { staticClass: "text-center text-danger" },
                              [_vm._v(_vm._s(_vm.errors.channels))]
                            )
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
                        _c("p", { staticClass: "step-summary" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-default",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.prevStep.apply(null, arguments)
                                },
                              },
                            },
                            [_vm._v("Back")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.nextStep.apply(null, arguments)
                                },
                              },
                            },
                            [_vm._v("Review")]
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-link",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.save("draft")
                                },
                              },
                            },
                            [_vm._v("Save as draft")]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.steps[_vm.step].name === "review",
                      expression: "steps[step].name === 'review'",
                    },
                  ],
                  staticClass: "row notification-review",
                },
                [
                  _c(
                    "div",
                    { staticClass: "col-md-10 col-md-offset-1" },
                    [
                      _c("h3", [_vm._v("Your notification")]),
                      _vm._v(" "),
                      _vm.notificationHasChannel("in-app")
                        ? [
                            _c("div", { staticClass: "notification-message" }, [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.notification.data.title)),
                              ]),
                              _c("br"),
                              _vm._v(
                                _vm._s(_vm.notification.data.message) +
                                  "\n            "
                              ),
                            ]),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.notificationHasChannel("push")
                        ? _c(
                            "div",
                            { staticClass: "push-notification-preview" },
                            [
                              _vm.notificationHasChannel("in-app")
                                ? _c("h4", [
                                    _vm._v(
                                      "A push notification will also be sent"
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._m(3),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "visible-sm-block visible-md-block visible-lg-block",
                                  attrs: { id: "notification-message-preview" },
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: _vm.getAsset(
                                        "img/notifications_device_preview_empty.jpg"
                                      ),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: {
                                        id: "notification-preview-home",
                                      },
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "app-icon-preview",
                                        attrs: { src: _vm.appIcon },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "strong",
                                        { staticClass: "app-name" },
                                        [_vm._v(_vm._s(_vm.appName))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "notification-message" },
                                        [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.notification.data.title
                                              )
                                            ),
                                          ]),
                                          _c("br"),
                                          _vm._v(
                                            _vm._s(
                                              _vm.notification.data.message
                                            ) + "\n                "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: {
                                        id: "notification-preview-icon-home",
                                      },
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "app-icon-preview",
                                        attrs: { src: _vm.appIcon },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "strong",
                                        { staticClass: "app-name" },
                                        [_vm._v(_vm._s(_vm.appName))]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: {
                                        id: "notification-preview-lockscreen",
                                      },
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "app-icon-preview",
                                        attrs: { src: _vm.appIcon },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "strong",
                                        { staticClass: "app-name" },
                                        [_vm._v(_vm._s(_vm.appName))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "notification-message" },
                                        [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.notification.data.title
                                              )
                                            ),
                                          ]),
                                          _c("br"),
                                          _vm._v(
                                            _vm._s(
                                              _vm.notification.data.message
                                            ) + "\n                "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: {
                                        id: "notification-preview-notification-center",
                                      },
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "app-icon-preview",
                                        attrs: { src: _vm.appIcon },
                                      }),
                                      _vm._v(" "),
                                      _c("strong", { staticClass: "app-name" }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "notification-message" },
                                        [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.notification.data.title
                                              )
                                            ),
                                          ]),
                                          _c("br"),
                                          _vm._v(
                                            _vm._s(
                                              _vm.notification.data.message
                                            ) + "\n                "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "h4",
                        [
                          _vm._v("Sending to\n            "),
                          _vm.audience === "" && !_vm.filterScopes.length
                            ? [_vm._v("all users")]
                            : [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.matches.count)),
                                ]),
                                _vm._v(
                                  " " + _vm._s(_vm.audienceVerbose) + " user"
                                ),
                                _vm.matches.count !== 1
                                  ? [_vm._v("s")]
                                  : _vm._e(),
                              ],
                          _vm._v(" "),
                          _vm.filterScopes.length
                            ? [_vm._v("matching all of the following")]
                            : _vm._e(),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.filterScopes.length
                        ? [
                            _c(
                              "ul",
                              { staticClass: "filter-summary-items" },
                              _vm._l(_vm.filters, function (filter, index) {
                                return _c("li", {
                                  key: index,
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.getFilterVerbose(filter)
                                    ),
                                  },
                                })
                              }),
                              0
                            ),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v(
                          "Send the notification " + _vm._s(_vm.scheduleVerbose)
                        ),
                      ]),
                      _vm._v(" "),
                      _vm.schedule === "scheduled"
                        ? _c("p", {
                            domProps: {
                              innerHTML: _vm._s(_vm.notificationDate),
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", { staticClass: "step-summary" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-default",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.prevStep.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Back")]
                        ),
                        _vm._v(" "),
                        _c("a", {
                          staticClass: "btn btn-primary",
                          attrs: { href: "#" },
                          domProps: { innerHTML: _vm._s(_vm.getSendLabel()) },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.send()
                            },
                          },
                        }),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-link",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.save("draft")
                              },
                            },
                          },
                          [_vm._v("Save as draft")]
                        ),
                      ]),
                    ],
                    2
                  ),
                ]
              ),
            ],
            2
          ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "help-block text-center" }, [
      _vm._v("You can find your session ID by going to "),
      _c("strong", [_vm._v("About this app")]),
      _vm._v(" in the app on your device."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10 col-md-offset-1" }, [
        _c("h3", [_vm._v("Send notification...")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("strong", [_vm._v("New!")]),
      _vm._v(" Web apps can now receive push notifications."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("small", { staticClass: "text-info" }, [
        _vm._v(
          "Appearance of the notification is subject to users' device, preference and accepting to receive notifications."
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _libs_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _libs_scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _libs_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _libs_timezones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _FilterValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _Timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55);
/* harmony import */ var _TokenField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











var defaultFilter = {
  column: '',
  condition: 'equals',
  value: ''
};
var defaultAudience = '';
var defaultSchedule = 'now';
var defaultScheduledAt = moment().add(2, 'hours');
var defaultConfirmationMessage = 'Your notification is saved.';
var defaultSaveMessage = 'Saving';
var defaultSendLabel = 'Send notification';
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isSaving: false,
      saveMessage: 'Saving',
      showTimezone: Object(_store__WEBPACK_IMPORTED_MODULE_0__["getShowTimezone"])(),
      appName: Fliplet.Env.get('appName'),
      appIcon: '',
      notification: Object(_store__WEBPACK_IMPORTED_MODULE_0__["getNotification"])(),
      titleCharacterLimit: 50,
      messageCharacterLimit: 250,
      instance: null,
      assetRoot: Object(_store__WEBPACK_IMPORTED_MODULE_0__["getAssetRoot"])(),
      step: 0,
      steps: [{
        name: 'configure'
      }, {
        name: 'recipients'
      }, {
        name: 'schedule'
      }, {
        name: 'review'
      }],
      filterTypes: _libs_scope__WEBPACK_IMPORTED_MODULE_2__["filterTypes"],
      linkAction: Object(_store__WEBPACK_IMPORTED_MODULE_0__["getNotificationLinkAction"])(),
      scheduledAtDate: defaultScheduledAt.clone().startOf('day').toDate(),
      scheduledAtHour: defaultScheduledAt.get('hour'),
      scheduledAtMinute: defaultScheduledAt.get('minute'),
      scheduledAtTimezone: Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_4__["validate"])(moment.tz.guess()),
      disabledDates: {
        to: moment().subtract(1, 'days').toDate()
      },
      sessions: [],
      showScreenPreview: false,
      screenLinkProvider: null,
      urlLinkProvider: null,
      channels: ['in-app', 'push'],
      matches: {
        count: 0,
        subscriptions: 0,
        matches: {
          entries: [],
          sessions: []
        }
      },
      debouncedGetMatches: _.debounce(this.getMatches, 1500),
      matchQuery: null,
      loadingMatches: true,
      errors: {},
      widgetData: Fliplet.Widget.getData()
    };
  },
  components: {
    Tooltip: _Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"],
    FilterValue: _FilterValue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_9__["default"],
    Timepicker: _Timepicker__WEBPACK_IMPORTED_MODULE_7__["default"],
    TokenField: _TokenField__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mounted: function mounted() {
    var _this = this;
    this.appIcon = this.getAsset('img/app-icon.png');
    this.notification = _.defaultsDeep(this.notification, Object(_store__WEBPACK_IMPORTED_MODULE_0__["getDefaultNotification"])());
    this.channels = _.get(this.notification, 'data._metadata.channels', []);

    // Always default to both in-app and push if no channels are set
    if (!this.channels.length) {
      this.channels = ['in-app', 'push'];
    }
    var sessions = _.get(this.notification, 'data._metadata.sessions');
    if (_.isArray(sessions) && sessions.length) {
      _.forEach(sessions, function (sessionId) {
        _this.sessions.push(sessionId);
      });
    }
    this.instance = Fliplet.Notifications.init();
    this.getMatches();
    this.initializeProviders();
    if (this.schedule === 'scheduled') {
      var date = moment.utc(moment.unix(_.get(this.notification, 'data._metadata.scheduledAt')));
      if (!date.isValid()) {
        date = moment.utc().unix();
      }
      this.scheduledAtTimezone = Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_4__["validate"])(_.get(this.notification, 'data._metadata.scheduledAtTimezone'));
      date.tz(this.scheduledAtTimezone);

      // Use "Z" to indicate UTC timezone in the date string
      this.scheduledAtDate = new Date("".concat(date.clone().startOf('day').locale('en-us').format('YYYY-MM-DDT00:00:00'), "Z"));
      this.scheduledAtHour = date.get('hour');
      this.scheduledAtMinute = date.get('minute');
    }
    Fliplet.Apps.get().then(function (apps) {
      var app = _.find(apps, {
        id: Fliplet.Env.get('appId')
      });
      if (!app) {
        return;
      }
      _this.appIcon = app.icon;
    });
  },
  computed: {
    titleCharactersRemaining: function titleCharactersRemaining() {
      return this.titleCharacterLimit - this.notification.data.title.length;
    },
    messageCharactersRemaining: function messageCharactersRemaining() {
      return this.messageCharacterLimit - this.notification.data.message.length;
    },
    pushIsConfigured: function pushIsConfigured() {
      return this.widgetData && (this.widgetData.apn || this.widgetData.gcm || this.widgetData.wns);
    },
    schedule: {
      get: function get() {
        var schedule = _.get(this.notification, 'data._metadata.schedule');
        if (!schedule) {
          return defaultSchedule;
        }
        return ['now', 'scheduled'].indexOf(schedule) > -1 ? schedule : defaultSchedule;
      },
      set: function set(schedule) {
        return _.set(this.notification, 'data._metadata.schedule', schedule);
      }
    },
    audience: {
      get: function get() {
        var audience = _.get(this.notification, 'data.audience', defaultAudience);
        if (!audience) {
          return defaultAudience;
        }
        return ['loggedIn', 'sessions'].indexOf(audience) > -1 ? audience : defaultAudience;
      },
      set: function set(audience) {
        if (['loggedIn', 'sessions'].indexOf(audience) < 0) {
          audience = defaultAudience;
        }
        _.set(this.notification, 'data.audience', audience);
      }
    },
    audienceVerbose: function audienceVerbose() {
      switch (this.audience) {
        case 'loggedIn':
          return 'signed in';
        case 'sessions':
          return 'test device';
        default:
          return '';
      }
    },
    scheduleVerbose: function scheduleVerbose() {
      switch (this.schedule) {
        case 'scheduled':
          return 'later';
        default:
        case 'now':
          return 'now';
      }
    },
    filters: function filters() {
      return _.get(this.notification, 'data._metadata.filters', []) || [];
    },
    notes: {
      get: function get() {
        return _.get(this.notification, 'data._metadata.notes', '') || '';
      },
      set: function set(notes) {
        return _.set(this.notification, 'data._metadata.notes', notes);
      }
    },
    filterScopes: function filterScopes() {
      return _.compact(_.map(this.filters, _libs_scope__WEBPACK_IMPORTED_MODULE_2__["getFilterScope"]));
    },
    scope: function scope() {
      if (this.audience === 'sessions') {
        return {
          flSessionId: this.validateSessions(this.sessions) || []
        };
      }
      return this.filterScopes.length ? {
        $and: this.filterScopes
      } : {};
    },
    scheduledAt: function scheduledAt() {
      var timestamp = moment.tz([this.scheduledAtDate.getFullYear(), this.scheduledAtDate.getMonth(), this.scheduledAtDate.getDate(), this.scheduledAtHour, this.scheduledAtMinute], this.scheduledAtTimezone);
      return timestamp.utc().unix();
    },
    orderAt: function orderAt() {
      if (this.schedule === 'scheduled') {
        return this.scheduledAt;
      }
      return moment().unix();
    },
    notificationTimezone: function notificationTimezone() {
      var date = moment.unix(this.orderAt).toDate();
      return Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_4__["getOffsetString"])(this.scheduledAtTimezone, date);
    },
    notificationDate: function notificationDate() {
      return "".concat(Object(_libs_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.orderAt, this.scheduledAtTimezone), " ").concat(this.notificationTimezone);
    },
    type: function type() {
      if (this.notificationHasChannel('in-app') || !this.notificationHasChannel('push')) {
        return 'in-app';
      }
      return 'push';
    }
  },
  watch: {
    isSaving: function isSaving() {
      this.autosize();
    },
    notification: function notification() {
      this.autosize();
    },
    errors: function errors() {
      this.autosize();
    },
    step: function step() {
      this.autosize();
      Fliplet.Studio.emit('overlay-scroll-top', {
        name: 'notifications'
      });
    },
    schedule: function schedule() {
      this.autosize();
    },
    linkAction: function linkAction() {
      this.autosize();
    },
    audience: function audience() {
      this.autosize();
      this.getMatches();
    },
    filters: {
      deep: true,
      handler: function handler() {
        this.autosize();
        this.debouncedGetMatches();
      }
    },
    sessions: function sessions() {
      this.getMatches();
    }
  },
  methods: {
    getFilterVerbose: _libs_scope__WEBPACK_IMPORTED_MODULE_2__["getFilterVerbose"],
    cancel: function cancel() {
      _libs_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('set-view', 'list');
    },
    backToNotifications: function backToNotifications(options) {
      options = options || {};
      _libs_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('set-view', 'list');
      _libs_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('refresh-list', options.notificationId);
    },
    autosize: function autosize() {
      _libs_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('autosize');
    },
    getErrors: function getErrors() {
      this.errors = {};
      switch (this.steps[this.step].name) {
        case 'configure':
          if (!_.get(this.notification, 'data.title')) {
            Vue.set(this.errors, 'title', 'Please enter a title');
          }
          if (!this.titleCharactersRemaining < 0) {
            Vue.set(this.errors, 'title', "Title must be no longer than ".concat(this.titleCharacterLimit, " characters"));
          }
          if (!_.get(this.notification, 'data.message')) {
            Vue.set(this.errors, 'message', 'Please enter a message');
          }
          if (!this.messageCharactersRemaining < 0) {
            Vue.set(this.errors, 'message', "Message must be no longer than ".concat(this.messageCharacterLimit, " characters"));
          }
          break;
        case 'recipients':
          if (this.audience === 'sessions' && !this.sessions.length) {
            Vue.set(this.errors, 'sessions', 'Please enter one or more device IDs');
          }
          break;
        case 'schedule':
          if (!this.channels.length) {
            Vue.set(this.errors, 'channels', 'Please select one or more notification types');
          }
          break;
        default:
          break;
      }
    },
    stepIsValid: function stepIsValid() {
      this.getErrors();
      return _.isEmpty(this.errors);
    },
    nextStep: function nextStep() {
      if (!this.stepIsValid()) {
        return;
      }
      this.step = Math.min(this.step + 1, this.steps.length - 1);
    },
    prevStep: function prevStep() {
      this.step = Math.max(0, this.step - 1);
    },
    goToStep: function goToStep(name) {
      this.step = _.findIndex(this.steps, {
        name: name
      });
    },
    validateSessions: function validateSessions(sessions) {
      if (typeof sessions === 'string') {
        sessions = sessions.split(',');
      }
      if (!_.isArray(sessions)) {
        sessions = [sessions];
      }
      sessions = _.compact(_.map(sessions, function (id) {
        return parseInt(id, 10);
      }));
      return sessions;
    },
    getAsset: function getAsset(path) {
      return "".concat(this.assetRoot, "/").concat(path);
    },
    notificationHasChannel: function notificationHasChannel(channel) {
      return _.includes(this.channels, channel);
    },
    addNotificationChannel: function addNotificationChannel(channel) {
      if (this.channels.indexOf(channel) === -1) {
        this.channels.push(channel);
      }
    },
    removeNotificationChannel: function removeNotificationChannel(channel) {
      if (this.channels.indexOf(channel) > -1) {
        this.channels.splice(this.channels.indexOf(channel), 1);
      }
    },
    getMatches: function getMatches() {
      var _this2 = this;
      if (!this.instance) {
        return Promise.resolve();
      }
      if (!this.audience && !this.filterScopes.length) {
        // Don't calculate matches if it's for all users
        return Promise.resolve();
      }
      var matchQuery = {
        isPushNotificationWidget: true,
        audience: this.audience,
        scope: this.scope,
        includeMatches: true
      };
      if (this.matchQuery !== null && _.isEqual(matchQuery, this.matchQuery)) {
        return Promise.resolve();
      }
      this.matchQuery = matchQuery;
      this.loadingMatches = true;
      return this.instance.getMatches(matchQuery).then(function (results) {
        _this2.loadingMatches = false;
        _this2.matches = results;
      })["catch"](function () {
        _this2.loadingMatches = false;
      });
    },
    toggleNotificationChannel: function toggleNotificationChannel(channel, enable) {
      if (typeof enable !== 'undefined') {
        this[enable ? 'addNotificationChannel' : 'removeNotificationChannel'](channel);
        return;
      }
      this[!this.notificationHasChannel(channel) ? 'addNotificationChannel' : 'removeNotificationChannel'](channel);
    },
    getFilterValueType: function getFilterValueType(filter) {
      switch (filter.condition) {
        case 'empty':
        case 'notempty':
          return 'none';
        case 'oneof':
        case 'notoneof':
          return 'collection';
        case 'equals':
        case 'notequal':
        case 'contains':
        case 'notcontain':
        case 'gt':
        case 'gte':
        case 'lt':
        case 'lte':
        default:
          return 'text';
      }
    },
    showFilterPath: function showFilterPath(filter) {
      return filter.path || filter.showPath;
    },
    addFilterPath: function addFilterPath(filter) {
      Vue.set(filter, 'showPath', true);
      Vue.set(filter, 'path', '');
    },
    removeFilterPath: function removeFilterPath(filter) {
      Vue.set(filter, 'showPath', false);
      Vue["delete"](filter, 'path');
    },
    initializeProviders: function initializeProviders() {
      this.$refs.screenLinkProvider.innerHTML = '';
      this.screenLinkProvider = Fliplet.Widget.open('com.fliplet.link', {
        selector: this.$refs.screenLinkProvider,
        data: _.get(this.notification, 'data.navigate.action') === 'screen' ? _.merge({
          options: {
            hideTransition: true
          }
        }, this.notification.data.navigate) : {
          action: 'screen',
          page: '',
          transition: 'none',
          options: {
            hideAction: true,
            hideTransition: true
          }
        },
        closeOnSave: false
      });
      this.$refs.urlLinkProvider.innerHTML = '';
      this.urlLinkProvider = Fliplet.Widget.open('com.fliplet.link', {
        selector: this.$refs.urlLinkProvider,
        data: _.get(this.notification, 'data.navigate.action') === 'url' ? this.notification.data.navigate : {
          action: 'url',
          url: '',
          options: {
            hideAction: true
          }
        },
        closeOnSave: false
      });
    },
    addFilter: function addFilter() {
      var _this3 = this;
      this.filters.push({});
      _.forIn(defaultFilter, function (value, key) {
        Vue.set(_this3.filters[_this3.filters.length - 1], key, value);
      });
    },
    removeFilter: function removeFilter(index) {
      this.filters.splice(index, 1);
    },
    openScreenPreview: function openScreenPreview() {
      if (!_.get(this.notification, 'data.navigate.page')) {
        Fliplet.Modal.alert({
          message: 'Please select a screen to preview'
        });
        return;
      }
      if (window.parent === window.self) {
        alert('Preview only works in Fliplet Studio'); // eslint-disable-line no-alert

        return;
      }
      Fliplet.Studio.emit('overlay', {
        name: 'page-preview',
        options: {
          size: 'medium',
          title: 'Previewing target screen',
          classes: 'preview-notification',
          data: {
            appId: Fliplet.Env.get('appId'),
            pageId: this.notification.data.navigate.page,
            query: this.notification.data.navigate.query
          }
        }
      });
    },
    previewScreenLink: function previewScreenLink() {
      if (!this.screenLinkProvider || this.linkAction !== 'screen') {
        return;
      }
      this.showScreenPreview = true;
      this.save();
    },
    send: function send() {
      if (this.schedule === 'scheduled') {
        this.save('scheduled');
        return;
      }
      this.save('published');
    },
    getConfirmationMessage: function getConfirmationMessage(from, to) {
      // Returns a confirmation message based on the status
      // the notification is going from and to
      if (from === to) {
        return defaultConfirmationMessage;
      }
      if (to === 'published') {
        return 'Your notification is sent.';
      }
      if (from === 'draft' && to === 'scheduled') {
        return 'Your notification is scheduled.';
      }
      if (from === 'scheduled' && to === 'draft') {
        return 'Your notification is saved as draft.';
      }
      return defaultConfirmationMessage;
    },
    getSaveMessage: function getSaveMessage(from, to) {
      // Returns a save message based on the status
      // the notification is going from and to
      if (to === 'draft') {
        return 'Saving as draft';
      }
      if (to === 'published') {
        return 'Sending notification';
      }
      if (to === 'scheduled') {
        if (from === 'draft') {
          return 'Scheduling notification';
        }
        if (from === 'scheduled') {
          return 'Saving notification';
        }
      }
      return defaultSaveMessage;
    },
    getSendLabel: function getSendLabel() {
      if (this.schedule === 'now') {
        return 'Send notification';
      }
      if (this.schedule === 'scheduled') {
        if (this.notification.status === 'scheduled') {
          return 'Save notification';
        }
        return 'Schedule notification';
      }
      return defaultSendLabel;
    },
    save: function save(status) {
      var _this4 = this;
      var saveLinkProvider = Promise.resolve();
      var statusFrom = this.notification.status || 'draft';
      if (typeof status === 'undefined') {
        status = statusFrom;
      }
      var statusTo = status;
      switch (this.linkAction) {
        case 'screen':
          saveLinkProvider = this.screenLinkProvider;
          this.screenLinkProvider.forwardSaveRequest();
          break;
        case 'url':
          saveLinkProvider = this.urlLinkProvider;
          this.urlLinkProvider.forwardSaveRequest();
          break;
        default:
          break;
      }
      return new Promise(function (resolve) {
        saveLinkProvider.then(function (results) {
          _this4.notification.data.navigate = _.get(results, 'data', {});
          switch (_this4.linkAction) {
            case 'screen':
              _this4.screenLinkProvider = null;
              break;
            case 'url':
              _this4.urlLinkProvider = null;
              break;
            default:
              break;
          }
          _this4.initializeProviders();
          if (_this4.showScreenPreview) {
            _this4.showScreenPreview = false;
            _this4.openScreenPreview();
            return;
          }
          if (!_this4.stepIsValid()) {
            return;
          }
          _.remove(_this4.filters, function (filter) {
            return !filter.column || !filter.value && ['empty', 'notempty'].indexOf(filter.condition) < 0;
          });
          _.merge(_this4.notification, {
            isPushNotificationWidget: true,
            status: status,
            type: _this4.type,
            orderAt: _this4.orderAt,
            data: {
              audience: _this4.audience,
              _metadata: {
                scheduledAtTimezone: _this4.scheduledAtTimezone,
                scheduledAt: _this4.scheduledAt,
                schedule: _this4.schedule,
                notes: _this4.notes,
                channels: _this4.channels
              }
            }
          });
          if (!_.isEmpty(_this4.scope)) {
            _this4.notification.scope = _this4.scope;
          } else {
            // Ensures notification scope is never empty
            delete _this4.notification.scope;
          }

          // Array properties are separated to ensure the arrays are overwritten with new values
          _.assign(_this4.notification._metadata, {
            scope: _this4.scope,
            filters: _this4.audience !== 'sessions' ? _this4.filters : [],
            sessions: _this4.audience === 'sessions' ? _this4.validateSessions(_this4.sessions) : undefined
          });
          if (_.get(_this4.notification, 'data.navigate') && _.isEmpty(_this4.notification.data.navigate)) {
            delete _this4.notification.data.navigate;
          }
          if (status !== 'scheduled') {
            delete _this4.notification.orderAt;
          }
          if (_this4.notificationHasChannel('push') && status !== 'draft') {
            // Do not assign push notification payload when saving a draft.
            // The backend will send a push notification to users.
            var pushNotification = {
              payload: {
                title: _this4.notification.data.title,
                body: _this4.notification.data.message,
                icon: 'icon_notification',
                priority: 'high',
                sound: 'default'
              }
            };
            if (_this4.notification.data.navigate) {
              _.set(pushNotification, 'payload.custom.customData', _this4.notification.data.navigate);
            }
            _this4.notification.pushNotification = pushNotification;
          }
          _this4.isSaving = true;
          _this4.saveMessage = _this4.getSaveMessage(statusFrom, statusTo);
          if (!_.get(_this4, 'notification.id')) {
            return _this4.instance.insert(_this4.notification).then(resolve);
          }
          return _this4.instance.update(_this4.notification.id, _.pick(_this4.notification, ['status', 'type', 'data', 'scope', 'orderAt', 'pushNotification', 'isPushNotificationWidget'])).then(resolve);
        });
      }).then(function (response) {
        Fliplet.Modal.alert({
          title: 'Success!',
          message: _this4.getConfirmationMessage(statusFrom, statusTo)
        });
        _this4.backToNotifications({
          notificationId: response.notification.id
        });
      })["catch"](function (error) {
        _this4.isSaving = false;
        Fliplet.Modal.alert({
          title: 'Error saving notification',
          message: Fliplet.parseError(error)
        });
      });
    }
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTypes", function() { return filterTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterScope", function() { return getFilterScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterVerbose", function() { return getFilterVerbose; });
var filterTypes = [{
  name: 'equals',
  label: 'Equals',
  labelVerbose: 'is equal to'
}, {
  name: 'notequal',
  label: 'Not equal',
  labelVerbose: 'is not equal to'
}, {
  name: 'oneof',
  label: 'Is one of',
  labelVerbose: 'is one of'
}, {
  name: 'notoneof',
  label: 'Is not one of',
  labelVerbose: 'is not one of'
}, {
  name: 'contains',
  label: 'Contains',
  labelVerbose: 'contains'
}, {
  name: 'notcontain',
  label: 'Does not contain',
  labelVerbose: 'does not contain'
}, {
  name: 'empty',
  label: 'Is empty',
  labelVerbose: 'is empty'
}, {
  name: 'notempty',
  label: 'Is not empty',
  labelVerbose: 'is not empty'
}
// {
//   name: 'gt',
//   label: 'Greater than',
//   labelVerbose: 'is greater than'
// },
// {
//   name: 'gte',
//   label: 'Greater than or equal to',
//   labelVerbose: 'is greater than or equal to'
// },
// {
//   name: 'lt',
//   label: 'Less than',
//   labelVerbose: 'is less than'
// },
// {
//   name: 'lte',
//   label: 'Less than or equal to',
//   labelVerbose: 'is less than or equal to'
// }
];
function getFilterScope(filter) {
  filter = filter || {};
  var column = filter.column;
  var value = filter.value;
  var path = filter.path;
  var scope = {};
  var result = scope;
  if (!column || !value && ['empty', 'notempty'].indexOf(filter.condition) < 0) {
    return;
  }
  if (['oneof', 'notoneof'].indexOf(filter.condition) > -1 && _.isEmpty(value)) {
    return;
  }
  if (path) {
    _.set(scope, column, {});
    scope = result[column];
  } else {
    path = column;
  }
  if (['oneof', 'notoneof'].indexOf(filter.condition) < 0 && _.isArray(value)) {
    value = value[0];
  }
  switch (filter.condition) {
    case 'equals':
      // Equals
      _.setWith(scope, path, {
        $iLike: value
      }, Object);
      break;
    case 'notequal':
      // Not equal
      _.setWith(scope, path, {
        $or: [{
          $eq: null
        }, {
          $in: ['', '[]']
        }, {
          $ne: value
        }]
      }, Object);
      break;
    case 'oneof':
      // Is one of
      if (!_.isArray(value)) {
        value = [value];
      }
      _.setWith(scope, path, {
        $in: value
      }, Object);
      break;
    case 'notoneof':
      // Is not one of
      if (!_.isArray(value)) {
        value = [value];
      }
      _.setWith(scope, path, {
        $or: [{
          $eq: null
        }, {
          $in: ['', '[]']
        }, {
          $notIn: value
        }]
      }, Object);
      break;
    case 'contains':
      // Contains
      _.setWith(scope, path, {
        $or: [{
          $iLike: {
            $any: [value]
          }
        }, {
          $iLike: "%".concat(value, "%")
        }]
      }, Object);
      break;
    case 'notcontain':
      // Does not contain
      _.setWith(scope, path, {
        $or: [{
          $eq: null
        }, {
          $in: ['', '[]']
        }, {
          $and: [{
            $notILike: {
              $any: [value]
            }
          }, {
            $notILike: "%".concat(value, "%")
          }]
        }]
      }, Object);
      break;
    case 'empty':
      // Is empty
      _.setWith(scope, path, {
        $or: [{
          $eq: null
        }, {
          $in: ['', '[]']
        }]
      }, Object);
      break;
    case 'notempty':
      // Is not empty
      _.setWith(scope, path, {
        $and: [{
          $ne: null
        }, {
          $notIn: ['', '[]']
        }]
      }, Object);
      break;
    case 'gt':
      // Greater than
      _.setWith(scope, path, {
        $gt: value
      }, Object);
      break;
    case 'gte':
      // Greater than or equal to
      _.setWith(scope, path, {
        $gte: value
      }, Object);
      break;
    case 'lt':
      // Less than
      _.setWith(scope, path, {
        $lt: value
      }, Object);
      break;
    case 'lte':
      // Less than or equal to
      _.setWith(scope, path, {
        $lte: value
      }, Object);
      break;
    default:
      scope = undefined;
      break;
  }
  return result;
}
function getFilterVerbose(filter) {
  filter = filter || {};
  var condition = filter.condition;
  var column = filter.column;
  var path = filter.path;
  var value = filter.value;
  var verbose = '';
  if (!column || !value && ['empty', 'notempty'].indexOf(filter.condition) < 0) {
    return;
  }
  if (_.map(filterTypes, 'name').indexOf(condition) < 0) {
    return;
  }
  if (path) {
    column = "".concat(column, " (").concat(path, ")");
  }
  if (_.isArray(value)) {
    value = value.join(', ');
  }
  verbose = "".concat(column, " ").concat(_.find(filterTypes, {
    name: condition
  }).labelVerbose);
  if (['empty', 'notempty'].indexOf(filter.condition) < 0) {
    verbose += " ".concat(value);
  }
  return verbose;
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterValue_vue_vue_type_template_id_50266a59__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _FilterValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterValue_vue_vue_type_template_id_50266a59__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterValue_vue_vue_type_template_id_50266a59__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/FilterValue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterValue_vue_vue_type_template_id_50266a59__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterValue_vue_vue_type_template_id_50266a59__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterValue_vue_vue_type_template_id_50266a59__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.type === "text"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Value" },
            domProps: { value: _vm.value },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              },
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.type === "collection"
        ? _c("Token-Field", {
            attrs: { value: _vm.value },
            on: {
              "update:value": function ($event) {
                _vm.value = $event
              },
            },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TokenField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: {
      type: String,
      "default": 'text'
    },
    value: [String, Object, Number]
  },
  components: {
    TokenField: _TokenField__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    value: function value(_value) {
      this.$emit('update:value', _value);
    }
  }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TokenField_vue_vue_type_template_id_285f3c31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _TokenField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TokenField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TokenField_vue_vue_type_template_id_285f3c31__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TokenField_vue_vue_type_template_id_285f3c31__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TokenField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokenField_vue_vue_type_template_id_285f3c31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokenField_vue_vue_type_template_id_285f3c31__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokenField_vue_vue_type_template_id_285f3c31__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.value,
          expression: "value",
        },
      ],
      ref: "input",
      staticClass: "form-control",
      attrs: { type: "text", placeholder: _vm.placeholder },
      domProps: { value: _vm.value },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value
        },
      },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TokenField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TokenField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      collection: []
    };
  },
  props: {
    value: {
      type: Array
    },
    placeholder: {
      type: String
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.collection = _.concat(this.collection, _.map(this.value, function (obj) {
      if (_.hasIn(obj, 'value')) {
        return obj;
      }
      return {
        value: obj
      };
    }));
    $(this.$refs.input).tokenfield({
      tokens: this.collection,
      createTokensOnBlur: true
    }).on('tokenfield:createdtoken', function () {
      _this.getTokens();
    }).on('tokenfield:removedtoken', function () {
      _this.getTokens();
    });
  },
  unmounted: function unmounted() {
    $(this.$refs.input).tokenfield('destroy');
  },
  watch: {
    collection: function collection(_collection) {
      this.$emit('update:value', _.map(_collection, 'value'));
    }
  },
  methods: {
    getTokens: function getTokens() {
      var _this2 = this;
      this.collection.splice(0, this.collection.length);
      _.forEach($(this.$refs.input).tokenfield('getTokens'), function (token) {
        _this2.collection.push(token);
      });
    }
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timepicker_vue_vue_type_template_id_dcdfbb6a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _Timepicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Timepicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timepicker_vue_vue_type_template_id_dcdfbb6a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Timepicker_vue_vue_type_template_id_dcdfbb6a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Timepicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timepicker_vue_vue_type_template_id_dcdfbb6a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timepicker_vue_vue_type_template_id_dcdfbb6a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timepicker_vue_vue_type_template_id_dcdfbb6a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "time-picker" }, [
    _c("div", { staticClass: "col-xs-2" }, [
      _c("label", { staticClass: "select-proxy-display" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.hour12h,
                expression: "hour12h",
                modifiers: { number: true },
              },
            ],
            staticClass: "hidden-select form-control",
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return _vm._n(val)
                  })
                _vm.hour12h = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          _vm._l(_vm.hours, function (h) {
            return _c("option", {
              key: h.value,
              domProps: { value: h.value, innerHTML: _vm._s(h.label) },
            })
          }),
          0
        ),
        _vm._v(" "),
        _c("span", { staticClass: "icon fa fa-chevron-down" }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xs-2" }, [
      _c("label", { staticClass: "select-proxy-display" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.minute,
                expression: "minute",
                modifiers: { number: true },
              },
            ],
            staticClass: "hidden-select form-control",
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return _vm._n(val)
                  })
                _vm.minute = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          _vm._l(_vm.minutes, function (m) {
            return _c("option", {
              key: m.value,
              domProps: { value: m.value, innerHTML: _vm._s(m.label) },
            })
          }),
          0
        ),
        _vm._v(" "),
        _c("span", { staticClass: "icon fa fa-chevron-down" }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xs-2" }, [
      _c("label", { staticClass: "select-proxy-display" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.ampm,
                expression: "ampm",
              },
            ],
            staticClass: "hidden-select form-control",
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.ampm = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          [
            _c("option", { attrs: { value: "AM" } }, [_vm._v("AM")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "PM" } }, [_vm._v("PM")]),
          ]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "icon fa fa-chevron-down" }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xs-6" }, [
      _c("label", { staticClass: "select-proxy-display" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.timezone,
                expression: "timezone",
              },
            ],
            staticClass: "hidden-select form-control",
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.timezone = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          _vm._l(_vm.adjustedTimezones, function (zone) {
            return _c("option", {
              key: zone.value,
              domProps: { value: zone.value, innerHTML: _vm._s(zone.label) },
            })
          }),
          0
        ),
        _vm._v(" "),
        _c("span", { staticClass: "icon fa fa-chevron-down" }),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timepicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timepicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_timezones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      hour12h: this.hour % 12 || 12,
      ampm: this.hour < 12 ? 'AM' : 'PM',
      timezones: _libs_timezones__WEBPACK_IMPORTED_MODULE_0__["timezones"],
      hours: _.times(12, function (hour) {
        return {
          value: hour + 1,
          label: "0".concat(hour + 1).slice(-2)
        };
      }),
      minutes: _.times(60, function (minute) {
        return {
          value: minute,
          label: "0".concat(minute).slice(-2)
        };
      })
    };
  },
  props: {
    hour: {
      type: Number,
      "default": new Date().getHours(),
      validator: function validator(value) {
        return value >= 0 && value < 24;
      }
    },
    minute: {
      type: Number,
      "default": new Date().getMinutes(),
      validator: function validator(value) {
        return value >= 0 && value < 60;
      }
    },
    timezone: {
      type: String,
      "default": Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_0__["validate"])(moment.tz.guess())
    },
    date: {
      type: Date,
      "default": new Date()
    }
  },
  watch: {
    date: function date() {
      this.validateDST();
    },
    hour12h: function hour12h(value) {
      this.validateDST();
      this.$emit('update:hour', this.getHour24h(value, this.ampm));
    },
    minute: function minute(value) {
      this.$emit('update:minute', value);
    },
    ampm: function ampm(value) {
      this.validateDST();
      this.$emit('update:hour', this.getHour24h(this.hour12h, value));
    },
    timezone: function timezone(value) {
      this.validateDST();
      this.$emit('update:timezone', value);
    }
  },
  computed: {
    adjustedTimezones: function adjustedTimezones() {
      var _this = this;
      return _.orderBy(_.map(this.timezones, function (timezone) {
        var offset = Object(_libs_timezones__WEBPACK_IMPORTED_MODULE_0__["getOffsetObject"])(timezone.value, _this.date);
        return _.extend(_.clone(timezone), {
          label: "(".concat(offset.label, ") ").concat(timezone.label),
          offset: offset.value
        });
      }), ['offset'], ['desc']);
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    // If the validation isn't run after a tick, the dropdown doesn't effectively
    // change the values or trigger the watchers.
    this.$nextTick(function () {
      _this2.validateDST();
    });
  },
  methods: {
    getHour24h: function getHour24h(hour12h, ampm) {
      if (hour12h === 12) {
        if (ampm === 'AM') {
          hour12h = hour12h - 12;
        }
      } else if (ampm === 'PM') {
        hour12h = hour12h + 12;
      }
      return hour12h % 24;
    },
    validateDST: function validateDST() {
      var timestamp = moment.tz([this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.getHour24h(this.hour12h, this.ampm), this.minute], this.timezone);
      if (timestamp.get('hour') === this.hour) {
        return;
      }
      this.hour12h = timestamp.get('hour') % 12 || 12;
    }
  }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var Language =
/*#__PURE__*/
function () {
  function Language(language, months, monthsAbbr, days) {
    _classCallCheck(this, Language);

    this.language = language;
    this.months = months;
    this.monthsAbbr = monthsAbbr;
    this.days = days;
    this.rtl = false;
    this.ymd = false;
    this.yearSuffix = '';
  }

  _createClass(Language, [{
    key: "language",
    get: function get() {
      return this._language;
    },
    set: function set(language) {
      if (typeof language !== 'string') {
        throw new TypeError('Language must be a string');
      }

      this._language = language;
    }
  }, {
    key: "months",
    get: function get() {
      return this._months;
    },
    set: function set(months) {
      if (months.length !== 12) {
        throw new RangeError("There must be 12 months for ".concat(this.language, " language"));
      }

      this._months = months;
    }
  }, {
    key: "monthsAbbr",
    get: function get() {
      return this._monthsAbbr;
    },
    set: function set(monthsAbbr) {
      if (monthsAbbr.length !== 12) {
        throw new RangeError("There must be 12 abbreviated months for ".concat(this.language, " language"));
      }

      this._monthsAbbr = monthsAbbr;
    }
  }, {
    key: "days",
    get: function get() {
      return this._days;
    },
    set: function set(days) {
      if (days.length !== 7) {
        throw new RangeError("There must be 7 days for ".concat(this.language, " language"));
      }

      this._days = days;
    }
  }]);

  return Language;
}(); // eslint-disable-next-line

var en = new Language('English', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) // eslint-disable-next-line
;

var utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,

  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear: function getFullYear(date) {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear();
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth: function getMonth(date) {
    return this.useUtc ? date.getUTCMonth() : date.getMonth();
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate: function getDate(date) {
    return this.useUtc ? date.getUTCDate() : date.getDate();
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay: function getDay(date) {
    return this.useUtc ? date.getUTCDay() : date.getDay();
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours: function getHours(date) {
    return this.useUtc ? date.getUTCHours() : date.getHours();
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes: function getMinutes(date) {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes();
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   */
  setFullYear: function setFullYear(date, value, useUtc) {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   */
  setMonth: function setMonth(date, value, useUtc) {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value);
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate: function setDate(date, value, useUtc) {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value);
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates: function compareDates(date1, date2) {
    var d1 = new Date(date1.getTime());
    var d2 = new Date(date2.getTime());

    if (this.useUtc) {
      d1.setUTCHours(0, 0, 0, 0);
      d2.setUTCHours(0, 0, 0, 0);
    } else {
      d1.setHours(0, 0, 0, 0);
      d2.setHours(0, 0, 0, 0);
    }

    return d1.getTime() === d2.getTime();
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate: function isValidDate(date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false;
    }

    return !isNaN(date.getTime());
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {String}
   */
  getDayNameAbbr: function getDayNameAbbr(date, days) {
    if (_typeof(date) !== 'object') {
      throw TypeError('Invalid Type');
    }

    return days[this.getDay(date)];
  },

  /**
   * Return name of the month
   * @param {Number|Date}
   * @param {Array}
   * @return {String}
   */
  getMonthName: function getMonthName(month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array');
    }

    if (_typeof(month) === 'object') {
      return months[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return months[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date}
   * @return {String}
   */
  getMonthNameAbbr: function getMonthNameAbbr(month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array');
    }

    if (_typeof(month) === 'object') {
      return monthsAbbr[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return monthsAbbr[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} m
   * @return {Number}
   */
  daysInMonth: function daysInMonth(year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? !(year % 4) && year % 100 || !(year % 400) ? 29 : 28 : 31;
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix: function getNthSuffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st';

      case 2:
      case 22:
        return 'nd';

      case 3:
      case 23:
        return 'rd';

      default:
        return 'th';
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {String}
   * @param {Object}
   * @return {String}
   */
  formatDate: function formatDate(date, format, translation) {
    translation = !translation ? en : translation;
    var year = this.getFullYear(date);
    var month = this.getMonth(date) + 1;
    var day = this.getDate(date);
    var str = format.replace(/dd/, ('0' + day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months)).replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr)).replace(/MM/, ('0' + month).slice(-2)).replace(/M(?!a|ä|e)/, month).replace(/su/, this.getNthSuffix(this.getDate(date))).replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
    return str;
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray: function createDateArray(start, end) {
    var dates = [];

    while (start <= end) {
      dates.push(new Date(start));
      start = this.setDate(new Date(start), this.getDate(new Date(start)) + 1);
    }

    return dates;
  },

  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput: function validateDateInput(val) {
    return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
  }
};
var makeDateUtils = function makeDateUtils(useUtc) {
  return _objectSpread({}, utils, {
    useUtc: useUtc
  });
};
var utils$1 = _objectSpread({}, utils) // eslint-disable-next-line
;

var script = {
  props: {
    selectedDate: Date,
    resetTypedDate: [Date],
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object, Array],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      typedDate: false,
      utils: constructedDateUtils
    };
  },
  computed: {
    formattedValue: function formattedValue() {
      if (!this.selectedDate) {
        return null;
      }

      if (this.typedDate) {
        return this.typedDate;
      }

      return typeof this.format === 'function' ? this.format(this.selectedDate) : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation);
    },
    computedInputClass: function computedInputClass() {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ');
        }

        return _objectSpread({
          'form-control': true
        }, this.inputClass);
      }

      return this.inputClass;
    }
  },
  watch: {
    resetTypedDate: function resetTypedDate() {
      this.typedDate = false;
    }
  },
  methods: {
    showCalendar: function showCalendar() {
      this.$emit('showCalendar');
    },

    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate: function parseTypedDate(event) {
      // close calendar if escape or enter are pressed
      if ([27, // escape
      13 // enter
      ].includes(event.keyCode)) {
        this.input.blur();
      }

      if (this.typeable) {
        var typedDate = Date.parse(this.input.value);

        if (!isNaN(typedDate)) {
          this.typedDate = this.input.value;
          this.$emit('typedDate', new Date(this.typedDate));
        }
      }
    },

    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred: function inputBlurred() {
      if (this.typeable && isNaN(Date.parse(this.input.value))) {
        this.clearDate();
        this.input.value = null;
        this.typedDate = null;
      }

      this.$emit('closeCalendar');
    },

    /**
     * emit a clearDate event
     */
    clearDate: function clearDate() {
      this.$emit('clearDate');
    }
  },
  mounted: function mounted() {
    this.input = this.$el.querySelector('input');
  }
} // eslint-disable-next-line
;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: { "input-group": _vm.bootstrapStyling } },
    [
      _vm.calendarButton
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__calendar-button",
              class: { "input-group-prepend": _vm.bootstrapStyling },
              style: { "cursor:not-allowed;": _vm.disabled },
              on: { click: _vm.showCalendar }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.calendarButtonIcon }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.calendarButtonIconContent) +
                        "\n        "
                    ),
                    !_vm.calendarButtonIcon
                      ? _c("span", [_vm._v("…")])
                      : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: _vm.refName,
        class: _vm.computedInputClass,
        attrs: {
          type: _vm.inline ? "hidden" : "text",
          name: _vm.name,
          id: _vm.id,
          "open-date": _vm.openDate,
          placeholder: _vm.placeholder,
          "clear-button": _vm.clearButton,
          disabled: _vm.disabled,
          required: _vm.required,
          readonly: !_vm.typeable,
          autocomplete: "off"
        },
        domProps: { value: _vm.formattedValue },
        on: {
          click: _vm.showCalendar,
          keyup: _vm.parseTypedDate,
          blur: _vm.inputBlurred
        }
      }),
      _vm._v(" "),
      _vm.clearButton && _vm.selectedDate
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__clear-button",
              class: { "input-group-append": _vm.bootstrapStyling },
              on: {
                click: function($event) {
                  return _vm.clearDate()
                }
              }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.clearButtonIcon }, [
                    !_vm.clearButtonIcon ? _c("span", [_vm._v("×")]) : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("afterDateInput")
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DateInput = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
var script$1 = {
  props: {
    showDayView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    fullMonthName: Boolean,
    allowedToShowView: Function,
    dayCellContent: {
      type: Function,
      "default": function _default(day) {
        return day.date;
      }
    },
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    mondayFirst: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek: function daysOfWeek() {
      if (this.mondayFirst) {
        var tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }

      return this.translation.days;
    },

    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays: function blankDays() {
      var d = this.pageDate;
      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());

      if (this.mondayFirst) {
        return this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6;
      }

      return this.utils.getDay(dObj);
    },

    /**
     * @return {Object[]}
     */
    days: function days() {
      var d = this.pageDate;
      var days = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));

      for (var i = 0; i < daysInMonth; i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedDate(dObj),
          isDisabled: this.isDisabledDate(dObj),
          isHighlighted: this.isHighlightedDate(dObj),
          isHighlightStart: this.isHighlightStart(dObj),
          isHighlightEnd: this.isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName: function currMonthName() {
      var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(this.utils.getMonth(this.pageDate), monthName);
    },

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currYearName: function currYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    isYmd: function isYmd() {
      return this.translation.ymd && this.translation.ymd === true;
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextMonthDisabled(this.pageTimestamp) : this.isPreviousMonthDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousMonthDisabled(this.pageTimestamp) : this.isNextMonthDisabled(this.pageTimestamp);
    }
  },
  methods: {
    selectDate: function selectDate(date) {
      if (date.isDisabled) {
        this.$emit('selectedDisabled', date);
        return false;
      }

      this.$emit('selectDate', date);
    },

    /**
     * @return {Number}
     */
    getPageMonth: function getPageMonth() {
      return this.utils.getMonth(this.pageDate);
    },

    /**
     * Emit an event to show the month picker
     */
    showMonthCalendar: function showMonthCalendar() {
      this.$emit('showMonthCalendar');
    },

    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth: function changeMonth(incrementBy) {
      var date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.$emit('changedMonth', date);
    },

    /**
     * Decrement the page month
     */
    previousMonth: function previousMonth() {
      if (!this.isPreviousMonthDisabled()) {
        this.changeMonth(-1);
      }
    },

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled: function isPreviousMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.to) >= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(d);
    },

    /**
     * Increment the current page month
     */
    nextMonth: function nextMonth() {
      if (!this.isNextMonthDisabled()) {
        this.changeMonth(+1);
      }
    },

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled: function isNextMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.from) <= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(d);
    },

    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedDate: function isSelectedDate(dObj) {
      return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj);
    },

    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledDate: function isDisabledDate(date) {
      var _this = this;

      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.dates !== 'undefined') {
        this.disabledDates.dates.forEach(function (d) {
          if (_this.utils.compareDates(date, d)) {
            disabledDates = true;
            return true;
          }
        });
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.ranges !== 'undefined') {
        this.disabledDates.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true;
            }
          }
        });
      }

      if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    },

    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightedDate: function isHighlightedDate(date) {
      var _this2 = this;

      if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
        return false;
      }

      var highlighted = false;

      if (typeof this.highlighted === 'undefined') {
        return false;
      }

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach(function (d) {
          if (_this2.utils.compareDates(date, d)) {
            highlighted = true;
            return true;
          }
        });
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted;
    },
    dayClasses: function dayClasses(day) {
      return {
        'selected': day.isSelected,
        'disabled': day.isDisabled,
        'highlighted': day.isHighlighted,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      };
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightStart: function isHighlightStart(date) {
      return this.isHighlightedDate(date) && this.highlighted.from instanceof Date && this.utils.getFullYear(this.highlighted.from) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.from) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.from) === this.utils.getDate(date);
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightEnd: function isHighlightEnd(date) {
      return this.isHighlightedDate(date) && this.highlighted.to instanceof Date && this.utils.getFullYear(this.highlighted.to) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.to) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.to) === this.utils.getDate(date);
    },

    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    isDefined: function isDefined(prop) {
      return typeof prop !== 'undefined' && prop;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showDayView,
          expression: "showDayView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "day__month_btn",
            class: _vm.allowedToShowView("month") ? "up" : "",
            on: { click: _vm.showMonthCalendar }
          },
          [
            _vm._v(
              _vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName) +
                " " +
                _vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName)
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.isRtl ? "flex-rtl" : "" },
        [
          _vm._l(_vm.daysOfWeek, function(d) {
            return _c(
              "span",
              { key: d.timestamp, staticClass: "cell day-header" },
              [_vm._v(_vm._s(d))]
            )
          }),
          _vm._v(" "),
          _vm.blankDays > 0
            ? _vm._l(_vm.blankDays, function(d) {
                return _c("span", {
                  key: d.timestamp,
                  staticClass: "cell day blank"
                })
              })
            : _vm._e(),
          _vm._l(_vm.days, function(day) {
            return _c("span", {
              key: day.timestamp,
              staticClass: "cell day",
              class: _vm.dayClasses(day),
              domProps: { innerHTML: _vm._s(_vm.dayCellContent(day)) },
              on: {
                click: function($event) {
                  return _vm.selectDate(day)
                }
              }
            })
          })
        ],
        2
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerDay = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
var script$2 = {
  props: {
    showMonthView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    months: function months() {
      var d = this.pageDate;
      var months = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 12; i++) {
        months.push({
          month: this.utils.getMonthName(i, this.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedMonth(dObj),
          isDisabled: this.isDisabledMonth(dObj)
        });
        this.utils.setMonth(dObj, this.utils.getMonth(dObj) + 1);
      }

      return months;
    },

    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName: function pageYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextYearDisabled(this.pageTimestamp) : this.isPreviousYearDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousYearDisabled(this.pageTimestamp) : this.isNextYearDisabled(this.pageTimestamp);
    }
  },
  methods: {
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      if (month.isDisabled) {
        return false;
      }

      this.$emit('selectMonth', month);
    },

    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedYear', date);
    },

    /**
     * Decrements the year
     */
    previousYear: function previousYear() {
      if (!this.isPreviousYearDisabled()) {
        this.changeYear(-1);
      }
    },

    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    isPreviousYearDisabled: function isPreviousYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Increments the year
     */
    nextYear: function nextYear() {
      if (!this.isNextYearDisabled()) {
        this.changeYear(1);
      }
    },

    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    isNextYearDisabled: function isNextYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Emits an event that shows the year calendar
     */
    showYearCalendar: function showYearCalendar() {
      this.$emit('showYearCalendar');
    },

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedMonth: function isSelectedMonth(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date) && this.utils.getMonth(this.selectedDate) === this.utils.getMonth(date);
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledMonth: function isDisabledMonth(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to) || this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from) || this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showMonthView,
          expression: "showMonthView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextYear() : _vm.previousYear();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "month__year_btn",
            class: _vm.allowedToShowView("year") ? "up" : "",
            on: { click: _vm.showYearCalendar }
          },
          [_vm._v(_vm._s(_vm.pageYearName))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousYear() : _vm.nextYear();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.months, function(month) {
        return _c(
          "span",
          {
            key: month.timestamp,
            staticClass: "cell month",
            class: { selected: month.isSelected, disabled: month.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectMonth(month)
              }
            }
          },
          [_vm._v(_vm._s(month.month))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerMonth = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
var script$3 = {
  props: {
    showYearView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  computed: {
    years: function years() {
      var d = this.pageDate;
      var years = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = this.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i++) {
        years.push({
          year: this.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj)
        });
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1);
      }

      return years;
    },

    /**
     * @return {String}
     */
    getPageDecade: function getPageDecade() {
      var decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(decadeStart, " - ").concat(decadeEnd).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextDecadeDisabled(this.pageTimestamp) : this.isPreviousDecadeDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousDecadeDisabled(this.pageTimestamp) : this.isNextDecadeDisabled(this.pageTimestamp);
    }
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  methods: {
    selectYear: function selectYear(year) {
      if (year.isDisabled) {
        return false;
      }

      this.$emit('selectYear', year);
    },
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedDecade', date);
    },
    previousDecade: function previousDecade() {
      if (this.isPreviousDecadeDisabled()) {
        return false;
      }

      this.changeYear(-10);
    },
    isPreviousDecadeDisabled: function isPreviousDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.to);
      var lastYearInPreviousPage = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    },
    nextDecade: function nextDecade() {
      if (this.isNextDecadeDisabled()) {
        return false;
      }

      this.changeYear(10);
    },
    isNextDecadeDisabled: function isNextDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.from);
      var firstYearInNextPage = Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10;
      return disabledYear < firstYearInNextPage;
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedYear: function isSelectedYear(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date);
    },

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledYear: function isDisabledYear(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showYearView,
          expression: "showYearView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextDecade() : _vm.previousDecade();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.getPageDecade))]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousDecade() : _vm.nextDecade();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.years, function(year) {
        return _c(
          "span",
          {
            key: year.timestamp,
            staticClass: "cell year",
            class: { selected: year.isSelected, disabled: year.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectYear(year)
              }
            }
          },
          [_vm._v(_vm._s(year.year))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerYear = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
var script$4 = {
  components: {
    DateInput: DateInput,
    PickerDay: PickerDay,
    PickerMonth: PickerMonth,
    PickerYear: PickerYear
  },
  props: {
    value: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      "default": 'dd MMM yyyy'
    },
    language: {
      type: Object,
      "default": function _default() {
        return en;
      }
    },
    openDate: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    dayCellContent: Function,
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object, Array],
    inputClass: [String, Object, Array],
    wrapperClass: [String, Object, Array],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    useUtc: Boolean,
    minimumView: {
      type: String,
      "default": 'day'
    },
    maximumView: {
      type: String,
      "default": 'year'
    }
  },
  data: function data() {
    var startDate = this.openDate ? new Date(this.openDate) : new Date();
    var constructedDateUtils = makeDateUtils(this.useUtc);
    var pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp: pageTimestamp,

      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,

      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,

      /*
       * Positioning
       */
      calendarHeight: 0,
      resetTypedDate: new Date(),
      utils: constructedDateUtils
    };
  },
  watch: {
    value: function value(_value) {
      this.setValue(_value);
    },
    openDate: function openDate() {
      this.setPageDate();
    },
    initialView: function initialView() {
      this.setInitialView();
    }
  },
  computed: {
    computedInitialView: function computedInitialView() {
      if (!this.initialView) {
        return this.minimumView;
      }

      return this.initialView;
    },
    pageDate: function pageDate() {
      return new Date(this.pageTimestamp);
    },
    translation: function translation() {
      return this.language;
    },
    calendarStyle: function calendarStyle() {
      return {
        position: this.isInline ? 'static' : undefined
      };
    },
    isOpen: function isOpen() {
      return this.showDayView || this.showMonthView || this.showYearView;
    },
    isInline: function isInline() {
      return !!this.inline;
    },
    isRtl: function isRtl() {
      return this.translation.rtl === true;
    }
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate: function resetDefaultPageDate() {
      if (this.selectedDate === null) {
        this.setPageDate();
        return;
      }

      this.setPageDate(this.selectedDate);
    },

    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar: function showCalendar() {
      if (this.disabled || this.isInline) {
        return false;
      }

      if (this.isOpen) {
        return this.close(true);
      }

      this.setInitialView();
    },

    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView: function setInitialView() {
      var initialView = this.computedInitialView;

      if (!this.allowedToShowView(initialView)) {
        throw new Error("initialView '".concat(this.initialView, "' cannot be rendered based on minimum '").concat(this.minimumView, "' and maximum '").concat(this.maximumView, "'"));
      }

      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break;

        case 'month':
          this.showMonthCalendar();
          break;

        default:
          this.showDayCalendar();
          break;
      }
    },

    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView: function allowedToShowView(view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(this.minimumView);
      var maximumViewIndex = views.indexOf(this.maximumView);
      var viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },

    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar: function showDayCalendar() {
      if (!this.allowedToShowView('day')) {
        return false;
      }

      this.close();
      this.showDayView = true;
      return true;
    },

    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar: function showMonthCalendar() {
      if (!this.allowedToShowView('month')) {
        return false;
      }

      this.close();
      this.showMonthView = true;
      return true;
    },

    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar: function showYearCalendar() {
      if (!this.allowedToShowView('year')) {
        return false;
      }

      this.close();
      this.showYearView = true;
      return true;
    },

    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate: function setDate(timestamp) {
      var date = new Date(timestamp);
      this.selectedDate = date;
      this.setPageDate(date);
      this.$emit('selected', date);
      this.$emit('input', date);
    },

    /**
     * Clear the selected date
     */
    clearDate: function clearDate() {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },

    /**
     * @param {Object} date
     */
    selectDate: function selectDate(date) {
      this.setDate(date.timestamp);

      if (!this.isInline) {
        this.close(true);
      }

      this.resetTypedDate = new Date();
    },

    /**
     * @param {Object} date
     */
    selectDisabledDate: function selectDisabledDate(date) {
      this.$emit('selectedDisabled', date);
    },

    /**
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      var date = new Date(month.timestamp);

      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.selectDate(month);
      }
    },

    /**
     * @param {Object} year
     */
    selectYear: function selectYear(year) {
      var date = new Date(year.timestamp);

      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.selectDate(year);
      }
    },

    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue: function setValue(date) {
      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }

      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return;
      }

      this.selectedDate = date;
      this.setPageDate(date);
    },

    /**
     * Sets the date that the calendar should open on
     */
    setPageDate: function setPageDate(date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }

      this.pageTimestamp = this.utils.setDate(new Date(date), 1);
    },

    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker: function handleChangedMonthFromDayPicker(date) {
      this.setPageDate(date);
      this.$emit('changedMonth', date);
    },

    /**
     * Set the date from a typedDate event
     */
    setTypedDate: function setTypedDate(date) {
      this.setDate(date.getTime());
    },

    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    close: function close(emitEvent) {
      this.showDayView = this.showMonthView = this.showYearView = false;

      if (!this.isInline) {
        if (emitEvent) {
          this.$emit('closed');
        }

        document.removeEventListener('click', this.clickOutside, false);
      }
    },

    /**
     * Initiate the component
     */
    init: function init() {
      if (this.value) {
        this.setValue(this.value);
      }

      if (this.isInline) {
        this.setInitialView();
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
} // eslint-disable-next-line
;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "vdp-datepicker",
      class: [_vm.wrapperClass, _vm.isRtl ? "rtl" : ""]
    },
    [
      _c(
        "date-input",
        {
          attrs: {
            selectedDate: _vm.selectedDate,
            resetTypedDate: _vm.resetTypedDate,
            format: _vm.format,
            translation: _vm.translation,
            inline: _vm.inline,
            id: _vm.id,
            name: _vm.name,
            refName: _vm.refName,
            openDate: _vm.openDate,
            placeholder: _vm.placeholder,
            inputClass: _vm.inputClass,
            typeable: _vm.typeable,
            clearButton: _vm.clearButton,
            clearButtonIcon: _vm.clearButtonIcon,
            calendarButton: _vm.calendarButton,
            calendarButtonIcon: _vm.calendarButtonIcon,
            calendarButtonIconContent: _vm.calendarButtonIconContent,
            disabled: _vm.disabled,
            required: _vm.required,
            bootstrapStyling: _vm.bootstrapStyling,
            "use-utc": _vm.useUtc
          },
          on: {
            showCalendar: _vm.showCalendar,
            closeCalendar: _vm.close,
            typedDate: _vm.setTypedDate,
            clearDate: _vm.clearDate
          }
        },
        [_vm._t("afterDateInput", null, { slot: "afterDateInput" })],
        2
      ),
      _vm._v(" "),
      _vm.allowedToShowView("day")
        ? _c(
            "picker-day",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showDayView: _vm.showDayView,
                fullMonthName: _vm.fullMonthName,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                highlighted: _vm.highlighted,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                pageTimestamp: _vm.pageTimestamp,
                isRtl: _vm.isRtl,
                mondayFirst: _vm.mondayFirst,
                dayCellContent: _vm.dayCellContent,
                "use-utc": _vm.useUtc
              },
              on: {
                changedMonth: _vm.handleChangedMonthFromDayPicker,
                selectDate: _vm.selectDate,
                showMonthCalendar: _vm.showMonthCalendar,
                selectedDisabled: _vm.selectDisabledDate
              }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.allowedToShowView("month")
        ? _c(
            "picker-month",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showMonthView: _vm.showMonthView,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                isRtl: _vm.isRtl,
                "use-utc": _vm.useUtc
              },
              on: {
                selectMonth: _vm.selectMonth,
                showYearCalendar: _vm.showYearCalendar,
                changedYear: _vm.setPageDate
              }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.allowedToShowView("year")
        ? _c(
            "picker-year",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showYearView: _vm.showYearView,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                isRtl: _vm.isRtl,
                "use-utc": _vm.useUtc
              },
              on: { selectYear: _vm.selectYear, changedDecade: _vm.setPageDate }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-64ca2bb5_0", { source: ".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 300px;\n  border: 1px solid #ccc;\n}\n.vdp-datepicker__calendar header {\n  display: block;\n  line-height: 40px;\n}\n.vdp-datepicker__calendar header span {\n  display: inline-block;\n  text-align: center;\n  width: 71.42857142857143%;\n  float: left;\n}\n.vdp-datepicker__calendar header .prev,\n.vdp-datepicker__calendar header .next {\n  width: 14.285714285714286%;\n  float: left;\n  text-indent: -10000px;\n  position: relative;\n}\n.vdp-datepicker__calendar header .prev:after,\n.vdp-datepicker__calendar header .next:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 6px solid transparent;\n}\n.vdp-datepicker__calendar header .prev:after {\n  border-right: 10px solid #000;\n  margin-left: -5px;\n}\n.vdp-datepicker__calendar header .prev.disabled:after {\n  border-right: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .next:after {\n  border-left: 10px solid #000;\n  margin-left: 5px;\n}\n.vdp-datepicker__calendar header .next.disabled:after {\n  border-left: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled),\n.vdp-datepicker__calendar header .next:not(.disabled),\n.vdp-datepicker__calendar header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  border: 1px solid #4bd;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n", map: {"version":3,"sources":["Datepicker.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;AACb;AACA;;EAEE,0BAA0B;EAC1B,WAAW;EACX,qBAAqB;EACrB,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,4CAA4C;EAC5C,6BAA6B;AAC/B;AACA;EACE,6BAA6B;EAC7B,iBAAiB;AACnB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;AACA;EACE,4BAA4B;AAC9B;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,0BAA0B;EAC1B,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,6BAA6B;AAC/B;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,eAAe;EACf,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,eAAe;AACjB","file":"Datepicker.vue","sourcesContent":[".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 300px;\n  border: 1px solid #ccc;\n}\n.vdp-datepicker__calendar header {\n  display: block;\n  line-height: 40px;\n}\n.vdp-datepicker__calendar header span {\n  display: inline-block;\n  text-align: center;\n  width: 71.42857142857143%;\n  float: left;\n}\n.vdp-datepicker__calendar header .prev,\n.vdp-datepicker__calendar header .next {\n  width: 14.285714285714286%;\n  float: left;\n  text-indent: -10000px;\n  position: relative;\n}\n.vdp-datepicker__calendar header .prev:after,\n.vdp-datepicker__calendar header .next:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 6px solid transparent;\n}\n.vdp-datepicker__calendar header .prev:after {\n  border-right: 10px solid #000;\n  margin-left: -5px;\n}\n.vdp-datepicker__calendar header .prev.disabled:after {\n  border-right: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .next:after {\n  border-left: 10px solid #000;\n  margin-left: 5px;\n}\n.vdp-datepicker__calendar header .next.disabled:after {\n  border-left: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled),\n.vdp-datepicker__calendar header .next:not(.disabled),\n.vdp-datepicker__calendar header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  border: 1px solid #4bd;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var Datepicker = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (Datepicker);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _libs_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


Vue.filter('calendarDate', _libs_date__WEBPACK_IMPORTED_MODULE_0__["calendarDate"]);
Vue.filter('formatDate', _libs_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"]);
Vue.filter('nl2br', _libs_string__WEBPACK_IMPORTED_MODULE_1__["nl2br"]);

/***/ })
/******/ ]);