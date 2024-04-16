/*
* Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
* calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, 
* somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
* Ricardo D. Muenchen 16/04/24
*/

const prompt = require('prompt-sync')();

let nota1 = Number(prompt('1 - Informe a primeira nota(0.0 a 10.0): '));
let nota2 = Number(prompt('2 - Informe a segunda nota(0.0 a 10.0): '));
let media;

//if((isNaN(nota1))||(isNaN(nota2))){
if(isNaN(nota1)){
    console.log('Nota 1 não é um número.');
}else if(isNaN(nota2)){
    console.log('Nota 2 não é um número.');
}else if(nota1 > 10){
    console.log('Nota 1 valor informado acima do limite.');
}else if(nota2 > 10){
    console.log('Nota 2 valor informado acima do limite.');
}else{
    media = ((nota1+ nota2) / 2);
    if(media >= 6.0){
        console.log('PARABÉNS! Você foi aprovado');
    }
}