/*
    39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
    vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

// Ricardo D. Muenchen 18/05/2024

function valorAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let vetorA = []
let vetorB = []

for(let i = 1; i<= 100; i++){
    let valor = valorAleatorio(-10,10)
    vetorA.push(valor)
}

for(let i = 0; i<=vetorA.length-1;i++){
    if(vetorA[i]>0){
        vetorB.push(vetorA[i])
    }
}

console.log('Vetor gerado:\n'+vetorA)
console.log('Vetor apos ser compactado:\n'+vetorB)