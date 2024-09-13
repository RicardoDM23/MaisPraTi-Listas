package E03;

//3. Implemente um sistema de controle de reversão (undo) para uma aplicação de edição de texto. Use uma lista simplesmente encadeada para armazenar as ações realizadas e permita que o usuário desfaça as últimas ações.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        
        ListaSimples listaText = new ListaSimples();
        Scanner sc = new Scanner(System.in);
        listaText.add("Texto inicial...");
        
        while (true){
            
            String texto = "";
            for (int i = 0; i < listaText.size(); i++) {
                texto += listaText.get(i);
            }
            System.out.println(texto);
            
            System.out.println("1 - Adicionar texto");
            System.out.println("2 - Dezfazer ultima acao");
            int acao = sc.nextInt();
            sc.nextLine();
            
            if (acao == 1){
                System.out.println("Digite o texto:");
                String data = sc.nextLine();
//                data = " "+data;
                listaText.add(data);
            } else if (acao == 2){
                System.out.println("Dezfazendo ultima modificaçao!");
                listaText.remove(listaText.size()-1);
            }else{
                System.out.println("Até a proxima!");
                return;
            }
        }
    }
}
