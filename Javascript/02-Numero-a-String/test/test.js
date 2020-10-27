const assert = require("assert");
const numero_a_string = require("../lib/numero_a_string");

describe("numero_a_string", () => {
  it("Debe retornar la conversión del número a un número, pero string", () => {
    assert.strictEqual(numero_a_string(2), "2");
  });
});

describe("string_a_numero", () => {
  it("Debe retornar la conversión inversa al caso anterior", () => {
    assert.strictEqual(numero_a_string("2"), 2);
  });
});