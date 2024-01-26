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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/components/what/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst What = ()=>{\n    _s();\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgRef2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgRef3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress: scrollYProgress1 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: imgRef,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ]\n    });\n    const { scrollYProgress: scrollYProgress2 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: imgRef2,\n        offset: [\n            \"start end\",\n            \"center start\"\n        ]\n    });\n    const { scrollYProgress: scrollYProgress3 } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: imgRef2,\n        offset: [\n            \"start end\",\n            \"center start\"\n        ]\n    });\n    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress1, [\n        0,\n        1\n    ], [\n        \"-10%\",\n        \"10%\"\n    ]);\n    const translateY2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress2, [\n        0,\n        1\n    ], [\n        \"0%\",\n        \"-10%\"\n    ]);\n    const translateY3 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress3, [\n        0,\n        1\n    ], [\n        \"10%\",\n        \"-20%\"\n    ]);\n    const data = [\n        {\n            title: \"Career Coaching\",\n            description: \"We offer a range of career coaching services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.\",\n            image: \"/assets/growth.jpg\",\n            ref: imgRef,\n            translate: translateY\n        },\n        {\n            title: \"Wellness\",\n            description: \"We offer a range of wellness services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.\",\n            image: \"/assets/wellness.jpg\",\n            ref: imgRef2,\n            translate: translateY2\n        },\n        {\n            title: \"Community\",\n            description: \"We offer a range of community services to help you achieve your goals. Whether you are looking to change careers, get a promotion, or just want to improve your skills, we can help you find the right path.\",\n            image: \"/assets/networking.jpg\",\n            ref: imgRef3,\n            translate: translateY3\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what_upper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined),\n                        \" Our Services\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what_lower),\n                children: data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().what_lower_card),\n                        ref: item.ref,\n                        style: {\n                            translateY: item.translate\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 33\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                                initial: {\n                                    height: 0\n                                },\n                                whileInView: {\n                                    height: \"70vh\"\n                                },\n                                transition: {\n                                    staggerChildren: 3.5,\n                                    duration: 0.7,\n                                    ease: [\n                                        0.42,\n                                        0,\n                                        0.58,\n                                        1\n                                    ]\n                                },\n                                src: item.image,\n                                alt: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/what/What.jsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n};\n_s(What, \"jYr1sxhYK9wWCTyncBEtqTU9yjU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = What;\n/* harmony default export */ __webpack_exports__[\"default\"] = (What);\nvar _c;\n$RefreshReg$(_c, \"What\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3doYXQvV2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ007QUFDeEI7QUFDVjtBQUU5QixNQUFNUyxPQUFPOztJQUNULE1BQU1DLFNBQVNSLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU1TLFVBQVVULDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1VLFVBQVVWLDZDQUFNQSxDQUFDO0lBRXZCLE1BQU0sRUFBRVcsaUJBQWlCQyxnQkFBZ0IsRUFBRSxHQUFHUix3REFBU0EsQ0FBQztRQUNwRFMsUUFBUUw7UUFDUk0sUUFBUTtZQUFDO1lBQWE7U0FBWTtJQUN0QztJQUVBLE1BQU0sRUFBRUgsaUJBQWlCSSxnQkFBZ0IsRUFBRSxHQUFHWCx3REFBU0EsQ0FBQztRQUNwRFMsUUFBUUo7UUFDUkssUUFBUTtZQUFDO1lBQWE7U0FBZTtJQUN6QztJQUVBLE1BQU0sRUFBRUgsaUJBQWlCSyxnQkFBZ0IsRUFBRSxHQUFHWix3REFBU0EsQ0FBQztRQUNwRFMsUUFBUUo7UUFDUkssUUFBUTtZQUFDO1lBQWE7U0FBZTtJQUN6QztJQUVBLE1BQU1HLGFBQWFkLDJEQUFZQSxDQUFDUyxrQkFBa0I7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVE7S0FBTTtJQUN6RSxNQUFNTSxjQUFjZiwyREFBWUEsQ0FBQ1ksa0JBQWtCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFNO0tBQU87SUFDekUsTUFBTUksY0FBY2hCLDJEQUFZQSxDQUFDYSxrQkFBa0I7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU87S0FBTztJQUcxRSxNQUFNSSxPQUFPO1FBQ1Q7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsS0FBS2hCO1lBQ0xpQixXQUFXUjtRQUNmO1FBQ0E7WUFDSUksT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsS0FBS2Y7WUFDTGdCLFdBQVdQO1FBQ2Y7UUFDQTtZQUNJRyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsT0FBTztZQUNQQyxLQUFLZDtZQUNMZSxXQUFXTjtRQUNmO0tBQ0g7SUFLRCxxQkFDSSw4REFBQ087UUFBUUMsV0FBV3RCLGdFQUFXOzswQkFDM0IsOERBQUN3QjtnQkFBSUYsV0FBV3RCLHNFQUFpQjswQkFDN0IsNEVBQUMwQjs7c0NBQUcsOERBQUNDO3NDQUFLOzs7Ozs7d0JBQVE7Ozs7Ozs7Ozs7OzswQkFFdEIsOERBQUNIO2dCQUFJRixXQUFXdEIsc0VBQWlCOzBCQUV6QmUsS0FBS2MsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQUNaLHFCQUNJLDhEQUFDbEMsaURBQU1BLENBQUMyQixHQUFHO3dCQUFhRixXQUFXdEIsMkVBQXNCO3dCQUFFbUIsS0FBS1csS0FBS1gsR0FBRzt3QkFBRWMsT0FBTzs0QkFBRXJCLFlBQVlrQixLQUFLVixTQUFTO3dCQUFDOzswQ0FDMUcsOERBQUNjOzBDQUFJSixLQUFLZCxLQUFLOzs7Ozs7MENBQ2YsOERBQUNuQixpREFBTUEsQ0FBQ3NDLEdBQUc7Z0NBQUNDLFNBQVM7b0NBQUVDLFFBQVE7Z0NBQUU7Z0NBQUdDLGFBQWE7b0NBQUVELFFBQVE7Z0NBQU87Z0NBQUdFLFlBQVk7b0NBQUVDLGlCQUFpQjtvQ0FBS0MsVUFBVTtvQ0FBS0MsTUFBTTt3Q0FBQzt3Q0FBTTt3Q0FBRzt3Q0FBTTtxQ0FBRTtnQ0FBQztnQ0FDN0lDLEtBQUtiLEtBQUtaLEtBQUs7Z0NBQUUwQixLQUFLZCxLQUFLZCxLQUFLOzs7Ozs7O3VCQUh2QmU7Ozs7O2dCQU16Qjs7Ozs7Ozs7Ozs7O0FBS3BCO0dBeEVNN0I7O1FBSzRDSCxvREFBU0E7UUFLVEEsb0RBQVNBO1FBS1RBLG9EQUFTQTtRQUtwQ0QsdURBQVlBO1FBQ1hBLHVEQUFZQTtRQUNaQSx1REFBWUE7OztLQXRCOUJJO0FBMEVOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3doYXQvV2hhdC5qc3g/MDI0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlU2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuY29uc3QgV2hhdCA9ICgpID0+IHtcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaW1nUmVmMiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpbWdSZWYzID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3M6IHNjcm9sbFlQcm9ncmVzczEgfSA9IHVzZVNjcm9sbCh7XG4gICAgICAgIHRhcmdldDogaW1nUmVmLFxuICAgICAgICBvZmZzZXQ6IFtcInN0YXJ0IGVuZFwiLCBcImVuZCBzdGFydFwiXVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3M6IHNjcm9sbFlQcm9ncmVzczIgfSA9IHVzZVNjcm9sbCh7XG4gICAgICAgIHRhcmdldDogaW1nUmVmMixcbiAgICAgICAgb2Zmc2V0OiBbXCJzdGFydCBlbmRcIiwgXCJjZW50ZXIgc3RhcnRcIl1cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzOiBzY3JvbGxZUHJvZ3Jlc3MzIH0gPSB1c2VTY3JvbGwoe1xuICAgICAgICB0YXJnZXQ6IGltZ1JlZjIsXG4gICAgICAgIG9mZnNldDogW1wic3RhcnQgZW5kXCIsIFwiY2VudGVyIHN0YXJ0XCJdXG4gICAgfSk7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVZID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzczEsIFswLCAxXSwgW1wiLTEwJVwiLCBcIjEwJVwiXSk7XG4gICAgY29uc3QgdHJhbnNsYXRlWTIgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzMiwgWzAsIDFdLCBbXCIwJVwiLCBcIi0xMCVcIl0pO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVkzID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzczMsIFswLCAxXSwgW1wiMTAlXCIsIFwiLTIwJVwiXSk7XG5cblxuICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNhcmVlciBDb2FjaGluZ1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2Ugb2ZmZXIgYSByYW5nZSBvZiBjYXJlZXIgY29hY2hpbmcgc2VydmljZXMgdG8gaGVscCB5b3UgYWNoaWV2ZSB5b3VyIGdvYWxzLiBXaGV0aGVyIHlvdSBhcmUgbG9va2luZyB0byBjaGFuZ2UgY2FyZWVycywgZ2V0IGEgcHJvbW90aW9uLCBvciBqdXN0IHdhbnQgdG8gaW1wcm92ZSB5b3VyIHNraWxscywgd2UgY2FuIGhlbHAgeW91IGZpbmQgdGhlIHJpZ2h0IHBhdGguXCIsXG4gICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2dyb3d0aC5qcGdcIixcbiAgICAgICAgICAgIHJlZjogaW1nUmVmLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB0cmFuc2xhdGVZXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIldlbGxuZXNzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSBvZmZlciBhIHJhbmdlIG9mIHdlbGxuZXNzIHNlcnZpY2VzIHRvIGhlbHAgeW91IGFjaGlldmUgeW91ciBnb2Fscy4gV2hldGhlciB5b3UgYXJlIGxvb2tpbmcgdG8gY2hhbmdlIGNhcmVlcnMsIGdldCBhIHByb21vdGlvbiwgb3IganVzdCB3YW50IHRvIGltcHJvdmUgeW91ciBza2lsbHMsIHdlIGNhbiBoZWxwIHlvdSBmaW5kIHRoZSByaWdodCBwYXRoLlwiLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy93ZWxsbmVzcy5qcGdcIixcbiAgICAgICAgICAgIHJlZjogaW1nUmVmMixcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlWTJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ29tbXVuaXR5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSBvZmZlciBhIHJhbmdlIG9mIGNvbW11bml0eSBzZXJ2aWNlcyB0byBoZWxwIHlvdSBhY2hpZXZlIHlvdXIgZ29hbHMuIFdoZXRoZXIgeW91IGFyZSBsb29raW5nIHRvIGNoYW5nZSBjYXJlZXJzLCBnZXQgYSBwcm9tb3Rpb24sIG9yIGp1c3Qgd2FudCB0byBpbXByb3ZlIHlvdXIgc2tpbGxzLCB3ZSBjYW4gaGVscCB5b3UgZmluZCB0aGUgcmlnaHQgcGF0aC5cIixcbiAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvbmV0d29ya2luZy5qcGdcIixcbiAgICAgICAgICAgIHJlZjogaW1nUmVmMyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlWTNcbiAgICAgICAgfSxcbiAgICBdXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53aGF0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2hhdF91cHBlcn0+XG4gICAgICAgICAgICAgICAgPGgyPjxzcGFuPi88L3NwYW4+IE91ciBTZXJ2aWNlczwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2hhdF9sb3dlcn0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMud2hhdF9sb3dlcl9jYXJkfSByZWY9e2l0ZW0ucmVmfSBzdHlsZT17eyB0cmFuc2xhdGVZOiBpdGVtLnRyYW5zbGF0ZSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaW1nIGluaXRpYWw9e3sgaGVpZ2h0OiAwIH19IHdoaWxlSW5WaWV3PXt7IGhlaWdodDogXCI3MHZoXCIgfX0gdHJhbnNpdGlvbj17eyBzdGFnZ2VyQ2hpbGRyZW46IDMuNSwgZHVyYXRpb246IDAuNywgZWFzZTogWzAuNDIsIDAsIDAuNTgsIDFdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdoYXQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZVRyYW5zZm9ybSIsInVzZVNjcm9sbCIsInN0eWxlcyIsIkltYWdlIiwiV2hhdCIsImltZ1JlZiIsImltZ1JlZjIiLCJpbWdSZWYzIiwic2Nyb2xsWVByb2dyZXNzIiwic2Nyb2xsWVByb2dyZXNzMSIsInRhcmdldCIsIm9mZnNldCIsInNjcm9sbFlQcm9ncmVzczIiLCJzY3JvbGxZUHJvZ3Jlc3MzIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVkyIiwidHJhbnNsYXRlWTMiLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwicmVmIiwidHJhbnNsYXRlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIndoYXQiLCJkaXYiLCJ3aGF0X3VwcGVyIiwiaDIiLCJzcGFuIiwid2hhdF9sb3dlciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIndoYXRfbG93ZXJfY2FyZCIsInN0eWxlIiwiaDMiLCJpbWciLCJpbml0aWFsIiwiaGVpZ2h0Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiZHVyYXRpb24iLCJlYXNlIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/what/What.jsx\n"));

/***/ })

});