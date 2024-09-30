package Ex8;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private List<Funcionario> funcionarios;
    
    public Empresa() {
        this.funcionarios = new ArrayList<>();
    }

    public void adicionarFuncionario(Funcionario funcionario) {
        funcionarios.add(funcionario);
    }

    public void calcularFolhaPagamento() {
        double totalSalarios = 0;
        for (Funcionario funcionario : funcionarios) {
            double salario = funcionario.calcularSalario();
            System.out.println("Funcionário - "+funcionario.getCargo()+": " + funcionario.getNome() + ", Salário Total: R$" + salario);
            totalSalarios += salario;
        }
        System.out.println("Total da folha de pagamento: R$" + totalSalarios);
    }

    public void promoverFuncionario(String nome, Funcionario novoCargo) {
        for (int i = 0; i < funcionarios.size(); i++) {
            if (funcionarios.get(i).getNome().equals(nome)) {
                funcionarios.set(i, novoCargo);
                System.out.println(nome + " foi promovido(a) para " + novoCargo.getClass().getSimpleName() + ".");
                break;
            }
        }
    }
}

