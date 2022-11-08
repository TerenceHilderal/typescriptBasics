"use strict";
var MathFunctions;
(function (MathFunctions) {
    function addition(x, y) {
        return x + y;
    }
    MathFunctions.addition = addition;
    function soustraction(x, y) {
        return x - y;
    }
    MathFunctions.soustraction = soustraction;
    function division(x, y) {
        return x / y;
    }
    MathFunctions.division = division;
    function multiplication(x, y) {
        return x * y;
    }
    MathFunctions.multiplication = multiplication;
})(MathFunctions || (MathFunctions = {}));
