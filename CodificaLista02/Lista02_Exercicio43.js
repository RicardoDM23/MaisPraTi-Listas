/*
    43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
    sobre as do obj1 em caso de conflitos.
*/

// Ricardo D. Muenchen 21/05/2024

function combinar(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

obj1 = {
    nome: 'pedro',
    idade: 30,
    valor: 123,
    local: 'rua principal'
}

obj2 = {
    nome: 'jose',
    quantidade: 321,
    numeroEndereco: 21,
    valor: 213
}

objCombinado = combinar(obj1, obj2)
console.log('Objeto 1:')
console.log(obj1)
console.log('\nObjeto 2: ')
console.log(obj2)
console.log('\nObjeto combinado: ')
console.log(objCombinado)