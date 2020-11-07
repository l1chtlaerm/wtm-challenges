const assert = require("assert");
const modulo = require("../lib/numero_a_string");
const numeroAString = modulo.numeroAString
const stringANumero = modulo.stringANumero

describe("numero_a_string", () => {
  it("Debe retornar la conversión del número a un número, pero string", () => {
    assert.strictEqual(numeroAString(2), "2");
  });
});

describe("string_a_numero", () => {
  it("Debe retornar la conversión inversa al caso anterior", () => {
    assert.strictEqual(stringANumero("2"), 2);
  });
});