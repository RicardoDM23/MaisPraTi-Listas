/*
    9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
    mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
    perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
    funcionário.
*/

// Ricardo D. Muenchen 06/05/2024

const prompt    = require('prompt-sync')();
let salarioFM   = []
let salarioFF   = []
let seguir      = true


function continuar(){
    let verifica    = prompt('Deseja continuar (s / n) ? ')
    if (verifica.toLowerCase() == 's'){
        return true
    } else {
        return false
    }
}

function somar(vetor){
    let soma    = 0;
    for (let i = 0; i < vetor.length; i++){
        soma    += vetor[i];
    }
    return soma;
}

while(seguir){
    let salario = Number(prompt('Informe o salario do funcionario: '))
    let sexo    = prompt('Informe o sexo do funcinario usando "f" para feminino e "m" para masculino: ')
    if ((sexo.toLowerCase() != 'm') && (sexo.toLowerCase() != 'f')){
        console.log('Sexo informado incorreto.')
    } else if (sexo.toLowerCase() == 'm'){
        salarioFM.push(salario)
    } else if (sexo.toLowerCase() == 'f'){
        salarioFF.push(salario)
    }
    seguir = continuar()
}

let totalSFM    = somar(salarioFM)
let totalSFF    = somar(salarioFF)

console.log('Total de salário pago aos homens: ' + totalSFM.toFixed(2))
console.log('Total de salário pago às mulheres: '+ totalSFF.toFixed(2))