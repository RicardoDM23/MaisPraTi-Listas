package Ex8;

public class Main08 {
    public static void main(String[] args) {
        Empresa empresa = new Empresa();

        empresa.adicionarFuncionario(new Estagiario("Lucas", 1500));
        empresa.adicionarFuncionario(new Desenvolvedor("Ana", 3000));
        empresa.adicionarFuncionario(new Gerente("Marcos", 5000));

        System.out.println("Folha de pagamento inicial:");
        empresa.calcularFolhaPagamento();

        empresa.promoverFuncionario("Lucas", new Desenvolvedor("Lucas", 2500));

        System.out.println("Folha de pagamento após promoção:");
        empresa.calcularFolhaPagamento();
    }
}
