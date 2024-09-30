package Ex8;

public class Desenvolvedor extends Funcionario {

    public Desenvolvedor(String nome, double salario) {
        super(nome, salario, "Desenvolvedor");
    }
    
    @Override
    public double calcularSalario() {
        return salario + calcularBonus();
    }
    
    @Override
    public double calcularBonus() {
        return salario * 0.1;
    }
    
}

