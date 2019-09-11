(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/binding/binding.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/binding/binding.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>{{userid}}</p>\n\n<button disabled={{btnstatus}}>Click</button>\n<button [disabled]=\"btnstatus\">Click</button>\n\n<button (click)=\"changeTitle()\">changeTitle</button>\n\n<input type=\"text\" [(ngModel)]=\"inputtext\">\n<h1>Welcome {{inputtext}}</h1>\n-->\n<div class=\"d-md-flex h-md-100 align-items-center\">\n\n    <!-- First Half -->\n    \n    <div class=\"col-md-2 p-0 bg-indigo h-md-100\">\n        <div style=\"height: 6vh;margin-top: 10px;\">\n                <h3 style=\"color: white;text-align: center\">Online users</h3>\n        </div>\n        \n        <div class=\"list-group\">\n            <button type=\"button\" class=\"list-group-item list-group-item-action\"  *ngFor=\"let user of onlineusers\" (click)=\"startChatSession($event.target.innerText)\">\n                    <div class=\"d-md-flex align-items-center\">\n                <div class=\"col-md-11 p-0 bg-indigo\">\n                <a id=\"userfield\">{{user}}</a>\n                </div>\n                <div class=\"col-md-1 p-0\">\n                        <img src=\"./assets/more.svg\" alt=\"Online Image\" height=\"10\" width=\"10\">\n                </div>\n            </div>\n            </button>\n        </div>\n\n    </div>\n    \n    <!-- Second Half -->\n    \n    <div class=\"col-md-10 p-0 bg-white h-md-100 loginarea\">\n      \n        <div>\n        <div id=\"chatheader\" style=\"height: 6vh;\">\n         <p style=\"color: white;text-align: center;font-size: 25px;\">{{chatdesc}}</p>\n        </div>\n        </div>\n\n        <div style=\"height: 89vh;\">\n                <p id=\"chatlog\" style=\"position: absolute; bottom: 60px;margin-left: 15px;\">{{chatlog}}</p>\n        </div>\n        \n\n        <div style=\"height: 5vh;\">\n        <div class=\"d-md-flex align-items-center\">\n            <div class=\"col-md-10 p-0\">\n            <input type=\"text\" id=\"chatbox\" style=\"width: 100%;margin-left: 10px;\" [(ngModel)]=\"chattext\">\n            </div>\n            <div class=\"col-md-1 p-0\">\n            <input type=\"button\" class=\"fadeIn fourth\" style=\"margin-left: 30px;\" value=\"Send\" (click)=\"sendText()\">\n            </div>\n            <div class=\"col-md-1 p-0\">\n            <input type=\"button\" class=\"fadeIn fourth\" data-toggle=\"modal\" data-target=\"#exampleModal\" value=\"Video Call\" (click)=\"openvideo()\">\n            </div>\n        </div>\n        </div>\n    \n    </div>\n        \n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                    <div class=\"split left\">\n                            <div class=\"centered\">\n                              <h2>Jane Flex</h2>\n                              <p>Some text.</p>\n                            </div>\n                     </div>\n                          \n                    <div class=\"split right\">\n                            <div class=\"centered\">\n                              <h2>John Doe</h2>\n                              <p>Some text here too.</p>\n                            </div>\n                   </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </div>\n        </div>\n</div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n      <!-- Login Form -->\n      <div id=\"formFooter\">       \n      </div> \n      <form>    \n        <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"Input Your Name\" [(ngModel)]=\"username\">\n       <!-- <input type=\"button\" class=\"fadeIn fourth\" value=\"Enter Chat\" routerLink=\"/binding\" (click)=\"loadchatwindow()\"> -->\n       <input type=\"button\" class=\"fadeIn fourth\" value=\"Enter Chat\" [routerLink]=\"['/binding',username]\"> \n      </form>      \n      <div id=\"formFooter\">       \n      </div>    \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'my-first-app';
        this.users = ["one", "two", "three"];
        this.userobj = [
            { name: "Som", id: 1, city: "Bam" },
            { name: "Sam", id: 2, city: "Ban" }
        ];
        this.isuservalid = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./binding/binding.component */ "./src/app/binding/binding.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









const routes = [
    { path: '', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"] },
    { path: 'binding/:username', component: _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__["BindingComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__["BindingComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/binding/binding.component.css":
/*!***********************************************!*\
  !*** ./src/app/binding/binding.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 768px) {\n    .h-md-100 { height: 100vh; }\n}\n.btn-round { border-radius: 30px; }\n.bg-indigo { background: #56baed; }\n.text-cyan { color: #35bdff; }\n.list-group-item{\n    background: #56baed;\n}\n#userfield{\n    color: white; \n}\nbutton:hover { \n    z-index: 555555 !important;\n  }\n#chatheader{\n    border: 1px solid #ccc!important;\n    background-color: #56baed;\n  }\n#chatbox{\n    border: 3px solid #ccc!important;\n    border-radius: 10px;\n  }\n.fadeIn {\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n.fadeIn.fourth {\n    background-color: #39ace7;\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n    border-radius: 10px;\n  }\n.modal-dialog{\n    position: relative;\n    display: table; /* <-- This makes the trick */\n    overflow-y: auto;    \n    overflow-x: auto;\n    width: auto;\n    min-width: 800px;  \n    height: 500px; \n}\n.modal-content {\n    height: 100%;\n    background-color:#BBD6EC;\n}\n.modal-header {\n    background-color: #337AB7;\n    padding:16px 16px;\n    color:#FFF;\n    border-bottom:2px dashed #337AB7;\n }\n#container {\n    margin: 0px auto;\n    width: 1010px;\n    height: 375px;\n    border: 10px #333 solid;\n  }\n.split {\n    height: 100%;\n    width: 50%;\n    position: relative;\n    top: 0;\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n/* Control the left side */\n.left {\n    left: 0;\n    background-color: #111;\n  }\n/* Control the right side */\n.right {\n    right: 0;\n    background-color: red;\n  }\n.centered {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmluZGluZy9iaW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZLGFBQWEsRUFBRTtBQUMvQjtBQUNBLGFBQWEsbUJBQW1CLEVBQUU7QUFDbEMsYUFBYSxtQkFBbUIsRUFBRTtBQUNsQyxhQUFhLGNBQWMsRUFBRTtBQUU3QjtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBRTNCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjLEVBQUUsNkJBQTZCO0lBQzdDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBRUU7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQ0FBZ0M7Q0FDbkM7QUFFQztJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUdBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFFQSwwQkFBMEI7QUFDMUI7SUFDRSxPQUFPO0lBQ1Asc0JBQXNCO0VBQ3hCO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0UsUUFBUTtJQUNSLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9iaW5kaW5nL2JpbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5oLW1kLTEwMCB7IGhlaWdodDogMTAwdmg7IH1cbn1cbi5idG4tcm91bmQgeyBib3JkZXItcmFkaXVzOiAzMHB4OyB9XG4uYmctaW5kaWdvIHsgYmFja2dyb3VuZDogIzU2YmFlZDsgfVxuLnRleHQtY3lhbiB7IGNvbG9yOiAjMzViZGZmOyB9XG5cbi5saXN0LWdyb3VwLWl0ZW17XG4gICAgYmFja2dyb3VuZDogIzU2YmFlZDtcbn1cbiN1c2VyZmllbGR7XG4gICAgY29sb3I6IHdoaXRlOyBcbn1cblxuYnV0dG9uOmhvdmVyIHsgXG4gICAgei1pbmRleDogNTU1NTU1ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjY2hhdGhlYWRlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICB9XG5cbiAgI2NoYXRib3h7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2NjYyFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5mYWRlSW4ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gIH1cblxuICAuZmFkZUluLmZvdXJ0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5tb2RhbC1kaWFsb2d7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiA8LS0gVGhpcyBtYWtlcyB0aGUgdHJpY2sgKi9cbiAgICBvdmVyZmxvdy15OiBhdXRvOyAgICBcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogODAwcHg7ICBcbiAgICBoZWlnaHQ6IDUwMHB4OyBcbn1cblxuICAubW9kYWwtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0JCRDZFQztcbn0gICAgICAgXG4gXG4ubW9kYWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3QUI3O1xuICAgIHBhZGRpbmc6MTZweCAxNnB4O1xuICAgIGNvbG9yOiNGRkY7XG4gICAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkICMzMzdBQjc7XG4gfVxuXG4gICNjb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgd2lkdGg6IDEwMTBweDtcbiAgICBoZWlnaHQ6IDM3NXB4O1xuICAgIGJvcmRlcjogMTBweCAjMzMzIHNvbGlkO1xuICB9XG5cblxuICAuc3BsaXQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIFxuICAvKiBDb250cm9sIHRoZSBsZWZ0IHNpZGUgKi9cbiAgLmxlZnQge1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgfVxuICBcbiAgLyogQ29udHJvbCB0aGUgcmlnaHQgc2lkZSAqL1xuICAucmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICAuY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/binding/binding.component.ts":
/*!**********************************************!*\
  !*** ./src/app/binding/binding.component.ts ***!
  \**********************************************/
/*! exports provided: BindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingComponent", function() { return BindingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let BindingComponent = class BindingComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.pagetitle = "Hello from pager";
        this.btnstatus = true;
        this.socketmessage = {};
        this.webSocketURL = null;
        this.videoSocketURL = null;
        this.historicalchatlog = new Map();
    }
    ngOnInit() {
        this.senderName = this.activatedRoute.snapshot.params['username'];
        $.ajax("ChatApplication " + '/chat/fetchusers', {
            dataType: 'json',
            async: false,
            success: function (data) {
                this.onlineusers = data;
            },
            error: function (errorMessage) {
                alert('failures e');
                console.log('Error: ' + errorMessage);
                this.onlineusers = [];
            }
        });
        this.onlineusers = ["Sam", "Victor", "Shelly", "Carol"];
        this.setupwebsocket();
    }
    startChatSession(receiver) {
        var log = document.getElementById('chatlog');
        this.historicalchatlog.set(this.receiver, log.innerHTML);
        this.receiver = receiver;
        this.chatdesc = "Conversation with " + receiver;
        if (this.historicalchatlog.has(receiver)) {
            log.innerHTML = "" + this.historicalchatlog.get(receiver);
        }
        else {
            log.innerHTML = "";
        }
        this.socketmessage.senderName = this.senderName;
        this.socketmessage.receiverName = this.receiver;
    }
    sendText() {
        if (this.receiver.length == 0) {
            alert('Whom do you want me to send the message buddy!!');
        }
        else {
            //alert(this.chattext);
            $('#chatlog').append("<br>" + this.senderName + " : " + this.chattext);
            this.chattext = "";
        }
    }
    openvideo() {
        console.log('dadad');
    }
    // commented out section
    getFrame() {
        var video = document.querySelector('#videoElement1');
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        var data = canvas.toDataURL('image/jpeg');
        return data;
    }
    convertToBinary(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = new Blob([ab]);
        return bb;
    }
    shareuserscreen() {
        console.log("sender: " + this.senderName + ",receiver: " + this.receiver);
        document.getElementById("container").style.display = "block";
        var video = document.querySelector("#videoElement1");
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then(function (stream) {
                console.log(stream);
                video.srcObject = stream;
                this.startvideostream();
            })
                .catch(function (err0r) {
                console.log("Something went wrong!");
            });
        }
    }
    startvideostream() {
        //videoSocketURL = new WebSocket("wss://appservice07.azurewebsites.net/video/"+user+"/"+receiver);
        this.videoSocketURL = new WebSocket("ws://localhost:8080/ChatApplication/video/" + this.senderName + "/" + this.receiver);
        this.videoSocketURL.onopen = function () {
            console.log("Openened connection to videowebsocket");
        };
        this.videoSocketURL.onmessage = function (msg) {
            //var target: HTMLVideoElement = document.getElementById("videoElement2");
            var url = window.webkitURL.createObjectURL(msg.data);
            //target.onload = function() 
            {
                window.webkitURL.revokeObjectURL(url);
            }
            ;
            //target.src = url;
        };
        this.videoSocketURL.onclose = function (closeEvent) {
            console.log("inside onclose for websocket");
        };
        this.videoSocketURL.onerror = function (errorEvent) {
            console.log("inside onerror for websocket");
        };
        setInterval(() => {
            var newblob = this.convertToBinary(this.getFrame());
            this.videoSocketURL.send(newblob);
        }, 1000 / 10);
    }
    setupwebsocket() {
        //webSocketURL = new WebSocket("wss://appservice07.azurewebsites.net/chat/"+user);
        this.webSocketURL = new WebSocket("ws://localhost:8080/ChatApplication/chat/" + this.senderName);
        this.webSocketURL.onopen = function (openEvent) {
            console.log("inside onopen for websocket");
            console.log("WebSocket OPEN: " + JSON.stringify(openEvent, null, 4));
        };
        this.webSocketURL.onclose = function (closeEvent) {
            console.log("inside onclose for websocket");
            alert("You have been logged out kindly log back in");
            //TODO
            document.getElementById("secondscreen").style.display = "none";
            document.getElementById("firstscreen").style.display = "block";
            console.log("WebSocket CLOSE: " + JSON.stringify(closeEvent, null, 4));
        };
        this.webSocketURL.onerror = function (errorEvent) {
            console.log("inside onerror for websocket");
            console.log("WebSocket ERROR: " + JSON.stringify(errorEvent, null, 4));
        };
        this.webSocketURL.onmessage = function (messageEvent) {
            console.log("inside onmessage for websocket");
            var wsMsg = JSON.parse(messageEvent.data);
            if ((wsMsg.receiverName == this.receiverName && wsMsg.senderName == this.senderName) || (wsMsg.receiverName == this.senderName && wsMsg.senderName == this.receiverName)) {
                if (wsMsg.hasVideo) {
                    //document.getElementById('myFirstDialog').show();
                    document.getElementById('dialogtext').innerHTML = wsMsg.payload;
                    this.shareuserscreen();
                }
                else {
                    console.log("WebSocket MESSAGE: " + wsMsg);
                    var oldval = document.getElementById('chattext').innerHTML;
                    document.getElementById('chattext').innerHTML = oldval + "<br>" + wsMsg.senderName + " : " + wsMsg.payload;
                }
            }
        };
    }
};
BindingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
BindingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-binding',
        template: __webpack_require__(/*! raw-loader!./binding.component.html */ "./node_modules/raw-loader/index.js!./src/app/binding/binding.component.html"),
        styles: [__webpack_require__(/*! ./binding.component.css */ "./src/app/binding/binding.component.css")]
    })
], BindingComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* BASIC */\n\nhtml {\n    background-color: #56baed;\n  }\n\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n  }\n\na {\n    color: #92badd;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }\n\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display:inline-block;\n    margin: 40px 8px 10px 8px; \n    color: #cccccc;\n  }\n\n/* STRUCTURE */\n\n.wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; \n    -webkit-box-pack: center; \n            justify-content: center;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n  }\n\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n\n/* TABS */\n\nh2.inactive {\n    color: #cccccc;\n  }\n\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n  }\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n  }\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n\ninput[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n\ninput[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n\ninput[type=text]:placeholder {\n    color: #cccccc;\n  }\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n\n@-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n\n@keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n  }\n\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n  }\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    -webkit-transition: width 0.2s;\n    transition: width 0.2s;\n  }\n\n.underlineHover:hover {\n    color: #0d0d0d;\n  }\n\n.underlineHover:hover:after{\n    width: 100%;\n  }\n\n/* OTHERS */\n\n*:focus {\n      outline: none;\n  }\n\n#icon {\n    width:60%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFVBQVU7O0FBRVY7SUFDSSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsYUFBYTtFQUNmOztBQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7QUFJQSxjQUFjOztBQUVkO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0VBQzlCOztBQUlBLFNBQVM7O0FBRVQ7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsd0NBQXdDO0lBSXhDLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUVFLDhCQUE4QjtJQUc5QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUl4QyxnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFDViwyQ0FBMkM7TUFDM0MsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUJBQXVCO01BQ3ZCLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsZUFBZTtJQUNqQjtFQUNGOztBQUVBLGtDQUFrQzs7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFMUQ7SUFDRSxTQUFTO0lBQ1Qsa0NBQWtDO0lBRWxDLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBRXBDLDRCQUE0Qjs7SUFFNUIsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDJCQUEyQjtJQUUzQixtQkFBbUI7RUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw4QkFBc0I7SUFBdEIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFJQSxXQUFXOztBQUVYO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtJQUNFLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBCQVNJQyAqL1xuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgYSB7XG4gICAgY29sb3I6ICM5MmJhZGQ7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBTVFJVQ1RVUkUgKi9cbiAgXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAjZm9ybUNvbnRlbnQge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgI2Zvcm1Gb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogVEFCUyAqL1xuICBcbiAgaDIuaW5hY3RpdmUge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICB9XG4gIFxuICBoMi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMGQwZDBkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIEZPUk0gVFlQT0dSQVBIWSovXG4gIFxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogODUlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIEFOSU1BVElPTlMgKi9cbiAgXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbiAgLmZhZGVJbkRvd24ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgXG4gIC5mYWRlSW4ge1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICB9XG4gIFxuICAuZmFkZUluLmZpcnN0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIH1cbiAgXG4gIC5mYWRlSW4uc2Vjb25kIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIH1cbiAgXG4gIC5mYWRlSW4udGhpcmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgfVxuICBcbiAgLmZhZGVJbi5mb3VydGgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICBcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbiAgLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG4gIH1cbiAgXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gIH1cbiAgXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBPVEhFUlMgKi9cbiAgXG4gICo6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgfSBcbiAgXG4gICNpY29uIHtcbiAgICB3aWR0aDo2MCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginPageComponent = class LoginPageComponent {
    constructor() {
        this.username = "";
    }
    loadchatwindow() {
        console.log('inside loadchatwindow');
        /*$.ajax('http://localhost:8080/ChatApplication/chat/fetchusers',
        {
            dataType: 'json',
            async: false,
            success: function (data) {
             alert(data)
            },
            error: function (errorMessage) {
                console.log('Error: ' + errorMessage);
            }
        });*/
    }
    ngOnInit() {
    }
};
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/s0r0282/my-first-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map