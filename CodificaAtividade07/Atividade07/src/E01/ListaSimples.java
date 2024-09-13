package E01;

public class ListaSimples {
    private Node head;
    private static class Node {
        String data;
        Node next;
        Node(String data){
            this.data = data;
            this.next = null;
        }
    }
    public ListaSimples(){
        this.head = null;
    }
    public void add(String data){
        Node newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
        } else {
            Node current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    public String get (int index){
        Node current = this.head;
        int count = 0;
        
        while(current != null){
            if(count == index){
                return current.data;
            }
            count++;
            current = current.next;
        }
        throw new IndexOutOfBoundsException("Index inválido.");
    }
    public void remove(int index){
        Node current = this.head;
        
        if(this.head == null){
            throw new IndexOutOfBoundsException("Index inválido.");
        }
        if(index == 0){
            this.head = this.head.next;
            return;
        }
        int count = 0;
        Node previous = null;
        
        while (current != null && count < index){
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = current.next;
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
    public boolean isEmpty(){
        return this.head == null;
    }
    public void edit(int index){
        Node current = this.head;
        
        if(this.head == null){
            throw new IndexOutOfBoundsException("Index inválido.");
        }
        int count = 0;
        while (current != null && count < index){
            current = current.next;
            count++;
        }
        current.data += " (Concluido)";
    }
}
