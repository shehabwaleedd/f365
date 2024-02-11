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

/***/ "(app-pages-browser)/./src/context/userUpdate.js":
/*!***********************************!*\
  !*** ./src/context/userUpdate.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateUserAvatar: function() { return /* binding */ updateUserAvatar; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _useUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUser */ \"(app-pages-browser)/./src/context/useUser.js\");\n// Code to update user data\nvar _s = $RefreshSig$();\n\n\nconst UserUpdate = async (userData)=>{\n    _s();\n    const { user } = (0,_useUser__WEBPACK_IMPORTED_MODULE_0__.useUser)();\n    const token = localStorage.getItem(\"token\");\n    const userId = localStorage.getItem(\"userId\");\n    if (token && userId) {\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"https://events-nsih.onrender.com/user/\".concat(userId), userData, {\n                headers: {\n                    token\n                }\n            });\n            console.log(response.data);\n            return response.data;\n        } catch (err) {\n            console.error(err);\n        }\n    }\n};\n_s(UserUpdate, \"Q+JCVIy3JH0MXpFK+vm68eAxsAY=\", false, function() {\n    return [\n        _useUser__WEBPACK_IMPORTED_MODULE_0__.useUser\n    ];\n});\n_c = UserUpdate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserUpdate);\nconst updateUserAvatar = async (userId, avatarFile)=>{\n    const token = localStorage.getItem(\"token\"); // Retrieve the token from localStorage\n    const baseUrl = \"https://events-nsih.onrender.com/user\";\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patch(\"\".concat(baseUrl, \"/\").concat(userId), formData, {\n            headers: {\n                Authorization: {\n                    token\n                },\n                \"Content-Type\": \"multipart/form-data\"\n            }\n        });\n        console.log(\"Avatar updated:\", response.data);\n        // Optionally, update local user data or state to reflect the new avatar\n        return response.data;\n    } catch (error) {\n        console.error(\"Error updating avatar:\", error);\n        throw error; // Re-throw the error for further handling\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"UserUpdate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L3VzZXJVcGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQTJCOztBQUVEO0FBQ1U7QUFHcEMsTUFBTUUsYUFBYSxPQUFPQzs7SUFFdEIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0gsaURBQU9BO0lBQ3hCLE1BQU1JLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxNQUFNQyxTQUFTRixhQUFhQyxPQUFPLENBQUM7SUFDcEMsSUFBSUYsU0FBU0csUUFBUTtRQUNqQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNVCw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDLHlDQUFnRCxPQUFQRixTQUFVTCxVQUFVO2dCQUMxRlEsU0FBUztvQkFBRU47Z0JBQU07WUFDckI7WUFDQU8sUUFBUUMsR0FBRyxDQUFDSixTQUFTSyxJQUFJO1lBQ3pCLE9BQU9MLFNBQVNLLElBQUk7UUFDeEIsRUFBRSxPQUFPQyxLQUFLO1lBQ1ZILFFBQVFJLEtBQUssQ0FBQ0Q7UUFDbEI7SUFDSjtBQUNKO0dBaEJNYjs7UUFFZUQsNkNBQU9BOzs7S0FGdEJDO0FBa0JOLCtEQUFlQSxVQUFVQSxFQUFDO0FBRW5CLE1BQU1lLG1CQUFtQixPQUFPVCxRQUFRVTtJQUMzQyxNQUFNYixRQUFRQyxhQUFhQyxPQUFPLENBQUMsVUFBVSx1Q0FBdUM7SUFDcEYsTUFBTVksVUFBVTtJQUNoQixJQUFJO1FBQ0EsTUFBTVYsV0FBVyxNQUFNVCw2Q0FBS0EsQ0FBQ29CLEtBQUssQ0FBQyxHQUFjWixPQUFYVyxTQUFRLEtBQVUsT0FBUFgsU0FBVWEsVUFBVTtZQUNqRVYsU0FBUztnQkFDTFcsZUFBZTtvQkFBQ2pCO2dCQUFLO2dCQUNyQixnQkFBZ0I7WUFDcEI7UUFDSjtRQUVBTyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CSixTQUFTSyxJQUFJO1FBQzVDLHdFQUF3RTtRQUN4RSxPQUFPTCxTQUFTSyxJQUFJO0lBQ3hCLEVBQUUsT0FBT0UsT0FBTztRQUNaSixRQUFRSSxLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxNQUFNQSxPQUFPLDBDQUEwQztJQUMzRDtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvdXNlclVwZGF0ZS5qcz8xODhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGUgdG8gdXBkYXRlIHVzZXIgZGF0YVxuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIi4vdXNlVXNlclwiO1xuXG5cbmNvbnN0IFVzZXJVcGRhdGUgPSBhc3luYyAodXNlckRhdGEpID0+IHtcblxuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGlmICh0b2tlbiAmJiB1c2VySWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGBodHRwczovL2V2ZW50cy1uc2loLm9ucmVuZGVyLmNvbS91c2VyLyR7dXNlcklkfWAsIHVzZXJEYXRhLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyB0b2tlbiB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclVwZGF0ZTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJBdmF0YXIgPSBhc3luYyAodXNlcklkLCBhdmF0YXJGaWxlKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgLy8gUmV0cmlldmUgdGhlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9ldmVudHMtbnNpaC5vbnJlbmRlci5jb20vdXNlclwiO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYCR7YmFzZVVybH0vJHt1c2VySWR9YCwgZm9ybURhdGEsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB7dG9rZW59LFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIC8vIEltcG9ydGFudCBmb3IgZmlsZSB1cGxvYWRzXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkF2YXRhciB1cGRhdGVkOlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgLy8gT3B0aW9uYWxseSwgdXBkYXRlIGxvY2FsIHVzZXIgZGF0YSBvciBzdGF0ZSB0byByZWZsZWN0IHRoZSBuZXcgYXZhdGFyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBhdmF0YXI6XCIsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7IC8vIFJlLXRocm93IHRoZSBlcnJvciBmb3IgZnVydGhlciBoYW5kbGluZ1xuICAgIH1cbn07XG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlVXNlciIsIlVzZXJVcGRhdGUiLCJ1c2VyRGF0YSIsInVzZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VySWQiLCJyZXNwb25zZSIsInB1dCIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsImVycm9yIiwidXBkYXRlVXNlckF2YXRhciIsImF2YXRhckZpbGUiLCJiYXNlVXJsIiwicGF0Y2giLCJmb3JtRGF0YSIsIkF1dGhvcml6YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/userUpdate.js\n"));

/***/ })

});