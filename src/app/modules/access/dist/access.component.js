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
        this.isCursorIncreased = false;
        this.originalCursor = '';
        this.isGuideVisible = false;
        this.guidePositionX = 0;
        this.guidePositionY = 0;
        this.speechSynthesis = window.speechSynthesis;
        this.speechUtterance = new SpeechSynthesisUtterance();
    }
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
    __decorate([
        core_1.Output()
    ], AccessComponent.prototype, "fontSizeChanged");
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
