package Ex4;

public class Funcionario {
    
    private String nome;
    private float salario;
    
    public Funcionario(String nome, float salario) {
        this.nome = nome;
        this.salario = salario;
    }
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public float getSalario() {
        return salario;
    }
    
    public void setSalario(float salario) {
        this.salario = salario;
    }
    
    protected void calcularBonus(float salario){
        this.salario = salario;
    }
    
    protected void trabalhar(){
        System.out.println(this.nome + " esta trabalhando...!");
    }
}