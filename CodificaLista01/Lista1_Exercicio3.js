/*
* Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
* ● Some 25 ao primeiro inteiro;
* ● Triplique o valor do segundo inteiro;
* ● Modifique o valor do terceiro inteiro para 12% do valor original;
* ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('1 - Informe o primeiro número inteiro: '));
let num2 = parseInt(prompt('2 - Informe o segundo número inteiro: '));
let num3 = parseInt(prompt('3 - Informe o terceiro número inteiro: '));
let num4 = parseInt(prompt('4 - Informe o quarto número inteiro: '));

num4 = (num1 + num2 + num3);
num1 += (25);
num2 = (num2 * 3);
num3 = (num3 * 0,12);

console.log('Operação 1: ', num1);
console.log('Operação 2: ', num2);
console.log('Operação 3: ', num3);
console.log('Operação 4: ', num4);