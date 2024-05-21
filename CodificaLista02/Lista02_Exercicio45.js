/*
    45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
    o número de vezes que a string aparece no array.
*/

// Ricardo D. Muenchen 21/05/2024

function logico(array) {
    const result = {}
    array.forEach(x => {
        if (result[x]) {
            result[x]++
        } else {
            result[x] = 1
        }
    })
    return result
}

const arrayStrings = ['a','s','d','z','x','c','z','s','a','d','c']

let objeto = logico(arrayStrings)
console.log(objeto)

