const assert = require("assert");
const sumaNegativos = require("../lib/suma_negativos");

describe("sumaNegativos", () => {
  it("debe retornar 0 para un array vacio", () => {
    assert.strictEqual(sumaNegativos([]), 0);
  });

  it("debe retornar 0 si no hay números negativos", () => {
    assert.strictEqual(sumaNegativos([0, 3, 18]), 0);
  });

  it("debe retornar -1 para el array [0, -1, 1]", () => {
    assert.strictEqual(sumaNegativos([0, -1, 1]), -1);
  });

  it("debe retornar -100 para el array [-30, -40, 20, 18, -12, -18]", () => {
    assert.strictEqual(sumaNegativos([-30, -40, 20, 18, -12, -18]), -100);
  });
});
