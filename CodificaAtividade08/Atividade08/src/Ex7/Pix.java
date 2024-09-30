package Ex7;

public class Pix extends FormaPagamento {
    private String chavePix;
    
    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }
    
    @Override
    public boolean validarPagamento() {
        if (!chavePix.isEmpty()) {
            System.out.println("Chave Pix válida.");
            return true;
        } else {
            System.out.println("Chave Pix inválida.");
            return false;
        }
    }
    
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado via Pix.");
        } else {
            System.out.println("Erro ao processar pagamento via Pix.");
        }
    }
}
