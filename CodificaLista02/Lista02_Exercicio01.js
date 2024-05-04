/*
    1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.
*/

//  Ricardo D. Muenchen 03/05/2024

const prompt = require('prompt-sync')();
let qtdDias = parseInt(prompt('1 - Qual é a quantidade de cigarros fumados por dia? '));
let anos = parseInt(prompt('2 - Fuma a quantos anos? '));

let total = (((qtdDias*10)*(anos*365))/60)/24

console.log(`A quantidade de dias perdidos é de: ${total.toFixed(2)}`)