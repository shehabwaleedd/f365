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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/account/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/useUser */ \"(app-pages-browser)/./src/context/useUser.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/accountComponents/personalInfo */ \"(app-pages-browser)/./src/components/accountComponents/personalInfo/index.jsx\");\n/* harmony import */ var _components_accountComponents_changePassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/accountComponents/changePassword */ \"(app-pages-browser)/./src/components/accountComponents/changePassword/index.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Account = ()=>{\n    _s();\n    const { user, loading, error, userLoggedIn } = (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [personalInfoOpen, setPersonalInfoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [changePasswordOpen, setChangePasswordOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEventsOpen, setUserEventsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const token = localStorage.getItem(\"token\");\n    const handleLogout = ()=>{\n        (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.logout)();\n        router.push(\"/login\");\n    };\n    const handleOpen = (e)=>{\n        if (e.target.id === \"personalInfo\") {\n            setPersonalInfoOpen(true);\n            setChangePasswordOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"changePassword\") {\n            setChangePasswordOpen(true);\n            setPersonalInfoOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"userEvents\") {\n            setUserEventsOpen(true);\n            setChangePasswordOpen(false);\n            setPersonalInfoOpen(false);\n        }\n    };\n    const handleAvatarChange = async (event)=>{\n        const file = event.target.files[0];\n        const formData = new FormData();\n        formData.append(\"avatar\", file);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"https://events-nsih.onrender.com/user\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\",\n                    token\n                }\n            });\n            console.log(response.data);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().please),\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 73,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 74,\n        columnNumber: 23\n    }, undefined);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please login.\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 75,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__upper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_left),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_left_upper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account_lower_left_upper_top),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: user.data.avatar ? user.data.avatar.url : \"/user.png\",\n                                            alt: \"user\",\n                                            width: 300,\n                                            height: 300,\n                                            quality: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account_lower_left_upper_middle),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"file\",\n                                                id: \"avatar\",\n                                                name: \"avatar\",\n                                                accept: \"image/*\",\n                                                onChange: handleAvatarChange\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"avatar\",\n                                                children: \"Change Avatar\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account_lower_left_upper_bottom),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: user.data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_left_lower),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"personalInfo\",\n                                            onClick: handleOpen,\n                                            children: \"Personal Info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"changePassword\",\n                                            onClick: handleOpen,\n                                            children: \"Change Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"userEvents\",\n                                            onClick: handleOpen,\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().account__lower_right),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.AnimatePresence, {\n                            mode: \"wait\",\n                            children: [\n                                personalInfoOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    user: user\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 46\n                                }, undefined),\n                                changePasswordOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_changePassword__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 48\n                                }, undefined),\n                                userEventsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"My Events\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 49\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 44\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Account, \"9EJy/xmEvTuEvTNfP/Jad4FPTnY=\", false, function() {\n    return [\n        _context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDekI7QUFDSztBQUNTO0FBQ0k7QUFDRDtBQUNDO0FBQzJCO0FBQ0k7QUFDM0I7QUFFL0MsTUFBTVksVUFBVTs7SUFDWixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRSxHQUFHVix5REFBT0E7SUFDdEQsTUFBTSxDQUFDVyxrQkFBa0JDLG9CQUFvQixHQUFHakIsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDa0Isb0JBQW9CQyxzQkFBc0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ29CLGdCQUFnQkMsa0JBQWtCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNc0IsU0FBU2YsMERBQVNBO0lBQ3hCLE1BQU1nQixRQUFRQyxhQUFhQyxPQUFPLENBQUM7SUFFbkMsTUFBTUMsZUFBZTtRQUNqQnBCLHdEQUFNQTtRQUNOZ0IsT0FBT0ssSUFBSSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsYUFBYSxDQUFDQztRQUNoQixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxnQkFBZ0I7WUFDaENkLG9CQUFvQjtZQUNwQkUsc0JBQXNCO1lBQ3RCRSxrQkFBa0I7UUFDdEI7UUFDQSxJQUFJUSxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxrQkFBa0I7WUFDbENaLHNCQUFzQjtZQUN0QkYsb0JBQW9CO1lBQ3BCSSxrQkFBa0I7UUFDdEI7UUFDQSxJQUFJUSxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxjQUFjO1lBQzlCVixrQkFBa0I7WUFDbEJGLHNCQUFzQjtZQUN0QkYsb0JBQW9CO1FBQ3hCO0lBQ0o7SUFHQSxNQUFNZSxxQkFBcUIsT0FBT0M7UUFDOUIsTUFBTUMsT0FBT0QsTUFBTUgsTUFBTSxDQUFDSyxLQUFLLENBQUMsRUFBRTtRQUNsQyxNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsVUFBVUo7UUFFMUIsSUFBSTtZQUNBLE1BQU1LLFdBQVcsTUFBTXJDLDZDQUFLQSxDQUFDc0MsSUFBSSxDQUFDLHlDQUF5Q0osVUFBVTtnQkFDakZLLFNBQVM7b0JBQ0wsZ0JBQWdCO29CQUNoQmxCO2dCQUNKO1lBQ0o7WUFDQW1CLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0ssSUFBSTtRQUM3QixFQUNBLE9BQU9DLEtBQUs7WUFDUkgsUUFBUTVCLEtBQUssQ0FBQytCO1FBQ2xCO0lBS0o7SUFPQSxJQUFJaEMsU0FBUyxxQkFBTyw4REFBQ2lDO1FBQUlDLFdBQVczQyxpRUFBYTtrQkFBRTs7Ozs7O0lBQ25ELElBQUlVLE9BQU8scUJBQU8sOERBQUNnQzs7WUFBSztZQUFRaEMsTUFBTW1DLE9BQU87Ozs7Ozs7SUFDN0MsSUFBSSxDQUFDckMsTUFBTSxxQkFBTyw4REFBQ2tDO2tCQUFJOzs7Ozs7SUFHdkIscUJBQ0ksOERBQUNJO1FBQUtILFdBQVczQyxrRUFBYzs7MEJBQzNCLDhEQUFDMEM7Z0JBQUlDLFdBQVczQyx5RUFBcUI7O2tDQUNqQyw4REFBQ2lEO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUFPQyxTQUFTN0I7a0NBQ2IsNEVBQUM4QjtzQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUNWO2dCQUFJQyxXQUFXM0MseUVBQXFCOztrQ0FDakMsOERBQUMwQzt3QkFBSUMsV0FBVzNDLDhFQUEwQjs7MENBQ3RDLDhEQUFDMEM7Z0NBQUlDLFdBQVczQyxvRkFBZ0M7O2tEQUM1Qyw4REFBQzBDO3dDQUFJQyxXQUFXM0MsdUZBQW1DO2tEQUMvQyw0RUFBQ0Qsa0RBQUtBOzRDQUFDMEQsS0FBS2pELEtBQUtnQyxJQUFJLENBQUNrQixNQUFNLEdBQUdsRCxLQUFLZ0MsSUFBSSxDQUFDa0IsTUFBTSxDQUFDQyxHQUFHLEdBQUc7NENBQWFDLEtBQUk7NENBQU9DLE9BQU87NENBQUtDLFFBQVE7NENBQUtDLFNBQVM7Ozs7Ozs7Ozs7O2tEQUdwSCw4REFBQ3JCO3dDQUFJQyxXQUFXM0MsMEZBQXNDOzswREFDbEQsOERBQUNpRTtnREFBTUMsTUFBSztnREFBT3ZDLElBQUc7Z0RBQVN3QyxNQUFLO2dEQUFTQyxRQUFPO2dEQUFVQyxVQUFVekM7Ozs7OzswREFDeEUsOERBQUMwQztnREFBTUMsU0FBUTswREFBUzs7Ozs7Ozs7Ozs7O2tEQUU1Qiw4REFBQzdCO3dDQUFJQyxXQUFXM0MsMEZBQXNDO2tEQUNsRCw0RUFBQ3lFO3NEQUFJakUsS0FBS2dDLElBQUksQ0FBQzJCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ3pCO2dDQUFJQyxXQUFXM0Msb0ZBQWdDOzBDQUM1Qyw0RUFBQzJFOztzREFDRyw4REFBQ0M7NENBQUdqRCxJQUFHOzRDQUFld0IsU0FBUzNCO3NEQUFZOzs7Ozs7c0RBQzNDLDhEQUFDb0Q7NENBQUdqRCxJQUFHOzRDQUFpQndCLFNBQVMzQjtzREFBWTs7Ozs7O3NEQUM3Qyw4REFBQ29EOzRDQUFHakQsSUFBRzs0Q0FBYXdCLFNBQVMzQjtzREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3JELDhEQUFDa0I7d0JBQUlDLFdBQVczQywrRUFBMkI7a0NBQ3ZDLDRFQUFDTSwwREFBZUE7NEJBQUN3RSxNQUFLOztnQ0FDakJsRSxrQ0FBb0IsOERBQUNSLGtGQUFZQTtvQ0FBQ0ksTUFBTUE7Ozs7OztnQ0FDeENNLG9DQUFzQiw4REFBQ1Qsb0ZBQWNBOzs7OztnQ0FDckNXLGdDQUFrQiw4REFBQzBCOzhDQUFJLDRFQUFDK0I7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEQ7R0E5R01sRTs7UUFDNkNOLHFEQUFPQTtRQUl2Q0Usc0RBQVNBOzs7S0FMdEJJO0FBZ0hOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeD9jOTM2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQC9jb250ZXh0L3VzZVVzZXInXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICdAL2NvbnRleHQvdXNlVXNlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IFBlcnNvbmFsSW5mbyBmcm9tICdAL2NvbXBvbmVudHMvYWNjb3VudENvbXBvbmVudHMvcGVyc29uYWxJbmZvJ1xuaW1wb3J0IENoYW5nZVBhc3N3b3JkIGZyb20gXCJAL2NvbXBvbmVudHMvYWNjb3VudENvbXBvbmVudHMvY2hhbmdlUGFzc3dvcmRcIlxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgQWNjb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHVzZXIsIGxvYWRpbmcsIGVycm9yLCB1c2VyTG9nZ2VkSW4gfSA9IHVzZVVzZXIoKTtcbiAgICBjb25zdCBbcGVyc29uYWxJbmZvT3Blbiwgc2V0UGVyc29uYWxJbmZvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NoYW5nZVBhc3N3b3JkT3Blbiwgc2V0Q2hhbmdlUGFzc3dvcmRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlckV2ZW50c09wZW4sIHNldFVzZXJFdmVudHNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGxvZ291dCgpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwicGVyc29uYWxJbmZvXCIpIHtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsSW5mb09wZW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0VXNlckV2ZW50c09wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjaGFuZ2VQYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICBzZXRQZXJzb25hbEluZm9PcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFVzZXJFdmVudHNPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwidXNlckV2ZW50c1wiKSB7XG4gICAgICAgICAgICBzZXRVc2VyRXZlbnRzT3Blbih0cnVlKTtcbiAgICAgICAgICAgIHNldENoYW5nZVBhc3N3b3JkT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRQZXJzb25hbEluZm9PcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlQXZhdGFyQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgZmlsZSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9ldmVudHMtbnNpaC5vbnJlbmRlci5jb20vdXNlcicsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICAgICAgICB0b2tlblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9XG5cblxuXG5cbiAgICB9O1xuXG5cblxuXG5cblxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGVhc2V9PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgICBpZiAoIXVzZXIpIHJldHVybiA8ZGl2PlBsZWFzZSBsb2dpbi48L2Rpdj47XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X191cHBlcn0+XG4gICAgICAgICAgICAgICAgPGgxPkFjY291bnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX2xlZnR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX2xlZnRfdXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X2xvd2VyX2xlZnRfdXBwZXJfdG9wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLmRhdGEuYXZhdGFyID8gdXNlci5kYXRhLmF2YXRhci51cmwgOiAnL3VzZXIucG5nJ30gYWx0PVwidXNlclwiIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSBxdWFsaXR5PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X2xvd2VyX2xlZnRfdXBwZXJfbWlkZGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImF2YXRhclwiIG5hbWU9XCJhdmF0YXJcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e2hhbmRsZUF2YXRhckNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImF2YXRhclwiPkNoYW5nZSBBdmF0YXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfbG93ZXJfbGVmdF91cHBlcl9ib3R0b219PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci5kYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9sZWZ0X2xvd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJwZXJzb25hbEluZm9cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5QZXJzb25hbCBJbmZvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjaGFuZ2VQYXNzd29yZFwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PkNoYW5nZSBQYXNzd29yZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwidXNlckV2ZW50c1wiIG9uQ2xpY2s9e2hhbmRsZU9wZW59Pk15IEV2ZW50czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJfcmlnaHR9PlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9J3dhaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3BlcnNvbmFsSW5mb09wZW4gJiYgPFBlcnNvbmFsSW5mbyB1c2VyPXt1c2VyfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFuZ2VQYXNzd29yZE9wZW4gJiYgPENoYW5nZVBhc3N3b3JkIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJFdmVudHNPcGVuICYmIDxkaXY+PGgyPk15IEV2ZW50czwvaDI+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VVc2VyIiwibG9nb3V0IiwidXNlUm91dGVyIiwiUGVyc29uYWxJbmZvIiwiQ2hhbmdlUGFzc3dvcmQiLCJBbmltYXRlUHJlc2VuY2UiLCJBY2NvdW50IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInVzZXJMb2dnZWRJbiIsInBlcnNvbmFsSW5mb09wZW4iLCJzZXRQZXJzb25hbEluZm9PcGVuIiwiY2hhbmdlUGFzc3dvcmRPcGVuIiwic2V0Q2hhbmdlUGFzc3dvcmRPcGVuIiwidXNlckV2ZW50c09wZW4iLCJzZXRVc2VyRXZlbnRzT3BlbiIsInJvdXRlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUxvZ291dCIsInB1c2giLCJoYW5kbGVPcGVuIiwiZSIsInRhcmdldCIsImlkIiwiaGFuZGxlQXZhdGFyQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwicGxlYXNlIiwibWVzc2FnZSIsIm1haW4iLCJhY2NvdW50IiwiYWNjb3VudF9fdXBwZXIiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwiYWNjb3VudF9fbG93ZXIiLCJhY2NvdW50X19sb3dlcl9sZWZ0IiwiYWNjb3VudF9fbG93ZXJfbGVmdF91cHBlciIsImFjY291bnRfbG93ZXJfbGVmdF91cHBlcl90b3AiLCJzcmMiLCJhdmF0YXIiLCJ1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJhY2NvdW50X2xvd2VyX2xlZnRfdXBwZXJfbWlkZGxlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIiwiYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX2JvdHRvbSIsImgyIiwiYWNjb3VudF9fbG93ZXJfbGVmdF9sb3dlciIsInVsIiwibGkiLCJhY2NvdW50X19sb3dlcl9yaWdodCIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/account/page.jsx\n"));

/***/ })

});