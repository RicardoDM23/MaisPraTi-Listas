package Ex8;

public class Estagiario extends Funcionario {
    
    public Estagiario(String nome, double salario) {
        super(nome, salario, "Estagiario");
    }
    
    @Override
    public double calcularSalario() {
        return salario;
    }
    
    @Override
    public double calcularBonus() {
        return 0;
    }
}

