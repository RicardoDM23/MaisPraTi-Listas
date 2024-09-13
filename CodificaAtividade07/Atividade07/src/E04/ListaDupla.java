package E04;

public class ListaDupla {
    Node head;
    Node tail;
    Node current;
    
    class Node {
        Acao acao;
        Node prev;
        Node next;
        
        public Node(Acao acao) {
            this.acao = acao;
        }
    }
    public ListaDupla() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }
    
    public void add(Acao acao) {
        Node newNode = new Node(acao);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
        current = tail;
    }

    public Acao undo() {
        if (current == null) {
            System.out.println("Nada para desfazer.");
            return null;
        }
        Acao acaoUn = current.acao;
        current = current.prev;
        return acaoUn;
    }
    
    public Acao remake() {
        if (current == null || current.next == null) {
            System.out.println("Nada para refazer.");
            return null;
        }
        current = current.next;
        return current.acao;
    }
    public int size(){
        int count = 0;
        Node current = this.head;
        
        while(current != null){
            count++;
            current = current.next;
        }
        return count;
    }
    
}
