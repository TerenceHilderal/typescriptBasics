"use strict";
var UserProfile1 = /** @class */ (function () {
    function UserProfile1(name, nickname, age) {
        this._password = "test pw";
        this.name = name;
        this.nickname = nickname;
        this.age = age;
    }
    Object.defineProperty(UserProfile1.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (newPassword) {
            this._password = newPassword;
        },
        enumerable: false,
        configurable: true
    });
    UserProfile1.prototype.displayInfo = function () {
        var keys = Object.keys(this);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var value_1 = keys_1[_i];
            console.log(this[value_1]);
        }
    };
    return UserProfile1;
}());
var user5 = new UserProfile1("Térence", "Master", 32);
console.log(user5.password);
user5.password = "Changement de password";
console.log(user5.password);
