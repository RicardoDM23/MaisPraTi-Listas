/*
    12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
        Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

// Ricardo D. Muenchen 06/05/2024

function fibonacci(){
    let primeiro = true
    let val = 1
    let ant = 0
    let vetor = []
    for (let i = 1; i<= 10; i++){
        if(primeiro){
            primeiro = false
            vetor.push(val)
        }else{
            let elemento = val + ant
            ant = val
            val = elemento
            vetor.push(elemento)
        }
        
    }
    return vetor
}

let resultado = fibonacci()

console.log(resultado)