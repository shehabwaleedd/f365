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

/***/ "(app-pages-browser)/./src/components/events/data.js":
/*!***************************************!*\
  !*** ./src/components/events/data.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: function() { return /* binding */ projects; }\n/* harmony export */ });\nconst projects = [\n    {\n        title: \"Matthias Leidinger\",\n        description: \"Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.\",\n        src: \"/assets/growth.jpg\",\n        link: \"https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/\",\n        color: \"#FBA0AC\"\n    },\n    {\n        title: \"Cl\\xe9ment Chapillon\",\n        description: \"This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Cl\\xe9ment Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).\",\n        src: \"/assets/networking.jpg\",\n        link: \"https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/\",\n        color: \"#F6909D\"\n    },\n    {\n        title: \"Zissou\",\n        description: \"Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.\",\n        src: \"/assets/wellness.jpg\",\n        link: \"https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/\",\n        color: \"#F5BCB9\"\n    },\n    {\n        title: \"Mathias Svold and Ulrik Hasemann\",\n        description: \"The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.\",\n        src: \"/assets/growth.jpg\",\n        link: \"https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/\",\n        color: \"#EC9EB1\"\n    },\n    {\n        title: \"Mark Rammers\",\n        description: \"Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.\",\n        src: \"/assets/growth.jpg\",\n        link: \"https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/\",\n        color: \"#F5BCB9\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2V2ZW50cy9kYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCO1FBQ0VDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxhQUFhO1FBQ2JDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsS0FBSztRQUNMQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxhQUFhO1FBQ2JDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ldmVudHMvZGF0YS5qcz8xNmY3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIk1hdHRoaWFzIExlaWRpbmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk9yaWdpbmFsbHkgaGFpbGluZyBmcm9tIEF1c3RyaWEsIEJlcmxpbi1iYXNlZCBwaG90b2dyYXBoZXIgTWF0dGhpYXMgTGVpbmRpbmdlciBpcyBhIHlvdW5nIGNyZWF0aXZlIGJyaW1taW5nIHdpdGggdGFsZW50IGFuZCBpZGVhcy5cIixcbiAgICBzcmM6IFwiL2Fzc2V0cy9ncm93dGguanBnXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5pZ25hbnQuY29tLzIwMjMvMDMvMjUvYWQyMTg2LW1hdHRoaWFzLWxlaWRpbmdlcnMtcGhvdG9ncmFwaGljLWV4cGxvcmF0aW9uLW9mLWF3ZS1hbmQtd29uZGVyL1wiLFxuICAgIGNvbG9yOiBcIiNGQkEwQUNcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2zDqW1lbnQgQ2hhcGlsbG9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHN0b3J5IG9uIHRoZSBib3JkZXIgYmV0d2VlbiByZWFsaXR5IGFuZCBpbWFnaW5hcnksIGFib3V0IHRoZSBjb250cmFkaWN0b3J5IGZlZWxpbmdzIHRoYXQgdGhlIGluc3VsYXJpdHkgb2YgYSByb2NreSwgYXJpZCwgYW5kIHdpbGQgdGVycml0b3J5IHByb3Zva2Vz4oCd4oCUc28gRnJlbmNoIHBob3RvZ3JhcGhlciBDbMOpbWVudCBDaGFwaWxsb24gZGVzY3JpYmVzIGhpcyBsYXRlc3QgaGlnaGx5IGNhcHRpdmF0aW5nIHByb2plY3QgTGVzIHJvY2hlcnMgZmF1dmVzIChGcmVuY2ggZm9yIOKAmFRoZSB0YXdueSByb2Nrc+KAmSkuXCIsXG4gICAgc3JjOiBcIi9hc3NldHMvbmV0d29ya2luZy5qcGdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmlnbmFudC5jb20vMjAyMi8wOS8zMC9jbGVtZW50LWNoYXBpbGxvbi1xdWVzdGlvbnMtZ2VvZ3JhcGhpY2FsLWFuZC1tZW50YWwtaXNvbGF0aW9uLXdpdGgtbGVzLXJvY2hlcnMtZmF1dmVzL1wiLFxuICAgIGNvbG9yOiBcIiNGNjkwOURcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiWmlzc291XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhvdWdoIGhlIHZpZXdzIHBob3RvZ3JhcGh5IGFzIGEgbWVkaXVtIGZvciBzdG9yeXRlbGxpbmcsIFppc3NvdeKAmXMgaW1hZ2VzIGRvbuKAmXQgaW5zaXN0IG9uIGEgbmFycmF0aXZlLiBCb3RoIGNyaXNwIGFuZCBldGhlcmVhbCwgdGhleeKAmXJlIGVuY29kZWQgd2l0aCBhbiBhbWJpZ3VpdHnigJRhIGNlcnRhaW4gdGVuc2lvbuKAlHRoYXQgbGV0cyB0aGUgdmlld2VyIGZpbmQgdGhlaXIgb3duIHN0b3J5IHdpdGhpbiB0aGVtLlwiLFxuICAgIHNyYzogXCIvYXNzZXRzL3dlbGxuZXNzLmpwZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuaWduYW50LmNvbS8yMDIzLzEwLzI4L2NhcHR1cmluZy1iYWxpcy1tYW55LWZhY2VzLXppc3NvdS1kb2N1bWVudHMtdGhlLXNhY3JlZC1hbmQtdGhlLW11bmRhbmUtb2YtYS1mcmFnaWxlLWlzbGFuZC9cIixcbiAgICBjb2xvcjogXCIjRjVCQ0I5XCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1hdGhpYXMgU3ZvbGQgYW5kIFVscmlrIEhhc2VtYW5uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIGNvYXN0bGluZXMgb2YgRGVubWFyayBhcmUgZG9jdW1lbnRlZCBpbiB0b25hbCBjb2xvcnMgaW4gYSBwZW5zaXZlIG5ldyBzZXJpZXMgYnkgRGFuaXNoIHBob3RvZ3JhcGhlcnMgVWxyaWsgSGFzZW1hbm4gYW5kIE1hdGhpYXMgU3ZvbGQ7IGFuIG9uZ29pbmcgcHJvamVjdCBpbnZlc3RpZ2F0aW5nIGhvdyBodW1hbnMgaW50ZXJhY3Qgd2l0aCBhbmQgZGlzcnVwdCB0aGUgRGFuaXNoIGNvYXN0LlwiLFxuICAgIHNyYzogXCIvYXNzZXRzL2dyb3d0aC5qcGdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmlnbmFudC5jb20vMjAxOS8wMy8xMy9hLXBob3RvZ3JhcGhpYy1zZXJpZXMtZGVwaWN0aW5nLXRoZS11bmNlcnRhaW4tZnV0dXJlLW9mLWRlbm1hcmtzLXRyZWFzdXJlZC1jb2FzdGxpbmVzL1wiLFxuICAgIGNvbG9yOiBcIiNFQzlFQjFcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTWFyayBSYW1tZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRHV0Y2ggcGhvdG9ncmFwaGVyIE1hcmsgUmFtbWVycyBoYXMgc2hhcmVkIHdpdGggSUdOQU5UIHRoZSBmaXJzdCBjaGFwdGVyIG9mIGhpcyBsYXRlc3QgcGhvdG9ncmFwaGljIHByb2plY3QsIOKAmGFsbCBvdmVyIGFnYWlu4oCZ4oCUY2FwdHVyZWQgd2hpbGUgaW4gcmVzaWRlbmN5IGF0IEhla3RvciwgYW4gb2xkIGZhcm0gaW4gTG9zIFZhbGxlcywgTGFuemFyb3RlLiBUaXRsZWQg4oCYQmVnaW5uaW5nc+KAmSwgdGhlIG1lc21lcml6aW5nIGNvbGxlY3Rpb24gb2YgaW1hZ2VzIGlzIGEgdmlzdWFsIGFuZCBtZWRpdGF0aXZlIGpvdXJuZXkgaW50byB0aGUgb3JpZ2lucyBvZiByZWdyZXRzIGFuZCB0aGUgdW5jZXJ0YWludHkgb2Ygc3RlcHBpbmcgaW50byBuZXcgdW5rbm93bnMuXCIsXG4gICAgc3JjOiBcIi9hc3NldHMvZ3Jvd3RoLmpwZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuaWduYW50LmNvbS8yMDIzLzA0LzEyL21hcmstcmFtbWVycy1hbGwtb3Zlci1hZ2Fpbi1pcy1hLXN0dWR5LW9mLXJlZ3JldC1hbmQtdGhlLXdpbGxpbmduZXNzLXRvLW1vdmUtZm9yd2FyZC9cIixcbiAgICBjb2xvcjogXCIjRjVCQ0I5XCJcbiAgfVxuXSJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzcmMiLCJsaW5rIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/events/data.js\n"));

/***/ })

});