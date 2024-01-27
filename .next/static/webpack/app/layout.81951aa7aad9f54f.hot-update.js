"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/navbar/Navbar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _nav_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/index */ \"(app-pages-browser)/./src/components/navbar/nav/index.jsx\");\n/* harmony import */ var _barrel_optimize_names_FiMenu_react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FiMenu!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/components/navbar/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _calendly_Calendly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendly/Calendly */ \"(app-pages-browser)/./src/components/navbar/calendly/Calendly.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCalendlyModal, setShowCalendlyModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [contactPageOpen, setContactPageOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set the initial window width\n        setWindowWidth(window.innerWidth);\n        // Update the window width on resize\n        const handleResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const toggleNavOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setNavOpen((prevNavOpen)=>!prevNavOpen);\n    }, []);\n    const toggleContactPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setContactPageOpen((prevContactPageOpen)=>!prevContactPageOpen);\n    }, [\n        setContactPageOpen\n    ]);\n    const toggleCalendlyModal = ()=>{\n        setShowCalendlyModal((prevShow)=>!prevShow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container_left),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/\",\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/events\",\n                                                children: \"Events\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/community\",\n                                                children: \"Community\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container_middle),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"F365\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container_right),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/about\",\n                                                children: \"About Us\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/services\",\n                                                children: \"Services\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: toggleContactPage,\n                                            children: \"Contact Us\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleCalendlyModal,\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendlyButton),\n                                children: \"Schedule a meeting\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                                mode: \"wait\",\n                                children: showCalendlyModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_calendly_Calendly__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    onClose: toggleCalendlyModal\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 51\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().menu),\n                                onClick: toggleNavOpen,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiMenu_react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiMenu, {\n                                        style: {\n                                            fontSize: \"2rem\",\n                                            color: \"var(--container-color)\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 35\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                        mode: \"wait\",\n                        children: navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            setNavOpen: setNavOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 37\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Navbar, \"8FQjuKjxsoAMa8M9iaaxeKbRzGg=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0Q7QUFDbkM7QUFFMEM7QUFDeEM7QUFDVTtBQUNBO0FBQ1o7QUFDTztBQUNRO0FBRTNDLE1BQU1jLFNBQVM7O0lBQ1gsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLG1CQUFtQkMscUJBQXFCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNrQixhQUFhQyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNvQixpQkFBaUJDLG1CQUFtQixHQUFHckIsK0NBQVFBLENBQUM7SUFFdkRFLGdEQUFTQSxDQUFDO1FBQ04sK0JBQStCO1FBQy9CaUIsZUFBZUcsT0FBT0MsVUFBVTtRQUVoQyxvQ0FBb0M7UUFDcEMsTUFBTUMsZUFBZTtZQUNqQkwsZUFBZUcsT0FBT0MsVUFBVTtRQUNwQztRQUVBRCxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVRDtRQUNsQyxPQUFPLElBQU1GLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVGO0lBQ3RELEdBQUcsRUFBRTtJQUdMLE1BQU1HLGdCQUFnQjFCLGtEQUFXQSxDQUFDO1FBQzlCYyxXQUFXYSxDQUFBQSxjQUFlLENBQUNBO0lBQy9CLEdBQUcsRUFBRTtJQUVMLE1BQU1DLG9CQUFvQjVCLGtEQUFXQSxDQUFDO1FBQ2xDb0IsbUJBQW1CUyxDQUFBQSxzQkFBdUIsQ0FBQ0E7SUFDL0MsR0FBRztRQUFDVDtLQUFtQjtJQUd2QixNQUFNVSxzQkFBc0I7UUFDeEJkLHFCQUFxQmUsQ0FBQUEsV0FBWSxDQUFDQTtJQUN0QztJQUdBLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFPQyxXQUFXekIsa0VBQWE7c0JBQzVCLDRFQUFDMEI7Z0JBQUlELFdBQVd6QixrRUFBYTs7a0NBQ3pCLDhEQUFDNEI7d0JBQUlILFdBQVd6Qiw0RUFBdUI7OzBDQUNuQyw4REFBQzRCO2dDQUFJSCxXQUFXekIsaUZBQTRCOzBDQUN4Qyw0RUFBQytCOztzREFDRyw4REFBQ0M7c0RBQ0csNEVBQUMvQixpREFBSUE7Z0RBQUNnQyxNQUFLOzBEQUFJOzs7Ozs7Ozs7OztzREFFbkIsOERBQUNEO3NEQUNHLDRFQUFDL0IsaURBQUlBO2dEQUFDZ0MsTUFBSzswREFBVTs7Ozs7Ozs7Ozs7c0RBRXpCLDhEQUFDRDtzREFDRyw0RUFBQy9CLGlEQUFJQTtnREFBQ2dDLE1BQUs7MERBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBS3BDLDhEQUFDTDtnQ0FBSUgsV0FBV3pCLG1GQUE4QjswQ0FDMUMsNEVBQUNDLGlEQUFJQTtvQ0FBQ2dDLE1BQUs7OENBQ1AsNEVBQUNFO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUtaLDhEQUFDUDtnQ0FBSUgsV0FBV3pCLGtGQUE2QjswQ0FDekMsNEVBQUMrQjs7c0RBQ0csOERBQUNDO3NEQUNHLDRFQUFDL0IsaURBQUlBO2dEQUFDZ0MsTUFBSzswREFBUzs7Ozs7Ozs7Ozs7c0RBRXhCLDhEQUFDRDtzREFDRyw0RUFBQy9CLGlEQUFJQTtnREFBQ2dDLE1BQUs7MERBQVk7Ozs7Ozs7Ozs7O3NEQUUzQiw4REFBQ0Q7NENBQUdLLFNBQVNqQjtzREFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUt4Qyw4REFBQ2tCO2dDQUFPRCxTQUFTZjtnQ0FBcUJHLFdBQVd6QiwwRUFBcUI7MENBQUU7Ozs7OzswQ0FHeEUsOERBQUNILDBEQUFlQTtnQ0FBQzJDLE1BQUs7MENBQ2pCakMsbUNBQXFCLDhEQUFDSiwwREFBUUE7b0NBQUNzQyxTQUFTbkI7Ozs7Ozs7Ozs7OzBDQUc3Qyw4REFBQ007Z0NBQUlILFdBQVd6QixnRUFBVztnQ0FBRXFDLFNBQVNuQjswQ0FDbEMsNEVBQUN5Qjs4Q0FBSyw0RUFBQzVDLGdGQUFNQTt3Q0FBQzZDLE9BQU87NENBQUVDLFVBQVU7NENBQVFDLE9BQU87d0NBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdqRiw4REFBQ2pELDBEQUFlQTt3QkFBQzJDLE1BQUs7a0NBQ2pCbkMseUJBQVcsOERBQUNQLGtEQUFHQTs0QkFBQ1EsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJEO0dBN0ZNRjtLQUFBQTtBQStGTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzeD84MDE0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdi9pbmRleCc7XG5pbXBvcnQgeyBGaU1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgQ2FsZW5kbHkgZnJvbSAnLi9jYWxlbmRseS9DYWxlbmRseSc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBbbmF2T3Blbiwgc2V0TmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dDYWxlbmRseU1vZGFsLCBzZXRTaG93Q2FsZW5kbHlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY29udGFjdFBhZ2VPcGVuLCBzZXRDb250YWN0UGFnZU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHdpbmRvdyB3aWR0aFxuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3aW5kb3cgd2lkdGggb24gcmVzaXplXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgY29uc3QgdG9nZ2xlTmF2T3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0TmF2T3BlbihwcmV2TmF2T3BlbiA9PiAhcHJldk5hdk9wZW4pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNvbnRhY3RQYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRDb250YWN0UGFnZU9wZW4ocHJldkNvbnRhY3RQYWdlT3BlbiA9PiAhcHJldkNvbnRhY3RQYWdlT3Blbik7XG4gICAgfSwgW3NldENvbnRhY3RQYWdlT3Blbl0pXG5cblxuICAgIGNvbnN0IHRvZ2dsZUNhbGVuZGx5TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dDYWxlbmRseU1vZGFsKHByZXZTaG93ID0+ICFwcmV2U2hvdyk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9jb250YWluZXJfbGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzXCI+RXZlbnRzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbW11bml0eVwiPkNvbW11bml0eTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX2NvbnRhaW5lcl9taWRkbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEYzNjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX2NvbnRhaW5lcl9yaWdodH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQgVXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5TZXJ2aWNlczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RvZ2dsZUNvbnRhY3RQYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNhbGVuZGx5TW9kYWx9IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGx5QnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZSBhIG1lZXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0NhbGVuZGx5TW9kYWwgJiYgPENhbGVuZGx5IG9uQ2xvc2U9e3RvZ2dsZUNhbGVuZGx5TW9kYWx9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gb25DbGljaz17dG9nZ2xlTmF2T3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZpTWVudSBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGNvbG9yOiBcInZhcigtLWNvbnRhaW5lci1jb2xvcilcIiB9fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZPcGVuICYmIDxOYXYgc2V0TmF2T3Blbj17c2V0TmF2T3Blbn0gLz59XG4gICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIDwvbmF2ID5cblxuXG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiSGVhZCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIk5hdiIsIkZpTWVudSIsInN0eWxlcyIsIkxpbmsiLCJkeW5hbWljIiwiQ2FsZW5kbHkiLCJOYXZiYXIiLCJuYXZPcGVuIiwic2V0TmF2T3BlbiIsInNob3dDYWxlbmRseU1vZGFsIiwic2V0U2hvd0NhbGVuZGx5TW9kYWwiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwiY29udGFjdFBhZ2VPcGVuIiwic2V0Q29udGFjdFBhZ2VPcGVuIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlTmF2T3BlbiIsInByZXZOYXZPcGVuIiwidG9nZ2xlQ29udGFjdFBhZ2UiLCJwcmV2Q29udGFjdFBhZ2VPcGVuIiwidG9nZ2xlQ2FsZW5kbHlNb2RhbCIsInByZXZTaG93IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwibmF2YmFyIiwiZGl2IiwibmF2YmFyX2NvbnRhaW5lciIsIm5hdmJhcl9jb250YWluZXJfbGVmdCIsInVsIiwibGkiLCJocmVmIiwibmF2YmFyX2NvbnRhaW5lcl9taWRkbGUiLCJoMiIsIm5hdmJhcl9jb250YWluZXJfcmlnaHQiLCJvbkNsaWNrIiwiYnV0dG9uIiwiY2FsZW5kbHlCdXR0b24iLCJtb2RlIiwib25DbG9zZSIsIm1lbnUiLCJzcGFuIiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar/Navbar.jsx\n"));

/***/ })

});