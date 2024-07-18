/*
* Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

let valor = parseInt(prompt('1 - Informe um valor: '));

for(let i = 1; i <= 10; i++){
    console.log(`valor: ${valor} contador: ${i}`);
}