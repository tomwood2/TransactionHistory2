"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var JhaDateStringPipe = (function () {
    function JhaDateStringPipe() {
    }
    JhaDateStringPipe.prototype.transform = function (value) {
        if (value && value.length === 8) {
            var year = value.slice(4, 8);
            var month = value.slice(0, 2);
            var day = value.slice(2, 4);
            return [month, day, year].join('/');
        }
        return "";
    };
    JhaDateStringPipe = __decorate([
        core_1.Pipe({
            name: 'jhaDateString'
        }), 
        __metadata('design:paramtypes', [])
    ], JhaDateStringPipe);
    return JhaDateStringPipe;
}());
exports.JhaDateStringPipe = JhaDateStringPipe;
var JhaMoneyPipe = (function () {
    function JhaMoneyPipe() {
    }
    JhaMoneyPipe.prototype.transform = function (value) {
        return Number(value) / 100;
    };
    JhaMoneyPipe = __decorate([
        core_1.Pipe({
            name: 'jhaMoney'
        }), 
        __metadata('design:paramtypes', [])
    ], JhaMoneyPipe);
    return JhaMoneyPipe;
}());
exports.JhaMoneyPipe = JhaMoneyPipe;
//# sourceMappingURL=jha.pipe.js.map