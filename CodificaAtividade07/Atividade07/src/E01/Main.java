package E01;

//1. Implemente um gerenciador de tarefas onde cada tarefa é um nó em uma lista simplesmente encadeada. Permita que o usuário adicione, remova, e marque tarefas como concluídas.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        ListaSimples listaTarrefas = new ListaSimples();
        listaTarrefas.add("Verificar exercicio 1");
        listaTarrefas.add("Ver outros exercicios!");

        boolean continuar = true;
        while(continuar){

            for (int i = 0; i < listaTarrefas.size()-1; i++) {
                System.out.println("Tarefa "+i+" - "+listaTarrefas.get(i));
            }

            System.out.println("""
                    \nOpçoes:     (Use o numero!)
                    1 - Adicionar              2 - Remover
                    3 - Marcar como Concluido  4 - Sair
                    """);
            int acao = sc.nextInt();
            if(acao == 1){
                System.out.println("Informe a tarefa: ");
                String data = sc.next();
                listaTarrefas.add(data);
            }else if(acao == 2){
                System.out.println("Informe o index a ser removido de 0 a " + (listaTarrefas.size()-1)+": ");
                int index = sc.nextInt();
                listaTarrefas.remove(index);
            }else if(acao == 3){
                System.out.println("Informe o index concluido de 0 a " + (listaTarrefas.size()-1)+": ");
                int index = sc.nextInt();
                listaTarrefas.edit(index);
            }else {
                System.out.println("Até a proxima!");
                continuar = false;
            }
        }
        
    }
}