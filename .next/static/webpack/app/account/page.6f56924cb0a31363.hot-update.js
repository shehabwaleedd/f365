"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/account/page",{

/***/ "(app-pages-browser)/./src/app/account/page.jsx":
/*!**********************************!*\
  !*** ./src/app/account/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/account/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/useUser */ \"(app-pages-browser)/./src/utils/useUser.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Account = ()=>{\n    _s();\n    const { user, loading, error, userLoggedIn } = (0,_utils_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [personalInfoOpen, setPersonalInfoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [changePasswordOpen, setChangePasswordOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEventsOpen, setUserEventsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleLogout = ()=>{\n        (0,_utils_useUser__WEBPACK_IMPORTED_MODULE_3__.logout)();\n        router.push(\"/login\");\n    };\n    const handleOpen = (e)=>{\n        if (e.target.id === \"personalInfo\") {\n            setPersonalInfoOpen(true);\n            setChangePasswordOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"changePassword\") {\n            setChangePasswordOpen(true);\n            setPersonalInfoOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"userEvents\") {\n            setUserEventsOpen(true);\n            setChangePasswordOpen(false);\n            setPersonalInfoOpen(false);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().please),\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 42,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 43,\n        columnNumber: 23\n    }, undefined);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please login.\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 44,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account__upper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account__lower),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account__lower_left),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account__lower_left_upper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account_lower_left_upper_top),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: user.data.avatar ? user.data.avatar.url : \"/user.png\",\n                                            alt: \"user\",\n                                            width: 100,\n                                            height: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: user.data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account__lower_left_lower),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Name: \",\n                                            user.data.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Email: \",\n                                            user.data.email\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account__lower_right)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Account, \"9EJy/xmEvTuEvTNfP/Jad4FPTnY=\", false, function() {\n    return [\n        _utils_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNrRDtBQUN6QjtBQUNLO0FBQ1M7QUFDRTtBQUNEO0FBQ0c7QUFDM0MsTUFBTVMsVUFBVTs7SUFDWixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRSxHQUFHUCx1REFBT0E7SUFDdEQsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNlLG9CQUFvQkMsc0JBQXNCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDckQsTUFBTW1CLFNBQVNaLDBEQUFTQTtJQUV4QixNQUFNYSxlQUFlO1FBQ2pCZCxzREFBTUE7UUFDTmEsT0FBT0UsSUFBSSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsYUFBYSxDQUFDQztRQUNoQixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxnQkFBZ0I7WUFDaENYLG9CQUFvQjtZQUNwQkUsc0JBQXNCO1lBQ3RCRSxrQkFBa0I7UUFDdEI7UUFDQSxJQUFJSyxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxrQkFBa0I7WUFDbENULHNCQUFzQjtZQUN0QkYsb0JBQW9CO1lBQ3BCSSxrQkFBa0I7UUFDdEI7UUFDQSxJQUFJSyxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxjQUFjO1lBQzlCUCxrQkFBa0I7WUFDbEJGLHNCQUFzQjtZQUN0QkYsb0JBQW9CO1FBQ3hCO0lBQ0o7SUFLQSxJQUFJSixTQUFTLHFCQUFPLDhEQUFDZ0I7UUFBSUMsV0FBV3ZCLGlFQUFhO2tCQUFFOzs7Ozs7SUFDbkQsSUFBSU8sT0FBTyxxQkFBTyw4REFBQ2U7O1lBQUs7WUFBUWYsTUFBTWtCLE9BQU87Ozs7Ozs7SUFDN0MsSUFBSSxDQUFDcEIsTUFBTSxxQkFBTyw4REFBQ2lCO2tCQUFJOzs7Ozs7SUFHdkIscUJBQ0ksOERBQUNJO1FBQUtILFdBQVd2QixrRUFBYzs7MEJBQzNCLDhEQUFDc0I7Z0JBQUlDLFdBQVd2Qix5RUFBcUI7O2tDQUNqQyw4REFBQzZCO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUFPQyxTQUFTZjtrQ0FDYiw0RUFBQ2dCO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLZCw4REFBQ1Y7Z0JBQUlDLFdBQVd2Qix5RUFBcUI7O2tDQUNqQyw4REFBQ3NCO3dCQUFJQyxXQUFXdkIsOEVBQTBCOzswQ0FDdEMsOERBQUNzQjtnQ0FBSUMsV0FBV3ZCLG9GQUFnQzs7a0RBQzVDLDhEQUFDc0I7d0NBQUlDLFdBQVd2Qix1RkFBbUM7a0RBQy9DLDRFQUFDRCxrREFBS0E7NENBQUNzQyxLQUFLaEMsS0FBS2lDLElBQUksQ0FBQ0MsTUFBTSxHQUFHbEMsS0FBS2lDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLEdBQUc7NENBQWFDLEtBQUk7NENBQU9DLE9BQU87NENBQUtDLFFBQVE7Ozs7Ozs7Ozs7O2tEQUV0Ryw4REFBQ2I7a0RBQ0csNEVBQUNjO3NEQUNJdkMsS0FBS2lDLElBQUksQ0FBQ08sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSTNCLDhEQUFDdkI7Z0NBQUlDLFdBQVd2QixvRkFBZ0M7O2tEQUM1Qyw4REFBQytDOzs0Q0FBRTs0Q0FBTzFDLEtBQUtpQyxJQUFJLENBQUNPLElBQUk7Ozs7Ozs7a0RBQ3hCLDhEQUFDRTs7NENBQUU7NENBQVExQyxLQUFLaUMsSUFBSSxDQUFDVSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdsQyw4REFBQzFCO3dCQUFJQyxXQUFXdkIsK0VBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0Q7R0F2RU1JOztRQUM2Q0gsbURBQU9BO1FBSXZDRSxzREFBU0E7OztLQUx0QkM7QUF5RU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hY2NvdW50L3BhZ2UuanN4P2M5MzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAL3V0aWxzL3VzZVVzZXInXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICdAL3V0aWxzL3VzZVVzZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcbmNvbnN0IEFjY291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyLCBsb2FkaW5nLCBlcnJvciwgdXNlckxvZ2dlZEluIH0gPSB1c2VVc2VyKCk7XG4gICAgY29uc3QgW3BlcnNvbmFsSW5mb09wZW4sIHNldFBlcnNvbmFsSW5mb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjaGFuZ2VQYXNzd29yZE9wZW4sIHNldENoYW5nZVBhc3N3b3JkT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJFdmVudHNPcGVuLCBzZXRVc2VyRXZlbnRzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJwZXJzb25hbEluZm9cIikge1xuICAgICAgICAgICAgc2V0UGVyc29uYWxJbmZvT3Blbih0cnVlKTtcbiAgICAgICAgICAgIHNldENoYW5nZVBhc3N3b3JkT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRVc2VyRXZlbnRzT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImNoYW5nZVBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldENoYW5nZVBhc3N3b3JkT3Blbih0cnVlKTtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsSW5mb09wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0VXNlckV2ZW50c09wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ1c2VyRXZlbnRzXCIpIHtcbiAgICAgICAgICAgIHNldFVzZXJFdmVudHNPcGVuKHRydWUpO1xuICAgICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsSW5mb09wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsZWFzZX0+TG9hZGluZy4uLjwvZGl2PjtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2ID5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICAgIGlmICghdXNlcikgcmV0dXJuIDxkaXY+UGxlYXNlIGxvZ2luLjwvZGl2PjtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX3VwcGVyfT5cbiAgICAgICAgICAgICAgICA8aDE+QWNjb3VudDwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJfbGVmdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJfbGVmdF91cHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfbG93ZXJfbGVmdF91cHBlcl90b3B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIuZGF0YS5hdmF0YXIgPyB1c2VyLmRhdGEuYXZhdGFyLnVybCA6ICcvdXNlci5wbmcnfSBhbHQ9XCJ1c2VyXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0X2xvd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5hbWU6IHt1c2VyLmRhdGEubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbDoge3VzZXIuZGF0YS5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJfcmlnaHR9PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJJbWFnZSIsInN0eWxlcyIsInVzZVVzZXIiLCJsb2dvdXQiLCJ1c2VSb3V0ZXIiLCJBY2NvdW50IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInVzZXJMb2dnZWRJbiIsInBlcnNvbmFsSW5mb09wZW4iLCJzZXRQZXJzb25hbEluZm9PcGVuIiwiY2hhbmdlUGFzc3dvcmRPcGVuIiwic2V0Q2hhbmdlUGFzc3dvcmRPcGVuIiwidXNlckV2ZW50c09wZW4iLCJzZXRVc2VyRXZlbnRzT3BlbiIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsInB1c2giLCJoYW5kbGVPcGVuIiwiZSIsInRhcmdldCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwicGxlYXNlIiwibWVzc2FnZSIsIm1haW4iLCJhY2NvdW50IiwiYWNjb3VudF9fdXBwZXIiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwiYWNjb3VudF9fbG93ZXIiLCJhY2NvdW50X19sb3dlcl9sZWZ0IiwiYWNjb3VudF9fbG93ZXJfbGVmdF91cHBlciIsImFjY291bnRfbG93ZXJfbGVmdF91cHBlcl90b3AiLCJzcmMiLCJkYXRhIiwiYXZhdGFyIiwidXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsIm5hbWUiLCJhY2NvdW50X19sb3dlcl9sZWZ0X2xvd2VyIiwicCIsImVtYWlsIiwiYWNjb3VudF9fbG93ZXJfcmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/account/page.jsx\n"));

/***/ })

});