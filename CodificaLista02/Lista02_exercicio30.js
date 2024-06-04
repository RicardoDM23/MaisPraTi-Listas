/*
    30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
    contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
    e os vetores criados.
*/

// Ricardo D. Muenchen 10/05/2024

const prompt    = require('prompt-sync')()

let M = new Array(5);
for (let i = 0; i < 5; i++) {
    M[i]    = new Array(5).fill(0);
}
let SL  = []
let SC  = []
//console.log(M)
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        let valor   = Number(prompt('Informe o valor da matriz['+(i+1)+']['+(j+1)+']: '))
        if(isNaN(valor)){
            console.log('Valor informado não é um numero!')
            break
        }else{
            M[i][j] = valor
        }  
    }
}
//console.log(M)
for(let i = 0; i < M.length; i++){
    let somaL   = 0
    for(let j = 0; j < M[i].length; j++){
        somaL   += M[i][j]
    }
    SL.push(somaL)
}
for(let j = 0; j < M[0].length; j++){
    let somaC   = 0
    for(let i = 0; i < M.length; i++){
        somaC   += M[i][j]
    }
    SC.push(somaC)
}
console.log('Matriz criada:')
for(let i = 0; i < M.length; i++){
    console.log(M[i])
}
console.log('Vetor soma linha: ['+SL+']')
console.log('Vetor soma coluna: ['+SC+']')