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
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, ".concat(this.name));
    };
    return Person;
}());
var User = /** @class */ (function () {
    // id: number;
    // nickname: string;
    function User(id, birthData, nickname) {
        this.id = id;
        this.birthData = birthData;
        this.nickname = nickname;
        this.id = id;
        this.birthData = birthData;
        this.nickname = nickname;
    }
    User.prototype.intro = function () {
        return "".concat(this.id, " - ").concat(this.birthData, " - ").concat(this.nickname);
    };
    return User;
}());
var user1 = new User(1, '1970', '홍길동');
console.log(user1.id);
console.log(user1.intro());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, birthData, nickname) {
        return _super.call(this, id, birthData, nickname) || this;
    }
    Admin.prototype.showId = function () {
        return this.id;
    };
    Admin.prototype.showBirthData = function () {
        return this.birthData;
    };
    Admin.prototype.showNickname = function () {
        // return this.nickname;
    };
    return Admin;
}(User));
var admin = new Admin(2, '1971', 'admin');
console.log(admin.showId());
console.log(admin.showBirthData());
// console.log(admin.showNickname());
