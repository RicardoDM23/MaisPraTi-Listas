/*
    34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
    cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
    multiplicações.
*/

//Ricardo D. Muenchen 16/05/2024

function multiplica(mat){
    for(let i = 0; i<mat.length; i++){
        let valor       = mat[i][i]
        for(let j = 0; j<mat[i].length; j++){
            mat[i][j]   = mat[i][j] * valor
        }
    }
    return mat
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const m = Array.from({ length: 50 }, () => 
    Array.from({ length: 50 }, () => rand(1, 10))
)

console.log('\nOriginal')
for(let i = 0; i < m.length; i++){
    console.log(`${m[i]}`)
}

let mMult   = multiplica(m)
console.log('\n\nMultiplicada')
for(let i = 0; i < mMult.length; i++){
    console.log(`${mMult[i]}`)
}