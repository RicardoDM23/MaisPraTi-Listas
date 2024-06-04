/*
    42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
    strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
    propriedades que são arrays.
*/

// Ricardo D. Muenchen 21/05/2024

const dados = {
    numero1: 123,
    numero2: 321,
    numero3: 213,
    nome1: 'Joao',
    local: 'ABC',
    letras: 'qwert',
    vetor: [1,2,3,4,5],
    array: ['a','b','c','d','e']
}
let apenasArrays    = {}

for(let info in dados){
    if(Array.isArray(dados[info])){
        apenasArrays[info] = dados[info]
    }
}

console.log(apenasArrays)