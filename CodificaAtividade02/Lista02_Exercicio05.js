/*
    5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

//  Ricardo D. Muenchen 04/05/2024

const prompt = require('prompt-sync')();
let keep = true
while(keep){
    let machine = Math.floor(Math.random() * 3)
    let cont    = 0
    let verify  = true
    console.log('Pedra = 1 / Papel = 2 / Tesoura = 3')
    let player  = parseInt(prompt('Informe o numero da jogada escolhida: '))
    if ((player == 1 && machine == 3) || (player == 2 && machine == 1) || (player == 3 && machine == 2)){
        console.log(player + ' vs ' + machine)
        console.log('Você ganhou!')
    } else if ( (player == 1 && machine == 2) || (player == 2 && machine == 3)  || (player == 3 && machine == 1)){
        console.log(player + ' vs ' + machine)
        console.log('Que pena, você perdeu.')
    } else{
        // jogador == 1 && maquina == 1
        // jogador == 2 && maquina == 2
        // jogador == 3 && maquina == 3
        console.log(player + ' vs ' + machine)
        console.log('Empate!')
    }
   
    while(verify){
        let pCont   = prompt('Deseja continuar (usar: (s/n) ou (S/N))? ')
        if(pCont.toLowerCase() === 's'){
            verify  = false
        } else if (pCont.toLowerCase() === 'n'){
            keep    = false
            verify  = false
        } else {
            cont++
            if (cont >= 3){
                keep = false
                verify = false
                console.log('Até a prox.')
            }
        }
    }
    
}
