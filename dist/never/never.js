"use strict";
var value = 30;
if (typeof value == 'number')
    console.log('value est un number');
function foo(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    return fail("x n 'est ni un string ni un number ");
}
foo('number');
function fail(msg) {
    throw new Error(msg);
}
