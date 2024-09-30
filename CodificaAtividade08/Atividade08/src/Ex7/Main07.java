package Ex7;

public class Main07 {
    public static void main(String[] args) {
        //numeroCartao.length() == 16 && !cvv.isEmpty()
        FormaPagamento cartao = new CartaoCredito("1234567812345678", "123");
        //codigoBarras.length() == 47
        FormaPagamento boleto = new Boleto("12345678901234567890123456789012345678901234567");
        //!chavePix.isEmpty()
        FormaPagamento pix = new Pix("a@a.com");

        cartao.processarPagamento(312.0F);
        System.out.println();
        boleto.processarPagamento(231.0F);
        System.out.println();
        pix.processarPagamento(123.0F);
    }
}
