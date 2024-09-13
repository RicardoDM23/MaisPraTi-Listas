package E07;

//7. Implemente um sistema de gerenciamento de impressões onde os trabalhos de impressão são enfileirados e processados na ordem em que chegam. Use uma fila para armazenar os trabalhos de impressão.

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        Queue<String> fila = new LinkedList<>();
        fila.add("Trabalho 1");
        fila.add("Trabalho 2");
        fila.add("Trabalho 3");
        fila.add("Trabalho 4");
        
        while (true) {
            System.out.println("Existem " + fila.size() + " trabalhos na fila!");
            System.out.println("1 - Imprimir");
            System.out.println("2 - Adicionar");
            System.out.println("3 - Sair");
            int acao = sc.nextInt();
            if (acao == 1) {
                System.out.println("Imprimindo... " + fila.element());
                System.out.println("Impressão concluida!");
                fila.poll();
            } else if (acao == 2) {
                System.out.println("Informe o nome do trabalho: ");
                String data = sc.nextLine();
                fila.add(data);
            } else {
                System.out.println("Deseja sair? (s/n)");
                char cont = sc.next().charAt(0);
                if (cont == 'n' || cont == 'N') {
                    if (fila.size() > 0) {
                        System.out.println("Que pena! Ainda existem trabalhos para imprimir...");
                    } else {
                        System.out.println("Até a proxima!");
                    }
                    return;
                }
            }
            
        }
    }
}