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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Client component\nconst Home = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAddresses = async (ZipCode)=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/api/v1/\" + ZipCode);\n            const resData = await res.json();\n            setData(resData.addresses);\n            //console.log(\"data is\", resData);\n            return resData;\n        } catch (error) {\n            throw error;\n        }\n    };\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSearch, setIsSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [invalidZipCode, setInvalidZipCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle input change for the form\n    const handleChange = (event)=>{\n        setInputValue(event.target.value);\n        setIsSearch(false);\n    };\n    // Handle form submission\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const zipRegex = /^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$/;\n        if (zipRegex.test(inputValue)) {\n            setInvalidZipCode(false);\n            getAddresses(inputValue);\n        } else {\n            setInvalidZipCode(true);\n        }\n        setInputValue(\"\"); // Clear the input box\n        setIsSearch(true);\n    };\n    //display form and the returned addresses\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"form-inline\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mx-sm-3 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"PostalCode\",\n                                className: \"sr-only\",\n                                children: \"Postal code\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: inputValue,\n                                onChange: handleChange,\n                                placeholder: \"Enter a postal code\",\n                                className: \"form-control\",\n                                id: \"PostalCode\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-primary btn-sm float-right\",\n                        id: \"button-addon2\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-group\",\n                children: [\n                    invalidZipCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"You entered an improperly formatted postal code!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && isSearch && data.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Sorry, addresses with that postal code were not found...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && isSearch && data.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Found Addresses:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined),\n                    !invalidZipCode && data.length > 0 && data.map((address)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"list-group-item\",\n                            children: address.Text + \", \" + address.Description\n                        }, address.Id, false, {\n                            fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jenya\\\\Documents\\\\CanadaPostProject\\\\client\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"hSuQpufcHJ++D5w9oHtakrrWEEg=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDb0U7QUFRcEUsbUJBQW1CO0FBQ25CLE1BQU1DLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFZLEVBQUU7SUFFOUMsTUFBTUksZUFBZSxPQUFPQztRQUMxQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGtDQUFrQ0Y7WUFDMUQsTUFBTUcsVUFBVSxNQUFNRixJQUFJRyxJQUFJO1lBQzlCTixRQUFRSyxRQUFRRSxTQUFTO1lBQ3pCLGtDQUFrQztZQUNsQyxPQUFPRjtRQUNULEVBQUUsT0FBT0csT0FBTztZQUNkLE1BQU1BO1FBQ1I7SUFDRjtJQUVBLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXJELG1DQUFtQztJQUNuQyxNQUFNa0IsZUFBZSxDQUFDQztRQUNwQk4sY0FBY00sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1FBQ2hDTixZQUFZO0lBQ2Q7SUFFQSx5QkFBeUI7SUFDekIsTUFBTU8sZUFBZSxDQUFDSDtRQUNwQkEsTUFBTUksY0FBYztRQUNwQixNQUFNQyxXQUFXO1FBQ2pCLElBQUlBLFNBQVNDLElBQUksQ0FBQ2IsYUFBYTtZQUM3Qkssa0JBQWtCO1lBQ2xCYixhQUFhUTtRQUNmLE9BQU87WUFDTEssa0JBQWtCO1FBQ3BCO1FBQ0FKLGNBQWMsS0FBSyxzQkFBc0I7UUFDekNFLFlBQVk7SUFDZDtJQUVBLHlDQUF5QztJQUN6QyxxQkFDRTs7MEJBQ0UsOERBQUNXO2dCQUFLQyxVQUFVTDtnQkFBY00sV0FBVTs7a0NBQ3RDLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFNQyxTQUFRO2dDQUFhSCxXQUFVOzBDQUFVOzs7Ozs7MENBR2hELDhEQUFDSTtnQ0FDQ0MsTUFBSztnQ0FDTFosT0FBT1Q7Z0NBQ1BzQixVQUFVaEI7Z0NBQ1ZpQixhQUFZO2dDQUNaUCxXQUFVO2dDQUNWUSxJQUFHOzs7Ozs7Ozs7Ozs7a0NBR1AsOERBQUNDO3dCQUNDSixNQUFLO3dCQUNMTCxXQUFVO3dCQUNWUSxJQUFHO2tDQUNKOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNFO2dCQUFHVixXQUFVOztvQkFDWFosZ0NBQ0MsOERBQUN1QjtrQ0FBSzs7Ozs7O29CQUVQLENBQUN2QixrQkFBa0JGLFlBQVlaLEtBQUtzQyxNQUFNLEtBQUssbUJBQzlDLDhEQUFDQztrQ0FBRTs7Ozs7O29CQUVKLENBQUN6QixrQkFBa0JGLFlBQVlaLEtBQUtzQyxNQUFNLEdBQUcsbUJBQzVDLDhEQUFDRTtrQ0FBRzs7Ozs7O29CQUVMLENBQUMxQixrQkFDQWQsS0FBS3NDLE1BQU0sR0FBRyxLQUNkdEMsS0FBS3lDLEdBQUcsQ0FBQyxDQUFDQyx3QkFDUiw4REFBQ0M7NEJBQW9CakIsV0FBVTtzQ0FDNUJnQixRQUFRRSxJQUFJLEdBQUcsT0FBT0YsUUFBUUcsV0FBVzsyQkFEbkNILFFBQVFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFPL0I7R0FwRk0vQztLQUFBQTtBQXFGTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqZW55YVxcRG9jdW1lbnRzXFxDYW5hZGFQb3N0UHJvamVjdFxcY2xpZW50XFxteS1hcHBcXGFwcFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGb3JtRXZlbnQsIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgQWRkcmVzcyA9IHtcbiAgSWQ6IHN0cmluZztcbiAgVGV4dDogc3RyaW5nO1xuICBEZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxuLy8gQ2xpZW50IGNvbXBvbmVudFxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8QWRkcmVzc1tdPihbXSk7XG5cbiAgY29uc3QgZ2V0QWRkcmVzc2VzID0gYXN5bmMgKFppcENvZGU6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvXCIgKyBaaXBDb2RlKTtcbiAgICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0RGF0YShyZXNEYXRhLmFkZHJlc3Nlcyk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YSBpc1wiLCByZXNEYXRhKTtcbiAgICAgIHJldHVybiByZXNEYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1NlYXJjaCwgc2V0SXNTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW52YWxpZFppcENvZGUsIHNldEludmFsaWRaaXBDb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlIGZvciB0aGUgZm9ybVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldElzU2VhcmNoKGZhbHNlKTtcbiAgfTtcblxuICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB6aXBSZWdleCA9IC9eW0EtWmEtel1cXGRbQS1aYS16XVsgLV0/XFxkW0EtWmEtel1cXGQkLztcbiAgICBpZiAoemlwUmVnZXgudGVzdChpbnB1dFZhbHVlKSkge1xuICAgICAgc2V0SW52YWxpZFppcENvZGUoZmFsc2UpO1xuICAgICAgZ2V0QWRkcmVzc2VzKGlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJbnZhbGlkWmlwQ29kZSh0cnVlKTtcbiAgICB9XG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTsgLy8gQ2xlYXIgdGhlIGlucHV0IGJveFxuICAgIHNldElzU2VhcmNoKHRydWUpO1xuICB9O1xuXG4gIC8vZGlzcGxheSBmb3JtIGFuZCB0aGUgcmV0dXJuZWQgYWRkcmVzc2VzXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteC1zbS0zIG1iLTJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlBvc3RhbENvZGVcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICBQb3N0YWwgY29kZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGlkPVwiUG9zdGFsQ29kZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICBpZD1cImJ1dHRvbi1hZGRvbjJcIlxuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAge2ludmFsaWRaaXBDb2RlICYmIChcbiAgICAgICAgICA8c3Bhbj5Zb3UgZW50ZXJlZCBhbiBpbXByb3Blcmx5IGZvcm1hdHRlZCBwb3N0YWwgY29kZSE8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHshaW52YWxpZFppcENvZGUgJiYgaXNTZWFyY2ggJiYgZGF0YS5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgIDxwPlNvcnJ5LCBhZGRyZXNzZXMgd2l0aCB0aGF0IHBvc3RhbCBjb2RlIHdlcmUgbm90IGZvdW5kLi4uPC9wPlxuICAgICAgICApfVxuICAgICAgICB7IWludmFsaWRaaXBDb2RlICYmIGlzU2VhcmNoICYmIGRhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGgxPkZvdW5kIEFkZHJlc3Nlczo8L2gxPlxuICAgICAgICApfVxuICAgICAgICB7IWludmFsaWRaaXBDb2RlICYmXG4gICAgICAgICAgZGF0YS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgZGF0YS5tYXAoKGFkZHJlc3MpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2FkZHJlc3MuSWR9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICB7YWRkcmVzcy5UZXh0ICsgXCIsIFwiICsgYWRkcmVzcy5EZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJnZXRBZGRyZXNzZXMiLCJaaXBDb2RlIiwicmVzIiwiZmV0Y2giLCJyZXNEYXRhIiwianNvbiIsImFkZHJlc3NlcyIsImVycm9yIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwiaW52YWxpZFppcENvZGUiLCJzZXRJbnZhbGlkWmlwQ29kZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInppcFJlZ2V4IiwidGVzdCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpZCIsImJ1dHRvbiIsInVsIiwic3BhbiIsImxlbmd0aCIsInAiLCJoMSIsIm1hcCIsImFkZHJlc3MiLCJsaSIsIlRleHQiLCJEZXNjcmlwdGlvbiIsIklkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});