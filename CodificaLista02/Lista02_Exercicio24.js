/*
    24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.
*/

// Ricardo D. Muenchen 09/05/2024

// m 6x8?

let M = [
    [1, -2, 3, -4, 5, 6, -7, 8],
    [-1, 2, -3, 4, 5, -6, 7, 8],
    [1, 2, 3, -4, -5, 6, 7, 8],
    [1, -2, -3, 4, 5, 6, 7, 8],
    [-1, 2, 3, 4, -5, 6, 7, -8],
    [-1, -2, -3, -4, -5, -6, -7, -8]
];
let C = Array(M.length).fill(0) // inicia C com 0 na quantidade de m.length = [0,0,0,0,0,0]

for (let i = 0; i < M.length; i++) {
    // Contando a quantidade de elementos negativos na linha atual
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) {
            C[i]++;
        }
    }
}

console.log(C)