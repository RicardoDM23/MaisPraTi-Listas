/*
    17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.
*/

// Ricardo D. Muenchen 07/05/2024

const prompt    = require('prompt-sync')()
let vetNome     = []
let vetIdade    = []
for (let i = 0; i<=8; i++){
    let nome    = prompt('Informe o '+(i+1)+'º nome: ')
    let idade   = prompt('Informe a idade: ')
    vetNome.push(nome)
    vetIdade.push(idade)
}

console.log('Lista de pessoas menores de idade:')
for (let i = 0; i<=8; i++){
    if(vetIdade[i] < 18){
        console.log('Nome: '+vetNome[i]+'. Idade: '+vetIdade[i])
    }
}