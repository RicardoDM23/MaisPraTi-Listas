package Ex7;

public class CartaoCredito extends FormaPagamento {
    
    private String numeroCartao;
    private String cvv;
    
    public CartaoCredito(String numeroCartao, String cvv) {
        this.numeroCartao = numeroCartao;
        this.cvv = cvv;
    }
    @Override
    public boolean validarPagamento() {
        if (numeroCartao.length() == 16 && !cvv.isEmpty()) {
            System.out.println("Cartão de crédito válido.");
            return true;
        } else {
            System.out.println("Cartão de crédito inválido.");
            return false;
        }
    }
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado no cartão de crédito.");
        } else {
            System.out.println("Erro ao processar pagamento no cartão de crédito.");
        }
    }
}
