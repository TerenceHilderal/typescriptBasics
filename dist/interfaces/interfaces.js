"use strict";
var person1 = {
    firstName: "John",
    name: "Doe",
    age: 30,
};
function hello(person) {
    console.log("Bonjour \u00E0 toi ".concat(person.firstName));
}
hello(person1);
var user1 = {
    firstName: "John",
    nickname: "Wayne",
    age: 30,
    password: "password",
};
