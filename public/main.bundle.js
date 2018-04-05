webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_client_dashboard_client_dashboard_component__ = __webpack_require__("../../../../../src/app/components/client-dashboard/client-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_manager_dashboard_manager_dashboard_component__ = __webpack_require__("../../../../../src/app/components/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mechanic_dashboard_mechanic_dashboard_component__ = __webpack_require__("../../../../../src/app/components/mechanic-dashboard/mechanic-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_administrator_dashboard_administrator_dashboard_component__ = __webpack_require__("../../../../../src/app/components/administrator-dashboard/administrator-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_recive_car_recive_car_component__ = __webpack_require__("../../../../../src/app/components/recive-car/recive-car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_guard_service__ = __webpack_require__("../../../../../src/app/services/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: "client", component: __WEBPACK_IMPORTED_MODULE_4__components_client_dashboard_client_dashboard_component__["a" /* ClientDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_guard_service__["a" /* AuthGuard */]] },
    { path: "client/register", component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "manager", component: __WEBPACK_IMPORTED_MODULE_6__components_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */] },
    { path: "manager/receive-car", component: __WEBPACK_IMPORTED_MODULE_9__components_recive_car_recive_car_component__["a" /* ReciveCarComponent */] },
    { path: "mechanic", component: __WEBPACK_IMPORTED_MODULE_7__components_mechanic_dashboard_mechanic_dashboard_component__["a" /* MechanicDashboardComponent */] },
    { path: "admin", component: __WEBPACK_IMPORTED_MODULE_8__components_administrator_dashboard_administrator_dashboard_component__["a" /* AdministratorDashboardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard {\r\n  background-color: #eeeeee;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n#panel {\r\n  padding: 2rem;\r\n}\r\n\r\n.thicker {\r\n  font-weight: 1200;\r\n}\r\n\r\ndiv.body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column; \r\n}\r\n\r\nmain {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n.parallax { \r\n\r\n  background-image: url(\"https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg\");\r\n  height: 100%; \r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body parallax\">\r\n  <header>\r\n    <app-navbar></app-navbar>\r\n  </header>  \r\n  <main>\r\n    <div id=\"top\">\r\n    <flash-messages></flash-messages>\r\n  </div>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <footer>\r\n    <app-footer></app-footer>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_guard_service__ = __webpack_require__("../../../../../src/app/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_upload_img_service__ = __webpack_require__("../../../../../src/app/services/upload-img.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_qrcode_service__ = __webpack_require__("../../../../../src/app/services/qrcode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_client_dashboard_client_dashboard_component__ = __webpack_require__("../../../../../src/app/components/client-dashboard/client-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_mechanic_dashboard_mechanic_dashboard_component__ = __webpack_require__("../../../../../src/app/components/mechanic-dashboard/mechanic-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_administrator_dashboard_administrator_dashboard_component__ = __webpack_require__("../../../../../src/app/components/administrator-dashboard/administrator-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_manager_dashboard_manager_dashboard_component__ = __webpack_require__("../../../../../src/app/components/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_recive_car_recive_car_component__ = __webpack_require__("../../../../../src/app/components/recive-car/recive-car.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Servicios





// Navegación

//Componentes











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_client_dashboard_client_dashboard_component__["a" /* ClientDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_mechanic_dashboard_mechanic_dashboard_component__["a" /* MechanicDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_administrator_dashboard_administrator_dashboard_component__["a" /* AdministratorDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_recive_car_recive_car_component__["a" /* ReciveCarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('token');
                        },
                        whitelistedDomains: ['localhost:3000']
                    }
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_10__services_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_11__services_upload_img_service__["a" /* UploadImgService */],
                __WEBPACK_IMPORTED_MODULE_12__services_qrcode_service__["a" /* QrcodeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/administrator-dashboard/administrator-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section#welcome {\r\n    padding: 2rem;\r\n  }\r\n  .fondoBlanco{\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    padding: 20px;\r\n    border-radius: 1%;\r\n  }\r\n  ngb-tab{\r\n  background-color: rgb(255, 255, 255);\r\n  }\r\n  ngb-tabset{\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/administrator-dashboard/administrator-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"welcome\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h2 class=\"text-center text-white\">Bienvenido {{user.firstName}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-around\">\r\n    <div class=\"col-lg-10 fondoBlanco\">\r\n      <ngb-tabset type=\"pills\" justify=\"fill\">\r\n        <ngb-tab title=\"Usuario\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"row justify-content-around mt-2\">\r\n              <div class=\"col-sm-12 col-lg-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 mt-3 text-left\">\r\n                    <h5>Buscar usuarios:</h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-8 col-sm-12\">\r\n                    <form #formUpdate=\"ngForm\">\r\n                      <input class=\"form-control\" id=\"userID\" type=\"text\" placeholder=\"Apellido\" [(ngModel)]=\"userIDSearch\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </form>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-sm-12 text-center\">\r\n                    <button class=\"btn btn-primary m-1\" (click)=\"getUsuarioByID()\">Buscar</button>\r\n                    <button class=\"btn btn-primary m-1\" (click)=\"getUsuario()\">Todos los usuarios</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-lg-12 text-left\">\r\n                    <h5>Usuarios:</h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-sm-6\">\r\n                    <table class=\"pl-5 table table-hover table-responsive\" data-toggle=\"table\" data-pagination=\"true\">\r\n                      <thead class=\"thead-dark\">\r\n                        <tr>\r\n                          <th>Cédula</th>\r\n                          <th>Nombre</th>\r\n                          <th>Username</th>\r\n                          <th>Correo</th>\r\n                          <th>Tipo de usuario</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let user of usuarios\" (click)=\"usuarioSelec(user)\">\r\n                          <td>{{user.nationalID}}</td>\r\n                          <td>{{user.firstName}} {{user.lastName}}</td>\r\n                          <td>{{user.username}}</td>\r\n                          <td>{{user.email}}</td>\r\n                          <td>{{user.typeShown}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 mt-3 text-left\">\r\n                    <h4>Registrar/ Modificar Usuario</h4>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 col-lg-12\">\r\n                  <form #formUpdate=\"ngForm\" (submit)=\"registrarEmpleado(content)\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"firstName\">Nombres</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"firstName\" name=\"firstName\" [ngModelOptions]=\"{standalone: true}\"\r\n                          placeholder=\"Rafael\">\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"lastName\">Apellidos</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"lastName\" [ngModelOptions]=\"{standalone: true}\" name=\"lastName\"\r\n                          placeholder=\"Matienzo\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"username\">Nombre de Usuario</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\"\r\n                          placeholder=\"rmatienzo\">\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"email\">Correo Electrónico</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" name=\"email\"\r\n                          placeholder=\"rmatienzp@example.com\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"password\">Contraseña</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" [ngModelOptions]=\"{standalone: true}\"\r\n                          placeholder=\"password\">\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"password2\">Verificación de Contraseña</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"password2\" [(ngModel)]=\"password2\" [ngModelOptions]=\"{standalone: true}\"\r\n                          name=\"password2\" placeholder=\"password\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"addressLine1\">Dirección #1</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"addressLine1\" [(ngModel)]=\"addressLine1\" [ngModelOptions]=\"{standalone: true}\"\r\n                          name=\"addressLine1\" placeholder=\"Edif. La Risa Apto. 00\">\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"addressLine2\">Direcciones #2</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"addressLine2\" [(ngModel)]=\"addressLine2\" [ngModelOptions]=\"{standalone: true}\"\r\n                          name=\"addressLine2\" placeholder=\"Calle 2, El Paraiso\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"city\">Ciudad</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"city\" [ngModelOptions]=\"{standalone: true}\" name=\"city\" placeholder=\"Caracas\">\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"nationalID\">Cédula</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nationalID\" [(ngModel)]=\"nationalID\" [ngModelOptions]=\"{standalone: true}\" name=\"nationalID\"\r\n                          placeholder=\"1000\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-12 form-group\">\r\n                        <label for=\"rolAsignado\">Rol</label>\r\n                        <select class=\"form-control\" id=\"rolAsignado\" required (change)=\"onChange($event.target.value)\">\r\n                          <option *ngFor=\"let rol of roles\" [value]=\"rol.type\">{{rol.nombre}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-sm-12 text-right\">\r\n                        <button type=\"submit\" class=\"btn btn-primary m-1\" [disabled]=\"canModificateUser\">Registrar</button>\r\n                        <button class=\"btn btn-primary m-1\" (click)=\"modificarUser()\" [disabled]=\"!canModificateUser\">Modificar</button>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-dialog modal-dialog-centered\">\r\n              <div class=\"modal-body\">\r\n                <h4>Operación realizada con éxito</h4>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Repuestos\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"row justify-content-around mt-2\">\r\n              <div class=\"col-sm-12 col-lg-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 mt-3 text-left\">\r\n                    <h5>Buscar repuestos:</h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-8 col-sm-12\">\r\n                    <form #formUpdate=\"ngForm\">\r\n                      <input class=\"form-control\" id=\"partNumberSearch\" type=\"text\" placeholder=\"Número de parte\" [(ngModel)]=\"partNumberSearch\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                    </form>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-sm-12 text-center\">\r\n                    <button class=\"btn btn-primary m-1\" (click)=\"getRepuestosByPartNumber()\">Buscar</button>\r\n                    <button class=\"btn btn-primary m-1\" (click)=\"getRepuesto()\">Todos los repuestos</button>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 mt-3 text-left\">\r\n                    <h4>Repuestos</h4>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-sm-6 text-center\">\r\n                    <table class=\"table table-hover table-responsive\" data-toggle=\"table\" data-pagination=\"true\">\r\n                      <thead class=\"thead-dark\">\r\n                        <tr>\r\n                          <th>Numero de parte</th>\r\n                          <th>Nombre</th>\r\n                          <th>Marca</th>\r\n                          <th>Modelo</th>\r\n                          <th>Disponibilidad</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let repuesto of repuestos\">\r\n                          <td>{{repuesto.partNumber}}\r\n                          </td>\r\n                          <td>{{repuesto.name}}\r\n                          </td>\r\n                          <td>{{repuesto.brand}}\r\n                          </td>\r\n                          <td>{{repuesto.forModel}}\r\n                          </td>\r\n                          <td>{{repuesto.inStock}} Unidades</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <h4 class=\"text-left mt-2\">Añadir Repuesto/ Modificar Repuesto</h4>\r\n                <form #formUpdate=\"ngForm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                      <label for=\"partNumber\">Numero de parte</label>\r\n                      <input class=\"form-control\" id=\"partNumber\" type=\"text\" placeholder=\"9933885522\" [(ngModel)]=\"partNumber\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                      <label for=\"partName\">Nombre</label>\r\n                      <input class=\"form-control\" id=\"partName\" type=\"text\" placeholder=\"Pastillas de freno\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                      <label for=\"partBrand\">Marca</label>\r\n                      <input class=\"form-control\" id=\"partBrand\" type=\"text\" placeholder=\"Toyota\" [(ngModel)]=\"brand\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                      <label for=\"partModel\">Modelo</label>\r\n                      <input class=\"form-control\" id=\"partModel\" type=\"text\" placeholder=\"Camry\" [(ngModel)]=\"forModel\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                      <label for=\"partQuantity\">Cantidad</label>\r\n                      <input class=\"form-control\" id=\"partQuantity\" type=\"text\" placeholder=\"7\" [(ngModel)]=\"inStock\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6 form-group text-center\">\r\n                      <button class=\"btn btn-primary\" (click)=\"registrarRepuesto(content)\" [disabled]=\"canModificateRep\">Añadir</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 form-group text-center\">\r\n                      <button class=\"btn btn-primary\" (click)=\"modificarRepuesto()\" [disabled]=\"!canModificateRep\">Modificar</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/administrator-dashboard/administrator-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministratorDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdministratorDashboardComponent = /** @class */ (function () {
    function AdministratorDashboardComponent(auth, api, modalService, flash) {
        this.auth = auth;
        this.api = api;
        this.modalService = modalService;
        this.flash = flash;
        //Vector de usuarios
        this.usuarios = [];
        // Vector de Roles
        this.roles = [{ nombre: 'Gerente', type: 2 }, { nombre: 'Mecánico', type: 3 }, { nombre: 'Administrador', type: 4 }];
        // Vector de Respuestos
        this.repuestos = [];
        //Condición para modificar
        this.canModificateUser = false;
        this.canModificateRep = false;
        //Busqueda de usuario
        this.busqueda = "email";
    }
    AdministratorDashboardComponent.prototype.ngOnInit = function () {
        this.type = 2;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getRepuesto();
        this.getUsuario();
    };
    //RegistrarEmpleado
    AdministratorDashboardComponent.prototype.registrarEmpleado = function (content) {
        var _this = this;
        if (this.firstName && this.firstName.length < 45 &&
            this.lastName && this.lastName.length < 45 &&
            this.username && this.username.length < 20 &&
            this.email && this.email.length < 255 &&
            this.password && this.password.length < 255 &&
            this.addressLine1 && this.addressLine1.length < 45 &&
            this.addressLine2 && this.addressLine2.length < 45 &&
            this.city && this.city.length < 45 &&
            this.nationalID > 0 && this.nationalID < 99999999999) {
            var photoURL = '';
            if (this.password === this.password2) {
                var user = {
                    photoURL: photoURL,
                    nationalID: this.nationalID,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    addressLine1: this.addressLine1,
                    addressLine2: this.addressLine2,
                    city: this.city,
                    type: this.type
                };
                this.auth.registerUser(user).subscribe(function (data) {
                    if (data.success) {
                        _this.usuarios.push(data.user);
                        _this.nationalID = null;
                        _this.firstName = null;
                        _this.lastName = null;
                        _this.email = null;
                        _this.username = null;
                        _this.password = null;
                        _this.password2 = null;
                        _this.addressLine1 = null;
                        _this.addressLine2 = null;
                        _this.city = null;
                        _this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
                    }
                    else {
                        _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                    }
                });
            }
            else {
                this.password = null;
                this.password2 = null;
                this.flash.show('Las contraseñas no coinciden', { cssClass: 'custom-alert-danger' });
            }
        }
        else {
            this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    AdministratorDashboardComponent.prototype.getUsuario = function () {
        var _this = this;
        this.api.getUsuariosWorkers().subscribe(function (data) {
            _this.userIDSearch = null;
            if (data.success) {
                _this.usuarios = data.users;
                _this.convertRol();
                _this.nationalID = null;
                _this.firstName = null;
                _this.lastName = null;
                _this.email = null;
                _this.username = null;
                _this.password = null;
                _this.password2 = null;
                _this.addressLine1 = null;
                _this.addressLine2 = null;
                _this.city = null;
                _this.canModificateUser = false;
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                _this.usuarios = [];
            }
        });
    };
    AdministratorDashboardComponent.prototype.convertRol = function () {
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var user = _a[_i];
            switch (user.type) {
                case 2: {
                    user.typeShown = "Gerente";
                    break;
                }
                case 3: {
                    user.typeShown = "Mecánico";
                    break;
                }
                case 4: {
                    user.typeShown = "Administrador";
                    break;
                }
                default: {
                    user.typeShown = "unknown";
                    break;
                }
            }
        }
    };
    AdministratorDashboardComponent.prototype.getUsuarioByID = function () {
        var _this = this;
        if (this.userIDSearch) {
            this.api.getUsuariosByID({
                search: this.userIDSearch
            }, this.busqueda).subscribe(function (data) {
                if (data.success) {
                    _this.usuarios = [];
                    _this.usuarios = data.users;
                    console.log(_this.usuarios[1].nationalID);
                    _this.convertRol();
                    _this.userIDSearch = null;
                }
                else {
                    _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flash.show('El campo de busqueda no puede estar vacio', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    AdministratorDashboardComponent.prototype.modificarUser = function () {
        var _this = this;
        var photoURL = '';
        if (true) {
            var user = {
                ID: this.userID,
                photoURL: photoURL,
                nationalID: this.nationalID,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                username: this.username,
                password: this.password,
                addressLine1: this.addressLine1,
                addressLine2: this.addressLine2,
                city: this.city,
                type: this.type
            };
            this.api.modificarDatosUsuario(user).subscribe(function (dataUser) {
                if (dataUser.success) {
                    _this.usuarios = [];
                    _this.usuarios.push(dataUser.user);
                    _this.getUsuario();
                    _this.flash.show('Usuario modificado con exito', { cssClass: 'custom-alert-success', timeout: 3000 });
                    _this.nationalID = null;
                    _this.firstName = null;
                    _this.lastName = null;
                    _this.email = null;
                    _this.username = null;
                    _this.password = null;
                    _this.password2 = null;
                    _this.addressLine1 = null;
                    _this.addressLine2 = null;
                    _this.city = null;
                    _this.flash.show('Usuario', { cssClass: '', timeout: 3000 });
                }
                else {
                    _this.flash.show(dataUser.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            //this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', {cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    AdministratorDashboardComponent.prototype.onChange = function (rol) {
        this.type = rol;
    };
    AdministratorDashboardComponent.prototype.usuarioSelec = function (user) {
        this.usuarioSel = user;
        this.userID = this.usuarioSel.ID;
        this.nationalID = this.usuarioSel.nationalID;
        this.firstName = this.usuarioSel.firstName;
        this.lastName = this.usuarioSel.lastName;
        this.email = this.usuarioSel.email;
        this.username = this.usuarioSel.username;
        this.addressLine1 = this.usuarioSel.addressLine1;
        this.addressLine2 = this.usuarioSel.addressLine2;
        this.city = this.usuarioSel.city;
        this.type = this.usuarioSel.type;
        this.canModificateUser = true;
    };
    //registrar repuesto
    AdministratorDashboardComponent.prototype.registrarRepuesto = function (content) {
        var _this = this;
        if (this.partNumber > 0 && this.partNumber < 99999999999 &&
            this.name && this.name.length < 45 &&
            this.brand && this.brand.length < 45 &&
            this.forModel && this.forModel.length < 255 &&
            this.inStock > 0 && this.inStock < 99999999999) {
            var replacement = {
                partNumber: this.partNumber,
                name: this.name,
                brand: this.brand,
                forModel: this.forModel,
                inStock: this.inStock
            };
            this.api.registrarRepuesto(replacement).subscribe(function (dataReplacement) {
                if (dataReplacement.success) {
                    _this.repuestos.push(dataReplacement.replacement);
                    _this.flash.show('Repuesto Ingresado con exito', { cssClass: 'custom-alert-success', timeout: 3000 });
                    _this.partNumber = null;
                    _this.name = null;
                    _this.brand = null;
                    _this.forModel = null;
                    _this.inStock = null;
                    _this.flash.show('Repuesto', { cssClass: '', timeout: 3000 });
                }
                else {
                    _this.flash.show(dataReplacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    AdministratorDashboardComponent.prototype.getRepuesto = function () {
        var _this = this;
        this.api.getRepuestos().subscribe(function (data) {
            _this.partNumberSearch = null;
            if (data.success) {
                _this.repuestos = data.replacements;
                _this.canModificateRep = false;
                _this.partNumberSearch = null;
                _this.partNumber = null;
                _this.name = null;
                _this.brand = null;
                _this.forModel = null;
                _this.inStock = null;
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                _this.repuestos = [];
            }
        });
    };
    AdministratorDashboardComponent.prototype.getRepuestosByPartNumber = function () {
        var _this = this;
        this.api.getRepuestosByPartNumber({
            partNumber: this.partNumberSearch
        }).subscribe(function (replacement) {
            if (replacement.success) {
                _this.repuestos = [];
                _this.repuestos[0] = replacement.replacement;
                _this.partNumber = replacement.replacement.partNumber;
                _this.name = replacement.replacement.name;
                _this.brand = replacement.replacement.brand;
                _this.forModel = replacement.replacement.forModel;
                _this.inStock = replacement.replacement.inStock;
                _this.canModificateRep = true;
            }
            else {
                _this.flash.show(replacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    AdministratorDashboardComponent.prototype.modificarRepuesto = function () {
        var _this = this;
        var replacement = {
            partNumber: this.partNumber,
            name: this.name,
            brand: this.brand,
            forModel: this.forModel,
            inStock: this.inStock
        };
        this.api.modificarRepuesto(replacement).subscribe(function (dataReplacement) {
            if (dataReplacement.success) {
                _this.repuestos = [];
                _this.repuestos.push(dataReplacement.replacement);
                _this.flash.show('Repuesto modificado con exito', { cssClass: 'custom-alert-success', timeout: 3000 });
                _this.partNumberSearch = null;
                _this.partNumber = null;
                _this.name = null;
                _this.brand = null;
                _this.forModel = null;
                _this.inStock = null;
                _this.flash.show('Repuesto', { cssClass: '', timeout: 3000 });
            }
            else {
                _this.flash.show(dataReplacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    AdministratorDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-administrator-dashboard',
            template: __webpack_require__("../../../../../src/app/components/administrator-dashboard/administrator-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/administrator-dashboard/administrator-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], AdministratorDashboardComponent);
    return AdministratorDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/client-dashboard/client-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#welcome {\r\n  padding: 2rem; \r\n}\r\n.fondoBlanco{\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 20px;\r\n  border-radius: 1%;\r\n}\r\n.fondo-cliente { \r\n  background-image: url(\"https://images.pexels.com/photos/237195/pexels-photo-237195.jpeg\");\r\n  height: 100%; \r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n#botontab {\r\n  border-bottom-color: red;\r\n  color-interpolation-filters: red;\r\n  background-color: red;\r\n  border-block-end-color: red;\r\n  border-block-start-color: red;\r\n  border-color: red;\r\n  caret-color: red;\r\n  flood-color: red;\r\n  -moz-border-bottom-colors: red;\r\n  -moz-text-decoration-color: red;\r\n}\r\n.img-thumbnail{\r\n  height: 250px;\r\n  width: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-dashboard/client-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <section id=\"welcome\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <h2 class=\"text-center text-white\">¡Bienvenido {{user.firstName}}!</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-lg-10 fondoBlanco\">\r\n        <ngb-tabset type=\"pills\" justify=\"justified\">\r\n          <ngb-tab title=\"Registrar Vehiculo\" class=\"btn btn-dark\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"row justify-content-around\">\r\n                <div class=\"col-sm-12\">\r\n                  <form #registerCar=\"ngForm\" (submit)=\"registrarCarro()\">\r\n                    <div class=\"row pt-1\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"brand\">Marca</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"brand\" [(ngModel)]=\"brand\" name=\"brand\" placeholder=\"Chevrolet\">\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"model\">Modelo</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"model\" [(ngModel)]=\"model\" name=\"model\" placeholder=\"Cruze\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"year\">Año</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"year\" [(ngModel)]=\"year\" name=\"year\" placeholder=\"2014\">\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"licensePlate\">Placa</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"licensePlate\" [(ngModel)]=\"licensePlate\" name=\"licensePlate\" placeholder=\"AA000AA\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                        <label for=\"serial\">Serial de Motor</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"serial\" [(ngModel)]=\"serial\" name=\"serial\" placeholder=\"ABC123DEF456\">\r\n                      </div>\r\n\r\n\r\n\r\n\r\n                      <div class=\"col-sm-12 col-lg-6 form-group\">\r\n                  \r\n                        <label for=\"fotoVehiculo\">Foto del Vehiculo</label>\r\n\r\n                        <div class=\"custom-file\" id=\"fotoVehiculo\">\r\n                          \r\n                          <input type=\"file\" class=\"custom-file-input\" id=\"photo\" [(ngModel)]=\"photo\" accept=\".png, .jpg, .jpeg\" name=\"photo\" (change)=\"onChange($event)\">\r\n                          <label class=\"custom-file-label\" for=\"photo\">Mi Vehiculo</label>\r\n                        </div>\r\n\r\n\r\n                      </div>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 text-center\">\r\n                        <button type=\"submit\" class=\"btn btn-primary text-center\">Registrar</button>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Vehiculos\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"row pt-1\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"list-group\">\r\n                    <div *ngFor=\"let carro of vehiculos\" class=\"list-group-item list-group-item-action flex-column align-items-start mb-1\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-sm-12 text-left\">\r\n                          <h5>\r\n                            <strong>{{carro.brand}} {{carro.model}} {{carro.year}}</strong>\r\n                          </h5>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-12 text-right\">\r\n                          <h5>Placa:\r\n                            <strong>{{carro.licensePlate}}</strong>\r\n                          </h5>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6 text-left\">\r\n                          <small>Serial No:\r\n                            <strong #serial>{{carro.serial}}</strong>\r\n                          </small>\r\n                        </div>\r\n                        <div class=\"col-lg-6 text-right\">\r\n                          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n                            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"verVehiculo(serial.textContent, modalCarro)\">Ver</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"pedirCita(serial.textContent)\">Pedir cita</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"verHistorial(serial.textContent)\">Historial</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"desactivar(serial.textContent)\">Desactivar</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Ver Citas Pedidas\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"table-responsive mt-2\">\r\n                <table class=\"table table-striped table-light\">\r\n                  <thead class=\"thead-dark\">\r\n                    <tr>\r\n                      <th scope=\"col\">Placa del Vehículo</th>\r\n                      <th scope=\"col\">Marca</th>\r\n                      <th scope=\"col\">Modelo</th>\r\n                      <th scope=\"col\">Estado</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let cita of citas\">\r\n                      <td>{{cita.licensePlate}}</td>\r\n                      <td>{{cita.brand}}</td>\r\n                      <td>{{cita.model}}</td>\r\n                      <td>{{cita.estado}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<ng-template #modalCarro let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\"><strong>Vehículo</strong></h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <img src=\"{{car.photoLink}}\" alt=\"car-photo\" class=\"img-thumbnail\" height=\"200px\" width=\"auto\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h5>\r\n          <strong>Marca</strong> {{car.brand}}</h5>\r\n        <h6>\r\n          <strong>Modelo:</strong> {{car.model}}</h6>\r\n        <h6>\r\n          <strong>Placa:</strong> {{car.licensePlate}}</h6>\r\n        <h6>\r\n          <strong>Serial:</strong> {{car.serial}}</h6>\r\n        <h6>\r\n          <strong>Año:</strong> {{car.year}}</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/client-dashboard/client-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_img_service__ = __webpack_require__("../../../../../src/app/services/upload-img.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientDashboardComponent = /** @class */ (function () {
    function ClientDashboardComponent(api, flash, img, modal) {
        this.api = api;
        this.flash = flash;
        this.img = img;
        this.modal = modal;
        // Vector de Vehiculos
        this.vehiculos = [];
        // vector de citas
        this.citas = [];
    }
    ClientDashboardComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user')); // Guardo los datos del usuario
        this.resolverVehiculos();
        this.resolverCitasPedidas();
    };
    // Funciones utilizadas Varias veces
    ClientDashboardComponent.prototype.resolverVehiculos = function () {
        var _this = this;
        this.api.buscarCliente({
            userID: this.user.ID
        }).subscribe(function (clientData) {
            if (clientData.success) {
                _this.api.buscarCarros({
                    OwnerID: clientData.client.ID
                }).subscribe(function (cars) {
                    _this.vehiculos = cars; // Como es un observable asigno directamente
                });
            }
            else {
                _this.flash.show(clientData.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ClientDashboardComponent.prototype.resolverCitasPedidas = function () {
        var _this = this;
        this.api.getCitasPedidas(this.user.ID).subscribe(function (data) {
            if (data.success) {
                _this.citas = data.appoiments;
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ClientDashboardComponent.prototype.onChange = function (evt) {
        var _this = this;
        this.img.loadImg(evt.target.files[0]).then(function (algo) {
            _this.photoLink = algo;
        }).catch(function (err) { return console.log(err); });
    };
    ClientDashboardComponent.prototype.registrarCarro = function () {
        var _this = this;
        if (this.photoLink &&
            this.brand.length < 45 && this.brand &&
            this.model.length < 45 && this.model &&
            this.year > 0 && this.year < 3000 &&
            this.licensePlate.length < 7 && this.licensePlate &&
            this.serial.length < 255 && this.serial) {
            var car_1 = {
                brand: this.brand,
                model: this.model,
                year: this.year,
                licensePlate: this.licensePlate,
                serial: this.serial,
                photoLink: this.photoLink,
                active: true,
                OwnerID: 0
            };
            this.api.buscarCliente({
                userID: this.user.ID
            }).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    car_1.OwnerID = data.client.ID;
                    _this.api.registrarCarro(car_1).subscribe(function (dataCar) {
                        if (dataCar.success) {
                            _this.vehiculos.push(dataCar.car);
                            _this.flash.show("Vehículo registrado correctamete", { cssClass: 'custom-alert-success', timeout: 3000 });
                            _this.brand = '';
                            _this.model = '';
                            _this.year = null;
                            _this.licensePlate = '';
                            _this.serial = '';
                            _this.photoLink = '';
                        }
                        else {
                            _this.flash.show(dataCar.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                        }
                    });
                }
                else {
                    _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    ClientDashboardComponent.prototype.desactivar = function (serial) {
        var _this = this;
        if (serial) {
            this.api.desactivarVehiculo({ carSerial: serial }).subscribe(function (data) {
                if (data.success) {
                    _this.resolverVehiculos();
                    _this.resolverCitasPedidas();
                }
                else {
                    _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flash.show('Upsss... Hemos tenido un error :(', { cssClass: 'custom-alert-danger' });
        }
    };
    ClientDashboardComponent.prototype.verHistorial = function (serial) {
        var i = this.vehiculos.findIndex(function (c) { return c.serial === serial; });
        var licensePlate = this.vehiculos[i].licensePlate;
        this.api.historicoVehiculo({ licensePlate: licensePlate }).subscribe(function (data) {
            if (data.success) {
                // Pajita
            }
            else {
                // Pajita
            }
        });
    };
    ClientDashboardComponent.prototype.pedirCita = function (serial) {
        var _this = this;
        this.api.pedirCita({
            serial: serial
        }).subscribe(function (data) {
            if (data.success) {
                _this.resolverCitasPedidas();
                _this.flash.show('Su solicitud de cita fue elaborada de manera correcta', { cssClass: 'custom-alert-success', timeout: 3000 });
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger' });
            }
        });
    };
    ClientDashboardComponent.prototype.verVehiculo = function (serial, content) {
        var i = this.vehiculos.findIndex(function (c) { return c.serial === serial; });
        this.car = this.vehiculos[i];
        this.modal.open(content);
    };
    ClientDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-dashboard',
            template: __webpack_require__("../../../../../src/app/components/client-dashboard/client-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client-dashboard/client-dashboard.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_upload_img_service__["a" /* UploadImgService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], ClientDashboardComponent);
    return ClientDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer {\r\n  padding: 1.5rem;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-white bg-dark\" id=\"footer\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-lg-10\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-lg-12\">\r\n            <h6><strong>Proudly Created by Chang, Quevedo a Rojas.</strong></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-sm-12\">\r\n            <h6>Lincense:\r\n              <a href=\"https://opensource.org/licenses/MIT\" target=\"black\">MIT</a>\r\n            </h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// EDITANDO PARA LA PREPA
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#welcome {\r\n  padding-top: 2rem;\r\n  height: 20rem;\r\n  color: #000000;\r\n  background-color: #eeeeee;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n#about {\r\n  padding: 3rem;\r\n}\r\nh2 {\r\n  margin-bottom: 1rem;\r\n}\r\n#contact {\r\n  background-color: #dddddd;\r\n  padding: 1.5rem;\r\n}\r\n.fondoBlanco{\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 20px;\r\n  border-radius: 1%;\r\n}\r\n.fondoBlancoPuro{\r\n  background-color: rgba(255, 255, 255, 1);\r\n  padding: 1rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <br>\r\n  <div class=\"container\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-sm-12\">\r\n        <h1 class=\"text-center text-white\">¡Bienvenido a tu taller WorkChang!</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-lg-12 col-sm-12 fondoBlanco \">\r\n        <div class=\"row text-center p-3\">\r\n          <h5>Usted confia su vehículo a\r\n            <strong>WorkChang</strong>, porque además de ser unos de los talleres más modernos del país, cumplimos con todos los\r\n            estándares de calidad. Contamos con un servicio integrado de repuestos, con profesionales calificados, por lo\r\n            que le garantizamos cubrir todas sus espectativas de calidad.\r\n          </h5>\r\n        </div>\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-12\">\r\n            <a role=\"button\" class=\"btn btn-dark btn-lg mt-3\" routerLink=\"/client/register\">¡Registrate ahora!</a>\r\n            <p class=\"mt-3 text-center\" routerLink=\"/login\">Ya estoy registrado.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <section class=\"text-black p-4 bg-white\">\r\n    <div class=\"container text-black\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <h3 class=\"text-center text-black\">\r\n            <strong>Acerca de nosotros</strong>\r\n          </h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-sm-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h5 class=\"text-center\">¿Quiénes somos?</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <p class=\"text-center\">Somos una empresa dedicada a prestar sevicios de calidad, buscando siempre el confort de nuestros clientes,\r\n                dándoles la seguridad y confianza para dejar en nuestras manos un bien tan preciado como es su vehículo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-sm-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h5 class=\"text-center\">¿Qué nos caracteriza?</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <p class=\"text-center\">Poseemos las más avanzadas tecnologías y personal altamente capacitado que te garantiza que tu vehículo está\r\n                en buenas manos. Además, te acercamos al servicio de tu vehículo con nuestra plataforma de gestión de servicio\r\n                con el que podrás visualizar el estado de reparación donde quiera que estés.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h3 class=\"text-center text-black\">\r\n          <strong>Contáctanos</strong>\r\n        </h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-around\">\r\n          <form class=\"col-lg-8\" #contact=\"ngForm\" (submit)=\"contactar()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\"\r\n                  placeholder=\"Tu correo\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <label for=\"name\">Nombre</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Tu nombre...\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <label for=\"mensaje\">Mensaje</label>\r\n                <textarea class=\"form-control\" id=\"msg\" name=\"msg\" [(ngModel)]=\"msg\" [ngModelOptions]=\"{standalone: true}\" rows=\"3\" placeholder=\"Explicanos lo que deseas... !\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-right\">\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <button class=\"btn btn-dark\" type=\"submit\">Enviar</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, api, flash) {
        this.router = router;
        this.api = api;
        this.flash = flash;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            var type = parseInt(user.type);
            switch (type) {
                case 1:
                    this.router.navigate(['/client']);
                    break;
                case 2:
                    this.router.navigate(['/manager']);
                    break;
                case 3:
                    this.router.navigate(['/mechanic']);
                    break;
                case 4:
                    this.router.navigate(['/admin']);
                    break;
                default:
                    this.router.navigate(['/']);
            }
        }
    };
    HomeComponent.prototype.contactar = function () {
        var _this = this;
        console.log('aja');
        var email = {
            email: this.email,
            msg: this.msg,
            name: this.name
        };
        this.api.contactEmail(email).subscribe(function (data) {
            console.log('eje');
            if (data.success) {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
                _this.email = '';
                _this.msg = '';
                _this.name = '';
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 80vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.fondoBlanco{\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 30px;\r\n  border-radius: 1%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h2 class=\"text-center text-white pt-5\">Iniciar Sesión</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-lg-6 fondoBlanco\">\r\n        <form #loginForm=\"ngForm\" (submit)=\"login()\">\r\n          <div class=\"row\">\r\n            <label for=\"username\">Usuario</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Usuario\">\r\n          </div>\r\n          <div class=\"row pt-3\">\r\n            <label for=\"password\">Contraseña</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Tu clave\">\r\n          </div>\r\n          <div class=\"row pt-3\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"submit\" class=\"btn btn-lg btn-primary mt-3\">Ingresar</button>\r\n              <p class=\"text-center mt-3\" routerLink=\"/client/register\">No estoy registrado.</p>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, flash) {
        this.auth = auth;
        this.router = router;
        this.flash = flash;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var credentials = {
            username: this.username,
            password: this.password
        };
        if (!credentials.username) {
            this.flash.show("Recuerde completar todos los campos", { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
        else {
            this.auth.login(credentials).subscribe(function (data) {
                if (data.success) {
                    _this.auth.storeUserData(data.token, data.user);
                    switch (data.user.type) {
                        case 1:
                            _this.router.navigate(['/client']);
                            break;
                        case 2:
                            _this.router.navigate(['/manager']);
                            break;
                        case 3:
                            _this.router.navigate(['/mechanic']);
                            break;
                        case 4:
                            _this.router.navigate(['/admin']);
                            break;
                        default:
                            _this.router.navigate(['/']);
                    }
                }
                else {
                    _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manager-dashboard/manager-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section#welcome {\r\n  padding: 2rem;\r\n}\r\n.fondoBlanco{\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 20px;\r\n  border-radius: 1%;\r\n}\r\n.invertirColor{\r\n  background-color: whitesmoke;\r\n  color: black;\r\n  padding: 20px;\r\n  border-radius: 1%;\r\n}\r\n.custom-day {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n.custom-day.focused {\r\n  background-color: #e6e6e6;\r\n}\r\n.custom-day.range, .custom-day:hover {\r\n  background-color: rgb(2, 117, 216);\r\n  color: white;\r\n}\r\n.custom-day.faded {\r\n  background-color: rgba(2, 117, 216, 0.5);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manager-dashboard/manager-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"welcome\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <h2 class=\"text-center text-white\">Bienvenido {{user.firstName}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<h3 class=\"text-center text-white\">Ordenes Reparación</h3>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-around\">\r\n    <div class=\"col-lg-10 fondoBlanco\">\r\n      <ngb-tabset type=\"pills\" justify=\"justified\">\r\n        <ngb-tab title=\"En Espera\">\r\n          <ng-template ngbTabContent>\r\n            <table class=\"table\">\r\n              <thead class=\"thead-dark\">\r\n                <tr>\r\n                  <th scope=\"col\">Marca</th>\r\n                  <th scope=\"col\">Modelo</th>\r\n                  <th scope=\"col\">Placa</th>\r\n                  <th scope=\"col\">Fecha</th>\r\n                  <th scope=\"col\">Admitir</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let cita of colaEspera\">\r\n                  <td>{{cita.brand}}</td>\r\n                  <td>{{cita.model}}</td>\r\n                  <td #licensePlate>{{cita.licensePlate}}</td>\r\n                  <td>\r\n                    <form class=\"form-inline\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                          <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                              X\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </td>\r\n                  <td>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openFinOrden(modalFin, cita)\">Admitir</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"En Curso\">\r\n          <ng-template ngbTabContent>\r\n            <table class=\"table\">\r\n              <thead class=\"thead-dark\">\r\n                <tr>\r\n                  <th>Mecánico Asignado</th>\r\n                  <th>Vehículo</th>\r\n                  <th>Placa</th>\r\n                  <th>Detalles</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let orden of ordenesActivas\">\r\n                  <td>{{orden.mechanicName}}</td>\r\n                  <td>{{orden.carName}}</td>\r\n                  <td>{{orden.carLicensePlate}}</td>\r\n                  <td class=\"text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openDetOrden(modalDet, orden)\">Ver detalles</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<h3 class=\"text-center text-white\">Modificar Cliente</h3>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-around\">\r\n    <div class=\"col-lg-10 fondoBlanco\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <h4>Cedula de identidad:</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10\">\r\n          <input type=\"text\" class=\"form-control\" id=\"nationalIDSearch\" [(ngModel)]=\"nationalIDSearch\" name=\"nationalIDSearch\" placeholder=\"11222333\">\r\n        </div>\r\n        <div class=\"col-lg-2 text-right\">\r\n          <button (click)=\"buscarCedula()\" class=\"btn btn-primary\">Buscar</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 mt-3\">\r\n          <h4>Datos cliente:</h4>\r\n        </div>\r\n      </div>\r\n      <form #formUpdate=\"ngForm\" (submit)=\"modificarDatosUsuario()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"firstName\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"firstName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\" \">\r\n          </div>\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"lastName\">Apellidos</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"lastName\" [ngModelOptions]=\"{standalone: true}\" name=\"lastName\"\r\n              placeholder=\" \">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"nationalID\">Cédula</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"nationalID\" [(ngModel)]=\"nationalID\" [ngModelOptions]=\"{standalone: true}\" name=\"nationalID\"\r\n              placeholder=\" \">\r\n          </div>\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"email\">Correo Electrónico</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" name=\"email\"\r\n              placeholder=\" \">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"addressLine1\">Dirección 1</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"addressLine1\" [(ngModel)]=\"addressLine1\" [ngModelOptions]=\"{standalone: true}\"\r\n              name=\"addressLine1\" placeholder=\" \">\r\n          </div>\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"addressLine2\">Direcciones 2</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"addressLine2\" [(ngModel)]=\"addressLine2\" [ngModelOptions]=\"{standalone: true}\"\r\n              name=\"addressLine2\" placeholder=\" \">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"city\">Ciudad</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"city\" [ngModelOptions]=\"{standalone: true}\" name=\"city\" placeholder=\" \">\r\n          </div>\r\n          <div class=\"col-sm-12 col-lg-6 form-group\">\r\n            <label for=\"photoURL\">Foto</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"photoURL\" [(ngModel)]=\"photoURL\" [ngModelOptions]=\"{standalone: true}\" name=\"photoURL\"\r\n              placeholder=\" \">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Modificar</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<h3 class=\"text-center text-white\">Reportes</h3>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-around invertirColor card-deck\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h5 class=\"text-center\">\r\n              <strong>Historial Cliente</strong>\r\n            </h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <p class=\"text-center\">Este módulo del programa buscará todos los vehículos de un determinado cliente y generará un reporte con todos\r\n            los servicio de cada vehículo, descargable en formato csv.</p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col input-group input-group-sm mb-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Cedula cliente\" #cedula>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"historicoCliente(cedula.value)\">Generar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h5 class=\"text-center\">\r\n              <strong>Historial Vehiculo</strong>\r\n            </h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <p class=\"text-center\">Este módulo del programa buscará todos los vehículos de un determinado cliente y generará un reporte con todos\r\n            los servicio de cada vehículo, descargable en formato csv.</p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col input-group input-group-sm mb-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Placa vehiculo\" #placa>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-primary\" (click)=\"historicoVehiculo(placa.value)\" type=\"button\">Generar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h5 class=\"text-center\">\r\n              <strong>Historial Mecanico</strong>\r\n            </h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <p class=\"text-center\">Este módulo del programa buscará todos los vehículos de un determinado cliente y generará un reporte con todos\r\n            los servicio de cada vehículo, descargable en formato csv.</p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col input-group input-group-sm mb-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Cedula mecánico\" #cedulaMec>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"historicoMecanico(cedulaMec.value)\">Generar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h5 class=\"text-center\">\r\n              <strong>Historial Modelo</strong>\r\n            </h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <p class=\"text-center\">Este módulo del programa buscará todos los vehículos de un determinado cliente y generará un reporte con todos\r\n            los servicio de cada vehículo, descargable en formato csv.</p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col input-group input-group-sm mb-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Modelo vehiculo\" #modelo>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"historicoModelo(modelo.value)\">Generar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-sm-12 m-1 text-right\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"date_inicio\" name=\"rangoI\" ngbDatepicker #dinicio=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary\" (click)=\"dinicio.toggle()\" type=\"button\">\r\n              X\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-12 m-1 text-right\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"date_final\" ngbDatepicker #dfinal=\"ngbDatepicker\" name=\"rangoF\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary\" (click)=\"dfinal.toggle()\" type=\"button\">\r\n              X\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-12 m-1 text-right\">\r\n        <a class=\"btn btn-primary text-white\" #descargar>Descargar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<ng-template #modalFin let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header text-center\">\r\n    <h4 class=\"modal-title\">\r\n      <strong>Admision y asignacion de mecánico</strong>\r\n    </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <h5>\r\n              <strong>Marca: </strong>{{cita.brand}}</h5>\r\n            <h6>\r\n              <strong>Modelo: </strong>{{cita.model}}</h6>\r\n            <h6>\r\n              <strong>Placa: </strong>{{cita.licensePlate}}</h6>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <h6>\r\n              <strong>Fecha: </strong>{{date.year}}-{{date.month}}-{{date.day}}</h6>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" id=\"mecanicoSelect\" required (change)=\"onChange($event.target.value)\">\r\n              <option *ngFor=\"let mecanico of mecanicos\" [value]=\"mecanico.mechanicID\">{{mecanico.nombre}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row text-right\">\r\n          <div class=\"col-sm-12\">\r\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"generarOrdenReparacion(modalFin)\">Asignar</button>\r\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Regresar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #modalDet let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Detalles de las Orden</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h6>\r\n          <strong>Mecánico Asignado:</strong> {{orden.mechanicName}}</h6>\r\n        <h6>\r\n          <strong>Vehículo:</strong> {{orden.carName}}</h6>\r\n        <h6>\r\n          <strong>Placa:</strong> {{orden.licensePlate}}</h6>\r\n        <h6>\r\n          <strong>Fecha de Recepción:</strong> {{orden.entryDate}}</h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h4 class=\"text-center\">Respuestos Utilizados:</h4>\r\n        <ul>\r\n          <li *ngFor=\"let r of orden.replacements\">{{r}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <div class=\"row text-right\">\r\n      <button type=\"button\" class=\"btn btn-dark m-1\" (click)=\"cerrarOrden(orden.repairOrdersID)\">Cerrar órden</button>\r\n      <button type=\"button\" class=\"btn btn-outline-dark m-1\" (click)=\"c('Close click')\">Regresar</button>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/manager-dashboard/manager-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerDashboardComponent = /** @class */ (function () {
    function ManagerDashboardComponent(api, modalService, flash) {
        this.api = api;
        this.modalService = modalService;
        this.flash = flash;
        this.colaEspera = [];
        this.ordenesActivas = [];
        this.mecanicos = [];
        this.orden = {};
    }
    ManagerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.api.getCitasActivas().subscribe(function (data) {
            if (data.success) {
                _this.colaEspera = data.appointments;
            }
            else {
                _this.flash.show(data.msg);
                _this.colaEspera = [];
            }
        });
        this.api.getOrdenesAbiertas().subscribe(function (data) {
            if (data.success) {
                _this.ordenesActivas = data.activesOrders;
            }
            else {
                _this.ordenesActivas = [];
            }
        });
        this.api.getMecanicosDisponibles().subscribe(function (data) {
            if (data.success) {
                _this.mecanicos = data.mechanics;
                _this.mecanico = _this.mecanicos[0].mechanicID;
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ManagerDashboardComponent.prototype.openDetOrden = function (content, orden) {
        var _this = this;
        this.orden = {};
        this.api.verDetallesReparacion({
            "repairOrderID": orden.ID,
            "mechanicID": orden.mechanicID,
            "carID": orden.carID
        }).subscribe(function (data) {
            if (data.success) {
                _this.orden = data.detalles;
                console.log(_this.orden);
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    ManagerDashboardComponent.prototype.onChange = function (mecanicoID) {
        this.mecanico = mecanicoID;
    };
    ManagerDashboardComponent.prototype.openFinOrden = function (content, cita) {
        if (this.date) {
            this.cita = cita;
            this.modalService.open(content, { windowClass: 'dark-modal' });
        }
        else {
            this.flash.show('No ha Seleccionado una fecha', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    ManagerDashboardComponent.prototype.generarOrdenReparacion = function (content) {
        var _this = this;
        var orden = {
            entryDate: this.date,
            MechanicID: this.mecanico,
            AppointmentID: this.cita.ID
        };
        this.api.nuevaOrdenReparacion(orden).subscribe(function (data) {
            if (data.success) {
                var appointmentID_1 = data.repairOrder.AppointmentID;
                var i = _this.colaEspera.findIndex(function (element) { return element.ID === appointmentID_1; });
                var vecAppointment = _this.colaEspera.slice(i, i + 1);
                _this.colaEspera = _this.colaEspera.slice(i, i + 1);
                _this.api.getOrdenesAbiertas().subscribe(function (data) {
                    if (data.success) {
                        _this.ordenesActivas = data.activesOrders;
                        _this.modalService.open(content).close();
                    }
                    else {
                        _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 5000 });
                    }
                });
                _this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 6000 });
            }
            else {
                _this.flash.show(data.msg, { cssClas: 'custom-alert-danger', timeout: 6000 });
            }
        });
    };
    ManagerDashboardComponent.prototype.buscarCedula = function () {
        var _this = this;
        this.api.buscarClientePorCedula({
            nationalID: this.nationalIDSearch
        }).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.firstName = data.user.firstName;
                _this.lastName = data.user.lastName;
                _this.nationalID = data.user.nationalID;
                _this.email = data.user.email;
                _this.addressLine1 = data.user.addressLine1;
                _this.addressLine2 = data.user.addressLine2;
                _this.city = data.user.city;
                _this.photoURL = data.user.photoURL;
            }
            else {
                console.log(data.msg);
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 6000 });
            }
        });
    };
    ManagerDashboardComponent.prototype.modificarDatosUsuario = function () {
        var _this = this;
        var cliente = {
            firstName: this.firstName,
            lastName: this.lastName,
            nationalID: this.nationalID,
            email: this.email,
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            city: this.city,
            photoURL: this.photoURL
        };
        this.api.modificarDatosCliente(cliente).subscribe(function (data) {
            if (data.success) {
                _this.flash.show(data.msg);
            }
            else {
                _this.flash.show(data.msg);
            }
        });
    };
    ManagerDashboardComponent.prototype.cerrarOrden = function (ordenID) {
        var _this = this;
        console.log(ordenID);
        var d = new Date(Date.now());
        var datos = {
            id: ordenID,
            exitDate: {
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDay()
            }
        };
        this.api.cerrarOrden(datos).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.api.getOrdenesAbiertas().subscribe(function (data) {
                    if (data.success) {
                        _this.ordenesActivas = data.activesOrders;
                    }
                    else {
                        _this.ordenesActivas = [];
                    }
                });
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ManagerDashboardComponent.prototype.historicoCliente = function (nationalID) {
        var _this = this;
        this.api.historicoCliente({ nationalID: nationalID }).subscribe(function (data) {
            if (data.success) {
                var blob = new Blob([data.csv], { type: 'text/plain' });
                if (window.navigator.msSaveBlob) {
                    window.navigator.msSaveBlob(blob);
                }
                else {
                    _this.btn.nativeElement.href = window.URL.createObjectURL(blob);
                    _this.btn.nativeElement.download = "historico-" + nationalID + ".csv";
                }
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ManagerDashboardComponent.prototype.historicoVehiculo = function (licensePlate) {
        var _this = this;
        this.api.historicoVehiculo({ licensePlate: licensePlate }).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                var blob = new Blob([data.csv], { type: 'text/plain' });
                if (window.navigator.msSaveBlob) {
                    window.navigator.msSaveBlob(blob);
                }
                else {
                    _this.btn.nativeElement.href = window.URL.createObjectURL(blob);
                    _this.btn.nativeElement.download = "historico-" + licensePlate + ".csv";
                }
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ManagerDashboardComponent.prototype.historicoMecanico = function (nationalID) {
        var _this = this;
        var date1 = this.date_inicio.year + "-" + this.date_inicio.month + "-" + this.date_inicio.day;
        var date2 = this.date_final.year + "-" + this.date_final.month + "-" + this.date_final.day;
        this.api.historicoMecanico({ nationalID: nationalID, date1: date1, date2: date2 }).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                var blob = new Blob([data.csv], { type: 'text/plain' });
                if (window.navigator.msSaveBlob) {
                    window.navigator.msSaveBlob(blob);
                }
                else {
                    _this.btn.nativeElement.href = window.URL.createObjectURL(blob);
                    _this.btn.nativeElement.download = "historico-mecanico-" + nationalID + ".csv";
                }
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ManagerDashboardComponent.prototype.historicoModelo = function (model) {
        var _this = this;
        var date1 = this.date_inicio.year + "-" + this.date_inicio.month + "-" + this.date_inicio.day;
        var date2 = this.date_final.year + "-" + this.date_final.month + "-" + this.date_final.day;
        this.api.historicoModelo({ model: model, date1: date1, date2: date2 }).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                var blob = new Blob([data.csv], { type: 'text/plain' });
                if (window.navigator.msSaveBlob) {
                    window.navigator.msSaveBlob(blob);
                }
                else {
                    _this.btn.nativeElement.href = window.URL.createObjectURL(blob);
                    _this.btn.nativeElement.download = "historico-" + model + ".csv";
                }
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('descargar'),
        __metadata("design:type", Object)
    ], ManagerDashboardComponent.prototype, "btn", void 0);
    ManagerDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager-dashboard',
            template: __webpack_require__("../../../../../src/app/components/manager-dashboard/manager-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manager-dashboard/manager-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], ManagerDashboardComponent);
    return ManagerDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/mechanic-dashboard/mechanic-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondoBlanco{\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 20px;\r\n  border-radius: 1%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mechanic-dashboard/mechanic-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <section>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <h2 class=\"text-center text-white mt-5\">Bienvenido {{user.firstName}}</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <h3 class=\"text-center text-white mt-3\">Mis Ordenes Asignadas</h3>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-lg-10 col-sm-12 fondoBlanco\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-striped table-light\">\r\n            <thead class=\"thead-dark\">\r\n              <tr>\r\n                <th scope=\"col\">Orden No.</th>\r\n                <th scope=\"col\">Vehiculo</th>\r\n                <th scope=\"col\">Fecha Asignacion</th>\r\n                <th scope=\"col\">Ver Orden</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let orden of ordenes\">\r\n                <td>{{orden.ID}}</td>\r\n                <td>{{orden.carData}}</td>\r\n                <td>{{orden.entryDate}}</td>\r\n                <td>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"verOrden(orden.ID)\">Ver Orden</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <h3 class=\"text-center text-white\">Orden de Reparación</h3>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-lg-10 col-sm-12 fondoBlanco\">\r\n        <form class=\"row p-1\" #buscar=\"ngForm\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <h4>Cargar orden:</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-10 col-sm-12 p-1\">\r\n                <input class=\"form-control\" id=\"searchOrder\" type=\"text\" placeholder=\"Numero de orden...\" #idOrden>\r\n              </div>\r\n              <div class=\"col-lg-2 text-center col-sm-12 p-1\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"buscarOrden(idOrden.value)\">Buscar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <form class=\"row mt-2\" #orden=\"ngForm\" (submit)=\"actulizarOrden()\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 col-sm-6 text-left\">\r\n                <h4>Detalles orden:</h4>\r\n              </div>\r\n              <div class=\"col-sm-12 col-lg-6 text-center\">\r\n                <button type=\"button\" class=\"btn btn-block btn-outline-primary\" #btnCarro (click)=\"verCarro(modalCarro)\">No has cargado ninguna orden</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row mt-3\">\r\n              <label for=\"diagnostico\" class=\"col-sm-2 col-form-label\">Diagnostico:</label>\r\n              <div class=\"col-sm-10\">\r\n                <input type=\"text\" readonly class=\"form-control-plaintext\" value=\"{{orden.diagnostic}}\" name=\"diagnostico\" id=\"diagnostico\"\r\n                  [(ngModel)]=\"diagnostico\" [ngModelOptions]=\"{ standalone: true }\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-lg-12\">\r\n                <label for=\"procedimiento\">Procedimiento:</label>\r\n                <textarea class=\"form-control\" name=\"procedimiento\" id=\"procedimiento\" [(ngModel)]=\"procedimiento\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  aria-label=\"With textarea\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-lg-12 col-sm-12\">\r\n                <ul class=\"list-group list-group-flush\" *ngFor=\"let r of orden.replacementData\">\r\n                  <li class=\"list-group-item\">{{r}}</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-2\">\r\n              <div class=\"col-lg-12 col-sm-12 text-right\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"verRepuestos(content)\">Ver Repuestos</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-sm-12 text-right\">\r\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                  <button type=\"submit\" class=\"btn btn-dark\">Actualizar Orden</button>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cerrarOrden()\">Marcar Culminada</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n</section>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Repuestos</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Nombre</th>\r\n          <th scope=\"col\">Marca</th>\r\n          <th scope=\"col\">para Modelos</th>\r\n          <th scope=\"col\">Usar</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let rep of repuestos\">\r\n          <td>{{rep.name}}</td>\r\n          <td>{{rep.brand}}</td>\r\n          <td>{{rep.forModel}}</td>\r\n          <td>\r\n            <input #cant type=\"text\" style=\"max-width: 150px;\" class=\"form-control\">\r\n          </td>\r\n          <td>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregar(rep.ID, cant.value)\">Agregar</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n<ng-template #modalCarro let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">\r\n      <strong>Vehículo:</strong>\r\n    </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <img src=\"{{car.photoLink}}\" alt=\"car-photo\" class=\"img-thumbnail\" height=\"200px\" width=\"auto\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-sm-12\">\r\n        <h6>\r\n          <strong>Marca</strong> {{car.brand}}</h6>\r\n        <h6>\r\n          <strong>Modelo:</strong> {{car.model}}</h6>\r\n        <h6>\r\n          <strong>Placa:</strong> {{car.licensePlate}}</h6>\r\n        <h6>\r\n          <strong>Serial:</strong> {{car.serial}}</h6>\r\n        <h6>\r\n          <strong>Año:</strong> {{car.year}}</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/mechanic-dashboard/mechanic-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MechanicDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MechanicDashboardComponent = /** @class */ (function () {
    function MechanicDashboardComponent(api, modal, flash) {
        this.api = api;
        this.modal = modal;
        this.flash = flash;
        this.ordenes = [];
        this.resp = [];
    }
    MechanicDashboardComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getOrder(this.user);
    };
    MechanicDashboardComponent.prototype.getOrder = function (user) {
        var _this = this;
        this.api.getOrdenes(user).subscribe(function (data) {
            if (data.success) {
                _this.ordenes = data.repairs;
                console.log(_this.ordenes);
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                _this.ordenes = [];
            }
        });
    };
    MechanicDashboardComponent.prototype.verOrden = function (ordenID) {
        var _this = this;
        var i = this.ordenes.findIndex(function (o) { return o.ID === ordenID; });
        this.orden = this.ordenes[i];
        this.actualizarBtn(this.orden.carData);
        this.diagnostico = this.orden.diagnostic;
        this.api.getRepuestoModelos(this.orden.carModel).subscribe(function (data) {
            if (data.success) {
                _this.repuestos = data.replacements;
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                _this.repuestos = [];
            }
        });
    };
    MechanicDashboardComponent.prototype.verRepuestos = function (content) {
        this.modal.open(content, { size: 'lg' });
    };
    MechanicDashboardComponent.prototype.actulizarOrden = function (id) {
        var _this = this;
        if (this.procedimiento) {
            var datos = {
                id: this.orden.ID,
                orden: {
                    procedure: this.procedimiento,
                    replacements: this.resp
                }
            };
            this.api.actualizarOrden(datos).subscribe(function (data) {
                if (data.success) {
                    _this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
                }
                else {
                    _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flash.show('La sección de procedimiento no puede estar vacia', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    MechanicDashboardComponent.prototype.cerrarOrden = function (id) {
        var _this = this;
        this.api.cerrarOrdenMecanico({ id: id }).subscribe(function (data) {
            if (data.success) {
                // Pajita nice
                _this.getOrder(_this.user);
            }
            else {
                //Pajita Fea
            }
        });
    };
    MechanicDashboardComponent.prototype.buscarOrden = function (id) {
        var _this = this;
        this.api.getOrdenByID(id).subscribe(function (data) {
            if (data.success) {
                _this.orden = data.RepairOrder[0];
                _this.actualizarBtn(_this.orden.carData);
                _this.diagnostico = _this.orden.diagnostic;
                _this.api.getRepuestoModelos(_this.orden.carModel).subscribe(function (data2) {
                    if (data2.success) {
                        _this.repuestos = data2.replacements;
                    }
                    else {
                        _this.flash.show(data2.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                        _this.repuestos = [];
                    }
                });
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                _this.orden = {};
            }
        });
    };
    MechanicDashboardComponent.prototype.agregar = function (respID, num) {
        if (num > 0) {
            this.resp.push({ ID: respID, stock: num });
        }
        else {
            this.flash.show('Por favor ingrese un número mayor a cero', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    MechanicDashboardComponent.prototype.actualizarBtn = function (carData) {
        this.btn.nativeElement.innerHTML = "<strong>" + carData + "</strong>";
    };
    MechanicDashboardComponent.prototype.verCarro = function (content) {
        var _this = this;
        var serial = this.orden.serial;
        this.api.getCarBySerial(serial).subscribe(function (data) {
            if (data.success) {
                _this.car = data.car;
                _this.modal.open(content);
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btnCarro'),
        __metadata("design:type", Object)
    ], MechanicDashboardComponent.prototype, "btn", void 0);
    MechanicDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mechanic-dashboard',
            template: __webpack_require__("../../../../../src/app/components/mechanic-dashboard/mechanic-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/mechanic-dashboard/mechanic-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], MechanicDashboardComponent);
    return MechanicDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark fixed-top bg-dark\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\" href=\"/\">\r\n              <img src=\"../assets/logo_workchang.png\" width=\"142px\" height=\"38px\"  alt=\"\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul *ngIf=\"!auth.isLogged()\" class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Ingresar</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/client/register\">Registrar</a>\r\n      </li>\r\n    </ul>\r\n    <ul *ngIf=\"auth.isLogged()\" class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"\" (click)=\"logOut()\">Salir</a></li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/client\" *ngIf=\"isClient()\">Dashboard</a>\r\n        <a class=\"nav-link\" routerLink=\"/manager\" *ngIf=\"isManager()\">Dashboard</a>\r\n        <a class=\"nav-link\" routerLink=\"/mechanic\" *ngIf=\"isMechanic()\">Dashboard</a>\r\n        <a class=\"nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin()\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/manager/receive-car\" *ngIf=\"isManager()\">Recibir Vehículo</a>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            this.type = 0;
        }
        else {
            this.type = user.type;
        }
    };
    NavbarComponent.prototype.isClient = function () {
        return this.type === 1;
    };
    NavbarComponent.prototype.isManager = function () {
        return this.type === 2;
    };
    NavbarComponent.prototype.isMechanic = function () {
        return this.type === 3;
    };
    NavbarComponent.prototype.isAdmin = function () {
        return this.type === 4;
    };
    NavbarComponent.prototype.logOut = function () {
        this.auth.logOut();
        this.router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recive-car/recive-car.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondoBlanco{\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    padding: 20px;\r\n    border-radius: 1%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recive-car/recive-car.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container mt-4 mb-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"text-center text-white mt-5\">Recepción de Vehículo</h2>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-around\">\r\n    <div class=\"col-lg-10 fondoBlanco\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-sm-12\">\r\n          <h4>Escaner Código QR:</h4>\r\n        </div>\r\n        <div class=\"col-lg-6 col-sm-12 text-right\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"tomarFoto()\">Escanear</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificarQR()\">Verificar</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-sm-12 col-lg-6 text-center\">\r\n          <video class=\"booth\" #video [width]=\"width\" [height]=\"height\" autoplay></video>\r\n        </div>\r\n        <div class=\"col-sm-12 col-lg-6 text-center\">\r\n          <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"container\" *ngIf=\"mostrar\">\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"text-center text-white mt-5\">Datos de la Orden de Reparación</h2>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-around\">\r\n    <div class=\"col-lg-10 fondoBlanco\">\r\n      <div class=\"row form-group pl-2\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"row \">\r\n            <label for=\"mechanicName\"><strong>Mecánico:</strong></label>\r\n          </div>\r\n          <div class=\"row\">\r\n            <input type=\"text\" id=\"mechanicName\" name=\"mechanicName\" readonly class=\"form-control-plaintext\" value=\"{{rodata.mechanicName}}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 \">\r\n          <div class=\"row\">\r\n            <label for=\"carName\"><strong>Datos de Carro:</strong></label>\r\n          </div>\r\n          <div class=\"row\">\r\n            <input type=\"text\" id=\"carName\" name=\"carName\" readonly class=\"form-control-plaintext\" value=\"{{rodata.carName}}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 \">\r\n          <div class=\"row\">\r\n            <label for=\"licensePlate\"><strong>Placa:</strong></label>\r\n          </div>\r\n          <div class=\"row\">\r\n            <input type=\"text\" id=\"licensePlate\" name=\"licensePlate\" readonly class=\"form-control-plaintext\" value=\"{{rodata.licensePlate}}\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <h4 class=\"center-text\">Recepción del Vehículo</h4>\r\n        </div>\r\n      </div>\r\n      <form class=\"row\" #formDetails=\"ngForm\" (submit)=\"aceptarVehiculo()\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-lg-12 form-group\">\r\n                    <label for=\"diagnostic\">Diagnosctico: </label>\r\n                    <textarea class=\"form-control\" rows=\"2\" name=\"diagnostic\" [(ngModel)]=\"diagnostic\" [ngModelOptions]=\"{standalone: true}\"></textarea>      \r\n                  </div>\r\n            </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-6 form-group\">\r\n              <label for=\"front\">Detalles Parte Frontal: </label>\r\n              <textarea class=\"form-control\" id=\"front\" rows=\"2\" name=\"front\" [(ngModel)]=\"front\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n            </div>\r\n            <div class=\"col-sm-12 col-lg-6 form-group\">\r\n              <label for=\"back\">Detalles Parte Posterior: </label>\r\n              <textarea class=\"form-control\" id=\"back\" rows=\"2\" name=\"back\" [(ngModel)]=\"back\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-6 form-group\">\r\n              <label for=\"right\">Detalles Parte Lat. Derecho: </label>\r\n              <textarea class=\"form-control\" id=\"right\" rows=\"2\" name=\"right\" [(ngModel)]=\"right\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n            </div>\r\n            <div class=\"col-sm-12 col-lg-6 form-group\">\r\n              <label for=\"left\">Detalles Parte Lat. Izquierdo: </label>\r\n              <textarea class=\"form-control\" id=\"left\" rows=\"2\" name=\"lefy\" [(ngModel)]=\"left\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n            <label for=\"fotoVehiculo\">Foto del Vehiculo</label>\r\n            <div class=\"custom-file\" id=\"fotoVehiculo\">\r\n              <input type=\"file\" class=\"custom-file-input\" id=\"photo\" [(ngModel)]=\"photo\" accept=\".png, .jpg, .jpeg\" name=\"photo\" (change)=\"onChange($event)\">\r\n              <label class=\"custom-file-label\" for=\"photo\">Mi Vehiculo</label>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          <div class=\"row mt-3 text-right\">\r\n            <div class=\"col-sm-12 form-group\">\r\n              <button class=\"btn btn-primary\" type=\"submit\">Aceptar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/recive-car/recive-car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReciveCarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_qrcode_service__ = __webpack_require__("../../../../../src/app/services/qrcode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_img_service__ = __webpack_require__("../../../../../src/app/services/upload-img.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReciveCarComponent = /** @class */ (function () {
    function ReciveCarComponent(api, qrservice, img, flash, router) {
        this.api = api;
        this.qrservice = qrservice;
        this.img = img;
        this.flash = flash;
        this.router = router;
        this.mostrar = false;
    }
    ReciveCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = 300;
        this.height = 300;
        this.context = this.canvas.nativeElement.getContext('2d');
        var camara = navigator.mediaDevices;
        var permisos = navigator.mediaDevices.getUserMedia;
        if (camara && permisos) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                _this.video.nativeElement.src = window.URL.createObjectURL(stream);
                _this.video.nativeElement.play();
            }).catch(function (err) { return console.log(err); });
        }
        else {
            this.flash.show('Este equipo no tiene cámaras', { cssClass: '', timeout: 3000 });
        }
    };
    ReciveCarComponent.prototype.onChange = function (evt) {
        var _this = this;
        this.img.loadImg(evt.target.files[0]).then(function (link) {
            _this.photoLink = link;
        }).catch(function (err) { return console.log(err); });
    };
    ReciveCarComponent.prototype.tomarFoto = function () {
        this.context = this.canvas.nativeElement.getContext('2d');
        this.context.drawImage(this.video.nativeElement, 0, 0, this.width, this.height);
        this.qrcode = this.canvas.nativeElement.toDataURL('img/png');
    };
    ReciveCarComponent.prototype.verificarQR = function () {
        var _this = this;
        this.qrservice.guardarQR(this.qrcode).subscribe(function (data) {
            if (data.sucess) {
                _this.rodata = data.data;
                _this.mostrar = true;
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    ReciveCarComponent.prototype.aceptarVehiculo = function () {
        var _this = this;
        var detalles = "Detalles parete delantera: " + this.front + "\n      Detalles parte trasera: " + this.back + "\n      Detalles parte Lat. Derecha: " + this.right + "\n      Detalles parte Lat. Izquiera: " + this.left + "\n    ";
        var details = {
            repairOrderID: this.rodata.ID,
            details: detalles,
            photo: this.photoLink,
            diagnostic: this.diagnostic
        };
        this.api.recibirVehiculo(details).subscribe(function (data) {
            if (data.sucess) {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
                _this.front = '';
                _this.back = '';
                _this.right = '';
                _this.right = '';
                _this.photoLink = '';
                _this.diagnostic = '';
                _this.router.navigate(['/manager']);
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('video'),
        __metadata("design:type", Object)
    ], ReciveCarComponent.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], ReciveCarComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ReciveCarComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ReciveCarComponent.prototype, "height", void 0);
    ReciveCarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recive-car',
            template: __webpack_require__("../../../../../src/app/components/recive-car/recive-car.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/recive-car/recive-car.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__services_qrcode_service__["a" /* QrcodeService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_img_service__["a" /* UploadImgService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ReciveCarComponent);
    return ReciveCarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondoBlanco{\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 20px;\r\n  border-radius: 1%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h2 class=\"text-center text-white mt-4\">Registro</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-sm-12 col-lg-8 fondoBlanco\">\r\n        <div class=\"row\">\r\n          <form #registerForm=\"ngForm\" (submit)=\"registrar()\" class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"firstName\">Nombres</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"firstName\" name=\"firstName\" placeholder=\"Rafael\">\r\n                </div>\r\n              </div>  \r\n              <div class=\"col-sm-12 col-lg-6\">  \r\n                <div class=\"form-group\">\r\n                  <label for=\"lastName\">Apellidos</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"lastName\" name=\"lastName\" placeholder=\"Matienzo\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"username\">Usuario</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"rmatienzo\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"email\">Correo Eléctronico</label>\r\n                  <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"rmatienzo@example.com\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\">Contraseña</label>\r\n                  <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"password\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"password2\">Confirmar Contraseña</label>\r\n                  <input type=\"password\" class=\"form-control\" id=\"password2\" [(ngModel)]=\"password2\" name=\"password2\" placeholder=\"password\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"addressLine1\">Dirección 1</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"addressLine1\" [(ngModel)]=\"addressLine1\" name=\"addressLine1\" placeholder=\"Edif. La Vida, Apto 00\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"addressLine2\">Dirección 2</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"addressLine2\" [(ngModel)]=\"addressLine2\" name=\"addressLine2\" placeholder=\"Calle principal, el paraiso\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"city\">Ciudad</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"Caracas\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-lg-6\">               \r\n                <div class=\"form-group\">\r\n                  <label for=\"nationalID\">Cedula de identidad</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"nationalID\" [(ngModel)]=\"nationalID\" name=\"nationalID\" placeholder=\"12345678\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Registrar</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, flash) {
        this.auth = auth;
        this.router = router;
        this.flash = flash;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registrar = function () {
        var _this = this;
        if (this.nationalID > 0 && this.nationalID < 99999999999 &&
            this.firstName.length < 45 && this.firstName &&
            this.lastName.length < 45 && this.lastName &&
            this.email.length < 255 && this.email &&
            this.username.length < 20 && this.username &&
            this.password.length < 255 && this.password &&
            this.addressLine1.length < 45 && this.addressLine1 &&
            this.addressLine2.length < 45 && this.addressLine2 &&
            this.city.length < 45 && this.city) {
            if (this.password === this.password2) {
                var user = {
                    nationalID: this.nationalID,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    addressLine1: this.addressLine1,
                    addressLine2: this.addressLine2,
                    city: this.city,
                    type: 1
                };
                this.auth.registerUser(user).subscribe(function (data) {
                    if (data.success) {
                        _this.flash.show('Cliente Registrado con Éxito', { cssClass: 'custom-alert-success', timeout: 3000 });
                        _this.router.navigate(['/login']);
                    }
                    else {
                        _this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
                        // this.router.navigate(['/client/register']);
                    }
                });
            }
            else {
                this.flash.show('Las contraseñas no coinciden', { cssClass: 'custom-alert-danger', timeout: 3000 });
            }
        }
        else {
            this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getUsuariosWorkers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('User/get-workers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getUsuariosByID = function (search, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (type == 'ID') {
            return this.http.post('User/searchUsersByID', search, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else if (type == 'nationalID') {
            return this.http.post('User/searchUsersByNationalID', search, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else if (type == 'name') {
            return this.http.post('User/searchUsersByName', search, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else if (type == 'username') {
            return this.http.post('User/searchUsersByUsername', search, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else if (type == 'email') {
            return this.http.post('User/searchUsersByEmail', search, { headers: headers })
                .map(function (res) { return res.json(); });
        }
    };
    ApiService.prototype.getUsuariosByNationalID = function (userID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('User/searchUsersByID', userID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.modificarDatosUsuario = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('User/modify-User', usuario, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.buscarCliente = function (userID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('User/searchClient', userID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.registrarCarro = function (car) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Client/CarRegister', car, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.pedirCita = function (cita) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Client/askAppoiment', cita, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.buscarCarros = function (OwnerID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Client/Cars', OwnerID, { headers: headers })
            .map(function (res) { return res.json().cars.filter(function (car) { return car.active == 1; }); });
    };
    ApiService.prototype.buscarClientePorCedula = function (cedula) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Client/search-nationalID', cedula, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.modificarDatosCliente = function (cliente) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Client/modify', cliente, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCitasActivas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Manager/appointments', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getOrdenesAbiertas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Manager/actives-orders', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.buscarMecanico = function (userID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('User/searchMechanic', userID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.registrarRepuesto = function (replacement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Admin/new-Replacement', replacement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getRepuestos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Admin/replacements', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getRepuestosByPartNumber = function (partNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Admin/searchByPartNumber', partNumber, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.modificarRepuesto = function (replacement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Admin/modify-Replacement', replacement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getMecanicosDisponibles = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Manager/available-mechanics', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.nuevaOrdenReparacion = function (orden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Manager/create-RepairOrder', orden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getOrdenes = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Mechanic/repair-orders', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.desactivarVehiculo = function (serial) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Client/desactive-cars', serial, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCitasPedidas = function (userID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("Client/all-appoiments/" + userID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.verDetallesReparacion = function (ids) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Manager/order-details', ids, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.recibirVehiculo = function (detalles) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Manager/receive-car', detalles, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.contactEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Email/contact', email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getRepuestoModelos = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("Mechanic/replacements/" + model, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.actualizarOrden = function (datos) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Mechanic/change-order', datos, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.cerrarOrdenMecanico = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('Mechanic/close-order', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getOrdenByID = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("Mechanic/order/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.cerrarOrden = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("Manager/close-order", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.historicoCliente = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("Reports/clientHistorical", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.historicoVehiculo = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("Reports/carHistorical", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.historicoMecanico = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("Reports/mechanicHistorical", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.historicoModelo = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("Reports/modelHistorical", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCarBySerial = function (serial) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("Mechanic/car/" + serial, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getEmpleadoByApellido = function (apellido) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("Manager/empleado/" + apellido, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('User/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('User/auth', credentials, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = localStorage.getItem('id_token');
        this.token = token;
        headers.append('Authorization', this.token);
        headers.append('Content-Type', 'application/json');
    };
    AuthService.prototype.isLogged = function () {
        if (!localStorage.getItem('token')) {
            return false;
        }
        else {
            return !(this.jwtHelper.isTokenExpired(localStorage.getItem('token')));
        }
    };
    AuthService.prototype.logOut = function () {
        this.user = null;
        this.token = null;
        localStorage.clear();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.token = token;
        this.user = user;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isLogged()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/qrcode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrcodeService = /** @class */ (function () {
    function QrcodeService(http) {
        this.http = http;
    }
    QrcodeService.prototype.guardarQR = function (qr) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('qr', { qr: qr }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QrcodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], QrcodeService);
    return QrcodeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload-img.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadImgService = /** @class */ (function () {
    function UploadImgService() {
    }
    UploadImgService.prototype.loadImg = function (file) {
        return new Promise(function (resolve, reject) {
            var tipo;
            if (file) {
                switch (file.type) {
                    case 'image/gif':
                        tipo = 'data:image/gif;base64,';
                        break;
                    case 'image/jpeg':
                        tipo = 'data:image/jpeg;base64,';
                        break;
                    case 'image/png':
                        tipo = 'data:image/png;base64,';
                        break;
                    case 'image/svg+xml':
                        tipo = 'data:image/svg+xml;base64,';
                        break;
                    default:
                        tipo = null;
                        return;
                }
                var reader = new FileReader();
                if (tipo) {
                    reader.onload = function (readEvt) {
                        var binaryString = readEvt.target.result;
                        var base64 = btoa(binaryString);
                        var resultado = tipo + base64;
                        resolve(resultado);
                    };
                    reader.readAsBinaryString(file);
                }
                else {
                    reject('Formato de Imagen Inválido');
                }
            }
            else {
                reject('Formato de Imagen Inválido');
            }
        });
    };
    UploadImgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploadImgService);
    return UploadImgService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map