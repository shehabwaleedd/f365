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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/account/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/useUser */ \"(app-pages-browser)/./src/context/useUser.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/accountComponents/personalInfo */ \"(app-pages-browser)/./src/components/accountComponents/personalInfo/index.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Account = ()=>{\n    _s();\n    const { user, loading, error, userLoggedIn } = (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [personalInfoOpen, setPersonalInfoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [changePasswordOpen, setChangePasswordOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEventsOpen, setUserEventsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleLogout = ()=>{\n        (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.logout)();\n        router.push(\"/login\");\n    };\n    const handleOpen = (e)=>{\n        if (e.target.id === \"personalInfo\") {\n            setPersonalInfoOpen(true);\n            setChangePasswordOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"changePassword\") {\n            setChangePasswordOpen(true);\n            setPersonalInfoOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"userEvents\") {\n            setUserEventsOpen(true);\n            setChangePasswordOpen(false);\n            setPersonalInfoOpen(false);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().please),\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 44,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 45,\n        columnNumber: 23\n    }, undefined);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please login.\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 46,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__upper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_left),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_left_upper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account_lower_left_upper_top),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: user.data.avatar ? user.data.avatar.url : \"/user.png\",\n                                            alt: \"user\",\n                                            width: 500,\n                                            height: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"change profile picture\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account_lower_left_upper_bottom),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: user.data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_left_lower),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"personalInfo\",\n                                            onClick: handleOpen,\n                                            children: \"Personal Info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"changePassword\",\n                                            onClick: handleOpen,\n                                            children: \"Change Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"userEvents\",\n                                            onClick: handleOpen,\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().account__lower_right),\n                        children: [\n                            personalInfoOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 25\n                            }, undefined),\n                            changePasswordOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Change Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Change Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, undefined),\n                            userEventsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"My Events\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"My Events\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Account, \"9EJy/xmEvTuEvTNfP/Jad4FPTnY=\", false, function() {\n    return [\n        _context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDekI7QUFDSztBQUNTO0FBQ0k7QUFDRDtBQUNDO0FBQzJCO0FBRXRFLE1BQU1VLFVBQVU7O0lBQ1osTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUUsR0FBR1IseURBQU9BO0lBQ3RELE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDZ0Isb0JBQW9CQyxzQkFBc0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ2tCLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNb0IsU0FBU2IsMERBQVNBO0lBRXhCLE1BQU1jLGVBQWU7UUFDakJmLHdEQUFNQTtRQUNOYyxPQUFPRSxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNQyxhQUFhLENBQUNDO1FBQ2hCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGdCQUFnQjtZQUNoQ1gsb0JBQW9CO1lBQ3BCRSxzQkFBc0I7WUFDdEJFLGtCQUFrQjtRQUN0QjtRQUNBLElBQUlLLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGtCQUFrQjtZQUNsQ1Qsc0JBQXNCO1lBQ3RCRixvQkFBb0I7WUFDcEJJLGtCQUFrQjtRQUN0QjtRQUNBLElBQUlLLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGNBQWM7WUFDOUJQLGtCQUFrQjtZQUNsQkYsc0JBQXNCO1lBQ3RCRixvQkFBb0I7UUFDeEI7SUFDSjtJQUtBLElBQUlKLFNBQVMscUJBQU8sOERBQUNnQjtRQUFJQyxXQUFXeEIsaUVBQWE7a0JBQUU7Ozs7OztJQUNuRCxJQUFJUSxPQUFPLHFCQUFPLDhEQUFDZTs7WUFBSztZQUFRZixNQUFNa0IsT0FBTzs7Ozs7OztJQUM3QyxJQUFJLENBQUNwQixNQUFNLHFCQUFPLDhEQUFDaUI7a0JBQUk7Ozs7OztJQUd2QixxQkFDSSw4REFBQ0k7UUFBS0gsV0FBV3hCLGtFQUFjOzswQkFDM0IsOERBQUN1QjtnQkFBSUMsV0FBV3hCLHlFQUFxQjs7a0NBQ2pDLDhEQUFDOEI7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQU9DLFNBQVNmO2tDQUNiLDRFQUFDZ0I7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDVjtnQkFBSUMsV0FBV3hCLHlFQUFxQjs7a0NBQ2pDLDhEQUFDdUI7d0JBQUlDLFdBQVd4Qiw4RUFBMEI7OzBDQUN0Qyw4REFBQ3VCO2dDQUFJQyxXQUFXeEIsb0ZBQWdDOztrREFDNUMsOERBQUN1Qjt3Q0FBSUMsV0FBV3hCLHVGQUFtQztrREFDL0MsNEVBQUNELGtEQUFLQTs0Q0FBQ3VDLEtBQUtoQyxLQUFLaUMsSUFBSSxDQUFDQyxNQUFNLEdBQUdsQyxLQUFLaUMsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsR0FBRzs0Q0FBYUMsS0FBSTs0Q0FBT0MsT0FBTzs0Q0FBS0MsUUFBUTs7Ozs7Ozs7Ozs7a0RBRXRHLDhEQUFDYjtrREFDRyw0RUFBQ0U7c0RBQUs7Ozs7Ozs7Ozs7O2tEQUlWLDhEQUFDVjt3Q0FBSUMsV0FBV3hCLDBGQUFzQztrREFDbEQsNEVBQUM4QztzREFBSXhDLEtBQUtpQyxJQUFJLENBQUNRLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ3hCO2dDQUFJQyxXQUFXeEIsb0ZBQWdDOzBDQUM1Qyw0RUFBQ2lEOztzREFDRyw4REFBQ0M7NENBQUc1QixJQUFHOzRDQUFlVSxTQUFTYjtzREFBWTs7Ozs7O3NEQUMzQyw4REFBQytCOzRDQUFHNUIsSUFBRzs0Q0FBaUJVLFNBQVNiO3NEQUFZOzs7Ozs7c0RBQzdDLDhEQUFDK0I7NENBQUc1QixJQUFHOzRDQUFhVSxTQUFTYjtzREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXJELDhEQUFDSTt3QkFBSUMsV0FBV3hCLCtFQUEyQjs7NEJBQ3RDVSxrQ0FDRyw4REFBQ04sa0ZBQVlBOzs7Ozs0QkFFaEJRLG9DQUNHLDhEQUFDVzs7a0RBQ0csOERBQUN1QjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDTTtrREFBRTs7Ozs7Ozs7Ozs7OzRCQUdWdEMsZ0NBQ0csOERBQUNTOztrREFDRyw4REFBQ3VCO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNNO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0I7R0EzRk0vQzs7UUFDNkNKLHFEQUFPQTtRQUl2Q0Usc0RBQVNBOzs7S0FMdEJFO0FBNkZOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeD9jOTM2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQC9jb250ZXh0L3VzZVVzZXInXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICdAL2NvbnRleHQvdXNlVXNlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IFBlcnNvbmFsSW5mbyBmcm9tICdAL2NvbXBvbmVudHMvYWNjb3VudENvbXBvbmVudHMvcGVyc29uYWxJbmZvJ1xuXG5jb25zdCBBY2NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlciwgbG9hZGluZywgZXJyb3IsIHVzZXJMb2dnZWRJbiB9ID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IFtwZXJzb25hbEluZm9PcGVuLCBzZXRQZXJzb25hbEluZm9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY2hhbmdlUGFzc3dvcmRPcGVuLCBzZXRDaGFuZ2VQYXNzd29yZE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRXZlbnRzT3Blbiwgc2V0VXNlckV2ZW50c09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGxvZ291dCgpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwicGVyc29uYWxJbmZvXCIpIHtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsSW5mb09wZW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0VXNlckV2ZW50c09wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjaGFuZ2VQYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRQZXJzb25hbEluZm9PcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFVzZXJFdmVudHNPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwidXNlckV2ZW50c1wiKSB7XG4gICAgICAgICAgICBzZXRVc2VyRXZlbnRzT3Blbih0cnVlKTtcbiAgICAgICAgICAgIHNldENoYW5nZVBhc3N3b3JkT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRQZXJzb25hbEluZm9PcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGVhc2V9PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgICBpZiAoIXVzZXIpIHJldHVybiA8ZGl2PlBsZWFzZSBsb2dpbi48L2Rpdj47XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X191cHBlcn0+XG4gICAgICAgICAgICAgICAgPGgxPkFjY291bnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX2xlZnR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX2xlZnRfdXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X2xvd2VyX2xlZnRfdXBwZXJfdG9wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLmRhdGEuYXZhdGFyID8gdXNlci5kYXRhLmF2YXRhci51cmwgOiAnL3VzZXIucG5nJ30gYWx0PVwidXNlclwiIHdpZHRoPXs1MDB9IGhlaWdodD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgcHJvZmlsZSBwaWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfbG93ZXJfbGVmdF91cHBlcl9ib3R0b219PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci5kYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0X2xvd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJwZXJzb25hbEluZm9cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5QZXJzb25hbCBJbmZvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjaGFuZ2VQYXNzd29yZFwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PkNoYW5nZSBQYXNzd29yZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwidXNlckV2ZW50c1wiIG9uQ2xpY2s9e2hhbmRsZU9wZW59Pk15IEV2ZW50czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX3JpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAge3BlcnNvbmFsSW5mb09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbmFsSW5mbyAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlUGFzc3dvcmRPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoYW5nZSBQYXNzd29yZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIFBhc3N3b3JkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRXZlbnRzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5NeSBFdmVudHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk15IEV2ZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VVc2VyIiwibG9nb3V0IiwidXNlUm91dGVyIiwiUGVyc29uYWxJbmZvIiwiQWNjb3VudCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VyTG9nZ2VkSW4iLCJwZXJzb25hbEluZm9PcGVuIiwic2V0UGVyc29uYWxJbmZvT3BlbiIsImNoYW5nZVBhc3N3b3JkT3BlbiIsInNldENoYW5nZVBhc3N3b3JkT3BlbiIsInVzZXJFdmVudHNPcGVuIiwic2V0VXNlckV2ZW50c09wZW4iLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJwdXNoIiwiaGFuZGxlT3BlbiIsImUiLCJ0YXJnZXQiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsInBsZWFzZSIsIm1lc3NhZ2UiLCJtYWluIiwiYWNjb3VudCIsImFjY291bnRfX3VwcGVyIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsImFjY291bnRfX2xvd2VyIiwiYWNjb3VudF9fbG93ZXJfbGVmdCIsImFjY291bnRfX2xvd2VyX2xlZnRfdXBwZXIiLCJhY2NvdW50X2xvd2VyX2xlZnRfdXBwZXJfdG9wIiwic3JjIiwiZGF0YSIsImF2YXRhciIsInVybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX2JvdHRvbSIsImgyIiwibmFtZSIsImFjY291bnRfX2xvd2VyX2xlZnRfbG93ZXIiLCJ1bCIsImxpIiwiYWNjb3VudF9fbG93ZXJfcmlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/account/page.jsx\n"));

/***/ })

});