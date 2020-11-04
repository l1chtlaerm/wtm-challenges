const assert = require("assert");
const amigosEnComun = require("../lib/facebook");

let amigosDePablo = ["Carlos", "Roberto", "Mimi", "Yoselin"]
let amigosDeFernanda = ["Roberto", "Fernando", "José", "Mimi"]
let solucion = ["Roberto", "Mimi"]

describe("amigosEnComun", () => {
  it("Debe retornar un array con los amigos en común de ambas personas", () => {
    assert.deepStrictEqual(amigosEnComun(amigosDeFernanda, amigosDePablo), solucion);
  });
});
