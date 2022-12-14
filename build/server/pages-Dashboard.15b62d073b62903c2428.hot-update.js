"use strict";
exports.id = "pages-Dashboard";
exports.ids = null;
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/components/IssueEditor/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// @ts-nocheck

 // import { issueDetailStore } from '@/domain/application/store';
// import { DescriptionFormatType } from '@/domain/interface/issue';
// import MarkdownEditor from './components/markdown';
// import DingdingEditor from './components/weEditor';

var AoneEditor = function AoneEditor(props) {
  console.log('props: ', props);
  debugger; // const [disabledChangeBtn, setDisabledChangeBtn] = useState(!!props.defaultValue);
  // const [editType, setEditType] = useState('md');
  // const [defaultValue, setDefaultValue] = useState('');
  // const markdownToolbar = ['fullscreen', 'bold', 'italic', 'ordered-list', 'unordered-list', 'heading-1',
  //   'heading-2', 'heading-3', 'link', 'upload-image', 'table', 'side-by-side', 'preview', 'toggleType'];
  // useEffect(() => {
  //   setAoneEditorValue(props.defaultValue);
  // }, []);
  // useEffect(() => {
  //   setDefaultValue(props.defaultValue);
  //   setEditType(props.defaultType);
  // }, [props.defaultType, props.defaultValue]);
  // // 用于保存
  // useEffect(() => {
  //   setDefaultValue(props.defaultValue);
  // }, [props.defaultValue]);
  // useEffect(() => {
  //   runPropsOnChange();
  // }, [editType, defaultValue]);
  // const runPropsOnChange = () => {
  //   props.onChange(defaultValue, editType);
  // };
  // const setAoneEditorValue = (value: string | undefined) => {
  //   const { editorKey } = props;
  //   // @ts-ignore
  //   window.aone_sqm_editor = window.aone_sqm_editor ? { ...window.aone_sqm_editor } : {};
  //   // @ts-ignore
  //   window.aone_sqm_editor[editorKey] = value;
  //   // @ts-ignore
  //   window.aone_dd_editor = window.aone_dd_editor ? { ...window.aone_dd_editor } : {};
  //   // @ts-ignore
  //   window.aone_dd_editor[editorKey] = value;
  // };
  // const onChangeType = (docType: 'md' | 'richText') => {
  //   setEditType(docType);
  //   setDefaultValue('');
  //   setAoneEditorValue('');
  //   props.onChange('', docType);
  //   window.aone_dd_editor[`${issueDetailStore.workitemId}-description-docType`] =
  //   docType === 'md'
  //     ? DescriptionFormatType.MARKDOWN
  //     : DescriptionFormatType.RICHTEXT;
  // };
  // const onChange = (value: string) => {
  //   const { editorKey } = props;
  //   const disabled = value === '<div style="clear: both;"><br></div>' ? false : !!value;
  //   setDisabledChangeBtn(disabled);
  //   setDefaultValue(value);
  //   setAoneEditorValue(value);
  //   // 兼容3.0详情描述草稿逻辑
  //   // @ts-ignore
  //   if (setEditType !== 'md' && !editorKey.includes('comment')) {
  //     window?.setDraftValueFun && typeof window?.setDraftValueFun === 'function' && window.setDraftValueFun(value);
  //   }
  // };
  // const {
  //   onAtUser,
  //   minHeight,
  //   placeholder,
  //   userConfig,
  //   uploadImgConfig,
  //   readOnly,
  //   toolbar: propsToolbar,
  //   viewClassName,
  //   editClassName,
  //   className,
  //   insertThirdPartyPlugins,
  //   viewStyle,
  //   onThirdPluginClick,
  //   contentStyle,
  //   // handlePreviewFile,
  // } = props;
  // const commonProps = {
  //   readOnly,
  //   minHeight,
  //   placeholder,
  //   userConfig,
  //   uploadImgConfig,
  //   defaultValue,
  //   onAtUser,
  //   viewClassName,
  //   disabledChangeBtn,
  //   onChange,
  //   onChangeType,
  //   editClassName,
  //   className,
  //   insertThirdPartyPlugins,
  //   viewStyle,
  //   onThirdPluginClick,
  //   contentStyle,
  //   // onChangeFullScreen,
  // };

  return (
    /*#__PURE__*/
    // eslint-disable-next-line no-return-assign
    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "aone-editor"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "123"))
  );
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

/***/ }),

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
/* harmony import */ var _alifd_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @alifd/next */ "./node_modules/@alifd/next/es/responsive-grid/index.js");
/* harmony import */ var _components_Guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Guide */ "./src/pages/Dashboard/components/Guide/index.tsx");
/* harmony import */ var $$ice_core_lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $$ice/core/lazy */ "./.ice/core/lazy.ts");
/* harmony import */ var _components_IssueEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/IssueEditor */ "./src/components/IssueEditor/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






var Cell = _alifd_next__WEBPACK_IMPORTED_MODULE_4__["default"].Cell; // const Editor = lazy(() => import('@/components/IssueEditor'), true);

console.log('Editor: ', _components_IssueEditor__WEBPACK_IMPORTED_MODULE_3__["default"]);

var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gap: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Cell, {
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Guide__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_IssueEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    } // toolbar={toolbar}
    ,
    isFullScreen: false,
    onChangeFullScreen: function onChangeFullScreen(innerIsFullScreen) {// setIsFullScreen(innerIsFullScreen);
    }
  })));
};

_c = Dashboard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

var _c;

__webpack_require__.$Refresh$.register(_c, "Dashboard");

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

/***/ "./src/components/IssueEditor/index.scss":
/*!***********************************************!*\
  !*** ./src/components/IssueEditor/index.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	"e_editor_toolbar_m_wrap": "MfT1rm6tzYRFNXmtcgNU",
	"e_toolbar_toggletype": "phEH13kK2IPpYTy_Cicc",
	"aone-editor-hint": "TBC9icxiBbEsHFmbiF6N",
	"e_list_item": "GBlzsBz_65TYXaFPp1K_",
	"e_editor_toolbar": "pHMvmbJTCEIgTekxkkrP",
	"e_toolbar_font_family": "r0BqXDbQnE_Gy_CYwzk3",
	"e_toolbar_font_size": "qlViq7Fm7D7Ivqna445d",
	"aone-editor-hint-avatar": "ZOO7fahOKhv9WtF6wn3p",
	"aone-editor-hint-name": "KoDKFQSd_imRsIJoo5DU",
	"aone-editor-hint-email": "p9cUxmbYb_0MXabuAtPr",
	"aone-editor-wrap": "W1QLHrZAZHqRdHKz9IoT",
	"e_editor_toolbar_b_wrap": "et50VvX6qStc7zWVB1WF",
	"e_editor_body_holder": "J0il86TdzNVg_8_hqui1",
	"md-change-type-btn": "FeqqMSuEVBFRWmPmXgix",
	"md-insert-plugin-btn": "Orxf0uvvDmOAdQ7uXlOJ",
	"e_editor_toolbar_b_disable": "z8jHp3ZzknNX81V0q3eb",
	"md-change-type-btn-disabled": "M8_SxVAERSIY7CJPduqB",
	"aone-editor-insert-menus": "y_MUfwM_OAWiLwVGp0sg",
	"aone-editor-insert-menu": "tjZCBXSkyqNdoMIQd2_w",
	"aone-editor-insert-menu-info": "Gan69AaUflcEV88fX2de",
	"aone-editor-insert-menu-title": "SKWpOQwclGYNoxw3IRkR",
	"aone-editor-insert-menu-subTitle": "dhv_EaICvmnXvMKmaqxp",
	"metion-suggestion-portal": "ACuJZSIsEz7qFJTV4WW8",
	"bi-link-portal": "BLc5f08qYDj5f4UWmlwo",
	"bi-toolbar": "Yi6AmWzjHVUzk8zEwIqZ",
	"aone-editor": "WvFmY4m4xFJPDzbvmIef",
	"aoneEditorFullScreen": "mPXS7uREeo2KeSxxavIw",
	"editor-toolbar": "A1R4borzsbXtach8AFnk",
	"rc-md-editor": "T8U1ZfAu_DgGl_B7D_6e",
	"e_l_wrap": "gtZm_IMN1DtUhrDUQiRC",
	"e_editor_main_wrap": "ZL96gy6nz1yRunIjDXen",
	"e_editor_toolbar_item": "B0fToOXICgIGrkp93LI1",
	"CodeMirror": "myoCnHoi7xq2hjPO_mX_",
	"m-whitebox": "qBkTJN0TdOvZcY5XZHnl",
	"event-header": "wvlJrFpJYJZeYNcu67Mm",
	"source-line": "Y_TdrcURVxhU_eyHhnKH",
	"filename": "Kv1DOTcdoPzg9N0H7v75",
	"major": "Cm_bRuJMQXW8jUnYi6q8",
	"impact-high": "Lz_KLcPhuFF6ZSdgbn89",
	"impact-High": "cRXV6JtwkmZMHDyeezFY",
	"impact-low": "E6c9J7HR6P8TnuZFyUFd",
	"impact-Ligh": "jY0MFHcajWxrtii5aRQD",
	"impact-medium": "ap866Liqpdob33wXY1jP",
	"impact-Medium": "nn0Z_y3YcW84P1I0iIrh",
	"e_editor_toolbar_wrap": "CnIJEGAi7VofSLHzZTu2",
	"aoneEditor": "p14fRpiGAeqLc472r_CI",
	"custom-html-style": "LBW3DS4pv3016Ea9N6Bv"
});


/***/ })

};
;
//# sourceMappingURL=pages-Dashboard.15b62d073b62903c2428.hot-update.js.map