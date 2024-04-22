/*
* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
* formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
* Isósceles, escaleno ou eqüilátero.
* Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
* Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
* Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
* Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

let ladoA = Number(prompt('1 - Informe o valor do lado A: '));
let ladoB = Number(prompt('2 - Informe o valor do lado B: '));
let ladoC = Number(prompt('3 - Informe o valor do lado C: '));

//regras
if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    if((ladoA == ladoB) && (ladoB == ladoC)){
        console.log('É possivel formar um Triângulo eqüilátero');    
    }else if((ladoA != ladoB) && (ladoB != ladoC)){
        console.log('É possivel formar um Triângulo escaleno');
    }else if(((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC))) {
        console.log('É possivel formar um Triângulo isósceles');
    }
}else{
    console.log('Não é possivel formar um triângulo com os valores informados!');
}