"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserProfile2 = /** @class */ (function () {
    function UserProfile2(name, age, _firstName) {
        if (_firstName === void 0) { _firstName = "lol"; }
        this.name = name;
        this.age = age;
        this._firstName = _firstName;
    }
    return UserProfile2;
}());
var AdvancedUserProfile = /** @class */ (function (_super) {
    __extends(AdvancedUserProfile, _super);
    function AdvancedUserProfile(name, age, hobbies, color) {
        var _this = _super.call(this, name, age) || this;
        _this.hobbies = hobbies;
        _this.color = color;
        return _this;
    }
    Object.defineProperty(AdvancedUserProfile.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    return AdvancedUserProfile;
}(UserProfile2));
var user6 = new AdvancedUserProfile("Térence", 32, ["boxe", "dormir"], "red");
console.log(user6.firstName);
