/*
    32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
    cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
    matriz lida e a modificada.
*/

//  Ricardo D. Muenchen 16/05/2024

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const M = Array.from({ length: 12 }, () => 
    Array.from({ length: 13 }, () => rand(1, 10))
)
let Mmod    = []
for(let i = 0; i < M.length; i++){
    Mmod[i]     = []
    let maior   = 0
    for(let j = 0; j < M[i].length; j++){
        let valor   = Math.abs(M[i][j])
        if (valor>= maior){
            maior   = Math.abs(M[i][j])
        }

    }
    for(let j = 0; j < M[i].length; j++){
        Mmod[i][j]  = (M[i][j]/maior).toFixed(2)
        //Mmod[i][j] = (M[i][j])/maior
    }
}

console.log('Matriz lida:')
for(let i = 0; i < M.length; i++){
    console.log(M[i])
}
console.log('Matriz modificada:')
for(let i = 0; i < Mmod.length; i++){
    console.log(Mmod[i])
}