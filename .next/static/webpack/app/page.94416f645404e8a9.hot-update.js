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

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _components_landing_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/landing/Landing */ \"(app-pages-browser)/./src/components/landing/Landing.jsx\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_brief_Brief__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/brief/Brief */ \"(app-pages-browser)/./src/components/brief/Brief.jsx\");\n/* harmony import */ var _animation_marquee_Marquee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/animation/marquee/Marquee */ \"(app-pages-browser)/./src/animation/marquee/Marquee.jsx\");\n/* harmony import */ var _animation_opening_Opening__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/animation/opening/Opening */ \"(app-pages-browser)/./src/animation/opening/Opening.jsx\");\n/* harmony import */ var _components_what_What__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/what/What */ \"(app-pages-browser)/./src/components/what/What.jsx\");\n/* harmony import */ var _components_logoMarquee_LogoMarquee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/logoMarquee/LogoMarquee */ \"(app-pages-browser)/./src/components/logoMarquee/LogoMarquee.jsx\");\n/* harmony import */ var _components_statement_Statement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/statement/Statement */ \"(app-pages-browser)/./src/components/statement/Statement.jsx\");\n/* harmony import */ var _components_events_Events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/events/Events */ \"(app-pages-browser)/./src/components/events/Events.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [hasAnimationShown, setHasAnimationShown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Default to false\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Access sessionStorage only on the client-side\n        if (true) {\n            setHasAnimationShown(sessionStorage.getItem(\"hasAnimationShown\") === \"true\");\n            // Set the initial window width\n            setWindowWidth(window.innerWidth);\n            // Update the window width on resize\n            const handleResize = ()=>{\n                setWindowWidth(window.innerWidth);\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>window.removeEventListener(\"resize\", handleResize);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {\n                mode: \"wait\",\n                children: !hasAnimationShown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_opening_Opening__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    isLoading: isLoading,\n                    setIsLoading: setIsLoading\n                }, void 0, false, {\n                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 32\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landing_Landing__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                windowWidth: windowWidth\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_what_What__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_what_What__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_brief_Brief__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                windowWidth: windowWidth\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_statement_Statement__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_marquee_Marquee__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_Events__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                windowWidth: windowWidth\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logoMarquee_LogoMarquee__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/page.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XVX+qhjBQLoSmPmZEX+g1kp6lYo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMkM7QUFDSztBQUNHO0FBQ1g7QUFDSztBQUNLO0FBQ0E7QUFDUjtBQUNxQjtBQUNOO0FBQ1Q7QUFFakMsU0FBU1k7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNjLG1CQUFtQkMscUJBQXFCLEdBQUdmLCtDQUFRQSxDQUFDLFFBQVEsbUJBQW1CO0lBSXRGLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLGdEQUFnRDtRQUNoRCxJQUFJLElBQTZCLEVBQUU7WUFDakNnQixxQkFBcUJHLGVBQWVDLE9BQU8sQ0FBQyx5QkFBeUI7WUFDckUsK0JBQStCO1lBQy9CRixlQUFlRyxPQUFPQyxVQUFVO1lBRWhDLG9DQUFvQztZQUNwQyxNQUFNQyxlQUFlO2dCQUNuQkwsZUFBZUcsT0FBT0MsVUFBVTtZQUNsQztZQUVBRCxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVRDtZQUNsQyxPQUFPLElBQU1GLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVGO1FBQ3BEO0lBQ0YsR0FBRyxFQUFFO0lBS0wscUJBQ0UsOERBQUNHO1FBQUtDLFdBQVd2QixnRUFBVzs7MEJBQzFCLDhEQUFDRiwyREFBZUE7Z0JBQUMwQixNQUFLOzBCQUNuQixDQUFDYixtQ0FBcUIsOERBQUNSLGtFQUFPQTtvQkFBQ00sV0FBV0E7b0JBQVdDLGNBQWNBOzs7Ozs7Ozs7OzswQkFFdEUsOERBQUNYLG1FQUFPQTtnQkFBQ2MsYUFBYUE7Ozs7OzswQkFDdEIsOERBQUNULDZEQUFJQTs7Ozs7MEJBQ0wsOERBQUNBLDZEQUFJQTs7Ozs7MEJBQ0wsOERBQUNILCtEQUFLQTtnQkFBQ1ksYUFBYUE7Ozs7OzswQkFDcEIsOERBQUNQLHVFQUFTQTs7Ozs7MEJBQ1YsOERBQUNKLGtFQUFPQTs7Ozs7MEJBQ1IsOERBQUNLLGlFQUFNQTtnQkFBQ00sYUFBYUE7Ozs7OzswQkFDckIsOERBQUNSLDJFQUFXQTs7Ozs7Ozs7Ozs7QUFHbEI7R0EzQ3dCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExhbmRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEJyaWVmIGZyb20gXCJAL2NvbXBvbmVudHMvYnJpZWYvQnJpZWZcIjtcbmltcG9ydCBNYXJxdWVlIGZyb20gXCJAL2FuaW1hdGlvbi9tYXJxdWVlL01hcnF1ZWVcIjtcbmltcG9ydCBPcGVuaW5nIGZyb20gJ0AvYW5pbWF0aW9uL29wZW5pbmcvT3BlbmluZyc7XG5pbXBvcnQgV2hhdCBmcm9tICdAL2NvbXBvbmVudHMvd2hhdC9XaGF0JztcbmltcG9ydCBMb2dvTWFycXVlZSBmcm9tICdAL2NvbXBvbmVudHMvbG9nb01hcnF1ZWUvTG9nb01hcnF1ZWUnO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tICdAL2NvbXBvbmVudHMvc3RhdGVtZW50L1N0YXRlbWVudCc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJ0AvY29tcG9uZW50cy9ldmVudHMvRXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaGFzQW5pbWF0aW9uU2hvd24sIHNldEhhc0FuaW1hdGlvblNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gRGVmYXVsdCB0byBmYWxzZVxuXG5cblxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWNjZXNzIHNlc3Npb25TdG9yYWdlIG9ubHkgb24gdGhlIGNsaWVudC1zaWRlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHNldEhhc0FuaW1hdGlvblNob3duKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2hhc0FuaW1hdGlvblNob3duJykgPT09ICd0cnVlJyk7XG4gICAgICAvLyBTZXQgdGhlIGluaXRpYWwgd2luZG93IHdpZHRoXG4gICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgd2luZG93IHdpZHRoIG9uIHJlc2l6ZVxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgeyFoYXNBbmltYXRpb25TaG93biAmJiA8T3BlbmluZyBpc0xvYWRpbmc9e2lzTG9hZGluZ30gc2V0SXNMb2FkaW5nPXtzZXRJc0xvYWRpbmd9IC8+fVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8TGFuZGluZyB3aW5kb3dXaWR0aD17d2luZG93V2lkdGh9IC8+XG4gICAgICA8V2hhdCAvPlxuICAgICAgPFdoYXQgLz5cbiAgICAgIDxCcmllZiB3aW5kb3dXaWR0aD17d2luZG93V2lkdGh9IC8+XG4gICAgICA8U3RhdGVtZW50IC8+XG4gICAgICA8TWFycXVlZSAvPlxuICAgICAgPEV2ZW50cyB3aW5kb3dXaWR0aD17d2luZG93V2lkdGh9IC8+XG4gICAgICA8TG9nb01hcnF1ZWUgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJMYW5kaW5nIiwic3R5bGVzIiwiQnJpZWYiLCJNYXJxdWVlIiwiT3BlbmluZyIsIldoYXQiLCJMb2dvTWFycXVlZSIsIlN0YXRlbWVudCIsIkV2ZW50cyIsIkhvbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNBbmltYXRpb25TaG93biIsInNldEhhc0FuaW1hdGlvblNob3duIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJjbGFzc05hbWUiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});