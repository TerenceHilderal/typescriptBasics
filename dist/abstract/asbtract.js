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
var Shinobi2 = /** @class */ (function () {
    function Shinobi2(name, village, élement) {
        this.name = name;
        this.village = village;
        this.élement = élement;
    }
    return Shinobi2;
}());
var Shinobi3 = /** @class */ (function (_super) {
    __extends(Shinobi3, _super);
    function Shinobi3(name, village, élement, grade) {
        var _this = _super.call(this, name, village, élement) || this;
        _this.grade = grade;
        return _this;
    }
    return Shinobi3;
}(Shinobi2));
// const naruto2 = new Shinobi2("Naruto", "Konoha", "Vent");
// console.log(naruto2.name);
//
var naruto3 = new Shinobi3("Naruto", "Konoha", "Vent", "Hokage");
