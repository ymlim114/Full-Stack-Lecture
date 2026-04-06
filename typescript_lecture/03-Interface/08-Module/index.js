"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./lib/math");
var greeter_1 = require("./lib/greeter");
var namespace_1 = require("./namespace");
console.log('add', (0, math_1.add)(2, 3));
console.log('sub', (0, math_1.sub)(5, 2));
var calc = new math_1.default;
console.log('calc.add', calc.add(10));
console.log('calc.value', calc.value());
console.log('greet', (0, greeter_1.default)('typescript'));
console.log('greeterVersion', greeter_1.version);
var v1 = namespace_1.Utils.clamp(5, 0, 10); // 5
console.log(v1);
