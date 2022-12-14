"use strict";
exports.id = "components-IssueEditor";
exports.ids = ["components-IssueEditor"];
exports.modules = {

/***/ "./src/components/IssueEditor/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/IssueEditor/index.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// @ts-nocheck


var AoneEditor = function AoneEditor(props) {
  console.log('props: ', props);
  debugger;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "aone-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "123"));
};

_c = AoneEditor;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AoneEditor);

var _c;

__webpack_require__.$Refresh$.register(_c, "AoneEditor");

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
//# sourceMappingURL=components-IssueEditor.js.map