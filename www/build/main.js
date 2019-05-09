webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideMenuStatus = true;
        this.conteudo_slide = "desativar_conteudo_slide";
        this.icon_conteudo_slide = "ios-arrow-down-outline";
        this.status_menu = 'menu_desativado';
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.sliderPrimary.centeredSlides = true;
    };
    HomePage.prototype.openMenu = function () {
        var self = this;
        if (this.conteudo_slide == "desativar_conteudo_slide") {
            self.conteudo_slide = "active_conteudo_slide";
            self.icon_conteudo_slide = "ios-arrow-up-outline";
            self.slideMenuStatus = false;
            setTimeout(function () {
                self.status_menu = 'menu_ativo';
            }, 250);
        }
        else {
            self.slideMenuStatus = true;
            setTimeout(function () {
                self.conteudo_slide = "desativar_conteudo_slide";
                self.icon_conteudo_slide = "ios-arrow-down-outline";
                self.status_menu = 'menu_desativado';
            }, 100);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sliderPrimary'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "sliderPrimary", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sliderMenu'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */]) === "function" && _b || Object)
    ], HomePage.prototype, "sliderMenu", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/PROJETOS/Git/nubank-clone/src/pages/home/home.html"*/'<ion-content no-bounce style="overflow: hidden !important; ">\n\n  <div class="logo-nubank" (click)="openMenu()">\n\n    <img src="assets/imgs/logo_nu.png" style="display: inline;">\n    <h5 style="display: inline;">Wesley</h5><br>\n    <ion-icon name="{{icon_conteudo_slide}}"></ion-icon>\n  </div>\n\n\n  <div class="conteudo-slide {{conteudo_slide}}">\n  <div class="menu-nubank {{status_menu}}">\n    <div class="banco-nubank">\n      <img src="assets/imgs/qr.jpg">\n      <p>Banco 300 - NU Payments BR</p> \n      <p>Agência 0002</p>\n      <p>Conta 2284813-0</p>\n    </div>\n\n    <div class="items-menu-nubank">\n      <ion-item style="border-top: 1px solid rgba(250,250,250,0.5);" class="item-menu" no-lines>\n        <ion-icon item-start name="md-information-circle"></ion-icon>\n        Me ajuda\n      </ion-item>\n\n      <ion-item  class="item-menu" no-lines>\n        <ion-icon item-start name="md-contact"></ion-icon>\n        Perfil\n      </ion-item>\n\n      <ion-item  class="item-menu" no-lines>\n        <ion-icon item-start name="logo-usd"></ion-icon>\n        Configurar NuConta\n      </ion-item>\n\n      <ion-item  class="item-menu" no-lines>\n        <ion-icon item-start name="ios-card"></ion-icon>\n        Configurar Cartão\n      </ion-item>\n\n      <ion-item  class="item-menu" no-lines>\n        <ion-icon item-start name="ios-flag-outline"></ion-icon>\n        Configurações do app\n      </ion-item>\n\n      <button ion-button class="btn-sair">\n        Sair do app\n      </button>\n    </div>\n\n  </div>\n  <ion-slides #sliderPrimary  class="slider-primary" pager="true" centeredSlides="true">\n\n    <ion-slide class="slide-nubank">\n      <div class="box-slide">\n        <ion-icon class="icone-slide" name="ios-card-outline"></ion-icon>\n\n        <div class="fatura-slide">\n          <p class="title-fatura">Fatura atual</p>\n          <h5 class="preco-fatura"><span>R$</span> 8.580,21</h5>\n          <p class="limite-fatura">Limite disponível: <span>R$ 17.320,50 </span></p>\n        </div>\n\n\n        <div class="overlay-slide">\n          <ion-icon class="icone-card-slide" name="ios-cart-outline"></ion-icon>\n          <p>Compra mais recente em Sony Playstation no valor de R$ 120,00 ontem</p>\n          <ion-icon class="icone-flexa-slide" name="ios-arrow-forward"></ion-icon>\n        </div>\n\n        <div class="barra-colorida-slide"></div>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-nubank">\n      <div class="box-slide">\n        <ion-icon class="icone-slide" name="ios-card-outline"></ion-icon>\n\n        <div class="nuconta-slide">\n          <p class="saldo-nuconta">Saldo disponível</p>\n          <h5 class="valor-nuconta"><span>R$</span> 7.625,50</h5>\n        </div>\n\n        <div class="overlay-slide">\n          <ion-icon class="icone-card-slide" name="ios-cart-outline"></ion-icon>\n          <p>Transferência de R$ 18.300,00 feita pra Wesley Leal hoje</p>\n          <ion-icon class="icone-flexa-slide" name="ios-arrow-forward"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-nubank">\n      <div class="box-slide">\n        <ion-icon class="icone-slide-center" name="ios-cube-outline"></ion-icon>\n        <div class="reward-slide">\n          <h5>Nubank Rewards</h5>\n          <p>Acumule pontos que nunca expiram</p>\n          <p>e troque por passagens aéreas ou</p>\n          <p>serviços que você realmente usa.</p>\n\n          <button class="btn-reward" ion-button>Ative seu rewards</button>\n        </div>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n\n<!--  -->\n  <ion-slides #sliderMenu class="slider-menu" centeredSlides="false" slidesPerView="4" *ngIf="slideMenuStatus">\n\n    <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n          <ion-icon name="md-person-add"></ion-icon>\n          <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n        <ion-icon name="logo-usd"></ion-icon>\n          <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n       <ion-icon name="ios-card"></ion-icon>\n          <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n          <ion-icon name="ios-chatbubbles"></ion-icon>\n          <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n\n     <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n          <ion-icon name="md-information-circle"></ion-icon>\n          <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n         <ion-icon name="md-hammer"></ion-icon>\n         <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n         <ion-icon name="md-qr-scanner"></ion-icon>\n         <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-menu">\n      <div class="slide-menu-item">\n          <ion-icon name="md-hand"></ion-icon>\n          <h5>Menu</h5>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n  </div>\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/PROJETOS/Git/nubank-clone/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/PROJETOS/Git/nubank-clone/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/PROJETOS/Git/nubank-clone/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map