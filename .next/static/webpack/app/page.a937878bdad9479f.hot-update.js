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

/***/ "(app-pages-browser)/./src/components/brief/Brief.jsx":
/*!****************************************!*\
  !*** ./src/components/brief/Brief.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/components/brief/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _animation_animatedSubs_AnimatedSubs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/animation/animatedSubs/AnimatedSubs */ \"(app-pages-browser)/./src/animation/animatedSubs/AnimatedSubs.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Brief = (param)=>{\n    let { windowWidth } = param;\n    _s();\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgRef2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgRef3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const phrase = \"asdasdasdasdasdasdasd asdasd asdasdas asdasdasd asdadasda asdad\";\n    const isDesktop = windowWidth > 1268;\n    const url = \"https://images.pexels.com/photos/4324101/pexels-photo-4324101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\";\n    const url2 = \"https://images.pexels.com/photos/18762797/pexels-photo-18762797/free-photo-of-runner-training-for-a-marathon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\";\n    const url3 = \"https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\";\n    const { scrollYProgress: scrollYProgress1 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: imgRef,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ]\n    });\n    const { scrollYProgress: scrollYProgress2 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: imgRef2,\n        offset: [\n            \"start end\",\n            \"center start\"\n        ]\n    });\n    const { scrollYProgress: scrollYProgress3 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: imgRef2,\n        offset: [\n            \"start end\",\n            \"center start\"\n        ]\n    });\n    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress1, [\n        0,\n        1\n    ], [\n        \"-10%\",\n        \"10%\"\n    ]);\n    const translateY2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress2, [\n        0,\n        1\n    ], [\n        \"10%\",\n        \"-14%\"\n    ]);\n    const translateY3 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress3, [\n        0,\n        1\n    ], [\n        \"10%\",\n        \"-14%\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined),\n                        \" Our Story\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_sub),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: phrase.split(\" \").map((word, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mask),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.span, {\n                                            variants: slideUp,\n                                            custom: index,\n                                            animate: isInView ? \"open\" : \"closed\",\n                                            children: word\n                                        }, index, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 82\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 40\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            \"                \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images),\n                        children: isDesktop ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__container),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.img, {\n                                        style: {\n                                            translateY\n                                        },\n                                        ref: imgRef,\n                                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__container__image_left),\n                                        src: url\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.img, {\n                                        style: {\n                                            translateY: translateY2\n                                        },\n                                        ref: imgRef2,\n                                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__container__image_top_right),\n                                        src: url2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.img, {\n                                        style: {\n                                            translateY: translateY3\n                                        },\n                                        ref: imgRef3,\n                                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__container__image_bottom_right),\n                                        src: url3\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                            drag: \"x\",\n                            dragConstraints: {\n                                left: -500,\n                                right: 0\n                            },\n                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__drag),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__drag_image),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: url,\n                                        width: 500,\n                                        height: 500,\n                                        alt: \"img\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__drag_image),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: url2,\n                                        width: 500,\n                                        height: 500,\n                                        alt: \"img\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story__right_images__drag_image),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: url3,\n                                        width: 500,\n                                        height: 500,\n                                        alt: \"img\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/brief/Brief.jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Brief, \"jYr1sxhYK9wWCTyncBEtqTU9yjU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = Brief;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brief);\nvar _c;\n$RefreshReg$(_c, \"Brief\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JyaWVmL0JyaWVmLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTBEO0FBQ2xCO0FBQ3dCO0FBQ2pDO0FBQ2tDO0FBRWpFLE1BQU1VLFFBQVE7UUFBQyxFQUFFQyxXQUFXLEVBQUU7O0lBRTFCLE1BQU1DLFNBQVNWLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU1XLFVBQVVYLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1ZLFVBQVVaLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1hLFNBQVM7SUFDZixNQUFNQyxZQUFZTCxjQUFjO0lBR2hDLE1BQU1NLE1BQU07SUFDWixNQUFNQyxPQUFPO0lBQ2IsTUFBTUMsT0FBTztJQUViLE1BQU0sRUFBRUMsaUJBQWlCQyxnQkFBZ0IsRUFBRSxHQUFHZCx3REFBU0EsQ0FBQztRQUNwRGUsUUFBUVY7UUFDUlcsUUFBUTtZQUFDO1lBQWE7U0FBWTtJQUN0QztJQUVBLE1BQU0sRUFBRUgsaUJBQWlCSSxnQkFBZ0IsRUFBRSxHQUFHakIsd0RBQVNBLENBQUM7UUFDcERlLFFBQVFUO1FBQ1JVLFFBQVE7WUFBQztZQUFhO1NBQWU7SUFDekM7SUFFQSxNQUFNLEVBQUVILGlCQUFpQkssZ0JBQWdCLEVBQUUsR0FBR2xCLHdEQUFTQSxDQUFDO1FBQ3BEZSxRQUFRVDtRQUNSVSxRQUFRO1lBQUM7WUFBYTtTQUFlO0lBQ3pDO0lBSUEsTUFBTUcsYUFBYXBCLDJEQUFZQSxDQUFDZSxrQkFBa0I7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVE7S0FBTTtJQUN6RSxNQUFNTSxjQUFjckIsMkRBQVlBLENBQUNrQixrQkFBa0I7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU87S0FBTztJQUMxRSxNQUFNSSxjQUFjdEIsMkRBQVlBLENBQUNtQixrQkFBa0I7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU87S0FBTztJQUkxRSxxQkFDSSw4REFBQ0k7UUFBUUMsV0FBVzFCLGlFQUFZOzswQkFDNUIsOERBQUM0QjtnQkFBSUYsV0FBVzFCLHVFQUFrQjswQkFDOUIsNEVBQUM4Qjs7c0NBQUcsOERBQUNDO3NDQUFLOzs7Ozs7d0JBQVE7Ozs7Ozs7Ozs7OzswQkFFdEIsOERBQUNIO2dCQUFJRixXQUFXMUIsd0VBQW1COztrQ0FPL0IsOERBQUM0Qjt3QkFBSUYsV0FBVzFCLDRFQUF1Qjs7MENBQ25DLDhEQUFDa0M7MENBRU92QixPQUFPd0IsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztvQ0FDekIscUJBQU8sOERBQUNQO3dDQUFpQkwsV0FBVzFCLGdFQUFXO2tEQUFFLDRFQUFDQyxpREFBTUEsQ0FBQzhCLElBQUk7NENBQUNTLFVBQVVDOzRDQUFTQyxRQUFRSjs0Q0FBT0ssU0FBU0MsV0FBVyxTQUFTO3NEQUF1QlA7MkNBQVJDOzs7Ozt1Q0FBMUhBOzs7OztnQ0FDdEI7Ozs7Ozs0QkFFSjs7Ozs7OztrQ0FDUiw4REFBQ1Y7d0JBQUlGLFdBQVcxQiwrRUFBMEI7a0NBQ3JDWSwwQkFDRyw4REFBQ2dCOzRCQUFJRixXQUFXMUIsMEZBQXFDO3NDQUNqRDs7a0RBQ0ksOERBQUNDLGlEQUFNQSxDQUFDOEMsR0FBRzt3Q0FDUEMsT0FBTzs0Q0FBRTFCO3dDQUFXO3dDQUNwQjJCLEtBQUt6Qzt3Q0FDTGtCLFdBQVcxQixzR0FBaUQ7d0NBQUVtRCxLQUFLdEM7Ozs7OztrREFDdkUsOERBQUNaLGlEQUFNQSxDQUFDOEMsR0FBRzt3Q0FDUEMsT0FBTzs0Q0FBRTFCLFlBQVlDO3dDQUFZO3dDQUNqQzBCLEtBQUt4Qzt3Q0FDTGlCLFdBQVcxQiwyR0FBc0Q7d0NBQUVtRCxLQUFLckM7Ozs7OztrREFDNUUsOERBQUNiLGlEQUFNQSxDQUFDOEMsR0FBRzt3Q0FDUEMsT0FBTzs0Q0FBRTFCLFlBQVlFO3dDQUFZO3dDQUNqQ3lCLEtBQUt2Qzt3Q0FDTGdCLFdBQVcxQiw4R0FBeUQ7d0NBQUVtRCxLQUFLcEM7Ozs7Ozs7Ozs7OztzREFNdkYsOERBQUNkLGlEQUFNQSxDQUFDMkIsR0FBRzs0QkFBQzBCLE1BQUs7NEJBQUlDLGlCQUFpQjtnQ0FBRUMsTUFBTSxDQUFDO2dDQUFLQyxPQUFPOzRCQUFFOzRCQUFHL0IsV0FBVzFCLHFGQUFnQzs7OENBQ3ZHLDhEQUFDNEI7b0NBQUlGLFdBQVcxQiwyRkFBc0M7OENBQ2xELDRFQUFDSSxrREFBS0E7d0NBQUMrQyxLQUFLdEM7d0NBQ1IrQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs4Q0FHWiw4REFBQ2xDO29DQUFJRixXQUFXMUIsMkZBQXNDOzhDQUNsRCw0RUFBQ0ksa0RBQUtBO3dDQUFDK0MsS0FBS3JDO3dDQUNSOEMsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsS0FBSTs7Ozs7Ozs7Ozs7OENBR1osOERBQUNsQztvQ0FBSUYsV0FBVzFCLDJGQUFzQzs4Q0FDbEQsNEVBQUNJLGtEQUFLQTt3Q0FBQytDLEtBQUtwQzt3Q0FDUjZDLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEM7R0F6R014RDs7UUFhNENILG9EQUFTQTtRQUtUQSxvREFBU0E7UUFLVEEsb0RBQVNBO1FBT3BDRCx1REFBWUE7UUFDWEEsdURBQVlBO1FBQ1pBLHVEQUFZQTs7O0tBaEM5Qkk7QUEyR04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnJpZWYvQnJpZWYuanN4Pzk1MDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VTY3JvbGwgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBBbmltYXRlZFN1YnMgZnJvbSAnQC9hbmltYXRpb24vYW5pbWF0ZWRTdWJzL0FuaW1hdGVkU3Vicyc7XG5cbmNvbnN0IEJyaWVmID0gKHsgd2luZG93V2lkdGggfSkgPT4ge1xuXG4gICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGltZ1JlZjIgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaW1nUmVmMyA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBwaHJhc2UgPSBcImFzZGFzZGFzZGFzZGFzZGFzZGFzZCBhc2Rhc2QgYXNkYXNkYXMgYXNkYXNkYXNkIGFzZGFkYXNkYSBhc2RhZFwiXG4gICAgY29uc3QgaXNEZXNrdG9wID0gd2luZG93V2lkdGggPiAxMjY4O1xuXG5cbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQzMjQxMDEvcGV4ZWxzLXBob3RvLTQzMjQxMDEuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MVwiXG4gICAgY29uc3QgdXJsMiA9IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTg3NjI3OTcvcGV4ZWxzLXBob3RvLTE4NzYyNzk3L2ZyZWUtcGhvdG8tb2YtcnVubmVyLXRyYWluaW5nLWZvci1hLW1hcmF0aG9uLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIlxuICAgIGNvbnN0IHVybDMgPSBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEyNjc2OTcvcGV4ZWxzLXBob3RvLTEyNjc2OTcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MVwiXG5cbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzczogc2Nyb2xsWVByb2dyZXNzMSB9ID0gdXNlU2Nyb2xsKHtcbiAgICAgICAgdGFyZ2V0OiBpbWdSZWYsXG4gICAgICAgIG9mZnNldDogW1wic3RhcnQgZW5kXCIsIFwiZW5kIHN0YXJ0XCJdXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzczogc2Nyb2xsWVByb2dyZXNzMiB9ID0gdXNlU2Nyb2xsKHtcbiAgICAgICAgdGFyZ2V0OiBpbWdSZWYyLFxuICAgICAgICBvZmZzZXQ6IFtcInN0YXJ0IGVuZFwiLCBcImNlbnRlciBzdGFydFwiXVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3M6IHNjcm9sbFlQcm9ncmVzczMgfSA9IHVzZVNjcm9sbCh7XG4gICAgICAgIHRhcmdldDogaW1nUmVmMixcbiAgICAgICAgb2Zmc2V0OiBbXCJzdGFydCBlbmRcIiwgXCJjZW50ZXIgc3RhcnRcIl1cbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCB0cmFuc2xhdGVZID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzczEsIFswLCAxXSwgW1wiLTEwJVwiLCBcIjEwJVwiXSk7XG4gICAgY29uc3QgdHJhbnNsYXRlWTIgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzMiwgWzAsIDFdLCBbXCIxMCVcIiwgXCItMTQlXCJdKTtcbiAgICBjb25zdCB0cmFuc2xhdGVZMyA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MzLCBbMCwgMV0sIFtcIjEwJVwiLCBcIi0xNCVcIl0pO1xuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlfX2xlZnR9PlxuICAgICAgICAgICAgICAgIDxoMj48c3Bhbj4vPC9zcGFuPiBPdXIgU3Rvcnk8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5X19yaWdodH0+XG4gICAgICAgICAgICAgICAgey8qIHtpc0Rlc2t0b3AgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxwPkYzNjUsIGZvdW5kZWQgaW4gMjAyMyBieSBBc21hIFNhbWkgYW5kIE5paGFsIFNhbWksIGlzIGEgcGlvbmVlcmluZyB3ZWxsbmVzcyBjb21tdW5pdHkgZGVkaWNhdGVkIHRvIHN1cHBvcnRpbmcgd29tZW4mYXBvcztzIGhlYWx0aCwgcGVyc29uYWwgZGV2ZWxvcG1lbnQsIGFuZCBjYXJlZXIgcHJvZ3Jlc3Npb24uIEluY3ViYXRlZCBieSBpbjUgRHViYWksIGFuIGluaXRpYXRpdmUgb2YgdGhlIER1YmFpIEdvdmVybm1lbnQsIEYzNjUgZW1wb3dlcnMgd29tZW4gdGhyb3VnaCBpbm5vdmF0aXZlIHByb2dyYW1zIGFuZCByZXNvdXJjZXMsIGZvc3RlcmluZyBhIHZpYnJhbnQgZW52aXJvbm1lbnQgZm9yIGdyb3d0aCBhbmQgc3VjY2VzcyBpbiBhbGwgYXNwZWN0cyBvZiBsaWZlLjwvcD5cblxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkYzNjUsIGZvdW5kZWQgaW4gMjAyMyBieSBBc21hIFNhbWkgYW5kIE5paGFsIFNhbWksIGlzIGEgcGlvbmVlcmluZyB3ZWxsbmVzcyBjb21tdW5pdHkgZGVkaWNhdGVkIHRvIHN1cHBvcnRpbmcgd29tZW4mYXBvcztzIGhlYWx0aCwgcGVyc29uYWwgZGV2ZWxvcG1lbnQsIGFuZCBjYXJlZXIgcHJvZ3Jlc3Npb24uIEluY3ViYXRlZCBieSBpbjUgRHViYWksIGFuIGluaXRpYXRpdmUgb2YgdGhlIER1YmFpIEdvdmVybm1lbnQsIEYzNjUgZW1wb3dlcnMgd29tZW4gdGhyb3VnaCBpbm5vdmF0aXZlIHByb2dyYW1zIGFuZCByZXNvdXJjZXMsIGZvc3RlcmluZyBhIHZpYnJhbnQgZW52aXJvbm1lbnQgZm9yIGdyb3d0aCBhbmQgc3VjY2VzcyBpbiBhbGwgYXNwZWN0cyBvZiBsaWZlLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5X19yaWdodF9zdWJ9PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaHJhc2Uuc3BsaXQoXCIgXCIpLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLm1hc2t9Pjxtb3Rpb24uc3BhbiB2YXJpYW50cz17c2xpZGVVcH0gY3VzdG9tPXtpbmRleH0gYW5pbWF0ZT17aXNJblZpZXcgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9IGtleT17aW5kZXh9Pnt3b3JkfTwvbW90aW9uLnNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9yeV9fcmlnaHRfaW1hZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAge2lzRGVza3RvcCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlfX3JpZ2h0X2ltYWdlc19fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNsYXRlWSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWdSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdG9yeV9fcmlnaHRfaW1hZ2VzX19jb250YWluZXJfX2ltYWdlX2xlZnR9IHNyYz17dXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNsYXRlWTogdHJhbnNsYXRlWTIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW1nUmVmMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5X19yaWdodF9pbWFnZXNfX2NvbnRhaW5lcl9faW1hZ2VfdG9wX3JpZ2h0fSBzcmM9e3VybDJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2xhdGVZOiB0cmFuc2xhdGVZMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWdSZWYzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlfX3JpZ2h0X2ltYWdlc19fY29udGFpbmVyX19pbWFnZV9ib3R0b21fcmlnaHR9IHNyYz17dXJsM30gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRyYWc9XCJ4XCIgZHJhZ0NvbnN0cmFpbnRzPXt7IGxlZnQ6IC01MDAsIHJpZ2h0OiAwIH19IGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5X19yaWdodF9pbWFnZXNfX2RyYWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlfX3JpZ2h0X2ltYWdlc19fZHJhZ19pbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0naW1nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlfX3JpZ2h0X2ltYWdlc19fZHJhZ19pbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3VybDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ltZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5X19yaWdodF9pbWFnZXNfX2RyYWdfaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1cmwzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdpbWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJpZWYiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIm1vdGlvbiIsInVzZVRyYW5zZm9ybSIsInVzZVNjcm9sbCIsIkltYWdlIiwiQW5pbWF0ZWRTdWJzIiwiQnJpZWYiLCJ3aW5kb3dXaWR0aCIsImltZ1JlZiIsImltZ1JlZjIiLCJpbWdSZWYzIiwicGhyYXNlIiwiaXNEZXNrdG9wIiwidXJsIiwidXJsMiIsInVybDMiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzY3JvbGxZUHJvZ3Jlc3MxIiwidGFyZ2V0Iiwib2Zmc2V0Iiwic2Nyb2xsWVByb2dyZXNzMiIsInNjcm9sbFlQcm9ncmVzczMiLCJ0cmFuc2xhdGVZIiwidHJhbnNsYXRlWTIiLCJ0cmFuc2xhdGVZMyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzdG9yeSIsImRpdiIsInN0b3J5X19sZWZ0IiwiaDIiLCJzcGFuIiwic3RvcnlfX3JpZ2h0Iiwic3RvcnlfX3JpZ2h0X3N1YiIsInAiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmRleCIsIm1hc2siLCJ2YXJpYW50cyIsInNsaWRlVXAiLCJjdXN0b20iLCJhbmltYXRlIiwiaXNJblZpZXciLCJzdG9yeV9fcmlnaHRfaW1hZ2VzIiwic3RvcnlfX3JpZ2h0X2ltYWdlc19fY29udGFpbmVyIiwiaW1nIiwic3R5bGUiLCJyZWYiLCJzdG9yeV9fcmlnaHRfaW1hZ2VzX19jb250YWluZXJfX2ltYWdlX2xlZnQiLCJzcmMiLCJzdG9yeV9fcmlnaHRfaW1hZ2VzX19jb250YWluZXJfX2ltYWdlX3RvcF9yaWdodCIsInN0b3J5X19yaWdodF9pbWFnZXNfX2NvbnRhaW5lcl9faW1hZ2VfYm90dG9tX3JpZ2h0IiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsImxlZnQiLCJyaWdodCIsInN0b3J5X19yaWdodF9pbWFnZXNfX2RyYWciLCJzdG9yeV9fcmlnaHRfaW1hZ2VzX19kcmFnX2ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/brief/Brief.jsx\n"));

/***/ })

});