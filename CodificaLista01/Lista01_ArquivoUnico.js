const prompt = require('prompt-sync')();
let continuar = true;
do{
    let exer = prompt('informe o numero do exercicio, de 1 a 16: ')
    switch(exer){
        case '1': case '01':
            console.log("Exercicio 01:");
            console.log('   Escreva um algoritmo para ler uma temperatura em graus Celsius,\n'+
                        '   calcular e escrever o valor correspondente em graus Fahrenheit.\n');
            let tempCels = Number(prompt("1 - Informe a temperatura em graus Celsius: "));

            if (isNaN(tempCels)){
                console.log("Não é um valor valido!")
            } else {
                let tempFahr = (tempCels * 1.8 + 32)
                console.log(`A temperatura em Fahrenheit é ${tempFahr}`)
            }
            break;
        case '2': case '02':
            console.log("Exercicio 02:");
            console.log('   Escreva um algoritmo para ler o número de eleitores de um município,\n'+
                        '   o número de votos brancos, nulos e válidos. Calcular e escrever o percentual\n'+ 
                        '   que cada um representa em relação ao total de eleitores.\n');
            let eleitores = parseInt(prompt('1 - Qual o número de eleitores do município: '));
            let brancos = parseInt(prompt('2 - Número de votos brancos: '));
            let nulos = parseInt(prompt('3 - Número de votos nulos: '));
            let validos = parseInt(prompt('4 - Número de votos válidos: '));

            totalBNV = brancos + nulos + validos;

            if(totalBNV > eleitores) {
                console.log(`A soma dos votos (${totalBNV}) é maior que total de eleitores informado (${eleitores})`);
            } else {
                console.log('Resultado votos brancos: ',(brancos*100)/eleitores,'%');
                console.log('Resultado votos nulos: ',(nulos*100)/eleitores,'% de');
                console.log('Resultado votos válidos: ',(validos*100)/eleitores,'%');
            }    
            break;
        case '3': case '03':
            console.log("Exercicio 03:");
            console.log('   Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:\n'+
                        '       ● Some 25 ao primeiro inteiro;\n'+
                        '       ● Triplique o valor do segundo inteiro;\n'+
                        '       ● Modifique o valor do terceiro inteiro para 12% do valor original;\n'+
                        '       ● Armazene no quarto inteiro a soma dos valores originais\n'+ 
                        '           (os que o usuário digitou) dos primeiros três inteiros\n');
            let num1 = parseInt(prompt('1 - Informe o primeiro número inteiro: '));
            let num2 = parseInt(prompt('2 - Informe o segundo número inteiro: '));
            let num3 = parseInt(prompt('3 - Informe o terceiro número inteiro: '));
            let num4 = parseInt(prompt('4 - Informe o quarto número inteiro: '));

            num4 = (num1 + num2 + num3);
            num1 += (25);
            num2 = (num2 * 3);
            num3 = (num3 * 0,12);

            console.log('Operação 1: ', num1);
            console.log('Operação 2: ', num2);
            console.log('Operação 3: ', num3);
            console.log('Operação 4: ', num4);    
            break;
        case '4': case '04':
            console.log("Exercicio 04:");
            console.log('   Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,\n'+
                        '   calcular e escrever a média semestral e a seguinte mensagem: "PARABÉNS! Você foi aprovado",\n'+
                        '   somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).\n');
            let notaUM4 = Number(prompt('1 - Informe a primeira nota(0.0 a 10.0): '));
            let notaDOIS4 = Number(prompt('2 - Informe a segunda nota(0.0 a 10.0): '));
            let media4;

            if(isNaN(notaUM4)){
                console.log('Nota 1 não é um número.');
            }else if(isNaN(notaDOIS4)){
                console.log('Nota 2 não é um número.');
            }else if(notaUM4 > 10){
                console.log('Nota 1 valor informado acima do limite.');
            }else if(notaDOIS4 > 10){
                console.log('Nota 2 valor informado acima do limite.');
            }else{
                media4 = ((notaUM4+ notaDOIS4) / 2);
                if(media4 >= 6.0){
                    console.log('PARABÉNS! Você foi aprovado');
                }
            }
            break;
        case '5': case '05':
            console.log("Exercicio 05:");
            console.log(
                "   Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,\n"+ 
                "   calcular e escrever a média semestral e a seguinte mensagem:\n"+
                "   ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado\n"+
                "   (considere 6.0 a nota mínima para aprovação).\n"+
                "   Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’\n"
            );
            let notaUM5 = Number(prompt('1 - Informe a primeira nota(0.0 a 10.0): '));
            let notaDOIS5 = Number(prompt('2 - Informe a segunda nota(0.0 a 10.0): '));
            let media5;

            if(isNaN(notaUM5)){
                console.log('Nota 1 não é um número.');
            }else if(isNaN(notaDOIS5)){
                console.log('Nota 2 não é um número.');
            }else if(notaUM5 > 10){
                console.log('Nota 1 valor informado acima do limite.');
            }else if(notaDOIS5 > 10){
                console.log('Nota 2 valor informado acima do limite.');
            }else{
                media5 = ((notaUM5+ notaDOIS5) / 2);
                if(media5 >= 6.0){
                    console.log('PARABÉNS! Você foi aprovado');
                } else {
                    console.log('Você foi REPROVADO! Estude mais.');
                }
            }    
            break;
        case '6': case '06':
            console.log("Exercicio 06");
            console.log();
            let ladoA = Number(prompt('1 - Informe o valor do lado A: '));
            let ladoB = Number(prompt('2 - Informe o valor do lado B: '));
            let ladoC = Number(prompt('3 - Informe o valor do lado C: '));

            //regras
            if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
                if((ladoA == ladoB) && (ladoB == ladoC)){
                    console.log('É possivel formar um Triângulo eqüilátero');    
                }else if((ladoA != ladoB) && (ladoB != ladoC)){
                    console.log('É possivel formar um Triângulo escaleno');
                }else if(((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC))) {
                    console.log('É possivel formar um Triângulo isósceles');
                }
            }else{
                console.log('Não é possivel formar um triângulo com os valores informados!');
            }    
            break;
        case '7': case '07':
            console.log("Exercicio 07");
            console.log();
            let qtd = parseInt(prompt('1 - Informe a quantidade de maças compradas: '));
            console.log(qtd)
            let total7;

            if (qtd<12){
                total7 = qtd * 0.30;
                console.log(`Valor total: R$ ${total7}`);
            } else if (qtd>=12){
                total7 = qtd * 0.25;
                console.log(`Valor total: R$ ${total7}`);
            }else{
                console.log(`Quantidade infirmada não é um número.`);
            }    
            break;
        case '8': case '08':
            console.log("Exercicio 08");
            console.log();
            console.log('Informe dois valores diferentes.');
            let valor1 = Number(prompt('1 - Informe o primeiro valor: '));
            let valor2 = Number(prompt('2 - Informe o segundo valor: '));

            if (isNaN(valor1) || isNaN(valor2)){
                console.log('Valor informado não é um número!');
            } else if (valor1 < valor2){
                console.log(`(${valor1}), (${valor2})`);
            } else if (valor2 < valor1){
                console.log(`(${valor2}), (${valor1})`);
            } else {
            console.log('Os valores informados são iguais'); 
            }    
            break;
        case '9': case '09':
            console.log("Exercicio 09");
            console.log();
            let cod = parseInt(prompt('1 - Informe o código de origem do produto: '));
            switch(true){
                case (cod == 1):
                    console.log('Região Sul');
                    break;
                case (cod == 2):
                    console.log('Região Norte');
                    break;
                case (cod == 3):
                    console.log('Região Leste');
                    break;
                case (cod == 4):
                    console.log('Região Oeste');
                    break;
                case (cod == 5 || cod == 6):
                    console.log('Região Nordeste');
                    break;
                case (cod == 7 || cod == 8 || cod == 9):
                    console.log('Região Sudeste');
                    break;
                case (cod >= 10 && cod <= 20):
                    console.log('Região Centro-Oeste');
                    break;
                case (cod >= 25 && cod <= 50):
                    console.log('Região Nordeste');
                    break;
                default:
                    console.log('Produto Importado');
                    break;
            }    
            break;
        case '10':
            console.log("Exercicio 10");
            console.log();
            let valor10 = parseInt(prompt('1 - Informe um valor: '));

            for(let i = 1; i <= 10; i++){
                console.log(`valor: ${valor10} contador: ${i}`);
            }    
            break;
        case '11':
            console.log("Exercicio 11");
            console.log();
            let valor11;
            do{
                valor11 = Number(prompt('Informe um número inteiro: ')); 
                if((valor11 <= 0) || (isNaN(valor11))){
            
                } else if((valor11%2 === 0)){
                    console.log(`Número ${valor11} é PAR!`);
                } else if ((valor11%2 !== 0)){
                    console.log(`Número ${valor11} é IMPAR!`);
                }
            } while ((valor11 >= 1) )    
            break;
        case '12':
            console.log("Exercicio 12");
            console.log();
            for (let i = 1000; i < 2000; i++){
                if(i%11 === 5){
                    console.log(i);
                }
            }    
            break;
        case '13':  
            console.log("Exercicio 13");
            console.log();
            for (let i = 1; i <= 5; i++){
                let n = parseInt(prompt(`Informe o ${i}º N: `));
                for (let j = 1; j <= n; j++){
                    console.log(j, 'X', n,'=', n*j);
                }
            }    
            break;
        case '14':
            console.log("Exercicio 14");
            console.log();
            let num14;
            let cont14 = -1;
            let total14 = 0;

            console.log('O algoritimo recebe números decimais.')
            console.log('Até que o usuário digite 0 (zero).')
            console.log('Então retorna a média aritmética.')

            while (num14 !== 0){
                num14 = Number(prompt('Informe um número: ')); 
                cont14++;
                total14 += num14;
            } 

            console.log('Média aritmética:', total14/cont14);    
            break;
        case '15':
            console.log("Exercicio 15");
            console.log();
            let num15;
            let peso15;
            let totalNum15 = 0;
            let totalPeso15 = 0;

            console.log('Média Ponderada');
            while ((num15 !== 0) && (peso15 !==0) ){
                num15 = parseInt(prompt('Informe um número: ')); 
                if(num15 === 0){
                    break;
                }
                peso15 = parseInt(prompt('Informe o peso: ')); 
                if((num15 !== 0) && (peso15 !== 0)){
                    totalNum15 += num15;
                    totalPeso15 += peso15;
                }else{
                    break;
                }
            } 
            
            console.log('Média Ponderada:', totalNum/totalPeso);    
            break;
        case '16':
            console.log("Exercicio 16");
            console.log();
            let num = 100;
            let count = 0;

            //sem if
            while (count < 50) {
                let primo = true;
                let div = 2;
                do {
                    while ((num !== div) && (num % div === 0)) {
                        primo = false;
                        break;
                    }
                    div++;
                } while (div <= num)

                while (primo) {
                    console.log(num);
                    count++;
                    break;
                }
                num++;
            }    
            break;
    }
    let teste = true;
    let contTeste = 0;
    while (teste){
        let verificaContinua = prompt('Deseja continuar (s/n)? ')
        if (verificaContinua === 's' || verificaContinua === 'S'){
            continuar = true;
            teste = false;
        } else if (verificaContinua === 'n' || verificaContinua === 'N' || contTeste >= 3){
            continuar = false;
            teste = false;
        } else {
            teste = true;
            console.log('Informe apenas as letras: s/n ou S/N')
            contTeste++
        }
    }
}while(continuar)
