/*
* Escreva um algoritmo para ler o número de eleitores de um município, 
* o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
* que cada um representa em relação ao total de eleitores.
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

console.log("Algoritmo para ler o número de eleitores de um município,");
console.log("o número de votos brancos, nulos e válidos") ;
console.log("e retornar o % cada um em relação ao total de eleitores.");

let eleitores = parseInt(prompt('1 - Qual o número de eleitores do município: '));
let brancos = parseInt(prompt('2 - Número de votos brancos: '));
let nulos = parseInt(prompt('3 - Número de votos nulos: '));
let validos = parseInt(prompt('4 - Número de votos válidos: '));

totalBNV = brancos + nulos + validos;

if(totalBNV > eleitores) {
    console.log(`A soma dos votos (${totalBNV}) é maior que total de eleitores informado (${eleitores})`);
} else {
    console.log('Resultado 2: ',(brancos*100)/eleitores,'% de votos bancos');
    console.log('Resultado 3: ',(nulos*100)/eleitores,'% de votos nulos');
    console.log('Resultado 4: ',(validos*100)/eleitores,'% de votos válidos');
}