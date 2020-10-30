const assert = require("assert");
const debeVotar = require("../lib/edad_votacion");

describe("debeVotar", () => {
  it("Una persona de 16 años no puede votar", () => {
    assert.strictEqual(debeVotar(16), "No puede votar");
  });

  it("Una persona de 18 años debe votar", () => {
    assert.strictEqual(debeVotar(18), "Es obligatorio votar");
  });

  it("Una persona de 24 años debe votar", () => {
    assert.strictEqual(debeVotar(24), "Es obligatorio votar");
  });

  it("Una persona de 81 años puede votar, pero no es obligatorio", () => {
    assert.strictEqual(debeVotar(81), "No es obligatorio votar");
  });
});
