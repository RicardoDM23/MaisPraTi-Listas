package Ex2;

import Ex1.Produto;

public class ProdutoDesconto extends Produto {
    
    
    private int desc;
    private float valorComDesc;
    public ProdutoDesconto(String nome, float preco, int quantidade, int desc) {
        super(nome, preco, quantidade);
        this.desc = verificar(desc);
        this.valorComDesc = calcDesc(this.desc, this.getPreco());
    }
    
    private int verificar (int desc){
        if(desc < 0 || desc > 50){
            throw new IndexOutOfBoundsException("Desconto não pode ser menor que Zero ou maior que 50%");
        }
       return desc;
    }
    private float calcDesc(int desc, float preco){
        float desconto = (100-desc)/ 100.0f;
        float valor = preco * desconto;
        return valor;
    }
    
    public int getDesc() {
        return desc;
    }
    
    public void setDesc(int desc) {
        this.desc = verificar(desc);
        setValorComDesc(calcDesc(this.desc, this.getPreco()));
    }
    
    public float getValorComDesc() {
        return valorComDesc;
    }
    
    private void setValorComDesc(float valorComDesc) {
        this.valorComDesc = valorComDesc;
    }
}
