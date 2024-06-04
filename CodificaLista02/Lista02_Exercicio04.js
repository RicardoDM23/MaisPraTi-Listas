/*
    4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    comprimentos e diga se é possível formar um triângulo com essas retas.
    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    lado deve ser menor que a soma dos outros dois.
*/

//  Ricardo D. Muenchen 04/05/2024

const prompt    = require('prompt-sync')();

let a   = Number(prompt('1 - Informe o tamanho do primeiro segmento de reta: '));
let b   = Number(prompt('2 - Informe o tamanho do segundo segmento de reta: '));
let c   = Number(prompt('3 - Informe o tamanho do terceiro segmento de reta: '));

if ((a < b + c) && (b < a + c) && (c < a + b)){
    console.log("É possivel formar um triângulo com os segmentos!")
}  else {
    console.log("Os três segmentos de reta informados não formam um triângulo.")
}