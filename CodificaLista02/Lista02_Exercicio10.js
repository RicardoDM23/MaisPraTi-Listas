/*
    10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
        a) O somatório entre todos os valores;
        b) Qual foi o menor valor digitado;
        c) A média entre todos os valores;
        d) Quantos valores são pares.
*/
const prompt = require('prompt-sync')();
let verifica = true;
let soma = 0
let menor = null
let media = 0
let pares = 0
let cont = 0

function continuar(){
    let a = prompt('Deseja continuar (s / n) ? ')
    if (a.toLowerCase() == 's' || a.toLowerCase() == 'sim'){
        return true
    } else {
        return false
    }
}

console.log('Use . para valores decimais. (ex: 10.5 ou 2004.52')
do{
    
    let valor = Number(prompt('Informe um valor: '))
    if (isNaN(valor)){
        console.log('Valor informado não é um número!')
        verifica = continuar()
    } else {
        soma += valor
        cont++
        media = soma/cont
        if(valor%2 == 0){
            pares += 1
        }
        if (valor <= menor || menor == null){
            menor = valor
        }
    }
    verifica = continuar()
}while(verifica)

console.log('a) Soma dos valores: ' + soma.toFixed(2))
console.log('b) Menor valor: ' + menor.toFixed(2))
console.log('c) Média: ' + media.toFixed(2))
console.log('d) Quantidade de pares: ' + pares)