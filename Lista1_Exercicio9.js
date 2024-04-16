/*
* Escreva um algoritmo que leia o código de origem de um produto e imprima a região
* do mesmo, conforme a tabela abaixo:
* 1 - sul * 2 - norte * 3 - leste * 4 - oeste * 5 ou 6 - nordeste
* 7, 8 ou 9 - sudeste * 10 até 20 - centro-oeste * 25 até 50 - nordeste
* outros - Produto importado
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

let cod = parseInt(prompt('1 - Informe o código de origem do produto: '));

switch(true){
    case (cod == 1):
        console.log('Região Sul');
        break;
    case (cod == 2):
        console.log('Região Norte');
        break;
    case (cod == 3):
        console.log('Região Leste');
        break;
    case (cod == 4):
        console.log('Região Oeste');
        break;
    case (cod == 5 || cod == 6):
        console.log('Região Nordeste');
        break;
    case (cod == 7 || cod == 8 || cod == 9):
        console.log('Região Sudeste');
        break;
    case (cod >= 10 && cod <= 20):
        console.log('Região Centro-Oeste');
        break;
    case (cod >= 25 && cod <= 50):
        console.log('Região Nordeste');
        break;
    default:
        console.log('Produto Importado');
        break;
}
