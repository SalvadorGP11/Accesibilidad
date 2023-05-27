"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var default_component_1 = require("./layouts/default/default.component");
var home_component_1 = require("./modules/home/home.component");
var about_component_1 = require("./modules/about/about.component");
var login_component_1 = require("./modules/login/login.component");
var rooms_component_1 = require("./modules/rooms/rooms.component");
var explore_component_1 = require("./modules/explore/explore.component");
var restaurant_component_1 = require("./modules/restaurant/restaurant.component");
var book_component_1 = require("./modules/book/book.component");
var reservations_component_1 = require("./modules/reservations/reservations.component");
var access_component_1 = require("./modules/access/access.component");
var routes = [
    { path: '',
        component: default_component_1.DefaultComponent,
        children: [{
                path: '',
                component: home_component_1.HomeComponent
            }, {
                path: 'about',
                component: about_component_1.AboutComponent
            }, {
                path: 'login',
                component: login_component_1.LoginComponent
            }, {
                path: 'rooms',
                component: rooms_component_1.RoomsComponent
            }, {
                path: 'explore',
                component: explore_component_1.ExploreComponent
            },
            {
                path: 'restaurant',
                component: restaurant_component_1.RestaurantComponent
            },
            {
                path: 'book',
                component: book_component_1.BookComponent
            },
            {
                path: 'reservations/:nombre',
                component: reservations_component_1.ReservationsComponent
            },
            {
                path: 'access',
                component: access_component_1.AccessComponent
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
