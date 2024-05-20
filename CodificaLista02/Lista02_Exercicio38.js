/*
    38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
    variável identificadora que calcule a operação conforme a informação contida nesta
    variável:
    1- soma dos elementos;
    2- produto dos elementos;
    3- média dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.
*/

// Ricardo D. Muenchen 18/05/2024

const prompt = require('prompt-sync')()
let vetor = []
let cont = 0

for(let i = 1; i<=6; i++){
    let valor = parseInt(prompt(`Informe o ${i}º valor do vetor: `))
    if(isNaN(valor)){
        console.log('Valor informado não é um numero')
        i--
        cont++
    } else {
        vetor.push(valor)
    }
    if (cont == 3){
        break
    }
}

if (cont != 3){
    console.log('Operações: \n'+
        '   1- soma dos elementos\n'+
        '   2- produto dos elementos\n'+
        '   3- média dos elementos\n'+
        '   4- ordene os elementos em ordem crescente\n'+
        '   5- mostre o vetor')

    let ope = parseInt(prompt('Informe a operação: '))
    let result = 0
    let valor = 0
    
    if(ope==1){
        for(let i = 0; i<= vetor.length -1; i++){
            valor += vetor[i]
        }
        result = valor
        console.log(`A soma dos elementos do vetor é: ${result}`)
    }else if(ope==2){
        for(let i = 0; i<= vetor.length -1; i++){
            if (i == 0){
                valor = vetor[i]
            } else {
                valor *= vetor[i]
            }
        }
        result = valor
        console.log(`O produto dos elementos do vetor é: ${result}`)
    }else if(ope==3){
        for(let i = 0; i<= vetor.length -1; i++){
            valor += vetor[i]
        }
        result = valor/(vetor.length)
        console.log(`A media dos elementos do vetor é: ${result}`)
    }else if(ope==4){
        console.log(`Vetor informado: ${vetor}`)
        vetor.sort((a, b) => a - b)
        console.log(`Vetor ordenado: ${vetor}`)
    }else if(ope==5){
        console.log(`Vetor informado: ${vetor}`)
    }else {
        console.log('Operação não encontrada!')
    }
}


