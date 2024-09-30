package Ex4;

public class Main04 {
    public static void main(String[] args) {
        
        Funcionario fun = new Funcionario("Funcionario", 2000);
        Gerente gerente = new Gerente("Gerente", 4000);
        Desenvolvedor dev = new Desenvolvedor("Dev", 3000);
        
        fun.trabalhar();
        gerente.trabalhar();
        dev.trabalhar();
    }
}
