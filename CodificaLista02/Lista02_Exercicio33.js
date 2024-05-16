/*
    33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
    elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

//  Ricardo D. Muenchen 13/05/2024

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const m = Array.from({ length: 3 }, () => 
    Array.from({ length: 3 }, () => rand(1, 10))
)
let media = 0
let cont = 0

console.log('Matriz Original')
for(let i = 0; i < m.length; i++){
    console.log(m[i])
}

for(let i = 0; i < m.length; i++){ 
    for(let j = 0; j < m[i].length; j++){
        if((i==0 && j==2) || (i==1 && j==1) || (i==2 && j==0)){
            media += m[i][j]
            cont++
        }
    }
}

console.log('Valor da Média dos elementos da diagonal secundária: '+(media/cont).toFixed(2) )
for(let i = 0; i < m.length; i++){ 
    for(let j = 0; j < m[i].length; j++){
        if(i==j){
            m[i][j] = (m[i][j]*(media/cont)).toFixed(2)
        }
    }
}
console.log('Matriz Modificada')
for(let i = 0; i < m.length; i++){
    console.log(m[i])
}
// console.log(matriz[0][2])
// console.log(matriz[1][1])
// console.log(matriz[2][0])