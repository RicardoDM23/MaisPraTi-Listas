/*
    37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
    o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
    aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
    e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

// Ricardo D. Muenchen 18/05/2024

const prompt    = require('prompt-sync')()
let G           = []

for(let i = 1; i<=20; i++){
    let resp    = prompt(`Informe o gabarito da questão ${i}: `)
    G.push(resp)
}

let numAlunos   = parseInt(prompt('Infome o numero de alunos (1 a 50): '))
if(numAlunos < 1){
    numAlunos   = 1
}else if(numAlunos > 50){
    numAlunos   = 50
}else{
    numAlunos   = 2
}
let resultado   = []

for(let i = 1; i<= numAlunos; i++){
    let acertos = 0
    let sit     = ''
    for (let j = 0; j<=G.length-1; j++){
        let resposta    = prompt(`Aluno ${i} / Questão ${j+1}: `)
        if (resposta.toLowerCase() == G[j].toLowerCase()){
            acertos++
        }
    }
    if(acertos>=12){
        sit = 'APROVADO'
    } else {
        sit = 'REPROVADO'
    }
    let obj = {
        numAl: i,
        acert: acertos,
        situacao: sit
    }
    resultado.push(obj)
    console.log('\n\n')
}

for(let i = 0; i<= numAlunos -1; i++){
    console.log(`Aluno: ${resultado[i].numAl}`)
    console.log(`Quantidade de Acetos: ${resultado[i].acert}`)
    console.log(`Situação: ${resultado[i].situacao}`)
}