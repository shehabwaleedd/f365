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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Opening_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Opening.css */ \"(app-pages-browser)/./src/animation/opening/Opening.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Opening = (param)=>{\n    let { isLoading } = param;\n    _s();\n    const [animationComplete, setAnimationComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const counterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const titleRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const cairoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const barsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(5).fill(null));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentValue = 0;\n        const updateCounter = ()=>{\n            currentValue++;\n            if (currentValue <= 100) {\n                if (counterRef.current) {\n                    counterRef.current.textContent = currentValue;\n                }\n            } else {\n                clearInterval(interval);\n                setAnimationComplete(true);\n            }\n        };\n        const interval = setInterval(updateCounter, 30);\n        return ()=>clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // if (animationComplete) {\n        //     const tl = gsap.timeline({\n        //         onComplete: () => {\n        //             sessionStorage.setItem('hasAnimationShown', 'true');\n        //             isLoading();\n        //         }\n        //     });\n        //     tl.to(\".counter\", { duration: 0.5, opacity: 0, ease: 'power2.inOut' });\n        //     tl.to(cairoRef.current, { opacity: 1, duration: 2, ease: 'power2.inOut' })\n        //         .to(cairoRef.current, { opacity: 0, duration: 1, ease: 'power2.inOut' });\n        //     barsRef.current.forEach(bar => {\n        //         tl.to(bar, {\n        //             duration: 2,\n        //             opacity: 1,\n        //             height: 0,\n        //             y: -400,\n        //             ease: 'power3.inOut'\n        //         }, \"<\");\n        //     });\n        // }\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".count\", {\n            opacity: 0,\n            delay: 3.5,\n            deuration: 5\n        });\n        let textWrapper = document.querySelector(\".ml16\");\n        textWrapper.innerHTML = textWrapper.textContent.replace(/\\S/g, \"<span class='letter'>$&</span>\");\n        anime.timeline({\n            loop: false\n        }).add({\n            targets: \".ml16 .letter\",\n            translateY: [\n                -100,\n                0\n            ],\n            easing: \"easeOutExpo\",\n            duration: 1400,\n            delay: (el, i)=>30 * i\n        }).add({\n            targets: \".ml16 .letter\",\n            opacity: 1,\n            duration: 1000,\n            easing: \"easeOutExpo\",\n            delay: 1000\n        });\n    // gsap.to(\".ml16\", {opacity: 1, delay: 4, duration: 5});\n    // gsap.to(\".loader-2\", {opacity: 0, delay: 5, duration: 5});\n    // gsap.to(\".loader\", {opacity: 0, delay: 5, duration: 5});\n    // gsap.to(\".loader-bg\", {opacity: 0, delay: 5, duration: 5});\n    // gsap.to(\".ml16\", {opacity: 0, delay: 10, duration: 5});\n    // gsap.to(\".preloader\", {opacity: 0, delay: 10, duration: 5});\n    }, [\n        animationComplete,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"preloader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader-bg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"count\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            ref: counterRef,\n                            children: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 40\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"copy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"ml16\",\n                            children: \"F365\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 39\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader-2\"\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/animation/opening/Opening.jsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Opening, \"S1Vv03zzM64JLpAI+2zQvXxRbSQ=\");\n_c = Opening;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Opening);\nvar _c;\n$RefreshReg$(_c, \"Opening\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hbmltYXRpb24vb3BlbmluZy9PcGVuaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQUNuQztBQUNEO0FBRXZCLE1BQU1LLFVBQVU7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR04sK0NBQVFBLENBQUM7SUFDM0QsTUFBTU8sYUFBYU4sNkNBQU1BLENBQUM7SUFDMUIsTUFBTU8sWUFBWVAsNkNBQU1BLENBQUMsRUFBRTtJQUMzQixNQUFNUSxXQUFXUiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNUyxVQUFVVCw2Q0FBTUEsQ0FBQyxJQUFJVSxNQUFNLEdBQUdDLElBQUksQ0FBQztJQUd6Q2IsZ0RBQVNBLENBQUM7UUFDTixJQUFJYyxlQUFlO1FBQ25CLE1BQU1DLGdCQUFnQjtZQUNsQkQ7WUFDQSxJQUFJQSxnQkFBZ0IsS0FBSztnQkFDckIsSUFBSU4sV0FBV1EsT0FBTyxFQUFFO29CQUNwQlIsV0FBV1EsT0FBTyxDQUFDQyxXQUFXLEdBQUdIO2dCQUNyQztZQUNKLE9BQU87Z0JBQ0hJLGNBQWNDO2dCQUNkWixxQkFBcUI7WUFDekI7UUFDSjtRQUVBLE1BQU1ZLFdBQVdDLFlBQVlMLGVBQWU7UUFDNUMsT0FBTyxJQUFNRyxjQUFjQztJQUMvQixHQUFHLEVBQUU7SUFFTG5CLGdEQUFTQSxDQUFDO1FBQ04sMkJBQTJCO1FBQzNCLGlDQUFpQztRQUNqQyw4QkFBOEI7UUFDOUIsbUVBQW1FO1FBQ25FLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osVUFBVTtRQUVWLDhFQUE4RTtRQUU5RSxpRkFBaUY7UUFDakYsb0ZBQW9GO1FBRXBGLHVDQUF1QztRQUN2Qyx1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG1DQUFtQztRQUNuQyxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLElBQUk7UUFFSkcsNENBQUlBLENBQUNrQixFQUFFLENBQUMsVUFBVTtZQUFFQyxTQUFTO1lBQUdDLE9BQU87WUFBS0MsV0FBVztRQUFDO1FBQ3hELElBQUlDLGNBQWNDLFNBQVNDLGFBQWEsQ0FBQztRQUN6Q0YsWUFBWUcsU0FBUyxHQUFHSCxZQUFZUixXQUFXLENBQUNZLE9BQU8sQ0FBQyxPQUFPO1FBQy9EQyxNQUFNQyxRQUFRLENBQUM7WUFBQ0MsTUFBTTtRQUFLLEdBQ3RCQyxHQUFHLENBQUM7WUFDREMsU0FBUztZQUNUQyxZQUFZO2dCQUFDLENBQUM7Z0JBQUk7YUFBRTtZQUNwQkMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZkLE9BQU8sQ0FBQ2UsSUFBSUMsSUFBTSxLQUFLQTtRQUMzQixHQUFHTixHQUFHLENBQUM7WUFDSEMsU0FBUztZQUNUWixTQUFTO1lBQ1RlLFVBQVU7WUFDVkQsUUFBUTtZQUNSYixPQUFPO1FBQ1g7SUFFSix5REFBeUQ7SUFDekQsNkRBQTZEO0lBQzdELDJEQUEyRDtJQUMzRCw4REFBOEQ7SUFDOUQsMERBQTBEO0lBQzFELCtEQUErRDtJQUVuRSxHQUFHO1FBQUNqQjtRQUFtQkQ7S0FBVTtJQUVqQyxxQkFFSTs7MEJBQ0ksOERBQUNtQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRW5CLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFRLDRFQUFDQzs0QkFBRUMsS0FBS25DO3NDQUFZOzs7Ozs7Ozs7OztrQ0FDM0MsOERBQUNnQzt3QkFBSUMsV0FBVTtrQ0FBTyw0RUFBQ0M7NEJBQUVELFdBQVU7c0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUU5Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7Ozs7O0FBTTNCO0dBL0ZNckM7S0FBQUE7QUFpR04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FuaW1hdGlvbi9vcGVuaW5nL09wZW5pbmcuanN4PzQzNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuaW1wb3J0ICcuL09wZW5pbmcuY3NzJztcblxuY29uc3QgT3BlbmluZyA9ICh7IGlzTG9hZGluZyB9KSA9PiB7XG4gICAgY29uc3QgW2FuaW1hdGlvbkNvbXBsZXRlLCBzZXRBbmltYXRpb25Db21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY291bnRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB0aXRsZVJlZnMgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IGNhaXJvUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGJhcnNSZWYgPSB1c2VSZWYobmV3IEFycmF5KDUpLmZpbGwobnVsbCkpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gMDtcbiAgICAgICAgY29uc3QgdXBkYXRlQ291bnRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSsrO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA8PSAxMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJSZWYuY3VycmVudC50ZXh0Q29udGVudCA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHNldEFuaW1hdGlvbkNvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRlciwgMzApO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gaWYgKGFuaW1hdGlvbkNvbXBsZXRlKSB7XG4gICAgICAgIC8vICAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAvLyAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaGFzQW5pbWF0aW9uU2hvd24nLCAndHJ1ZScpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpc0xvYWRpbmcoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICAvLyAgICAgdGwudG8oXCIuY291bnRlclwiLCB7IGR1cmF0aW9uOiAwLjUsIG9wYWNpdHk6IDAsIGVhc2U6ICdwb3dlcjIuaW5PdXQnIH0pO1xuXG4gICAgICAgIC8vICAgICB0bC50byhjYWlyb1JlZi5jdXJyZW50LCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAyLCBlYXNlOiAncG93ZXIyLmluT3V0JyB9KVxuICAgICAgICAvLyAgICAgICAgIC50byhjYWlyb1JlZi5jdXJyZW50LCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiAncG93ZXIyLmluT3V0JyB9KTtcblxuICAgICAgICAvLyAgICAgYmFyc1JlZi5jdXJyZW50LmZvckVhY2goYmFyID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0bC50byhiYXIsIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIC8vICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgLy8gICAgICAgICAgICAgeTogLTQwMCxcbiAgICAgICAgLy8gICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMy5pbk91dCdcbiAgICAgICAgLy8gICAgICAgICB9LCBcIjxcIik7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGdzYXAudG8oXCIuY291bnRcIiwgeyBvcGFjaXR5OiAwLCBkZWxheTogMy41LCBkZXVyYXRpb246IDV9KTtcbiAgICAgICAgbGV0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1sMTYnKTtcbiAgICAgICAgdGV4dFdyYXBwZXIuaW5uZXJIVE1MID0gdGV4dFdyYXBwZXIudGV4dENvbnRlbnQucmVwbGFjZSgvXFxTL2csIFwiPHNwYW4gY2xhc3M9J2xldHRlcic+JCY8L3NwYW4+XCIpO1xuICAgICAgICBhbmltZS50aW1lbGluZSh7bG9vcDogZmFsc2V9KVxuICAgICAgICAgICAgLmFkZCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogJy5tbDE2IC5sZXR0ZXInLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFstMTAwLDBdLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNDAwLFxuICAgICAgICAgICAgICAgIGRlbGF5OiAoZWwsIGkpID0+IDMwICogaVxuICAgICAgICAgICAgfSkuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLm1sMTYgLmxldHRlcicsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbiAgICAgICAgICAgICAgICBkZWxheTogMTAwMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZ3NhcC50byhcIi5tbDE2XCIsIHtvcGFjaXR5OiAxLCBkZWxheTogNCwgZHVyYXRpb246IDV9KTtcbiAgICAgICAgLy8gZ3NhcC50byhcIi5sb2FkZXItMlwiLCB7b3BhY2l0eTogMCwgZGVsYXk6IDUsIGR1cmF0aW9uOiA1fSk7XG4gICAgICAgIC8vIGdzYXAudG8oXCIubG9hZGVyXCIsIHtvcGFjaXR5OiAwLCBkZWxheTogNSwgZHVyYXRpb246IDV9KTtcbiAgICAgICAgLy8gZ3NhcC50byhcIi5sb2FkZXItYmdcIiwge29wYWNpdHk6IDAsIGRlbGF5OiA1LCBkdXJhdGlvbjogNX0pO1xuICAgICAgICAvLyBnc2FwLnRvKFwiLm1sMTZcIiwge29wYWNpdHk6IDAsIGRlbGF5OiAxMCwgZHVyYXRpb246IDV9KTtcbiAgICAgICAgLy8gZ3NhcC50byhcIi5wcmVsb2FkZXJcIiwge29wYWNpdHk6IDAsIGRlbGF5OiAxMCwgZHVyYXRpb246IDV9KTtcblxuICAgIH0sIFthbmltYXRpb25Db21wbGV0ZSwgaXNMb2FkaW5nXSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbG9hZGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWJnJz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudCc+PHAgcmVmPXtjb3VudGVyUmVmfT4wPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3B5Jz48cCBjbGFzc05hbWU9J21sMTYnPkYzNjU8L3A+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItMic+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cblxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcGVuaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJnc2FwIiwiT3BlbmluZyIsImlzTG9hZGluZyIsImFuaW1hdGlvbkNvbXBsZXRlIiwic2V0QW5pbWF0aW9uQ29tcGxldGUiLCJjb3VudGVyUmVmIiwidGl0bGVSZWZzIiwiY2Fpcm9SZWYiLCJiYXJzUmVmIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudFZhbHVlIiwidXBkYXRlQ291bnRlciIsImN1cnJlbnQiLCJ0ZXh0Q29udGVudCIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwidG8iLCJvcGFjaXR5IiwiZGVsYXkiLCJkZXVyYXRpb24iLCJ0ZXh0V3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInJlcGxhY2UiLCJhbmltZSIsInRpbWVsaW5lIiwibG9vcCIsImFkZCIsInRhcmdldHMiLCJ0cmFuc2xhdGVZIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJlbCIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/animation/opening/Opening.jsx\n"));

/***/ })

});