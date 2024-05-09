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

//Ricarod D. Muenchen 08/05/2024

const funcionarios = [
    { matricula: 1, nome: 'João Silva', salarioBruto: 3000 },
    { matricula: 2, nome: 'Maria Santos', salarioBruto: 3500 },
    { matricula: 3, nome: 'Pedro Lima', salarioBruto: 3200 },
    { matricula: 4, nome: 'Ana Souza', salarioBruto: 4000 },
    { matricula: 5, nome: 'Carlos Pereira', salarioBruto: 3800 },
    { matricula: 6, nome: 'Fernanda Oliveira', salarioBruto: 4200 },
    { matricula: 7, nome: 'André Almeida', salarioBruto: 3100 },
    { matricula: 8, nome: 'Luana Costa', salarioBruto: 3300 },
    { matricula: 9, nome: 'Ricardo Nunes', salarioBruto: 2900 },
    { matricula: 10, nome: 'Juliana Santos', salarioBruto: 3600 },
    { matricula: 11, nome: 'Lucas Martins', salarioBruto: 4100 },
    { matricula: 12, nome: 'Camila Ferreira', salarioBruto: 3700 },
    { matricula: 13, nome: 'Guilherme Oliveira', salarioBruto: 3900 },
    { matricula: 14, nome: 'Patrícia Silva', salarioBruto: 3400 },
    { matricula: 15, nome: 'Gabriel Mendes', salarioBruto: 2950 },
    { matricula: 16, nome: 'Renata Oliveira', salarioBruto: 3800 },
    { matricula: 17, nome: 'Anderson Lima', salarioBruto: 3250 },
    { matricula: 18, nome: 'Vanessa Pereira', salarioBruto: 3350 },
    { matricula: 19, nome: 'Eduardo Sousa', salarioBruto: 2950 },
    { matricula: 20, nome: 'Bruna Almeida', salarioBruto: 4050 },
    { matricula: 21, nome: 'Marcelo Santos', salarioBruto: 4150 },
    { matricula: 22, nome: 'Daniela Costa', salarioBruto: 3200 },
    { matricula: 23, nome: 'Thiago Nunes', salarioBruto: 3300 },
    { matricula: 24, nome: 'Bianca Fernandes', salarioBruto: 3700 },
    { matricula: 25, nome: 'Fabio Rodrigues', salarioBruto: 2900 },
    { matricula: 26, nome: 'Isabela Oliveira', salarioBruto: 3900 },
    { matricula: 27, nome: 'Roberto Silva', salarioBruto: 3400 },
    { matricula: 28, nome: 'Mariana Santos', salarioBruto: 3600 },
    { matricula: 29, nome: 'Leandro Martins', salarioBruto: 4200 },
    { matricula: 30, nome: 'Laura Ferreira', salarioBruto: 3100 },
    { matricula: 31, nome: 'Paulo Oliveira', salarioBruto: 2950 },
    { matricula: 32, nome: 'Aline Lima', salarioBruto: 3750 },
    { matricula: 33, nome: 'Rafael Pereira', salarioBruto: 3850 },
    { matricula: 34, nome: 'Carolina Costa', salarioBruto: 3150 },
    { matricula: 35, nome: 'Diego Souza', salarioBruto: 3050 },
    { matricula: 36, nome: 'Larissa Almeida', salarioBruto: 3950 },
    { matricula: 37, nome: 'Andréa Silva', salarioBruto: 3450 },
    { matricula: 38, nome: 'Marcos Santos', salarioBruto: 3550 },
    { matricula: 39, nome: 'Fernanda Oliveira', salarioBruto: 3750 },
    { matricula: 40, nome: 'Gustavo Nunes', salarioBruto: 2850 },
    { matricula: 41, nome: 'Amanda Ferreira', salarioBruto: 3950 },
    { matricula: 42, nome: 'Renato Oliveira', salarioBruto: 3700 },
    { matricula: 43, nome: 'Luiza Costa', salarioBruto: 3000 },
    { matricula: 44, nome: 'André Mendes', salarioBruto: 3850 },
    { matricula: 45, nome: 'Jéssica Lima', salarioBruto: 3200 },
    { matricula: 46, nome: 'Felipe Pereira', salarioBruto: 3100 },
    { matricula: 47, nome: 'Carla Sousa', salarioBruto: 3300 },
    { matricula: 48, nome: 'Gabriel Fernandes', salarioBruto: 3500 },
    { matricula: 49, nome: 'Patricia Oliveira', salarioBruto: 3650 },
    { matricula: 50, nome: 'Lucas Almeida', salarioBruto: 3350 },
    { matricula: 51, nome: 'Bruna Santos', salarioBruto: 2900 },
    { matricula: 52, nome: 'Ricardo Costa', salarioBruto: 3800 },
    { matricula: 53, nome: 'Marina Oliveira', salarioBruto: 4100 },
    { matricula: 54, nome: 'Pedro Santos', salarioBruto: 3250 },
    { matricula: 55, nome: 'Julia Lima', salarioBruto: 3350 },
    { matricula: 56, nome: 'Eduardo Pereira', salarioBruto: 3450 },
    { matricula: 57, nome: 'Fernanda Costa', salarioBruto: 3200 },
    { matricula: 58, nome: 'Rafaela Almeida', salarioBruto: 3300 },
    { matricula: 59, nome: 'Thiago Silva', salarioBruto: 2900 },
    { matricula: 60, nome: 'Camila Santos', salarioBruto: 4000 },
    { matricula: 61, nome: 'Guilherme Oliveira', salarioBruto: 4150 },
    { matricula: 62, nome: 'Patrícia Lima', salarioBruto: 3050 },
    { matricula: 63, nome: 'Gabriel Souza', salarioBruto: 3150 },
    { matricula: 64, nome: 'Renata Costa', salarioBruto: 4050 },
    { matricula: 65, nome: 'Anderson Fernandes', salarioBruto: 3750 },
    { matricula: 66, nome: 'Vanessa Oliveira', salarioBruto: 2950 },
    { matricula: 67, nome: 'Eduardo Lima', salarioBruto: 3900 },
    { matricula: 68, nome: 'Bruna Costa', salarioBruto: 3400 },
    { matricula: 69, nome: 'Marcelo Pereira', salarioBruto: 3600 },
    { matricula: 70, nome: 'Daniela Lima', salarioBruto: 2950 },
    { matricula: 71, nome: 'Thiago Costa', salarioBruto: 3700 },
    { matricula: 72, nome: 'Bianca Oliveira', salarioBruto: 3200 },
    { matricula: 73, nome: 'Fabio Santos', salarioBruto: 3050 },
    { matricula: 74, nome: 'Isabela Almeida', salarioBruto: 4200 },
    { matricula: 75, nome: 'Roberto Costa', salarioBruto: 2950 },
    { matricula: 76, nome: 'Mariana Oliveira', salarioBruto: 3750 },
    { matricula: 77, nome: 'Leandro Silva', salarioBruto: 3450 },
    { matricula: 78, nome: 'Laura Santos', salarioBruto: 3550 },
    { matricula: 79, nome: 'Paulo Lima', salarioBruto: 2850 },
    { matricula: 80, nome: 'Aline Oliveira', salarioBruto: 3950 }
]

for ( let fun of funcionarios){
    console.log('\n')
    console.log('Matrícula: '+fun.matricula)
    console.log('Nome: '+fun.nome)
    console.log('Salário bruto: '+fun.salarioBruto)
    console.log('Dedução INSS: '+(fun.salarioBruto*0.12))
    console.log('Salário líquido: '+(fun.salarioBruto - (fun.salarioBruto*0.12)))
}