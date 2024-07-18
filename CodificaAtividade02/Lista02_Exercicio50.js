/* Geral
    50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
    deverá ser capaz de interagir com o usuário através do console do navegador e manter
    um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
    informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
*/
/* 1. Estrutura de Dados:      
    ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
    cidade, quartos totais e quartos disponiveis.
    ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
    nomeCliente.
*/
/* 2. Funcionalidades:
    ○   Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
    ○   Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
        disponíveis em uma cidade específica.
    ○   Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
        deve diminuir o número de quartos disponiveis do hotel.
    ○   Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
        aumentar o número de quartos disponiveis no hotel correspondente.
    ○   Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
        cliente.
*/
/* 3. Regras de Negócio:
    ○   Um hotel só pode aceitar reservas se houver quartos disponíveis.
    ○   As reservas devem ser identificadas por um ID único e associadas a um
        único hotel.
*/
/* 4. Desafios Adicionais (Opcionais):
    ○   Implementar uma função de check-in e check-out que atualize a
        disponibilidade de quartos.
    ○   Gerar relatórios de ocupação para um hotel.
    ○   Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
        avaliações dentro do objeto do hotel.
*/

// Ricardo D. Muenchen 28/05/2024

let hoteis    = [
    {id: 1, nome: 'S', cidade: 'SP', quartosTotais: 20, quartosDisponiveis: 19},
    {id: 2, nome: 'A', cidade: 'Rio', quartosTotais: 20, quartosDisponiveis: 19},
    {id: 3, nome: 'B', cidade: 'Poa', quartosTotais: 15, quartosDisponiveis: 13},
    {id: 4, nome: 'C', cidade: 'Poa', quartosTotais: 15, quartosDisponiveis: 14}
]

let reservas   = [
    {idReserva: 1, idHotel: 1, nomeCliente: 'Jose'},
    {idReserva: 2, idHotel: 2, nomeCliente: 'Paula'},
    {idReserva: 3, idHotel: 3, nomeCliente: 'Joao'},
    {idReserva: 4, idHotel: 3, nomeCliente: 'Ana'},
    {idReserva: 5, idHotel: 4, nomeCliente: 'Felipe'},
]

let continuar = true

while(continuar){

    function adicionar() {
    // ○   Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
        let novoId  = 0
        for(let i = 0; i<hoteis.length;i++){
            novoId  = hoteis[i].id +1
        }

        let novoNome    = prompt('Informe o nome do hotel: ')
        let novoCidade  = prompt('Informe a cidade do hotel: ')
        let novoQuartosTotais   = parseInt(prompt('Informe a quantidade total de quartos: '))
        //let novoQuartosDisponiveis = parseInt(prompt('Informe a quantidade disponivel de quartos: '))
        let novoHotel   = {
            id: novoId,
            nome: novoNome,
            cidade: novoCidade,
            quartosTotais: novoQuartosTotais,
            quartosDisponiveis: novoQuartosTotais
            //quartosDisponiveis: novoQuartosDisponiveis
        }
        hoteis.push(novoHotel)
    }
    
    function buscar(){
    // ○   Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
    //     disponíveis em uma cidade específica.
        let nomeCidade  = prompt('Informe o nome da cidade: ')
        let cidadeTeste = true
        let teste = 0
        for(let hotel of hoteis){
            if(hotel.cidade.toLowerCase() == nomeCidade.toLowerCase()){
                console.log(`Hotel: ${hotel.nome} em ${hotel.cidade}. Numero de quatos vagos: ${hotel.quartosDisponiveis}`)
                teste++
            }else{
                cidadeTeste = false
            }
        }
        if ((cidadeTeste == false) && (teste==0)){
            console.log(`Nenhum hotel encontrado em ${nomeCidade}`)
        }
    }

    function reservar(){
    // ○   Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
    //     deve diminuir o número de quartos disponiveis do hotel.
        for(let hotel of hoteis){
            console.log(`Hotel: ${hotel.nome} Cidade: ${hotel.cidade} Quartos vagos: ${hotel.quartosDisponiveis}`)
        }
        let nomeClienteReserva = prompt('Informe o nome do cliente: ')
        let nomeHotelReserva = prompt('Informe o nome do hotel: ')
        let cidadeHotelReserva = prompt('Informe a cidade: ')
        let idHotel = null
        let contExiste = 0
        let idUltimaReserva = null
        for(let hotel of hoteis){
            if((hotel.nome.toLowerCase() === nomeHotelReserva.toLowerCase()) 
                && (hotel.cidade.toLowerCase() === cidadeHotelReserva.toLowerCase())){
                contExiste++
                if(hotel.quartosDisponiveis > 0){
                   idHotel = hotel.id 
                }
            }
        }
        if(contExiste == 0){
            console.log(`Hotel ${nomeHotelReserva} não existe na cidade ${cidadeHotelReserva}! Tente novamente.`)
        }

        if(idHotel != null){
            for(let chave in reservas){
                idUltimaReserva = (reservas[chave].idReserva)
            }
            for(let hotel of hoteis){
                if(hotel.id == idHotel){
                    hotel.quartosDisponiveis -- 
                }
            }
            let novaReserva = {
                idReserva: idUltimaReserva+1,
                idHotel: idHotel,
                nomeCliente: nomeClienteReserva
            }
            reservas.push(novaReserva)
        }
    }

    function cancelar(){
    // ○   Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
    //     aumentar o número de quartos disponiveis no hotel correspondente.
        for(let reserva of reservas){
            for(let hotel of hoteis){
                if(reserva.idHotel == hotel.id){
                    console.log(` NumReserva: ${reserva.idReserva} Cliente: ${reserva.nomeCliente} Hotel: ${hotel.nome}`)
                }
            }
            
        }

        let idCancelar = parseInt(prompt('Informe o numero da reserva a ser cancelada: '))
        if(idCancelar != null){
            for(let reserva of reservas){
                let i = reservas.indexOf(reserva)
                for(let hotel of hoteis){
                    if(hotel.id == reserva.idHotel){
                        hotel.quartosDisponiveis ++ 
                    }
                }
                if(reserva.idReserva == id){
                    reservas.splice(i, 1)
                }
            } 
        }
    }

    function listar(x){
    // ○   Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
    //     cliente
        if(x==1){
            for(let hotel of hoteis){
                if(hotel.quartosDisponiveis > 0){
                    console.log(`Hotel: ${hotel.nome} | Cidade: ${hotel.cidade} | Quartos Disponiveis: ${hotel.quartosDisponiveis}`)
                }
            }
        }else if(x == 2){
            for(let reserva of reservas){
                // console.log(``)
                for(let hotel of hoteis){
                    if(reserva.idHotel == hotel.id){
                        console.log(`Reserva numero: ${reserva.idReserva} | Cliente: ${reserva.nomeCliente} | Hotel: ${hotel.nome} | Cidade: ${hotel.cidade}`)
                    }
                }
            }
        }else{
            console.log('           Operação não encontrada!')
        }
        
    }

    const prompt = require('prompt-sync')()

    /*
    const reserva = {
        idReserva: idReserva,
        idHotel: idHotel,
        nomeCliente: nomeCliente
    }
    const hoteis = {
        id: id,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosDisponiveis
    }
    */

    console.log('\n'+
                '1 para Adicionar\n'+
                '2 para Buscar\n'+
                '3 para Reservar\n'+
                '4 para Cancelar\n'+
                '5 para Listar\n'+
                '0 Info geral'
    )
    let acao = parseInt(prompt('    Informe o numero da operação? '))

    if(acao == 1){
        adicionar()
    }else if(acao == 2){
        buscar()
    }else if(acao == 3){
        reservar()
    }else if(acao == 4){
        cancelar()
    }else if(acao == 5){
        console.log('1 - Hoteis com quartos disponiveis.\n'+
                    '2 - Detalhes das reservas'
        )
        let tipoLista = parseInt(prompt('   Informe o numero desejado: '))
        listar(tipoLista)
    }else if(acao == 0){
        for(let hotel of hoteis){
            console.log(`id:${hotel.id} n:${hotel.nome} c:${hotel.cidade} t:${hotel.quartosTotais} v:${hotel.quartosDisponiveis}`)
        }
    }

    // console.log(hoteis)
    let verifica = prompt('Deseja continuar? (s/n) -> ')
    if(verifica.toLowerCase() !== 's'){
        continuar = false
    }
}