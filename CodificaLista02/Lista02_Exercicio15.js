/*
    15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados.
*/

// Ricardo D. Muenchen 07/05/2024

const prompt    = require('prompt-sync')()
let vetor       = []

for (let i = 1 ; i <= 10; i++){
    let num = parseInt(prompt('Informe o '+i+'º número inteiro: '))
    if (isNaN(num)){
        console.log(`Informação não é um numero: ${num}`)
        i--
    } else {
        vetor.push(num)
    }
}

for(let v = 0; v<=vetor.length; v++){
    if(vetor[v]%2 == 0){
        console.log(`${vetor[v]} é um valor par e esta na posição ${v} do vetor.`)
    }else{
        console.log(`${vetor[v]} é um valor impar e esta na posição ${v} do vetor.`)
    }
}