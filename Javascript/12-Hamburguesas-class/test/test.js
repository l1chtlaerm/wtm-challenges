const assert = require("assert");
const Combo = require("../lib/hamburguesas");

describe("Combo", () => {
  it("Las instancias de Combo deben tener una propiedad 'descripcion' que devuelva 'Hamburguesa' si no se pasa un parámetro", () => {
    assert.deepStrictEqual(new Combo().descripcion, "Hamburguesa");
  });
  it("Una instancia de Combo que haya recibido 'Coca Cola y Papas Grandes' debe incluirlo en descripcion", () => {
    assert.deepStrictEqual(new Combo("Coca Cola y Papas Grandes").descripcion, "Hamburguesa Con Coca Cola y Papas Grandes");
  });
});
