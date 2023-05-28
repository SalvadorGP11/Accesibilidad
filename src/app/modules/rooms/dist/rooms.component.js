"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoomsComponent = void 0;
var core_1 = require("@angular/core");
var RoomsComponent = /** @class */ (function () {
    function RoomsComponent() {
        this.fontSizeh1 = 46; // Tamaño de fuente inicial
        this.fontSizeh3 = 30;
        this.fontSizeh2 = 38;
        this.fontSizeh5 = 26;
        this.fontSizeh6 = 22;
        this.fontSizep = 14;
        this.rooms = [
            { title: "Room one", bed: "1 ", bath: "2", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room1.jpg' },
            { title: "Room two", bed: "2", bath: "2", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room3.jpg' },
            { title: "Room five", bed: "2", bath: "1", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room5.jpg' },
            { title: "Room six", bed: "2", bath: "1", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room7.jpg' },
            { title: "Room eigth", bed: "1", bath: "3", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room8.jpg' },
            { title: "Room ten", bed: "1", bath: "2", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room10.jpg' },
            { title: "Room eleven", bed: "3", bath: "2", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room4.jpg' },
            { title: "Room twelve", bed: "1", bath: "3", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room2.jpg' },
            { title: "Room fifteen", bed: "1", bath: "3", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room6.jpg' },
            { title: "Room sixteen", bed: "3", bath: "1", desc: "Experience true comfort and relaxation in our stylishly designed room. Equipped with modern amenities, including a cozy bed, flat-screen TV, and high-speed internet, our room offers the perfect escape after a long day. Unwind in the tranquil ambiance, and enjoy a restful night's sleep in this cozy retreat.", url: 'assets/imgs/rooms/room15.webp' },
        ];
    }
    RoomsComponent.prototype.onFontSizeChanged = function (delta) {
        this.fontSizeh1 += delta;
        this.fontSizeh3 += delta;
        this.fontSizeh2 += delta;
        this.fontSizeh5 += delta;
        this.fontSizeh6 += delta;
        this.fontSizep += delta;
    };
    RoomsComponent = __decorate([
        core_1.Component({
            selector: 'app-rooms',
            templateUrl: './rooms.component.html',
            styleUrls: ['./rooms.component.css']
        })
    ], RoomsComponent);
    return RoomsComponent;
}());
exports.RoomsComponent = RoomsComponent;
