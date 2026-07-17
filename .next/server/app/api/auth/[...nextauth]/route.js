"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_17nir_Downloads_Parth_Plasto_Pack_main_03_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\17nir\\\\Downloads\\\\Parth-Plasto-Pack-main 03\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_17nir_Downloads_Parth_Plasto_Pack_main_03_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMxN25pciU1Q0Rvd25sb2FkcyU1Q1BhcnRoLVBsYXN0by1QYWNrLW1haW4lMjAwMyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDMTduaXIlNUNEb3dubG9hZHMlNUNQYXJ0aC1QbGFzdG8tUGFjay1tYWluJTIwMDMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQytDO0FBQzVIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFydGgtcGxhc3RvLXBhY2svPzFiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcMTduaXJcXFxcRG93bmxvYWRzXFxcXFBhcnRoLVBsYXN0by1QYWNrLW1haW4gMDNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcMTduaXJcXFxcRG93bmxvYWRzXFxcXFBhcnRoLVBsYXN0by1QYWNrLW1haW4gMDNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./lib/authOptions.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNlO0FBRWhELE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyx5REFBV0E7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcnRoLXBsYXN0by1wYWNrLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aE9wdGlvbnMnO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/authOptions.ts":
/*!****************************!*\
  !*** ./lib/authOptions.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n/* harmony import */ var _models_UserSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/UserSession */ \"(rsc)/./models/UserSession.ts\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ua-parser-js */ \"(rsc)/./node_modules/ua-parser-js/src/main/ua-parser.mjs\");\n\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Please enter an email and password\");\n                }\n                await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: credentials.email\n                }).select(\"+password\");\n                if (!user) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                const isPasswordMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(credentials.password, user.password);\n                if (!isPasswordMatch) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                // --- SESSION TRACKING LOGIC ---\n                const userAgent = req?.headers?.[\"user-agent\"] || \"Unknown\";\n                let ipAddress = req?.headers?.[\"x-forwarded-for\"] || \"Unknown\";\n                if (Array.isArray(ipAddress)) {\n                    ipAddress = ipAddress[0];\n                } else if (ipAddress.includes(\",\")) {\n                    ipAddress = ipAddress.split(\",\")[0];\n                }\n                const parser = new ua_parser_js__WEBPACK_IMPORTED_MODULE_6__.UAParser(userAgent);\n                const browser = parser.getBrowser();\n                const os = parser.getOS();\n                const device = parser.getDevice();\n                const deviceString = `${device.vendor || \"\"} ${device.model || os.name || \"Desktop\"}`.trim();\n                const browserString = `${browser.name || \"Unknown\"} ${browser.version || \"\"}`.trim();\n                const sessionId = crypto__WEBPACK_IMPORTED_MODULE_5___default().randomUUID();\n                await _models_UserSession__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create({\n                    userId: user._id,\n                    sessionId: sessionId,\n                    userAgent: userAgent,\n                    ipAddress: ipAddress,\n                    device: deviceString || \"Desktop\",\n                    browser: browserString || \"Unknown\",\n                    location: \"Unknown\",\n                    isActive: true\n                });\n                // --- END SESSION TRACKING ---\n                return {\n                    id: user._id.toString(),\n                    name: user.name,\n                    email: user.email,\n                    role: user.role,\n                    sessionId: sessionId\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.sessionId = user.sessionId;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.sessionId = token.sessionId;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET || \"parth-plasto-pack-super-secret-key-2026\",\n    pages: {\n        signIn: \"/admin/login\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDL0JHLE1BQU1aLFNBQVMsR0FBRyxLQUFjQSxTQUFTO1lBQzNDO1lBQ0EsT0FBT1k7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsSUFBSUMsUUFBUXRDLElBQUksRUFBRTtnQkFDZnNDLFFBQVF0QyxJQUFJLENBQVNnQyxFQUFFLEdBQUdLLE1BQU1MLEVBQUU7Z0JBQ2xDTSxRQUFRdEMsSUFBSSxDQUFTa0MsSUFBSSxHQUFHRyxNQUFNSCxJQUFJO2dCQUN0Q0ksUUFBUXRDLElBQUksQ0FBU3lCLFNBQVMsR0FBR1ksTUFBTVosU0FBUztZQUNuRDtZQUNBLE9BQU9hO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWUsSUFBSTtJQUN2Q0MsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFydGgtcGxhc3RvLXBhY2svLi9saWIvYXV0aE9wdGlvbnMudHM/OTExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnQC9saWIvZGInO1xuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbHMvVXNlcic7XG5pbXBvcnQgVXNlclNlc3Npb24gZnJvbSAnQC9tb2RlbHMvVXNlclNlc3Npb24nO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgVUFQYXJzZXIgfSBmcm9tICd1YS1wYXJzZXItanMnO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFuZCBwYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pLnNlbGVjdCgnK3Bhc3N3b3JkJyk7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLSBTRVNTSU9OIFRSQUNLSU5HIExPR0lDIC0tLVxuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSByZXE/LmhlYWRlcnM/LlsndXNlci1hZ2VudCddIHx8ICdVbmtub3duJztcbiAgICAgICAgXG4gICAgICAgIGxldCBpcEFkZHJlc3MgPSByZXE/LmhlYWRlcnM/LlsneC1mb3J3YXJkZWQtZm9yJ10gfHwgJ1Vua25vd24nO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpcEFkZHJlc3MpKSB7XG4gICAgICAgICAgaXBBZGRyZXNzID0gaXBBZGRyZXNzWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKGlwQWRkcmVzcy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICAgICAgaXBBZGRyZXNzID0gaXBBZGRyZXNzLnNwbGl0KCcsJylbMF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgVUFQYXJzZXIodXNlckFnZW50KTtcbiAgICAgICAgY29uc3QgYnJvd3NlciA9IHBhcnNlci5nZXRCcm93c2VyKCk7XG4gICAgICAgIGNvbnN0IG9zID0gcGFyc2VyLmdldE9TKCk7XG4gICAgICAgIGNvbnN0IGRldmljZSA9IHBhcnNlci5nZXREZXZpY2UoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRldmljZVN0cmluZyA9IGAke2RldmljZS52ZW5kb3IgfHwgJyd9ICR7ZGV2aWNlLm1vZGVsIHx8IG9zLm5hbWUgfHwgJ0Rlc2t0b3AnfWAudHJpbSgpO1xuICAgICAgICBjb25zdCBicm93c2VyU3RyaW5nID0gYCR7YnJvd3Nlci5uYW1lIHx8ICdVbmtub3duJ30gJHticm93c2VyLnZlcnNpb24gfHwgJyd9YC50cmltKCk7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICAgICAgICBhd2FpdCBVc2VyU2Vzc2lvbi5jcmVhdGUoe1xuICAgICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWQsXG4gICAgICAgICAgdXNlckFnZW50OiB1c2VyQWdlbnQsXG4gICAgICAgICAgaXBBZGRyZXNzOiBpcEFkZHJlc3MsXG4gICAgICAgICAgZGV2aWNlOiBkZXZpY2VTdHJpbmcgfHwgJ0Rlc2t0b3AnLFxuICAgICAgICAgIGJyb3dzZXI6IGJyb3dzZXJTdHJpbmcgfHwgJ1Vua25vd24nLFxuICAgICAgICAgIGxvY2F0aW9uOiAnVW5rbm93bicsXG4gICAgICAgICAgaXNBY3RpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC0tLSBFTkQgU0VTU0lPTiBUUkFDS0lORyAtLS1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgYW55KS5yb2xlO1xuICAgICAgICB0b2tlbi5zZXNzaW9uSWQgPSAodXNlciBhcyBhbnkpLnNlc3Npb25JZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLmlkO1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSA9IHRva2VuLnJvbGU7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5zZXNzaW9uSWQgPSB0b2tlbi5zZXNzaW9uSWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIHx8ICdwYXJ0aC1wbGFzdG8tcGFjay1zdXBlci1zZWNyZXQta2V5LTIwMjYnLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hZG1pbi9sb2dpbicsXG4gIH1cbn07XG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImNvbm5lY3REQiIsIlVzZXIiLCJVc2VyU2Vzc2lvbiIsImNyeXB0byIsIlVBUGFyc2VyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiRXJyb3IiLCJ1c2VyIiwiZmluZE9uZSIsInNlbGVjdCIsImlzUGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJ1c2VyQWdlbnQiLCJoZWFkZXJzIiwiaXBBZGRyZXNzIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJzcGxpdCIsInBhcnNlciIsImJyb3dzZXIiLCJnZXRCcm93c2VyIiwib3MiLCJnZXRPUyIsImRldmljZSIsImdldERldmljZSIsImRldmljZVN0cmluZyIsInZlbmRvciIsIm1vZGVsIiwidHJpbSIsImJyb3dzZXJTdHJpbmciLCJ2ZXJzaW9uIiwic2Vzc2lvbklkIiwicmFuZG9tVVVJRCIsImNyZWF0ZSIsInVzZXJJZCIsIl9pZCIsImxvY2F0aW9uIiwiaXNBY3RpdmUiLCJpZCIsInRvU3RyaW5nIiwicm9sZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    const MONGODB_URI = process.env.MONGODB_URI;\n    if (!MONGODB_URI) {\n        throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n    }\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLFNBQVMsT0FBZ0JELFFBQVE7QUFFckMsSUFBSSxDQUFDQyxRQUFRO0lBQ1hBLFNBQVMsT0FBZ0JELFFBQVEsR0FBRztRQUFFRyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUNsRTtBQUVBLGVBQWVDO0lBQ2IsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0lBRTNDLElBQUksQ0FBQ0EsYUFBYTtRQUNoQixNQUFNLElBQUlHLE1BQU07SUFDbEI7SUFFQSxJQUFJUixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTU0sT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFFQVYsT0FBT0csT0FBTyxHQUFHSix1REFBZ0IsQ0FBQ00sYUFBdUJJLE1BQU1HLElBQUksQ0FBQyxDQUFDYjtZQUNuRSxPQUFPQTtRQUNUO0lBQ0Y7SUFFQSxJQUFJO1FBQ0ZDLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT1UsR0FBRztRQUNWYixPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTVU7SUFDUjtJQUVBLE9BQU9iLE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcnRoLXBsYXN0by1wYWNrLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxubGV0IGNhY2hlZCA9IChnbG9iYWwgYXMgYW55KS5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuICBpZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCcpO1xuICB9XG5cbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSBhcyBzdHJpbmcsIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0REIiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a name\"\n        ],\n        maxlength: [\n            60,\n            \"Name cannot be more than 60 characters\"\n        ]\n    },\n    username: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    department: {\n        type: String\n    },\n    bio: {\n        type: String\n    },\n    profileImage: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ],\n        select: false\n    },\n    role: {\n        type: String,\n        enum: [\n            \"SUPER_ADMIN\",\n            \"ADMIN\",\n            \"SALES\",\n            \"MARKETING\",\n            \"EMPLOYEE\"\n        ],\n        default: \"EMPLOYEE\"\n    },\n    lastLogin: {\n        type: Date\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFnQnJELE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDcEM7SUFDRUcsTUFBTTtRQUNKQyxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF3QjtRQUN6Q0MsV0FBVztZQUFDO1lBQUk7U0FBeUM7SUFDM0Q7SUFDQUMsVUFBVTtRQUFFSixNQUFNQztJQUFPO0lBQ3pCSSxPQUFPO1FBQUVMLE1BQU1DO0lBQU87SUFDdEJLLFlBQVk7UUFBRU4sTUFBTUM7SUFBTztJQUMzQk0sS0FBSztRQUFFUCxNQUFNQztJQUFPO0lBQ3BCTyxjQUFjO1FBQUVSLE1BQU1DO0lBQU87SUFDN0JRLE9BQU87UUFDTFQsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMEI7UUFDM0NRLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFVBQVU7UUFDUlosTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7UUFDN0NXLFFBQVE7SUFDVjtJQUNBQyxNQUFNO1FBQ0pkLE1BQU1DO1FBQ05jLE1BQU07WUFBQztZQUFlO1lBQVM7WUFBUztZQUFhO1NBQVc7UUFDaEVDLFNBQVM7SUFDWDtJQUNBQyxXQUFXO1FBQ1RqQixNQUFNa0I7SUFDUjtJQUNBQyxVQUFVO1FBQ1JuQixNQUFNb0I7UUFDTkosU0FBUztJQUNYO0FBQ0YsR0FDQTtJQUFFSyxZQUFZO0FBQUs7QUFHckIsaUVBQWUsd0RBQWdCLENBQUNFLElBQUksSUFBcUIzQixxREFBYyxDQUFRLFFBQVFDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJ0aC1wbGFzdG8tcGFjay8uL21vZGVscy9Vc2VyLnRzPzZkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG4gIGRlcGFydG1lbnQ/OiBzdHJpbmc7XG4gIGJpbz86IHN0cmluZztcbiAgcHJvZmlsZUltYWdlPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgcm9sZTogJ1NVUEVSX0FETUlOJyB8ICdBRE1JTicgfCAnU0FMRVMnIHwgJ01BUktFVElORycgfCAnRU1QTE9ZRUUnO1xuICBsYXN0TG9naW4/OiBEYXRlO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn1cblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWE8SVVzZXI+KFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgYSBuYW1lJ10sXG4gICAgICBtYXhsZW5ndGg6IFs2MCwgJ05hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiA2MCBjaGFyYWN0ZXJzJ10sXG4gICAgfSxcbiAgICB1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwaG9uZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBkZXBhcnRtZW50OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGJpbzogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwcm9maWxlSW1hZ2U6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBwcm92aWRlIGFuIGVtYWlsJ10sXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZCddLFxuICAgICAgc2VsZWN0OiBmYWxzZSxcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGVudW06IFsnU1VQRVJfQURNSU4nLCAnQURNSU4nLCAnU0FMRVMnLCAnTUFSS0VUSU5HJywgJ0VNUExPWUVFJ10sXG4gICAgICBkZWZhdWx0OiAnRU1QTE9ZRUUnLFxuICAgIH0sXG4gICAgbGFzdExvZ2luOiB7XG4gICAgICB0eXBlOiBEYXRlLFxuICAgIH0sXG4gICAgaXNBY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCAobW9uZ29vc2UubW9kZWxzLlVzZXIgYXMgTW9kZWw8SVVzZXI+KSB8fCBtb25nb29zZS5tb2RlbDxJVXNlcj4oJ1VzZXInLCBVc2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwidXNlcm5hbWUiLCJwaG9uZSIsImRlcGFydG1lbnQiLCJiaW8iLCJwcm9maWxlSW1hZ2UiLCJlbWFpbCIsInVuaXF1ZSIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwic2VsZWN0Iiwicm9sZSIsImVudW0iLCJkZWZhdWx0IiwibGFzdExvZ2luIiwiRGF0ZSIsImlzQWN0aXZlIiwiQm9vbGVhbiIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ }),

/***/ "(rsc)/./models/UserSession.ts":
/*!*******************************!*\
  !*** ./models/UserSession.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSessionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    sessionId: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    userAgent: {\n        type: String,\n        default: \"Unknown\"\n    },\n    ipAddress: {\n        type: String,\n        default: \"Unknown\"\n    },\n    device: {\n        type: String,\n        default: \"Unknown\"\n    },\n    browser: {\n        type: String,\n        default: \"Unknown\"\n    },\n    location: {\n        type: String,\n        default: \"Unknown\"\n    },\n    lastActive: {\n        type: Date,\n        default: Date.now\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n});\nconst UserSession = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).UserSession || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"UserSession\", UserSessionSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSession);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlclNlc3Npb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBZ0J0RCxNQUFNRSxvQkFBb0IsSUFBSUQsNENBQU1BLENBQ2xDO0lBQ0VFLFFBQVE7UUFBRUMsTUFBTUgsNENBQU1BLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQVFDLFVBQVU7SUFBSztJQUNuRUMsV0FBVztRQUFFTCxNQUFNTTtRQUFRRixVQUFVO1FBQU1HLFFBQVE7SUFBSztJQUN4REMsV0FBVztRQUFFUixNQUFNTTtRQUFRRyxTQUFTO0lBQVU7SUFDOUNDLFdBQVc7UUFBRVYsTUFBTU07UUFBUUcsU0FBUztJQUFVO0lBQzlDRSxRQUFRO1FBQUVYLE1BQU1NO1FBQVFHLFNBQVM7SUFBVTtJQUMzQ0csU0FBUztRQUFFWixNQUFNTTtRQUFRRyxTQUFTO0lBQVU7SUFDNUNJLFVBQVU7UUFBRWIsTUFBTU07UUFBUUcsU0FBUztJQUFVO0lBQzdDSyxZQUFZO1FBQUVkLE1BQU1lO1FBQU1OLFNBQVNNLEtBQUtDLEdBQUc7SUFBQztJQUM1Q0MsVUFBVTtRQUFFakIsTUFBTWtCO1FBQVNULFNBQVM7SUFBSztBQUMzQyxHQUNBO0lBQUVVLFlBQVk7QUFBSztBQUdyQixNQUFNQyxjQUFjLHdEQUFnQixDQUFDQSxXQUFXLElBQXFDeEIscURBQWMsQ0FBZSxlQUFlRTtBQUNqSSxpRUFBZXNCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJ0aC1wbGFzdG8tcGFjay8uL21vZGVscy9Vc2VyU2Vzc2lvbi50cz9hOWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyU2Vzc2lvbiBleHRlbmRzIERvY3VtZW50IHtcbiAgdXNlcklkOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZDtcbiAgc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHVzZXJBZ2VudDogc3RyaW5nO1xuICBpcEFkZHJlc3M6IHN0cmluZztcbiAgZGV2aWNlOiBzdHJpbmc7XG4gIGJyb3dzZXI6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbiAgbGFzdEFjdGl2ZTogRGF0ZTtcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBVc2VyU2Vzc2lvblNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICB1c2VySWQ6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBzZXNzaW9uSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gICAgdXNlckFnZW50OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ1Vua25vd24nIH0sXG4gICAgaXBBZGRyZXNzOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ1Vua25vd24nIH0sXG4gICAgZGV2aWNlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ1Vua25vd24nIH0sXG4gICAgYnJvd3NlcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdVbmtub3duJyB9LFxuICAgIGxvY2F0aW9uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ1Vua25vd24nIH0sXG4gICAgbGFzdEFjdGl2ZTogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9LFxuICAgIGlzQWN0aXZlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmNvbnN0IFVzZXJTZXNzaW9uID0gKG1vbmdvb3NlLm1vZGVscy5Vc2VyU2Vzc2lvbiBhcyBtb25nb29zZS5Nb2RlbDxJVXNlclNlc3Npb24+KSB8fCBtb25nb29zZS5tb2RlbDxJVXNlclNlc3Npb24+KCdVc2VyU2Vzc2lvbicsIFVzZXJTZXNzaW9uU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJTZXNzaW9uO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVXNlclNlc3Npb25TY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwic2Vzc2lvbklkIiwiU3RyaW5nIiwidW5pcXVlIiwidXNlckFnZW50IiwiZGVmYXVsdCIsImlwQWRkcmVzcyIsImRldmljZSIsImJyb3dzZXIiLCJsb2NhdGlvbiIsImxhc3RBY3RpdmUiLCJEYXRlIiwibm93IiwiaXNBY3RpdmUiLCJCb29sZWFuIiwidGltZXN0YW1wcyIsIlVzZXJTZXNzaW9uIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/UserSession.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/ua-parser-js","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C17nir%5CDownloads%5CParth-Plasto-Pack-main%2003&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();