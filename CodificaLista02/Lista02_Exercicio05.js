/*
    5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

//  Ricardo D. Muenchen 04/05/2024

const prompt = require('prompt-sync')();
let continuar = true
while(continuar){
    let maquina = Math.floor(Math.random() * 3)
    let cont = 0
    let verifica = true
    console.log('Pedra = 1 / Papel = 2 / Tesoura = 3')
    let jogador = parseInt(prompt('Informe o numero da jogada escolhida: '))
    if ((jogador == 1 && maquina == 3) || (jogador == 2 && maquina == 1) || (jogador == 3 && maquina == 2)){
        console.log(jogador + ' vs ' + maquina)
        console.log('Você ganhou!')
    } else if ( (jogador == 1 && maquina == 2) || (jogador == 2 && maquina == 3)  || (jogador == 3 && maquina == 1)){
        console.log(jogador + ' vs ' + maquina)
        console.log('Que pena, você perdeu.')
    } else{
        // jogador == 1 && maquina == 1
        // jogador == 2 && maquina == 2
        // jogador == 3 && maquina == 3
        console.log(jogador + ' vs ' + maquina)
        console.log('Empate!')
    }
   
    while(verifica){
        let pCont = prompt('Deseja continuar (usar: (s/n) ou (S/N))? ')
        if(pCont.toLowerCase() === 's'){
            verifica = false
        } else if (pCont.toLowerCase() === 'n'){
            continuar = false
            verifica = false
        } else {
            cont++
            if (cont >= 3){
                continuar = false
                verifica = false
                console.log('Até a prox.')
            }
        }
    }
    
}
