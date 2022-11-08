"use strict";
var days = [1, 2, 3, 4, 5];
console.log(days);
days.push(6);
console.log(days);
var myObject = {
    title: "Térence",
    age: 32,
    city: "Stains",
    isMajeur: true,
    sayHello: function (name) {
        console.log("BOnjour \u00E0 toi ".concat(name));
    },
};
console.log(myObject.city);
