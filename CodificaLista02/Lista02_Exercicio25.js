/*
    25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    de cada coluna separadamente.
*/

// Ricardo D. Muenchen 09/05/2024

const prompt = require('prompt-sync')()
let matriz = Array()
let matrizInvertida = []
function inverterMatriz(m) {
    const mi = [];
    for (let i = 0; i < m[0].length; i++) {
        mi[i] = [];
        for (let j = 0; j < m.length; j++) {
            mi[i][j] = m[j][i];
        }
    }
    return mi;
}

for (let i = 0; i < 3; i++){
    matriz[i] = Array()
    for (let j = 0; j < 5; j ++){
       let valor =  Number(prompt('Informe o numero da linha '+(i+1)+' e da coluna '+(j+1)+ ': '))
       if ((isNaN(valor)) || valor == null){
        valor = 0
       }
       matriz[i].push(valor)
    }
}

matrizInvertida = inverterMatriz(matriz)

//console.log('Original:\n'+matriz)
//console.log('Invertida:\n'+matrizInvertida)

for (let i = 0; i < matrizInvertida.length - 1; i++){
    let soma = 0;
    for (let j = 0; j < matrizInvertida[i].length; j ++){
        soma += matrizInvertida[i][j]
    }
    console.log('Soma da coluna '+(i+1)+'ª: '+ soma)
}