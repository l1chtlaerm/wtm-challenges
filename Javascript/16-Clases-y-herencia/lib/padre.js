class Animal {
    constructor(nombre, edad, extremidades, especie, estado) {
      this.nombre = nombre;
      this.edad = edad;
      this.extremidades = extremidades;
      this.especie = especie;
      this.estado = estado;
    }
    presentacion() {
      return `Hola, me llamo ${this.nombre}, soy un ${this.especie} y tengo ${this.edad} años.`;
    }
  }
