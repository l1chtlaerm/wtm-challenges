const assert = require("assert");
const modulo = require("../lib/array_to_object");
const conversion = modulo.conversion;
const keyConverter = modulo.keyConverter;
const keyMultiplier = modulo.keyMultiplier;


describe("conversion", () => {
  it("Debe convertir correctamente un array a objeto según lo solicitado", () => {
    assert.deepStrictEqual(conversion(["Pablo", "Rafa", "Yuli", "Mabel"]), {0: "Pablo", 1: "Rafa", 2: "Yuli", 3: "Mabel"});
  })
});

describe("conversion con callback", () => {
  it("Debe convertir correctamente un array a objeto cuando se pasa keyConverter como callback en la función", () => {
    assert.deepStrictEqual(conversion(["Pablo", "Rafa", "Yuli", "Mabel"], keyConverter), {"key#0": "Pablo", "key#1": "Rafa", "key#2": "Yuli", "key#3": "Mabel"});
  })
  it("Debe convertir correctamente un array a objeto cuando se pasa keyMultiplier como callback en la función", () => {
    assert.deepStrictEqual(conversion(["Pablo", "Rafa", "Yuli", "Mabel"], keyMultiplier), {0: "Pablo", 2: "Rafa", 4: "Yuli", 6: "Mabel"});
  })
});
