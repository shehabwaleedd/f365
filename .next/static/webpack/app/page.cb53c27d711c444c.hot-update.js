"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/logoMarquee/LogoMarquee.jsx":
/*!****************************************************!*\
  !*** ./src/components/logoMarquee/LogoMarquee.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-marquee */ \"(app-pages-browser)/./node_modules/react-fast-marquee/dist/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/components/logoMarquee/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst LogoMarquee = ()=>{\n    const data = [\n        {\n            img: \"/assets/logos/1.png\"\n        },\n        {\n            img: \"/assets/logos/2.png\"\n        },\n        {\n            img: \"/assets/logos/3.png\"\n        },\n        {\n            img: \"/assets/logos/4.png\"\n        },\n        {\n            img: \"/assets/logos/5.png\"\n        },\n        {\n            img: \"/assets/logos/6.png\"\n        },\n        {\n            img: \"/assets/logos/6.png\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo_marquee),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_fast_marquee__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: item.img,\n                        alt: \"logo\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/logoMarquee/LogoMarquee.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/logoMarquee/LogoMarquee.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/logoMarquee/LogoMarquee.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/logoMarquee/LogoMarquee.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_c = LogoMarquee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoMarquee);\nvar _c;\n$RefreshReg$(_c, \"LogoMarquee\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ29NYXJxdWVlL0xvZ29NYXJxdWVlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFDVjtBQUNTO0FBRXhDLE1BQU1JLGNBQWM7SUFFaEIsTUFBTUMsT0FBTztRQUVUO1lBQ0lDLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtLQUNIO0lBRUQscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVdMLHdFQUFtQjtrQkFDbkMsNEVBQUNGLDBEQUFPQTtzQkFDSEksS0FBS0ssR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNiLDhEQUFDQzs4QkFDRyw0RUFBQ1gsa0RBQUtBO3dCQUFDWSxLQUFLSCxLQUFLTCxHQUFHO3dCQUFFUyxLQUFJO3dCQUN0QkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7O21CQUhOTDs7Ozs7Ozs7Ozs7Ozs7O0FBVTlCO0tBekNNUjtBQTJDTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sb2dvTWFycXVlZS9Mb2dvTWFycXVlZS5qc3g/NDMzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnXG5cbmNvbnN0IExvZ29NYXJxdWVlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZGF0YSA9IFtcblxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IFwiL2Fzc2V0cy9sb2dvcy8xLnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IFwiL2Fzc2V0cy9sb2dvcy8yLnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IFwiL2Fzc2V0cy9sb2dvcy8zLnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IFwiL2Fzc2V0cy9sb2dvcy80LnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IFwiL2Fzc2V0cy9sb2dvcy81LnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IFwiL2Fzc2V0cy9sb2dvcy82LnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IFwiL2Fzc2V0cy9sb2dvcy82LnBuZ1wiLFxuICAgICAgICB9LFxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29fbWFycXVlZX0+XG4gICAgICAgICAgICA8TWFycXVlZT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ30gYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9NYXJxdWVlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvTWFycXVlZSJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcnF1ZWUiLCJJbWFnZSIsInN0eWxlcyIsIkxvZ29NYXJxdWVlIiwiZGF0YSIsImltZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsb2dvX21hcnF1ZWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/logoMarquee/LogoMarquee.jsx\n"));

/***/ })

});