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

console.log('O algoritimo recebe números decimais.')
console.log('Até que o usuário digite 0 (zero).')
console.log('Então retorna a média aritmética.')

while (num !== 0){
    num = Number(prompt('Informe um número: ')); 
    cont++;
    total += num;
} 

console.log('Média aritmética:', total/cont);