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

/***/ "(app-pages-browser)/./src/animation/opening/Opening.jsx":
/*!*******************************************!*\
  !*** ./src/animation/opening/Opening.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ \"(app-pages-browser)/./node_modules/animejs/lib/anime.es.js\");\n/* harmony import */ var _Opening_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Opening.css */ \"(app-pages-browser)/./src/animation/opening/Opening.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Opening = (param)=>{\n    let { isLoading } = param;\n    _s();\n    const [animationComplete, setAnimationComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const counterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const textWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const loaderContentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const preLoaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isLoading) {\n            // Animate in the loader content\n            gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromTo(loaderContentRef.current, {\n                y: -50,\n                opacity: 0\n            }, {\n                y: 0,\n                opacity: 1,\n                duration: 1,\n                ease: \"power2.out\"\n            });\n            // Count to 100\n            let currentValue = 0;\n            const updateCounter = ()=>{\n                currentValue++;\n                if (currentValue <= 100) {\n                    if (counterRef.current) {\n                        counterRef.current.textContent = \"\".concat(currentValue, \"%\");\n                    }\n                } else {\n                    clearInterval(interval);\n                    setAnimationComplete(true);\n                }\n            };\n            const interval = setInterval(updateCounter, 30);\n            return ()=>clearInterval(interval);\n        }\n    }, [\n        isLoading\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (animationComplete) {\n            // Animate out the ml16 text\n            if (textWrapperRef.current) {\n                textWrapperRef.current.innerHTML = textWrapperRef.current.textContent.replace(/\\S/g, \"<span class='letter'>$&</span>\");\n                animejs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n                    loop: false\n                }).add({\n                    targets: \".ml16 .letter\",\n                    translateY: [\n                        0,\n                        -100\n                    ],\n                    easing: \"easeInExpo\",\n                    duration: 1000,\n                    delay: (el, i)=>30 * i,\n                    complete: ()=>{\n                        // Animate up the pre-loader after ml16 animation\n                        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(preLoaderRef.current, {\n                            y: -window.innerHeight,\n                            ease: \"power2.inOut\",\n                            duration: 1\n                        });\n                    }\n                });\n                gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to();\n            }\n        }\n    }, [\n        animationComplete\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pre-loader\",\n                ref: preLoaderRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader-bg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader-content\",\n                ref: loaderContentRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"count\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            ref: counterRef,\n                            children: \"0%\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 40\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"copy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            ref: textWrapperRef,\n                            className: \"ml16\",\n                            children: \"F365\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 39\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Opening, \"9YA9cq2jpuXVTrFmEVgc5aITRfw=\");\n_c = Opening;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Opening);\nvar _c;\n$RefreshReg$(_c, \"Opening\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hbmltYXRpb24vb3BlbmluZy9PcGVuaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkQ7QUFDbkM7QUFDSTtBQUNMO0FBRXZCLE1BQU1NLFVBQVU7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0QsTUFBTVEsYUFBYVAsNkNBQU1BLENBQUM7SUFDMUIsTUFBTVEsaUJBQWlCUiw2Q0FBTUEsQ0FBQztJQUM5QixNQUFNUyxtQkFBbUJULDZDQUFNQSxDQUFDO0lBQ2hDLE1BQU1VLGVBQWVWLDZDQUFNQSxDQUFDO0lBRTVCRixnREFBU0EsQ0FBQztRQUNOLElBQUksQ0FBQ00sV0FBVztZQUNaLGdDQUFnQztZQUNoQ0gsNENBQUlBLENBQUNVLE1BQU0sQ0FBQ0YsaUJBQWlCRyxPQUFPLEVBQ2hDO2dCQUFFQyxHQUFHLENBQUM7Z0JBQUlDLFNBQVM7WUFBRSxHQUNyQjtnQkFBRUQsR0FBRztnQkFBR0MsU0FBUztnQkFBR0MsVUFBVTtnQkFBR0MsTUFBTTtZQUFhO1lBR3hELGVBQWU7WUFDZixJQUFJQyxlQUFlO1lBQ25CLE1BQU1DLGdCQUFnQjtnQkFDbEJEO2dCQUNBLElBQUlBLGdCQUFnQixLQUFLO29CQUNyQixJQUFJVixXQUFXSyxPQUFPLEVBQUU7d0JBQ3BCTCxXQUFXSyxPQUFPLENBQUNPLFdBQVcsR0FBRyxHQUFnQixPQUFiRixjQUFhO29CQUNyRDtnQkFDSixPQUFPO29CQUNIRyxjQUFjQztvQkFDZGYscUJBQXFCO2dCQUN6QjtZQUNKO1lBQ0EsTUFBTWUsV0FBV0MsWUFBWUosZUFBZTtZQUU1QyxPQUFPLElBQU1FLGNBQWNDO1FBQy9CO0lBQ0osR0FBRztRQUFDakI7S0FBVTtJQUVkTixnREFBU0EsQ0FBQztRQUNOLElBQUlPLG1CQUFtQjtZQUNuQiw0QkFBNEI7WUFDNUIsSUFBSUcsZUFBZUksT0FBTyxFQUFFO2dCQUN4QkosZUFBZUksT0FBTyxDQUFDVyxTQUFTLEdBQUdmLGVBQWVJLE9BQU8sQ0FBQ08sV0FBVyxDQUFDSyxPQUFPLENBQUMsT0FBTztnQkFDckZ0QiwrQ0FBS0EsQ0FBQ3VCLFFBQVEsQ0FBQztvQkFBRUMsTUFBTTtnQkFBTSxHQUN4QkMsR0FBRyxDQUFDO29CQUNEQyxTQUFTO29CQUNUQyxZQUFZO3dCQUFDO3dCQUFHLENBQUM7cUJBQUk7b0JBQ3JCQyxRQUFRO29CQUNSZixVQUFVO29CQUNWZ0IsT0FBTyxDQUFDQyxJQUFJQyxJQUFNLEtBQUtBO29CQUN2QkMsVUFBVTt3QkFDTixpREFBaUQ7d0JBQ2pEakMsNENBQUlBLENBQUNrQyxFQUFFLENBQUN6QixhQUFhRSxPQUFPLEVBQUU7NEJBQUVDLEdBQUcsQ0FBQ3VCLE9BQU9DLFdBQVc7NEJBQUVyQixNQUFNOzRCQUFnQkQsVUFBVTt3QkFBRTtvQkFDOUY7Z0JBQ0o7Z0JBRUpkLDRDQUFJQSxDQUFDa0MsRUFBRTtZQUNYO1FBQ0o7SUFDSixHQUFHO1FBQUM5QjtLQUFrQjtJQUV0QixxQkFDSSw4REFBQ2lDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBYUMsS0FBSzlCOztrQ0FDN0IsOERBQUM0Qjt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUVuQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWlCQyxLQUFLL0I7O2tDQUNqQyw4REFBQzZCO3dCQUFJQyxXQUFVO2tDQUFRLDRFQUFDRTs0QkFBRUQsS0FBS2pDO3NDQUFZOzs7Ozs7Ozs7OztrQ0FDM0MsOERBQUMrQjt3QkFBSUMsV0FBVTtrQ0FBTyw0RUFBQ0U7NEJBQUVELEtBQUtoQzs0QkFBZ0IrQixXQUFVO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvRTtHQXJFTXBDO0tBQUFBO0FBdUVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hbmltYXRpb24vb3BlbmluZy9PcGVuaW5nLmpzeD80MzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJztcbmltcG9ydCAnLi9PcGVuaW5nLmNzcyc7XG5cbmNvbnN0IE9wZW5pbmcgPSAoeyBpc0xvYWRpbmcgfSkgPT4ge1xuICAgIGNvbnN0IFthbmltYXRpb25Db21wbGV0ZSwgc2V0QW5pbWF0aW9uQ29tcGxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNvdW50ZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgdGV4dFdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbG9hZGVyQ29udGVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBwcmVMb2FkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgLy8gQW5pbWF0ZSBpbiB0aGUgbG9hZGVyIGNvbnRlbnRcbiAgICAgICAgICAgIGdzYXAuZnJvbVRvKGxvYWRlckNvbnRlbnRSZWYuY3VycmVudCwgXG4gICAgICAgICAgICAgICAgeyB5OiAtNTAsIG9wYWNpdHk6IDAgfSwgXG4gICAgICAgICAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMSwgZWFzZTogJ3Bvd2VyMi5vdXQnIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIENvdW50IHRvIDEwMFxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IDA7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVDb3VudGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSsrO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPD0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJSZWYuY3VycmVudC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRWYWx1ZX0lYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBbmltYXRpb25Db21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDb3VudGVyLCAzMCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0xvYWRpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgICAgICAgLy8gQW5pbWF0ZSBvdXQgdGhlIG1sMTYgdGV4dFxuICAgICAgICAgICAgaWYgKHRleHRXcmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0ZXh0V3JhcHBlclJlZi5jdXJyZW50LmlubmVySFRNTCA9IHRleHRXcmFwcGVyUmVmLmN1cnJlbnQudGV4dENvbnRlbnQucmVwbGFjZSgvXFxTL2csIFwiPHNwYW4gY2xhc3M9J2xldHRlcic+JCY8L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgIGFuaW1lLnRpbWVsaW5lKHsgbG9vcDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLm1sMTYgLmxldHRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMCwgLTEwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluRXhwb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogKGVsLCBpKSA9PiAzMCAqIGksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFuaW1hdGUgdXAgdGhlIHByZS1sb2FkZXIgYWZ0ZXIgbWwxNiBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnc2FwLnRvKHByZUxvYWRlclJlZi5jdXJyZW50LCB7IHk6IC13aW5kb3cuaW5uZXJIZWlnaHQsIGVhc2U6IFwicG93ZXIyLmluT3V0XCIsIGR1cmF0aW9uOiAxIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBnc2FwLnRvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFthbmltYXRpb25Db21wbGV0ZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlLWxvYWRlcicgcmVmPXtwcmVMb2FkZXJSZWZ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXInPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItYmcnPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250ZW50XCIgcmVmPXtsb2FkZXJDb250ZW50UmVmfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnQnPjxwIHJlZj17Y291bnRlclJlZn0+MCU8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvcHknPjxwIHJlZj17dGV4dFdyYXBwZXJSZWZ9IGNsYXNzTmFtZT0nbWwxNic+RjM2NTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3BlbmluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ3NhcCIsImFuaW1lIiwiT3BlbmluZyIsImlzTG9hZGluZyIsImFuaW1hdGlvbkNvbXBsZXRlIiwic2V0QW5pbWF0aW9uQ29tcGxldGUiLCJjb3VudGVyUmVmIiwidGV4dFdyYXBwZXJSZWYiLCJsb2FkZXJDb250ZW50UmVmIiwicHJlTG9hZGVyUmVmIiwiZnJvbVRvIiwiY3VycmVudCIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwiY3VycmVudFZhbHVlIiwidXBkYXRlQ291bnRlciIsInRleHRDb250ZW50IiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwidGltZWxpbmUiLCJsb29wIiwiYWRkIiwidGFyZ2V0cyIsInRyYW5zbGF0ZVkiLCJlYXNpbmciLCJkZWxheSIsImVsIiwiaSIsImNvbXBsZXRlIiwidG8iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/animation/opening/Opening.jsx\n"));

/***/ })

});