const assert = require("assert");
const parImpar = require("../lib/par_impar");

describe("parImpar", () => {
  it("debe devolver 'par' para 0", () => {
    assert.strictEqual(parImpar(0), 'par');
  });
  it("debe devolver 'impar' para 1", () => {
    assert.strictEqual(parImpar(1), 'impar');
  });
  it("debe devolver 'par' para 2", () => {
    assert.strictEqual(parImpar(2), 'par');
  });
  it("debe devolver 'impar' para 1337", () => {
    assert.strictEqual(parImpar(1337), 'impar');
  });
});
