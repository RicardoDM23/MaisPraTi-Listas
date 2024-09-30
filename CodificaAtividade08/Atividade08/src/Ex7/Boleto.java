package Ex7;

public class Boleto extends FormaPagamento {
    private String codigoBarras;
    
    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }
    
    @Override
    public boolean validarPagamento() {
        if (codigoBarras.length() == 47) {
            System.out.println("Boleto válido.");
            return true;
        } else {
            System.out.println("Boleto inválido.");
            return false;
        }
    }
    
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado via boleto.");
        } else {
            System.out.println("Erro ao processar pagamento via boleto.");
        }
    }
}
