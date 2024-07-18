/*
    28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
        a) a soma dos elementos acima da diagonal principal;
        b) a soma dos elementos abaixo da diagonal principal;
*/

// Ricardo D. Muenchen 10/05/2024

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const M = Array.from({ length: 10 }, () => 
    Array.from({ length: 10 }, () => rand(1, 10))
)
let a       = 0
let vetA    =[]
let b       = 0
let vetB    =[]

for(let i=0; i<M.length; i++){
    for(let j=0; j<M[i].length; j++){
        if((i == j)&&(i != 0)&&(i != M.length)){
            a   += M[i-1][j]
            vetA.push(M[i-1][j])
        }
        if((i == j)&&(i != M.length-1)){
            b   += M[i+1][j]
            vetB.push(M[i+1][j])
        }
    }
}

//console.log(vetA)
console.log('a) A soma dos elementos acima da diagonal principal: '+a)
//console.log(vetB)
console.log('b) A soma dos elementos abaixo da diagonal principal: '+b)
console.log('Matriz: ')
for(let i=0;i<M.length;i++){
    console.log(`${M[i]}`)
}
