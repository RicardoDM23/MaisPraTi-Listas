/*
    23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
    diagonal principal são iguais a 1 e os demais são nulos.
*/

// Ricardo D. Muenchen 09/05/2024

let matriz  = []

for(let i = 0 ; i <= 6; i++){
    matriz[i]   = []
    for (let j = 0; j <= 6; j++){
        if(i==j){
            matriz[i][j] = 1
        }else{
            matriz[i][j] = 0
        }
    }
}

console.log(matriz)