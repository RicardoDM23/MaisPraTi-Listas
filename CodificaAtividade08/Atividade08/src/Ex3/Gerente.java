package Ex3;

public class Gerente extends Funcionario{
    public Gerente(String nome, float salario) {
        super(nome, salario);
    }
    
    @Override
    protected void calcularBonus(float salario) {
        salario = salario * 1.2F;
        this.setSalario(salario);
    }
}
