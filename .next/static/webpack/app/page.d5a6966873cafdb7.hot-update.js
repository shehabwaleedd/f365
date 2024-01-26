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

/***/ "(app-pages-browser)/./src/components/what/What.jsx":
/*!**************************************!*\
  !*** ./src/components/what/What.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/components/what/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst What = ()=>{\n    _s();\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgRef2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgRef3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress: scrollYProgress1 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: imgRef,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ]\n    });\n    const { scrollYProgress: scrollYProgress2 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: imgRef2,\n        offset: [\n            \"start end\",\n            \"center start\"\n        ]\n    });\n    const { scrollYProgress: scrollYProgress3 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: imgRef2,\n        offset: [\n            \"start end\",\n            \"center start\"\n        ]\n    });\n    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress1, [\n        0,\n        1\n    ], [\n        \"-10%\",\n        \"10%\"\n    ]);\n    const translateY2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress2, [\n        0,\n        1\n    ], [\n        \"0%\",\n        \"-10%\"\n    ]);\n    const translateY3 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress3, [\n        0,\n        1\n    ], [\n        \"10%\",\n        \"-20%\"\n    ]);\n    const data = [\n        {\n            title: \"Career Coaching\",\n            description: \"We offer a range of career coaching services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.\",\n            image: \"/assets/growth.jpg\",\n            ref: imgRef,\n            translate: translateY\n        },\n        {\n            title: \"Wellness\",\n            description: \"We offer a range of wellness services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.\",\n            image: \"/assets/wellness.jpg\",\n            ref: imgRef2,\n            translate: translateY2\n        },\n        {\n            title: \"Community\",\n            description: \"We offer a range of community services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.\",\n            image: \"/assets/networking.jpg\",\n            ref: imgRef3,\n            translate: translateY3\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what_upper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined),\n                        \" Our Services\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what_lower),\n                children: data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what_lower_card),\n                        ref: item.ref,\n                        style: {\n                            translateY: item.translate\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 33\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                                initial: {\n                                    yPercent: 0\n                                },\n                                animate: {\n                                    yPercent: 1\n                                },\n                                transition: {\n                                    staggerChildren: 3.5,\n                                    duration: 0.7,\n                                    ease: [\n                                        0.42,\n                                        0,\n                                        0.58,\n                                        1\n                                    ]\n                                },\n                                src: item.image,\n                                alt: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n};\n_s(What, \"jYr1sxhYK9wWCTyncBEtqTU9yjU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = What;\n/* harmony default export */ __webpack_exports__[\"default\"] = (What);\nvar _c;\n$RefreshReg$(_c, \"What\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3doYXQvV2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ007QUFDeEI7QUFDVjtBQUU5QixNQUFNUyxPQUFPOztJQUNULE1BQU1DLFNBQVNSLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU1TLFVBQVVULDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1VLFVBQVVWLDZDQUFNQSxDQUFDO0lBRXZCLE1BQU0sRUFBRVcsaUJBQWlCQyxnQkFBZ0IsRUFBRSxHQUFHUix3REFBU0EsQ0FBQztRQUNwRFMsUUFBUUw7UUFDUk0sUUFBUTtZQUFDO1lBQWE7U0FBWTtJQUN0QztJQUVBLE1BQU0sRUFBRUgsaUJBQWlCSSxnQkFBZ0IsRUFBRSxHQUFHWCx3REFBU0EsQ0FBQztRQUNwRFMsUUFBUUo7UUFDUkssUUFBUTtZQUFDO1lBQWE7U0FBZTtJQUN6QztJQUVBLE1BQU0sRUFBRUgsaUJBQWlCSyxnQkFBZ0IsRUFBRSxHQUFHWix3REFBU0EsQ0FBQztRQUNwRFMsUUFBUUo7UUFDUkssUUFBUTtZQUFDO1lBQWE7U0FBZTtJQUN6QztJQUVBLE1BQU1HLGFBQWFkLDJEQUFZQSxDQUFDUyxrQkFBa0I7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVE7S0FBTTtJQUN6RSxNQUFNTSxjQUFjZiwyREFBWUEsQ0FBQ1ksa0JBQWtCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFNO0tBQU87SUFDekUsTUFBTUksY0FBY2hCLDJEQUFZQSxDQUFDYSxrQkFBa0I7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU87S0FBTztJQUcxRSxNQUFNSSxPQUFPO1FBQ1Q7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsS0FBS2hCO1lBQ0xpQixXQUFXUjtRQUNmO1FBQ0E7WUFDSUksT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsS0FBS2Y7WUFDTGdCLFdBQVdQO1FBQ2Y7UUFDQTtZQUNJRyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsT0FBTztZQUNQQyxLQUFLZDtZQUNMZSxXQUFXTjtRQUNmO0tBQ0g7SUFLRCxxQkFDSSw4REFBQ087UUFBUUMsV0FBV3RCLGdFQUFXOzswQkFDM0IsOERBQUN3QjtnQkFBSUYsV0FBV3RCLHNFQUFpQjswQkFDN0IsNEVBQUMwQjs7c0NBQUcsOERBQUNDO3NDQUFLOzs7Ozs7d0JBQVE7Ozs7Ozs7Ozs7OzswQkFFdEIsOERBQUNIO2dCQUFJRixXQUFXdEIsc0VBQWlCOzBCQUV6QmUsS0FBS2MsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQUNaLHFCQUNJLDhEQUFDbEMsaURBQU1BLENBQUMyQixHQUFHO3dCQUFhRixXQUFXdEIsMkVBQXNCO3dCQUFFbUIsS0FBS1csS0FBS1gsR0FBRzt3QkFBRWMsT0FBTzs0QkFBRXJCLFlBQVlrQixLQUFLVixTQUFTO3dCQUFDOzswQ0FDMUcsOERBQUNjOzBDQUFJSixLQUFLZCxLQUFLOzs7Ozs7MENBQ2YsOERBQUNuQixpREFBTUEsQ0FBQ3NDLEdBQUc7Z0NBQ1BDLFNBQVM7b0NBQUVDLFVBQVU7Z0NBQUU7Z0NBQ3ZCQyxTQUFTO29DQUFFRCxVQUFVO2dDQUFFO2dDQUN2QkUsWUFBWTtvQ0FBRUMsaUJBQWlCO29DQUFLQyxVQUFVO29DQUFLQyxNQUFNO3dDQUFDO3dDQUFNO3dDQUFHO3dDQUFNO3FDQUFFO2dDQUFDO2dDQUM1RUMsS0FBS2IsS0FBS1osS0FBSztnQ0FBRTBCLEtBQUtkLEtBQUtkLEtBQUs7Ozs7Ozs7dUJBTnZCZTs7Ozs7Z0JBU3pCOzs7Ozs7Ozs7Ozs7QUFLcEI7R0EzRU03Qjs7UUFLNENILG9EQUFTQTtRQUtUQSxvREFBU0E7UUFLVEEsb0RBQVNBO1FBS3BDRCx1REFBWUE7UUFDWEEsdURBQVlBO1FBQ1pBLHVEQUFZQTs7O0tBdEI5Qkk7QUE2RU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2hhdC9XaGF0LmpzeD8wMjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VTY3JvbGwgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jb25zdCBXaGF0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpbWdSZWYyID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGltZ1JlZjMgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzczogc2Nyb2xsWVByb2dyZXNzMSB9ID0gdXNlU2Nyb2xsKHtcbiAgICAgICAgdGFyZ2V0OiBpbWdSZWYsXG4gICAgICAgIG9mZnNldDogW1wic3RhcnQgZW5kXCIsIFwiZW5kIHN0YXJ0XCJdXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzczogc2Nyb2xsWVByb2dyZXNzMiB9ID0gdXNlU2Nyb2xsKHtcbiAgICAgICAgdGFyZ2V0OiBpbWdSZWYyLFxuICAgICAgICBvZmZzZXQ6IFtcInN0YXJ0IGVuZFwiLCBcImNlbnRlciBzdGFydFwiXVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3M6IHNjcm9sbFlQcm9ncmVzczMgfSA9IHVzZVNjcm9sbCh7XG4gICAgICAgIHRhcmdldDogaW1nUmVmMixcbiAgICAgICAgb2Zmc2V0OiBbXCJzdGFydCBlbmRcIiwgXCJjZW50ZXIgc3RhcnRcIl1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzMSwgWzAsIDFdLCBbXCItMTAlXCIsIFwiMTAlXCJdKTtcbiAgICBjb25zdCB0cmFuc2xhdGVZMiA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MyLCBbMCwgMV0sIFtcIjAlXCIsIFwiLTEwJVwiXSk7XG4gICAgY29uc3QgdHJhbnNsYXRlWTMgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzMywgWzAsIDFdLCBbXCIxMCVcIiwgXCItMjAlXCJdKTtcblxuXG4gICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ2FyZWVyIENvYWNoaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSBvZmZlciBhIHJhbmdlIG9mIGNhcmVlciBjb2FjaGluZyBzZXJ2aWNlcyB0byBoZWxwIHlvdSBhY2hpZXZlIHlvdXIgZ29hbHMuIFdoZXRoZXIgeW91IGFyZSBsb29raW5nIHRvIGNoYW5nZSBjYXJlZXJzLCBnZXQgYSBwcm9tb3Rpb24sIG9yIGp1c3Qgd2FudCB0byBpbXByb3ZlIHlvdXIgc2tpbGxzLCB3ZSBjYW4gaGVscCB5b3UgZmluZCB0aGUgcmlnaHQgcGF0aC5cIixcbiAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvZ3Jvd3RoLmpwZ1wiLFxuICAgICAgICAgICAgcmVmOiBpbWdSZWYsXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiV2VsbG5lc3NcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIldlIG9mZmVyIGEgcmFuZ2Ugb2Ygd2VsbG5lc3Mgc2VydmljZXMgdG8gaGVscCB5b3UgYWNoaWV2ZSB5b3VyIGdvYWxzLiBXaGV0aGVyIHlvdSBhcmUgbG9va2luZyB0byBjaGFuZ2UgY2FyZWVycywgZ2V0IGEgcHJvbW90aW9uLCBvciBqdXN0IHdhbnQgdG8gaW1wcm92ZSB5b3VyIHNraWxscywgd2UgY2FuIGhlbHAgeW91IGZpbmQgdGhlIHJpZ2h0IHBhdGguXCIsXG4gICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3dlbGxuZXNzLmpwZ1wiLFxuICAgICAgICAgICAgcmVmOiBpbWdSZWYyLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVZMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJDb21tdW5pdHlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIldlIG9mZmVyIGEgcmFuZ2Ugb2YgY29tbXVuaXR5IHNlcnZpY2VzIHRvIGhlbHAgeW91IGFjaGlldmUgeW91ciBnb2Fscy4gV2hldGhlciB5b3UgYXJlIGxvb2tpbmcgdG8gY2hhbmdlIGNhcmVlcnMsIGdldCBhIHByb21vdGlvbiwgb3IganVzdCB3YW50IHRvIGltcHJvdmUgeW91ciBza2lsbHMsIHdlIGNhbiBoZWxwIHlvdSBmaW5kIHRoZSByaWdodCBwYXRoLlwiLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9uZXR3b3JraW5nLmpwZ1wiLFxuICAgICAgICAgICAgcmVmOiBpbWdSZWYzLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVZM1xuICAgICAgICB9LFxuICAgIF1cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndoYXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aGF0X3VwcGVyfT5cbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4+Lzwvc3Bhbj4gT3VyIFNlcnZpY2VzPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aGF0X2xvd2VyfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy53aGF0X2xvd2VyX2NhcmR9IHJlZj17aXRlbS5yZWZ9IHN0eWxlPXt7IHRyYW5zbGF0ZVk6IGl0ZW0udHJhbnNsYXRlIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeVBlcmNlbnQ6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgeVBlcmNlbnQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgc3RhZ2dlckNoaWxkcmVuOiAzLjUsIGR1cmF0aW9uOiAwLjcsIGVhc2U6IFswLjQyLCAwLCAwLjU4LCAxXSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaGF0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTY3JvbGwiLCJzdHlsZXMiLCJJbWFnZSIsIldoYXQiLCJpbWdSZWYiLCJpbWdSZWYyIiwiaW1nUmVmMyIsInNjcm9sbFlQcm9ncmVzcyIsInNjcm9sbFlQcm9ncmVzczEiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzY3JvbGxZUHJvZ3Jlc3MyIiwic2Nyb2xsWVByb2dyZXNzMyIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVZMiIsInRyYW5zbGF0ZVkzIiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInJlZiIsInRyYW5zbGF0ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ3aGF0IiwiZGl2Iiwid2hhdF91cHBlciIsImgyIiwic3BhbiIsIndoYXRfbG93ZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ3aGF0X2xvd2VyX2NhcmQiLCJzdHlsZSIsImgzIiwiaW1nIiwiaW5pdGlhbCIsInlQZXJjZW50IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJkdXJhdGlvbiIsImVhc2UiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/what/What.jsx\n"));

/***/ })

});