/*
* Escreva um algoritmo para ler uma temperatura em graus Celsius, 
* calcular e escrever o mvalor correspondente em graus Fahrenheit.
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();
console.log("Algoritimo que le uma temperatura em graus Celsius.");
console.log("Informado pelo usuario e converte para Fahrenheit.")
console.log("Utilize '.' caso seja necessario, exemplo: '28.5'");
let tempCels = Number(prompt("1 - Informe a temperatura em graus Celsius: "));

if (isNaN(tempCels)){
    console.log("Não é um valor valido!")
} else {
    let tempFahr = (tempCels * 1.8 + 32)
    console.log(`A temperatura em Fahrenheit é ${tempFahr}`)
}

