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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Client component\nconst Home = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAddresses = async (ZipCode)=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/api/v1/\" + ZipCode);\n            const resData = await res.json();\n            setData(resData.addresses);\n            console.log(\"data is\", resData);\n            return resData;\n        } catch (error) {\n            throw error;\n        }\n    };\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSearch, setIsSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [invalidZipCode, setInvalidZipCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle input change for the form\n    const handleChange = (event)=>{\n        setInputValue(event.target.value);\n        setIsSearch(false);\n    };\n    // Handle form submission\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const zipRegex = /^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$/;\n        if (zipRegex.test(inputValue)) {\n            setInvalidZipCode(false);\n            getAddresses(inputValue);\n        } else {\n            setInvalidZipCode(true);\n        }\n        setInputValue(\"\"); // Clear the input box\n        setIsSearch(true);\n    };\n    //display form and the returned addresses\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"/*\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"form-inline\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mx-sm-3 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"PostalCode\",\n                                className: \"sr-only\",\n                                children: \"Postal code\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: inputValue,\n                                onChange: handleChange,\n                                placeholder: \"Enter a postal code\",\n                                className: \"form-control\",\n                                id: \"PostalCode\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-primary mb-2\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-group\",\n                children: [\n                    invalidZipCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"You entered an improperly formatted postal code.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && isSearch && data.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Sorry, addresses with that postal code were not found.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && data.length != 0 && data.map((address)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: address.Text + \", \" + address.Description\n                        }, address.Id, false, {\n                            fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"hSuQpufcHJ++D5w9oHtakrrWEEg=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDb0U7QUFRcEUsbUJBQW1CO0FBQ25CLE1BQU1DLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFZLEVBQUU7SUFFOUMsTUFBTUksZUFBZSxPQUFPQztRQUMxQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGtDQUFrQ0Y7WUFDMUQsTUFBTUcsVUFBVSxNQUFNRixJQUFJRyxJQUFJO1lBQzlCTixRQUFRSyxRQUFRRSxTQUFTO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUMsV0FBV0o7WUFDdkIsT0FBT0E7UUFDVCxFQUFFLE9BQU9LLE9BQU87WUFDZCxNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDa0IsZ0JBQWdCQyxrQkFBa0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXJELG1DQUFtQztJQUNuQyxNQUFNb0IsZUFBZSxDQUFDQztRQUNwQk4sY0FBY00sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1FBQ2hDTixZQUFZO0lBQ2Q7SUFFQSx5QkFBeUI7SUFDekIsTUFBTU8sZUFBZSxDQUFDSDtRQUNwQkEsTUFBTUksY0FBYztRQUNwQixNQUFNQyxXQUFXO1FBQ2pCLElBQUlBLFNBQVNDLElBQUksQ0FBQ2IsYUFBYTtZQUM3Qkssa0JBQWtCO1lBQ2xCZixhQUFhVTtRQUNmLE9BQU87WUFDTEssa0JBQWtCO1FBQ3BCO1FBQ0FKLGNBQWMsS0FBSyxzQkFBc0I7UUFDekNFLFlBQVk7SUFDZDtJQUVBLHlDQUF5QztJQUN6QyxxQkFDRTs7WUFBRTswQkFFQSw4REFBQ1c7Z0JBQUtDLFVBQVVMO2dCQUFjTSxXQUFVOztrQ0FDdEMsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQU1DLFNBQVE7Z0NBQWFILFdBQVU7MENBQVU7Ozs7OzswQ0FHaEQsOERBQUNJO2dDQUNDQyxNQUFLO2dDQUNMWixPQUFPVDtnQ0FDUHNCLFVBQVVoQjtnQ0FDVmlCLGFBQVk7Z0NBQ1pQLFdBQVU7Z0NBQ1ZRLElBQUc7Ozs7Ozs7Ozs7OztrQ0FHUCw4REFBQ0M7d0JBQU9KLE1BQUs7d0JBQVNMLFdBQVU7a0NBQXVCOzs7Ozs7Ozs7Ozs7MEJBSXpELDhEQUFDVTtnQkFBR1YsV0FBVTs7b0JBQ1haLGdDQUNDLDhEQUFDdUI7a0NBQUU7Ozs7OztvQkFFSixDQUFDdkIsa0JBQWtCRixZQUFZZCxLQUFLd0MsTUFBTSxLQUFLLG1CQUM5Qyw4REFBQ0Q7a0NBQUU7Ozs7OztvQkFFSixDQUFDdkIsa0JBQ0FoQixLQUFLd0MsTUFBTSxJQUFJLEtBQ2Z4QyxLQUFLeUMsR0FBRyxDQUFDLENBQUNDLHdCQUNSLDhEQUFDQztzQ0FDRUQsUUFBUUUsSUFBSSxHQUFHLE9BQU9GLFFBQVFHLFdBQVc7MkJBRG5DSCxRQUFRSSxFQUFFOzs7Ozs7Ozs7Ozs7O0FBTy9CO0dBOUVNL0M7S0FBQUE7QUErRU4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamVueWFcXERvY3VtZW50c1xcQ2FuYWRhUG9zdFByb2plY3RcXGNsaWVudFxcbXktYXBwXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRm9ybUV2ZW50LCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEFkZHJlc3MgPSB7XG4gIElkOiBzdHJpbmc7XG4gIFRleHQ6IHN0cmluZztcbiAgRGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbi8vIENsaWVudCBjb21wb25lbnRcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEFkZHJlc3NbXT4oW10pO1xuXG4gIGNvbnN0IGdldEFkZHJlc3NlcyA9IGFzeW5jIChaaXBDb2RlOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL1wiICsgWmlwQ29kZSk7XG4gICAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERhdGEocmVzRGF0YS5hZGRyZXNzZXMpO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhIGlzXCIsIHJlc0RhdGEpO1xuICAgICAgcmV0dXJuIHJlc0RhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU2VhcmNoLCBzZXRJc1NlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnZhbGlkWmlwQ29kZSwgc2V0SW52YWxpZFppcENvZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEhhbmRsZSBpbnB1dCBjaGFuZ2UgZm9yIHRoZSBmb3JtXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0SXNTZWFyY2goZmFsc2UpO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBGb3JtRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHppcFJlZ2V4ID0gL15bQS1aYS16XVxcZFtBLVphLXpdWyAtXT9cXGRbQS1aYS16XVxcZCQvO1xuICAgIGlmICh6aXBSZWdleC50ZXN0KGlucHV0VmFsdWUpKSB7XG4gICAgICBzZXRJbnZhbGlkWmlwQ29kZShmYWxzZSk7XG4gICAgICBnZXRBZGRyZXNzZXMoaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEludmFsaWRaaXBDb2RlKHRydWUpO1xuICAgIH1cbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpOyAvLyBDbGVhciB0aGUgaW5wdXQgYm94XG4gICAgc2V0SXNTZWFyY2godHJ1ZSk7XG4gIH07XG5cbiAgLy9kaXNwbGF5IGZvcm0gYW5kIHRoZSByZXR1cm5lZCBhZGRyZXNzZXNcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgLypcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteC1zbS0zIG1iLTJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlBvc3RhbENvZGVcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICBQb3N0YWwgY29kZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGlkPVwiUG9zdGFsQ29kZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0yXCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAge2ludmFsaWRaaXBDb2RlICYmIChcbiAgICAgICAgICA8cD5Zb3UgZW50ZXJlZCBhbiBpbXByb3Blcmx5IGZvcm1hdHRlZCBwb3N0YWwgY29kZS48L3A+XG4gICAgICAgICl9XG4gICAgICAgIHshaW52YWxpZFppcENvZGUgJiYgaXNTZWFyY2ggJiYgZGF0YS5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgIDxwPlNvcnJ5LCBhZGRyZXNzZXMgd2l0aCB0aGF0IHBvc3RhbCBjb2RlIHdlcmUgbm90IGZvdW5kLjwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbnZhbGlkWmlwQ29kZSAmJlxuICAgICAgICAgIGRhdGEubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICBkYXRhLm1hcCgoYWRkcmVzcykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17YWRkcmVzcy5JZH0+XG4gICAgICAgICAgICAgIHthZGRyZXNzLlRleHQgKyBcIiwgXCIgKyBhZGRyZXNzLkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImdldEFkZHJlc3NlcyIsIlppcENvZGUiLCJyZXMiLCJmZXRjaCIsInJlc0RhdGEiLCJqc29uIiwiYWRkcmVzc2VzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwiaW52YWxpZFppcENvZGUiLCJzZXRJbnZhbGlkWmlwQ29kZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInppcFJlZ2V4IiwidGVzdCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpZCIsImJ1dHRvbiIsInVsIiwicCIsImxlbmd0aCIsIm1hcCIsImFkZHJlc3MiLCJsaSIsIlRleHQiLCJEZXNjcmlwdGlvbiIsIklkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});