package Ex3;

public class Main03 {
    public static void main(String[] args) {
        
        Gerente gerente = new Gerente("Gerente", 4000);
        Desenvolvedor dev = new Desenvolvedor("Dev", 3000);
        
        System.out.println("Antes do Bonus!");
        System.out.println("Salario Gerente: " + gerente.getSalario());
        System.out.println("Salario Desenvolvedor: " + dev.getSalario());
        
        gerente.calcularBonus(gerente.getSalario());
        dev.calcularBonus(dev.getSalario());
        
        System.out.println("Depois do Donus!");
        System.out.println("Salario Gerente: " + gerente.getSalario());
        System.out.println("Salario Desenvolvedor: " + dev.getSalario());
    }
}
