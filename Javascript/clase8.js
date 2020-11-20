/* let gato = {
    _nombre: "Bigotes",
    _comportamiento: null,
    _edad: 4,
    
    get nombre() {
        return this._nombre;
    },

    get comportamiento() {
        return this._comportamiento;
    }
}

class Gato {
    constructor(nombre, edad, comportamiento = null) {
        this._nombre = nombre;
        this._comportamiento = comportamiento;
        this._edad = edad;
    }
    
    get nombre() {
        return this._nombre;
    }

    get comportamiento() {
        return this._comportamiento;
    }

    set comportamiento(nuevo) {
        this._comportamiento = nuevo.toUpperCase();
    }
}


class Perro {
    constructor(nombre, edad, comportamiento = null) {
        this._nombre = nombre;
        this._comportamiento = comportamiento;
        this._edad = edad;
    }
    
    get nombre() {
        return this._nombre;
    }

    get comportamiento() {
        return this._comportamiento;
    }

    set comportamiento(nuevo) {
        this._comportamiento = nuevo.toUpperCase();
    }

    get saludo {
        return `Soy ${this._nombre}, woof woof!`
    }
}

Dont Repeat Yourself // NO SE REPITAN

const gatoClass = new Gato("Silvestre", 4);

console.log(gatoClass.nombre);

gatoClass.comportamiento = "Salvaje";

console.log(gatoClass.comportamiento);

const nombre = new String("Juan");

const gato2 = new Gato("Luli", 8, "Cariñosa");

console.log(gato2.comportamiento);

class Animal {
    constructor(nombre, edad, comportamiento = null) {
        this._nombre = nombre;
        this._comportamiento = comportamiento;
        this._edad = edad;
    }
    
    get nombre() {
        return this._nombre;
    }

    get comportamiento() {
        return this._comportamiento;
    }

    set comportamiento(nuevo) {
        this._comportamiento = nuevo.toUpperCase();
    }

    static comportamientoAleatorio() {
        const comportamientos = ["Salvaje", "Dormilón", "Cariñoso", "Gordo"];
        const randomNumber = Math.floor(Math.random()*3.99);
        return comportamientos[randomNumber];
    }
}

class Mamifero extends Animal {

}

class Ave extends Animal {

}

class GatoChild extends Mamifero {
    constructor(nombre, edad, usaLitera, comportamiento = null) {
        super(nombre, edad, comportamiento);
        this._usaLitera = usaLitera;
    }

    get usaLitera() {
        return this._usaLitera;
    }
}


class PerroChild extends Mamifero {
    get saludo() {
        return `Soy ${this._nombre}, woof woof!`
    }
}


const gatoHeredado = new GatoChild("Silvestre", 4, true);
const perroHeredado = new PerroChild("India", 4, Animal.comportamientoAleatorio())

console.log(gatoHeredado.usaLitera);
console.log(perroHeredado.saludo);
console.log(perroHeredado.comportamiento);

En resumen:

- Las clases (class) son plantillas para instanciar objetos que hereden de ellas
- Para instanciar un objeto que herede de una clase, tenemos un método constructor, que recibe las variables de la instancia
- Inheritance o herencia hace referencia a cuando utilizamos una clase padre (o parent o superclass) con propiedades y métodos que se pueden extender a las clases hijo (o child of subclass)
- Para crear subclases, utilizamos la palabra clave extends
- La palabra clave super se utiliza para llamar al constructor de la clase padre. Puede obviarse si el constructor es idéntico en padre e hijo
- Los métodos estáticos (static) se utilizan directamente sobre la clase, pero no sobre las instancias de la clase

*/


