/*
    3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.
*/

//  Ricardo D. Muenchen 03/05/2024

const prompt = require('prompt-sync')();
console.log('Em caso de valores "quebrados" usar . ')
let dist = Number(prompt('1 - Qual é a distância (KM) que quer percorrer? '))
let valor = 0;

if(dist <= 200){
    valor = dist * 0.5
} else {
    valor = dist * 0.45
}

console.log(`Valor total da viagem: R$ ${valor.toFixed(2)}`);