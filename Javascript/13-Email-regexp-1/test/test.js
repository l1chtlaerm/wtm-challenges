const assert = require("assert");
const emailValido = require("../lib/email_valido");

describe("emailValido", () => {
  it("debe retornar 'false' para un string vacío", () => {
    assert.strictEqual(emailValido(''), false);
  });

  it("debe retornar 'false' si no contiene una @", () => {
    assert.strictEqual(emailValido('pablo.worldtechmakers.com'), false);
  });

  it("debe retornar 'false' si la extensión es demasiado corta", () => {
    assert.strictEqual(emailValido('pablo@worldtechmakers.o'), false);
  });

  it("debe retornar 'false' si no hay nada antes de la @", () => {
    assert.strictEqual(emailValido('@worldtechmakers.org'), false);
  });

  it("debe retornar 'false' si no hay un punto en el dominio", () => {
    assert.strictEqual(emailValido('pablo@worldtechmakers'), false);
  });

  it("debe retornar 'true' para un email sencillo válido", () => {
    assert.strictEqual(emailValido('pablo@worldtechmakers.org'), true);
  });

  it("debe retornar 'true' para un email válido más complejo", () => {
    assert.strictEqual(emailValido('i.milkes84@worldtechmakers.co'), true);
  });
});
