/*
    8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    sistema funciona assim:
        - até 10 h de atividade no mês: ganha 2 pontos por hora
        - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
        - acima de 20 h de atividade no mês: ganha 10 pontos por hora
        - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
        Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
        Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

// Ricardo D. Muenchen 04/05/2024

const prompt    = require('prompt-sync')();

let hours   = parseInt(prompt('1 - Informe a número de horas: '))
let points  = 0

if (hours < 10){
    points  = hours * 2
}else if (hours >= 10 && hours < 20){
    points  = hours * 5
}else if (hours >= 20){
    points  = hours * 10
}
let val   = points * 0.05
console.log('Quantidade de pontos: '+points+' Valor total ganho: R$ ' + val.toFixed(2))