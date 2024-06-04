/*
    22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, 
    a média do número de filhos, o maior salário e o percentual de pessoas com 
    salário até R$ 350,00.

    retorne 
    a média de salário da população, 
    a média do número de filhos, 
    o maior salário 
    o percentual de pessoas com salário até R$ 350,00.
*/

// Ricardo D. Muenchen 09/05/2024

const prompt    = require('prompt-sync')()

function coletaDados(){
    let totalSalario    = 0
    let totalFilhos     = 0
    let totalPessoas    = 0
    let maiorSalario    = 0
    let cont350         = 0
    while(true){
        let salario     = Number(prompt("Informe o salário da pessoa (ou digite '0' para encerrar): "));
        if (salario === 0) {
            break;
        }
        let filhos = parseInt(prompt("Informe o número de filhos: "))
        totalPessoas++
        totalFilhos     += filhos
        totalSalario    += salario
        if(salario<=350){
            cont350++
        }
        if(salario > maiorSalario){
            maiorSalario    = salario
        }
    }

    let percent350      = (cont350*100)/totalPessoas
    let mediaSalario    = totalSalario/totalPessoas
    let mediaFilhos     = totalFilhos/totalPessoas
    return {
        medSalario: mediaSalario,
        medFilhos: mediaFilhos,
        perct350: percent350,
        mSalario: maiorSalario
    }
}

let valores = coletaDados()

console.log('Média de salário da população: '+valores.medSalario.toFixed(2))
console.log('Média do número de filhos: '+valores.medFilhos.toFixed(2))
console.log('Maior salário:  '+valores.mSalario.toFixed(2))
console.log('Percentual de pessoas com salário até R$ 350,00 :'+valores.perct350.toFixed(2))
