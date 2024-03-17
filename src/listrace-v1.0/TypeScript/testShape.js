"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var cir = new Shape_1.Circle(20);
var rec = new Shape_1.Rectangle(5, 6);
var squ = new Shape_1.Square(5);
var arr = [cir, rec, squ];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    i.calArea();
    console.log("*********************");
}
