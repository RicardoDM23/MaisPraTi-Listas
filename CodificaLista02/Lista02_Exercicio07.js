/*
    7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:
        Carros populares
        - Até 100 Km percorridos: R$ 0,20 por Km
        - Acima de 100 Km percorridos: R$ 0,10 por Km
        Carros de luxo
        - Até 200 Km percorridos: R$ 0,30 por Km
        - Acima de 200 Km percorridos: R$ 0,25 por Km
*/

// Ricardo D. Muenchen 04/05/2024

const prompt = require('prompt-sync')();

let tipoCarro = prompt('1 - Qual tipo de carro(usar para popular: p/P/1 e para luxo: l/L/2): ')
let dias = parseInt(prompt('2 - Quantos dias de aluguem? '))
let km = Number(prompt('3 - KM percorridos (usar . se necessário): '))

let valorKm = 0
let valorAluguel = 0
let valorTotal = 0
if ((tipoCarro.toLowerCase() === 'p') || (tipoCarro.toLowerCase() === '1')){
    if(km <= 100){
        valorKm = km * 0.2  
    }else{
        valorKm = km * 0.1
    }
    valorAluguel = dias * 90.00
} else if ((tipoCarro.toLowerCase() === 'l') || (tipoCarro.toLowerCase() === '2')){
    if(km <= 200){
        valorKm = km * 0.3
    }else{
        valorKm = km * 0.25
    }
    valorAluguel = dias * 150.00
} else {
    console.log('Tipo de carro não encontrado, tente novamente!')
    valorTotal = null
}

if (valorTotal != null){
    valorTotal = Number(valorKm.toFixed(2)) + Number(valorAluguel.toFixed(2))
    console.log('Valor de aluguel: R$ ' + Number(valorAluguel.toFixed(2)))
    console.log('Valor km: R$ ' + Number(valorKm.toFixed(2)))
    console.log('Valor total a ser pago: R$ '+ valorTotal)
}
