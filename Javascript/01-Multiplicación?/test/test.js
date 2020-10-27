const assert = require("assert");
const multiplicacion = require("../lib/multiplicacion");

describe("multiplicacion", () => {
  it("Debe retornar el resultado entre ambos numeros", () => {
    assert.strictEqual(multiplicacion(2, 3), 6);
  });
});
