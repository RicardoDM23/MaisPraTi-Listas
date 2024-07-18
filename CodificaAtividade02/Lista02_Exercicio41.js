/*
    41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
    idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
    nome e idade.
*/

// Ricardo D. Muenchen 20/05/2024

let pessoa  = {
    nome: 'Ricardo',
    idade: 32
}

console.log(`Idade: ${pessoa.idade}`)

console.log('Obejeto original:' )
console.log(pessoa)
pessoa.email    = 'pessoa@email.com'
console.log('Adicionado email:' )
console.log(pessoa)