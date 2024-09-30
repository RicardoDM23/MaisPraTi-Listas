package Ex4;

public class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, float salario) {
        super(nome, salario);
    }
    
    @Override
    protected void calcularBonus(float salario) {
        salario = salario * 1.1F;
        this.setSalario(salario);
    }
    
    @Override
    protected void trabalhar() {
        System.out.println(this.getNome() + " esta desenvolvendo...!");
    }
}
