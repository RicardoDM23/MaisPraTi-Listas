/*
* Utilizar somente while
* Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário 
* digite o número 0. Fazer a média ponderada desses números e pesos respectivos.
* (n1 + n2 + n3 + nN)/(p1 + p2 + p3 + pN)
* Ricardo D. Muenchen 16/04/24
*/


const prompt = require('prompt-sync')();
let num;
let peso;
let totalNum = 0;
let totalPeso = 0;

console.log('Média Ponderada');

//Sem if
// do{
//     num = parseInt(prompt('Informe um número: ')); 
//     peso = parseInt(prompt('Informe o peso: ')); 
//     while((num !== 0) && (peso !== 0)){
//         totalNum += num;
//         totalPeso += peso;
//         break;
//     }
// } while ((num !== 0) && (peso !==0) )

//com if
while ((num !== 0) && (peso !==0) ){
    num = parseInt(prompt('Informe um número: ')); 
    if(num === 0){
        break;
    }
    peso = parseInt(prompt('Informe o peso: ')); 
    if((num !== 0) && (peso !== 0)){
        totalNum += num;
        totalPeso += peso;
    }else{
        break;
    }
} 

console.log('Média Ponderada:', totalNum/totalPeso);