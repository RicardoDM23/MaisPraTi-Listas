/*
    16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
    (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

// Ricardo D. Muenchen 07/05/2024

let vetor       = []
let ordenado    = []

for (let i = 0; i<20; i++){
    let rand    = Math.floor(Math.random() * 100)
    vetor.push(rand)
}

console.log('Valores gerados: '+vetor)

for (let i = 0; i<= vetor.length; i++){
    for (let j = 0; j< vetor.length - 1; j++){
        let aux = null
        if (vetor[j] > vetor[j+1]){
            aux         = vetor[j]
            vetor[j]    = vetor[j+1]
            vetor[j+1]  = aux
        }
    }
}

console.log('Valores Ordenado: '+vetor)
