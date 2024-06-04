/*
    27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final.
*/

// Ricardo D. Muenchen 10/05/2024

const prompt    = require('prompt-sync')()
let M   = new Array(6);
let V   = []

for (let i = 0; i < 6; i++) {
    M[i]    = new Array(6).fill(0);
}

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        let valor   = Number(prompt('Informe o valor da matriz['+(i+1)+']['+(j+1)+']: '))
        if(isNaN(valor)){
            console.log('Valor informado não é um numero!')
            break
        }else{
            M[i][j] = valor
        }  
    }
}

let valorA = Number(prompt('Informe o valor A: '))

if(isNaN(valorA)){
    console.log('Valor A informado não é um numero!')
} else {
    for(let i = 0; i < M.length; i++){
        for (let j = 0; j < M[i].length; j++){
            let valorM  = M[i][j] * valorA
            V.push(valorM)
        }
    }
}
//console.log(M)
//console.log(ValorA)
console.log('Vetor V: ['+V+']')