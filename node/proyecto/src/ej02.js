
import {PI, sumar, multiplicar,divicion,resta} from './modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
let multiplication =multiplicar(numero1,numero2);
let resta12 =resta(numero1,numero2);
let divicion12 =divicion(numero1,numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
console.log(`restar(${numero1}, ${numero2}) = ${resta12}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${multiplication}`);
console.log(`dividir(${numero1}, ${numero2}) = ${divicion12}`);
console.log(`La constante PI vale '${PI}'`);



