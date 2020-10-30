const assert = require("assert");
const mayorMenor = require("../lib/mayor_menor");

describe("mayorMenor", () => {
  it("debe retornar 4 para 1 y 4", () => {
    assert.strictEqual(mayorMenor(1, 4), 4);
  });

  it("debe retornar 9 para 9 y 4", () => {
    assert.strictEqual(mayorMenor(9, 4), 9);
  });

  it("debe retornar 'son iguales' para 7 y 7", () => {
    assert.strictEqual(mayorMenor(7, 7), 'son iguales');
  });
});
