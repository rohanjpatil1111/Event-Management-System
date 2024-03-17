"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instrument_1 = require("./Instrument");
var Gt = new Instrument_1.Guitar();
var pio = new Instrument_1.Piano();
var Vio = new Instrument_1.Violin();
var Instrument = [Gt, pio, Vio];
for (var _i = 0, Instrument_2 = Instrument; _i < Instrument_2.length; _i++) {
    var i = Instrument_2[_i];
    i.play();
    console.log("*****************");
}
