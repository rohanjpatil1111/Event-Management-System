"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var squareCube_1 = require("./squareCube");
function caller(a) {
    (0, squareCube_1.square)(a);
}
function caller1(b) {
    (0, squareCube_1.cube)(b);
}
caller(2);
caller1(3);
