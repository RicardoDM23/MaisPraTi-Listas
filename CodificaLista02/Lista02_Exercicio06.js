/*
    6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.
*/

//  Ricardo D. Muenchen 04/05/2024

const prompt = require('prompt-sync')();

let tentativa = [];
let valorSorteado = Math.floor((Math.random() * 5) + 1)
let primeira = true
let continuar = true

while(continuar){
    if (primeira == false){
        console.log('Valores tentados: '+ tentativa)
    }
    let valorTentativa = parseInt(prompt('1 - Qual foi o valor sorteado? '))
    if(valorSorteado == valorTentativa){
        console.log('Parabéns! Você acertou o número.')
        continuar = false
    } else {
        console.log('Número incorreto!')
        primeira = false
        tentativa.push(valorTentativa)
    }
}
