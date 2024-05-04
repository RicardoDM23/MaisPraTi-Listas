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

let listaPH = [
    {pessoa:'Joao', horas: 3},
    {pessoa:'Ana', horas: 13},
    {pessoa:'Pedro' , horas: 19},
    {pessoa:'Maria', horas: 22},
    {pessoa:'Paulo', horas: 9},
    {pessoa:'Jose', horas: 30},
]

for (let pessoa of listaPH){
    let pontos
    let valor
    if (pessoa.horas < 10){
        pontos = pessoa.horas * 2
    }else if (pessoa.horas >= 10 && pessoa.horas < 20){
        pontos = pessoa.horas * 5
    }else if (pessoa.horas >= 20){
        pontos = pessoa.horas * 10
    }
    valor = pontos * 0.05
    console.log(pessoa.pessoa + ' -> Pontos: ' + pontos + ' / Valor recebido: R$ ' + valor.toFixed(2))
}