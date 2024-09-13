package E06;

//6. Crie um simulador de fila de atendimento em um banco. Utilize uma fila para gerenciar os clientes que aguardam atendimento e implemente a lógica para chamar o próximo cliente.

import java.sql.SQLOutput;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        Queue<String> fila = new LinkedList<>();
        fila.add("Joao");
        fila.add("Ana");
        fila.add("Maria");
        fila.add("Pedro");
        fila.add("Jose");
        fila.add("Carol");
        fila.add("Barbara");
        fila.add("Paulo");
        
        while(true){
            System.out.println("Existem "+fila.size()+" pessoas esperando na fila!");
            System.out.println("Deseja atender o proximo cliente? (s/n)");
            char acao = sc.next().charAt(0);
            if(acao == 's' || acao == 'S'){
                System.out.println(fila.element() + " foi atendido!");
                fila.poll();
                if (fila.size() == 0){
                    System.out.println("Todos os clientes foram atendidos!");
                    return;
                }
            }else if (acao == 'n' || acao == 'N'){
                System.out.println("Deseja encerrar os atendimentos? (s/n)");
                acao = sc.next().charAt(0);
                if (acao == 's' || acao == 'S'){
                    if(fila.size() > 0){
                        System.out.println("Que pena! "+fila.size()+" clientes não foram atendidos!");
                        return;
                    }else{
                        System.out.println("Até a proxima!");
                        return;
                    }
                }
            }else{
                System.out.println("Informe corretamente se deseja ou não atender o cliente!");
            }
        }
    }
}