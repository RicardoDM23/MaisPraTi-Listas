/*
    48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
    inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
    item em estoque. Escreva uma função que combine os inventários em um único objeto.
    Se um item aparecer em ambas as lojas, some as quantidades.
*/

// Ricardo D. Muenchen 28/05/2024

function combina(obj1, obj2){
    const resultado = {}

    obj1.forEach(obj1 => {
        if (resultado[obj1.item]){
            resultado[obj1.item]    += obj1.valor
        }else{
            resultado[obj1.item]    = obj1.valor
        }
    })
    obj2.forEach(obj2 => {
        if (resultado[obj2.item]){
            resultado[obj2.item]    += obj2.valor
        }else{
            resultado[obj2.item]    = obj2.valor
        }
    })
    return resultado
}

const inventarioLojaA   = [
    {item: 'a', valor: 2},
    {item: 's', valor: 1},
    {item: 'd', valor: 4},
    {item: 'f', valor: 1},
    {item: 'q', valor: 2}
]

const inventarioLojaB   = [
    {item: 'q', valor: 2},
    {item: 'w', valor: 1},
    {item: 'e', valor: 1},
    {item: 'r', valor: 5},
    {item: 'a', valor: 1}
]

let objCombinado    = combina(inventarioLojaA, inventarioLojaB)

console.log(objCombinado)