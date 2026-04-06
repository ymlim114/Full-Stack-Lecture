"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub = exports.add = void 0;
// 이름 내보내기(Named export)
var add = function (a, b) { return a + b; };
exports.add = add;
var sub = function (a, b) { return a - b; };
exports.sub = sub;
// 기본 내보내기(Default export)
var Calculator = /** @class */ (function () {
    function Calculator(init) {
        if (init === void 0) { init = 0; }
        this.init = init;
    }
    Calculator.prototype.add = function (n) {
        this.init += n;
        return this.init;
    };
    Calculator.prototype.value = function () {
        return this.init;
    };
    return Calculator;
}());
exports.default = Calculator;
