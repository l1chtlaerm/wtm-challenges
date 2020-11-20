const assert = require("assert");
const modulos = require("../lib/cubos-cuboides");
const Cuboide = modulos.Cuboide;
const Cubo = modulos.Cubo;


describe("class Cuboide", _ => {
  it("debe inicializarse correctamente y tener getters para volumen y superficie", () => {
    var cuboid = new Cuboide(1, 2, 3);
    assert.deepStrictEqual(cuboid._base, 1);
    assert.deepStrictEqual(cuboid._profundidad, 2);
    assert.deepStrictEqual(cuboid._altura, 3);
    assert.deepStrictEqual(cuboid.volumen, 6);
    assert.deepStrictEqual(cuboid.superficie, 22);
    cuboid._base = 4;
    assert.deepStrictEqual(cuboid.volumen, 24);
    assert.deepStrictEqual(cuboid.superficie, 52);
    cuboid._profundidad = 5;
    assert.deepStrictEqual(cuboid.volumen, 60);
    assert.deepStrictEqual(cuboid.superficie, 94);
    cuboid._altura = 6;
    assert.deepStrictEqual(cuboid.volumen, 120);
    assert.deepStrictEqual(cuboid.superficie, 148);
    [cuboid._base, cuboid._profundidad, cuboid._altura] = [7, 8, 9];
    assert.deepStrictEqual(cuboid.volumen, 504);
    assert.deepStrictEqual(cuboid.superficie, 382);
  });
});

describe("Cubo", () => {
  it("debe heredar todo salvo el constructor de la clase padre", () => {
    assert.deepStrictEqual( Object.getOwnPropertyNames(Cubo.prototype), ["constructor"]); 
});
  it("debe inicializarse correctamente y tener los mismos getters que la clase padre", () => {
    var cube = new Cubo(1);
    assert.deepStrictEqual(cube._base, 1);
    assert.deepStrictEqual(cube._profundidad, 1);
    assert.deepStrictEqual(cube._altura, 1);
    assert.deepStrictEqual(cube.volumen, 1);
    assert.deepStrictEqual(cube.superficie, 6);
    cube._base = cube._profundidad = cube._altura = 2;
    assert.deepStrictEqual(cube.volumen, 8);
    assert.deepStrictEqual(cube.superficie, 24);
    cube._base = cube._profundidad = cube._altura = 3;
    assert.deepStrictEqual(cube.volumen, 27);
    assert.deepStrictEqual(cube.superficie, 54);
    cube._base = cube._profundidad = cube._altura = 5;
    assert.deepStrictEqual(cube.volumen, 125);
    assert.deepStrictEqual(cube.superficie, 150);
    cube._base = cube._profundidad = cube._altura = 10;
    assert.deepStrictEqual(cube.volumen, 1000);
    assert.deepStrictEqual(cube.superficie, 600);
  });
});