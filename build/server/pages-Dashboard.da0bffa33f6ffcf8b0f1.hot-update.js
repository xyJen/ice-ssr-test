"use strict";
exports.id = "pages-Dashboard";
exports.ids = null;
exports.modules = {

/***/ "./src/pages/Dashboard/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/Dashboard/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _alifd_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alifd/next */ "./node_modules/@alifd/next/es/responsive-grid/index.js");
/* harmony import */ var _components_Guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Guide */ "./src/pages/Dashboard/components/Guide/index.tsx");
/* harmony import */ var $$ice_core_lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $$ice/core/lazy */ "./.ice/core/lazy.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var Cell = _alifd_next__WEBPACK_IMPORTED_MODULE_3__["default"].Cell;
var Editor = (0,$$ice_core_lazy__WEBPACK_IMPORTED_MODULE_2__.lazy)({
  resolved: {},
  chunkName: function chunkName() {
    return "components-IssueEditor";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | components-IssueEditor */ "components-IssueEditor").then(__webpack_require__.bind(__webpack_require__, /*! @/components/IssueEditor */ "./src/components/IssueEditor/index.tsx"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! @/components/IssueEditor */ "./src/components/IssueEditor/index.tsx");
    }

    return eval('require.resolve')("@/components/IssueEditor");
  }
}, true);
_c = Editor;
console.log('Editor: ', Editor);

var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gap: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Cell, {
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Guide__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Editor, {
    editorKey: "508066-description",
    editorType: "DINGDING",
    className: "DingEditor--aoneEditor--XzNBwti",
    defaultType: 'richText' // 默认richText
    ,
    defaultValue: "[\\\"root\\\",{},[\\\"p\\\",{},[\\\"span\\\",{\\\"data-type\\\":\\\"text\\\"},[\\\"span\\\",{\\\"data-type\\\":\\\"leaf\\\"},\\\"\\\"]]]]",
    onChange: function onChange(value, docType) {
      localStorage.setItem('editorInputType', docType);
    },
    readOnly: true,
    userConfig: {// newTab: tab, // 富文本生效 点击链接时是否新开tab页
      // getUserLink, // (user) => 'http://ali.baba/${user.id}'
      // queryUser, // return 一个 Promise
    },
    uploadImgConfig: {
      multiple: false,
      maxSize: 1024 * 1024,
      // 2M
      accept: 'image/jpg,image/jpeg,image/png,image/gif,image/bmp' // input  accept
      // uploadImage, // return 一个 Promise

    },
    uploadEmbedConfig: {// handlePreviewFile, // return 一个 Promise
    },
    toolbar: toolbar,
    isFullScreen: false,
    onChangeFullScreen: function onChangeFullScreen(innerIsFullScreen) {// setIsFullScreen(innerIsFullScreen);
    }
  })));
};

_c2 = Dashboard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Editor");
__webpack_require__.$Refresh$.register(_c2, "Dashboard");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	let errorOverlay;
	if (true) {
		errorOverlay = false;
	}
	let testMode;
	if (typeof __react_refresh_test__ !== 'undefined') {
		testMode = __react_refresh_test__;
	}
	return __react_refresh_utils__.executeRuntime(
		exports,
		$ReactRefreshModuleId$,
		module.hot,
		errorOverlay,
		testMode
	);
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

};
;
//# sourceMappingURL=pages-Dashboard.da0bffa33f6ffcf8b0f1.hot-update.js.map