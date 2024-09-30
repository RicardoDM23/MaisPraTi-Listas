package Ex2;

import java.util.Scanner;

public class Main02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ProdutoDesconto prod = new ProdutoDesconto("ProdutoUm", 10F, 12, 10);
        
//        Gera erro!
//        ProdutoDesconto prod2 = new ProdutoDesconto("ProdutoDois", -10F, 12, 10);
//        ProdutoDesconto prod3 = new ProdutoDesconto("ProdutoTres", 10F, 12, 60);
        
        System.out.println("Tudo OK!");
    }
}