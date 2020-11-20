let perro = {}

class Gato {
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }
}

function capitalizar(palabra) {
    return palabra.toUpperCase();
}

perro.nombre = "Firulais"

module.exports = { perro, Gato, capitalizar };