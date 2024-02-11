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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/account/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _context_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/useUser */ \"(app-pages-browser)/./src/context/useUser.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/accountComponents/personalInfo */ \"(app-pages-browser)/./src/components/accountComponents/personalInfo/index.jsx\");\n/* harmony import */ var _components_accountComponents_changePassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/accountComponents/changePassword */ \"(app-pages-browser)/./src/components/accountComponents/changePassword/index.jsx\");\n/* harmony import */ var _context_userUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/userUpdate */ \"(app-pages-browser)/./src/context/userUpdate.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Account = ()=>{\n    _s();\n    const { user, loading, error, userLoggedIn } = (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [personalInfoOpen, setPersonalInfoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [changePasswordOpen, setChangePasswordOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userEventsOpen, setUserEventsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleLogout = ()=>{\n        (0,_context_useUser__WEBPACK_IMPORTED_MODULE_3__.logout)();\n        router.push(\"/login\");\n    };\n    const handleOpen = (e)=>{\n        if (e.target.id === \"personalInfo\") {\n            setPersonalInfoOpen(true);\n            setChangePasswordOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"changePassword\") {\n            setChangePasswordOpen(true);\n            setPersonalInfoOpen(false);\n            setUserEventsOpen(false);\n        }\n        if (e.target.id === \"userEvents\") {\n            setUserEventsOpen(true);\n            setChangePasswordOpen(false);\n            setPersonalInfoOpen(false);\n        }\n    };\n    const handleAvatarChange = async (event)=>{\n        const file = event.target.files[0];\n        const formData = new FormData();\n        formData.append(\"avatar\", file);\n        const token = localStorage.getItem(\"token\");\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].patch(\"https://events-nsih.onrender.com/user/\".concat(user.data._id), formData, {\n                headers: {\n                    Authorization: {\n                        token\n                    },\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            console.log(response.data);\n            window.location.reload();\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().please),\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 72,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 73,\n        columnNumber: 23\n    }, undefined);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Please login.\"\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 74,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account__upper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account__lower),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account__lower_left),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account__lower_left_upper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account_lower_left_upper_top),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: user.data.avatar ? user.data.avatar.url : \"/user.png\",\n                                            alt: \"user\",\n                                            width: 300,\n                                            height: 300,\n                                            quality: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account_lower_left_upper_bottom),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: user.data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account__lower_left_lower),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"personalInfo\",\n                                            onClick: handleOpen,\n                                            children: \"Personal Info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"changePassword\",\n                                            onClick: handleOpen,\n                                            children: \"Change Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            id: \"userEvents\",\n                                            onClick: handleOpen,\n                                            children: \"My Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_9___default().account__lower_right),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.AnimatePresence, {\n                            mode: \"wait\",\n                            children: [\n                                personalInfoOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_personalInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    user: user\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 46\n                                }, undefined),\n                                changePasswordOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accountComponents_changePassword__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 48\n                                }, undefined),\n                                userEventsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"My Events\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 49\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 44\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/f356/src/app/account/page.jsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Account, \"9EJy/xmEvTuEvTNfP/Jad4FPTnY=\", false, function() {\n    return [\n        _context_useUser__WEBPACK_IMPORTED_MODULE_3__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ3pCO0FBQ0s7QUFDUztBQUNJO0FBQ0Q7QUFDQztBQUMyQjtBQUNJO0FBQ25CO0FBQ1I7QUFFL0MsTUFBTWEsVUFBVTs7SUFDWixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRSxHQUFHWCx5REFBT0E7SUFDdEQsTUFBTSxDQUFDWSxrQkFBa0JDLG9CQUFvQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDbUIsb0JBQW9CQyxzQkFBc0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ3FCLGdCQUFnQkMsa0JBQWtCLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNdUIsU0FBU2hCLDBEQUFTQTtJQUV4QixNQUFNaUIsZUFBZTtRQUNqQmxCLHdEQUFNQTtRQUNOaUIsT0FBT0UsSUFBSSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsYUFBYSxDQUFDQztRQUNoQixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxnQkFBZ0I7WUFDaENYLG9CQUFvQjtZQUNwQkUsc0JBQXNCO1lBQ3RCRSxrQkFBa0I7UUFDdEI7UUFDQSxJQUFJSyxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxrQkFBa0I7WUFDbENULHNCQUFzQjtZQUN0QkYsb0JBQW9CO1lBQ3BCSSxrQkFBa0I7UUFDdEI7UUFDQSxJQUFJSyxFQUFFQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxjQUFjO1lBQzlCUCxrQkFBa0I7WUFDbEJGLHNCQUFzQjtZQUN0QkYsb0JBQW9CO1FBQ3hCO0lBQ0o7SUFHQSxNQUFNWSxxQkFBcUIsT0FBT0M7UUFDOUIsTUFBTUMsT0FBT0QsTUFBTUgsTUFBTSxDQUFDSyxLQUFLLENBQUMsRUFBRTtRQUNsQyxNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsVUFBVUo7UUFDMUIsTUFBTUssUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBRW5DLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU10Qyw2Q0FBS0EsQ0FBQ3VDLEtBQUssQ0FBQyx5Q0FBdUQsT0FBZDVCLEtBQUs2QixJQUFJLENBQUNDLEdBQUcsR0FBSVQsVUFBVTtnQkFDbkdVLFNBQVM7b0JBQ0xDLGVBQWU7d0JBQUVSO29CQUFNO29CQUN2QixnQkFBZ0I7Z0JBQ3BCO1lBQ0o7WUFDQVMsUUFBUUMsR0FBRyxDQUFDUCxTQUFTRSxJQUFJO1lBQ3pCTSxPQUFPQyxRQUFRLENBQUNDLE1BQU07UUFDMUIsRUFDQSxPQUFPQyxLQUFLO1lBQ1JMLFFBQVEvQixLQUFLLENBQUNvQztRQUNsQjtJQUVKO0lBT0EsSUFBSXJDLFNBQVMscUJBQU8sOERBQUNzQztRQUFJQyxXQUFXakQsaUVBQWE7a0JBQUU7Ozs7OztJQUNuRCxJQUFJVyxPQUFPLHFCQUFPLDhEQUFDcUM7O1lBQUs7WUFBUXJDLE1BQU13QyxPQUFPOzs7Ozs7O0lBQzdDLElBQUksQ0FBQzFDLE1BQU0scUJBQU8sOERBQUN1QztrQkFBSTs7Ozs7O0lBR3ZCLHFCQUNJLDhEQUFDSTtRQUFLSCxXQUFXakQsa0VBQWM7OzBCQUMzQiw4REFBQ2dEO2dCQUFJQyxXQUFXakQseUVBQXFCOztrQ0FDakMsOERBQUN1RDtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBT0MsU0FBU3JDO2tDQUNiLDRFQUFDc0M7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDVjtnQkFBSUMsV0FBV2pELHlFQUFxQjs7a0NBQ2pDLDhEQUFDZ0Q7d0JBQUlDLFdBQVdqRCw4RUFBMEI7OzBDQUN0Qyw4REFBQ2dEO2dDQUFJQyxXQUFXakQsb0ZBQWdDOztrREFDNUMsOERBQUNnRDt3Q0FBSUMsV0FBV2pELHVGQUFtQztrREFDL0MsNEVBQUNELGtEQUFLQTs0Q0FBQ2dFLEtBQUt0RCxLQUFLNkIsSUFBSSxDQUFDMEIsTUFBTSxHQUFHdkQsS0FBSzZCLElBQUksQ0FBQzBCLE1BQU0sQ0FBQ0MsR0FBRyxHQUFHOzRDQUFhQyxLQUFJOzRDQUFPQyxPQUFPOzRDQUFLQyxRQUFROzRDQUFLQyxTQUFTOzs7Ozs7Ozs7OztrREFLcEgsOERBQUNyQjt3Q0FBSUMsV0FBV2pELDBGQUFzQztrREFDbEQsNEVBQUN1RTtzREFBSTlELEtBQUs2QixJQUFJLENBQUNrQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHM0IsOERBQUN4QjtnQ0FBSUMsV0FBV2pELG9GQUFnQzswQ0FDNUMsNEVBQUMwRTs7c0RBQ0csOERBQUNDOzRDQUFHbEQsSUFBRzs0Q0FBZWdDLFNBQVNuQztzREFBWTs7Ozs7O3NEQUMzQyw4REFBQ3FEOzRDQUFHbEQsSUFBRzs0Q0FBaUJnQyxTQUFTbkM7c0RBQVk7Ozs7OztzREFDN0MsOERBQUNxRDs0Q0FBR2xELElBQUc7NENBQWFnQyxTQUFTbkM7c0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtyRCw4REFBQzBCO3dCQUFJQyxXQUFXakQsK0VBQTJCO2tDQUN2Qyw0RUFBQ08sMkRBQWVBOzRCQUFDc0UsTUFBSzs7Z0NBQ2pCaEUsa0NBQW9CLDhEQUFDVCxrRkFBWUE7b0NBQUNLLE1BQU1BOzs7Ozs7Z0NBQ3hDTSxvQ0FBc0IsOERBQUNWLG9GQUFjQTs7Ozs7Z0NBQ3JDWSxnQ0FBa0IsOERBQUMrQjs4Q0FBSSw0RUFBQ3VCO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BEO0dBMUdNL0Q7O1FBQzZDUCxxREFBT0E7UUFJdkNFLHNEQUFTQTs7O0tBTHRCSztBQTRHTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FjY291bnQvcGFnZS5qc3g/YzkzNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0AvY29udGV4dC91c2VVc2VyJ1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnQC9jb250ZXh0L3VzZVVzZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcbmltcG9ydCBQZXJzb25hbEluZm8gZnJvbSAnQC9jb21wb25lbnRzL2FjY291bnRDb21wb25lbnRzL3BlcnNvbmFsSW5mbydcbmltcG9ydCBDaGFuZ2VQYXNzd29yZCBmcm9tIFwiQC9jb21wb25lbnRzL2FjY291bnRDb21wb25lbnRzL2NoYW5nZVBhc3N3b3JkXCJcbmltcG9ydCB7IHVwZGF0ZVVzZXJBdmF0YXIgfSBmcm9tICdAL2NvbnRleHQvdXNlclVwZGF0ZSdcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IEFjY291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyLCBsb2FkaW5nLCBlcnJvciwgdXNlckxvZ2dlZEluIH0gPSB1c2VVc2VyKCk7XG4gICAgY29uc3QgW3BlcnNvbmFsSW5mb09wZW4sIHNldFBlcnNvbmFsSW5mb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjaGFuZ2VQYXNzd29yZE9wZW4sIHNldENoYW5nZVBhc3N3b3JkT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJFdmVudHNPcGVuLCBzZXRVc2VyRXZlbnRzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJwZXJzb25hbEluZm9cIikge1xuICAgICAgICAgICAgc2V0UGVyc29uYWxJbmZvT3Blbih0cnVlKTtcbiAgICAgICAgICAgIHNldENoYW5nZVBhc3N3b3JkT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRVc2VyRXZlbnRzT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImNoYW5nZVBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldENoYW5nZVBhc3N3b3JkT3Blbih0cnVlKTtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsSW5mb09wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0VXNlckV2ZW50c09wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ1c2VyRXZlbnRzXCIpIHtcbiAgICAgICAgICAgIHNldFVzZXJFdmVudHNPcGVuKHRydWUpO1xuICAgICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsSW5mb09wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVBdmF0YXJDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdmF0YXInLCBmaWxlKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChgaHR0cHM6Ly9ldmVudHMtbnNpaC5vbnJlbmRlci5jb20vdXNlci8ke3VzZXIuZGF0YS5faWR9YCwgZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHsgdG9rZW4gfSxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuXG5cblxuXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsZWFzZX0+TG9hZGluZy4uLjwvZGl2PjtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2ID5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICAgIGlmICghdXNlcikgcmV0dXJuIDxkaXY+UGxlYXNlIGxvZ2luLjwvZGl2PjtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX3VwcGVyfT5cbiAgICAgICAgICAgICAgICA8aDE+QWNjb3VudDwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJfbGVmdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9fbG93ZXJfbGVmdF91cHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfbG93ZXJfbGVmdF91cHBlcl90b3B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIuZGF0YS5hdmF0YXIgPyB1c2VyLmRhdGEuYXZhdGFyLnVybCA6ICcvdXNlci5wbmcnfSBhbHQ9XCJ1c2VyXCIgd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IHF1YWxpdHk9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX2JvdHRvbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLmRhdGEubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRfX2xvd2VyX2xlZnRfbG93ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInBlcnNvbmFsSW5mb1wiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PlBlcnNvbmFsIEluZm88L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImNoYW5nZVBhc3N3b3JkXCIgb25DbGljaz17aGFuZGxlT3Blbn0+Q2hhbmdlIFBhc3N3b3JkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJ1c2VyRXZlbnRzXCIgb25DbGljaz17aGFuZGxlT3Blbn0+TXkgRXZlbnRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50X19sb3dlcl9yaWdodH0+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT0nd2FpdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uYWxJbmZvT3BlbiAmJiA8UGVyc29uYWxJbmZvIHVzZXI9e3VzZXJ9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZVBhc3N3b3JkT3BlbiAmJiA8Q2hhbmdlUGFzc3dvcmQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckV2ZW50c09wZW4gJiYgPGRpdj48aDI+TXkgRXZlbnRzPC9oMj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJJbWFnZSIsInN0eWxlcyIsInVzZVVzZXIiLCJsb2dvdXQiLCJ1c2VSb3V0ZXIiLCJQZXJzb25hbEluZm8iLCJDaGFuZ2VQYXNzd29yZCIsInVwZGF0ZVVzZXJBdmF0YXIiLCJBbmltYXRlUHJlc2VuY2UiLCJBY2NvdW50IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInVzZXJMb2dnZWRJbiIsInBlcnNvbmFsSW5mb09wZW4iLCJzZXRQZXJzb25hbEluZm9PcGVuIiwiY2hhbmdlUGFzc3dvcmRPcGVuIiwic2V0Q2hhbmdlUGFzc3dvcmRPcGVuIiwidXNlckV2ZW50c09wZW4iLCJzZXRVc2VyRXZlbnRzT3BlbiIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsInB1c2giLCJoYW5kbGVPcGVuIiwiZSIsInRhcmdldCIsImlkIiwiaGFuZGxlQXZhdGFyQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJwYXRjaCIsImRhdGEiLCJfaWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsInBsZWFzZSIsIm1lc3NhZ2UiLCJtYWluIiwiYWNjb3VudCIsImFjY291bnRfX3VwcGVyIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsImFjY291bnRfX2xvd2VyIiwiYWNjb3VudF9fbG93ZXJfbGVmdCIsImFjY291bnRfX2xvd2VyX2xlZnRfdXBwZXIiLCJhY2NvdW50X2xvd2VyX2xlZnRfdXBwZXJfdG9wIiwic3JjIiwiYXZhdGFyIiwidXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwiYWNjb3VudF9sb3dlcl9sZWZ0X3VwcGVyX2JvdHRvbSIsImgyIiwibmFtZSIsImFjY291bnRfX2xvd2VyX2xlZnRfbG93ZXIiLCJ1bCIsImxpIiwiYWNjb3VudF9fbG93ZXJfcmlnaHQiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/account/page.jsx\n"));

/***/ })

});