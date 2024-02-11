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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/account/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/useUser */ \"(app-pages-browser)/./src/context/useUser.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/accountComponents/personalInfo */ \"(app-pages-browser)/./src/components/accountComponents/personalInfo/index.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Account = ()=>{\n    _s();\n    const { user, loading, error, userLoggedIn } = (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [personalInfoOpen, setPersonalInfoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [changePasswordOpen, setChangePasswordOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEventsOpen, setUserEventsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleLogout = ()=>{\n        (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.logout)();\n        router.push(\"/login\");\n    };\n    const handleOpen = (e)=>{\n        if (e.target.id === \"personalInfo\") {\n            setPersonalInfoOpen(true);\n            setChangePasswordOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"changePassword\") {\n            setChangePasswordOpen(true);\n            setPersonalInfoOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"userEvents\") {\n            setUserEventsOpen(true);\n            setChangePasswordOpen(false);\n            setPersonalInfoOpen(false);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().please),\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 45,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 46,\n        columnNumber: 23\n    }, undefined);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please login.\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 47,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__upper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_left),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_left_upper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account_lower_left_upper_top),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: user.data.avatar ? user.data.avatar.url : \"/user.png\",\n                                            alt: \"user\",\n                                            width: 300,\n                                            height: 300,\n                                            quality: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"change profile picture\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account_lower_left_upper_bottom),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: user.data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_left_lower),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"personalInfo\",\n                                            onClick: handleOpen,\n                                            children: \"Personal Info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"changePassword\",\n                                            onClick: handleOpen,\n                                            children: \"Change Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"userEvents\",\n                                            onClick: handleOpen,\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_right),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n                            mode: \"wait\",\n                            children: [\n                                personalInfoOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    user: user\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 29\n                                }, undefined),\n                                changePasswordOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"Change Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Change Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 29\n                                }, undefined),\n                                userEventsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Account, \"9EJy/xmEvTuEvTNfP/Jad4FPTnY=\", false, function() {\n    return [\n        _context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ3pCO0FBQ0s7QUFDUztBQUNJO0FBQ0Q7QUFDQztBQUMyQjtBQUN2QjtBQUUvQyxNQUFNVyxVQUFVOztJQUNaLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFLEdBQUdULHlEQUFPQTtJQUN0RCxNQUFNLENBQUNVLGtCQUFrQkMsb0JBQW9CLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNpQixvQkFBb0JDLHNCQUFzQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDbUIsZ0JBQWdCQyxrQkFBa0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1xQixTQUFTZCwwREFBU0E7SUFFeEIsTUFBTWUsZUFBZTtRQUNqQmhCLHdEQUFNQTtRQUNOZSxPQUFPRSxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNQyxhQUFhLENBQUNDO1FBQ2hCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGdCQUFnQjtZQUNoQ1gsb0JBQW9CO1lBQ3BCRSxzQkFBc0I7WUFDdEJFLGtCQUFrQjtRQUN0QjtRQUNBLElBQUlLLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGtCQUFrQjtZQUNsQ1Qsc0JBQXNCO1lBQ3RCRixvQkFBb0I7WUFDcEJJLGtCQUFrQjtRQUN0QjtRQUNBLElBQUlLLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGNBQWM7WUFDOUJQLGtCQUFrQjtZQUNsQkYsc0JBQXNCO1lBQ3RCRixvQkFBb0I7UUFDeEI7SUFDSjtJQUtBLElBQUlKLFNBQVMscUJBQU8sOERBQUNnQjtRQUFJQyxXQUFXekIsaUVBQWE7a0JBQUU7Ozs7OztJQUNuRCxJQUFJUyxPQUFPLHFCQUFPLDhEQUFDZTs7WUFBSztZQUFRZixNQUFNa0IsT0FBTzs7Ozs7OztJQUM3QyxJQUFJLENBQUNwQixNQUFNLHFCQUFPLDhEQUFDaUI7a0JBQUk7Ozs7OztJQUd2QixxQkFDSSw4REFBQ0k7UUFBS0gsV0FBV3pCLGtFQUFjOzswQkFDM0IsOERBQUN3QjtnQkFBSUMsV0FBV3pCLHlFQUFxQjs7a0NBQ2pDLDhEQUFDK0I7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQU9DLFNBQVNmO2tDQUNiLDRFQUFDZ0I7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDVjtnQkFBSUMsV0FBV3pCLHlFQUFxQjs7a0NBQ2pDLDhEQUFDd0I7d0JBQUlDLFdBQVd6Qiw4RUFBMEI7OzBDQUN0Qyw4REFBQ3dCO2dDQUFJQyxXQUFXekIsb0ZBQWdDOztrREFDNUMsOERBQUN3Qjt3Q0FBSUMsV0FBV3pCLHVGQUFtQztrREFDL0MsNEVBQUNELGtEQUFLQTs0Q0FBQ3dDLEtBQUtoQyxLQUFLaUMsSUFBSSxDQUFDQyxNQUFNLEdBQUdsQyxLQUFLaUMsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsR0FBRzs0Q0FBYUMsS0FBSTs0Q0FBT0MsT0FBTzs0Q0FBS0MsUUFBUTs0Q0FBS0MsU0FBUzs7Ozs7Ozs7Ozs7a0RBRXBILDhEQUFDZDtrREFDRyw0RUFBQ0U7c0RBQUs7Ozs7Ozs7Ozs7O2tEQUlWLDhEQUFDVjt3Q0FBSUMsV0FBV3pCLDBGQUFzQztrREFDbEQsNEVBQUNnRDtzREFBSXpDLEtBQUtpQyxJQUFJLENBQUNTLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ3pCO2dDQUFJQyxXQUFXekIsb0ZBQWdDOzBDQUM1Qyw0RUFBQ21EOztzREFDRyw4REFBQ0M7NENBQUc3QixJQUFHOzRDQUFlVSxTQUFTYjtzREFBWTs7Ozs7O3NEQUMzQyw4REFBQ2dDOzRDQUFHN0IsSUFBRzs0Q0FBaUJVLFNBQVNiO3NEQUFZOzs7Ozs7c0RBQzdDLDhEQUFDZ0M7NENBQUc3QixJQUFHOzRDQUFhVSxTQUFTYjtzREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXJELDhEQUFDSTt3QkFBSUMsV0FBV3pCLCtFQUEyQjtrQ0FDdkMsNEVBQUNLLDBEQUFlQTs0QkFBQ2lELE1BQUs7O2dDQUNqQjNDLGtDQUNHLDhEQUFDUCxrRkFBWUE7b0NBQUNHLE1BQU1BOzs7Ozs7Z0NBRXZCTSxvQ0FDRyw4REFBQ1c7O3NEQUNHLDhEQUFDd0I7c0RBQUc7Ozs7OztzREFDSiw4REFBQ087c0RBQUU7Ozs7Ozs7Ozs7OztnQ0FHVnhDLGdDQUNHLDhEQUFDUzs7c0RBQ0csOERBQUN3QjtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDTztzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkM7R0E3Rk1qRDs7UUFDNkNMLHFEQUFPQTtRQUl2Q0Usc0RBQVNBOzs7S0FMdEJHO0FBK0ZOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeD9jOTM2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQC9jb250ZXh0L3VzZVVzZXInXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICdAL2NvbnRleHQvdXNlVXNlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IFBlcnNvbmFsSW5mbyBmcm9tICdAL2NvbXBvbmVudHMvYWNjb3VudENvbXBvbmVudHMvcGVyc29uYWxJbmZvJ1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgQWNjb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHVzZXIsIGxvYWRpbmcsIGVycm9yLCB1c2VyTG9nZ2VkSW4gfSA9IHVzZVVzZXIoKTtcbiAgICBjb25zdCBbcGVyc29uYWxJbmZvT3Blbiwgc2V0UGVyc29uYWxJbmZvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NoYW5nZVBhc3N3b3JkT3Blbiwgc2V0Q2hhbmdlUGFzc3dvcmRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlckV2ZW50c09wZW4sIHNldFVzZXJFdmVudHNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcInBlcnNvbmFsSW5mb1wiKSB7XG4gICAgICAgICAgICBzZXRQZXJzb25hbEluZm9PcGVuKHRydWUpO1xuICAgICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFVzZXJFdmVudHNPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiY2hhbmdlUGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmRPcGVuKHRydWUpO1xuICAgICAgICAgICAgc2V0UGVyc29uYWxJbmZvT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRVc2VyRXZlbnRzT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcInVzZXJFdmVudHNcIikge1xuICAgICAgICAgICAgc2V0VXNlckV2ZW50c09wZW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0UGVyc29uYWxJbmZvT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxlYXNlfT5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gICAgaWYgKCF1c2VyKSByZXR1cm4gPGRpdj5QbGVhc2UgbG9naW4uPC9kaXY+O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fdXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxoMT5BY2NvdW50PC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0X3VwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX3RvcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dXNlci5kYXRhLmF2YXRhciA/IHVzZXIuZGF0YS5hdmF0YXIudXJsIDogJy91c2VyLnBuZyd9IGFsdD1cInVzZXJcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gcXVhbGl0eT17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgcHJvZmlsZSBwaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfbG93ZXJfbGVmdF91cHBlcl9ib3R0b219PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci5kYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0X2xvd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJwZXJzb25hbEluZm9cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5QZXJzb25hbCBJbmZvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjaGFuZ2VQYXNzd29yZFwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PkNoYW5nZSBQYXNzd29yZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwidXNlckV2ZW50c1wiIG9uQ2xpY2s9e2hhbmRsZU9wZW59Pk15IEV2ZW50czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX3JpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb25hbEluZm9PcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uYWxJbmZvIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZVBhc3N3b3JkT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoYW5nZSBQYXNzd29yZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBQYXNzd29yZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckV2ZW50c09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5NeSBFdmVudHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NeSBFdmVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkltYWdlIiwic3R5bGVzIiwidXNlVXNlciIsImxvZ291dCIsInVzZVJvdXRlciIsIlBlcnNvbmFsSW5mbyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFjY291bnQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwidXNlckxvZ2dlZEluIiwicGVyc29uYWxJbmZvT3BlbiIsInNldFBlcnNvbmFsSW5mb09wZW4iLCJjaGFuZ2VQYXNzd29yZE9wZW4iLCJzZXRDaGFuZ2VQYXNzd29yZE9wZW4iLCJ1c2VyRXZlbnRzT3BlbiIsInNldFVzZXJFdmVudHNPcGVuIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsImhhbmRsZU9wZW4iLCJlIiwidGFyZ2V0IiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGVhc2UiLCJtZXNzYWdlIiwibWFpbiIsImFjY291bnQiLCJhY2NvdW50X191cHBlciIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJhY2NvdW50X19sb3dlciIsImFjY291bnRfX2xvd2VyX2xlZnQiLCJhY2NvdW50X19sb3dlcl9sZWZ0X3VwcGVyIiwiYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX3RvcCIsInNyYyIsImRhdGEiLCJhdmF0YXIiLCJ1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJhY2NvdW50X2xvd2VyX2xlZnRfdXBwZXJfYm90dG9tIiwiaDIiLCJuYW1lIiwiYWNjb3VudF9fbG93ZXJfbGVmdF9sb3dlciIsInVsIiwibGkiLCJhY2NvdW50X19sb3dlcl9yaWdodCIsIm1vZGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/account/page.jsx\n"));

/***/ })

});