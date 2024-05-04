/*
    2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
    h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
    multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

//  Ricardo D. Muenchen 03/05/2024

const prompt = require('prompt-sync')();

let velocidade = parseInt(prompt('1 - Qual é a valocidade do carro? '));
let velExtra = 0;

if (velocidade > 80){
    velExtra = velocidade - 80
    console.log('Usuário multado! Valor da multa: R$ '+(velExtra*5)+',00');
} else {
    console.log('Usuário não foi multado! Parabéns.')
}