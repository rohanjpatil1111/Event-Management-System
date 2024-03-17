"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Violin = exports.Piano = exports.Guitar = void 0;
var Guitar = /** @class */ (function () {
    function Guitar() {
    }
    Guitar.prototype.play = function () {
        console.log("Garrrr Garrrr.....");
    };
    return Guitar;
}());
exports.Guitar = Guitar;
var Piano = /** @class */ (function () {
    function Piano() {
    }
    Piano.prototype.play = function () {
        console.log("pipipeeepi......");
    };
    return Piano;
}());
exports.Piano = Piano;
var Violin = /** @class */ (function () {
    function Violin() {
    }
    Violin.prototype.play = function () {
        console.log("viliviliiie....");
    };
    return Violin;
}());
exports.Violin = Violin;
