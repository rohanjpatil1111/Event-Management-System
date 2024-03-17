"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Rectangle = exports.Circle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.calArea = function () {
        this.circleArea = 2 * 3.14 * this.r;
        console.log("Area of Circle" + this.circleArea);
    };
    return Circle;
}(Shape));
exports.Circle = Circle;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.calArea = function () {
        console.log(this.length * this.width);
    };
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(a) {
        var _this = _super.call(this) || this;
        _this.a = a;
        return _this;
    }
    Square.prototype.calArea = function () {
        console.log(this.a * this.a);
    };
    return Square;
}(Shape));
exports.Square = Square;
