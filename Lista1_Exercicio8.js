/*
* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
* e escreve-los em ordem crescente.
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

console.log('Informe dois valores diferentes.');
let valor1 = Number(prompt('1 - Informe o primeiro valor: '));
let valor2 = Number(prompt('2 - Informe o segundo valor: '));

if (isNaN(valor1) || isNaN(valor2)){
    console.log('Valor informado não é um número!');
} else if (valor1 < valor2){
    console.log(`(${valor1}), (${valor2})`);
} else if (valor2 < valor1){
    console.log(`(${valor2}), (${valor1})`);
} else {
   console.log('Os valores informados são iguais'); 
}