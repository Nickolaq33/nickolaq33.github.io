(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.REST_API_SERVER = "https://nickolaq33.github.io/games.json";
    }
    ApiService.prototype.getGamesRequest = function () {
        return this.httpClient.get(this.REST_API_SERVER);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _game_catalog_game_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-catalog/game-catalog.component */ "./src/app/game-catalog/game-catalog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _game_catalog_game_catalog_component__WEBPACK_IMPORTED_MODULE_3__["gameCatalog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_game_catalog_game_catalog_component__WEBPACK_IMPORTED_MODULE_3__["gameCatalog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-catalog/game-catalog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/game-catalog/game-catalog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"game-catalog\">\n    <div class=\"game-catalog__header\">\n        <h1>Games Catalog</h1>\n    </div>\n    <div class=\"statistic\">\n        <p>Games: <span>{{games.length}}</span></p>\n        <p>Games on page: <span>{{limit}}</span></p>\n    </div>\n    <div class=\"filters\">\n        <div class=\"filters__sort\">\n            <label for=\"\">\n                Отсортировать значения\n            </label>\n            <select (change)=\"sortGamesByParams($event.target.value)\">\n                <option *ngFor=\"let name of filtersName\" value={{name}}>\n                    {{name}}\n                </option>\n            </select>\n        </div>\n\n        <div class=\"filters__sort\">\n            <label for=\"\">\n                Отсортировать по провайдеру\n            </label>\n            <select (change)=\"filterByParams('merchant', $event.target.value)\">\n                <option selected=\"selected\" value=\"\">All</option>\n                <option *ngFor=\"let merchant of merchants | keyvalue\" value={{merchant.value.ID}}>\n                    {{merchant.value.Name}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"categories\">\n        <div class=\"categories__item\">\n            <button (click)=\"filterByParams()\">All</button>\n        </div>\n        <div class=\"categories__item\" *ngFor=\"let category of categories\">\n            <button (click)=\"filterByParams('category', category.ID)\">{{category.Name.en}}</button>\n        </div>\n        <div class=\"categories__item\">\n            <button (click)=\"showFavouritesGames = true\">Favourites</button>\n        </div>\n    </div>\n\n    <div class=\"game-catalog__wrp\">\n        <div class=\"game-catalog__ngif\" *ngIf=\"!showFavouritesGames\">\n            <div class=\"game\" *ngFor=\"let game of sortedGames | slice:0:limit\">\n                <div class=\"game__title\">{{game.Name.en | slice:0:17}}</div>\n                <div class=\"game__img\"><img src=\"https://www.gbchip.com/{{game.Image}}\" alt=\"\"></div>\n                <div class=\"game__buttons\">\n                    <button class=\"game__play\">Play</button>\n                    <a class=\"game__favourite\" [ngClass]=\"game.favClass\"\n                       (click)=\"toggleFavourites(game, $event.target)\">\n\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"game-catalog__ngif\" *ngIf=\"showFavouritesGames\">\n            <div class=\"game\" *ngFor=\"let game of favouritesGames | slice:0:limit\">\n                <div class=\"game__title\">{{game.Name.en | slice:0:17}}</div>\n                <div class=\"game__img\"><img src=\"https://www.gbchip.com/{{game.Image}}\" alt=\"\"></div>\n                <div class=\"game__buttons\">\n                    <button class=\"game__play\">Play!</button>\n                    <button class=\"game__favourite fav\"\n                            (click)=\"toggleFavourites(game, $event.target)\">\n                    </button>\n                </div>\n            </div>\n            <div class=\"empty\" *ngIf=\"!favouritesGames.length\">\n                SORRY IT IS EMPTY\n            </div>\n        </div>\n    </div>\n    <button class=\"show-more\" (click)=\"showMoreGames()\">PLEASE I WANT SEE MORE</button>\n</section>\n"

/***/ }),

/***/ "./src/app/game-catalog/game-catalog.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/game-catalog/game-catalog.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-catalog {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 15px;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.game-catalog__header {\n  margin: 0 auto;\n  font-size: 25px;\n  color: #ffffff;\n  text-align: center;\n}\n.game-catalog__ngif {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -10px;\n}\n.categories {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 20px;\n}\n.categories__item {\n  color: white;\n  text-transform: uppercase;\n  border: 1px solid white;\n  background: rgba(0, 0, 0, 0.4);\n}\n.categories__item button {\n  all: unset;\n  padding: 5px 20px;\n  cursor: pointer;\n}\n.game {\n  margin: 10px;\n  width: calc(20% - 20px);\n}\n.game__title {\n  margin-bottom: 10px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n  text-decoration: underline;\n}\n.game__img img {\n  width: 100%;\n  display: block;\n}\n.game__buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.game__play, .game__favourite {\n  all: unset;\n  margin-top: 10px;\n  padding: 5px 10px;\n  background: rgba(0, 0, 0, 0.4);\n  border: 1px solid white;\n  color: #ffffff;\n  -webkit-transition: all 1s ease 0s;\n  transition: all 1s ease 0s;\n  cursor: pointer;\n}\n.game__play:hover, .game__favourite:hover {\n  color: #000000;\n  background: rgba(255, 255, 255, 0.4);\n}\n.game__favourite:before {\n  content: \"Add to favourite\";\n  display: block;\n}\n.game__favourite.fav:before {\n  content: \"Remove from favourite\";\n}\n.show-more {\n  all: unset;\n  display: block;\n  padding: 10px 30px;\n  margin: 30px auto 0;\n  font-size: 25px;\n  color: white;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-transition: all 1s ease 0s;\n  transition: all 1s ease 0s;\n  cursor: pointer;\n}\n.show-more:hover {\n  color: #000000;\n  background: rgba(255, 255, 255, 0.4);\n}\n.filters {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.filters__sort {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-bottom: 30px;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: white;\n}\n.filters select {\n  padding: 5px 10px;\n  background-color: white;\n}\n.empty {\n  width: 100%;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n.statistic p {\n  color: white;\n  font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/game-catalog/game-catalog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/game-catalog/game-catalog.component.ts ***!
  \********************************************************/
/*! exports provided: gameCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameCatalog", function() { return gameCatalog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var gameCatalog = /** @class */ (function () {
    function gameCatalog(apiService) {
        this.apiService = apiService;
        this.filtersName = [
            'Name',
            'ID',
            'MerchantID'
        ];
        this.sortedGames = [];
        this.showFavouritesGames = false;
        this.limit = 5;
        this.favouritesGames = [];
    }
    ;
    gameCatalog.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getGamesRequest().subscribe(function (data) {
            if (data) {
                _this.data = data;
                _this.games = _this.data.games;
                _this.categories = _this.data.categories;
                _this.merchants = _this.data.merchants;
                _this.sortedGames = _this.games;
                _this.sortGamesByParams();
            }
        });
        if (localStorage.getItem('favourites')) {
            this.favouritesGames = JSON.parse(localStorage.getItem('favourites'));
        }
        if (localStorage.getItem('sortedFav')) {
            this.sortedGames = JSON.parse(localStorage.getItem('sortedFav'));
        }
    };
    gameCatalog.prototype.filterByParams = function (param, value) {
        if (param === void 0) { param = 'all'; }
        if (param === 'category') {
            this.sortedGames = this.games.filter(function (el) {
                return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(el.CategoryID, value);
            });
        }
        else if (param === 'merchant') {
            this.sortedGames = this.games.filter(function (el) {
                return el.MerchantID === value;
            });
        }
        else {
            this.sortedGames = this.games;
        }
        this.showFavouritesGames = false;
        this.sortGamesByParams();
    };
    gameCatalog.prototype.sortGamesByParams = function (paramName, order) {
        var _this = this;
        if (paramName === void 0) { paramName = 'Name.en'; }
        paramName = paramName === 'Name' ? 'Name.en' : paramName;
        this.sortedGames.forEach(function (el) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(_this.favouritesGames, el)) {
                el.favClass = 'fav';
            }
            else {
                el.favClass = '';
            }
        });
        this.sortedGames = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"])(this.sortedGames, [paramName], [order]);
        localStorage.setItem('sortedFav', JSON.stringify(this.sortedGames));
    };
    gameCatalog.prototype.showMoreGames = function (limitCounter) {
        if (limitCounter === void 0) { limitCounter = 5; }
        this.limit += limitCounter;
    };
    gameCatalog.prototype.toggleFavourites = function (game, element) {
        if (element.classList.contains('fav')) {
            element.classList.remove('fav');
        }
        else {
            element.classList.add('fav');
        }
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(this.favouritesGames, game)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["remove"])(this.favouritesGames, function (el) {
                return el.ID === game.ID;
            });
        }
        else {
            this.favouritesGames.push(game);
        }
        this.favouritesGames = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"])(this.favouritesGames);
        localStorage.setItem('favourites', JSON.stringify(this.favouritesGames));
    };
    gameCatalog.prototype.orderWithCustomParams = function (params) {
        var tempList = this.sortedGames.filter(function (el) {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(params, el.ID);
        });
        this.sortedGames = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["concat"])(params, tempList);
    };
    gameCatalog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'game-catalog',
            template: __webpack_require__(/*! ./game-catalog.component.html */ "./src/app/game-catalog/game-catalog.component.html"),
            styles: [__webpack_require__(/*! ./game-catalog.component.sass */ "./src/app/game-catalog/game-catalog.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], gameCatalog);
    return gameCatalog;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nickola/Documents/testTadskAngular/testtaskangular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map