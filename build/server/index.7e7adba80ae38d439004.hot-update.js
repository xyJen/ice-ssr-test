"use strict";
exports.id = "index";
exports.ids = null;
exports.modules = {

/***/ "./node_modules/@alifd/next/es/box/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@alifd/next/es/box/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config-provider */ "./node_modules/@alifd/next/es/config-provider/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./node_modules/@alifd/next/es/util/index.js");
/* harmony import */ var _responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../responsive-grid/create-style */ "./node_modules/@alifd/next/es/responsive-grid/create-style.js");






var _class, _temp;








var pickOthers = _util__WEBPACK_IMPORTED_MODULE_7__.obj.pickOthers;


var createChildren = function createChildren(children, _ref) {
    var spacing = _ref.spacing,
        direction = _ref.direction,
        wrap = _ref.wrap,
        device = _ref.device;

    var array = react__WEBPACK_IMPORTED_MODULE_5__.Children.toArray(children);
    if (!children) {
        return null;
    }

    return array.map(function (child, index) {
        var spacingMargin = {};

        spacingMargin = (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__.getChildMargin)(spacing);

        if (!wrap) {
            // ?????????
            var isNone = [index === 0, index === array.length - 1];
            var props = direction === 'row' ? ['marginLeft', 'marginRight'] : ['marginTop', 'marginBottom'];

            ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'].forEach(function (prop) {
                if (prop in spacingMargin && props.indexOf(prop) === -1) {
                    spacingMargin[prop] = 0;
                }

                props.forEach(function (key, i) {
                    if (key in spacingMargin && isNone[i]) {
                        spacingMargin[key] = 0;
                    }
                });
            });
        }

        if (react__WEBPACK_IMPORTED_MODULE_5__.isValidElement(child)) {
            var propsMargin = child.props.margin;

            var childPropsMargin = (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__.getMargin)(propsMargin);
            var gridProps = {};

            if (['function', 'object'].indexOf((0,babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(child.type)) > -1 && child.type._typeMark === 'responsive_grid') {
                gridProps = (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__["default"])((0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({ display: 'grid' }, child.props));
            }

            return react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(child, {
                style: (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, spacingMargin, childPropsMargin, gridProps, child.props.style || {})
            });
        }

        return child;
    });
};

var getStyle = function getStyle() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var props = arguments[1];

    return (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__["default"])((0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({ display: 'flex' }, props)), style);
};

var getOuterStyle = function getOuterStyle(style, styleProps) {
    var sheet = getStyle(style, styleProps);

    return (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__.filterOuterStyle)(sheet);
};

var getHelperStyle = function getHelperStyle(style, styleProps) {
    var sheet = getStyle(style, styleProps);

    return (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__.filterHelperStyle)((0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, sheet, (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__.getSpacingHelperMargin)(styleProps.spacing)));
};

var getInnerStyle = function getInnerStyle(style, styleProps) {
    var sheet = getStyle(style, styleProps);

    return (0,_responsive_grid_create_style__WEBPACK_IMPORTED_MODULE_8__.filterInnerStyle)(sheet);
};

/**
 * Box
 */
var Box = (_temp = _class = function (_Component) {
    (0,babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Box, _Component);

    function Box() {
        (0,babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Box);

        return (0,babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _Component.apply(this, arguments));
    }

    Box.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            direction = _props.direction,
            justify = _props.justify,
            align = _props.align,
            wrap = _props.wrap,
            flex = _props.flex,
            spacing = _props.spacing,
            padding = _props.padding,
            margin = _props.margin,
            style = _props.style,
            className = _props.className,
            children = _props.children,
            device = _props.device,
            component = _props.component;


        var styleProps = {
            direction: direction,
            justify: justify,
            align: align,
            wrap: wrap,
            flex: flex,
            spacing: spacing,
            padding: padding,
            margin: margin
        };
        var View = component;
        var others = pickOthers(Object.keys(Box.propTypes), this.props);
        var styleSheet = getStyle(style, styleProps);

        var boxs = createChildren(children, {
            spacing: spacing,
            direction: direction,
            wrap: wrap,
            device: device
        });

        var cls = classnames__WEBPACK_IMPORTED_MODULE_6___default()((_cx = {}, _cx[prefix + 'box'] = true, _cx), className);
        if (wrap && spacing) {
            var outerStyle = getOuterStyle(style, styleProps);
            var helperStyle = getHelperStyle(style, styleProps);
            var innerStyle = getInnerStyle(style, styleProps);

            return react__WEBPACK_IMPORTED_MODULE_5__.createElement(
                View,
                (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({ style: outerStyle, className: cls }, others),
                react__WEBPACK_IMPORTED_MODULE_5__.createElement(
                    'div',
                    { style: helperStyle },
                    react__WEBPACK_IMPORTED_MODULE_5__.createElement(
                        'div',
                        { style: innerStyle, className: prefix + 'box' },
                        boxs
                    )
                )
            );
        }

        return react__WEBPACK_IMPORTED_MODULE_5__.createElement(
            View,
            (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({ style: styleSheet, className: cls }, others),
            boxs
        );
    };

    return Box;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component), _class.propTypes = {
    prefix: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().any),
    /**
     * ????????????
     */
    flex: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)]),
    /**
     * ???????????????????????? column ??????????????????????????????
     * @default column
     */
    direction: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['row', 'column', 'row-reverse']),
    /**
     * ???????????? ??????IE11+
     */
    wrap: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    /**
     * ????????????????????? [bottom&top, right&left]
     */
    spacing: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)]),
    /**
     * ?????? margin [bottom&top, right&left]
     */
    margin: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)]),
    /**
     * ?????? padding [bottom&top, right&left]
     */
    padding: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)]),
    /**
     * ???????????????????????????????????????????????? ??????????????? justify-content ???
     */
    justify: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
    /**
     * ???????????????????????????????????????????????? ??????????????? align-items ???
     */
    align: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
    device: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['phone', 'tablet', 'desktop']),
    /**
     * ?????????????????? ??????section???
     */
    component: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
}, _class.defaultProps = {
    prefix: 'next-',
    direction: 'column',
    wrap: false,
    component: 'div'
}, _temp);
Box.displayName = 'Box';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_provider__WEBPACK_IMPORTED_MODULE_10__["default"].config(Box));

/***/ }),

/***/ "./node_modules/@alifd/next/es/responsive-grid/cell.js":
/*!*************************************************************!*\
  !*** ./node_modules/@alifd/next/es/responsive-grid/cell.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "./node_modules/@alifd/next/es/config-provider/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./node_modules/@alifd/next/es/util/index.js");




var _class, _temp;






var pickOthers = _util__WEBPACK_IMPORTED_MODULE_4__.obj.pickOthers;
/**
 * ResponsiveGrid.Cell
 */

var Cell = (_temp = _class = function (_Component) {
    (0,babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Cell, _Component);

    function Cell() {
        (0,babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cell);

        return (0,babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _Component.apply(this, arguments));
    }

    Cell.prototype.render = function render() {
        var _props = this.props,
            View = _props.component,
            children = _props.children;


        var others = pickOthers(Object.keys(Cell.propTypes), this.props);

        return react__WEBPACK_IMPORTED_MODULE_3__.createElement(
            View,
            others,
            children
        );
    };

    return Cell;
}(react__WEBPACK_IMPORTED_MODULE_3__.Component), _class._typeMark = 'responsive_grid_cell', _class.propTypes = {
    device: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['phone', 'tablet', 'desktop']),
    /**
     * ?????????????????????
     */
    colSpan: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]),
    /**
     * ?????????????????????
     */
    rowSpan: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
    /**
     * ??????????????????
     */
    component: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType)
}, _class.defaultProps = {
    component: 'div',
    device: 'desktop'
}, _temp);
Cell.displayName = 'Cell';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_provider__WEBPACK_IMPORTED_MODULE_6__["default"].config(Cell));

/***/ }),

/***/ "./node_modules/@alifd/next/es/responsive-grid/create-style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@alifd/next/es/responsive-grid/create-style.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "filterHelperStyle": () => (/* binding */ filterHelperStyle),
/* harmony export */   "filterInnerStyle": () => (/* binding */ filterInnerStyle),
/* harmony export */   "filterOuterStyle": () => (/* binding */ filterOuterStyle),
/* harmony export */   "getChildMargin": () => (/* binding */ getChildMargin),
/* harmony export */   "getGridChildProps": () => (/* binding */ getGridChildProps),
/* harmony export */   "getMargin": () => (/* binding */ getMargin),
/* harmony export */   "getSpacingHelperMargin": () => (/* binding */ getSpacingHelperMargin),
/* harmony export */   "getSpacingMargin": () => (/* binding */ getSpacingMargin)
/* harmony export */ });
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@alifd/next/es/responsive-grid/util.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@alifd/next/es/util/index.js");


// import { prefix } from 'inline-style-prefixer';



var ieVersion = _util__WEBPACK_IMPORTED_MODULE_2__.env.ieVersion;

var getPadding = function getPadding(padding) {
    if (!Array.isArray(padding)) {
        return {
            padding: padding
        };
    }

    var attrs = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
    var paddings = {};
    var value = void 0;

    attrs.forEach(function (attr, index) {
        switch (padding.length) {
            case 1:
                value = padding[0] || 0;
                break;
            case 2:
                value = padding[index] || padding[index - 2] || 0;
                break;
            case 3:
                value = index === 2 ? padding[2] : padding[index] || padding[index - 2] || 0;
                break;
            case 4:
            default:
                value = padding[index] || 0;
                break;
        }
        paddings[attr] = value;
    });

    return paddings;
};

var getMargin = function getMargin(size) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { isNegative: false, half: false },
        isNegative = _ref.isNegative,
        half = _ref.half;

    if (!size) {
        return {};
    }
    var attrs = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
    var margins = {};
    var param = 1 * (isNegative ? -1 : 1) * (half ? 0.5 : 1);
    var value = void 0;

    attrs.forEach(function (attr, index) {
        if (!Array.isArray(size)) {
            value = param * size;
        } else {
            switch (size.length) {
                case 1:
                    value = param * (size[0] || 0);
                    break;
                case 2:
                    value = param * (size[index] || size[index - 2] || 0);
                    break;
                case 3:
                    value = param * (index === 2 ? size[2] : size[index] || size[index - 2] || 0);
                    break;
                case 4:
                default:
                    value = param * (size[index] || 0);
                    break;
            }
        }

        margins[attr] = value;
    });

    return margins;
};

var getChildMargin = function getChildMargin(spacing) {
    return getMargin(spacing, { half: true });
};

var getSpacingMargin = function getSpacingMargin(spacing) {
    return getMargin(spacing, { half: true });
};

var getSpacingHelperMargin = function getSpacingHelperMargin(spacing) {
    return getMargin(spacing, { isNegative: true, half: true });
};

var getFlexs = function getFlexs(flex) {
    if (!Array.isArray(flex)) {
        return {
            flex: flex
        };
    }

    var attrs = ['flexGrow', 'flexShrink', 'flexBasis'];
    var flexs = {};

    flex.forEach(function (val, index) {
        flexs[attrs[index]] = val;
    });

    return flexs;
};

var getGridGap = function getGridGap(gap) {
    if (!Array.isArray(gap)) {
        return {
            gap: gap
        };
    }

    var attrs = ['rowGap', 'columnGap'];
    var gaps = {};

    gap.forEach(function (val, index) {
        gaps[attrs[index]] = val;
    });

    return gaps;
};

var getTemplateCount = function getTemplateCount(counts) {
    if (!isNaN(counts) || typeof counts === 'string') {
        return 'repeat(' + counts + ', minmax(0,1fr))';
    }

    return counts;
};

// const outerProps = ['alignSelf', 'flexGrow', 'flexShrink', 'flexBasis', 'backgroundColor', 'boxShadow', 'borderRadius', 'borderWidth', 'borderStyle', 'borderColor', 'padding', 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom'];

var helperProps = ['margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'];

var innerProps = ['flexDirection', 'flexWrap',
// 'justifyContent',
'alignContent', 'alignItems', 'display'];

var filterOuterStyle = function filterOuterStyle(style) {
    var props = {};

    [].concat(innerProps).forEach(function (key) {
        props[key] = style[key];
    });

    return (0,_util__WEBPACK_IMPORTED_MODULE_3__.filterUndefinedValue)((0,_util__WEBPACK_IMPORTED_MODULE_3__.stripObject)(style, props));
};

var filterHelperStyle = function filterHelperStyle(style) {
    var props = {};
    helperProps.forEach(function (key) {
        props[key] = style[key];
    });

    return (0,_util__WEBPACK_IMPORTED_MODULE_3__.filterUndefinedValue)((0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        overflow: 'hidden'
    }));
};

var filterInnerStyle = function filterInnerStyle(style) {
    var props = {};

    innerProps.forEach(function (key) {
        props[key] = style[key];
    });

    return (0,_util__WEBPACK_IMPORTED_MODULE_3__.filterUndefinedValue)(props);
};

var getGridChildProps = function getGridChildProps(props, device, gap) {
    var _props$row = props.row,
        row = _props$row === undefined ? 'initial' : _props$row,
        _props$col = props.col,
        col = _props$col === undefined ? 'initial' : _props$col,
        _props$rowSpan = props.rowSpan,
        rowSpan = _props$rowSpan === undefined ? 1 : _props$rowSpan,
        _props$colSpan = props.colSpan,
        colSpan = _props$colSpan === undefined ? 1 : _props$colSpan;


    var totalSpan = 12;
    var newColSpan = (typeof colSpan === 'undefined' ? 'undefined' : (0,babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(colSpan)) === 'object' && 'desktop' in colSpan ? colSpan.desktop : colSpan;

    ['tablet', 'phone'].forEach(function (deviceKey) {
        if (deviceKey === device) {
            if ((typeof colSpan === 'undefined' ? 'undefined' : (0,babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(colSpan)) === 'object' && device in colSpan) {
                newColSpan = colSpan[device];
            } else {
                switch (deviceKey) {
                    case 'tablet':
                        totalSpan = 8;
                        newColSpan = colSpan > 5 ? 8 : colSpan > 2 ? 4 : 2;
                        break;
                    case 'phone':
                        totalSpan = 4;
                        newColSpan = colSpan > 2 ? 4 : 2;
                        break;
                }
            }
        }
    });

    var gapLeft = gap;
    if (Array.isArray(gap)) {
        gapLeft = gap[1];
    }

    var ieChildFix = ieVersion && !(rowSpan === 1 && colSpan === 1) ? {
        display: 'inline-block',
        width: gapLeft ? 'calc(' + newColSpan / totalSpan * 100 + '% - ' + gapLeft + 'px)' : newColSpan / totalSpan * 100 + '%'
    } : {};

    return (0,_util__WEBPACK_IMPORTED_MODULE_3__.filterUndefinedValue)((0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        gridRowStart: row,
        gridRowEnd: 'span ' + rowSpan,
        gridColumnStart: col,
        gridColumnEnd: 'span ' + newColSpan
    }, ieChildFix));
};

var getBoxChildProps = function getBoxChildProps(props) {
    var alignSelf = props.alignSelf,
        flex = props.flex;


    return (0,_util__WEBPACK_IMPORTED_MODULE_3__.filterUndefinedValue)((0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        alignSelf: alignSelf
    }, getFlexs(flex)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref2) {
    var device = _ref2.device,
        display = _ref2.display,
        gap = _ref2.gap,
        direction = _ref2.direction,
        dense = _ref2.dense,
        rowSpan = _ref2.rowSpan,
        colSpan = _ref2.colSpan,
        row = _ref2.row,
        col = _ref2.col,
        rows = _ref2.rows,
        columns = _ref2.columns,
        justify = _ref2.justify,
        align = _ref2.align,
        alignSelf = _ref2.alignSelf,
        wrap = _ref2.wrap,
        flex = _ref2.flex,
        padding = _ref2.padding,
        margin = _ref2.margin;

    var style = (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getPadding(padding));

    var deviceColumns = 'auto';

    switch (device) {
        case 'phone':
            deviceColumns = 4;
            break;
        case 'tablet':
            deviceColumns = 8;
            break;
        case 'desktop':
            deviceColumns = 12;
            break;
        default:
            break;
    }
    var newColumns = !isNaN(columns) || typeof columns === 'string' ? columns : deviceColumns;

    switch (display) {
        case 'grid':
            style = (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getGridGap(gap), {
                gridTemplateRows: getTemplateCount(rows),
                gridTemplateColumns: getTemplateCount(newColumns),
                gridAutoFlow: '' + (direction || '') + (dense && ' dense')
            }, getGridChildProps({
                row: row,
                rowSpan: rowSpan,
                col: col,
                colSpan: colSpan
                // justifySelf,
                // alignSelf,
            }, device), style);
            break;
        case 'flex':
            style = (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
                // parent
                msFlexDirection: direction,
                flexDirection: direction,
                msFlexWrap: wrap ? 'wrap' : 'none',
                flexWrap: wrap ? 'wrap' : 'nowrap',
                msFlexPack: justify,
                justifyContent: justify,
                msFlexAlign: align,
                alignItems: align
            }, getMargin(margin), getBoxChildProps({
                alignSelf: alignSelf,
                flex: flex
            }), style);
            break;
        default:
            break;
    }

    // return prefix(style);
    return (0,_util__WEBPACK_IMPORTED_MODULE_3__.filterUndefinedValue)(style);
});



/***/ }),

/***/ "./node_modules/@alifd/next/es/responsive-grid/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@alifd/next/es/responsive-grid/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config-provider */ "./node_modules/@alifd/next/es/config-provider/index.js");
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../box */ "./node_modules/@alifd/next/es/box/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./node_modules/@alifd/next/es/util/index.js");
/* harmony import */ var _create_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-style */ "./node_modules/@alifd/next/es/responsive-grid/create-style.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cell */ "./node_modules/@alifd/next/es/responsive-grid/cell.js");






var _class, _temp;










var ieVersion = _util__WEBPACK_IMPORTED_MODULE_7__.env.ieVersion;
var pickOthers = _util__WEBPACK_IMPORTED_MODULE_7__.obj.pickOthers,
    isReactFragment = _util__WEBPACK_IMPORTED_MODULE_7__.obj.isReactFragment;


var createChildren = function createChildren(children, device, gap) {
    var array = react__WEBPACK_IMPORTED_MODULE_5__.Children.toArray(children);
    if (!children) {
        return null;
    }

    return array.map(function (child) {
        if (isReactFragment(child)) {
            return createChildren(child.props.children, device, gap);
        }

        if (react__WEBPACK_IMPORTED_MODULE_5__.isValidElement(child) && ['function', 'object'].indexOf((0,babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(child.type)) > -1 && ['form_item', 'responsive_grid_cell'].indexOf(child.type._typeMark) > -1) {
            return react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(child, {
                style: (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, (0,_create_style__WEBPACK_IMPORTED_MODULE_8__.getGridChildProps)(child.props, device, gap), child.props.style || {})
            });
        }

        return child;
    });
};

var getStyle = function getStyle() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var props = arguments[1];

    return (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, (0,_create_style__WEBPACK_IMPORTED_MODULE_8__["default"])((0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({ display: 'grid' }, props)), style);
};

/**
 * ResponsiveGrid
 */
var ResponsiveGrid = (_temp = _class = function (_Component) {
    (0,babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ResponsiveGrid, _Component);

    function ResponsiveGrid() {
        (0,babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResponsiveGrid);

        return (0,babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _Component.apply(this, arguments));
    }

    ResponsiveGrid.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            View = _props.component,
            style = _props.style,
            className = _props.className,
            children = _props.children,
            device = _props.device,
            rows = _props.rows,
            columns = _props.columns,
            gap = _props.gap,
            rowSpan = _props.rowSpan,
            colSpan = _props.colSpan,
            component = _props.component,
            dense = _props.dense;

        var styleProps = {
            rows: rows,
            columns: columns,
            gap: gap,
            device: device,
            rowSpan: rowSpan,
            colSpan: colSpan,
            component: component,
            dense: dense
        };

        var others = pickOthers(Object.keys(ResponsiveGrid.propTypes), this.props);

        var styleSheet = getStyle(style, styleProps);

        var cls = classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames = {}, _classNames[prefix + 'responsive-grid'] = true, _classNames[prefix + 'responsive-grid-ie'] = ieVersion, _classNames), className);

        return ieVersion ? react__WEBPACK_IMPORTED_MODULE_5__.createElement(_box__WEBPACK_IMPORTED_MODULE_9__["default"], (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.props, { direction: 'row', wrap: true, spacing: gap, children: createChildren(children, device, gap) })) : react__WEBPACK_IMPORTED_MODULE_5__.createElement(
            View,
            (0,babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({ style: styleSheet, className: cls }, others),
            createChildren(children, device, gap)
        );
    };

    return ResponsiveGrid;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component), _class._typeMark = 'responsive_grid', _class.propTypes = {
    prefix: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().any),
    /**
     * ??????????????????????????????????????? PC
     * @enumdesc ??????, ??????, PC
     */
    device: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['phone', 'tablet', 'desktop']),
    rows: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),
    /**
     * ??????????????? ????????? 12 ???
     */
    columns: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),
    /**
     * ?????? cell ?????????????????? [bottom&top, right&left]
     */
    gap: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)]),
    /**
     * ??????????????????
     */
    component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),
    /**
     * ????????????????????????????????????????????????????????????????????????????????????
     */
    dense: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)
}, _class.defaultProps = {
    prefix: 'next-',
    component: 'div',
    device: 'desktop',
    dense: false
}, _temp);
ResponsiveGrid.displayName = 'ResponsiveGrid';


ResponsiveGrid.Cell = _cell__WEBPACK_IMPORTED_MODULE_11__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_provider__WEBPACK_IMPORTED_MODULE_12__["default"].config(ResponsiveGrid));

/***/ }),

/***/ "./node_modules/@alifd/next/es/responsive-grid/util.js":
/*!*************************************************************!*\
  !*** ./node_modules/@alifd/next/es/responsive-grid/util.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterUndefinedValue": () => (/* binding */ filterUndefinedValue),
/* harmony export */   "stripObject": () => (/* binding */ stripObject)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/@alifd/next/es/util/index.js");


var isPlainObject = _util__WEBPACK_IMPORTED_MODULE_0__.obj.isPlainObject;

/**
 * ?????? undefined ????????????
 * @param  {*}  obj
 * @return {Object}
 */

function filterUndefinedValue(object) {
    if (!isPlainObject(object)) {
        return object;
    }

    var obj = {};

    Object.keys(object).forEach(function (key) {
        var value = object[key];

        if (value !== undefined) {
            obj[key] = value;
        }
    });

    return obj;
}

/**
 * ??? obj ????????? subObj
 * @param  {*}  obj
 * @param  {*}  subObj
 * @return {Object}
 */
function stripObject(obj, subObj) {
    var newObject = {};

    Object.keys(obj).forEach(function (key) {
        if (!(key in subObj)) {
            newObject[key] = obj[key];
        }
    });
    return newObject;
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
/* harmony import */ var _alifd_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alifd/next */ "./node_modules/@alifd/next/es/responsive-grid/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


 // import Guide from './components/Guide';
// import { lazy } from 'ice';
// import Editor from '@/components/IssueEditor';

var Cell = _alifd_next__WEBPACK_IMPORTED_MODULE_1__["default"].Cell; // const Guide = lazy(() => import('./components/Guide'), true);
// const Editor = lazy(() => import('@/components/IssueEditor'), true);

var Guide = loadable({
  resolved: {},
  chunkName: function chunkName() {
    return "components-Guide";
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
    return __webpack_require__.e(/*! import() | components-Guide */ "components-Guide").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Guide */ "./src/pages/Dashboard/components/Guide/index.tsx"));
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
      return /*require.resolve*/(/*! ./components/Guide */ "./src/pages/Dashboard/components/Guide/index.tsx");
    }

    return eval('require.resolve')("./components/Guide");
  }
});
_c = Guide;
var Editor = loadable({
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
});
_c2 = Editor;
console.log('Guide: ', Guide);
console.log('Editor: ', Editor);

var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Cell, {
    colSpan: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Guide, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Editor, {
    editorKey: "508066-description",
    editorType: 'DINGDING',
    className: 'DingEditor--aoneEditor--XzNBwti',
    defaultType: 'richText' // ??????richText
    ,
    defaultValue: "[\\\"root\\\",{},[\\\"p\\\",{},[\\\"span\\\",{\\\"data-type\\\":\\\"text\\\"},[\\\"span\\\",{\\\"data-type\\\":\\\"leaf\\\"},\\\"\\\"]]]]",
    onChange: function onChange(value, docType) {
      localStorage.setItem('editorInputType', docType);
    },
    readOnly: true,
    userConfig: {// newTab: tab, // ??????????????? ???????????????????????????tab???
      // getUserLink, // (user) => 'http://ali.baba/${user.id}'
      // queryUser, // return ?????? Promise
    },
    uploadImgConfig: {
      multiple: false,
      maxSize: 1024 * 1024,
      // 2M
      accept: 'image/jpg,image/jpeg,image/png,image/gif,image/bmp' // input  accept
      // uploadImage, // return ?????? Promise

    },
    uploadEmbedConfig: {// handlePreviewFile, // return ?????? Promise
    } // toolbar={toolbar}
    ,
    isFullScreen: false,
    onChangeFullScreen: function onChangeFullScreen(innerIsFullScreen) {// setIsFullScreen(innerIsFullScreen);
    }
  }));
};

_c3 = Dashboard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Guide");
__webpack_require__.$Refresh$.register(_c2, "Editor");
__webpack_require__.$Refresh$.register(_c3, "Dashboard");

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
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/Dashboard */ "./src/pages/Dashboard/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@builder/pack/deps/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





 // const Dashboard = lazy(() => import('@/pages/Dashboard'), true);

console.log('Dashboard: ', _pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"]);
var routerConfig = [{
  path: '/',
  component: _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
  children: [{
    path: '/',
    exact: true,
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_2__.Home
  }, {
    path: '/:id',
    component: _pages_LazyContainer__WEBPACK_IMPORTED_MODULE_3__.LazyContainer,
    children: [{
      path: '/lazy',
      component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"]
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
/******/ 	__webpack_require__.h = () => ("c7ce249d60eee2e10760")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=index.7e7adba80ae38d439004.hot-update.js.map