package E04;

//4. Implemente um editor de texto simples onde as operações de desfazer (undo) e refazer (redo) são gerenciadas por uma lista duplamente encadeada.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Editor editor = new Editor();
        Scanner sc = new Scanner(System.in);
        
        while (true) {
            System.out.println("\nTexto atual: " + editor.texto.toString());
            System.out.println("Escolha uma ação: ");
            System.out.println("1. Inserir texto");
            System.out.println("2. Remover texto");
            System.out.println("3. Desfazer última ação");
            System.out.println("4. Sair");
            
            int escolha = sc.nextInt();
            sc.nextLine();
            
            switch (escolha) {
                case 1:
                    System.out.println("Digite o texto para inserir: ");
                    String texto = sc.nextLine();
                    System.out.println("Digite a posição para inserir: ");
                    int posicaoInserir = sc.nextInt();
                    editor.addText(texto, posicaoInserir);
                    break;
                case 2:
                    System.out.println("Digite a posição de onde remover: ");
                    int posicaoRemover = sc.nextInt();
                    System.out.println("Digite o comprimento do texto a ser removido: ");
                    int comprimento = sc.nextInt();
                    editor.removeText(posicaoRemover, comprimento);
                    break;
                case 3:
                    editor.undoAcao();
                    break;
                case 4:
                    System.out.println("Até a proxima!");
                    sc.close();
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }
}