package Ex8;

public class Gerente extends Funcionario {

    public Gerente(String nome, double salario) {
        super(nome, salario, "Gerente");
    }
    
    @Override
    public double calcularSalario() {
        return salario + calcularBonus();
    }
    
    @Override
    public double calcularBonus() {
        return salario * 0.2;
    }
}
