"use strict";
exports.id = "index";
exports.ids = null;
exports.modules = {

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _alifd_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alifd/next */ "./node_modules/@alifd/next/es/button/index.js");
/* harmony import */ var $$ice_plugins_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $$ice/plugins/router */ "./.ice/plugins/router/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




var Home = function Home() {
  _s();

  var history = (0,$$ice_plugins_router__WEBPACK_IMPORTED_MODULE_0__.useHistory)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return history.push('/lazy');
    }
  }, "jump");
};

_s(Home, "9cZfZ04734qoCGIctmKX7+sX6eU=", false, function () {
  return [$$ice_plugins_router__WEBPACK_IMPORTED_MODULE_0__.useHistory];
});

_c = Home;

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

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
/******/ 	__webpack_require__.h = () => ("eaa395b4d8704d705f89")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=index.79dd4213956e2cc6d2d7.hot-update.js.map