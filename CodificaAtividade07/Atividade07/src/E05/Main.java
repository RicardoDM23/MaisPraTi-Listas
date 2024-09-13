package E05;

//5. Implemente um jogo simples de cartas onde a mão do jogador é representada por uma lista duplamente encadeada. Permita que o jogador adicione, remova, e reorganize as cartas na mão. Filas

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MaoJogador mao = new MaoJogador();

        Queue<Carta> baralho = new LinkedList<>();
        baralho.add(new Carta("Ás de Espadas"));
        baralho.add(new Carta("Rei de Copas"));
        baralho.add(new Carta("Dama de Ouros"));
        baralho.add(new Carta("Valete de Paus"));
        baralho.add(new Carta("10 de Espadas"));
        
        while (true) {
            System.out.println("\nEscolha uma ação:");
            System.out.println("1. Comprar carta do baralho");
            System.out.println("2. Remover carta da mão");
            System.out.println("3. Exibir cartas na mão");
            System.out.println("4. Mover carta para o final");
            System.out.println("5. Sair");
            int escolha = sc.nextInt();
            sc.nextLine(); // Consumir o newline
            
            switch (escolha) {
                case 1:
                    if (baralho.isEmpty()) {
                        System.out.println("O baralho está vazio.");
                    } else {
                        Carta novaCarta = baralho.poll(); // Remove a carta do início da fila
                        mao.addCarta(novaCarta);
                        System.out.println("Você comprou a carta: " + novaCarta);
                    }
                    break;
                case 2:
                    System.out.println("Digite o nome da carta a remover:");
                    String cartaParaRemover = sc.nextLine();
                    mao.removeCarta(cartaParaRemover);
                    break;
                case 3:
                    mao.exibirCartas();
                    break;
                case 4:
                    System.out.println("Digite o nome da carta a mover para o final:");
                    String cartaParaMover = sc.nextLine();
                    mao.moverCartaParaFinal(cartaParaMover);
                    break;
                case 5:
                    System.out.println("Saindo do jogo...");
                    sc.close();
                    return;
                default:
                    System.out.println("Opção inválida! Tente novamente.");
            }
        }
    }
}