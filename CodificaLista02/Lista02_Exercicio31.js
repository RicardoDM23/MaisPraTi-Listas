/*
    31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
    Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    todos os elementos de V diferentes de A. Mostre os resultados.
*/

//  Ricardo D. Muenchen 13/05/2024

const prompt = require('prompt-sync')()

function rand(min, max) {
    return Math.floor(Math.random() * max) //(max - min) + min
}

const V = Array.from({ length: 30 }, () => 
    Array.from({ length: 30 }, () => rand(1, 10))
)

let A = parseInt(prompt('Informe um valor A de 0 a 9: '))

let vetorValores = []

if(isNaN(A)){
    console.log('A não é um numero!')
}else{
    for(let i = 0; i < V.length; i++){
        for(let j = 0; j < V[i].length; j++){
            if(V[i][j] !== A){
                vetorValores.push(V[i][j])
            }
        }
    }
    let M = []
    let contTotal = vetorValores.length
    let cont = 1
    for(let i = 0; i < 30; i++){
        M[i] = []
        for(let j = 0; j < 30; j++){
            if(cont <= contTotal){
                M[i][j] = vetorValores[cont]
                cont++
            }
        }
    }
    console.log('Matriz criada:')
    for(let i = 0; i < M.length; i++){
        console.log(M[i])
    }
}

