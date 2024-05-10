/*
    26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    P[1..3,1..5].
    
*/

// Ricardo D. Muenchen 10/05/2024

function produtoMat(matA, matB){
    let matC = [
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    /*
        / Inicializa a matC com zeros
        const matC = new Array(linhasA);
        for (let i = 0; i < linhaA; i++) {
            matC[i] = new Array(colunaB).fill(0);
        }
    */
    const linhaA = matA.length //5
    const colunaA = matA[0].length //3
    const colunaB = matB[0].length //3
    
    for (let i = 0; i < linhaA; i++) {
        for (let j = 0; j < colunaB; j++) {
            for (let k = 0; k < colunaA; k++) {
                matC[i][j] += matA[i][k] * matB[k][j]
            }
        }
    }

    return matC
}

let A = [
    [1,2,3],
    [2,6,7],
    [7,3,8],
    [3,7,9],
    [8,2,5]
]

let B = [
    [5,3,7],
    [7,2,7],
    [3,4,6],
    [8,3,6],
    [9,3,5]
]

let C = produtoMat(A, B)
console.log(C)