/*
    21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: 
    peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

// Ricardo D. Muenchen 09/05/2024

const prompt    = require('prompt-sync')()

let alt         = Number(prompt('Informe a altura (Usar . exp: 1.75): '))
let sexo        = prompt('Homen ou Mulher? (H/M) ')
let pesoIdeal   = null

if ((isNaN(alt)) || (alt <= 0)){
    console.log('Altura informada não é um numero valido!')
} else if ((sexo.toLowerCase() !== 'h') && (sexo.toLowerCase() !== 'm')){
    console.log('Sexo informado não encontrado.')
} else if (sexo.toLowerCase() === 'h'){
    pesoIdeal   = (72.7 * alt) - 58
} else if (sexo.toLowerCase() === 'm'){
    pesoIdeal   = (62.1 * alt) - 44.7
}

if (pesoIdeal !== null){
    console.log('Peso Ideal: ' + pesoIdeal)
}