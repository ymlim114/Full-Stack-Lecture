"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils;
(function (Utils) {
    function clamp(n, min, max) {
        return Math.max(min, Math.min(max, n)); // clamp(5, 0, 10) retrun 5
    }
    Utils.clamp = clamp;
    var Str;
    (function (Str) {
        function capitalize(s) {
            return s.length ? s[0].toUpperCase() + s.slice(1) : s;
        }
        Str.capitalize = capitalize;
    })(Str = Utils.Str || (Utils.Str = {}));
})(Utils || (exports.Utils = Utils = {}));
var v1 = Utils.clamp(5, 0, 10); // 5
var v2 = Utils.Str.capitalize('typescript');
console.log(v1, v2);
