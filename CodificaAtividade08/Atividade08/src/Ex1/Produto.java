package Ex1;

public class Produto {
    
    private String nome;
    private float preco;
    private int quantidade;
    
    public Produto(String nome) {
        this.nome = nome;
        this.preco = 0;
        this.quantidade = 0;
    }
    
    public Produto(String nome, float preco, int quantidade) {
        this.nome = nome;
        this.preco = verificaPreco(preco);
        this.quantidade = verificaQtd(quantidade);
    }
    
    private float verificaPreco(float preco){
        if(preco >= 0){
            return preco;
        }else{
            throw new IndexOutOfBoundsException("Produto: "+this.nome + " o preço não pode ser negativo!");
        }
    }
    private int verificaQtd(int qtd){
        if(qtd >= 0){
            return qtd;
        }else{
            throw new IndexOutOfBoundsException("Produto: "+this.nome + " a quantidade não pode ser negativa!");
        }
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public float getPreco() {
        return preco;
    }
    public void setPreco(float preco) {
        if(preco > 0){
            this.preco = preco;
        }else{
            System.out.println(this.nome + " O valor do produto deve ser positivo!");
        }
        
    }
    public int getQuantidade() {
        return quantidade;
    }
    
    public void setQuantidade(int quantidade) {
        if(quantidade > 0){
            this.quantidade = quantidade;
        }else{
            System.out.println(this.nome + " A quantidade deve ser positiva!");
        }
    }
}
