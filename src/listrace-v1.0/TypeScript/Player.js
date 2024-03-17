"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(playerId, playerNm, country, numMatches) {
        if (playerId === void 0) { playerId = 2; }
        if (playerNm === void 0) { playerNm = "Rohan"; }
        if (country === void 0) { country = "India"; }
        if (numMatches === void 0) { numMatches = 5; }
        this.playerId = playerId;
        this.playerNm = playerNm;
        this.country = country;
        this.numMatches = numMatches;
    }
    Player.prototype.display = function () {
        console.log(this.playerId);
        console.log(this.playerNm);
        console.log(this.country);
        console.log(this.numMatches);
    };
    return Player;
}());
exports.Player = Player;
