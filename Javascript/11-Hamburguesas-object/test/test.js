const assert = require("assert");
const modulo = require("../lib/fast-food");
const fastFood = modulo.fastFood;
const fastFood2 = modulo.fastFood2;


describe("fastFood", () => {
  it("Debe devolver las calorías adecuadas para una hamburguesa, unas papas fritas y una coca cola", () => {
    assert.deepStrictEqual(fastFood("Hamburguesa", "Papas Fritas", "Coca Cola"), 950);
  })
  it("Debe devolver las calorías adecuadas para una hamburguesa con queso, unas batatas fritas y una sprite", () => {
    assert.deepStrictEqual(fastFood("Hamburguesa con Queso", "Batatas Fritas", "Sprite"), 1070);
  })
});

describe("fastFood2", () => {
  it("Debe devolver las calorías adecuadas para los menúes provistos", () => {
    assert.deepStrictEqual(fastFood2(["Hamburguesa", "Menú Saludable", "Sprite", "Menú de Pollo"]), [500, 560, 120, 920]);
  })
  it("Debe devolver las calorías adecuadas para los menúes provistos", () => {
    assert.deepStrictEqual(fastFood2(["Nuggets de Pollo", "Cajita Feliz", "Batatas Fritas", "Hamburguesa", "Menú de Pollo"]), [400, 1000, 400, 500, 920]);
  })
});