"use strict";
//  OLD WAY
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
var UserProfile5 = /** @class */ (function () {
    function UserProfile5(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserProfile5;
}());
var AdvancedUserProfile5 = /** @class */ (function (_super) {
    __extends(AdvancedUserProfile5, _super);
    function AdvancedUserProfile5(name, age, hobbies, color) {
        var _this = _super.call(this, name, age) || this;
        _this.hobbies = hobbies;
        _this.color = color;
        return _this;
    }
    return AdvancedUserProfile5;
}(UserProfile5));
var user7 = new AdvancedUserProfile5("Térence", 32, ["boxe", "node"], "red");
console.log(user7.name, user7.hobbies);
// NEW WAY
var UserProfile6 = /** @class */ (function () {
    function UserProfile6(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserProfile6;
}());
var AdvancedUserProfile6 = /** @class */ (function (_super) {
    __extends(AdvancedUserProfile6, _super);
    function AdvancedUserProfile6(name, age, hobbies, color) {
        var _this = _super.call(this, name, age) || this;
        _this.hobbies = hobbies;
        _this.color = color;
        return _this;
    }
    return AdvancedUserProfile6;
}(UserProfile6));
var user8 = new AdvancedUserProfile6("Térence", 32, ["boxe", "node"], "red");
console.log(user8.name, user8.hobbies);
