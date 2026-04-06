import Calculator, { add, sub } from './lib/math';
import greet, {version as greeterVersion} from './lib/greeter';
import { Utils } from './namespace';

console.log('add', add(2, 3));
console.log('sub', sub(5, 2));

const calc = new Calculator;
console.log('calc.add', calc.add(10));
console.log('calc.value', calc.value());

console.log('greet', greet('typescript'));
console.log('greeterVersion', greeterVersion);

const v1 = Utils.clamp(5, 0, 10); // 5
console.log(v1);