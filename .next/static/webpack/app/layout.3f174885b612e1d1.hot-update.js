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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _nav_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/index */ \"(app-pages-browser)/./src/components/navbar/nav/index.jsx\");\n/* harmony import */ var _barrel_optimize_names_FiMenu_react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FiMenu!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/components/navbar/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _calendly_Calendly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendly/Calendly */ \"(app-pages-browser)/./src/components/navbar/calendly/Calendly.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCalendlyModal, setShowCalendlyModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set the initial window width\n        setWindowWidth(window.innerWidth);\n        // Update the window width on resize\n        const handleResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const toggleNavOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setNavOpen((prevNavOpen)=>!prevNavOpen);\n    }, []);\n    const toggleCalendlyModal = ()=>{\n        setShowCalendlyModal((prevShow)=>!prevShow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container_left),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/\",\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/events\",\n                                                children: \"Events\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/community\",\n                                                children: \"Community\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container_middle),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"F365\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbar_container_right),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/about\",\n                                                children: \"About Us\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/services\",\n                                                children: \"Services\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/contact\",\n                                                children: \"Contact Us\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleCalendlyModal,\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendlyButton),\n                                children: \"Schedule a meeting\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                                mode: \"wait\",\n                                children: showCalendlyModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_calendly_Calendly__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    onClose: toggleCalendlyModal\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 51\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().menu),\n                                onClick: toggleNavOpen,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiMenu_react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiMenu, {\n                                        style: {\n                                            fontSize: \"2rem\",\n                                            color: \"var(--container-color)\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 35\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                        mode: \"wait\",\n                        children: navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            setNavOpen: setNavOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 37\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/shehabwaleed/Development/work/f356/src/components/navbar/Navbar.jsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Navbar, \"SlP3Mw79gPAODqPQFgaYe0+Q6sU=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0Q7QUFDbkM7QUFFMEM7QUFDeEM7QUFDVTtBQUNBO0FBQ1o7QUFDTztBQUNRO0FBRTNDLE1BQU1jLFNBQVM7O0lBQ1gsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLG1CQUFtQkMscUJBQXFCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNrQixhQUFhQyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUUvQ0UsZ0RBQVNBLENBQUM7UUFDTiwrQkFBK0I7UUFDL0JpQixlQUFlQyxPQUFPQyxVQUFVO1FBRWhDLG9DQUFvQztRQUNwQyxNQUFNQyxlQUFlO1lBQ2pCSCxlQUFlQyxPQUFPQyxVQUFVO1FBQ3BDO1FBRUFELE9BQU9HLGdCQUFnQixDQUFDLFVBQVVEO1FBQ2xDLE9BQU8sSUFBTUYsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUY7SUFDdEQsR0FBRyxFQUFFO0lBR0wsTUFBTUcsZ0JBQWdCeEIsa0RBQVdBLENBQUM7UUFDOUJjLFdBQVdXLENBQUFBLGNBQWUsQ0FBQ0E7SUFDL0IsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsc0JBQXNCO1FBQ3hCVixxQkFBcUJXLENBQUFBLFdBQVksQ0FBQ0E7SUFDdEM7SUFHQSxxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBT0MsV0FBV3JCLGtFQUFhO3NCQUM1Qiw0RUFBQ3NCO2dCQUFJRCxXQUFXckIsa0VBQWE7O2tDQUN6Qiw4REFBQ3dCO3dCQUFJSCxXQUFXckIsNEVBQXVCOzswQ0FDbkMsOERBQUN3QjtnQ0FBSUgsV0FBV3JCLGlGQUE0QjswQ0FDeEMsNEVBQUMyQjs7c0RBQ0csOERBQUNDO3NEQUNHLDRFQUFDM0IsaURBQUlBO2dEQUFDNEIsTUFBSzswREFBSTs7Ozs7Ozs7Ozs7c0RBRW5CLDhEQUFDRDtzREFDRyw0RUFBQzNCLGlEQUFJQTtnREFBQzRCLE1BQUs7MERBQVU7Ozs7Ozs7Ozs7O3NEQUV6Qiw4REFBQ0Q7c0RBQ0csNEVBQUMzQixpREFBSUE7Z0RBQUM0QixNQUFLOzBEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtwQyw4REFBQ0w7Z0NBQUlILFdBQVdyQixtRkFBOEI7MENBQzFDLDRFQUFDQyxpREFBSUE7b0NBQUM0QixNQUFLOzhDQUNQLDRFQUFDRTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLWiw4REFBQ1A7Z0NBQUlILFdBQVdyQixrRkFBNkI7MENBQ3pDLDRFQUFDMkI7O3NEQUNHLDhEQUFDQztzREFDRyw0RUFBQzNCLGlEQUFJQTtnREFBQzRCLE1BQUs7MERBQVM7Ozs7Ozs7Ozs7O3NEQUV4Qiw4REFBQ0Q7c0RBQ0csNEVBQUMzQixpREFBSUE7Z0RBQUM0QixNQUFLOzBEQUFZOzs7Ozs7Ozs7OztzREFFM0IsOERBQUNEO3NEQUNHLDRFQUFDM0IsaURBQUlBO2dEQUFDNEIsTUFBSzswREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJbEMsOERBQUNJO2dDQUFPQyxTQUFTaEI7Z0NBQXFCRyxXQUFXckIsMEVBQXFCOzBDQUFFOzs7Ozs7MENBR3hFLDhEQUFDSCwwREFBZUE7Z0NBQUN1QyxNQUFLOzBDQUNqQjdCLG1DQUFxQiw4REFBQ0osMERBQVFBO29DQUFDa0MsU0FBU25COzs7Ozs7Ozs7OzswQ0FHN0MsOERBQUNNO2dDQUFJSCxXQUFXckIsZ0VBQVc7Z0NBQUVrQyxTQUFTbEI7MENBQ2xDLDRFQUFDdUI7OENBQUssNEVBQUN4QyxnRkFBTUE7d0NBQUN5QyxPQUFPOzRDQUFFQyxVQUFVOzRDQUFRQyxPQUFPO3dDQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHakYsOERBQUM3QywwREFBZUE7d0JBQUN1QyxNQUFLO2tDQUNqQi9CLHlCQUFXLDhEQUFDUCxrREFBR0E7NEJBQUNRLFlBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyRDtHQXRGTUY7S0FBQUE7QUF3Rk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhci5qc3g/ODAxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYvaW5kZXgnO1xuaW1wb3J0IHsgRmlNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IENhbGVuZGx5IGZyb20gJy4vY2FsZW5kbHkvQ2FsZW5kbHknO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW25hdk9wZW4sIHNldE5hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93Q2FsZW5kbHlNb2RhbCwgc2V0U2hvd0NhbGVuZGx5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBTZXQgdGhlIGluaXRpYWwgd2luZG93IHdpZHRoXG4gICAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdpbmRvdyB3aWR0aCBvbiByZXNpemVcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCB0b2dnbGVOYXZPcGVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXROYXZPcGVuKHByZXZOYXZPcGVuID0+ICFwcmV2TmF2T3Blbik7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHRvZ2dsZUNhbGVuZGx5TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dDYWxlbmRseU1vZGFsKHByZXZTaG93ID0+ICFwcmV2U2hvdyk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9jb250YWluZXJfbGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzXCI+RXZlbnRzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbW11bml0eVwiPkNvbW11bml0eTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX2NvbnRhaW5lcl9taWRkbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEYzNjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX2NvbnRhaW5lcl9yaWdodH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQgVXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5TZXJ2aWNlczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdCBVczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNhbGVuZGx5TW9kYWx9IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGx5QnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZSBhIG1lZXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0NhbGVuZGx5TW9kYWwgJiYgPENhbGVuZGx5IG9uQ2xvc2U9e3RvZ2dsZUNhbGVuZGx5TW9kYWx9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gb25DbGljaz17dG9nZ2xlTmF2T3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZpTWVudSBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGNvbG9yOiBcInZhcigtLWNvbnRhaW5lci1jb2xvcilcIiB9fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZPcGVuICYmIDxOYXYgc2V0TmF2T3Blbj17c2V0TmF2T3Blbn0gLz59XG4gICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIDwvbmF2ID5cblxuXG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiSGVhZCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIk5hdiIsIkZpTWVudSIsInN0eWxlcyIsIkxpbmsiLCJkeW5hbWljIiwiQ2FsZW5kbHkiLCJOYXZiYXIiLCJuYXZPcGVuIiwic2V0TmF2T3BlbiIsInNob3dDYWxlbmRseU1vZGFsIiwic2V0U2hvd0NhbGVuZGx5TW9kYWwiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlTmF2T3BlbiIsInByZXZOYXZPcGVuIiwidG9nZ2xlQ2FsZW5kbHlNb2RhbCIsInByZXZTaG93IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwibmF2YmFyIiwiZGl2IiwibmF2YmFyX2NvbnRhaW5lciIsIm5hdmJhcl9jb250YWluZXJfbGVmdCIsInVsIiwibGkiLCJocmVmIiwibmF2YmFyX2NvbnRhaW5lcl9taWRkbGUiLCJoMiIsIm5hdmJhcl9jb250YWluZXJfcmlnaHQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2FsZW5kbHlCdXR0b24iLCJtb2RlIiwib25DbG9zZSIsIm1lbnUiLCJzcGFuIiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar/Navbar.jsx\n"));

/***/ })

});