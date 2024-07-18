/*
    6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.
*/

//  Ricardo D. Muenchen 04/05/2024

const prompt    = require('prompt-sync')();
let attempt     = [];
let drawnValue  = Math.floor((Math.random() * 5) + 1)
let first       = true
let proceed     = true

while(proceed){
    if (first == false){
        console.log('Valores tentados: '+ attempt)
    }
    let attemptValue    = parseInt(prompt('1 - Qual foi o valor sorteado? '))
    if(drawnValue == attemptValue){
        console.log('Parabéns! Você acertou o número.')
        proceed = false
    } else {
        console.log('Número incorreto!')
        first   = false
        attempt.push(attemptValue)
    }
}
