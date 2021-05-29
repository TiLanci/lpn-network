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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/enterprise/enterprise.component */ "./src/app/pages/enterprise/enterprise.component.ts");
/* harmony import */ var _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/forum/forum.component */ "./src/app/pages/forum/forum.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_research_research_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/research/research.component */ "./src/app/pages/research/research.component.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _pages_university_university_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/university/university.component */ "./src/app/pages/university/university.component.ts");













const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "sign-in", component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"] },
    { path: "sign-up", component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"] },
    { path: "forum", component: _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"] },
    { path: "research", component: _pages_research_research_component__WEBPACK_IMPORTED_MODULE_7__["ResearchComponent"] },
    { path: "university", component: _pages_university_university_component__WEBPACK_IMPORTED_MODULE_10__["UniversityComponent"] },
    { path: "entreprise", component: _pages_enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_2__["EnterpriseComponent"] },
    { path: "forum", component: _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"] },
    { path: "profile", component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: "**", component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true,
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'LPNNetworkFE';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/forum/forum.component */ "./src/app/pages/forum/forum.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/enterprise/enterprise.component */ "./src/app/pages/enterprise/enterprise.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_university_university_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/university/university.component */ "./src/app/pages/university/university.component.ts");
/* harmony import */ var _pages_research_research_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/research/research.component */ "./src/app/pages/research/research.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
        _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
        _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
        _pages_enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_11__["EnterpriseComponent"],
        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
        _pages_university_university_component__WEBPACK_IMPORTED_MODULE_13__["UniversityComponent"],
        _pages_research_research_component__WEBPACK_IMPORTED_MODULE_14__["ResearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                    _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
                    _pages_forum_forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                    _pages_enterprise_enterprise_component__WEBPACK_IMPORTED_MODULE_11__["EnterpriseComponent"],
                    _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                    _pages_university_university_component__WEBPACK_IMPORTED_MODULE_13__["UniversityComponent"],
                    _pages_research_research_component__WEBPACK_IMPORTED_MODULE_14__["ResearchComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 2, vars: 0, template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nav-bar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/enterprise/enterprise.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/enterprise/enterprise.component.ts ***!
  \**********************************************************/
/*! exports provided: EnterpriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseComponent", function() { return EnterpriseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EnterpriseComponent {
    constructor() { }
    ngOnInit() {
    }
}
EnterpriseComponent.ɵfac = function EnterpriseComponent_Factory(t) { return new (t || EnterpriseComponent)(); };
EnterpriseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnterpriseComponent, selectors: [["app-enterprise"]], decls: 2, vars: 0, template: function EnterpriseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "enterprise works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudGVycHJpc2UvZW50ZXJwcmlzZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnterpriseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-enterprise',
                templateUrl: './enterprise.component.html',
                styleUrls: ['./enterprise.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/forum/forum.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/forum/forum.component.ts ***!
  \************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ForumComponent {
    constructor() { }
    ngOnInit() {
    }
    onToggelCollapse(id) {
        document.getElementById(id).classList.toggle('active');
    }
}
ForumComponent.ɵfac = function ForumComponent_Factory(t) { return new (t || ForumComponent)(); };
ForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForumComponent, selectors: [["app-forum"]], decls: 212, vars: 0, consts: [[1, "wrapper"], ["id", "profile", 1, "card", "profile"], [1, "card-upper"], [1, "card-footer"], ["src", "assets/img/avatar.png", 1, "profile-img"], [1, "card-content"], [1, "title"], ["routerLink", "/profile", 1, "profile-link"], ["id", "favs", 1, "card", "favs"], [1, "content"], [1, "tag"], ["id", "form"], [1, "card", "add-pub"], ["role", "textbox", "name", "new-post", "id", "new-post", "contenteditable", "", 1, "new-post"], [1, "add-pub-footer"], [1, "publish"], [1, "card", "pub"], [1, "rate"], ["width", "25px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 492.004 492.004", 0, "xml", "space", "preserve", 1, "up-vote", 2, "enable-background", "new 0 0 492.004 492.004"], ["d", "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n          c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n          c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n          c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"], [1, "num"], ["width", "25px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 492.004 492.004", 0, "xml", "space", "preserve", 1, "down-vote", 2, "enable-background", "new 0 0 492.004 492.004"], [1, "upper-bond"], [1, "creator"], [1, "date"], ["routerLink", "/home", 1, "link"], ["id", "search"], [1, "input-container"], ["src", "assets/svg/search-icon.svg", 1, "icon"], ["type", "text", "placeholder", "Looking for something?", 1, "input-field"], [1, "search-results"], [1, "search-result", "card"], ["src", "assets/img/logo.png"], [1, "location"], ["width", "20", "height", "31", "viewBox", "0 0 20 31", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 0C10.9167 0 11.8021 0.116048 12.6562 0.348145C13.5104 0.580241 14.3073 0.903158 15.0469 1.31689C15.7865 1.73063 16.4583 2.23519 17.0625 2.83057C17.6667 3.42594 18.1875 4.08187 18.625 4.79834C19.0625 5.51481 19.401 6.28678 19.6406 7.11426C19.8802 7.94173 20 8.79948 20 9.6875C20 10.3838 19.9167 11.0448 19.75 11.6704C19.5833 12.2961 19.3333 12.9268 19 13.5625L10 31L1 13.5625C0.677083 12.9368 0.432292 12.3112 0.265625 11.6855C0.0989583 11.0599 0.0104167 10.3939 0 9.6875C0 8.79948 0.119792 7.94173 0.359375 7.11426C0.598958 6.28678 0.932292 5.51481 1.35938 4.79834C1.78646 4.08187 2.30729 3.43099 2.92188 2.8457C3.53646 2.26042 4.21354 1.75586 4.95312 1.33203C5.69271 0.908203 6.48958 0.580241 7.34375 0.348145C8.19792 0.116048 9.08333 0 10 0ZM10 13.5625C10.5521 13.5625 11.0677 13.4616 11.5469 13.2598C12.026 13.0579 12.4531 12.7804 12.8281 12.4272C13.2031 12.0741 13.4896 11.6654 13.6875 11.2012C13.8854 10.737 13.9896 10.2324 14 9.6875C14 9.15267 13.8958 8.65316 13.6875 8.18896C13.4792 7.72477 13.1927 7.31104 12.8281 6.94775C12.4635 6.58447 12.0417 6.30697 11.5625 6.11523C11.0833 5.9235 10.5625 5.82259 10 5.8125C9.44792 5.8125 8.93229 5.91341 8.45312 6.11523C7.97396 6.31706 7.54688 6.59456 7.17188 6.94775C6.79688 7.30094 6.51042 7.70964 6.3125 8.17383C6.11458 8.63802 6.01042 9.14258 6 9.6875C6 10.2223 6.10417 10.7218 6.3125 11.186C6.52083 11.6502 6.80729 12.064 7.17188 12.4272C7.53646 12.7905 7.95833 13.068 8.4375 13.2598C8.91667 13.4515 9.4375 13.5524 10 13.5625Z", "fill", "white"], ["id", "suggestions"], [1, "suggestions"], [1, "card", "profile"]], template: function ForumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ahmed Bh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse facilis blanditiis aperiam error. Illum voluptas magnam sit ab! Facere obcaecati, quam consectetur impedit saepe corrupti tempora architecto sint itaque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Favorites: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "#LPN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "#dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "#new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "#ToDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "#Bla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "New Post: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Subbmit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Publications: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Research: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Institut National des Science Applicable et de Technologie INSAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Tunis, Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Institut National des Science Applicable et de Technologie INSAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Tunis, Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Institut National des Science Applicable et de Technologie INSAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Tunis, Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Suggestions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Ahmed Bh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Ahmed Bh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Ahmed Bh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 300px auto;\n  gap: 1.5rem;\n  padding: 25px;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse.active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse.active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: rotate(0deg);\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse.active[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 1000px;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  transition: all 0.3s ease-in-out;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg);\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transition: max-height 1.5s ease-in-out;\n  overflow: hidden;\n  max-height: 0;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%] {\n  height: 30%;\n  background: linear-gradient(90deg, #00C6FF 0%, #0072FF 100%);\n  opacity: 0.6;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  top: -60px;\n  border: 3px solid white;\n  border-radius: 50%;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: -60px;\n  padding: 10px 15px;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #00A8E8;\n  color: white;\n  font-size: 0.65rem;\n  line-height: 0.75rem;\n  font-family: Montserrat;\n  padding: 0.25rem 1.5rem;\n  border-radius: 1.25rem;\n  border: transparent solid 2px;\n  -webkit-text-decoration: auto;\n          text-decoration: auto;\n  margin: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]:hover {\n  border: black solid 2px;\n  color: black;\n  background-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   #favs[_ngcontent-%COMP%] {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   #favs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]   #favs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background-color: #00A8E8;\n  padding: 5px 10px;\n  margin: 5px 2.5px;\n  border-radius: 20px;\n  color: white;\n  font-family: Montserrat;\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%] {\n  padding: 10px;\n  overflow-y: scroll;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%] {\n  margin: 20px 5px;\n  overflow: unset;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .new-post[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2rem;\n  max-height: 10rem;\n  font-size: 1rem;\n  position: relative;\n  border-radius: 1rem;\n  background-color: #F2F2F2;\n  color: #808080;\n  border: none;\n  padding: 0.5rem 1rem;\n  outline: none;\n  resize: vertical;\n  overflow: scroll;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .new-post[_ngcontent-%COMP%]:empty::before {\n  content: \"Express Yourself\";\n  position: absolute;\n  color: #7A7A7A;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%] {\n  background-color: #00A8E8;\n  color: white;\n  font-size: 0.75rem;\n  font-family: Montserrat;\n  padding: 0.25rem 1rem;\n  border-radius: 1rem;\n  border: transparent solid 2px;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%]:hover {\n  border: black solid 2px;\n  color: black;\n  background-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%]:active {\n  transform: translate(0.5px, 0.25px);\n  border: black solid 2px;\n  color: black;\n  background-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%] {\n  margin: 20px 5px;\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 5px;\n  color: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out;\n  transform: rotate(-90deg);\n  fill: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote[_ngcontent-%COMP%]:hover {\n  fill: #00D100;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote.active[_ngcontent-%COMP%] {\n  fill: #00D100;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: Montserrat;\n  color: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out;\n  transform: rotate(90deg);\n  fill: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote[_ngcontent-%COMP%]:hover {\n  fill: #D10000;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote.active[_ngcontent-%COMP%] {\n  fill: #D10000;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%]   .creator[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: bold;\n  line-height: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #9E9E9E;\n  right: 25px;\n  line-height: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:link {\n  color: #00A8E8;\n  text-decoration: none;\n  border-bottom: 1px solid;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:visited {\n  color: #0090ff;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #00c6ff;\n  border-bottom: none;\n}\n.wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:active {\n  color: #00A8E8;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%] {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  border-radius: 2rem;\n  background: #F2F2F2;\n  border: none;\n  border: #9E9E9E solid 1px;\n  transition: all 0.5s ease;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: transparent;\n  color: white;\n  width: 2rem;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border-radius: 2rem;\n  border: none;\n  background: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]:focus-within {\n  border: #7A7A7A solid 1px;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F2F2F2;\n  margin: 15px 0;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 75px;\n  height: 75px;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 10px;\n  padding: 5px;\n  height: 75px;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: auto;\n  height: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #7A7A7A;\n}\n.wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #7A7A7A;\n  font-weight: 400;\n  margin: 0;\n  margin-left: 0.25rem;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%] {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%] {\n  padding: 5px;\n  overflow-x: scroll;\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  height: 180px;\n  min-width: 150px;\n  margin: 0 10px 10px 10px;\n  overflow: hidden;\n  padding: 0;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  height: 40%;\n  background: linear-gradient(90deg, #00C6FF66 0%, #0072FF66 100%);\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  top: calc(100% - 50px);\n  border: 3px solid white;\n  border-radius: 50%;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  height: 60%;\n  padding-top: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 10px 15px;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #00A8E8;\n  color: white;\n  font-size: 0.6rem;\n  font-family: Montserrat;\n  padding: 0.15rem 1.5rem;\n  border-radius: 1.25rem;\n  border: transparent solid 2px;\n  -webkit-text-decoration: auto;\n          text-decoration: auto;\n  margin: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]:hover {\n  border: black solid 2px;\n  color: black;\n  background-color: transparent;\n}\n@media screen and (min-width: 576px) {\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 125px;\n    height: 125px;\n    top: -63px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n    margin-top: -63px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n}\n@media screen and (min-width: 992px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: 100vh;\n    grid-template-columns: minmax(225px, 1fr) 3fr minmax(250px, 1fr);\n    grid-template-rows: minmax(-webkit-min-content, 2fr) minmax(-webkit-min-content, 1fr);\n    grid-template-rows: minmax(min-content, 2fr) minmax(min-content, 1fr);\n    padding: 50px 75px 25px 75px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    top: -53px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n    margin-top: -53px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #favs[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 2;\n    display: unset;\n  }\n  .wrapper[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1/3;\n  }\n  .wrapper[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%] {\n    grid-column: 3;\n    grid-row: 1;\n    display: unset;\n  }\n  .wrapper[_ngcontent-%COMP%]   #suggestions[_ngcontent-%COMP%] {\n    grid-column: 3;\n    grid-row: 2;\n    display: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRko7QUFPVTtFQUNFLHdCQUFBO0FBTFo7QUFNWTtFQUNFLHVCQUFBO0FBSmQ7QUFRUTtFQUNFLGtCQUFBO0FBTlY7QUFTTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFQUjtBQVFRO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FBTlY7QUFPVTtFQUNFLHdCQUFBO0FBTFo7QUFTTTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBUFI7QUFZRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFWSjtBQVdJO0VBQ0UsV0FBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtBQVROO0FBV0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFUTjtBQVdNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFUUjtBQWFNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhSO0FBWVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBVlY7QUFjTTtFQUNFLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7VUFBQSxxQkFBQTtFQUVBLFdBQUE7QUFoQlI7QUFrQlE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWhCVjtBQXNCRTtFQUNFLGFBQUE7QUFwQko7QUFxQkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQW5CTjtBQXFCTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFuQlI7QUF3QkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUF0Qko7QUF1Qkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFyQk47QUFzQk07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFwQlI7QUFzQlE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXBCVjtBQXdCTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBdEJSO0FBdUJRO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQXRCVjtBQXdCVTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBdEJaO0FBeUJVO0VBQ0UsYUFBQTtBQXZCWjtBQXlCVTtFQUNFLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUF2Qlo7QUE4Qkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUE1Qk47QUE2Qk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUEzQlI7QUE0QlE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQTFCVjtBQTJCVTtFQUNFLGFBQUE7QUF6Qlo7QUEyQlU7RUFDRSxhQUFBO0FBekJaO0FBNEJRO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBMUJWO0FBNEJRO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUExQlY7QUEyQlU7RUFDRSxhQUFBO0FBekJaO0FBMkJVO0VBQ0UsYUFBQTtBQXpCWjtBQThCTTtFQUNFLGNBQUE7QUE1QlI7QUE2QlE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQTNCVjtBQTRCVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQTFCWjtBQTRCVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTFCWjtBQThCUTtFQUNFLGtCQUFBO0FBNUJWO0FBOEJRO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUE1QlY7QUE4QlE7RUFDSSxjQUFBO0FBNUJaO0FBOEJRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBNUJaO0FBOEJRO0VBQ0ksY0FBQTtBQTVCWjtBQWtDRTtFQUNFLGFBQUE7QUFoQ0o7QUFpQ0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBL0JOO0FBZ0NNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTlCUjtBQWdDTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBOUJSO0FBbUNNO0VBQ0UseUJBQUE7QUFqQ1I7QUFxQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFuQ1I7QUFvQ1E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbENWO0FBb0NRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBbkNWO0FBcUNVO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQW5DWjtBQXFDVTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQW5DWjtBQW9DWTtFQU1FLFdBQUE7RUFDQSxlQUFBO0FBdkNkO0FBa0NjO0VBQ0UsYUFBQTtBQWhDaEI7QUFzQ1k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQXBDZDtBQTZDRTtFQUNFLGFBQUE7QUEzQ0o7QUE0Q0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBMUNOO0FBNENNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUExQ1I7QUEyQ1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEsV0FBQTtFQUNBLGdFQUFBO0FBMUNWO0FBNENVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBMUNaO0FBNkNRO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUEzQ1Y7QUE2Q1U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTNDWjtBQTRDWTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBMUNkO0FBOENVO0VBQ0Usa0JBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7VUFBQSxxQkFBQTtFQUVBLFdBQUE7QUFoRFo7QUFrRFk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWhEZDtBQTBERTtFQUdNO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBMURSO0VBNERNO0lBQ0UsaUJBQUE7RUExRFI7RUFrRVE7SUFDRSxhQUFBO0VBaEVWO0VBbUVNO0lBQ0UsZ0JBQUE7RUFqRVI7QUFDRjtBQXNFRTtFQW5kRjtJQW9kSSxhQUFBO0lBQ0EsZ0VBQUE7SUFDQSxxRkFBQTtJQUFBLHFFQUFBO0lBRUEsNEJBQUE7RUFwRUY7RUFzRUU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFQXBFSjtFQXNFTTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQXBFUjtFQXNFTTtJQUNFLGlCQUFBO0VBcEVSO0VBd0VFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBdEVKO0VBeUVFO0lBQ0UsY0FBQTtJQUNBLGFBQUE7RUF2RUo7RUEwRUU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUVBLGNBQUE7RUF6RUo7RUE0RUU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUExRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHggYXV0bztcclxuXHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMjVweDtcclxuXHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG5cclxuICAuY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICYuY29sbGFwc2V7XHJcbiAgICAgICYuYWN0aXZle1xyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3Byb2ZpbGV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5jYXJkLXVwcGVye1xyXG4gICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBDNkZGIDAlLCAjMDA3MkZGIDEwMCUpO1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1mb290ZXJ7XHJcbiAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHRvcDogLTYwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gSEVSRSBBREQgSU1HIE9OIEhPVkUgQkUgQkxBQ0tcclxuXHJcbiAgICAgIC5jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9maWxlLWxpbmt7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IC42NXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAuMjVyZW0gMS41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XHJcbiAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudCBzb2xpZCAycHg7XHJcblxyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogYXV0bztcclxuXHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNmYXZze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC5jb250ZW50e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAudGFne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE4RTg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMi41cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNmb3Jte1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC5hZGQtcHVie1xyXG4gICAgICBtYXJnaW46IDIwcHggNXB4O1xyXG4gICAgICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgICAgIC5uZXctcG9zdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuICAgICAgICAmOmVtcHR5OjpiZWZvcmV7XHJcbiAgICAgICAgICBjb250ZW50OiBcIkV4cHJlc3MgWW91cnNlbGZcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjN0E3QTdBO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkZC1wdWItZm9vdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC5wdWJsaXNoe1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQThFODtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcblxyXG4gICAgICAgICAgcGFkZGluZzogLjI1cmVtIDFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudCBzb2xpZCAycHg7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC41cHgsLjI1cHgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnB1YntcclxuICAgICAgbWFyZ2luOiAyMHB4IDVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLnJhdGV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjOUU5RTlFO1xyXG4gICAgICAgIC51cC12b3Rle1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgICBmaWxsOiAjOUU5RTlFO1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgZmlsbDogIzAwRDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICBmaWxsOiAjMDBEMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubnVte1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICBjb2xvcjogIzlFOUU5RTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvd24tdm90ZXtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICBmaWxsOiAjOUU5RTlFO1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgZmlsbDogI0QxMDAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICBmaWxsOiAjRDEwMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgLnVwcGVyLWJvbmR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgLmNyZWF0b3J7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM5RTlFOUU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5re1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rOmxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICMwMEE4RTg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rOnZpc2l0ZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwOTBmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwYzZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbms6YWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMEE4RTg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjc2VhcmNoe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXI6ICM5RTlFOUUgc29saWQgMXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZTtcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAmOmZvY3VzLXdpdGhpbntcclxuICAgICAgICBib3JkZXI6ICM3QTdBN0Egc29saWQgMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXJlc3VsdHN7XHJcbiAgICAgIC5zZWFyY2gtcmVzdWx0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAgICAgICBzcGFuLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9jYXRpb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgc3Zne1xyXG5cclxuICAgICAgICAgICAgICBwYXRoe1xyXG4gICAgICAgICAgICAgICAgZmlsbDogIzdBN0E3QTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogLjc1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzLnRpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3QTdBN0E7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNzdWdnZXN0aW9uc3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAuc3VnZ2VzdGlvbnN7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgLnByb2ZpbGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLmNhcmQtdXBwZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAgIzAwQzZGRjY2IDAlLCAjMDA3MkZGNjYgMTAwJSk7XHJcblxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1mb290ZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW46MCA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvZmlsZS1saW5re1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogLjE1cmVtIDEuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudCBzb2xpZCAycHg7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGF1dG87XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNTc2cHgpe1xyXG4gICAgI3Byb2ZpbGV7XHJcbiAgICAgIC5jYXJkLWZvb3RlcntcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgdG9wOiAtNjNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtY29udGVudHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC02M3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAmLmNvbGxhcHNle1xyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA5OTJweCl7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjI1cHgsIDFmcikgM2ZyIG1pbm1heCgyNTBweCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KG1pbi1jb250ZW50LCAyZnIpIG1pbm1heChtaW4tY29udGVudCwgMWZyKTtcclxuXHJcbiAgICBwYWRkaW5nOiA1MHB4IDc1cHggMjVweCA3NXB4O1xyXG5cclxuICAgICNwcm9maWxle1xyXG4gICAgICBncmlkLWNvbHVtbjogMTtcclxuICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgIC5jYXJkLWZvb3RlcntcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgdG9wOiAtNTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtY29udGVudHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01M3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2ZhdnN7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgICBncmlkLXJvdzogMjtcclxuICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2Zvcm17XHJcbiAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2h7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgICBncmlkLXJvdzogMTtcclxuXHJcbiAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgfVxyXG5cclxuICAgICNzdWdnZXN0aW9uc3tcclxuICAgICAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forum',
                templateUrl: './forum.component.html',
                styleUrls: ['./forum.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 0, consts: [[1, "main"], [1, "title"], [1, "description"], [1, "btn-grp"], ["routerLink", "/sign-up", 1, "sign-up"], ["routerLink", "/sign-in", 1, "sign-in"], [1, "basic"], [1, "content"], ["src", "assets/img/home_1.png"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LPNISTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reunion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The platform that reunites all LPNistes!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Share your experience with the new generations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime soluta laboriosam inventore hic velit? Vero eligendi culpa molestiae necessitatibus quisquam. Praesentium, quidem! Vero repudiandae inventore ea corrupti delectus, provident similique. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Share your experience with the new generations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime soluta laboriosam inventore hic velit? Vero eligendi culpa molestiae necessitatibus quisquam. Praesentium, quidem! Vero repudiandae inventore ea corrupti delectus, provident similique. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 92.5vh;\n  background: url('LPN.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10% 2.5%;\n}\n.main[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #00A8E8;\n  font-family: BebasNeue;\n  font-size: 5rem;\n  line-height: 5rem;\n}\n.main[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 0;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  font-weight: bold;\n}\n.main[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 0;\n  font-size: 1rem;\n  margin-top: 5%;\n  text-align: center;\n}\n.main[_ngcontent-%COMP%]   .btn-grp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.main[_ngcontent-%COMP%]   .btn-grp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: white;\n  color: black;\n  font-size: 1rem;\n  font-family: Montserrat;\n  padding: 0.5rem 2rem;\n  border-radius: 1.5rem;\n  border: transparent solid 2px;\n  margin: 0.5rem;\n}\n.main[_ngcontent-%COMP%]   .btn-grp[_ngcontent-%COMP%]   a.sign-in[_ngcontent-%COMP%] {\n  background-color: #00A8E8;\n  color: white;\n}\n.main[_ngcontent-%COMP%]   .btn-grp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border: white solid 2px;\n  color: white;\n  background-color: transparent;\n}\n.main[_ngcontent-%COMP%]   .btn-grp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.main[_ngcontent-%COMP%]   .btn-grp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  border: white solid 2px;\n  color: white;\n  background-color: transparent;\n}\n@media screen and (min-width: 992px) {\n  .main[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .main[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 8rem;\n    line-height: 8rem;\n  }\n  .main[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 3.25rem;\n    line-height: 3.25rem;\n  }\n  .main[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .main[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 10rem;\n    line-height: 10rem;\n  }\n  .main[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 4.5rem;\n    line-height: 4.5rem;\n  }\n  .main[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .main[_ngcontent-%COMP%]   .btn-grp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding: 0.5rem 3.5rem;\n    border-radius: 2.5rem;\n  }\n}\nsection.basic[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  padding: 2rem;\n}\nsection.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80vw;\n}\nsection.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 1rem;\n  margin-left: 0.5rem;\n  text-indent: 0.75rem;\n}\nsection.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  text-indent: 0.5rem;\n}\nsection.basic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n}\n@media screen and (min-width: 576px) {\n  section.basic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  section.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  section.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 768px) {\n  section.basic[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  section.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 45vw;\n  }\n}\n@media screen and (min-width: 992px) {\n  section.basic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 520px;\n  }\n  section.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n    margin-bottom: 2rem;\n    text-indent: 2rem;\n  }\n  section.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    text-indent: 1rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  section.basic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 680px;\n  }\n  section.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    margin-bottom: 2.5rem;\n    text-indent: 2rem;\n  }\n  section.basic[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n    text-indent: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFFQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFITjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUVBLGtCQUFBO0FBUEo7QUFVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVJKO0FBVUk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7QUFUTjtBQVdNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBVFI7QUFZTTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBVlI7QUFhTTtFQUNFLGFBQUE7QUFYUjtBQWFNO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFYUjtBQW1CRTtFQTFGRjtJQTJGSSw4QkFBQTtFQWhCRjtFQWtCSTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQWhCTjtFQW1CSTtJQUNFLGtCQUFBO0lBQ0Esb0JBQUE7RUFqQk47RUFvQkU7SUFDRSxrQkFBQTtFQWxCSjtBQUNGO0FBb0JFO0VBRUk7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBbkJOO0VBc0JJO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQXBCTjtFQXVCRTtJQUNFLGlCQUFBO0VBckJKO0VBeUJJO0lBQ0UsaUJBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0VBdkJOO0FBQ0Y7QUE0QkE7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUVBLGFBQUE7QUEzQkY7QUE2QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUEzQko7QUE2Qkk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBM0JOO0FBNkJJO0VBQ0UsbUJBQUE7QUEzQk47QUE4Qkc7RUFDQyxZQUFBO0FBNUJKO0FBZ0NFO0VBRUU7SUFDRSxZQUFBO0VBL0JKO0VBb0NJO0lBQ0Usa0JBQUE7RUFsQ047RUFvQ0k7SUFDRSxrQkFBQTtFQWxDTjtBQUNGO0FBdUNFO0VBakRGO0lBa0RJLG1CQUFBO0lBQ0EsNkJBQUE7RUFwQ0Y7RUFzQ0U7SUFDRSxXQUFBO0VBcENKO0FBQ0Y7QUF3Q0U7RUFFRTtJQUNFLFlBQUE7RUF2Q0o7RUEyQ0k7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUF6Q047RUEyQ0k7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VBekNOO0FBQ0Y7QUE2Q0U7RUFDRTtJQUNFLFlBQUE7RUEzQ0o7RUFnREk7SUFDRSxlQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtFQTlDTjtFQWdESTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUE5Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDkyLjV2aDtcclxuXHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9MUE4ucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDEwJSAyLjUlO1xyXG5cclxuICBkaXYudGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaDEudGl0bGV7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6ICMwMEE4RTg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBCZWJhc05ldWU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDIudGl0bGV7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcC5kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tZ3Jwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQgc29saWQgMnB4O1xyXG5cclxuICAgICAgbWFyZ2luOiAuNXJlbTtcclxuXHJcbiAgICAgICYuc2lnbi1pbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6YWN0aXZle1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk5MnB4KXtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpdi50aXRsZXtcclxuICAgICAgaDEudGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMi50aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDMuMjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHAuZGVzY3JpcHRpb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE0MDBweCl7XHJcbiAgICBkaXYudGl0bGV7XHJcbiAgICAgIGgxLnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMi50aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwLmRlc2NyaXB0aW9ue1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWdycHtcclxuICAgICAgYXtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAzLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5zZWN0aW9uLmJhc2lje1xyXG5cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAuY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODB2dztcclxuXHJcbiAgICBoMS50aXRsZXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgICAgdGV4dC1pbmRlbnQ6IC43NXJlbTtcclxuICAgIH1cclxuICAgIHAuZGVzY3JpcHRpb257XHJcbiAgICAgIHRleHQtaW5kZW50OiAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgIGltZ3tcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNTc2cHgpe1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50e1xyXG5cclxuICAgICAgaDEudGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KXtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk5MnB4KXtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiA1MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgaDEudGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgcC5kZXNjcmlwdGlvbntcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxNDAwcHgpe1xyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcblxyXG4gICAgICBoMS50aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAycmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
    onToggelCollapse(id) {
        document.getElementById(id).classList.toggle('active');
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 178, vars: 0, consts: [[1, "wrapper"], ["id", "profile", 1, "card", "profile"], [1, "card-upper"], ["src", "assets/img/badge.png"], [1, "card-footer"], ["src", "assets/img/avatar.png", 1, "profile-img"], [1, "card-content"], [1, "title"], [1, "nums"], [1, "num"], [1, "value"], [1, "tag"], ["id", "edit", 1, "card", "edit", "collapse"], [1, "header"], ["src", "assets/svg/right-arrow.svg", 3, "click"], [1, "content"], ["id", "about", 1, "card", "about", "collapse"], ["id", "favs", 1, "card", "favs", "collapse"], ["id", "pubs"], [1, "card", "pub"], [1, "rate"], ["width", "25px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 492.004 492.004", 0, "xml", "space", "preserve", 1, "up-vote", 2, "enable-background", "new 0 0 492.004 492.004"], ["d", "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n          c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n          c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n          c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"], ["width", "25px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 492.004 492.004", 0, "xml", "space", "preserve", 1, "down-vote", 2, "enable-background", "new 0 0 492.004 492.004"], [1, "upper-bond"], [1, "creator"], [1, "date"], ["routerLink", "/home", 1, "link"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ahmed Bh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse facilis blanditiis aperiam error. Illum voluptas magnam sit ab! Facere obcaecati, quam consectetur impedit saepe corrupti tempora architecto sint itaque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "74");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "114");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Edit Profile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_img_click_27_listener() { return ctx.onToggelCollapse("edit"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, aliquid molestiae temporibus deleniti tempore ea. Repellendus, reprehenderit. Laboriosam provident repellat, modi dicta numquam libero. Repellat provident saepe atque natus reiciendis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "About: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_img_click_34_listener() { return ctx.onToggelCollapse("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Schools: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Work: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Hobbies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Favorites: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_img_click_55_listener() { return ctx.onToggelCollapse("favs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "#LPN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "#dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "#new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "#ToDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "#Bla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Publications: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Posted By You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1em;\n  padding: 25px;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse.active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse.active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: rotate(0deg);\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse.active[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 1000px;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  transition: all 0.3s ease-in-out;\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg);\n}\n.wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transition: max-height 1.5s ease-in-out;\n  overflow: hidden;\n  max-height: 0;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\n  height: 350px;\n  overflow: hidden;\n  padding: 0;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%] {\n  height: 30%;\n  background: linear-gradient(90deg, #00C6FF 0%, #0072FF 100%);\n  opacity: 0.6;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  padding-right: 2.5%;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45px;\n  margin-top: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  height: 70%;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  top: -60px;\n  left: calc(50% - 50px);\n  border: 3px solid white;\n  border-radius: 50%;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: -65px;\n  padding: 10px 15px;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .nums[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .nums[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .nums[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-family: Montserrat;\n  font-size: 1.25rem;\n}\n.wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .nums[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   #about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.wrapper[_ngcontent-%COMP%]   #favs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]   #favs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background-color: #00A8E8;\n  padding: 5px 10px;\n  margin: 5px 2.5px;\n  border-radius: 20px;\n  color: white;\n  font-family: Montserrat;\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%] {\n  padding: 10px;\n  overflow-y: scroll;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%] {\n  margin: 20px 5px;\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 5px;\n  color: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out;\n  transform: rotate(-90deg);\n  fill: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote[_ngcontent-%COMP%]:hover {\n  fill: #00D100;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote.active[_ngcontent-%COMP%] {\n  fill: #00D100;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: Montserrat;\n  color: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out;\n  transform: rotate(90deg);\n  fill: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote[_ngcontent-%COMP%]:hover {\n  fill: #D10000;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote.active[_ngcontent-%COMP%] {\n  fill: #D10000;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%]   .creator[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: bold;\n  line-height: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #9E9E9E;\n  right: 25px;\n  line-height: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:link {\n  color: #00A8E8;\n  text-decoration: none;\n  border-bottom: 1px solid;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:visited {\n  color: #0090ff;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #00c6ff;\n  border-bottom: none;\n}\n.wrapper[_ngcontent-%COMP%]   #pubs[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:active {\n  color: #00A8E8;\n}\n@media screen and (min-width: 576px) {\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 50px;\n    margin-top: 0;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 125px;\n    top: -50px;\n    left: 25px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-top: 0;\n    margin-left: 25px;\n    text-align: unset;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .nums[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n    margin: 7.5px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .nums[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .nums[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n@media screen and (min-width: 992px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: 100vh;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: 200px 2fr 1fr;\n    padding: 50px 50px 10px 50px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrapper[_ngcontent-%COMP%]   .card.collapse[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\n    height: 200px;\n    grid-column: 1/3;\n    grid-row: 1;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-upper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 50px;\n    margin-top: 0;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 150px;\n    top: -50px;\n    left: 25px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-top: 0;\n    margin-left: 25px;\n  }\n  .wrapper[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-left: 0.5rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    grid-column: 3;\n    grid-row: 1/3;\n  }\n  .wrapper[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]:nth-child(3) {\n    grid-column: 1;\n  }\n  .wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n    grid-column: 1;\n  }\n  .wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n    grid-column: 2;\n    grid-row: 2/4;\n    overflow-y: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLDBCQUFBO0VBRUEsUUFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFGSjtBQU9VO0VBQ0Usd0JBQUE7QUFMWjtBQU1ZO0VBQ0UsdUJBQUE7QUFKZDtBQVFRO0VBQ0Usa0JBQUE7QUFOVjtBQVNNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQVBSO0FBUVE7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUFOVjtBQU9VO0VBQ0Usd0JBQUE7QUFMWjtBQVNNO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFQUjtBQVlFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVZKO0FBV0k7RUFDRSxXQUFBO0VBQ0EsNERBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtBQVhOO0FBYU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVhSO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFjTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVpSO0FBZ0JNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWRSO0FBZVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBYlY7QUFpQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQWZSO0FBaUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBZlY7QUFnQlU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBZFo7QUFnQlU7RUFDRSxrQkFBQTtBQWRaO0FBdUJNO0VBQ0UscUJBQUE7QUFyQlI7QUEyQkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQXpCTjtBQTJCTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6QlI7QUE4QkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUE1Qko7QUE2Qkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUEzQk47QUE0Qk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUExQlI7QUEyQlE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQXpCVjtBQTBCVTtFQUNFLGFBQUE7QUF4Qlo7QUEwQlU7RUFDRSxhQUFBO0FBeEJaO0FBMkJRO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBekJWO0FBMkJRO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUF6QlY7QUEwQlU7RUFDRSxhQUFBO0FBeEJaO0FBMEJVO0VBQ0UsYUFBQTtBQXhCWjtBQTZCTTtFQUNFLGNBQUE7QUEzQlI7QUE0QlE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQTFCVjtBQTJCVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXpCWjtBQTJCVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXpCWjtBQTZCUTtFQUNFLGtCQUFBO0FBM0JWO0FBNkJRO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUEzQlY7QUE2QlE7RUFDSSxjQUFBO0FBM0JaO0FBNkJRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBM0JaO0FBNkJRO0VBQ0ksY0FBQTtBQTNCWjtBQWlDRTtFQUVFO0lBQ0UsYUFBQTtFQWhDSjtFQWlDSTtJQUNFLG1CQUFBO0VBL0JOO0VBZ0NNO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUE5QlI7RUFrQ0k7SUFDRSxhQUFBO0VBaENOO0VBa0NNO0lBQ0UsYUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBaENSO0VBbUNNO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBakNSO0VBb0NRO0lBQ0UsYUFBQTtFQWxDVjtFQW1DVTtJQUNFLGVBQUE7RUFqQ1o7RUFtQ1U7SUFDRSxrQkFBQTtFQWpDWjtBQUNGO0FBd0NFO0VBOVFGO0lBK1FJLGFBQUE7SUFFQSxrQ0FBQTtJQUNBLGlDQUFBO0lBRUEsNEJBQUE7RUF2Q0Y7RUE0Q1E7SUFDRSxhQUFBO0VBMUNWO0VBNkNNO0lBQ0UsZ0JBQUE7RUEzQ1I7RUFnREU7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBOUNKO0VBZ0RJO0lBQ0UsbUJBQUE7RUE5Q047RUErQ007SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQTdDUjtFQWlESTtJQUNFLGFBQUE7RUEvQ047RUFpRE07SUFDRSxhQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUEvQ1I7RUFrRE07SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VBaERSO0VBaURRO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQS9DVjtFQXFERTtJQUNFLGNBQUE7SUFDQSxhQUFBO0VBbkRKO0VBcURFO0lBQ0UsY0FBQTtFQW5ESjtFQXNERTtJQUNFLGNBQUE7RUFwREo7RUFzREU7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VBcERKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHJcbiAgZ2FwOiAxZW07XHJcbiAgcGFkZGluZzogMjVweDtcclxuXHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG5cclxuICAuY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICYuY29sbGFwc2V7XHJcbiAgICAgICYuYWN0aXZle1xyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3Byb2ZpbGV7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAuY2FyZC11cHBlcntcclxuICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwQzZGRiAwJSwgIzAwNzJGRiAxMDAlKTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG5cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyLjUlO1xyXG5cclxuICAgICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWZvb3RlcntcclxuICAgICAgaGVpZ2h0OiA3MCU7XHJcblxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB0b3A6IC02MHB4O1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gSEVSRSBBREQgSU1HIE9OIEhPVkUgQkUgQkxBQ0tcclxuXHJcbiAgICAgIC5jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02NXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5udW1ze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5udW17XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIC52YWx1ZXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50YWd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2Fib3V0e1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2ZhdnN7XHJcbiAgICAuY29udGVudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgLnRhZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDIuNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjcHVic3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAucHVie1xyXG4gICAgICBtYXJnaW46IDIwcHggNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAucmF0ZXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgY29sb3I6ICM5RTlFOUU7XHJcbiAgICAgICAgLnVwLXZvdGV7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgIGZpbGw6ICM5RTlFOUU7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBmaWxsOiAjMDBEMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgIGZpbGw6ICMwMEQxMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5udW17XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgIGNvbG9yOiAjOUU5RTlFO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZG93bi12b3Rle1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIGZpbGw6ICM5RTlFOUU7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBmaWxsOiAjRDEwMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgIGZpbGw6ICNEMTAwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAudXBwZXItYm9uZHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAuY3JlYXRvcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC42cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzlFOUU5RTtcclxuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmt7XHJcbiAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbms6bGluayB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwQThFODtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbms6dmlzaXRlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA5MGZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDBjNmZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGluazphY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwQThFODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA1NzZweCl7XHJcblxyXG4gICAgI3Byb2ZpbGV7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIC5jYXJkLXVwcGVye1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkLWZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgdG9wOiAtNTBweDtcclxuICAgICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubnVtc3tcclxuICAgICAgICAgIC5udW17XHJcbiAgICAgICAgICAgIG1hcmdpbjogNy41cHg7XHJcbiAgICAgICAgICAgIC52YWx1ZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk5MnB4KXtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMmZyIDFmcjtcclxuXHJcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggMTBweCA1MHB4O1xyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAmLmNvbGxhcHNle1xyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjcHJvZmlsZXtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgZ3JpZC1yb3c6IDE7XHJcblxyXG4gICAgICAuY2FyZC11cHBlcntcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIHRvcDogLTUwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtY29udGVudHtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2Om50aC1jaGlsZCgyKXtcclxuICAgICAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICB9XHJcbiAgICAuZGl2Om50aC1jaGlsZCgzKXtcclxuICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2Om50aC1jaGlsZCg0KXtcclxuICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICB9XHJcbiAgICBkaXY6bnRoLWNoaWxkKDUpe1xyXG4gICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgZ3JpZC1yb3c6IDIvNDtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/research/research.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/research/research.component.ts ***!
  \******************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResearchComponent.ɵfac = function ResearchComponent_Factory(t) { return new (t || ResearchComponent)(); };
ResearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResearchComponent, selectors: [["app-research"]], decls: 13, vars: 0, consts: [[1, "wrapper"], [1, "search"], [1, "icon"], ["type", "text"], [1, "cats"], [1, "tag"], [1, "recent"], ["src", "assets/svg/search.svg"]], template: function ResearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  grid-template-columns: 3fr 1fr;\n}\n.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all 5s;\n}\n.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  width: 50px;\n  border: blue solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZWFyY2gvcmVzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEsOEJBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNlYXJjaC9yZXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcclxuXHJcbiAgaW1ne1xyXG4gICAgdHJhbnNpdGlvbjphbGwgNXM7XHJcblxyXG4gIH1cclxuICBpbWc6aG92ZXJ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogYmx1ZSBzb2xpZDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-research',
                templateUrl: './research.component.html',
                styleUrls: ['./research.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 2, vars: 0, template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SignInComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 17, vars: 0, consts: [[1, "wrapper"], [1, "title"], [1, "indicator"], ["action", "", 1, "sign-up-form"], [1, "input-group"], ["src", "", 1, "icon"], ["type", "text"], [1, "btn-grp"], [1, "next"], [1, "previous"], [1, "subbmit"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "More Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subbmit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SignUpComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 55, vars: 0, consts: [[1, "wrapper"], [1, "title"], [1, "indicator"], ["action", "", 1, "sign-up-form"], [1, "page", "page-1"], [1, "step-1"], [1, "input-group"], ["src", "assets/svg/search-icon.svg", 1, "icon"], ["name", "name", "type", "text", "required", "", "autocomplete", "off", 1, "input-field"], ["for", "name", 1, "label"], [1, "terms-input"], ["name", "terms", "type", "checkbox"], ["for", "terms"], ["routerLink", "/home", 1, "link"], [1, "step-2"], [1, "page", "page-2"], ["src", "", 1, "preview"], ["type", "file", "name", "img", "id", "img"], [1, "btn-grp"], [1, "next"], [1, "previous"], [1, "subbmit"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "I have read and accepted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "The terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Subbmit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background: url('LPN.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  height: 80%;\n  padding: 20px;\n  background: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 26rem;\n  padding: 3rem 3rem;\n  border-radius: 20px;\n  background: white;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .page.page-1[_ngcontent-%COMP%]   .step-1[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(5, 2.5rem) 1fr;\n  gap: 1rem;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .page.page-1[_ngcontent-%COMP%]   .step-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(n+3) {\n  grid-column: 1/3;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .page.page-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: #00A8E8;\n  color: white;\n  font-size: 1rem;\n  font-family: Montserrat;\n  padding: 0.5rem 2rem;\n  border-radius: 1.5rem;\n  border: transparent solid 2px;\n  margin: 0.5rem;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .page.page-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border: white solid 2px;\n  color: white;\n  background-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .page.page-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .page.page-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: white solid 2px;\n  color: white;\n  background-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 2.5rem;\n  width: 100%;\n  background: white;\n  border-radius: 2rem;\n  border: #9e9e9e solid 1px;\n  transition: all 0.5s ease;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: calc(2rem + 10px);\n  font-size: 1rem;\n  background: white;\n  transition: all 0.75s;\n  transform: translate(0, 0);\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: transparent;\n  color: white;\n  width: 2rem;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border-radius: 2rem;\n  border: none;\n  background: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  transform: translate(-0.5rem, -1.25rem);\n  font-size: 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:valid    + .label[_ngcontent-%COMP%] {\n  transform: translate(-0.5rem, -1.25rem);\n  font-size: 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]:focus-within {\n  border: #00a8e8 solid 1px;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .terms-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 2rem;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .terms-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .terms-input[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .terms-input[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:link {\n  color: #00A8E8;\n  text-decoration: none;\n  border-bottom: none;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .terms-input[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:visited {\n  color: #0090ff;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .terms-input[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #00c6ff;\n  border-bottom: none;\n  border-bottom: 1px solid;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .terms-input[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:active {\n  color: #00A8E8;\n  border-bottom: none;\n}\n@keyframes error_shake {\n  0% {\n    transform: translate(20px);\n    background-color: transparent;\n  }\n  20% {\n    transform: translate(-20px);\n    background-color: transparent;\n  }\n  40% {\n    transform: translate(10px);\n    background-color: #c80000;\n  }\n  60% {\n    transform: translate(-10px);\n    background-color: #c80000;\n  }\n  80% {\n    transform: translate(5px);\n    background-color: transparent;\n  }\n  100% {\n    transform: translate(0px);\n    background-color: #c80000;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7QUFGSjtBQUlJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsaUJBQUE7QUFMTjtBQVNRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQVBWO0FBUVU7RUFDRSxnQkFBQTtBQU5aO0FBWVE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7QUFYVjtBQWFVO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFYWjtBQWNVO0VBQ0UsYUFBQTtBQVpaO0FBY1U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVpaO0FBaUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtFQUVBLG1CQUFBO0VBRUEseUJBQUE7RUFHQSx5QkFBQTtBQXJCTjtBQXNCTTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLDBCQUFBO0FBckJSO0FBd0JNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXRCUjtBQXdCTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBdEJSO0FBd0JRO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0FBdEJWO0FBd0JRO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0FBdEJWO0FBMEJNO0VBQ0UseUJBQUE7QUF4QlI7QUE0Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTFCTjtBQTJCTTtFQUNFLG1CQUFBO0FBekJSO0FBMkJNO0VBQ0Usa0JBQUE7QUF6QlI7QUEyQk07RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXpCUjtBQTJCTTtFQUNJLGNBQUE7QUF6QlY7QUEyQk07RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQXpCVjtBQTJCTTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQXpCVjtBQStCQTtFQUNFO0lBQUssMEJBQUE7SUFBNEIsNkJBQUE7RUExQmpDO0VBMkJBO0lBQU0sMkJBQUE7SUFBNkIsNkJBQUE7RUF2Qm5DO0VBd0JBO0lBQU0sMEJBQUE7SUFBNEIseUJBQUE7RUFwQmxDO0VBcUJBO0lBQU0sMkJBQUE7SUFBNkIseUJBQUE7RUFqQm5DO0VBa0JBO0lBQU0seUJBQUE7SUFBMkIsNkJBQUE7RUFkakM7RUFlQTtJQUFPLHlCQUFBO0lBQTJCLHlCQUFBO0VBWGxDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvTFBOLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAucGFnZSB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIGhlaWdodDogMjZyZW07XHJcblxyXG4gICAgICBwYWRkaW5nOiAzcmVtIDNyZW07XHJcblxyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgICAmLnBhZ2UtMXtcclxuXHJcbiAgICAgICAgLnN0ZXAtMXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyLjVyZW0pIDFmcjtcclxuICAgICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgID4gZGl2Om50aC1jaGlsZChuICsgMykge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgJi5wYWdlLTJ7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudCBzb2xpZCAycHg7XHJcblxyXG4gICAgICAgICAgbWFyZ2luOiAuNXJlbTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAvL2JhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgICAgIGJvcmRlcjogIzllOWU5ZSBzb2xpZCAxcHg7XHJcblxyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgLmxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMnJlbSArIDEwcHgpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICY6Zm9jdXMgKyAubGFiZWx7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC41cmVtLCAtMS4yNXJlbSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6dmFsaWQgKyAubGFiZWx7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC41cmVtLCAtMS4yNXJlbSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICAgICAgYm9yZGVyOiAjMDBhOGU4IHNvbGlkIDFweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC50ZXJtcy1pbnB1dHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICBsYWJlbHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxpbmt7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxpbms6bGluayB7XHJcbiAgICAgICAgY29sb3I6ICMwMEE4RTg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmxpbms6dmlzaXRlZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwOTBmZjtcclxuICAgICAgfVxyXG4gICAgICAubGluazpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwYzZmZjtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIH1cclxuICAgICAgLmxpbms6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBlcnJvcl9zaGFrZSB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4KTsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxyXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4KTsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxyXG4gIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgpOyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgwMDAwOyB9XHJcbiAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgpOyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgwMDAwO31cclxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgpOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDt9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7IGJhY2tncm91bmQtY29sb3I6ICNjODAwMDA7fVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/university/university.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/university/university.component.ts ***!
  \**********************************************************/
/*! exports provided: UniversityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityComponent", function() { return UniversityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UniversityComponent {
    constructor() { }
    ngOnInit() {
    }
}
UniversityComponent.ɵfac = function UniversityComponent_Factory(t) { return new (t || UniversityComponent)(); };
UniversityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UniversityComponent, selectors: [["app-university"]], decls: 113, vars: 0, consts: [[1, "wrapper"], [1, "header"], [1, "description"], ["src", "assets/img/logo.png"], [1, "content"], [1, "title"], [1, "location"], ["src", "assets/svg/location.svg"], [1, "rating"], [1, "rate"], [1, "num"], [1, "stats"], [1, "stat"], [1, "tag"], [1, "bar"], [1, "footer"], [1, "about"], [1, "rates"], [1, "card", "add-pub"], ["role", "textbox", "placeholder", "Tell us your oppinion", "name", "new-rate", "id", "new-rate", "contenteditable", "", 1, "new-rate"], [1, "add-pub-footer"], [1, "overall"], ["name", "rate", "type", "radio", "value", "5", 1, "star"], ["name", "rate", "type", "radio", "value", "4", 1, "star"], ["name", "rate", "type", "radio", "value", "3", 1, "star"], ["name", "rate", "type", "radio", "value", "2", 1, "star"], ["name", "rate", "type", "radio", "value", "1", 1, "star"], [1, "publish"], [1, "card", "pub"], ["width", "25px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 492.004 492.004", 0, "xml", "space", "preserve", 1, "up-vote", 2, "enable-background", "new 0 0 492.004 492.004"], ["d", "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"], ["width", "25px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 492.004 492.004", 0, "xml", "space", "preserve", 1, "down-vote", 2, "enable-background", "new 0 0 492.004 492.004"], [1, "upper-bond"], [1, "creator"], ["routerLink", "/home", 1, "link"], [1, "date"]], template: function UniversityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Institut National des Science Applicable et de Technologie INSAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tunis, Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rates: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda tenetur asperiores. Non, voluptates minus aliquid est cumque necessitatibus natus perferendis deserunt ab pariatur dolores, quos, doloremque explicabo incidunt. Expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consequuntur harum numquam, amet a placeat praesentium reprehenderit ea ducimus, magni recusandae! Doloremque cumque id fuga tempora quibusdam accusantium vitae dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos laborum ratione assumenda beatae sunt voluptatem soluta repudiandae aliquid omnis aperiam eum repellendus, repellat, numquam sequi optio? Excepturi, iure architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit cupiditate maxime veritatis, suscipit doloribus magnam adipisci et dolorem exercitationem in quam tenetur ea reiciendis, saepe voluptate facere minima cumque! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Subbmit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Posted By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Posted By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "-5002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Posted By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Go To Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque ea recusandae similique velit minima, nisi commodi alias fugiat itaque officiis ducimus exercitationem blanditiis dignissimos animi sed veniam ipsum in! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 40vh;\n  background-image: url('Background.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 15px 30px;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100px;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: calc(100% - 100px);\n  margin-left: 10px;\n  padding: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.8rem;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 0.95rem;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: white;\n  font-weight: 400;\n  margin: 0;\n  margin-left: 0.25rem;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-bottom: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1rem;\n  font-family: \"Montserrat\";\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  color: #ffbe55;\n  font-size: 2rem;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  width: 125px;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: bold;\n  color: white;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  margin: 2px 10px;\n  background-color: #00A8E8;\n  width: 100%;\n  height: 0.5rem;\n  border-radius: 0.5rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 60vh;\n  padding: 10px 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: unset;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .new-rate[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2rem;\n  max-height: 10rem;\n  font-size: 1rem;\n  position: relative;\n  border-radius: 1rem;\n  background-color: #F2F2F2;\n  color: #808080;\n  border: none;\n  padding: 0.5rem 1rem;\n  outline: none;\n  resize: vertical;\n  overflow: scroll;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .new-rate[_ngcontent-%COMP%]:empty::before {\n  content: \"Express Yourself\";\n  position: absolute;\n  color: #7A7A7A;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  margin: 0 5px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  -webkit-appearance: unset;\n     -moz-appearance: unset;\n          appearance: unset;\n  width: 1rem;\n  height: 1rem;\n  margin: 0.1rem;\n  background: url('star.svg');\n  background-size: 1rem 1rem;\n  appearance: unset;\n  outline: none;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:checked {\n  background: url('star-3.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:checked    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5) {\n  background: url('star-3.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:checked    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5):hover {\n  background: url('star-2.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:checked    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5):hover    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5) {\n  background: url('star-2.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover {\n  background: url('star-1.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover:checked {\n  background: url('star-2.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover:checked    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5) {\n  background: url('star-2.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5) {\n  background: url('star-1.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5):checked {\n  background: url('star-2.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .overall[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5):checked    ~ [_ngcontent-%COMP%]:nth-child(n):nth-child(-n+5) {\n  background: url('star-2.svg');\n  background-size: 1rem 1rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%] {\n  background-color: #00A8E8;\n  color: white;\n  font-size: 0.75rem;\n  font-family: Montserrat;\n  padding: 0.25rem 1rem;\n  border-radius: 1rem;\n  border: transparent solid 2px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%]:hover {\n  border: black solid 2px;\n  color: black;\n  background-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%]:active {\n  transform: translate(0.5px, 0.25px);\n  border: black solid 2px;\n  color: black;\n  background-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%] {\n  margin: 20px 5px;\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 5px;\n  color: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out;\n  transform: rotate(-90deg);\n  fill: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote[_ngcontent-%COMP%]:hover {\n  fill: #00D100;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .up-vote.active[_ngcontent-%COMP%] {\n  fill: #00D100;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: Montserrat;\n  color: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out;\n  transform: rotate(90deg);\n  fill: #9E9E9E;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote[_ngcontent-%COMP%]:hover {\n  fill: #D10000;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .down-vote.active[_ngcontent-%COMP%] {\n  fill: #D10000;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%]   .creator[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: bold;\n  line-height: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .upper-bond[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #9E9E9E;\n  right: 25px;\n  line-height: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:link {\n  color: #00A8E8;\n  text-decoration: none;\n  border-bottom: 1px solid;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:visited {\n  color: #0090ff;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #00c6ff;\n  border-bottom: none;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .pub[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:active {\n  color: #00A8E8;\n}\n@media screen and (min-width: 576px) {\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    height: 45vh;\n    padding: 30px 60px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    height: 125px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 125px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: calc(100% - 145px);\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    height: 0.65rem;\n    border-radius: 0.65rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    height: 55vh;\n  }\n}\n@media screen and (min-width: 992px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-content: flex-end;\n    padding: 30px 60px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 1.5rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    height: 0.75rem;\n    border-radius: 0.75rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 10px;\n    margin-bottom: 10px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 10px;\n    overflow-y: scroll;\n  }\n  .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .rates[_ngcontent-%COMP%]   .add-pub[_ngcontent-%COMP%]   .add-pub-footer[_ngcontent-%COMP%]   .publish[_ngcontent-%COMP%] {\n    padding: 0.5rem 2rem;\n    border-radius: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdmVyc2l0eS91bml2ZXJzaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0FBRko7QUFJSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBRk47QUFHTTtFQUNFLGFBQUE7QUFEUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZSO0FBSVE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFGVjtBQUlRO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBRlY7QUFHVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBRFo7QUFHVTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBRFo7QUFPSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQU1NO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUpSO0FBTU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUtRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhWO0FBS1E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIVjtBQUlVO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGWjtBQUlVO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFGWjtBQVNFO0VBQ0UsYUFBQTtFQUVBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0FBVEo7QUFZSTtFQUNFLG1CQUFBO0FBVk47QUFXTTtFQUNFLGtCQUFBO0FBVFI7QUFlTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBYlI7QUFjUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVpWO0FBY1U7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVpaO0FBaUJRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFmVjtBQWdCVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWRaO0FBZVk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFiZDtBQWVZO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBYmQ7QUFlYztFQUNFLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFiaEI7QUFlZ0I7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FBYmxCO0FBY2tCO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQVpwQjtBQWFvQjtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7QUFYdEI7QUFZc0I7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FBVnhCO0FBZ0JnQjtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7QUFkbEI7QUFla0I7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FBYnBCO0FBY29CO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQVp0QjtBQWVrQjtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7QUFicEI7QUFjb0I7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FBWnRCO0FBYXNCO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQVh4QjtBQXNCVTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFyQlo7QUF1Qlk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQXJCZDtBQXdCWTtFQUNFLGFBQUE7QUF0QmQ7QUF3Qlk7RUFDRSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBdEJkO0FBNkJNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBM0JSO0FBNEJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBMUJWO0FBMkJVO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUF6Qlo7QUEwQlk7RUFDRSxhQUFBO0FBeEJkO0FBMEJZO0VBQ0UsYUFBQTtBQXhCZDtBQTJCVTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQXpCWjtBQTJCVTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FBekJaO0FBMEJZO0VBQ0UsYUFBQTtBQXhCZDtBQTBCWTtFQUNFLGFBQUE7QUF4QmQ7QUE2QlE7RUFDRSxjQUFBO0FBM0JWO0FBNEJVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUExQlo7QUEyQlk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF6QmQ7QUEyQlk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF6QmQ7QUE2QlU7RUFDRSxrQkFBQTtBQTNCWjtBQTZCVTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBM0JaO0FBNkJVO0VBQ0ksY0FBQTtBQTNCZDtBQTZCVTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQTNCZDtBQTZCVTtFQUNJLGNBQUE7QUEzQmQ7QUFxQ0U7RUFDRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQW5DSjtFQW9DSTtJQUNFLGFBQUE7RUFsQ047RUFtQ007SUFDRSxhQUFBO0VBakNSO0VBbUNNO0lBQ0UseUJBQUE7RUFqQ1I7RUFtQ1E7SUFDRSxpQkFBQTtFQWpDVjtFQXVDTTtJQUNFLGVBQUE7RUFyQ1I7RUF3Q1E7SUFDRSxlQUFBO0VBdENWO0VBd0NRO0lBQ0UsWUFBQTtFQXRDVjtFQXVDVTtJQUNFLGtCQUFBO0VBckNaO0VBdUNVO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VBckNaO0VBNENFO0lBQ0UsWUFBQTtFQTFDSjtBQUNGO0FBNENFO0VBdlhGO0lBd1hJLGFBQUE7RUF6Q0Y7RUEwQ0U7SUFDRSxtQkFBQTtJQUVBLDhCQUFBO0lBQ0EsdUJBQUE7SUFFQSxrQkFBQTtFQTFDSjtFQTJDSTtJQUNFLGFBQUE7RUF6Q047RUEwQ007SUFDRSxhQUFBO0VBeENSO0VBMENNO0lBQ0UsWUFBQTtFQXhDUjtFQTBDUTtJQUNFLGtCQUFBO0VBeENWO0VBMkNVO0lBQ0UsY0FBQTtFQXpDWjtFQTJDVTtJQUNFLGtCQUFBO0VBekNaO0VBZ0RNO0lBQ0Usa0JBQUE7RUE5Q1I7RUFpRFE7SUFDRSxlQUFBO0VBL0NWO0VBaURRO0lBQ0UsWUFBQTtFQS9DVjtFQWdEVTtJQUNFLGtCQUFBO0VBOUNaO0VBZ0RVO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VBOUNaO0VBcURFO0lBQ0UsbUJBQUE7SUFDQSw4QkFBQTtFQW5ESjtFQXFESTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUFuRE47RUFvRE07SUFDRSxrQkFBQTtFQWxEUjtFQXNESTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFwRE47RUF1RFU7SUFDRSxvQkFBQTtJQUNBLG1CQUFBO0VBckRaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91bml2ZXJzaXR5L3VuaXZlcnNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC5jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvQmFja2dyb3VuZC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcblxyXG4gICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgaDEudGl0bGV7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9jYXRpb257XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiAuOTVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMy50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZ3tcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIC50aXRsZXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgIH1cclxuICAgICAgLnJhdGV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5udW17XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmJlNTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGF0e1xyXG4gICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIC50YWd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFye1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAuZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcblxyXG4gICAgLmFib3V0e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGVze1xyXG5cclxuICAgICAgLmFkZC1wdWJ7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG4gICAgICAgIC5uZXctcmF0ZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gICAgICAgICAgJjplbXB0eTo6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIkV4cHJlc3MgWW91cnNlbGZcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzdBN0E3QTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkLXB1Yi1mb290ZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIC5vdmVyYWxse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yYXRle1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxuICAgICAgICAgICAgICAuc3RhcntcclxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9zdGFyLnN2Z1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICY6Y2hlY2tlZHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9zdGFyLTMuc3ZnXCIpO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfjpudGgtY2hpbGQobik6bnRoLWNoaWxkKC1uKzUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvc3Rhci0zLnN2Z1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9zdGFyLTIuc3ZnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxcmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICB+Om50aC1jaGlsZChuKTpudGgtY2hpbGQoLW4rNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvc3Rhci0yLnN2Z1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxcmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9zdGFyLTEuc3ZnXCIpO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgJjpjaGVja2Vke1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvc3Rhci0yLnN2Z1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB+Om50aC1jaGlsZChuKTpudGgtY2hpbGQoLW4rNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3ZnL3N0YXItMi5zdmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfjpudGgtY2hpbGQobik6bnRoLWNoaWxkKC1uKzUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvc3Rhci0xLnN2Z1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3ZnL3N0YXItMi5zdmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIH46bnRoLWNoaWxkKG4pOm50aC1jaGlsZCgtbis1KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9zdGFyLTIuc3ZnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wdWJsaXNoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEU4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50IHNvbGlkIDJweDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSguNXB4LC4yNXB4KTtcclxuICAgICAgICAgICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHVie1xyXG4gICAgICAgIG1hcmdpbjogMjBweCA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAucmF0ZXtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICM5RTlFOUU7XHJcbiAgICAgICAgICAudXAtdm90ZXtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgZmlsbDogIzlFOUU5RTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICBmaWxsOiAjMDBEMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgIGZpbGw6ICMwMEQxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5udW17XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzlFOUU5RTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kb3duLXZvdGV7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgZmlsbDogIzlFOUU5RTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICBmaWxsOiAjRDEwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgIGZpbGw6ICNEMTAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAudXBwZXItYm9uZHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIC5jcmVhdG9ye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM5RTlFOUU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluazpsaW5rIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMEE4RTg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpbms6dmlzaXRlZCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDkwZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMGM2ZmY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5rOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMEE4RTg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNTc2cHgpe1xyXG4gICAgLmhlYWRlcntcclxuICAgICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDYwcHg7XHJcbiAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0NXB4KTtcclxuXHJcbiAgICAgICAgICBoMS50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmF0aW5ne1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhdGV7XHJcbiAgICAgICAgICAubnVte1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RhdHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAudGFne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjY1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYXJ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAuNjVyZW07XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjY1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmZvb3RlcntcclxuICAgICAgaGVpZ2h0OiA1NXZoO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogOTkycHgpe1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgcGFkZGluZzogMzBweCA2MHB4O1xyXG4gICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuXHJcbiAgICAgICAgICBoMS50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvY2F0aW9ue1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMudGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmF0aW5ne1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhdGV7XHJcbiAgICAgICAgICAubnVte1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RhdHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAudGFne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYXJ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAuNzVyZW07XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjc1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmZvb3RlcntcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgLmFib3V0e1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYXRlc3tcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIC5hZGQtcHVie1xyXG4gICAgICAgICAgLmFkZC1wdWItZm9vdGVye1xyXG4gICAgICAgICAgICAucHVibGlzaHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniversityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-university',
                templateUrl: './university.component.html',
                styleUrls: ['./university.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git\lpn-network\LPNNetworkFE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map