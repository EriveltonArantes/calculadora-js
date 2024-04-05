// Classe de Abstração (Classe Base)
class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }

    fazerSom() {
        // Método abstrato para fazer som (será implementado pelas subclasses)
    }

    toString() {
        return `${this.nome} (${this.especie})`;
    }
}

// Classes Herdeiras
class Cachorro extends Animal {
    fazerSom() {
        return "Au au!";
    }
}

class Gato extends Animal {
    fazerSom() {
        return "Miau!";
    }
}

class Passaro extends Animal {
    fazerSom() {
        return "bem-te-vi!";
    }
}

// Instâncias de Objetos
const rex = new Cachorro("Rex", "Cachorro");
const whiskers = new Gato("Whiskers", "Gato");
const passaro = new Passaro("passaro", "Passaro");

// Exibindo informações sobre os animais
console.log(rex.toString());  // Saída: Rex (Cachorro)
console.log(whiskers.toString());  // Saída: Whiskers (Gato)
console.log(passaro.toString());  // Saída: passaro (Passaro)

// Fazendo os animais emitirem sons
console.log(rex.fazerSom());  // Saída: Au au!
console.log(whiskers.fazerSom());  // Saída: Miau!
console.log(passaro.fazerSom());  // Saída: bem-te-vi!
