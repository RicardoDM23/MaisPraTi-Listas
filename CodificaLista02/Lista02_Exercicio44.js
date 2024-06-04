/*
    44. Escreva uma função que conte quantas propriedades do tipo string existem em um
    objeto e retorne esse número.
*/

// Ricardo D. Muenchen 21/05/2024

const objeto    = {
    nome: 'Ricardo',
    valor: 123,
    endereco: 'M do Sol',
    estado: 'RS',
    numero: 21,
    testeNum: [1,2,3,4,5],
    testeSt: ['a','b','c']
}

let cont    = 0
for(let obj in objeto){
    if(typeof objeto[obj] === 'string'){
        cont++
    }
}

console.log('Quantidade de propriedades que são Strings: '+cont)