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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Client component\nconst Home = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAddresses = async (ZipCode)=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/api/v1/\" + ZipCode);\n            const resData = await res.json();\n            setData(resData.addresses);\n            console.log(\"data is\", resData);\n            return resData;\n        } catch (error) {\n            throw error;\n        }\n    };\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSearch, setIsSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [invalidZipCode, setInvalidZipCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle input change for the form\n    const handleChange = (event)=>{\n        setInputValue(event.target.value);\n        setIsSearch(false);\n    };\n    // Handle form submission\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const zipRegex = /^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$/;\n        if (zipRegex.test(inputValue)) {\n            setInvalidZipCode(false);\n            getAddresses(inputValue);\n        } else {\n            setInvalidZipCode(true);\n        }\n        setInputValue(\"\"); // Clear the input box\n        setIsSearch(true);\n    };\n    //display form and the returned addresses\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"form-inline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mx-sm-3 mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"PostalCode\",\n                            className: \"sr-only\",\n                            children: \"Postal code\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: inputValue,\n                            onChange: handleChange,\n                            placeholder: \"Enter a postal code\",\n                            className: \"form-control\",\n                            id: \"PostalCode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-group\",\n                children: [\n                    invalidZipCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"You entered an improperly formatted postal code.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && isSearch && data.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Sorry, addresses with that postal code were not found.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && isSearch && data.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Found Addresses:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && data.length > 0 && data.map((address)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: address.Text + \", \" + address.Description\n                        }, address.Id, false, {\n                            fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"hSuQpufcHJ++D5w9oHtakrrWEEg=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDb0U7QUFRcEUsbUJBQW1CO0FBQ25CLE1BQU1DLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFZLEVBQUU7SUFFOUMsTUFBTUksZUFBZSxPQUFPQztRQUMxQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGtDQUFrQ0Y7WUFDMUQsTUFBTUcsVUFBVSxNQUFNRixJQUFJRyxJQUFJO1lBQzlCTixRQUFRSyxRQUFRRSxTQUFTO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUMsV0FBV0o7WUFDdkIsT0FBT0E7UUFDVCxFQUFFLE9BQU9LLE9BQU87WUFDZCxNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDa0IsZ0JBQWdCQyxrQkFBa0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXJELG1DQUFtQztJQUNuQyxNQUFNb0IsZUFBZSxDQUFDQztRQUNwQk4sY0FBY00sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1FBQ2hDTixZQUFZO0lBQ2Q7SUFFQSx5QkFBeUI7SUFDekIsTUFBTU8sZUFBZSxDQUFDSDtRQUNwQkEsTUFBTUksY0FBYztRQUNwQixNQUFNQyxXQUFXO1FBQ2pCLElBQUlBLFNBQVNDLElBQUksQ0FBQ2IsYUFBYTtZQUM3Qkssa0JBQWtCO1lBQ2xCZixhQUFhVTtRQUNmLE9BQU87WUFDTEssa0JBQWtCO1FBQ3BCO1FBQ0FKLGNBQWMsS0FBSyxzQkFBc0I7UUFDekNFLFlBQVk7SUFDZDtJQUVBLHlDQUF5QztJQUN6QyxxQkFDRTs7MEJBQ0UsOERBQUNXO2dCQUFLQyxVQUFVTDtnQkFBY00sV0FBVTswQkFDdEMsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU1DLFNBQVE7NEJBQWFILFdBQVU7c0NBQVU7Ozs7OztzQ0FHaEQsOERBQUNJOzRCQUNDQyxNQUFLOzRCQUNMWixPQUFPVDs0QkFDUHNCLFVBQVVoQjs0QkFDVmlCLGFBQVk7NEJBQ1pQLFdBQVU7NEJBQ1ZRLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlULDhEQUFDQztnQkFBR1QsV0FBVTs7b0JBQ1haLGdDQUNDLDhEQUFDc0I7a0NBQUU7Ozs7OztvQkFFSixDQUFDdEIsa0JBQWtCRixZQUFZZCxLQUFLdUMsTUFBTSxLQUFLLG1CQUM5Qyw4REFBQ0Q7a0NBQUU7Ozs7OztvQkFFSixDQUFDdEIsa0JBQWtCRixZQUFZZCxLQUFLdUMsTUFBTSxHQUFHLG1CQUM1Qyw4REFBQ0M7a0NBQUc7Ozs7OztvQkFFTCxDQUFDeEIsa0JBQ0FoQixLQUFLdUMsTUFBTSxHQUFHLEtBQ2R2QyxLQUFLeUMsR0FBRyxDQUFDLENBQUNDLHdCQUNSLDhEQUFDQztzQ0FDRUQsUUFBUUUsSUFBSSxHQUFHLE9BQU9GLFFBQVFHLFdBQVc7MkJBRG5DSCxRQUFRSSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBTy9CO0dBN0VNL0M7S0FBQUE7QUE4RU4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamVueWFcXERvY3VtZW50c1xcQ2FuYWRhUG9zdFByb2plY3RcXGNsaWVudFxcbXktYXBwXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRm9ybUV2ZW50LCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEFkZHJlc3MgPSB7XG4gIElkOiBzdHJpbmc7XG4gIFRleHQ6IHN0cmluZztcbiAgRGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbi8vIENsaWVudCBjb21wb25lbnRcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEFkZHJlc3NbXT4oW10pO1xuXG4gIGNvbnN0IGdldEFkZHJlc3NlcyA9IGFzeW5jIChaaXBDb2RlOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL1wiICsgWmlwQ29kZSk7XG4gICAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERhdGEocmVzRGF0YS5hZGRyZXNzZXMpO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhIGlzXCIsIHJlc0RhdGEpO1xuICAgICAgcmV0dXJuIHJlc0RhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU2VhcmNoLCBzZXRJc1NlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnZhbGlkWmlwQ29kZSwgc2V0SW52YWxpZFppcENvZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEhhbmRsZSBpbnB1dCBjaGFuZ2UgZm9yIHRoZSBmb3JtXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0SXNTZWFyY2goZmFsc2UpO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBGb3JtRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHppcFJlZ2V4ID0gL15bQS1aYS16XVxcZFtBLVphLXpdWyAtXT9cXGRbQS1aYS16XVxcZCQvO1xuICAgIGlmICh6aXBSZWdleC50ZXN0KGlucHV0VmFsdWUpKSB7XG4gICAgICBzZXRJbnZhbGlkWmlwQ29kZShmYWxzZSk7XG4gICAgICBnZXRBZGRyZXNzZXMoaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEludmFsaWRaaXBDb2RlKHRydWUpO1xuICAgIH1cbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpOyAvLyBDbGVhciB0aGUgaW5wdXQgYm94XG4gICAgc2V0SXNTZWFyY2godHJ1ZSk7XG4gIH07XG5cbiAgLy9kaXNwbGF5IGZvcm0gYW5kIHRoZSByZXR1cm5lZCBhZGRyZXNzZXNcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG14LXNtLTMgbWItMlwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiUG9zdGFsQ29kZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgIFBvc3RhbCBjb2RlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBwb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgaWQ9XCJQb3N0YWxDb2RlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgIHtpbnZhbGlkWmlwQ29kZSAmJiAoXG4gICAgICAgICAgPHA+WW91IGVudGVyZWQgYW4gaW1wcm9wZXJseSBmb3JtYXR0ZWQgcG9zdGFsIGNvZGUuPC9wPlxuICAgICAgICApfVxuICAgICAgICB7IWludmFsaWRaaXBDb2RlICYmIGlzU2VhcmNoICYmIGRhdGEubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICA8cD5Tb3JyeSwgYWRkcmVzc2VzIHdpdGggdGhhdCBwb3N0YWwgY29kZSB3ZXJlIG5vdCBmb3VuZC48L3A+XG4gICAgICAgICl9XG4gICAgICAgIHshaW52YWxpZFppcENvZGUgJiYgaXNTZWFyY2ggJiYgZGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8aDE+Rm91bmQgQWRkcmVzc2VzOjwvaDE+XG4gICAgICAgICl9XG4gICAgICAgIHshaW52YWxpZFppcENvZGUgJiZcbiAgICAgICAgICBkYXRhLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBkYXRhLm1hcCgoYWRkcmVzcykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17YWRkcmVzcy5JZH0+XG4gICAgICAgICAgICAgIHthZGRyZXNzLlRleHQgKyBcIiwgXCIgKyBhZGRyZXNzLkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImdldEFkZHJlc3NlcyIsIlppcENvZGUiLCJyZXMiLCJmZXRjaCIsInJlc0RhdGEiLCJqc29uIiwiYWRkcmVzc2VzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwiaW52YWxpZFppcENvZGUiLCJzZXRJbnZhbGlkWmlwQ29kZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInppcFJlZ2V4IiwidGVzdCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpZCIsInVsIiwicCIsImxlbmd0aCIsImgxIiwibWFwIiwiYWRkcmVzcyIsImxpIiwiVGV4dCIsIkRlc2NyaXB0aW9uIiwiSWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});