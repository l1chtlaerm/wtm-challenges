const assert = require("assert");
const modulos = require("../lib/herencia");
const Gato = modulos.Gato;
const Perro = modulos.Perro;
const Pez = modulos.Pez;


describe("Animal", () => {
  it("la clase Animal no debe estar presente en herencia (no hagan trampa :p)", () => {
    assert.deepStrictEqual(typeof Animal, "undefined");
  });
});

describe("Gato", () => {
  it("debe construir dos gatos correctamente", () => {
    let cathy = new Gato("Cathy", 7, "Jugando con una bola de lana");
    assert.deepStrictEqual(cathy.nombre, "Cathy");
    assert.deepStrictEqual(cathy.edad, 7);
    assert.deepStrictEqual(cathy.extremidades, 4);
    assert.deepStrictEqual(cathy.especie, "gato");
    assert.deepStrictEqual(cathy.estado, "Jugando con una bola de lana");
    assert.deepStrictEqual(cathy.presentacion(), `Soy ${cathy.nombre}, no necesito presentarme, aliméntame humano`);
    let spitsy = new Gato("Luli", 6, "Durmiendo");
    assert.deepStrictEqual(spitsy.nombre, "Luli");
    assert.deepStrictEqual(spitsy.edad, 6);
    assert.deepStrictEqual(spitsy.extremidades, 4);
    assert.deepStrictEqual(spitsy.especie, "gato");
    assert.deepStrictEqual(spitsy.estado, "Durmiendo");
    assert.deepStrictEqual(spitsy.presentacion(), `Soy ${spitsy.nombre}, no necesito presentarme, aliméntame humano`);
  });
});

describe("Perro", () => {
  it("debe construir un perro correctamente", () => {
    var doug = new Perro("Scooby", 12, "Gran Danés", "Resolviendo misterios", "Shaggy");
    assert.deepStrictEqual(doug.nombre, "Scooby");
    assert.deepStrictEqual(doug.edad, 12);
    assert.deepStrictEqual(doug.extremidades, 4);
    assert.deepStrictEqual(doug.especie, "Gran Danés");
    assert.deepStrictEqual(doug.estado, "Resolviendo misterios");
    assert.deepStrictEqual(doug.presentacion(), `Hola, me llamo Scooby, soy un Gran Danés y tengo 12 años.`);
    assert.deepStrictEqual(doug.saludarDueno(), "Hola Shaggy");
  });
});

describe("Pez", () => {
  it("debe construir dos peces correctamente", () => {
    var billy = new Pez("Mordelón", 3, "Tiburón", "Buscando surfistas");
    assert.deepStrictEqual(billy.nombre, "Mordelón");
    assert.deepStrictEqual(billy.edad, 3);
    assert.deepStrictEqual(billy.extremidades, 0);
    assert.deepStrictEqual(billy.especie, "Tiburón");
    assert.deepStrictEqual(billy.estado, "Buscando surfistas");
    assert.deepStrictEqual(billy.presentacion(), `Hola, me llamo Mordelón, soy un Tiburón y tengo 3 años.`);
    var charles = new Pez("Nemo", 2, "Pez Payaso", "Buscando a mi padre");
    assert.deepStrictEqual(charles.nombre, "Nemo");
    assert.deepStrictEqual(charles.edad, 2);
    assert.deepStrictEqual(charles.extremidades, 0);
    assert.deepStrictEqual(charles.especie, "Pez Payaso");
    assert.deepStrictEqual(charles.estado, "Buscando a mi padre");
    assert.deepStrictEqual(charles.presentacion(), `Hola, me llamo Nemo, soy un Pez Payaso y tengo 2 años.`);
  });
});
