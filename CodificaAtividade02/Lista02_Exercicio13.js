/*
    13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci.
*/

// Ricardo D. Muenchen 06/05/2024

function fibonacci(){
    let primeiro    = true
    let val     = 1
    let ant     = 0
    let vetor   = []
    for (let i = 1; i<= 15; i++){
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

let resultado   = fibonacci()

console.log(resultado)