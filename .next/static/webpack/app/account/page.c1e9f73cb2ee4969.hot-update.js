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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/account/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/useUser */ \"(app-pages-browser)/./src/context/useUser.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/accountComponents/personalInfo */ \"(app-pages-browser)/./src/components/accountComponents/personalInfo/index.jsx\");\n/* harmony import */ var _components_accountComponents_changePassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/accountComponents/changePassword */ \"(app-pages-browser)/./src/components/accountComponents/changePassword/index.jsx\");\n/* harmony import */ var _context_userUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/userUpdate */ \"(app-pages-browser)/./src/context/userUpdate.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Account = ()=>{\n    _s();\n    const { user, loading, error, userLoggedIn } = (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [personalInfoOpen, setPersonalInfoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [changePasswordOpen, setChangePasswordOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEventsOpen, setUserEventsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleLogout = ()=>{\n        (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.logout)();\n        router.push(\"/login\");\n    };\n    const handleOpen = (e)=>{\n        if (e.target.id === \"personalInfo\") {\n            setPersonalInfoOpen(true);\n            setChangePasswordOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"changePassword\") {\n            setChangePasswordOpen(true);\n            setPersonalInfoOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"userEvents\") {\n            setUserEventsOpen(true);\n            setChangePasswordOpen(false);\n            setPersonalInfoOpen(false);\n        }\n    };\n    const handleAvatarChange = async (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            await (0,_context_userUpdate__WEBPACK_IMPORTED_MODULE_7__.updateUserAvatar)(user._id, file); // Assuming updateUserAvatar takes userId and file\n        // You might need to re-fetch or update user data here to reflect the new avatar\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().please),\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 59,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 60,\n        columnNumber: 23\n    }, undefined);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please login.\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 61,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__upper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_left),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_left_upper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account_lower_left_upper_top),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: user.data.avatar ? user.data.avatar.url : \"/user.png\",\n                                            alt: \"user\",\n                                            width: 300,\n                                            height: 300,\n                                            quality: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>document.getElementById(\"avatarInput\").click(),\n                                        children: \"Change Profile Picture\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"avatarInput\",\n                                        type: \"file\",\n                                        style: {\n                                            display: \"none\"\n                                        },\n                                        onChange: handleAvatarChange,\n                                        accept: \"image/*\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account_lower_left_upper_bottom),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: user.data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_left_lower),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"personalInfo\",\n                                            onClick: handleOpen,\n                                            children: \"Personal Info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"changePassword\",\n                                            onClick: handleOpen,\n                                            children: \"Change Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"userEvents\",\n                                            onClick: handleOpen,\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_right),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.AnimatePresence, {\n                            mode: \"wait\",\n                            children: [\n                                personalInfoOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    user: user\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, undefined),\n                                changePasswordOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_changePassword__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 29\n                                }, undefined),\n                                userEventsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Account, \"9EJy/xmEvTuEvTNfP/Jad4FPTnY=\", false, function() {\n    return [\n        _context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDekI7QUFDSztBQUNTO0FBQ0k7QUFDRDtBQUNDO0FBQzJCO0FBQ0k7QUFDbkI7QUFDUjtBQUUvQyxNQUFNYSxVQUFVOztJQUNaLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFLEdBQUdYLHlEQUFPQTtJQUN0RCxNQUFNLENBQUNZLGtCQUFrQkMsb0JBQW9CLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNtQixvQkFBb0JDLHNCQUFzQixHQUFHcEIsK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDcUIsZ0JBQWdCQyxrQkFBa0IsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU11QixTQUFTaEIsMERBQVNBO0lBRXhCLE1BQU1pQixlQUFlO1FBQ2pCbEIsd0RBQU1BO1FBQ05pQixPQUFPRSxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNQyxhQUFhLENBQUNDO1FBQ2hCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGdCQUFnQjtZQUNoQ1gsb0JBQW9CO1lBQ3BCRSxzQkFBc0I7WUFDdEJFLGtCQUFrQjtRQUN0QjtRQUNBLElBQUlLLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGtCQUFrQjtZQUNsQ1Qsc0JBQXNCO1lBQ3RCRixvQkFBb0I7WUFDcEJJLGtCQUFrQjtRQUN0QjtRQUNBLElBQUlLLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLGNBQWM7WUFDOUJQLGtCQUFrQjtZQUNsQkYsc0JBQXNCO1lBQ3RCRixvQkFBb0I7UUFDeEI7SUFDSjtJQUdJLE1BQU1ZLHFCQUFxQixPQUFPQztRQUNsQyxNQUFNQyxPQUFPRCxNQUFNSCxNQUFNLENBQUNLLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLElBQUlELE1BQU07WUFDTixNQUFNdEIscUVBQWdCQSxDQUFDRyxLQUFLcUIsR0FBRyxFQUFFRixPQUFPLGtEQUFrRDtRQUMxRixnRkFBZ0Y7UUFFcEY7SUFDSjtJQU9BLElBQUlsQixTQUFTLHFCQUFPLDhEQUFDcUI7UUFBSUMsV0FBV2hDLGlFQUFhO2tCQUFFOzs7Ozs7SUFDbkQsSUFBSVcsT0FBTyxxQkFBTyw4REFBQ29COztZQUFLO1lBQVFwQixNQUFNdUIsT0FBTzs7Ozs7OztJQUM3QyxJQUFJLENBQUN6QixNQUFNLHFCQUFPLDhEQUFDc0I7a0JBQUk7Ozs7OztJQUd2QixxQkFDSSw4REFBQ0k7UUFBS0gsV0FBV2hDLGtFQUFjOzswQkFDM0IsOERBQUMrQjtnQkFBSUMsV0FBV2hDLHlFQUFxQjs7a0NBQ2pDLDhEQUFDc0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQU9DLFNBQVNwQjtrQ0FDYiw0RUFBQ3FCO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLZCw4REFBQ1Y7Z0JBQUlDLFdBQVdoQyx5RUFBcUI7O2tDQUNqQyw4REFBQytCO3dCQUFJQyxXQUFXaEMsOEVBQTBCOzswQ0FDdEMsOERBQUMrQjtnQ0FBSUMsV0FBV2hDLG9GQUFnQzs7a0RBQzVDLDhEQUFDK0I7d0NBQUlDLFdBQVdoQyx1RkFBbUM7a0RBQy9DLDRFQUFDRCxrREFBS0E7NENBQUMrQyxLQUFLckMsS0FBS3NDLElBQUksQ0FBQ0MsTUFBTSxHQUFHdkMsS0FBS3NDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLEdBQUc7NENBQWFDLEtBQUk7NENBQU9DLE9BQU87NENBQUtDLFFBQVE7NENBQUtDLFNBQVM7Ozs7Ozs7Ozs7O2tEQUVwSCw4REFBQ2Q7d0NBQU9DLFNBQVMsSUFBTWMsU0FBU0MsY0FBYyxDQUFDLGVBQWVDLEtBQUs7a0RBQUk7Ozs7OztrREFDdkUsOERBQUNDO3dDQUFNaEMsSUFBRzt3Q0FBY2lDLE1BQUs7d0NBQU9DLE9BQU87NENBQUVDLFNBQVM7d0NBQU87d0NBQUdDLFVBQVVuQzt3Q0FBb0JvQyxRQUFPOzs7Ozs7a0RBQ3JHLDhEQUFDL0I7d0NBQUlDLFdBQVdoQywwRkFBc0M7a0RBQ2xELDRFQUFDZ0U7c0RBQUl2RCxLQUFLc0MsSUFBSSxDQUFDa0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzNCLDhEQUFDbEM7Z0NBQUlDLFdBQVdoQyxvRkFBZ0M7MENBQzVDLDRFQUFDbUU7O3NEQUNHLDhEQUFDQzs0Q0FBRzNDLElBQUc7NENBQWVlLFNBQVNsQjtzREFBWTs7Ozs7O3NEQUMzQyw4REFBQzhDOzRDQUFHM0MsSUFBRzs0Q0FBaUJlLFNBQVNsQjtzREFBWTs7Ozs7O3NEQUM3Qyw4REFBQzhDOzRDQUFHM0MsSUFBRzs0Q0FBYWUsU0FBU2xCO3NEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJckQsOERBQUNTO3dCQUFJQyxXQUFXaEMsK0VBQTJCO2tDQUN2Qyw0RUFBQ08sMERBQWVBOzRCQUFDK0QsTUFBSzs7Z0NBQ2pCekQsa0NBQ0csOERBQUNULGtGQUFZQTtvQ0FBQ0ssTUFBTUE7Ozs7OztnQ0FFdkJNLG9DQUNHLDhEQUFDVixvRkFBY0E7Ozs7O2dDQUVsQlksZ0NBQ0csOERBQUNjOztzREFDRyw4REFBQ2lDO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNPO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQztHQW5HTS9EOztRQUM2Q1AscURBQU9BO1FBSXZDRSxzREFBU0E7OztLQUx0Qks7QUFxR04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hY2NvdW50L3BhZ2UuanN4P2M5MzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAL2NvbnRleHQvdXNlVXNlcidcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJ0AvY29udGV4dC91c2VVc2VyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5pbXBvcnQgUGVyc29uYWxJbmZvIGZyb20gJ0AvY29tcG9uZW50cy9hY2NvdW50Q29tcG9uZW50cy9wZXJzb25hbEluZm8nXG5pbXBvcnQgQ2hhbmdlUGFzc3dvcmQgZnJvbSBcIkAvY29tcG9uZW50cy9hY2NvdW50Q29tcG9uZW50cy9jaGFuZ2VQYXNzd29yZFwiXG5pbXBvcnQgeyB1cGRhdGVVc2VyQXZhdGFyIH0gZnJvbSAnQC9jb250ZXh0L3VzZXJVcGRhdGUnXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBBY2NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlciwgbG9hZGluZywgZXJyb3IsIHVzZXJMb2dnZWRJbiB9ID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IFtwZXJzb25hbEluZm9PcGVuLCBzZXRQZXJzb25hbEluZm9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY2hhbmdlUGFzc3dvcmRPcGVuLCBzZXRDaGFuZ2VQYXNzd29yZE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRXZlbnRzT3Blbiwgc2V0VXNlckV2ZW50c09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGxvZ291dCgpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwicGVyc29uYWxJbmZvXCIpIHtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsSW5mb09wZW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0VXNlckV2ZW50c09wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjaGFuZ2VQYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRQZXJzb25hbEluZm9PcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFVzZXJFdmVudHNPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwidXNlckV2ZW50c1wiKSB7XG4gICAgICAgICAgICBzZXRVc2VyRXZlbnRzT3Blbih0cnVlKTtcbiAgICAgICAgICAgIHNldENoYW5nZVBhc3N3b3JkT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRQZXJzb25hbEluZm9PcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUF2YXRhckNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckF2YXRhcih1c2VyLl9pZCwgZmlsZSk7IC8vIEFzc3VtaW5nIHVwZGF0ZVVzZXJBdmF0YXIgdGFrZXMgdXNlcklkIGFuZCBmaWxlXG4gICAgICAgICAgICAvLyBZb3UgbWlnaHQgbmVlZCB0byByZS1mZXRjaCBvciB1cGRhdGUgdXNlciBkYXRhIGhlcmUgdG8gcmVmbGVjdCB0aGUgbmV3IGF2YXRhclxuXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBcblxuXG5cbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxlYXNlfT5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gICAgaWYgKCF1c2VyKSByZXR1cm4gPGRpdj5QbGVhc2UgbG9naW4uPC9kaXY+O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fdXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxoMT5BY2NvdW50PC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0X3VwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX3RvcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dXNlci5kYXRhLmF2YXRhciA/IHVzZXIuZGF0YS5hdmF0YXIudXJsIDogJy91c2VyLnBuZyd9IGFsdD1cInVzZXJcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gcXVhbGl0eT17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXJJbnB1dCcpLmNsaWNrKCl9PkNoYW5nZSBQcm9maWxlIFBpY3R1cmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImF2YXRhcklucHV0XCIgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gb25DaGFuZ2U9e2hhbmRsZUF2YXRhckNoYW5nZX0gYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfbG93ZXJfbGVmdF91cHBlcl9ib3R0b219PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci5kYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0X2xvd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJwZXJzb25hbEluZm9cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5QZXJzb25hbCBJbmZvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjaGFuZ2VQYXNzd29yZFwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PkNoYW5nZSBQYXNzd29yZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwidXNlckV2ZW50c1wiIG9uQ2xpY2s9e2hhbmRsZU9wZW59Pk15IEV2ZW50czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX3JpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb25hbEluZm9PcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uYWxJbmZvIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZVBhc3N3b3JkT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5nZVBhc3N3b3JkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJFdmVudHNPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TXkgRXZlbnRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TXkgRXZlbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJJbWFnZSIsInN0eWxlcyIsInVzZVVzZXIiLCJsb2dvdXQiLCJ1c2VSb3V0ZXIiLCJQZXJzb25hbEluZm8iLCJDaGFuZ2VQYXNzd29yZCIsInVwZGF0ZVVzZXJBdmF0YXIiLCJBbmltYXRlUHJlc2VuY2UiLCJBY2NvdW50IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInVzZXJMb2dnZWRJbiIsInBlcnNvbmFsSW5mb09wZW4iLCJzZXRQZXJzb25hbEluZm9PcGVuIiwiY2hhbmdlUGFzc3dvcmRPcGVuIiwic2V0Q2hhbmdlUGFzc3dvcmRPcGVuIiwidXNlckV2ZW50c09wZW4iLCJzZXRVc2VyRXZlbnRzT3BlbiIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsInB1c2giLCJoYW5kbGVPcGVuIiwiZSIsInRhcmdldCIsImlkIiwiaGFuZGxlQXZhdGFyQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwiZmlsZXMiLCJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGVhc2UiLCJtZXNzYWdlIiwibWFpbiIsImFjY291bnQiLCJhY2NvdW50X191cHBlciIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJhY2NvdW50X19sb3dlciIsImFjY291bnRfX2xvd2VyX2xlZnQiLCJhY2NvdW50X19sb3dlcl9sZWZ0X3VwcGVyIiwiYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX3RvcCIsInNyYyIsImRhdGEiLCJhdmF0YXIiLCJ1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJpbnB1dCIsInR5cGUiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZSIsImFjY2VwdCIsImFjY291bnRfbG93ZXJfbGVmdF91cHBlcl9ib3R0b20iLCJoMiIsIm5hbWUiLCJhY2NvdW50X19sb3dlcl9sZWZ0X2xvd2VyIiwidWwiLCJsaSIsImFjY291bnRfX2xvd2VyX3JpZ2h0IiwibW9kZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/account/page.jsx\n"));

/***/ })

});