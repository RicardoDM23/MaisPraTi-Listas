/*
* Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. 
* Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR.
* O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();
let valor;

do{
    valor = Number(prompt('Informe um número inteiro: ')); 
    if((valor <= 0) || (isNaN(valor))){

    } else if((valor%2 === 0)){
        console.log(`Número ${valor} é PAR!`);
    } else if ((valor%2 !== 0)){
        console.log(`Número ${valor} é IMPAR!`);
    }
} while ((valor >= 1) )

// switch(true){
//     case ((valor <= 0) || (isNaN(valor))) :
//         break; 
//     case (valor%2 === 0):
//         console.log(`Número ${valor} é PAR!`);
//         break;
//     case (valor%2 !== 0):
//         console.log(`Número ${valor} é IMPAR!`);
//         break;
//}