"use strict";
var UserProfile = /** @class */ (function () {
    function UserProfile(name, nickname, age) {
        this.name = name;
        this.nickname = nickname;
        this.age = age;
    }
    UserProfile.prototype.displayInfo = function () {
        var keys = Object.keys(this);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var value_1 = keys_1[_i];
            console.log(this[value_1]);
        }
    };
    return UserProfile;
}());
var user3 = new UserProfile("Térence", "Master", 32);
user3.displayInfo();
var user4 = new UserProfile("Soumeya", "SoumSoum", 6);
user4.displayInfo();
console.log("Mon pr\u00E9nom est ".concat(user3.name, ", mon surnom est ").concat(user3.nickname, " et j'ai ").concat(user3.age, " ans"));
