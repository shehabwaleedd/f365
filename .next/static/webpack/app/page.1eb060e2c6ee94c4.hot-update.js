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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Opening_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Opening.css */ \"(app-pages-browser)/./src/animation/opening/Opening.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Opening = (param)=>{\n    let { isLoading } = param;\n    _s();\n    const [animationComplete, setAnimationComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const counterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const titleRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const cairoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const barsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(5).fill(null));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentValue = 0;\n        const updateCounter = ()=>{\n            currentValue++;\n            if (currentValue <= 100) {\n                if (counterRef.current) {\n                    counterRef.current.textContent = currentValue;\n                }\n            } else {\n                clearInterval(interval);\n                setAnimationComplete(true);\n            }\n        };\n        const interval = setInterval(updateCounter, 30);\n        return ()=>clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // if (animationComplete) {\n        //     const tl = gsap.timeline({\n        //         onComplete: () => {\n        //             sessionStorage.setItem('hasAnimationShown', 'true');\n        //             isLoading();\n        //         }\n        //     });\n        //     tl.to(\".counter\", { duration: 0.5, opacity: 0, ease: 'power2.inOut' });\n        //     tl.to(cairoRef.current, { opacity: 1, duration: 2, ease: 'power2.inOut' })\n        //         .to(cairoRef.current, { opacity: 0, duration: 1, ease: 'power2.inOut' });\n        //     barsRef.current.forEach(bar => {\n        //         tl.to(bar, {\n        //             duration: 2,\n        //             opacity: 1,\n        //             height: 0,\n        //             y: -400,\n        //             ease: 'power3.inOut'\n        //         }, \"<\");\n        //     });\n        // }\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".count\", {\n            opacity: 0,\n            delay: 3.5,\n            deuration: 5\n        });\n        let textWrapper = document.querySelector(\".ml16\");\n        textWrapper.innerHTML = textWrapper.textContent.replace(/\\S/g, \"<span class='letter'>$&</span>\");\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".ml16\", {\n            opacity: 1,\n            delay: 4,\n            duration: 5\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".loader-2\", {\n            opacity: 0,\n            delay: 5,\n            duration: 5\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".loader\", {\n            opacity: 0,\n            delay: 5,\n            duration: 5\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".loader-bg\", {\n            opacity: 0,\n            delay: 5,\n            duration: 5\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".ml16\", {\n            opacity: 0,\n            delay: 10,\n            duration: 5\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".preloader\", {\n            opacity: 0,\n            delay: 10,\n            duration: 5\n        });\n    }, [\n        animationComplete,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"preloader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader-bg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"count\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            ref: counterRef,\n                            children: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 40\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"copy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"ml16\",\n                            children: \"F365\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 39\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader-2\"\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Opening, \"S1Vv03zzM64JLpAI+2zQvXxRbSQ=\");\n_c = Opening;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Opening);\nvar _c;\n$RefreshReg$(_c, \"Opening\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hbmltYXRpb24vb3BlbmluZy9PcGVuaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQUNuQztBQUNEO0FBRXZCLE1BQU1LLFVBQVU7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR04sK0NBQVFBLENBQUM7SUFDM0QsTUFBTU8sYUFBYU4sNkNBQU1BLENBQUM7SUFDMUIsTUFBTU8sWUFBWVAsNkNBQU1BLENBQUMsRUFBRTtJQUMzQixNQUFNUSxXQUFXUiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNUyxVQUFVVCw2Q0FBTUEsQ0FBQyxJQUFJVSxNQUFNLEdBQUdDLElBQUksQ0FBQztJQUd6Q2IsZ0RBQVNBLENBQUM7UUFDTixJQUFJYyxlQUFlO1FBQ25CLE1BQU1DLGdCQUFnQjtZQUNsQkQ7WUFDQSxJQUFJQSxnQkFBZ0IsS0FBSztnQkFDckIsSUFBSU4sV0FBV1EsT0FBTyxFQUFFO29CQUNwQlIsV0FBV1EsT0FBTyxDQUFDQyxXQUFXLEdBQUdIO2dCQUNyQztZQUNKLE9BQU87Z0JBQ0hJLGNBQWNDO2dCQUNkWixxQkFBcUI7WUFDekI7UUFDSjtRQUVBLE1BQU1ZLFdBQVdDLFlBQVlMLGVBQWU7UUFDNUMsT0FBTyxJQUFNRyxjQUFjQztJQUMvQixHQUFHLEVBQUU7SUFFTG5CLGdEQUFTQSxDQUFDO1FBQ04sMkJBQTJCO1FBQzNCLGlDQUFpQztRQUNqQyw4QkFBOEI7UUFDOUIsbUVBQW1FO1FBQ25FLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osVUFBVTtRQUVWLDhFQUE4RTtRQUU5RSxpRkFBaUY7UUFDakYsb0ZBQW9GO1FBRXBGLHVDQUF1QztRQUN2Qyx1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG1DQUFtQztRQUNuQyxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLElBQUk7UUFFSkcsNENBQUlBLENBQUNrQixFQUFFLENBQUMsVUFBVTtZQUFFQyxTQUFTO1lBQUdDLE9BQU87WUFBS0MsV0FBVztRQUFDO1FBQ3hELElBQUlDLGNBQWNDLFNBQVNDLGFBQWEsQ0FBQztRQUN6Q0YsWUFBWUcsU0FBUyxHQUFHSCxZQUFZUixXQUFXLENBQUNZLE9BQU8sQ0FBQyxPQUFPO1FBQy9EMUIsNENBQUlBLENBQUNrQixFQUFFLENBQUMsU0FBUztZQUFDQyxTQUFTO1lBQUdDLE9BQU87WUFBR08sVUFBVTtRQUFDO1FBQ25EM0IsNENBQUlBLENBQUNrQixFQUFFLENBQUMsYUFBYTtZQUFDQyxTQUFTO1lBQUdDLE9BQU87WUFBR08sVUFBVTtRQUFDO1FBQ3ZEM0IsNENBQUlBLENBQUNrQixFQUFFLENBQUMsV0FBVztZQUFDQyxTQUFTO1lBQUdDLE9BQU87WUFBR08sVUFBVTtRQUFDO1FBQ3JEM0IsNENBQUlBLENBQUNrQixFQUFFLENBQUMsY0FBYztZQUFDQyxTQUFTO1lBQUdDLE9BQU87WUFBR08sVUFBVTtRQUFDO1FBQ3hEM0IsNENBQUlBLENBQUNrQixFQUFFLENBQUMsU0FBUztZQUFDQyxTQUFTO1lBQUdDLE9BQU87WUFBSU8sVUFBVTtRQUFDO1FBQ3BEM0IsNENBQUlBLENBQUNrQixFQUFFLENBQUMsY0FBYztZQUFDQyxTQUFTO1lBQUdDLE9BQU87WUFBSU8sVUFBVTtRQUFDO0lBRTdELEdBQUc7UUFBQ3hCO1FBQW1CRDtLQUFVO0lBRWpDLHFCQUVJOzswQkFDSSw4REFBQzBCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzswQkFFbkIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVEsNEVBQUNDOzRCQUFFQyxLQUFLMUI7c0NBQVk7Ozs7Ozs7Ozs7O2tDQUMzQyw4REFBQ3VCO3dCQUFJQyxXQUFVO2tDQUFPLDRFQUFDQzs0QkFBRUQsV0FBVTtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7Ozs7QUFNM0I7R0FoRk01QjtLQUFBQTtBQWtGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYW5pbWF0aW9uL29wZW5pbmcvT3BlbmluZy5qc3g/NDM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgJy4vT3BlbmluZy5jc3MnO1xuXG5jb25zdCBPcGVuaW5nID0gKHsgaXNMb2FkaW5nIH0pID0+IHtcbiAgICBjb25zdCBbYW5pbWF0aW9uQ29tcGxldGUsIHNldEFuaW1hdGlvbkNvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjb3VudGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHRpdGxlUmVmcyA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgY2Fpcm9SZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgYmFyc1JlZiA9IHVzZVJlZihuZXcgQXJyYXkoNSkuZmlsbChudWxsKSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSAwO1xuICAgICAgICBjb25zdCB1cGRhdGVDb3VudGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlKys7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlIDw9IDEwMCkge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclJlZi5jdXJyZW50LnRleHRDb250ZW50ID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgc2V0QW5pbWF0aW9uQ29tcGxldGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDb3VudGVyLCAzMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBpZiAoYW5pbWF0aW9uQ29tcGxldGUpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIC8vICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdoYXNBbmltYXRpb25TaG93bicsICd0cnVlJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlzTG9hZGluZygpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgIC8vICAgICB0bC50byhcIi5jb3VudGVyXCIsIHsgZHVyYXRpb246IDAuNSwgb3BhY2l0eTogMCwgZWFzZTogJ3Bvd2VyMi5pbk91dCcgfSk7XG5cbiAgICAgICAgLy8gICAgIHRsLnRvKGNhaXJvUmVmLmN1cnJlbnQsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDIsIGVhc2U6ICdwb3dlcjIuaW5PdXQnIH0pXG4gICAgICAgIC8vICAgICAgICAgLnRvKGNhaXJvUmVmLmN1cnJlbnQsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEsIGVhc2U6ICdwb3dlcjIuaW5PdXQnIH0pO1xuXG4gICAgICAgIC8vICAgICBiYXJzUmVmLmN1cnJlbnQuZm9yRWFjaChiYXIgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRsLnRvKGJhciwge1xuICAgICAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgLy8gICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAvLyAgICAgICAgICAgICB5OiAtNDAwLFxuICAgICAgICAvLyAgICAgICAgICAgICBlYXNlOiAncG93ZXIzLmluT3V0J1xuICAgICAgICAvLyAgICAgICAgIH0sIFwiPFwiKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZ3NhcC50byhcIi5jb3VudFwiLCB7IG9wYWNpdHk6IDAsIGRlbGF5OiAzLjUsIGRldXJhdGlvbjogNX0pO1xuICAgICAgICBsZXQgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWwxNicpO1xuICAgICAgICB0ZXh0V3JhcHBlci5pbm5lckhUTUwgPSB0ZXh0V3JhcHBlci50ZXh0Q29udGVudC5yZXBsYWNlKC9cXFMvZywgXCI8c3BhbiBjbGFzcz0nbGV0dGVyJz4kJjwvc3Bhbj5cIik7XG4gICAgICAgIGdzYXAudG8oXCIubWwxNlwiLCB7b3BhY2l0eTogMSwgZGVsYXk6IDQsIGR1cmF0aW9uOiA1fSk7XG4gICAgICAgIGdzYXAudG8oXCIubG9hZGVyLTJcIiwge29wYWNpdHk6IDAsIGRlbGF5OiA1LCBkdXJhdGlvbjogNX0pO1xuICAgICAgICBnc2FwLnRvKFwiLmxvYWRlclwiLCB7b3BhY2l0eTogMCwgZGVsYXk6IDUsIGR1cmF0aW9uOiA1fSk7XG4gICAgICAgIGdzYXAudG8oXCIubG9hZGVyLWJnXCIsIHtvcGFjaXR5OiAwLCBkZWxheTogNSwgZHVyYXRpb246IDV9KTtcbiAgICAgICAgZ3NhcC50byhcIi5tbDE2XCIsIHtvcGFjaXR5OiAwLCBkZWxheTogMTAsIGR1cmF0aW9uOiA1fSk7XG4gICAgICAgIGdzYXAudG8oXCIucHJlbG9hZGVyXCIsIHtvcGFjaXR5OiAwLCBkZWxheTogMTAsIGR1cmF0aW9uOiA1fSk7XG5cbiAgICB9LCBbYW5pbWF0aW9uQ29tcGxldGUsIGlzTG9hZGluZ10pO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZWxvYWRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlcic+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1iZyc+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnQnPjxwIHJlZj17Y291bnRlclJlZn0+MDwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29weSc+PHAgY2xhc3NOYW1lPSdtbDE2Jz5GMzY1PC9wPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLTInPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3BlbmluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ3NhcCIsIk9wZW5pbmciLCJpc0xvYWRpbmciLCJhbmltYXRpb25Db21wbGV0ZSIsInNldEFuaW1hdGlvbkNvbXBsZXRlIiwiY291bnRlclJlZiIsInRpdGxlUmVmcyIsImNhaXJvUmVmIiwiYmFyc1JlZiIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRWYWx1ZSIsInVwZGF0ZUNvdW50ZXIiLCJjdXJyZW50IiwidGV4dENvbnRlbnQiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRvIiwib3BhY2l0eSIsImRlbGF5IiwiZGV1cmF0aW9uIiwidGV4dFdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwiZHVyYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/animation/opening/Opening.jsx\n"));

/***/ })

});