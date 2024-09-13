package E05;

class Carta {
    String nome;
    
    public Carta(String nome) {
        this.nome = nome;
    }
    
    @Override
    public String toString() {
        return nome;
    }
}

class Node {
    Carta carta;
    Node prev;
    Node next;
    
    public Node(Carta carta) {
        this.carta = carta;
    }
}

class MaoJogador {
    Node head;
    Node tail;
    
    public MaoJogador() {
        head = null;
        tail = null;
    }
    public void addCarta(Carta carta) {
        Node newNode = new Node(carta);
        if (head == null) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }
    public void removeCarta(String nomeCarta) {
        Node current = head;
        while (current != null) {
            if (current.carta.nome.equals(nomeCarta)) {
                if (current == head) {
                    head = current.next;
                } else {
                    current.prev.next = current.next;
                }
                if (current == tail) {
                    tail = current.prev;
                } else {
                    current.next.prev = current.prev;
                }
                System.out.println("Carta removida: " + nomeCarta);
                return;
            }
            current = current.next;
        }
        System.out.println("Carta não encontrada!");
    }

    public void exibirCartas() {
        Node current = head;
        if (current == null) {
            System.out.println("Mão está vazia.");
        } else {
            System.out.println("Cartas na mão:");
            while (current != null) {
                System.out.println(current.carta);
                current = current.next;
            }
        }
    }
    public void moverCartaParaFinal(String nomeCarta) {
        Node current = head;
        while (current != null) {
            if (current.carta.nome.equals(nomeCarta)) {
                if (current == head) {
                    head = current.next;
                } else {
                    current.prev.next = current.next;
                }
                if (current == tail) {
                    tail = current.prev;
                } else {
                    current.next.prev = current.prev;
                }
                tail.next = current;
                current.prev = tail;
                current.next = null;
                tail = current;
                System.out.println("Carta movida para o final: " + nomeCarta);
                return;
            }
            current = current.next;
        }
        System.out.println("Carta não encontrada!");
    }
}
