"use strict";
exports.id = "index";
exports.ids = null;
exports.modules = {

/***/ "./src/pages/LazyContainer/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/LazyContainer/index.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyContainer": () => (/* binding */ LazyContainer)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var LazyContainer = function LazyContainer(props) {
  return props.children;
};
_c = LazyContainer;

var _c;

__webpack_require__.$Refresh$.register(_c, "LazyContainer");

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

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var $$ice_core_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $$ice/core/lazy */ "./.ice/core/lazy.ts");
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/BasicLayout */ "./src/layouts/BasicLayout/index.tsx");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/Home */ "./src/pages/Home/index.tsx");
/* harmony import */ var _pages_LazyContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/LazyContainer */ "./src/pages/LazyContainer/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var Dashboard = (0,$$ice_core_lazy__WEBPACK_IMPORTED_MODULE_0__.lazy)({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-Dashboard";
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
    return Promise.all(/*! import() | pages-Dashboard */[__webpack_require__.e("vendors-node_modules_alifd_next_es_responsive-grid_index_js"), __webpack_require__.e("pages-Dashboard")]).then(__webpack_require__.bind(__webpack_require__, /*! @/pages/Dashboard */ "./src/pages/Dashboard/index.tsx"));
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
      return /*require.resolve*/(/*! @/pages/Dashboard */ "./src/pages/Dashboard/index.tsx");
    }

    return eval('require.resolve')("@/pages/Dashboard");
  }
}, true);
var routerConfig = [{
  path: '/',
  component: _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
  children: [{
    path: '/',
    exact: true,
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_2__.Home
  }, {
    path: ':id',
    exact: true,
    component: _pages_LazyContainer__WEBPACK_IMPORTED_MODULE_3__.LazyContainer,
    children: [{
      path: '/lazy',
      exact: true,
      component: Dashboard
    }]
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routerConfig);

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
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ac0f79e57eea68a07621")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=index.49da9e35b9c56141374e.hot-update.js.map