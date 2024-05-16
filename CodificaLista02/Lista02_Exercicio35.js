/*
    35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
    conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
    vetor pode ser preenchido quantas vezes forem necessárias.
*/

//Ricardo D. Muenchen 16/05/2024

const prompt = require('prompt-sync')()
let vetPar = []
let vetImpar = []
let cont = 0
for(let i = 1; i <= 30; i++){
    let valor = parseInt(prompt('Informe o '+i+'º valor: '))
    if(isNaN(valor)){
        console.log('Valor informado não é um numero!')
        cont++
        i--
    } else {
        if(valor%2 == 0){
            vetPar.push(valor)
            if(vetPar.length == 5){
                console.log(`Vetor Par Atual: ${vetPar}`)
                vetPar = []
            }
        } else {
            vetImpar.push(valor)
            if(vetImpar.length == 5){
                console.log(`Vetor Impar Atual: ${vetImpar}`)
                vetImpar = []
            }
        }
    }
    if (cont >= 3){
        break
    }
}
if (cont !== 3){
    console.log('\n\n')
    console.log(`Vetor Par Final: ${vetPar}`)
    console.log(`Vetor Impar Final: ${vetImpar}`)
}
