"use strict";
var sayHello = function (name, age) {
    return console.log("Bonjour \u00E0 toi ".concat(name, " tu as ").concat(age, " ans"));
};
sayHello("Térence");
var bestFriend = function (name) { return name; };
console.log(" l'ami de T\u00E9rence est  ".concat(bestFriend("Lui même")));
