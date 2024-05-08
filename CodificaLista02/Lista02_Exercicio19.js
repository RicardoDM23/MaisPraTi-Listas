/*
    19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS.
*/

// Ricardo D. Muenchen 08/05/2024

const prompt = require('prompt-sync')()
let horarios = []
let cont = 0

function validaHorario(a){
 const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/  //expressões regulares
 return regex.test(a)
}

for(let i = 1; i <= 5; i++){
    
    let horario= prompt('Informe o '+i+'º horário no formato (HH:MM:SS): ')
    if(validaHorario(horario)){
        horarios.push(horario)
    } else {
        cont++
        console.log('Formato incorreto! '+cont+'º Erro.')
        i--
        
    }
    if ( cont === 3){
        i=5
    }
}

for(let i = 0; i < horarios.length; i++){
    console.log(i+' - Horário informado: '+horarios[i])
}
