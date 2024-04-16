/*
* Utilizar somente while
* Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
* Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
* Ricardo D. Muenchen 16/04/24
*/

let num = 100;
let count = 0;

while (count < 50) {
    let primo = true;
    let div = 2;
    do {
        if ((num !== div) && (num % div === 0)) {
            primo = false;
        }
        div++;
    } while (div <= num)

    if (primo) {
        console.log(num);
        count++;
    }
    num++;
}