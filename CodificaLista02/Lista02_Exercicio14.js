/*
    14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    que eles foram informados.
*/

// Ricardo D. Muenchen 06/05/2024

const prompt = require('prompt-sync')()
let vetor = []

for (let i = 1; i <= 7; i++){
    let nome = prompt('Informe o '+i+'º nome: ')
    vetor.unshift(nome)
}

console.log('Lista de nomes informados:')
for (let i = 0; i < vetor.length; i++){
    console.log(vetor[i])
}
