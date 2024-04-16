/*
* Utilizar somente while
* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
* a média aritmética desses números.
* Ricardo D. Muenchen 16/04/24
*/
const prompt = require('prompt-sync')();
let num;
let cont = -1;
let total = 0;

do{
    num = Number(prompt('Informe um número: ')); 
    cont++;
    total += num;
} while ((num !== 0) )

console.log('Média:', total/cont);