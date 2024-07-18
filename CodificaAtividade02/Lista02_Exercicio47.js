/*
    47. Crie uma função que transforme um objeto de entrada aplicando uma função
    fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
    resultados.
*/

// Ricardo D. Muenchen 28/05/2024

function transforma(objeto){
    const resultado = {}
    Object.keys(objeto).forEach(chave => { resultado[chave] = funcaoMod(obj[chave])})

    return resultado
}

function funcaoMod(x){

    if(isNaN(x)){
        x   += ' FunçãoMod'
    } else {
        x   += 1000
    }
    return x
}

const obj   = {
    nome: 'Ricardo',
    idade: 32,
    end: 'asdasdasd',
    info1: 1242,
    info2: '23asde'
}

let obj2    = transforma(obj)

console.log(obj)
console.log(obj2)