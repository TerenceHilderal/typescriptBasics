"use strict";
//enums
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["lundi"] = 1] = "lundi";
    Weekdays[Weekdays["mardi"] = 2] = "mardi";
    Weekdays[Weekdays["mercredi"] = 3] = "mercredi";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays[0]);
console.log(Weekdays[1]);
// tuples
var identity1 = ["Alexis", 27];
