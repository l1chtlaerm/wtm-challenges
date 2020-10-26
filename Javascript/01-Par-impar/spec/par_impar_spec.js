const assert = require("assert");
const parImpar = require("../lib/par_impar");

describe("parImpar", () => {
  describe("Test básicos", () => {
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
  })
  describe("Bonus", () => {
    it("debe devolver 'no es un numero' si la función recibe un String", () => {
      assert.strictEqual(parImpar("abc"), 'no es un numero');
    });
    it("debe devolver 'no es un numero' si la función recibe un Boolean", () => {
      assert.strictEqual(parImpar(true), 'no es un numero');
    });
    it("debe devolver 'no es un numero' si la función recibe un 'numero' ;)", () => {
      assert.strictEqual(parImpar("123"), 'no es un numero');
    });
  })
});
