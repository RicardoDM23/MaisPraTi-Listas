package Ex1;

import java.util.Scanner;

public class Main01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Produto prod = new Produto("ProdutoUm");
        prod.setPreco(1.5F);
        prod.setQuantidade(10);
        
        Produto teste = new Produto("teste", 4.5F, 23);
        
        
//        gera erro
//        Produto prod2 = new Produto("ProdutoDois");
//        prod2.setPreco(1.5F);
//        prod2.setQuantidade(-10);
//        Produto testeDois = new Produto("Teste2", -2f, 0);
        
        
        System.out.println("Tudo OK!");
    }
}