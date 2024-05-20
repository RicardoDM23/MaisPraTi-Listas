/*
    40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
    resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
    cada), representando as apostas feitas. Compare os números das apostas com o
    resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
    corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
    e quadras, apenas por quinas.)
*/

// Ricardo D. Muenchen 18/05/2024

function valorAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const prompt = require('prompt-sync')()
let resultadoLoto = []

for(let i = 1; i<= 5; i++){
    let valor = valorAleatorio(1, 10)
    if(resultadoLoto.includes(valor)){
        i--
    }else{
        resultadoLoto.push(valor)
    }
}

resultadoLoto.sort((a, b) => a - b)
console.log(resultadoLoto)
let numJogos = parseInt(prompt('Informe a quantidade de jogadores(1 a 50): '))
if((isNaN(numJogos))||(numJogos<1)){
    numJogos=1
} else if (numJogos>50){
    numJogos=50
}

let jogos = []

for(let i = 1; i<=numJogos;i++){
    let aposta = []
    let result = 0
    let cont=0
    for(let j = 1; j<=5; j++){
        let valor = parseInt(prompt(`Jogo Numero:${i} Informe o ${j}º valor: `))
        if(aposta.includes(valor)){
            console.log('Valor ja informado')
            j--
        } else {
            aposta.push(valor)
        }   
    }
    aposta.sort((a, b) => a - b)
    for(let k = 0; k<=resultadoLoto.length-1;k++){
        if(resultadoLoto[k] == aposta[k]){
            cont++
        }
    }
    if(cont==5){
        result=1
    }
    
    let jogo = {
        numJogador: i,
        numAposta: aposta,
        acertos: cont,
        situacao: result
    }

    jogos.push(jogo)
}
let existeGanhador = false
for(let i = 0; i<=jogos.length-1;i++){
    if(jogos[i].situacao==1){
        console.log(`Parabens! O jogador ${jogos[i].numJogador} é o Ganhador!`)
        console.log(`Valores: ${jogos[i].numAposta}`)
        existeGanhador = true
    }
}
if(existeGanhador == false){
    console.log('Infelizmente não existem ganhadores')
}
