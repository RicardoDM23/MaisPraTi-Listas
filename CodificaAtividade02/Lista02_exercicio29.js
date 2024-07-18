/*
    29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
        a) da linha 4 de M;
        b) da coluna 2 de M;
        c) da diagonal principal;
        d) todos os elementos da matriz M.
        Escrever essas somas e a matriz.
*/

// Ricardo D. Muenchen 10/05/2024

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
const M = Array.from({ length: 5 }, () => 
    Array.from({ length: 5 }, () => rand(1, 10))
)

let a   = 0
let b   = 0
let c   = 0
let d   = 0

for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        if(i == 4){
            a   += M[i][j]
        }
        if(j == 2){
            b   += M[i][j]
        }
        if (i == j){
            c   += M[i][j]
        }
        d += M[i][j]
    }
}

console.log('Matriz M: ')
for(let i=0;i<M.length;i++){
    console.log(M[i])
}
console.log('a) Soma da linha 4 de M: '+a)
console.log('b) Soma da coluna 2 de M: '+b)
console.log('c) Soma da diagonal principal: '+c)
console.log('d) Soma de todos os elementos da matriz M: '+d)

