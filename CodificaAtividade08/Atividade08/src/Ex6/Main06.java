package Ex6;

import Ex5.IMeioTransporte;

import java.util.ArrayList;
import java.util.List;

public class Main06 {
    public static void main(String[] args) {
        Cachorro cachorro = new Cachorro();
        Gato gato = new Gato();
        Vaca vaca = new Vaca();
        
        ArrayList<Animal> animais = new ArrayList<>();
        animais.add(cachorro);
        animais.add(gato);
        animais.add(vaca);
        
        for (Animal animal : animais) {
            animal.emitirSom();
        }
        
    }
}
