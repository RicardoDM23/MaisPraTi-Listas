package Ex3;

public class Desenvolvedor extends Funcionario{
    public Desenvolvedor(String nome, float salario) {
        super(nome, salario);
    }
    
    @Override
    protected void calcularBonus(float salario) {
        salario = salario * 1.1F;
        this.setSalario(salario);
    }
}
