/*
    20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
        Matrícula:
        Nome:
        Salário bruto:
        Dedução INSS:
        Salário líquido:
        (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
        INSS).
*/

// npm install xlsx
// Ricardo D. Muenchen 08/05/2024

const XLSX = require('xlsx');
const workbook = XLSX.readFile('CodificaLista02/exe20GPT.xlsx');
const sheet_name_list = workbook.SheetNames;
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

console.log(data);
