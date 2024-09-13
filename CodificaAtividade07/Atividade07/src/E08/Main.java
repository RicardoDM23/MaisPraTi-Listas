package E08;

//8. Implemente uma fila que simula a fila de processos prontos para execução em um sistema operacional. Permita que novos processos sejam adicionados e que o processo mais antigo seja removido para execução.

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        Queue<String> fila = new LinkedList<>();
        fila.add("Processo 1");
        fila.add("Processo 2");
        fila.add("Processo 3");
        int count = fila.size()+1;
        while (true){
            System.out.println("Fila de processos!");
            for (String process : fila) {
                System.out.println(process);
            }
            
            System.out.println("1 - Adicionar novo processo");
            System.out.println("2 - Sair");
            int acao = sc.nextInt();
            if(acao == 1){
//                System.out.println("Informe o nome do novo processo: ");
//                String data = sc.nextLine();
                
                System.out.println("\nIniciando processamento de " + fila.element());
                fila.poll();
                System.out.println("Adicionando novo processo!\n");
                fila.add("Processo "+count);
                count++;
            } else {
                System.out.println("Até a proxima!");
                return;
            }
        }
    }
}