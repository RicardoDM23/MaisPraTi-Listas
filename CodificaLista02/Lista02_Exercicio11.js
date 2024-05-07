/*
    11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.

    Primeiro termo (a₁): O valor do primeiro termo da progressão.
    Razão (r): A diferença constante entre os termos consecutivos da progressão.
    Número do termo desejado (n): O número do termo que você deseja encontrar na sequência.

    an=a1+(n−1)⋅r
*/

// Ricardo D. Muenchen 06/05/2024

const prompt = require('prompt-sync')()

let a = Number(prompt('Informe o Prímeiro termo: '))
let r = Number(prompt('Informe a Razão: '))
//let n = 10
let valores = []
let soma = 0
let verifica = true

if(isNaN(a)){
    console.log('Prímeiro termo informado não é um número!')
    verifica = false
}else if (isNaN(r)){
    console.log('Razão informada não é um número!')
    verifica = false
}

if (verifica){
    for (let i = 1; i <= 10; i++){
        resultado = a+(i-1)*r
        valores.push(resultado)
        soma = 10/a*(a + (a+(10-1)*r)) // ou soma += resultado
    }
    
    console.log('Elementos da PA: ' + valores)
    console.log('Resultado da soma dos elementos: ' + soma)
}
