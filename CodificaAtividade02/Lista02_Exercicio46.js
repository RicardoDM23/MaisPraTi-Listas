/*
    46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
    com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
    de vendas por vendedor.
*/

// Ricardo D. Muenchen 28/05/2024

function vendasVendedor(lista) {
    const resumo  = {}
    
    lista.forEach(venda => {
      if (resumo[venda.vendedor]) {
        resumo[venda.vendedor]  += venda.valor
      } else {
        resumo[venda.vendedor]  = venda.valor
      }
    })
    return resumo
}

const vendas  = [
    {vendedor: 'Pedro', valor: 10},
    {vendedor: 'Pedro', valor: 5},
    {vendedor: 'Joao', valor: 15},
    {vendedor: 'Paulo', valor: 20},
    {vendedor: 'Pedro', valor: 50},
    {vendedor: 'Joao', valor: 25},
    {vendedor: 'Paulo', valor: 30}
]
let resultado = vendasVendedor(vendas)
console.log(resultado)