/*
    36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
    um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
    do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
    número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
    o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
    mensagem "Parabéns, tu foi o GANHADOR".
*/

// Ricardo D. Muenchen 18/05/2024

const prompt    = require('prompt-sync')()
let vetGab      = []
for(let i = 1; i<=13; i++){
    let erro    = false
    let valor   = parseInt(prompt(`Informe o ${i}º valor do gabarito: `))
    for(let k = 0; k<=vetGab.length; k++){
        if(valor == vetGab[k]){
            erro    = true
        }
    }
    if(isNaN(valor)){
        console.log('Valor informado não é um numero!')
        i--
    }else if (erro == true){
        console.log('Valor ja informado no gabarito!')
        i--
    }else{
        vetGab.push(valor)
    }
}

let respostas   = []
let quantidade  = 0
let qtdParti    = parseInt(prompt('Quantidade de participantes(1 a 100): '))
if (qtdParti < 1){
    qtdParti    = 1
}else if (qtdParti >100){
    qtdParti    = 100
}

for(let i = 1; qtdParti <=2; i++){
    let cont        = 0
    let qtdAcertos  = 0
    let cartResp    = []
    let numCartao   = parseInt(prompt(`Numero do cartao: `))
    for(let j = 1; j <=13; j++){
        let erro    = false
        let valor   = parseInt(prompt(`Informe o ${j}º valor do cartao resposta: `))
        for(let k = 0; k<=cartResp.length; k++){
            if(valor == cartResp[k]){
                erro    = true
            }
        }
        if(isNaN(valor)){
            console.log('Valor informado não é um numero!')
            j--
            cont++
            if(cont ==3){
                break
            }
        }else if (erro == true){
            console.log('Valor ja informado no cartao resposta!')
            j--
        }else{
            cartResp.push(valor)
            for(let k = 0; k<=vetGab.length; k++){
                if(valor == vetGab[k]){
                    qtdAcertos++
                }
            }  
        }
    }
    if(cont ==3){
        break
    }
    let infos   = {
        numero: numCartao,
        vetResp: cartResp,
        arcertos: qtdAcertos
    }
    respostas.push(infos)
    quantidade++
}

for(let i = 0; i<=quantidade-1;i++){
    console.log(`Numero do Cartao: ${respostas[i].numero}`)
    console.log(`Gabarito: ${vetGab}`)
    console.log(`Respostas: ${respostas[i].vetResp}`)
    console.log(`Quantidade de acertos: ${respostas[i].arcertos}`)
    if (respostas[i].arcertos == 13){
        console.log('\n\n Parabéns, tu foi o GANHADOR \n\n')
    }
}
