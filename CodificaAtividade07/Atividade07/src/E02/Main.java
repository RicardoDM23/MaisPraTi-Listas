package E02;

//2. Crie uma aplicação que simule o histórico de navegação de um navegador utilizando uma lista simplesmente encadeada. Implemente funcionalidades para adicionar novas URLs e remover URLs antigas quando a lista atingir um certo tamanho.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        ListaSimples listaURL = new ListaSimples();
        listaURL.add("www.google.com");
        listaURL.add("www.youtube.com");
        listaURL.add("www.classroom.google.com");
        listaURL.add("www.mail.google.com");
        
        boolean continuar = true;
        while(continuar){
            
            if(listaURL.size() > 8){
                listaURL.remove(0);
            }
            int j = listaURL.size()-1;
            for (int i = 0; i < listaURL.size(); i++) {
                System.out.println("ULR "+(i+1)+"/8: " + listaURL.get(j));
                j--;
            }
            System.out.println("");
            System.out.println("Continuar? (s/n) ");
            char prox = sc.next().charAt(0);
            if (prox == 's' || prox == 'S'){
                System.out.println("Informe a URL: ");
                String data = sc.next();
                listaURL.add(data);
            }else{
                System.out.println("Até a proxima!");
                continuar = false;
            }
        }
    }
}