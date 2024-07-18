/*
* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
* forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
* compradas, calcule e escreva o valor total da compra.
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

let qtd = parseInt(prompt('1 - Informe a quantidade de maças compradas: '));
console.log(qtd)
let total;

if (qtd<12){
    total = qtd * 0.30;
    console.log(`Valor total: R$ ${total}`);
} else if (qtd>=12){
    total = qtd * 0.25;
    console.log(`Valor total: R$ ${total}`);
}else{
    console.log(`Quantidade infirmada não é um número.`);
}