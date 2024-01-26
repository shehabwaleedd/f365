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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Opening_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Opening.css */ \"(app-pages-browser)/./src/animation/opening/Opening.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Opening = (param)=>{\n    let { isLoading } = param;\n    _s();\n    const [animationComplete, setAnimationComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const counterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const titleRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const cairoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const barsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(5).fill(null));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentValue = 0;\n        const updateCounter = ()=>{\n            currentValue++;\n            if (currentValue <= 100) {\n                if (counterRef.current) {\n                    counterRef.current.textContent = currentValue;\n                }\n            } else {\n                clearInterval(interval);\n                setAnimationComplete(true);\n            }\n        };\n        const interval = setInterval(updateCounter, 30);\n        return ()=>clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (animationComplete) {\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].timeline({\n                onComplete: ()=>{\n                    sessionStorage.setItem(\"hasAnimationShown\", \"true\");\n                    isLoading();\n                }\n            });\n            tl.to(\".counter\", {\n                duration: 0.5,\n                opacity: 0,\n                ease: \"power2.inOut\"\n            });\n            tl.to(cairoRef.current, {\n                opacity: 1,\n                duration: 2,\n                ease: \"power2.inOut\"\n            }).to(cairoRef.current, {\n                opacity: 0,\n                duration: 1,\n                ease: \"power2.inOut\"\n            });\n            barsRef.current.forEach((bar)=>{\n                tl.to(bar, {\n                    duration: 2,\n                    opacity: 1,\n                    height: 0,\n                    y: -400,\n                    ease: \"power3.inOut\"\n                }, \"<\");\n            });\n        }\n    }, [\n        animationComplete,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"opening\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"counter\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        ref: counterRef,\n                        children: \"0 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 37\n                    }, undefined),\n                    \" - 100\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"openingAnimation__container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    ref: cairoRef,\n                    className: \"cairostudio\",\n                    children: \"F365\"\n                }, void 0, false, {\n                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overlay\",\n                children: barsRef.current.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: (el)=>barsRef.current[index] = el,\n                        className: \"bar\"\n                    }, index, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"preloader\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"loader\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"loader-bg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader-content\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"count\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 44\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Opening, \"S1Vv03zzM64JLpAI+2zQvXxRbSQ=\");\n_c = Opening;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Opening);\nvar _c;\n$RefreshReg$(_c, \"Opening\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hbmltYXRpb24vb3BlbmluZy9PcGVuaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQUNuQztBQUNEO0FBRXZCLE1BQU1LLFVBQVU7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR04sK0NBQVFBLENBQUM7SUFDM0QsTUFBTU8sYUFBYU4sNkNBQU1BLENBQUM7SUFDMUIsTUFBTU8sWUFBWVAsNkNBQU1BLENBQUMsRUFBRTtJQUMzQixNQUFNUSxXQUFXUiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNUyxVQUFVVCw2Q0FBTUEsQ0FBQyxJQUFJVSxNQUFNLEdBQUdDLElBQUksQ0FBQztJQUd6Q2IsZ0RBQVNBLENBQUM7UUFDTixJQUFJYyxlQUFlO1FBQ25CLE1BQU1DLGdCQUFnQjtZQUNsQkQ7WUFDQSxJQUFJQSxnQkFBZ0IsS0FBSztnQkFDckIsSUFBSU4sV0FBV1EsT0FBTyxFQUFFO29CQUNwQlIsV0FBV1EsT0FBTyxDQUFDQyxXQUFXLEdBQUdIO2dCQUNyQztZQUNKLE9BQU87Z0JBQ0hJLGNBQWNDO2dCQUNkWixxQkFBcUI7WUFDekI7UUFDSjtRQUVBLE1BQU1ZLFdBQVdDLFlBQVlMLGVBQWU7UUFDNUMsT0FBTyxJQUFNRyxjQUFjQztJQUMvQixHQUFHLEVBQUU7SUFFTG5CLGdEQUFTQSxDQUFDO1FBQ04sSUFBSU0sbUJBQW1CO1lBQ25CLE1BQU1lLEtBQUtsQiw0Q0FBSUEsQ0FBQ21CLFFBQVEsQ0FBQztnQkFDckJDLFlBQVk7b0JBQ1JDLGVBQWVDLE9BQU8sQ0FBQyxxQkFBcUI7b0JBQzVDcEI7Z0JBQ0o7WUFDSjtZQUVBZ0IsR0FBR0ssRUFBRSxDQUFDLFlBQVk7Z0JBQUVDLFVBQVU7Z0JBQUtDLFNBQVM7Z0JBQUdDLE1BQU07WUFBZTtZQUVwRVIsR0FBR0ssRUFBRSxDQUFDaEIsU0FBU00sT0FBTyxFQUFFO2dCQUFFWSxTQUFTO2dCQUFHRCxVQUFVO2dCQUFHRSxNQUFNO1lBQWUsR0FDbkVILEVBQUUsQ0FBQ2hCLFNBQVNNLE9BQU8sRUFBRTtnQkFBRVksU0FBUztnQkFBR0QsVUFBVTtnQkFBR0UsTUFBTTtZQUFlO1lBRTFFbEIsUUFBUUssT0FBTyxDQUFDYyxPQUFPLENBQUNDLENBQUFBO2dCQUNwQlYsR0FBR0ssRUFBRSxDQUFDSyxLQUFLO29CQUNQSixVQUFVO29CQUNWQyxTQUFTO29CQUNUSSxRQUFRO29CQUNSQyxHQUFHLENBQUM7b0JBQ0pKLE1BQU07Z0JBQ1YsR0FBRztZQUNQO1FBQ0o7SUFDSixHQUFHO1FBQUN2QjtRQUFtQkQ7S0FBVTtJQUVqQyxxQkFDSSw4REFBQzZCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTs7a0NBQVUsOERBQUNFO3dCQUFLQyxLQUFLOUI7a0NBQWE7Ozs7OztvQkFBUzs7Ozs7OzswQkFDekQsOERBQUMwQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0k7b0JBQUdELEtBQUs1QjtvQkFBVXlCLFdBQVU7OEJBQWM7Ozs7Ozs7Ozs7OzBCQUUvQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1Z4QixRQUFRSyxPQUFPLENBQUN3QixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msc0JBQ3JCLDhEQUFDUjt3QkFBSUksS0FBS0ssQ0FBQUEsS0FBTWhDLFFBQVFLLE9BQU8sQ0FBQzBCLE1BQU0sR0FBR0M7d0JBQUlSLFdBQVU7dUJBQVdPOzs7Ozs7Ozs7OzBCQUcxRTs7a0NBQ0ksOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFbkIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FBUSw0RUFBQ1M7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QztHQTNFTXhDO0tBQUFBO0FBNkVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hbmltYXRpb24vb3BlbmluZy9PcGVuaW5nLmpzeD80MzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCAnLi9PcGVuaW5nLmNzcyc7XG5cbmNvbnN0IE9wZW5pbmcgPSAoeyBpc0xvYWRpbmcgfSkgPT4ge1xuICAgIGNvbnN0IFthbmltYXRpb25Db21wbGV0ZSwgc2V0QW5pbWF0aW9uQ29tcGxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNvdW50ZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgdGl0bGVSZWZzID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBjYWlyb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBiYXJzUmVmID0gdXNlUmVmKG5ldyBBcnJheSg1KS5maWxsKG51bGwpKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IDA7XG4gICAgICAgIGNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50VmFsdWUrKztcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPD0gMTAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUmVmLmN1cnJlbnQudGV4dENvbnRlbnQgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICBzZXRBbmltYXRpb25Db21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZUNvdW50ZXIsIDMwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2hhc0FuaW1hdGlvblNob3duJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRsLnRvKFwiLmNvdW50ZXJcIiwgeyBkdXJhdGlvbjogMC41LCBvcGFjaXR5OiAwLCBlYXNlOiAncG93ZXIyLmluT3V0JyB9KTtcblxuICAgICAgICAgICAgdGwudG8oY2Fpcm9SZWYuY3VycmVudCwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMiwgZWFzZTogJ3Bvd2VyMi5pbk91dCcgfSlcbiAgICAgICAgICAgICAgICAudG8oY2Fpcm9SZWYuY3VycmVudCwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMSwgZWFzZTogJ3Bvd2VyMi5pbk91dCcgfSk7XG5cbiAgICAgICAgICAgIGJhcnNSZWYuY3VycmVudC5mb3JFYWNoKGJhciA9PiB7XG4gICAgICAgICAgICAgICAgdGwudG8oYmFyLCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC00MDAsXG4gICAgICAgICAgICAgICAgICAgIGVhc2U6ICdwb3dlcjMuaW5PdXQnXG4gICAgICAgICAgICAgICAgfSwgXCI8XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbYW5pbWF0aW9uQ29tcGxldGUsIGlzTG9hZGluZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVuaW5nXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb3VudGVyJz48c3BhbiByZWY9e2NvdW50ZXJSZWZ9ID4wIDwvc3Bhbj4gLSAxMDA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVuaW5nQW5pbWF0aW9uX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDIgcmVmPXtjYWlyb1JlZn0gY2xhc3NOYW1lPSdjYWlyb3N0dWRpbyc+RjM2NTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVybGF5Jz5cbiAgICAgICAgICAgICAgICB7YmFyc1JlZi5jdXJyZW50Lm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2VsID0+IGJhcnNSZWYuY3VycmVudFtpbmRleF0gPSBlbH0gY2xhc3NOYW1lPSdiYXInIGtleT17aW5kZXh9PjwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVsb2FkZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1iZyc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnQnPjxwPjA8L3A+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3BlbmluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ3NhcCIsIk9wZW5pbmciLCJpc0xvYWRpbmciLCJhbmltYXRpb25Db21wbGV0ZSIsInNldEFuaW1hdGlvbkNvbXBsZXRlIiwiY291bnRlclJlZiIsInRpdGxlUmVmcyIsImNhaXJvUmVmIiwiYmFyc1JlZiIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRWYWx1ZSIsInVwZGF0ZUNvdW50ZXIiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRsIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwidG8iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJlYXNlIiwiZm9yRWFjaCIsImJhciIsImhlaWdodCIsInkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJyZWYiLCJoMiIsIm1hcCIsIl8iLCJpbmRleCIsImVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/animation/opening/Opening.jsx\n"));

/***/ })

});