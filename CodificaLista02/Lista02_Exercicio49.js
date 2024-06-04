/*
    49. Você recebe um array de objetos representando transações financeiras. Cada
    transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
    onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
    essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

// Ricardo D. Muenchen 28/05/2024

function agrupar(obj){
    const resultado = {}

    for (let i = 0; i < obj.length; i++) {
        const transacao = obj[i]

        let cat = transacao.categoria
        let val = transacao.valor

        if (!resultado[cat]) {
        resultado[cat] = {
            transacoes: [],
            subtotal: 0
            };
        }
  
      resultado[cat].transacoes.push(transacao)
      resultado[cat].subtotal   += val
    }
  
    return resultado
}

const lista = [
    {id: 1, valor: 123, data: '01/01/2024', categoria: 'C'},
    {id: 2, valor: 321, data: '01/02/2024', categoria: 'A'},
    {id: 3, valor: 234, data: '01/03/2024', categoria: 'B'},
    {id: 4, valor: 543, data: '01/04/2024', categoria: 'A'},
    {id: 5, valor: 246, data: '01/05/2024', categoria: 'C'}
]

let result  = agrupar(lista)
console.log(result)

for(let chave in result){
    console.log(result[chave].transacoes)
    console.log('Subtotal: ' + result[chave].subtotal)
}