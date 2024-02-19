"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpful_decorators_1 = require("helpful-decorators");
var DateClass = /** @class */ (function () {
    function DateClass() {
    }
    DateClass.prototype.measureTime = function () {
        var total = 0;
        for (var i = 0; i < 10000000000; i++) {
            total += i;
        }
    };
    ;
    __decorate([
        helpful_decorators_1.measure
    ], DateClass.prototype, "measureTime", null);
    return DateClass;
}());
var timeTaken = new DateClass();
timeTaken.measureTime();
