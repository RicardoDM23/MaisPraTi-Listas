/*
    18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
    um funcionário e ao final escreva o conteúdo do registro.
*/

// Ricardo D. Muenchen 07/05/2024

const prompt    = require('prompt-sync')()

const funcionarios  = [
    {nome:'A', cargo:'Z', salario: 3000.20 },
    {nome:'S', cargo:'X', salario: 2900.00 },
    {nome:'D', cargo:'C', salario: 1500.00 },
    {nome:'F', cargo:'V', salario: 3100.00 },
    {nome:'G', cargo:'B', salario: 4000.00 },
]

let listaNomes  = []
for(let funcionario of funcionarios){
    listaNomes.push(funcionario.nome)
}

console.log('Funcionario: '+listaNomes)
let busca   = prompt('Informe o nome do funcionario: ')
for(let fun of funcionarios){
    if(fun.nome.toLowerCase() === busca.toLowerCase()){
        console.log(fun)
    }
}