"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[sideId]/page",{

/***/ "(app-pages-browser)/./src/components/roleplay/RolePlaySecondContent.tsx":
/*!***********************************************************!*\
  !*** ./src/components/roleplay/RolePlaySecondContent.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/font */ \"(app-pages-browser)/./src/app/font.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs/lib/anime.es */ \"(app-pages-browser)/./node_modules/animejs/lib/anime.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst newPlayerDetail = [\n    {\n        name: \"new-player-card\",\n        label: \"CARD\",\n        detail1: \"ผู้เล่นใหม่รับบัตร NewPlayer 7 วัน\",\n        detail2: \"ฟาร์ม x2, Protect ปล้น,พาวน์ฟรี\",\n        items: [\n            \"new_player.png\"\n        ],\n        background: \"/images/login-wallpaper.png\"\n    },\n    {\n        name: \"new-player-items\",\n        label: \"ITEMS\",\n        detail1: \"ผู้เล่นใหม่รับอาวุธพร้อมเล่น 3 ชิ้น (ปากฉลาม, ไม้เบส, ค้อน)\",\n        detail2: \"พร้อมรถทำงานดำแรงๆฟรี 7 วัน (Zentorno)\",\n        items: [\n            \"start_day1.png\",\n            \"start_day4.png\",\n            \"start_day7.png\"\n        ],\n        background: \"/images/zentorno-wallpaper.jpg\"\n    },\n    {\n        name: \"new-player-code\",\n        label: \"CODE\",\n        detail1: \"ผู้เล่นใหม่เมื่อเข้าเมือง สามารถกรอกโค้ดเพื่อรับกาชาอีกเพียบ\",\n        detail2: \"สามารถติดตามโค้ดได้ใน Discord\",\n        items: [\n            \"turismor_gasha.png\",\n            \"trophytruck_gasha.png\",\n            \"jester3_gasha.png\"\n        ],\n        background: \"/images/roleplay/promote/main-3.jpg\"\n    }\n];\nconst NewPlayerShowCaseList = ()=>{\n    _s();\n    const promoteRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const refFilter = promoteRef.current.filter((e)=>e !== null);\n        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            targets: refFilter,\n            easing: \"easeInQuad\",\n            translateY: [\n                1000,\n                0\n            ],\n            opacity: [\n                0,\n                1.0\n            ],\n            duration: 500,\n            delay: function(element, index) {\n                return index * 100;\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: newPlayerDetail.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: (element)=>promoteRef.current[index] = element,\n                className: \"opacity-0 h-52 tablet:h-52 s-desktop:h-56 m-desktop:h-64 l-desktop:h-64 shrink-0 \\n                    flex flex-col items-end gap-2 relative p-4 rounded-lg shadow-md shadow-black border border-white/10 \\n                    overflow-hidden bg-neutral-900 text-shadow-md hover:scale-105 duration-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-20 h-full absolute -left-10 top-0 m-auto bg-amber-400 z-10 -skew-x-12\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"h-full w-full object-cover absolute inset-0 m-auto opacity-30\",\n                        src: item.background\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white \".concat(_app_font__WEBPACK_IMPORTED_MODULE_1__.bebas.className, \" text-4xl z-10\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-amber-400\",\n                                children: \"NEW PLAYER\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 82\n                            }, undefined),\n                            \" \",\n                            item.label\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat(_app_font__WEBPACK_IMPORTED_MODULE_1__.notoSansThai.className, \" text-sm tablet:text-sm s-desktop:text-sm m-desktop:text-lg l-desktop:text-lg text-white z-10 text-right whitespace-nowrap \"),\n                        children: item.detail1\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat(_app_font__WEBPACK_IMPORTED_MODULE_1__.notoSansThai.className, \"  text-sm tablet:text-sm s-desktop:text-sm m-desktop:text-lg l-desktop:text-lg text-white z-10 text-right whitespace-nowrap\"),\n                        children: item.detail2\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-16 tablet:h-16 s-desktop:h-20 m-desktop:h-24 l-desktop:h-24 flex gap-3 mt-3 items-center justify-end\",\n                        children: item.items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-full aspect-square rounded-lg shadow-md shadow-black border border-white/10 flex justify-center items-center p-2 svg-background-2 z-20 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-5/6 object-cover z-20\",\n                                    src: \"/images/roleplay/items/\".concat(item)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, \"new-player-item-\".concat(index), false, {\n                                fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 33\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, \"new-player-\".concat(index), true, {\n                fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false);\n};\n_s(NewPlayerShowCaseList, \"MQrvrpB2+xnu3C/azKgZ0UpCiuQ=\");\n_c = NewPlayerShowCaseList;\nconst RolePlaySecondContent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative h-auto tablet:h-auto s-desktop:h-auto m-desktop:h-[30vh] l-desktop:h-[30vh] \\n            bg-neutral-950 flex flex-col gap-4 justify-center items-center overflow-hidden \\n            p-6 tablet:p-6 s-desktop:p-8 m-desktop:p-10 l-desktop:p-10\\n            \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full tablet:w-5/6 s-desktop:w-full m-desktop:w-[90vw] l-desktop:w-4/5 h-full grid grid-cols-1 tablet:grid-cols-1 s-desktop:grid-cols-3 m-desktop:grid-cols-3 l-desktop:grid-cols-3 gap-6 justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewPlayerShowCaseList, {}, void 0, false, {\n                fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n                lineNumber: 107,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n            lineNumber: 104,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\glorious_website\\\\src\\\\components\\\\roleplay\\\\RolePlaySecondContent.tsx\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = RolePlaySecondContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RolePlaySecondContent);\nvar _c, _c1;\n$RefreshReg$(_c, \"NewPlayerShowCaseList\");\n$RefreshReg$(_c1, \"RolePlaySecondContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3JvbGVwbGF5L1JvbGVQbGF5U2Vjb25kQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUU7QUFJL0I7QUFDQztBQUV6QyxNQUFNSyxrQkFBa0I7SUFDcEI7UUFDSUMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVU7UUFDVkMsU0FBVTtRQUNWQyxPQUFPO1lBQUM7U0FBaUI7UUFDekJDLFlBQWE7SUFDakI7SUFDQTtRQUNJTCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBVTtRQUNWQyxTQUFVO1FBQ1ZDLE9BQU87WUFBQztZQUFrQjtZQUFrQjtTQUFpQjtRQUM3REMsWUFBYTtJQUNqQjtJQUNBO1FBQ0lMLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFVO1FBQ1ZDLFNBQVU7UUFDVkMsT0FBTztZQUFDO1lBQXNCO1lBQXlCO1NBQW9CO1FBQzNFQyxZQUFhO0lBQ2pCO0NBQ0g7QUFFRCxNQUFNQyx3QkFBd0I7O0lBRTFCLE1BQU1DLGFBQWFWLDZDQUFNQSxDQUFNLEVBQUU7SUFFakNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVksWUFBWUQsV0FBV0UsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsSUFBV0EsTUFBTTtRQUM5RGIsZ0VBQUtBLENBQUM7WUFDRmMsU0FBU0o7WUFDVEssUUFBUTtZQUNSQyxZQUFZO2dCQUFDO2dCQUFNO2FBQUU7WUFDckJDLFNBQVM7Z0JBQUM7Z0JBQUc7YUFBSTtZQUNqQkMsVUFBVTtZQUNWQyxPQUFPLFNBQVVDLE9BQU8sRUFBRUMsS0FBSztnQkFDM0IsT0FBT0EsUUFBUTtZQUNuQjtRQUNKO0lBQ0osR0FBRSxFQUFFO0lBRUoscUJBQ0k7a0JBQ0twQixnQkFBZ0JxQixHQUFHLENBQUMsQ0FBQ0MsTUFBS0Ysc0JBQ3ZCLDhEQUFDRztnQkFDR0MsS0FBSyxDQUFDTCxVQUFpQlgsV0FBV0UsT0FBTyxDQUFDVSxNQUFNLEdBQUdEO2dCQUVuRE0sV0FBWTs7a0NBSVosOERBQUNGO3dCQUFJRSxXQUFXOzs7Ozs7a0NBSWhCLDhEQUFDQzt3QkFBSUQsV0FBVzt3QkFDWEUsS0FBS0wsS0FBS2hCLFVBQVU7Ozs7OztrQ0FFekIsOERBQUNzQjt3QkFBRUgsV0FBVyxjQUE4QixPQUFoQjlCLDRDQUFLQSxDQUFDOEIsU0FBUyxFQUFDOzswQ0FBaUIsOERBQUNJO2dDQUMxREosV0FBVzswQ0FBa0I7Ozs7Ozs0QkFBaUI7NEJBQUVILEtBQUtwQixLQUFLOzs7Ozs7O2tDQUM5RCw4REFBQzBCO3dCQUFFSCxXQUFXLEdBQTBCLE9BQXZCN0IsbURBQVlBLENBQUM2QixTQUFTLEVBQUM7a0NBQStISCxLQUFLbkIsT0FBTzs7Ozs7O2tDQUNuTCw4REFBQ3lCO3dCQUFFSCxXQUFXLEdBQTBCLE9BQXZCN0IsbURBQVlBLENBQUM2QixTQUFTLEVBQUM7a0NBQStISCxLQUFLbEIsT0FBTzs7Ozs7O2tDQUVuTCw4REFBQ21CO3dCQUFJRSxXQUFXO2tDQUdSSCxLQUFLakIsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDLENBQUNDLE1BQUtGLHNCQUNqQiw4REFBQ0c7Z0NBRUdFLFdBQVc7MENBQ1gsNEVBQUNDO29DQUFJRCxXQUFXO29DQUNYRSxLQUFLLDBCQUErQixPQUFMTDs7Ozs7OytCQUgvQixtQkFBeUIsT0FBTkY7Ozs7Ozs7Ozs7O2VBdEJuQyxjQUFvQixPQUFOQTs7Ozs7O0FBbUN2QztHQTFETWI7S0FBQUE7QUE0RE4sTUFBTXVCLHdCQUF3QjtJQUMxQixxQkFDSSw4REFBQ1A7UUFDR0UsV0FBWTtrQkFNWiw0RUFBQ0Y7WUFDR0UsV0FBVztzQkFFWCw0RUFBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7QUFRakI7TUFwQk11QjtBQXNCTiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3JvbGVwbGF5L1JvbGVQbGF5U2Vjb25kQ29udGVudC50c3g/OTJlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JlYmFzLCBub3RvU2Fuc1RoYWksIHJvYm90b0JvbGQsIHNwYWNlQXJtb3J9IGZyb20gXCJAL2FwcC9mb250XCI7XHJcbmltcG9ydCBGb290ZXJTb2NpYWwgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyU29jaWFsXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJJbWcgZnJvbSBcIkAvY29tcG9uZW50cy9ob21lL0NoYXJhY3RlckltZ1wiO1xyXG5pbXBvcnQge2FkbWluTGlzdH0gZnJvbSBcIkAvZGF0YS9hZG1pbkxpc3RcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqcy9saWIvYW5pbWUuZXNcIjtcclxuXHJcbmNvbnN0IG5ld1BsYXllckRldGFpbCA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbmV3LXBsYXllci1jYXJkJyxcclxuICAgICAgICBsYWJlbDogJ0NBUkQnLFxyXG4gICAgICAgIGRldGFpbDE6IGDguJzguLnguYnguYDguKXguYjguJnguYPguKvguKHguYjguKPguLHguJrguJrguLHguJXguKMgTmV3UGxheWVyIDcg4Lin4Lix4LiZYCxcclxuICAgICAgICBkZXRhaWwyOiBg4Lif4Liy4Lij4LmM4LihIHgyLCBQcm90ZWN0IOC4m+C4peC5ieC4mSzguJ7guLLguKfguJnguYzguJ/guKPguLVgLFxyXG4gICAgICAgIGl0ZW1zOiBbJ25ld19wbGF5ZXIucG5nJ10sXHJcbiAgICAgICAgYmFja2dyb3VuZDogYC9pbWFnZXMvbG9naW4td2FsbHBhcGVyLnBuZ2BcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ25ldy1wbGF5ZXItaXRlbXMnLFxyXG4gICAgICAgIGxhYmVsOiAnSVRFTVMnLFxyXG4gICAgICAgIGRldGFpbDE6IGDguJzguLnguYnguYDguKXguYjguJnguYPguKvguKHguYjguKPguLHguJrguK3guLLguKfguLjguJjguJ7guKPguYnguK3guKHguYDguKXguYjguJkgMyDguIrguLTguYnguJkgKOC4m+C4suC4geC4ieC4peC4suC4oSwg4LmE4Lih4LmJ4LmA4Lia4LiqLCDguITguYnguK3guJkpYCxcclxuICAgICAgICBkZXRhaWwyOiBg4Lie4Lij4LmJ4Lit4Lih4Lij4LiW4LiX4Liz4LiH4Liy4LiZ4LiU4Liz4LmB4Lij4LiH4LmG4Lif4Lij4Li1IDcg4Lin4Lix4LiZIChaZW50b3JubylgLFxyXG4gICAgICAgIGl0ZW1zOiBbJ3N0YXJ0X2RheTEucG5nJywgJ3N0YXJ0X2RheTQucG5nJywgJ3N0YXJ0X2RheTcucG5nJ10sXHJcbiAgICAgICAgYmFja2dyb3VuZDogYC9pbWFnZXMvemVudG9ybm8td2FsbHBhcGVyLmpwZ2BcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ25ldy1wbGF5ZXItY29kZScsXHJcbiAgICAgICAgbGFiZWw6ICdDT0RFJyxcclxuICAgICAgICBkZXRhaWwxOiBg4Lic4Li54LmJ4LmA4Lil4LmI4LiZ4LmD4Lir4Lih4LmI4LmA4Lih4Li34LmI4Lit4LmA4LiC4LmJ4Liy4LmA4Lih4Li34Lit4LiHIOC4quC4suC4oeC4suC4o+C4luC4geC4o+C4reC4geC5guC4hOC5ieC4lOC5gOC4nuC4t+C5iOC4reC4o+C4seC4muC4geC4suC4iuC4suC4reC4teC4geC5gOC4nuC4teC4ouC4mmAsXHJcbiAgICAgICAgZGV0YWlsMjogYOC4quC4suC4oeC4suC4o+C4luC4leC4tOC4lOC4leC4suC4oeC5guC4hOC5ieC4lOC5hOC4lOC5ieC5g+C4mSBEaXNjb3JkYCxcclxuICAgICAgICBpdGVtczogWyd0dXJpc21vcl9nYXNoYS5wbmcnLCAndHJvcGh5dHJ1Y2tfZ2FzaGEucG5nJywgJ2plc3RlcjNfZ2FzaGEucG5nJ10sXHJcbiAgICAgICAgYmFja2dyb3VuZDogYC9pbWFnZXMvcm9sZXBsYXkvcHJvbW90ZS9tYWluLTMuanBnYFxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBOZXdQbGF5ZXJTaG93Q2FzZUxpc3QgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCBwcm9tb3RlUmVmID0gdXNlUmVmPGFueT4oW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZWZGaWx0ZXIgPSBwcm9tb3RlUmVmLmN1cnJlbnQuZmlsdGVyKChlOiBhbnkpID0+IGUgIT09IG51bGwpXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiByZWZGaWx0ZXIsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJblF1YWQnLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTAwMCwgMF0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxLjBdLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBkZWxheTogZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggKiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge25ld1BsYXllckRldGFpbC5tYXAoKGl0ZW0saW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyhlbGVtZW50OiBhbnkpID0+IHByb21vdGVSZWYuY3VycmVudFtpbmRleF0gPSBlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YG5ldy1wbGF5ZXItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG9wYWNpdHktMCBoLTUyIHRhYmxldDpoLTUyIHMtZGVza3RvcDpoLTU2IG0tZGVza3RvcDpoLTY0IGwtZGVza3RvcDpoLTY0IHNocmluay0wIFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGdhcC0yIHJlbGF0aXZlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZCBzaGFkb3ctYmxhY2sgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy1oaWRkZW4gYmctbmV1dHJhbC05MDAgdGV4dC1zaGFkb3ctbWQgaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTMwMGB9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ctMjAgaC1mdWxsIGFic29sdXRlIC1sZWZ0LTEwIHRvcC0wIG0tYXV0byBiZy1hbWJlci00MDAgei0xMCAtc2tldy14LTEyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17J2gtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIGFic29sdXRlIGluc2V0LTAgbS1hdXRvIG9wYWNpdHktMzAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmJhY2tncm91bmR9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke2JlYmFzLmNsYXNzTmFtZX0gdGV4dC00eGwgei0xMGB9PjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3RleHQtYW1iZXItNDAwJ30+TkVXIFBMQVlFUjwvc3Bhbj4ge2l0ZW0ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7bm90b1NhbnNUaGFpLmNsYXNzTmFtZX0gdGV4dC1zbSB0YWJsZXQ6dGV4dC1zbSBzLWRlc2t0b3A6dGV4dC1zbSBtLWRlc2t0b3A6dGV4dC1sZyBsLWRlc2t0b3A6dGV4dC1sZyB0ZXh0LXdoaXRlIHotMTAgdGV4dC1yaWdodCB3aGl0ZXNwYWNlLW5vd3JhcCBgfT57aXRlbS5kZXRhaWwxfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake25vdG9TYW5zVGhhaS5jbGFzc05hbWV9ICB0ZXh0LXNtIHRhYmxldDp0ZXh0LXNtIHMtZGVza3RvcDp0ZXh0LXNtIG0tZGVza3RvcDp0ZXh0LWxnIGwtZGVza3RvcDp0ZXh0LWxnIHRleHQtd2hpdGUgei0xMCB0ZXh0LXJpZ2h0IHdoaXRlc3BhY2Utbm93cmFwYH0+e2l0ZW0uZGV0YWlsMn08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndy1mdWxsIGgtMTYgdGFibGV0OmgtMTYgcy1kZXNrdG9wOmgtMjAgbS1kZXNrdG9wOmgtMjQgbC1kZXNrdG9wOmgtMjQgZmxleCBnYXAtMyBtdC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCd9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pdGVtcy5tYXAoKGl0ZW0saW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YG5ldy1wbGF5ZXItaXRlbS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2gtZnVsbCBhc3BlY3Qtc3F1YXJlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHNoYWRvdy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMiBzdmctYmFja2dyb3VuZC0yIHotMjAgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsnaC01LzYgb2JqZWN0LWNvdmVyIHotMjAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvcm9sZXBsYXkvaXRlbXMvJHtpdGVtfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJvbGVQbGF5U2Vjb25kQ29udGVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcmVsYXRpdmUgaC1hdXRvIHRhYmxldDpoLWF1dG8gcy1kZXNrdG9wOmgtYXV0byBtLWRlc2t0b3A6aC1bMzB2aF0gbC1kZXNrdG9wOmgtWzMwdmhdIFxyXG4gICAgICAgICAgICBiZy1uZXV0cmFsLTk1MCBmbGV4IGZsZXgtY29sIGdhcC00IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gXHJcbiAgICAgICAgICAgIHAtNiB0YWJsZXQ6cC02IHMtZGVza3RvcDpwLTggbS1kZXNrdG9wOnAtMTAgbC1kZXNrdG9wOnAtMTBcclxuICAgICAgICAgICAgYH0+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsndy1mdWxsIHRhYmxldDp3LTUvNiBzLWRlc2t0b3A6dy1mdWxsIG0tZGVza3RvcDp3LVs5MHZ3XSBsLWRlc2t0b3A6dy00LzUgaC1mdWxsIGdyaWQgZ3JpZC1jb2xzLTEgdGFibGV0OmdyaWQtY29scy0xIHMtZGVza3RvcDpncmlkLWNvbHMtMyBtLWRlc2t0b3A6Z3JpZC1jb2xzLTMgbC1kZXNrdG9wOmdyaWQtY29scy0zIGdhcC02IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcid9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxOZXdQbGF5ZXJTaG93Q2FzZUxpc3QvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9sZVBsYXlTZWNvbmRDb250ZW50OyJdLCJuYW1lcyI6WyJiZWJhcyIsIm5vdG9TYW5zVGhhaSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImFuaW1lIiwibmV3UGxheWVyRGV0YWlsIiwibmFtZSIsImxhYmVsIiwiZGV0YWlsMSIsImRldGFpbDIiLCJpdGVtcyIsImJhY2tncm91bmQiLCJOZXdQbGF5ZXJTaG93Q2FzZUxpc3QiLCJwcm9tb3RlUmVmIiwicmVmRmlsdGVyIiwiY3VycmVudCIsImZpbHRlciIsImUiLCJ0YXJnZXRzIiwiZWFzaW5nIiwidHJhbnNsYXRlWSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImRlbGF5IiwiZWxlbWVudCIsImluZGV4IiwibWFwIiwiaXRlbSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInAiLCJzcGFuIiwiUm9sZVBsYXlTZWNvbmRDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roleplay/RolePlaySecondContent.tsx\n"));

/***/ })

});