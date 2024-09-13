package E04;

public class Editor {
    StringBuilder texto;
    ListaDupla listaAcoes;
    
    public Editor() {
        texto = new StringBuilder();
        listaAcoes = new ListaDupla();
    }

    public void addText(String novoTexto, int posicao) {
        if(posicao > 0 && listaAcoes.size() == 0){
            posicao = 0;
        }
        texto.insert(posicao, novoTexto);
        listaAcoes.add(new Acao("inserir", novoTexto, posicao));
        System.out.println("Texto após inserção: " + texto.toString());
    }

    public void removeText(int posicao, int comprimento) {
        String textoRemovido = texto.substring(posicao, posicao + comprimento);
        texto.delete(posicao, posicao + comprimento);
        listaAcoes.add(new Acao("remover", textoRemovido, posicao));
        System.out.println("Texto após remoção: " + texto.toString());
    }

    public void undoAcao() {
        Acao ultimaAcao = listaAcoes.undo();
        if (ultimaAcao == null) {
            return;
        }
        
        if (ultimaAcao.type.equals("inserir")) {
            texto.delete(ultimaAcao.position, ultimaAcao.position + ultimaAcao.text.length());
            System.out.println("Texto após desfazer inserção: " + texto.toString());
        } else if (ultimaAcao.type.equals("remover")) {
            texto.insert(ultimaAcao.position, ultimaAcao.text);
            System.out.println("Texto após desfazer remoção: " + texto.toString());
        }
    }
}
