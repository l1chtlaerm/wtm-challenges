const modulos = require("./lib/modulos.js");
const perro = modulos.perro
const Gato = modulos.Gato
const capitalizar = modulos.capitalizar

function mostrarPerro() {
    console.log(perro.nombre)
}

let gato = new Gato("Luli", 8)

console.log(capitalizar(gato._nombre))

mostrarPerro()


/*

Los módulos son porciones de código reutilizables que sep eueden exportar de un programa para ser importados en otro programa para su uso
Node.js:
module.exports << exportar objetos, clases, funciones
require("direccion_del_archivo") << importar todo lo que fue exportado en ese archivo

ECMAScript 6 y 7:
export default para exportar objetos, funciones y tipos de dato primitivo
export para exportar datos en variables con nombre
también se puede colocar un alias para los exports utilizando la palabra "as"
import

*/