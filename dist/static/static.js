"use strict";
var Shinobi = /** @class */ (function () {
    function Shinobi(name, village, élement) {
        this.newNickname = "Tété";
        this.name = name;
        this.village = village;
        this.élement = élement;
    }
    Shinobi.staticKageBunshin = function () {
        console.log("Static Kage Bunshin no Jutsu");
    };
    Shinobi.prototype.kageBunshin = function () {
        console.log("Kage Bunshin no Jutsu");
    };
    Shinobi.nickname = "Térence";
    return Shinobi;
}());
var naruto = new Shinobi("Naruto", "Konoha", "Vent");
naruto.kageBunshin();
console.log(naruto.newNickname);
console.log("----------------------------------------------------------------");
Shinobi.staticKageBunshin();
console.log(Shinobi.nickname);
