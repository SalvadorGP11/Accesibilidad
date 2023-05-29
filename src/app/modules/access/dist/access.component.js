"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccessComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AccessComponent = /** @class */ (function () {
    function AccessComponent() {
        this.mode = new forms_1.FormControl('over');
        this.fontSizeChanged = new core_1.EventEmitter();
        this.mostrarImagenes = true;
        this.mostrarImagenesChanged = new core_1.EventEmitter();
        this.defaultCursor = 'default';
        this.increasedCursor = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"var(--cursor-size)\" height=\"var(--cursor-size)\" viewBox=\"0 0 18 18\"><path fill=\"yellow\" d=\"M12 0l-6 12h12l-6-12z\"/></svg>') 6 6, auto";
        this.speechSynthesis = window.speechSynthesis;
        this.speechUtterance = new SpeechSynthesisUtterance();
    }
    AccessComponent.prototype.increaseCursorSize = function () {
        document.body.style.cursor = this.increasedCursor;
    };
    AccessComponent.prototype.resetCursorSize = function () {
        document.body.style.cursor = this.defaultCursor;
    };
    AccessComponent.prototype.startReading = function () {
        var textToRead = document.documentElement.innerText;
        this.speechUtterance.text = textToRead;
        this.speechSynthesis.speak(this.speechUtterance);
    };
    AccessComponent.prototype.pauseReading = function () {
        this.speechSynthesis.pause();
    };
    AccessComponent.prototype.resumeReading = function () {
        this.speechSynthesis.resume();
    };
    AccessComponent.prototype.stopReading = function () {
        this.speechSynthesis.cancel();
    };
    AccessComponent.prototype.increaseFontSize = function () {
        this.fontSizeChanged.emit(15); // Aumenta el tamaño de fuente en 2 píxeles
    };
    AccessComponent.prototype.decreaseFontSize = function () {
        this.fontSizeChanged.emit(-15); // Disminuye el tamaño de fuente en 2 píxeles
    };
    AccessComponent.prototype.toggleImagenes = function () {
        this.mostrarImagenes = !this.mostrarImagenes;
        this.mostrarImagenesChanged.emit(this.mostrarImagenes);
    };
    __decorate([
        core_1.Output()
    ], AccessComponent.prototype, "fontSizeChanged");
    __decorate([
        core_1.Input()
    ], AccessComponent.prototype, "mostrarImagenes");
    __decorate([
        core_1.Output()
    ], AccessComponent.prototype, "mostrarImagenesChanged");
    AccessComponent = __decorate([
        core_1.Component({
            selector: 'app-access',
            templateUrl: './access.component.html',
            styleUrls: ['./access.component.css']
        })
    ], AccessComponent);
    return AccessComponent;
}());
exports.AccessComponent = AccessComponent;
