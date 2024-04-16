/*
* Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
* calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
* 1 x N = N
* 2 x N = 2N
* 3 x N = 3N
* Ricardo D. Muenchen 16/04/24
*/


const prompt = require('prompt-sync')();

for (let i = 1; i <= 5; i++){
    let n = parseInt(prompt(`Informe o ${i}º N: `));
    for (let j = 1; j <= n; j++){
        console.log(j, 'X', n,'=', n*j);
    }
}