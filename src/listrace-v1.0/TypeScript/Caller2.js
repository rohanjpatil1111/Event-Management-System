"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Batsman_1 = require("./Batsman");
var Bowler_1 = require("./Bowler");
var bt1 = new Batsman_1.Batsman(22, "Aditya", "Indoneshia", 5, 444);
var bt2 = new Batsman_1.Batsman(23, "Vishal", "Chaina", 15, 565);
var bol1 = new Bowler_1.Bowler(4, "Ram", "Setu", 7, 15);
var bol2 = new Bowler_1.Bowler(6, "Doller", "KhopasKheda", 7, 12);
var play = [bt1, bt2, bol1, bol2];
for (var _i = 0, play_1 = play; _i < play_1.length; _i++) {
    var i = play_1[_i];
    i.display();
    console.log("**********************");
}
